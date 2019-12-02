---
title: "Adductor Longus"
latin: Adductor Longus
tags:
  - imagemap
  - muskel
origin: 
  da: Et hoved fra hver side af nederste bageste del af lårbenet.
insertion: 
  da: I akillessenen og fæster på hælbenet.
function: 
  - short: Flexes the leg at the hip.
    extended: This means that the adductor longus muscle bends the hip joint such that there is a decrease in the angle between the upper leg and the torso.
  - short: Adducts the leg at the hip.
    extended: This means that the adductor longus muscle moves the upper leg toward the vertical midline of the body (i.e. the action of closing your legs together from a spread out position).
  - short: Provides some lateral rotation of the upper leg.
    extended: This means that the adductor longus muscle rotates the upper leg outward around the axis of the bone (i.e. it rotates the upper leg away from the vertical midline of the body).
exercises:
  - Stående calf-raise
image: /assets/images/anatomy/adductor-longus.jpg
image_focus: /assets/images/anatomy/focus-adductor-longus.jpg
coords:
  - "126,253,120,261,125,272,129,288,130,304,132,297,132,285,131,268"
  - "159,255,165,263,162,272,159,286,157,305,155,295,154,284,154,270"
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
