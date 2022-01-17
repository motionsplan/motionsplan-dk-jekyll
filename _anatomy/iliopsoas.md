---
title: "Hoftebøjeren"
seo_title: "Hoftebøjeren | Iliopsoas | Muskler"
joint:
  - Hofteleddet
group:
  - Hofte
functional_group:
  - Hoftebøjere
name:
  latin: "Iliopsoas"
  da: "Hoftebøjeren"
tags:
  - fitnessinstruktør
  - muskel
  - not-in-imagemap
categories:
  - Muskler
origin:
  da: Lændehvirvel og hoftebenet
insertion:
  da: Bagsiden af lårbenet
function:
  da:
    - short: Bøjning i hofteleddet
      extended: ""
  en:
    - short: Bøjning i hofteleddet
      extended: ""
image: https://chintamaniyoga.com/wp-content/uploads/2017/02/Screen-Shot-2017-02-04-at-4.55.13-PM-725x675.png
---

{{ page.name.da | capitalize }} hedder på latin *{{ page.name.latin | downcase }}*. Musklen laver {% for f in page.function.da %}{% if forloop.last == true and page.function.da.size > 1 %} og {% endif %}{{ f.short | downcase  }}{% if forloop.last == false and page.function.da.size > 1 %}, {% endif %}{% endfor %}. Musklen er en del af {{ page.functional_group | join: ", " | downcase }}.
