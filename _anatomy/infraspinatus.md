---
title: "Infraspinatus"
group:
  - Arme
name:
  latin: "Infraspinatus"
tags:
  - imagemap
  - muskel
origin: 
  da: 
insertion: 
  da: 
function:
  da:
    - short: Laterally rotates the upper arm.
      extended: This means that the infraspinatus muscle rotates the upper arm outward around the axis of the bone (i.e. it rotates the upper arm away from the vertical midline of the body).
  en:
    - short: Laterally rotates the upper arm.
      extended: This means that the infraspinatus muscle rotates the upper arm outward around the axis of the bone (i.e. it rotates the upper arm away from the vertical midline of the body).
image: /assets/images/anatomy/infraspinatus.jpg
image_focus: /assets/images/anatomy/focus-infraspinatus.jpg
coords:
  - "414,110,427,101,431,106,432,118,435,129,420,119"
  - "489,97,503,105,484,129,479,128,483,106"
---

_{{ page.name.latin }}_

- **Udspring**: {{ page.origin.da }}
- **Hæfte**: {{ page.insertion.da }}

{% include figure image_path=page.image alt=page.title caption=page.title %}

## Funktion for {{ page.title }}

{% for f in page.function.da %}
- **{{ f.short }}**.
  {{ f.extended | markdownify }}
{% endfor %}

## Træning af {{ page.title }}

{% include video provider="youtube" id="0yowX4d2aoo" %}

{% include figure image_path=page.image_focus alt=page.title caption=page.title %}
