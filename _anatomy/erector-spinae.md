---
title: "Rygstrækkere"
latin: "Erector Spinae"
tags:
  - fitnessinstruktør
  - muskel
origin: 
  da: Bagsiden af bækkenet
insertion: 
  da: Løbende på bryst, hals og nakkehvirvlerne og ribben op til kraniet
function: 
  - short: Stræk af rygsøjlen
    extended: ""
exercises:
  - Stående calf-raise
image: 
image_focus: 
---

_{{ page.latin }}_

- **Udspring**: {{ page.origin.da }}
- **Hæfte**: {{ page.insertion.da }}

{% include figure image_path=page.image alt=page.title caption=page.title %}

## Funktion

{% for f in page.function %}
- **{{ f.short }}**.
  {{ f.extended | markdownify }}
{% endfor %}

{% if page.image_focus %}
{% include figure image_path=page.image_focus alt=page.title caption=page.title %}
{% endif %}
