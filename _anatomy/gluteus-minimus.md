---
title: "Den lille sædemuskel"
seo_title: "Den lille sædemuskel | Gluteus Minimus | Muskler"
functional_group:
  - Hoftens udadførere
joint:
  - Hofteleddet
group:
  - Hofte
name:
  latin: "Gluteus Minimus"
  da: "Den lille sædemuskel"
tags:
  - fitnessinstruktør
  - muskel
  - not-in-imagemap
categories:
  - Muskler
origin:
  da: Yderst på øverste kant af hoftebenet
insertion:
  da: Øverst på bagsiden af låret
function:
  da:
    - short: Stabilitet i hoften
      extended: ""
    - short: Indadrotation i hoften
      extended: ""
    - short: Udadrotation i hoften
      extended: ""
  en:
    - short: Stabilitet i hoften
      extended: ""
    - short: Indadrotation i hoften
      extended: ""
    - short: Udadrotation i hoften
      extended: ""
image: https://www.yoganatomy.com/wp-content/uploads/2018/05/gluteus-minimus-muscle-1.png
---

{{ page.name.da | capitalize }} hedder på latin *{{ page.name.latin | downcase }}*. Musklen laver {% for f in page.function.da %}{% if forloop.last == true and page.function.da.size > 1 %} og {% endif %}{{ f.short | downcase  }}{% if forloop.last == false and page.function.da.size > 1 %}, {% endif %}{% endfor %}. Musklen er en del af {{ page.functional_group | join: ", " | downcase }}.
