---
title: "Anconeus"
seo_title: "Anconeus | Anconæus | Muskler"
group:
  - Arme
name:
  da: Anconæus
  latin: Anconeus
tags:
  - imagemap
  - muskel
categories:
  - Muskler
origin:
  da: Epicondylus lateralis
insertion:
  da: Proksimalt på ulnas bagflade
function:
  da:
    - short: Strækning i albuen
      extended: Anconeus delter i strækning af albuen.
  en:
    - short: Extends the arm at the elbow.
      extended: This means that the anconeus muscle straightens the elbow joint such that there is an increase in the angle between the forearm and the upper arm.
image: /assets/images/anatomy/anconeus.jpg
image_focus: /assets/images/anatomy/focus-anconeus.jpg
coords:
  - "365,178,368,175,371,189,368,194"
  - "542,172,545,174,539,191,536,187"
---

{{ page.name.da | capitalize }} hedder på latin *{{ page.name.latin | downcase }}*. Musklen laver {% for f in page.function.da %}{% if forloop.last == true and page.function.da.size > 1 %} og {% endif %}{{ f.short | downcase  }}{% if forloop.last == false and page.function.da.size > 1 %}, {% endif %}{% endfor %}. Musklen er en del af {{ page.functional_group | join: ", " | downcase }}.
