---
title: "Rygstrækkere"
seo_title: "Rygstrækkere | Erector Spinae | Muskler"
functional_group:
  - Rygstrækkere (ekstension)
joint:
  - Rygsøjlen
name:
  latin: "Erector Spinae"
  da: "Rygstrækkere"
group:
  - Ryg
tags:
  - fitnessinstruktør
  - muskel
  - not-in-imagemap
categories:
  - Muskler
origin:
  da: Bagsiden af bækkenet
insertion:
  da: Løbende på bryst, hals og nakkehvirvlerne og ribben op til kraniet
function:
  da:
    - short: Stræk af rygsøjlen
      extended: ""
  en:
    - short: Stræk af rygsøjlen
      extended: ""
image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Gray389_-_Erector_spinae.png/375px-Gray389_-_Erector_spinae.png
---

{{ page.name.da | capitalize }} hedder på latin *{{ page.name.latin | downcase }}*. Musklen laver {% for f in page.function.da %}{% if forloop.last == true and page.function.da.size > 1 %} og {% endif %}{{ f.short | downcase  }}{% if forloop.last == false and page.function.da.size > 1 %}, {% endif %}{% endfor %}. Musklen er en del af {{ page.functional_group | join: ", " | downcase }}.
