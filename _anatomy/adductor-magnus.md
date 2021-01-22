---
title: "Den store indadfører"
latin: Adductor Magnus
tags:
  - imagemap
  - muskel
origin: 
  da: Skambenet og sædebensknuden
insertion: 
  da: På indersiden/bagsiden af de meste af lårbensknoglen samt ovenpå den inderste lårbenskondyl.
function:
  da:
    - short: Adducts the leg at the hip.
      extended: This means that the adductor magnus muscle moves the upper leg toward the vertical midline of the body (i.e. the action of closing your legs together from a spread out position).
    - short: Laterally rotates the upper leg.
      extended: This means that the adductor magnus muscle rotates the upper leg outward around the axis of the bone (i.e. it rotates the upper leg away from the vertical midline of the body).
    - short: Medially rotates the upper leg (possibly).
      extended: This means that the adductor magnus muscle can possibly rotate the upper leg inward around the axis of the bone (i.e. rotate the upper leg toward the vertical midline of the body).
    - short: Ekstension i hofteleddet
      extended: ""
  en:
    - short: Flexes the leg at the hip.
      extended: This means that the adductor longus muscle bends the hip joint such that there is a decrease in the angle between the upper leg and the torso.
    - short: Adducts the leg at the hip.
      extended: This means that the adductor longus muscle moves the upper leg toward the vertical midline of the body (i.e. the action of closing your legs together from a spread out position).
    - short: Provides some lateral rotation of the upper leg.
      extended: This means that the adductor longus muscle rotates the upper leg outward around the axis of the bone (i.e. it rotates the upper leg away from the vertical midline of the body).
exercises:
  - Stående calf-raise
image: /assets/images/anatomy/adductor-magnus.jpg
image_focus: /assets/images/anatomy/focus-adductor-magnus.jpg
coords:
  - "453,276,448,282,439,286,443,298,442,323,451,296"
  - "473,285,461,277,462,293,471,320,470,297"
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
