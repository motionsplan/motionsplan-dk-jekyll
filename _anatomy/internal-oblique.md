---
title: "Indre skrå mavemuskel"
seo_title: "Indre skrå mavemuskel | Internal Oblique | Muskler"
functional_group:
  - Mavemuskler (fleksion)
joint:
  - Rygsøjlen
group:
  - Mave
name:
  latin: "Internal Oblique"
  da: "Indre skrå mavemsukel"
tags:
  - imagemap
  - fitnessinstruktør
  - muskel
categories:
  - Muskler
origin:
  da: Indersiden af hoftekammen
insertion:
  da: De tre nederste ribben ogdanner fortil senepladen for den lige bugmuskel sammen med den ydre skrå og den tværgående og mødes med den modsatte sides muskel i den hvide linie.
function:
  da:
    - short: Laterally flexes the spine.
      extended: This means that the internal oblique muscle bends the spine to the side (i.e. it moves the ribcage downward to the side towards the pelvis).
    - short: Rotates the spine.
      extended: This means that the internal oblique muscle turns the spine to the side (i.e. it twists the torso).
    - short: Compresses the abdominal cavity.
      extended: This means that the internal oblique muscle constricts the organs of the abdominal cavity and can increase intra-abdominal pressure (i.e. such as during a valsalva maneuver).
  en:
    - short: Laterally flexes the spine.
      extended: This means that the internal oblique muscle bends the spine to the side (i.e. it moves the ribcage downward to the side towards the pelvis).
    - short: Rotates the spine.
      extended: This means that the internal oblique muscle turns the spine to the side (i.e. it twists the torso).
    - short: Compresses the abdominal cavity.
      extended: This means that the internal oblique muscle constricts the organs of the abdominal cavity and can increase intra-abdominal pressure (i.e. such as during a valsalva maneuver).
image: /assets/images/anatomy/internal-oblique.jpg
image_focus: /assets/images/anatomy/focus-internal-oblique.jpg
coords:
  - "426,200,431,209,418,210"
  - "489,199,498,212,484,209"
---

{{ page.name.da | capitalize }} hedder på latin *{{ page.name.latin | downcase }}*. Musklen laver {% for f in page.function.da %}{% if forloop.last == true and page.function.da.size > 1 %} og {% endif %}{{ f.short | downcase  }}{% if forloop.last == false and page.function.da.size > 1 %}, {% endif %}{% endfor %}. Musklen er en del af {{ page.functional_group | join: ", " | downcase }}.
