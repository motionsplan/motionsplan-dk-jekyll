---
title: "Brachialis"
seo_title: "Den dybe armbøjer | Brachialis | Muskler"
functional_group:
  - Armbøjere
joint:
  - Albueleddet
group:
  - Arme
name:
  latin: Brachialis
  da: Den dybe armbøjer
tags:
  - not-in-imagemap
  - muskel
categories:
  - Muskler
origin:
  da: anteriore overflade af humerus, især den distale halvdel af denne knogle
insertion:
  da: Lateralsiden af ekstremitas distalis radii (processus styloideus radii)
function:
  da:
    - short: Fleksion i albuen
      extended:
  en:
    - short: Flexes the arm at the elbow.
      extended:
---

{{ page.name.da | capitalize }} hedder på latin *{{ page.name.latin | downcase }}*. Musklen laver {% for f in page.function.da %}{% if forloop.last == true and page.function.da.size > 1 %} og {% endif %}{{ f.short | downcase  }}{% if forloop.last == false and page.function.da.size > 1 %}, {% endif %}{% endfor %}. Musklen er en del af {{ page.functional_group | join: ", " | downcase }}.
