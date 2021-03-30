---
title: "Adductor Hiatus"
group:
  - Ben
name:
  latin: Adductor Hiatus
tags:
  - muskel
  - not-in-imagemap
origin: 
  da: 
insertion: 
  da: 
function:
  da:
    - short: Adducts the leg at the hip.
      extended: ""
  en:
    - short: Adducts the leg at the hip.
      extended: ""
exercises:
  - Stående calf-raise
image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Gray433.png/250px-Gray433.png
image_focus:
coords:
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
