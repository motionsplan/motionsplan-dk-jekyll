---
title: "Den store sædemuskel"
seo_title: "Den store sædemuskel | Gluteus Maximus | Muskler"
functional_group:
  - Hoftestrækkere
joint:
  - Hofteleddet
group:
  - Hofte
name:
  latin: "Gluteus Maximus"
  da: "Den store sædemuskel"
tags:
  - imagemap
  - fitnessinstruktør
  - muskel
categories:
  - Muskler
origin:
  da: Hofteben og korsben
insertion:
  da: Øverst på bagsiden af låret og dens fascie
function:
  da:
    - short: Extends the leg at the hip.
      extended: This means that the gluteus maximus muscle straightens the hip joint such that there is an increase in the angle between the upper leg and the torso.
    - short: Laterally rotates the upper leg.
      extended: This means that the gluteus maximus muscle rotates the upper leg outward around the axis of the bone (i.e. it rotates the upper leg away from the vertical midline of the body).
  en:
    - short: Extends the leg at the hip.
      extended: This means that the gluteus maximus muscle straightens the hip joint such that there is an increase in the angle between the upper leg and the torso.
    - short: Laterally rotates the upper leg.
      extended: This means that the gluteus maximus muscle rotates the upper leg outward around the axis of the bone (i.e. it rotates the upper leg away from the vertical midline of the body).
image: /assets/images/anatomy/gluteus-maximus.jpg
image_focus: /assets/images/anatomy/focus-gluteus-maximus.jpg
coords:
  - "440,220,417,237,415,261,423,279,445,280,457,264,466,281,488,282,497,265,494,237,474,220,457,241"
---

{{ page.name.da | capitalize }} hedder på latin *{{ page.name.latin | downcase }}*. Musklen laver {% for f in page.function.da %}{% if forloop.last == true and page.function.da.size > 1 %} og {% endif %}{{ f.short | downcase  }}{% if forloop.last == false and page.function.da.size > 1 %}, {% endif %}{% endfor %}. Musklen er en del af {{ page.functional_group | join: ", " | downcase }}.
