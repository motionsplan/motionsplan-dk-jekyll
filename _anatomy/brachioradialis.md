---
title: "Brachioradialis"
seo_title: "Brachioradialis | Muskler"
joint:
  - Albueleddet
group:
  - Arme
name:
  latin: Brachioradialis
  da: Brachioradialis
tags:
  - imagemap
  - muskel
categories:
  - Muskler
origin:
  da: anteriore overflade af humerus, især den distale halvdel af denne knogle
insertion:
  da: Lateralsiden af ekstremitas distalis radii (processus styloideus radii)
image: /assets/images/anatomy/brachioradialis.jpg
image_focus: /assets/images/anatomy/focus-brachioradialis.jpg
coords:
  - "61,177,58,166,47,179,41,206,45,207"
  - "232,167,232,177,247,201,251,200,245,178"
---

{{ page.name.da | capitalize }} hedder på latin *{{ page.name.latin | downcase }}*. Musklen laver {% for f in page.function.da %}{% if forloop.last == true and page.function.da.size > 1 %} og {% endif %}{{ f.short | downcase  }}{% if forloop.last == false and page.function.da.size > 1 %}, {% endif %}{% endfor %}. Musklen er en del af {{ page.functional_group | join: ", " | downcase }}.
