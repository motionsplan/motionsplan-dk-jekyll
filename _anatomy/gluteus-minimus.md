---
title: "Den lille sædemuskel"
latin: "Gluteus Minimus"
tags:
  - fitnessinstruktør
  - muskel
origin: 
  da: Yderst på øverste kant af hoftebenet
insertion: 
  da: Øverst på bagsiden af låret
function: 
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

_{{ page.latin }}_

- **Udspring**: {{ page.origin.da }}
- **Hæfte**: {{ page.insertion.da }}

{% include figure image_path=page.image alt=page.title caption=page.title %}

## Funktion

{% for f in page.function %}
- **{{ f.short }}**.
  {{ f.extended | markdownify }}
{% endfor %}

{% include figure image_path=page.image_focus alt=page.title caption=page.title %}
