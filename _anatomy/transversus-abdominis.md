---
title: "Bugpressen"
seo_title: "Bugpressen | Transversus Abdominis | Muskler"
functional_group:
  - Mavemuskler (fleksion)
joint:
  - Rygsøjlen
group:
  - Mave
name:
  latin: "Transversus Abdominis"
  da: Bugpressen
categories:
  - Muskler
tags:
  - fitnessinstruktør
  - muskel
  - not-in-imagemap
origin:
  da: Nederste ribben, hoftebenskammen og lændefascien
insertion:
  da: Rectusskeden
function:
  da:
    - short: Vigtig stabilisator af rygsøjlen
      extended: ""
image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Transversus_abdominis.png/375px-Transversus_abdominis.png
breadcrumbs: true
---

{{ page.name.da | capitalize }} hedder på latin *{{ page.name.latin | downcase }}*. Musklen laver {% for f in page.function.da %}{% if forloop.last == true and page.function.da.size > 1 %} og {% endif %}{{ f.short | downcase  }}{% if forloop.last == false and page.function.da.size > 1 %}, {% endif %}{% endfor %}. Musklen er en del af {{ page.functional_group | join: ", " | downcase }}.
