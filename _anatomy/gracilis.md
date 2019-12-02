---
title: "Gracilis"
latin: "Gracilis"
tags:
  - imagemap
  - muskel
origin: 
  da: Et hoved fra hver side af nederste bageste del af lårbenet.
insertion: 
  da: i akillessenen og fæster på hælbenet.
function: 
  - short: Flexes the leg at the knee.
    extended: This means that the gracilis muscle bends the leg at the knee joint such that there is a decrease in the angle between the lower leg and the upper leg.
exercises:
  - Stående calf-raise
image: /assets/images/anatomy/gracilis.jpg
image_focus: /assets/images/anatomy/focus-gracilis.jpg
coords:
  - "140,272,132,264,136,275,136,287,134,298,130,319,141,292"
  - "153,267,148,273,147,288,157,318,152,288"
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
