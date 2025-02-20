---
title: "Den store indadfører"
seo_title: "Den store indadfører | Adductor Magnus | Muskler"
functional_group:
  - Hoftestrækkere
  - Hoftens indadførere
joint:
  - Hofteleddet
group:
  - Ben
name:
  latin: Adductor Magnus
  da: Den store indadfører
tags:
  - imagemap
  - muskel
categories:
  - Muskler
origin:
  da: Skambenet og sædebensknuden
insertion:
  da: På indersiden/bagsiden af de meste af lårbensknoglen samt ovenpå den inderste lårbenskondyl.
function:
  da:
    - short: Adduktion i hoften
      extended: Adductor magnus laver adduktion i hoften ved at føre benet ind mod den mediale linje i kroppen. Samler altså benene.
    - short: Udadrotation i hoften
      extended: Adductor magnus deltager i udadrotationen i hoften. Rotation væk fra den mediale linje i kroppen.
    - short: Ekstension i hofteleddet
      extended: ""
image: /assets/images/anatomy/adductor-magnus.jpg
image_focus: /assets/images/anatomy/focus-adductor-magnus.jpg
coords:
  - "453,276,448,282,439,286,443,298,442,323,451,296"
  - "473,285,461,277,462,293,471,320,470,297"
---

{{ page.name.da | capitalize }} hedder på latin *{{ page.name.latin | downcase }}*. Musklen laver {% for f in page.function.da %}{% if forloop.last == true and page.function.da.size > 1 %} og {% endif %}{{ f.short | downcase  }}{% if forloop.last == false and page.function.da.size > 1 %}, {% endif %}{% endfor %}. Musklen er en del af {{ page.functional_group | join: ", " | downcase }}.
