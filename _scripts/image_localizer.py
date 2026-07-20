#!/usr/bin/env python3
"""
image_localizer.py
==================
Scans Jekyll markdown files for ALL external image URLs, downloads them
locally into assets/images/<domain>/, rewrites URLs in-place (no YAML
parse/dump — raw text substitution only), and adds a `credit` field next
to each rewritten image key in front matter.

Usage:
    python3 image_localizer.py [--dry-run] [--format jpg|webp] [--skip domain] _posts _pages

Requirements:
    pip install requests PyYAML Pillow --break-system-packages
"""

import argparse
import hashlib
import io
import re
import sys
import time
from pathlib import Path
from urllib.parse import urlparse

try:
    import requests
    from PIL import Image
except ImportError:
    print("Missing dependencies. Run: pip install requests Pillow --break-system-packages")
    sys.exit(1)

# ── Configuration ──────────────────────────────────────────────────────────────

ASSETS_BASE      = "assets/images"
ASSETS_URL_BASE  = "/assets/images"
DOWNLOAD_QUALITY = 85
WEBP_QUALITY     = 82
RATE_LIMIT_DELAY = 0.3
REQUEST_TIMEOUT  = 30
MAX_FILE_SIZE    = 20 * 1024 * 1024  # 20 MB

OUTPUT_FORMAT = ""  # "" = keep original, "jpg" or "webp" to convert

SKIP_DOMAINS: set[str] = {
    "localhost",
    "motionsplan.dk",
    "partner-ads.com",
    "saxo.com",
}

IMAGE_EXTENSIONS = frozenset({
    ".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg", ".avif", ".bmp", ".tiff",
})

# Matches external image URLs, terminated by whitespace or YAML/Markdown delimiters
_EXT = r"\.(?:jpe?g|png|gif|webp|svg|avif|bmp|tiff)"
EXTERNAL_IMAGE_RE = re.compile(
    rf"https?://[^\s'\")\]>]+"
    rf"{_EXT}"
    rf"(?:\?[^\s'\")\]>]*)?",
    re.IGNORECASE,
)

FRONTMATTER_RE = re.compile(r"^---\r?\n(.*?)\r?\n---\r?\n", re.DOTALL)

# Matches {% include figure ... %} blocks
FIGURE_RE = re.compile(
    r"(\{%[-\s]*include\s+figure[^%]*?)"
    r"(\s*%\})",
    re.DOTALL,
)

# Global caches
_URL_CACHE: dict[str, str] = {}    # original URL → local jekyll URL (or "" if failed)
_FAILED_URLS: dict[str, str] = {}  # original URL → error reason

# ── Helpers ────────────────────────────────────────────────────────────────────

def domain_from_url(url: str) -> str:
    host = urlparse(url).netloc.lower()
    return host[4:] if host.startswith("www.") else host


def should_skip(url: str) -> bool:
    domain = domain_from_url(url)
    return any(domain == s or domain.endswith("." + s) for s in SKIP_DOMAINS)


def is_image_url(url: str) -> bool:
    path = urlparse(url).path.lower()
    return any(path.endswith(ext) for ext in IMAGE_EXTENSIONS)


def url_hash(url: str) -> str:
    return hashlib.md5(url.encode()).hexdigest()[:8]


def filename_for_url(url: str) -> str:
    path   = urlparse(url).path.rstrip("/")
    stem   = re.sub(r"[^\w\-]", "_", Path(path).stem or "image")[:80]
    suffix = Path(path).suffix.lower() or ".jpg"
    if OUTPUT_FORMAT and suffix not in {".svg", ".gif"}:
        suffix = f".{OUTPUT_FORMAT}"
    return f"{stem}-{url_hash(url)}{suffix}"


def local_dir(url: str) -> Path:
    return Path(ASSETS_BASE) / domain_from_url(url)


def jekyll_url_for(url: str, filename: str) -> str:
    return f"{ASSETS_URL_BASE}/{domain_from_url(url)}/{filename}"


# ── Download ───────────────────────────────────────────────────────────────────

def download_image(url: str, dry_run: bool = False) -> str | None:
    """Download url locally. Returns local Jekyll URL or None on failure."""
    if url in _URL_CACHE:
        cached = _URL_CACHE[url]
        if cached:
            print(f"  ✓ {Path(cached).name} (cached)")
        return cached or None

    if not is_image_url(url) or should_skip(url):
        return None

    filename = filename_for_url(url)
    dest_dir = local_dir(url)
    out_path = dest_dir / filename
    jurl     = jekyll_url_for(url, filename)

    if out_path.exists():
        print(f"  ✓ {filename} (already exists)")
        _URL_CACHE[url] = jurl
        return jurl

    if dry_run:
        print(f"  [dry-run] {url}")
        print(f"            → {out_path}")
        _URL_CACHE[url] = jurl
        return jurl

    dest_dir.mkdir(parents=True, exist_ok=True)
    print(f"  ↓ {domain_from_url(url)}/{filename} …", end=" ", flush=True)

    try:
        r = requests.get(
            url, timeout=REQUEST_TIMEOUT,
            headers={"User-Agent": "Jekyll-Image-Localizer/1.0"},
            allow_redirects=True, stream=True,
        )
        r.raise_for_status()
        content_length = int(r.headers.get("content-length", 0))
        if content_length > MAX_FILE_SIZE:
            reason = f"too large ({content_length // 1024 // 1024} MB)"
            print(f"SKIPPED ({reason})")
            _FAILED_URLS[url] = reason
            _URL_CACHE[url] = ""
            return None
        raw = r.content
    except requests.RequestException as e:
        reason = str(e)
        print(f"FAILED ({reason})")
        _FAILED_URLS[url] = reason
        _URL_CACHE[url] = ""
        return None

    content_type = r.headers.get("content-type", "")
    suffix = out_path.suffix.lower()
    is_svg = "svg" in content_type or suffix == ".svg"
    is_gif = "gif" in content_type or suffix == ".gif"

    if is_svg or is_gif or not OUTPUT_FORMAT:
        out_path.write_bytes(raw)
        print(f"done ({len(raw) // 1024} KB)")
    else:
        try:
            img = Image.open(io.BytesIO(raw))
            if OUTPUT_FORMAT == "jpg" and img.mode in ("RGBA", "P", "LA"):
                bg = Image.new("RGB", img.size, (255, 255, 255))
                if img.mode == "P":
                    img = img.convert("RGBA")
                bg.paste(img, mask=img.split()[-1] if img.mode == "RGBA" else None)
                img = bg
            if OUTPUT_FORMAT == "webp":
                img.save(out_path, "WEBP", quality=WEBP_QUALITY, method=6)
            else:
                img.save(out_path, "JPEG", quality=DOWNLOAD_QUALITY, optimize=True)
            print(f"done ({out_path.stat().st_size // 1024} KB)")
        except Exception as e:
            print(f"CONVERT FAILED ({e}) — saving raw")
            out_path.write_bytes(raw)

    time.sleep(RATE_LIMIT_DELAY)
    _URL_CACHE[url] = jurl
    return jurl


# ── Front matter rewriting (raw text, no YAML parse/dump) ─────────────────────

# Matches a YAML key: value line where value is an external image URL
# Captures: (indent)(key)(separator)(quote?)(url)(quote?)
YAML_IMAGE_LINE_RE = re.compile(
    r'^(?P<indent>\s*(?:-\s+)?)(?P<key>[^\s:]+)(?P<sep>:\s*)(?P<q>[\'"]?)(?P<url>https?://[^\s\'"]+' + _EXT + r'(?:\?[^\s\'"]*)?)'
    r'(?P=q)(?P<rest>.*)$',
    re.MULTILINE | re.IGNORECASE,
)


def rewrite_frontmatter(raw_fm: str, dry_run: bool) -> tuple[str, dict[str, str]]:
    """
    Rewrite external image URLs in raw front matter text.
    Adds a `credit: <original_url>` line after each rewritten line.
    Returns (new_raw_fm, replacements dict).
    """
    replacements: dict[str, str] = {}
    lines = raw_fm.splitlines(keepends=True)
    result = []
    i = 0
    while i < len(lines):
        line = lines[i]
        m = YAML_IMAGE_LINE_RE.match(line.rstrip("\n\r"))
        if m:
            orig_url = m.group("url")
            if not should_skip(orig_url) and is_image_url(orig_url):
                new_url = download_image(orig_url, dry_run=dry_run)
                if new_url:
                    replacements[orig_url] = new_url
                    # Rewrite the URL in-place, preserve everything else
                    new_line = line.replace(orig_url, new_url, 1)
                    result.append(new_line)
                    # Add credit line — strip list marker for sibling indent
                    indent = m.group("indent")
                    sibling_indent = re.sub(r'-\s+$', '  ', indent)
                    result.append(f"{sibling_indent}credit: {orig_url}\n")
                    i += 1
                    continue
        result.append(line)
        i += 1

    return "".join(result), replacements


# ── Body rewriting ─────────────────────────────────────────────────────────────

def _add_camera_credit(tag: str, orig_url: str) -> str:
    """Append [📷](orig_url){: rel='nofollow noopener' } to caption in a figure tag."""
    credit_md = f" [📷]({orig_url}){{: rel='nofollow noopener' }}"
    caption_re = re.compile(r'(caption=(["\']))(.*?)(\2)', re.DOTALL)
    m = caption_re.search(tag)
    if m:
        new_caption = m.group(1) + m.group(3).rstrip() + credit_md + m.group(4)
        return caption_re.sub(new_caption, tag, count=1)
    # No caption — add one before closing %}
    closing = 'caption="' + credit_md.strip() + '" %}\n'
    return tag.replace("%}", closing)


def rewrite_body(body: str, dry_run: bool) -> tuple[str, dict[str, str]]:
    """
    Rewrite external image URLs in markdown body.
    Figure tags get a 📷 credit appended to their caption.
    Returns (new_body, replacements dict).
    """
    replacements: dict[str, str] = {}

    # First pass: download all external image URLs found in body
    for url in set(EXTERNAL_IMAGE_RE.findall(body)):
        if should_skip(url) or not is_image_url(url):
            continue
        if url not in _URL_CACHE:
            new_url = download_image(url, dry_run=dry_run)
            if new_url:
                replacements[url] = new_url
        elif _URL_CACHE[url]:
            replacements[url] = _URL_CACHE[url]

    # Track which URLs appear as image_path in figure tags (credit link must stay external)
    figure_originals: set[str] = set()

    def rewrite_figure(m: re.Match) -> str:
        tag_inner = m.group(1)
        closing   = m.group(2)
        img_m = EXTERNAL_IMAGE_RE.search(tag_inner)
        if not img_m:
            return m.group(0)
        orig_url = img_m.group(0)
        if should_skip(orig_url) or orig_url not in replacements:
            return m.group(0)
        new_url = replacements[orig_url]
        new_inner = tag_inner.replace(orig_url, new_url, 1)
        full_tag = _add_camera_credit(new_inner + closing, orig_url)
        figure_originals.add(orig_url)
        return full_tag

    body = FIGURE_RE.sub(rewrite_figure, body)

    # Second pass: replace remaining external URLs (img tags, markdown images, raw)
    # Skip URLs that are now only in credit links (must stay external)
    def replacer(m: re.Match) -> str:
        url = m.group(0)
        if url in figure_originals:
            return url
        return replacements.get(url, url)

    body = EXTERNAL_IMAGE_RE.sub(replacer, body)
    return body, replacements


# ── File processing ────────────────────────────────────────────────────────────

def process_file(md_path: Path, dry_run: bool) -> bool:
    try:
        text = md_path.read_text(encoding="utf-8")
    except UnicodeDecodeError:
        try:
            text = md_path.read_text(encoding="latin-1")
        except Exception as e:
            print(f"  ENCODING ERROR in {md_path.name}: {e}")
            return False

    m = FRONTMATTER_RE.match(text)
    if not m:
        return False

    raw_fm = m.group(1)
    body   = text[m.end():]

    # Quick pre-check: any actionable external image URLs?
    all_urls = set(EXTERNAL_IMAGE_RE.findall(raw_fm + body))
    actionable = [u for u in all_urls if is_image_url(u) and not should_skip(u)]
    if not actionable:
        return False

    print(f"\n{md_path.name} — {len(actionable)} external image(s)")

    new_raw_fm, fm_replacements = rewrite_frontmatter(raw_fm, dry_run)
    new_body, body_replacements  = rewrite_body(body, dry_run)

    all_replacements = {**fm_replacements, **body_replacements}
    if not all_replacements:
        return False

    new_text = f"---\n{new_raw_fm.rstrip()}\n---\n{new_body}"

    if new_text == text:
        print("  (no changes needed)")
        return False

    if dry_run:
        print(f"  [dry-run] Would rewrite {len(all_replacements)} URL(s)")
        return True

    md_path.write_text(new_text, encoding="utf-8")
    print(f"  ✎ Rewrote {len(all_replacements)} URL(s)")
    return True


# ── CLI ────────────────────────────────────────────────────────────────────────

def main() -> None:
    global OUTPUT_FORMAT

    parser = argparse.ArgumentParser(
        description="Localise all external images in a Jekyll site",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="Example:\n  python3 image_localizer.py --dry-run _posts _pages",
    )
    parser.add_argument("dirs", nargs="*", default=["_posts"],
                        help="Directories to scan recursively (default: _posts)")
    parser.add_argument("--dry-run", action="store_true", help="Preview without writing")
    parser.add_argument("--format", choices=["jpg", "webp"], default=None,
                        help="Convert images to this format (default: keep original)")
    parser.add_argument("--skip", nargs="*", default=[],
                        help="Additional domains to skip")
    args = parser.parse_args()

    if args.format:
        OUTPUT_FORMAT = args.format
    SKIP_DOMAINS.update(args.skip or [])

    md_files: list[Path] = []
    for d in args.dirs:
        p = Path(d)
        if not p.exists():
            print(f"Warning: '{d}' does not exist — skipping.")
            continue
        md_files.extend(sorted(p.rglob("*.md")))

    if not md_files:
        print("No markdown files found. Run from your Jekyll site root.")
        sys.exit(1)

    print(f"Scanning {len(md_files)} markdown file(s) in: {', '.join(args.dirs)}")
    print(f"Output format: {'keep original' if not OUTPUT_FORMAT else OUTPUT_FORMAT.upper()}")
    if args.dry_run:
        print("*** DRY RUN — no files will be modified ***")

    modified = 0
    for md_path in md_files:
        if process_file(md_path, dry_run=args.dry_run):
            modified += 1

    print(f"\n{'─' * 50}")
    print(f"Done. {modified} file(s) {'would be' if args.dry_run else 'were'} modified.")
    if not args.dry_run and modified > 0:
        print(f"Images saved under {ASSETS_BASE}/<domain>/")
        print("Remember to commit assets/images/ to git.")

    if _FAILED_URLS:
        print(f"\n⚠️  {len(_FAILED_URLS)} image(s) could not be downloaded (original URL kept):")
        for url, reason in _FAILED_URLS.items():
            print(f"  {reason[:40]:40s}  {url}")
        failed_log = Path("_image_localizer_failed.txt")
        with failed_log.open("w", encoding="utf-8") as f:
            f.write("# Images that could not be downloaded — fix manually\n\n")
            for url, reason in _FAILED_URLS.items():
                f.write(f"{reason}\n{url}\n\n")
        print(f"Full list saved to: {failed_log}")


if __name__ == "__main__":
    main()