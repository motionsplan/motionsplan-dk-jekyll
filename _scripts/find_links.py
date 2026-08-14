import os
import re
import csv

# Mapper der skal ignoreres (fx den genererede Jekyll-side)
IGNORE_DIRS = {'_site', '.git', '.jekyll-cache', 'node_modules', 'vendor'}

OUTPUT_CSV = 'interne_links_oversigt.csv'

# Regex der fanger både almindelige relative links og Jekyll Liquid relative_url syntax
# Fx [Min tekst](/min-side/) eller [Min tekst]({{ '/min-side/' | relative_url }})
LINK_PATTERN = re.compile(
    r'\[([^\]]+)\]\(\s*(?:\{\{\s*[\'"]?([^\'"\s}]+)[\'"]?\s*\|\s*relative_url\s*\}\}|(/[^\)]*))\s*\)'
)

links_data = []

# Gennemgå projektet
for root, dirs, files in os.walk('.'):
    # Filtrér ignoreret mapper fra
    dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]
    
    for file in files:
        if file.endswith('.md') or file.endswith('.html'):
            filepath = os.path.join(root, file)
            
            with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
                matches = LINK_PATTERN.findall(content)
                
                for anchor_text, liquid_url, std_url in matches:
                    # Hent den URL der blev matchet (enten fra Liquid eller standard path)
                    target_url = liquid_url if liquid_url else std_url
                    
                    # Filtrér eksterne links eller tomme links fra
                    if target_url and target_url.startswith('/'):
                        links_data.append({
                            'Kildeside (Fil)': os.path.normpath(filepath),
                            'Ankertekst': anchor_text.strip(),
                            'Mål-URL': target_url.strip()
                        })

# Gem resultatet i en CSV-fil
with open(OUTPUT_CSV, 'w', newline='', encoding='utf-8-sig') as csvfile:
    fieldnames = ['Kildeside (Fil)', 'Ankertekst', 'Mål-URL']
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(links_data)

print(f"✅ Færdig! Fandt {len(links_data)} interne brødtekst-links.")
print(f"📄 Resultatet er gemt i filen: {OUTPUT_CSV}")