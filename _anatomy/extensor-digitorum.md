---
title: "Extensor Digitorum"
group:
  - Arme
name:
  latin: Extensor Digitorum
tags:
  - muskel
  - imagemap
origin: 
  da: Et hoved fra hver side af nederste bageste del af lårbenet.
insertion: 
  da: i akillessenen og fæster på hælbenet.
function:
  da:
    - short: Extends the wrist.
      extended: This means that the extensor digitorum muscle straightens the wrist joint such that the angle between the back of the hand and the back of the forearm decreases (i.e. it moves the back of the hand toward the back of the forearm).
    - short: Extends the fingers.
      extended: This means that the extensor digitorum muscle straightens the fingers.
  en:
    - short: Extends the wrist.
      extended: This means that the extensor digitorum muscle straightens the wrist joint such that the angle between the back of the hand and the back of the forearm decreases (i.e. it moves the back of the hand toward the back of the forearm).
    - short: Extends the fingers.
      extended: This means that the extensor digitorum muscle straightens the fingers.
exercises:
  - Stående calf-raise
image: /assets/images/anatomy/extensor-digitorum.jpg
image_focus: /assets/images/anatomy/focus-extensor-digitorum.jpg
coords:
  - "341,218,344,218,354,193"
  - "563,217,560,219,554,195"
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
