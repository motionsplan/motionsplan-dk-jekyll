---
title: Hoftebøjeren
name:
  latin: Iliopsoas
  en: Iliopsoas
group:
  - Hofte
joint:
  - Hofteleddet
tags:
  - fitnessinstruktør
  - muskel
  - not-in-imagemap
function:
  da:
    - short: Bøjning i hofteleddet
      extended: Bøjning i hofteleddet
  en:
    - short: Bøjning i hofteleddet
      extended: ""
origin:
  da: Lændehvirvel og hoftebenet
insertion:
  da: Bagsiden af lårbenet
last_modified_at: 2021-03-30T09:30:22+02:00
image_focus: null
image: https://chintamaniyoga.com/wp-content/uploads/2017/02/Screen-Shot-2017-02-04-at-4.55.13-PM-725x675.png
exercises:
  - Stående calf-raise
---

_{{ page.name.latin }}_

- **Udspring**: {{ page.origin.da }}
- **Hæfte**: {{ page.insertion.da }}

{% include figure image_path=page.image alt=page.title caption=page.title %}

## Funktion

{% for f in page.function.da %}
- **{{ f.short }}**.
  {{ f.extended | markdownify }}
{% endfor %}

{% if page.image_focus %}
{% include figure image_path=page.image_focus alt=page.title caption=page.title %}
{% endif %}
