---
title: "Hoftebøjeren"
latin: "Iliopsoas"
tags:
  - fitnessinstruktør
  - muskel
origin: 
  da: Lændehvirvel og hoftebenet
insertion: 
  da: Bagsiden af lårbenet
function: 
  - short: Bøjning i hofteleddet
    extended: ""
exercises:
  - Stående calf-raise
image: https://chintamaniyoga.com/wp-content/uploads/2017/02/Screen-Shot-2017-02-04-at-4.55.13-PM-725x675.png
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

{% if page.image_focus %}
{% include figure image_path=page.image_focus alt=page.title caption=page.title %}
{% endif %}
