---
title: "Quadratus lumborum"
seo_title: "Den firkantede lændemuskel | Quadratus lumborum | Muskler"
functional_group:
  - Rygstrækkere (ekstension)
joint:
  - Rygsøjlen
group:
  - Ryg
name:
  latin: Quadratus lumborum
  da: Den firkantede lændemuskel
tags:
  - muskel
categories:
  - Muskler
origin:
  da:
insertion:
  da:
function:
  da:
  en:
#image: /assets/images/anatomy/teres-major.jpg
#image_focus: /assets/images/anatomy/focus-teres-major.jpg
---

{{ page.name.da | capitalize }} hedder på latin *{{ page.name.latin | downcase }}*. Musklen laver {% for f in page.function.da %}{% if forloop.last == true and page.function.da.size > 1 %} og {% endif %}{{ f.short | downcase  }}{% if forloop.last == false and page.function.da.size > 1 %}, {% endif %}{% endfor %}. Musklen er en del af {{ page.functional_group | join: ", " | downcase }}.
