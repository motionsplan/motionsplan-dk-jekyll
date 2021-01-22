---
title: "Indre skrå mavemuskel"
latin: "Internal Oblique"
tags:
  - imagemap
  - fitnessinstruktør
  - muskel
origin: 
  da: Indersiden af hoftekammen
insertion: 
  da: De tre nederste ribben ogdanner fortil senepladen for den lige bugmuskel sammen med den ydre skrå og den tværgående og mødes med den modsatte sides muskel i den hvide linie.
function: 
  - short: Laterally flexes the spine.
    extended: This means that the internal oblique muscle bends the spine to the side (i.e. it moves the ribcage downward to the side towards the pelvis).
  - short: Rotates the spine.
    extended: This means that the internal oblique muscle turns the spine to the side (i.e. it twists the torso).
  - short: Compresses the abdominal cavity.
    extended: This means that the internal oblique muscle constricts the organs of the abdominal cavity and can increase intra-abdominal pressure (i.e. such as during a valsalva maneuver).
exercises:
  - Stående calf-raise
image: /assets/images/anatomy/internal-oblique.jpg
image_focus: /assets/images/anatomy/focus-internal-oblique.jpg
coords:
  - "426,200,431,209,418,210"
  - "489,199,498,212,484,209"
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
