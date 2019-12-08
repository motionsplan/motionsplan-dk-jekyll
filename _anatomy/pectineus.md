---
title: Pectineus
latin: Pectineus
tags:
  - imagemap
  - muskel
origin: 
  da: Et hoved fra hver side af nederste bageste del af lårbenet.
insertion: 
  da: i akillessenen og fæster på hælbenet.
function: 
  - short: Flexes the leg at the hip.
    extended: This means that the pectineus muscle bends the hip joint such that there is a decrease in the angle between the upper leg and the torso.
  - short: Adducts the leg at the hip.
    extended: This means that the pectineus muscle moves the upper leg toward the vertical midline of the body (i.e. the action of closing your legs together from a spread out position).
exercises:
  - Stående calf-raise
image: /assets/images/anatomy/pectineus.jpg
image_focus: /assets/images/anatomy/focus-pectineus.jpg
coords:
  - "170,252,165,244,162,249,167,258"
  - "123,247,126,252,120,260,117,255"
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
