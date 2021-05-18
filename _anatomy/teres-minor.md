---
title: "Teres Minor"
group:
  - Bryst
name:
  latin: "Teres Minor"
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
    extended: This means that the teres minor muscle rotates the upper arm outward around the axis of the bone (i.e. it rotates the upper arm away from the vertical midline of the body).
  en:
  - short: Laterally rotates the upper arm.
    extended: This means that the teres minor muscle rotates the upper arm outward around the axis of the bone (i.e. it rotates the upper arm away from the vertical midline of the body).
#image: /assets/images/anatomy/teres-major.jpg
#image_focus: /assets/images/anatomy/focus-teres-major.jpg
coords:
  - "411,130,430,132,410,119"
  - "485,132,503,129,505,117"
---

_{{ page.name.latin }}_

- **Udspring**: {{ page.origin.da }}
- **Hæfte**: {{ page.insertion.da }}

{% if page.image %}
{% include figure image_path=page.image alt=page.title caption=page.title %}
{% endif %}

## Funktion for {{ page.title }}

{% for f in page.function.da %}
- **{{ f.short }}**.
  {{ f.extended | markdownify }}
{% endfor %}

## Træning af {{ page.title }}

{% include video provider="youtube" id="k91SAsiE3wY" %}

{% if page.image_focus %}
{% include figure image_path=page.image_focus alt=page.title caption=page.title %}
{% endif %}