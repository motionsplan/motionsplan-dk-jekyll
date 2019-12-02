---
title: "Lige mavemuskel"
latin: "Rectus Abdominis"
tags:
  - imagemap
  - fitnessinstruktør
  - muskel
origin: 
  da: Et hoved fra hver side af nederste bageste del af lårbenet.
insertion: 
  da: i akillessenen og fæster på hælbenet.
function: 
  - short: Flexes the spine.
    extended: This means that the rectus abdominis muscle bends the spine to the front (i.e. it moves the sternum down and forward towards the pelvis).
  - short: Compresses the abdominal cavity.
    extended: This means that the rectus abdominis muscle constricts the organs of the abdominal cavity and can increase intra-abdominal pressure (i.e. such as during a valsalva maneuver).
secondary_function: 
  - short: "Bøjer i knæleddet"
exercises:
  - Stående calf-raise
image: /assets/images/anatomy/rectus-abdominis.jpg
image_focus: /assets/images/anatomy/focus-rectus-abdominis.jpg
coords:
  - "123,147,144,145,165,148,166,200,161,218,153,255,136,256,122,208"
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
