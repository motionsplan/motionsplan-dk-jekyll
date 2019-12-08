---
title: "Teres Major"
latin: "Teres Major"
tags:
  - imagemap
  - muskel
origin: 
  da: Et hoved fra hver side af nederste bageste del af lårbenet.
insertion: 
  da: i akillessenen og fæster på hælbenet.
function: 
  - short: Laterally rotates the upper arm.
    extended: This means that the teres major muscle rotates the upper arm outward around the axis of the bone (i.e. it rotates the upper arm away from the vertical midline of the body).
exercises:
  - Stående calf-raise
image: /assets/images/anatomy/teres-major.jpg
image_focus: /assets/images/anatomy/focus-teres-major.jpg
coords:
  - "411,130,430,132,410,119"
  - "485,132,503,129,505,117"
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
