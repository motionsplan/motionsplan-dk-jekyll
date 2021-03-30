---
title: "Adductor Brevis"
group:
  - Ben
name:
  latin: Adductor Brevis
tags:
  - not-in-imagemap
  - muskel
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
image: https://www.getbodysmart.com/wp-content/uploads/2017/09/4-8-550x550.png
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
