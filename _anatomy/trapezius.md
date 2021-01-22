---
title: "Trapezius"
latin: "Trapezius"
tags:
  - imagemap
  - muskel
origin: 
  da: Et hoved fra hver side af nederste bageste del af lårbenet.
insertion: 
  da: i akillessenen og fæster på hælbenet.
function: 
  - short: Elevates the scapula.
    extended: This means that the trapezius muscle lifts the shoulder girdle up (i.e. shrugging your shoulders).
  - short: Retracts the scapula.
    extended: This means that the trapezius muscle pulls the scapula, or shoulder blade, rearward such that it approaches the spine.
exercises:
  - Stående calf-raise
image: /assets/images/anatomy/trapezius.jpg
image_focus: /assets/images/anatomy/focus-trapezius.jpg
coords:
  - "464,55,449,56,448,66,439,76,416,94,429,97,437,105,440,129,457,158,475,124,481,95,497,90,475,77,465,67"
  - "180,87,160,72,163,89"
  - "124,88,110,83,127,73"
---

_{{ page.name.latin }}_

- **Udspring**: {{ page.origin.da }}
- **Hæfte**: {{ page.insertion.da }}

{% include figure image_path=page.image alt=page.title caption=page.title %}

## Funktion

{% for f in page.function %}
- **{{ f.short }}**.
  {{ f.extended | markdownify }}
{% endfor %}

{% include figure image_path=page.image_focus alt=page.title caption=page.title %}
