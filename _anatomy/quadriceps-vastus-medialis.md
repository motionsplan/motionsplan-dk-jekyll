---
title: "Lårmusklens indre hoved"
seo_title: "Lårmusklens indre hoved | Vastus Medialis | Muskler"
permalink: /vastus-medialis/
redirect_from:
  - /muskler/vastus-medialis/
functional_group:
  - Knæstrækkere
joint:
  - Knæleddet
group:
  - Ben
name:
  latin: "Vastus Medialis"
tags:
  - imagemap
  - fitnessinstruktør
  - muskel
categories:
  - Muskler
origin:
  da: Øverst på forsiden af låret
insertion:
  da: Samles i en sene øverst på forsiden af skinnebenet
function:
  da:
    - short: Ekstension i knæleddet
      extended: Vastus medialis er med til at lave en strækning i knæleddet.
  en:
    - short: Extends the leg at the knee.
      extended: This means that the vastus medialis muscle straightens the leg at the knee joint such that there is an increase in the angle between the lower leg and the upper leg.
image: /assets/images/anatomy/vastus-medialis.jpg
image_focus: /assets/images/anatomy/focus-vastus-medialis.jpg
coords:
  - "118,288,122,311,124,333,122,343,115,344,112,332,115,317,118,305"
  - "169,290,166,306,164,318,163,332,166,345,175,343,173,324,171,311"
---

{{ page.name.da | capitalize }} hedder på latin *{{ page.name.latin | downcase }}*. Musklen laver {% for f in page.function.da %}{% if forloop.last == true and page.function.da.size > 1 %} og {% endif %}{{ f.short | downcase  }}{% if forloop.last == false and page.function.da.size > 1 %}, {% endif %}{% endfor %}. Musklen er en del af {{ page.functional_group | join: ", " | downcase }}.

Denne muskel er en del af den [firehovede knæstrækker - eller quadriceps femoris]({% link _anatomy/quadriceps-femoris.md %}). Den firehovede knæstrækker består af fire muskler. Yderst ligger [vastus lateralis]({% link _anatomy/quadriceps-vastus-lateralis.md %}) og inderst ligger [vastus medialis]({% link _anatomy/quadriceps-vastus-medialis.md %}). Inderst lever [vastus intermedius]({% link _anatomy/quadriceps-vastus-intermedius.md %}) et ret ubemærket liv, fordi [rectus femoris]({% link _anatomy/quadriceps-rectus-femoris.md %}) er forrest på låret og dækker over musklen.
