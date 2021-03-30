---
title: "Flexor Carpi Ulnaris"
group: Arme
name:
  latin: "Flexor Carpi Ulnaris"
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
      extended: This means that the flexor carpi ulnaris muscle bends the wrist joint such that the angle between the palm of the hand and the front of the forearm decreases (i.e. it moves the palm of the hand toward the front of the forearm).
    - short: Adducts the hand.
      extended: This means that the flexor carpi ulnaris muscle bends the wrist sideways such that the little finger side of the hand moves toward the forearm.
  en:
    - short: Flexes the wrist.
      extended: This means that the flexor carpi ulnaris muscle bends the wrist joint such that the angle between the palm of the hand and the front of the forearm decreases (i.e. it moves the palm of the hand toward the front of the forearm).
    - short: Adducts the hand.
      extended: This means that the flexor carpi ulnaris muscle bends the wrist sideways such that the little finger side of the hand moves toward the forearm.
exercises:
  - Stående calf-raise
image: /assets/images/anatomy/flexor-carpi-ulnaris.jpg
image_focus: /assets/images/anatomy/focus-flexor-carpi-ulnaris.jpg
coords:
  - "74,188,72,182,56,210,57,214"
  - "220,185,222,185,242,209,238,212"
  - "379,183,384,185,354,225,354,223"
  - "548,225,550,225,527,181,526,186"
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
