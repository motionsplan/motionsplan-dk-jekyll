---
title: "Extensor Carpi Radialis Longus"
name:
  latin: Extensor Carpi Radialis Longus
tags:
  - imagemap
  - muskel
origin: 
  da: Et hoved fra hver side af nederste bageste del af lårbenet.
insertion: 
  da: i akillessenen og fæster på hælbenet.
function:
  da:
    - short: Extends the wrist.
      extended: This means that the extensor carpi radialis longus muscle straightens the wrist joint such that the angle between the back of the hand and the back of the forearm decreases (i.e. it moves the back of the hand toward the back of the forearm).
    - short: Abducts the hand.
      extended: This means that the extensor carpi radialis longus muscle bends the wrist sideways such that the thumb side of the hand moves toward the forearm.
  en:
    - short: Extends the wrist.
      extended: This means that the extensor carpi radialis longus muscle straightens the wrist joint such that the angle between the back of the hand and the back of the forearm decreases (i.e. it moves the back of the hand toward the back of the forearm).
    - short: Abducts the hand.
      extended: This means that the extensor carpi radialis longus muscle bends the wrist sideways such that the thumb side of the hand moves toward the forearm.
exercises:
  - Stående calf-raise
image: /assets/images/anatomy/extensor-carpi-radialis-longus.jpg
image_focus: /assets/images/anatomy/focus-extensor-carpi-radialis-longus.jpg
coords:
  - "548,176,556,181,559,198"
  - "347,201,356,179,361,178"
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
