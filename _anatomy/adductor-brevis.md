---
title: "Adductor Brevis"
seo_title: "Den korte indadfører | Adductor Brevis | Muskler"
functional_group:
  - Hoftens indadførere
group:
  - Ben
name:
  latin: Adductor Brevis
  da: Den korte indadfører
joint:
  - Hofteleddet
tags:
  - not-in-imagemap
  - muskel
categories:
  - Muskler
origin:
  da:
insertion:
  da:
function:
  da:
    - short: Adduktion i hoften
      extended: ""
  en:
    - short: Adducts the leg at the hip.
      extended: ""
image: https://upload.wikimedia.org/wikipedia/commons/e/e2/Anterior_Hip_Muscles_2.PNG
---

{{ page.name.da | capitalize }} hedder på latin *{{ page.name.latin | downcase }}*. Musklen laver {% for f in page.function.da %}{% if forloop.last == true and page.function.da.size > 1 %} og {% endif %}{{ f.short | downcase  }}{% if forloop.last == false and page.function.da.size > 2 %}, {% endif %}{% endfor %}. Musklen er en del af {{ page.functional_group | join: ", " | downcase }}.
