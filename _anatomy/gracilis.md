---
title: "Den slanke indadfører"
seo_title: "Den slanke indadfører | Gracilis | Muskler"
functional_group:
  - Hoftens indadførere
joint:
  - Hofteleddet
group:
  - Ben
name:
  latin: "Gracilis"
  da: Den slanke indadfører
tags:
  - imagemap
  - muskel
categories:
  - Muskler
origin:
  da: Skambenet
insertion:
  da: Øverst på den inderste skinnebenskondyl
function:
  da:
    - short: Flexes the leg at the knee.
      extended: This means that the gracilis muscle bends the leg at the knee joint such that there is a decrease in the angle between the lower leg and the upper leg.
  en:
    - short: Flexes the leg at the knee.
      extended: This means that the gracilis muscle bends the leg at the knee joint such that there is a decrease in the angle between the lower leg and the upper leg.
image: /assets/images/anatomy/gracilis.jpg
image_focus: /assets/images/anatomy/focus-gracilis.jpg
coords:
  - "140,272,132,264,136,275,136,287,134,298,130,319,141,292"
  - "153,267,148,273,147,288,157,318,152,288"
---

{{ page.name.da | capitalize }} hedder på latin *{{ page.name.latin | downcase }}*. Musklen laver {% for f in page.function.da %}{% if forloop.last == true and page.function.da.size > 1 %} og {% endif %}{{ f.short | downcase  }}{% if forloop.last == false and page.function.da.size > 1 %}, {% endif %}{% endfor %}. Musklen er en del af {{ page.functional_group | join: ", " | downcase }}.
