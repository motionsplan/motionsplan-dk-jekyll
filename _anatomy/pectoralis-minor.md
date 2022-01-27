---
title: Den lille brystmuskel
seo_title: "Den lille brystmuskel | Pectoralis Minor | Muskler"
functional_group:
  - Skulderbladsabduktorer
joint:
  - Skulderbladet
group:
  - Bryst
name:
  latin: Pectoralis Minor
  da: Den lille brystmuskel
tags:
  - muskel
categories:
  - Muskler
---

{{ page.name.da | capitalize }} hedder på latin *{{ page.name.latin | downcase }}*. Musklen laver {% for f in page.function.da %}{% if forloop.last == true and page.function.da.size > 1 %} og {% endif %}{{ f.short | downcase  }}{% if forloop.last == false and page.function.da.size > 1 %}, {% endif %}{% endfor %}. Musklen er en del af {{ page.functional_group | join: ", " | downcase }}.
