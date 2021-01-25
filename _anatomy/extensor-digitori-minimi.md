---
title: "Extensor Digitori Minimi"
name:
  latin: Extensor Digitori Minimi
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
      extended: This means that the extensor digiti minimi muscle straightens the wrist joint such that the angle between the back of the hand and the back of the forearm decreases (i.e. it moves the back of the hand toward the back of the forearm).
    - short: Extends digiti minimi (i.e. the little finger).
      extended: This means that the extensor digiti minimi muscle straightens the little finger.
  en:
    - short: Extends the wrist.
      extended: This means that the extensor digiti minimi muscle straightens the wrist joint such that the angle between the back of the hand and the back of the forearm decreases (i.e. it moves the back of the hand toward the back of the forearm).
    - short: Extends digiti minimi (i.e. the little finger).
      extended: This means that the extensor digiti minimi muscle straightens the little finger.
exercises:
  - Stående calf-raise
image: /assets/images/anatomy/extensor-digiti-minimi.jpg
image_focus: /assets/images/anatomy/focus-extensor-digiti-minimi.jpg
coords:
  - "346,219,348,221,357,191"
  - "555,220,558,220,547,179"
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
