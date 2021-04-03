---
title: "Rygstrækkere"
name:
  latin: "Erector Spinae"
group:
  - Ryg
tags:
  - fitnessinstruktør
  - muskel
  - not-in-imagemap
origin: 
  da: Bagsiden af bækkenet
insertion: 
  da: Løbende på bryst, hals og nakkehvirvlerne og ribben op til kraniet
function: 
  da:
    - short: Stræk af rygsøjlen
      extended: ""
  en:
    - short: Stræk af rygsøjlen
      extended: ""
image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Gray389_-_Erector_spinae.png/375px-Gray389_-_Erector_spinae.png
---

_{{ page.name.latin }}_

- **Udspring**: {{ page.origin.da }}
- **Hæfte**: {{ page.insertion.da }}

{% if page.image %}
{% include figure image_path=page.image alt=page.title caption=page.title %}
{% endif %}

## Funktion

{% for f in page.function.da %}
- **{{ f.short }}**.
  {{ f.extended | markdownify }}
{% endfor %}

{% if page.image_focus %}
{% include figure image_path=page.image_focus alt=page.title caption=page.title %}
{% endif %}
