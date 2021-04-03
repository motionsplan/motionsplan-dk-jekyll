---
title: "Flexor Carpi Radialis"
group:
  - Arme
name:
  latin: Flexor Carpi Radialis
tags:
  - imagemap
  - muskel
origin: 
  da: Et hoved fra hver side af nederste bageste del af lårbenet.
insertion: 
  da: i akillessenen og fæster på hælbenet.
function:
  da:
    - short: Flexes the wrist.
      extended: This means that the flexor carpi radialis muscle bends the wrist joint such that the angle between the palm of the hand and the front of the forearm decreases (i.e. it moves the palm of the hand toward the front of the forearm).
    - short: Abducts the hand.
      extended: This means that the flexor carpi radialis muscle bends the wrist sideways such that the thumb side of the hand moves toward the forearm.
  en:
    - short: Flexes the wrist.
      extended: This means that the flexor carpi radialis muscle bends the wrist joint such that the angle between the palm of the hand and the front of the forearm decreases (i.e. it moves the palm of the hand toward the front of the forearm).
    - short: Abducts the hand.
      extended: This means that the flexor carpi radialis muscle bends the wrist sideways such that the thumb side of the hand moves toward the forearm.
image: /assets/images/anatomy/flexor-carpi-radialis.jpg
image_focus: /assets/images/anatomy/focus-flexor-carpi-radialis.jpg
coords:
  - "70,184,68,178,49,206,54,208"
  - "224,181,227,180,246,206,243,208"
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
