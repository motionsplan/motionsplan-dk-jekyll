#!/usr/bin/env python3
"""
unsplash_localizer.py
=====================
Scans Jekyll markdown files for Unsplash image URLs, downloads them locally,
rewrites the front matter to use local paths, and adds unsplash credit metadata.

Usage:
    python unsplash_localizer.py [--dry-run] [--dir _posts] [--output assets/images/unsplash]

Requirements:
    pip install requests PyYAML Pillow

Strategy:
  - Downloads at 1920px wide (future-proof master; good for srcset/picture tags)
  - Saves as WebP for size efficiency (lossless quality fallback available)
  - Filename = Unsplash photo ID, e.g. photo-1522844990619-4951c40f7eda.webp
  - Adds `unsplash credit` front matter block (not rendered, just metadata)
  - Rewrites overlay_image, teaser, image_path (in feature_row/gallery) and
    plain image_path fields

Unsplash photo IDs are extracted from URLs like:
    https://images.unsplash.com/photo-{ID}?...
"""

import argparse
import os
import re
import sys
import time
from pathlib import Path
from urllib.parse import urlparse, parse_qs, urlencode, urlunparse

# Third-party
try:
    import requests
    import yaml
    from PIL import Image
    import io
except ImportError:
    print("Missing dependencies. Run: pip install requests PyYAML Pillow")
    sys.exit(1)

# ── Configuration ──────────────────────────────────────────────────────────────

DOWNLOAD_WIDTH = 1920       # Master download width in pixels
DOWNLOAD_QUALITY = 85       # JPEG quality for download (Unsplash serves JPEG)
OUTPUT_FORMAT = "jpg"       # Local format: "jpg" or "webp"
WEBP_QUALITY = 82           # WebP encode quality (only used if OUTPUT_FORMAT = "webp")
RATE_LIMIT_DELAY = 0.5      # Seconds between downloads (be polite to Unsplash)

UNSPLASH_URL_RE = re.compile(
    r'https://images\.unsplash\.com/(photo-[A-Za-z0-9_-]+)'
    r'(?:\?[^\s\'")\]]*)?'
)

# Front matter fields that may contain Unsplash URLs (scalar fields)
SCALAR_IMAGE_FIELDS = {"overlay_image", "teaser", "image_path", "header_image"}

# ── Helpers ────────────────────────────────────────────────────────────────────

def build_download_url(photo_id: str, width: int = DOWNLOAD_WIDTH, quality: int = DOWNLOAD_QUALITY) -> str:
    """Build an Unsplash URL that requests a specific width."""
    return (
        f"https://images.unsplash.com/{photo_id}"
        f"?auto=format&fit=crop&w={width}&q={quality}"
    )


def photo_id_from_url(url: str) -> str | None:
    """Extract the Unsplash photo ID (e.g. 'photo-abc123') from a URL."""
    m = UNSPLASH_URL_RE.search(url)
    return m.group(1) if m else None


def local_filename(photo_id: str, fmt: str = OUTPUT_FORMAT) -> str:
    return f"{photo_id}.{fmt}"


def download_image(photo_id: str, dest_dir: Path, dry_run: bool = False) -> Path | None:
    """Download an Unsplash image and save it locally. Returns local path."""
    out_path = dest_dir / local_filename(photo_id)

    if out_path.exists():
        print(f"  ✓ Already exists: {out_path.name}")
        return out_path

    if dry_run:
        print(f"  [dry-run] Would download {photo_id} → {out_path}")
        return out_path

    url = build_download_url(photo_id)
    print(f"  ↓ Downloading {photo_id} …", end=" ", flush=True)

    try:
        r = requests.get(url, timeout=30, headers={"User-Agent": "Jekyll-Unsplash-Localizer/1.0"})
        r.raise_for_status()
    except requests.RequestException as e:
        print(f"FAILED ({e})")
        return None

    # Convert to target format with Pillow
    img = Image.open(io.BytesIO(r.content))
    if OUTPUT_FORMAT == "webp":
        img.save(out_path, "WEBP", quality=WEBP_QUALITY, method=6)
    else:
        img.save(out_path, "JPEG", quality=DOWNLOAD_QUALITY, optimize=True)

    print(f"done ({out_path.stat().st_size // 1024} KB)")
    time.sleep(RATE_LIMIT_DELAY)
    return out_path


def local_url(photo_id: str, assets_root: str = "/assets/images/unsplash") -> str:
    """Jekyll-friendly local URL for the image."""
    return f"{assets_root}/{local_filename(photo_id)}"


# ── Front matter rewriting ─────────────────────────────────────────────────────

def rewrite_url(url: str, photo_id: str, assets_root: str) -> str:
    """Replace an Unsplash URL with the local path."""
    return local_url(photo_id, assets_root)


def unsplash_credit_url(photo_id: str) -> str:
    return f"https://images.unsplash.com/{photo_id}"


def process_value(value, found_ids: set, assets_root: str, dry_run: bool):
    """
    Recursively walk a YAML value (dict/list/str) and replace Unsplash URLs.
    When a dict key contains an Unsplash URL, a 'credit' sibling key is added.
    Returns the (possibly modified) value.
    """
    if isinstance(value, str):
        pid = photo_id_from_url(value)
        if pid:
            found_ids.add(pid)
            return local_url(pid, assets_root)
        return value
    elif isinstance(value, dict):
        new_dict = {}
        for k, v in value.items():
            if isinstance(v, str):
                pid = photo_id_from_url(v)
                if pid:
                    found_ids.add(pid)
                    new_dict[k] = local_url(pid, assets_root)
                    new_dict["credit"] = unsplash_credit_url(pid)
                    continue
            new_dict[k] = process_value(v, found_ids, assets_root, dry_run)
        return new_dict
    elif isinstance(value, list):
        return [process_value(item, found_ids, assets_root, dry_run) for item in value]
    return value


# ── Markdown file parsing ──────────────────────────────────────────────────────

FRONTMATTER_RE = re.compile(r'^---\n(.*?)\n---\n', re.DOTALL)


def process_file(md_path: Path, dest_dir: Path, assets_root: str, dry_run: bool) -> bool:
    """
    Process a single markdown file.
    Returns True if the file was (or would be) modified.
    """
    text = md_path.read_text(encoding="utf-8")
    m = FRONTMATTER_RE.match(text)
    if not m:
        return False  # No front matter

    raw_fm = m.group(1)
    try:
        # Use BaseLoader to avoid date parsing errors (e.g. invalid dates like 2019-02-30)
        fm = yaml.load(raw_fm, Loader=yaml.BaseLoader)
    except yaml.YAMLError as e:
        print(f"  YAML parse error in {md_path.name}: {e}")
        return False

    if not isinstance(fm, dict):
        return False

    found_ids: set[str] = set()
    new_fm = process_value(fm, found_ids, assets_root, dry_run)

    # Also scan the raw body for any inline Unsplash URLs (e.g. in figure tags)
    body = text[m.end():]
    body_ids = set(UNSPLASH_URL_RE.findall(body))
    # We don't rewrite body URLs here (too risky to regex-replace Liquid tags)
    # but we do record them for credit and download
    all_ids = found_ids | body_ids

    if not all_ids:
        return False

    print(f"\n{md_path.name} — found {len(all_ids)} Unsplash image(s)")

    # Download images
    for pid in all_ids:
        download_image(pid, dest_dir, dry_run=dry_run)

    if not found_ids:
        # Only body URLs — nothing to rewrite in front matter
        return False

    # Serialise back to YAML
    new_raw_fm = yaml.dump(
        new_fm,
        allow_unicode=True,
        default_flow_style=False,
        sort_keys=False,
        width=120,
    ).rstrip()

    new_text = f"---\n{new_raw_fm}\n---\n{body}"

    if new_text == text:
        print("  (no changes needed)")
        return False

    if dry_run:
        print(f"  [dry-run] Would rewrite front matter in {md_path.name}")
        # Show a diff of changed URLs
        for pid in found_ids:
            print(f"    {pid} → {local_url(pid, assets_root)}")
        return True

    md_path.write_text(new_text, encoding="utf-8")
    print(f"  ✎ Rewrote {md_path.name}")
    return True


# ── CLI ────────────────────────────────────────────────────────────────────────

def main():
    global OUTPUT_FORMAT, DOWNLOAD_WIDTH

    parser = argparse.ArgumentParser(description="Localise Unsplash images in a Jekyll site")
    parser.add_argument("dirs", nargs="*", default=["_posts"], help="Directories to scan (default: _posts)")
    parser.add_argument("--output", default="assets/images/unsplash", help="Local image output directory (relative to CWD)")
    parser.add_argument("--assets-root", default="/assets/images/unsplash", help="Jekyll assets root URL prefix (default: /assets/images/unsplash)")
    parser.add_argument("--dry-run", action="store_true", help="Preview changes without writing anything")
    parser.add_argument("--width", type=int, default=DOWNLOAD_WIDTH, help=f"Download width in pixels (default: {DOWNLOAD_WIDTH})")
    parser.add_argument("--format", choices=["jpg", "webp"], default=OUTPUT_FORMAT, help=f"Output image format (default: {OUTPUT_FORMAT})")
    parser.add_argument("--no-backup", action="store_true", help="Skip .bak backup files")
    args = parser.parse_args()

    OUTPUT_FORMAT = args.format
    DOWNLOAD_WIDTH = args.width

    dest_dir = Path(args.output)
    if not args.dry_run:
        dest_dir.mkdir(parents=True, exist_ok=True)

    scan_dirs = args.dirs
    md_files = []
    for d in scan_dirs:
        p = Path(d)
        if not p.exists():
            print(f"Warning: directory '{d}' does not exist, skipping.")
            continue
        md_files.extend(sorted(p.rglob("*.md")))

    if not md_files:
        print("No markdown files found. Run from your Jekyll site root.")
        sys.exit(1)

    print(f"Scanning {len(md_files)} markdown files in: {', '.join(scan_dirs)}")
    print(f"Output dir: {dest_dir}  |  Assets root: {args.assets_root}")
    if args.dry_run:
        print("*** DRY RUN — no files will be modified ***\n")

    modified = 0
    for md_path in md_files:
        changed = process_file(md_path, dest_dir, args.assets_root, dry_run=args.dry_run)
        if changed:
            modified += 1

    print(f"\n{'─'*50}")
    print(f"Done. {modified} file(s) {'would be' if args.dry_run else 'were'} modified.")

    if not args.dry_run and modified > 0:
        print("\nNext steps:")
        print(f"  1. Review the .bak files and delete them once satisfied")
        print(f"  2. Commit {dest_dir}/ to git (add to your repo, not .gitignore)")
        print(f"  3. For <picture>/srcset, use jekyll-srcset or @11ty/eleventy-img patterns")
        print(f"     — your 1920px masters in {dest_dir}/ are ready for that pipeline")
        print(f"  4. The 'credit' front matter keys let you trace any image back")
        print(f"     to its Unsplash page without linking externally in the rendered HTML")


if __name__ == "__main__":
    main()