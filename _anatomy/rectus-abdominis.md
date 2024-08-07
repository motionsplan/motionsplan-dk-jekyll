---
title: "Lige mavemuskel"
seo_title: "Lige mavemuskel | Rectus Abdominis | Muskler"
functional_group:
  - Mavemuskler (fleksion)
group:
  - Mave
joint:
  - Rygsøjlen
name:
  latin: "Rectus Abdominis"
  da: "Lige mavemuskel"
tags:
  - imagemap
  - fitnessinstruktør
  - muskel
categories:
  - Muskler
origin:
  da:
insertion:
  da:
function:
  da:
    - short: Bøjer i rygsøjlen
      extended: Rectus abdominis bøjer rygsøjlen forover.
    - short: Komprimerer bughulen
      extended: Rectus abdominis er med til at forøge det trykket i bughulen.
  en:
    - short: Flexes the spine.
      extended: This means that the rectus abdominis muscle bends the spine to the front (i.e. it moves the sternum down and forward towards the pelvis).
    - short: Compresses the abdominal cavity.
      extended: This means that the rectus abdominis muscle constricts the organs of the abdominal cavity and can increase intra-abdominal pressure (i.e. such as during a valsalva maneuver).
secondary_function:
  - short: "Bøjer i knæleddet"
image: /assets/images/anatomy/rectus-abdominis.jpg
image_focus: /assets/images/anatomy/focus-rectus-abdominis.jpg
coords:
  - "123,147,144,145,165,148,166,200,161,218,153,255,136,256,122,208"
---

{{ page.name.da | capitalize }} hedder på latin *{{ page.name.latin | downcase }}*. Musklen laver {% for f in page.function.da %}{% if forloop.last == true and page.function.da.size > 1 %} og {% endif %}{{ f.short | downcase  }}{% if forloop.last == false and page.function.da.size > 1 %}, {% endif %}{% endfor %}. Musklen er en del af {{ page.functional_group | join: ", " | downcase }}.
