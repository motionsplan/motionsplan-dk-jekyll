---
title: "Extensor Carpi Ulnaris"
latin: Extensor Carpi Ulnaris
tags:
  - imagemap
  - muskel
origin: 
  da: Et hoved fra hver side af nederste bageste del af lårbenet.
insertion: 
  da: i akillessenen og fæster på hælbenet.
function: 
  - short: Extends the wrist.
    extended: This means that the extensor carpi ulnaris muscle straightens the wrist joint such that the angle between the back of the hand and the back of the forearm decreases (i.e. it moves the back of the hand toward the back of the forearm).
  - short: Adducts the hand.
    extended: This means that the extensor carpi ulnaris muscle bends the wrist sideways such that the little finger side of the hand moves toward the forearm.
exercises:
  - Stående calf-raise
image: /assets/images/anatomy/extensor-carpi-ulnaris.jpg
image_focus: /assets/images/anatomy/focus-extensor-carpi-ulnaris.jpg
coords:
  - "363,179,363,201,352,220"
  - "545,178,549,216,542,198"
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
