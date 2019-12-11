---
title: "Adductor Hiatus"
latin: Adductor Hiatus
tags:
  - muskel
  - not-in-imagemap
origin: 
  da: 
insertion: 
  da: 
function: 
  - short: Adducts the leg at the hip.
    extended: ""
exercises:
  - Stående calf-raise
image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Gray433.png/250px-Gray433.png
image_focus:
coords:
  - "126,253,120,261,125,272,129,288,130,304,132,297,132,285,131,268"
  - "159,255,165,263,162,272,159,286,157,305,155,295,154,284,154,270"
---

_{{ page.latin }}_

- **Udspring**: {{ page.origin.da }}
- **Hæfte**: {{ page.insertion.da }}

{% if page.image %}
{% include figure image_path=page.image alt=page.title caption=page.title %}
{% endif %}

## Funktion

{% for f in page.function %}
- **{{ f.short }}**.
  {{ f.extended | markdownify }}
{% endfor %}

{% if page.image_focus %}
{% include figure image_path=page.image_focus alt=page.title caption=page.title %}
{% endif %}
