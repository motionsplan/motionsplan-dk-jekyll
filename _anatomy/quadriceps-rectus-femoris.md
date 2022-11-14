---
title: "Lårmusklens lige hoved"
seo_title: "Lårmusklens lige hoved | Rectus Femoris | Muskler"
permalink: /rectus-femoris/
redirect_from:
  - /muskler/rectus-femoris/
functional_group:
  - Knæstrækkere
  - Hoftebøjere
joint:
  - Knæleddet
  - Hofteleddet
group:
  - Ben
name:
  latin: "Rectus Femoris"
tags:
  - imagemap
  - fitnessinstruktør
  - muskel
categories:
  - Muskler
origin:
  da: Fremspring på hoftebenet
insertion:
  da: Samles i en sene øverst på forsiden af skinnebenet
function:
  da:
    - short: Ekstension i knæet
      extended: Rectus femoris laver en strækning i knæleddet sammen med resten af quadriceps femoris musklen.
    - short: Ekstension i hoften
      extended: Rectus femoris er med til at lave en mindre bøjning i hoften.
  en:
    - short: Extends the leg at the knee.
      extended: This means that the rectus femoris muscle straightens the leg at the knee joint such that there is an increase in the angle between the lower leg and the upper leg.
    - short: Performs some minor extension of the leg at the hip.
      extended: This means that the rectus femoris muscle straightens the hip joint such that there is an increase in the angle between the upper leg and the torso.
image: /assets/images/anatomy/rectus-femoris.jpg
image_focus: /assets/images/anatomy/focus-rectus-femoris.jpg
coords:
  - "182,243,177,267,170,289,176,315,178,327,185,327,189,304,192,274"
  - "105,242,108,259,115,287,116,303,110,321,110,329,103,328,101,318,97,306,95,274"
---

{{ page.name.da | capitalize }} hedder på latin *{{ page.name.latin | downcase }}*. Musklen laver {% for f in page.function.da %}{% if forloop.last == true and page.function.da.size > 1 %} og {% endif %}{{ f.short | downcase  }}{% if forloop.last == false and page.function.da.size > 1 %}, {% endif %}{% endfor %}. Musklen er en del af {{ page.functional_group | join: ", " | downcase }}.

Rectus Femoris er en del af den [firehovede knæstrækker (quadriceps femoris)](/quadriceps-femoris/).
