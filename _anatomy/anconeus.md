---
title: Aconeus
name:
  latin: Aconeus
  en: Aconeus
group:
  - Arme
joint:
  - Albueleddet
tags:
  - imagemap
  - muskel
function:
  da:
    - short: Extends the arm at the elbow.
      extended: This means that the anconeus muscle straightens the elbow joint such
        that there is an increase in the angle between the forearm and the upper
        arm.
  en:
    - short: Extends the arm at the elbow.
      extended: This means that the anconeus muscle straightens the elbow joint such
        that there is an increase in the angle between the forearm and the upper
        arm.
origin:
  da: Epicondylus lateralis
insertion:
  da: Proksimalt på ulnas bagflade
last_modified_at: 2021-03-31T10:19:28+02:00
image_focus: /assets/images/anatomy/focus-anconeus.jpg
image: /assets/images/anatomy/anconeus.jpg
coords:
  - 365,178,368,175,371,189,368,194
  - 542,172,545,174,539,191,536,187
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

{% include figure image_path=page.image_focus alt=page.title caption=page.title %}
