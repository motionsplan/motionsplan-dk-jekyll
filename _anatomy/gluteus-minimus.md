---
title: "Den lille sædemuskel"
group:
  - Hofte
name:
  latin: "Gluteus Minimus"
tags:
  - fitnessinstruktør
  - muskel
  - not-in-imagemap
origin: 
  da: Yderst på øverste kant af hoftebenet
insertion: 
  da: Øverst på bagsiden af låret
function:
  da:
    - short: Stabilitet i hoften
      extended: ""
    - short: Indadrotation i hoften
      extended: ""
    - short: Udadrotation i hoften
      extended: ""
  en:
    - short: Stabilitet i hoften
      extended: ""
    - short: Indadrotation i hoften
      extended: ""
    - short: Udadrotation i hoften
      extended: ""
exercises:
  - Stående calf-raise
image: https://www.yoganatomy.com/wp-content/uploads/2018/05/gluteus-minimus-muscle-1.png
image_focus: 

---

_{{ page.name.latin }}_

- **Udspring**: {{ page.origin.da }}
- **Hæfte**: {{ page.insertion.da }}

{% include figure image_path=page.image alt=page.title caption=page.title %}

## Funktion

{% for f in page.function.da %}
- **{{ f.short }}**.
  {{ f.extended | markdownify }}
{% endfor %}

{% if page.image_focus %}
{% include figure image_path=page.image_focus alt=page.title caption=page.title %}
{% endif %}
