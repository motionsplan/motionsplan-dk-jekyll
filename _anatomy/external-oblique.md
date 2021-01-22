---
title: "Ydre skrå mavemuskel"
latin: External Oblique
tags:
  - imagemap
  - fitnessinstruktør
  - muskel
origin: 
  da: Ydersiden af nederste 8 ribben
insertion: 
  da: Ydersiden af hoftekammen og danner fortil senepladen for den lige bugmuskel sammen med den indre skrå og den tværgående og mødes med den modsatte sides muskel i den hvide linie
function: 
  - short: Laterally flexes the spine.
    extended: This means that the external oblique muscle bends the spine to the side (i.e. it moves the ribcage downward to the side towards the pelvis).
  - short: Rotates the spine.
    extended: This means that the external oblique muscle turns the spine to the side (i.e. it twists the torso).
  - short: Compresses the abdominal cavity.
    extended: This means that the external oblique muscle constricts the organs of the abdominal cavity and can increase intra-abdominal pressure (i.e. such as during a valsalva maneuver).
exercises:
  - Stående calf-raise
image: /assets/images/anatomy/external-oblique.jpg
image_focus: /assets/images/anatomy/focus-external-oblique.jpg
coords:
  - "171,153,185,168,184,218,170,230"
  - "117,150,106,169,101,217,119,233"
  - "489,198,498,206,493,187"
  - "417,206,425,197,419,187"
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
