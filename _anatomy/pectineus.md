---
title: Pectineus
seo_title: "Kammusklen | Pectineus | Muskler"
functional_group:
  - Hoftens indadførere
joint:
  - Hofteleddet
group:
  - Ben
name:
  latin: Pectineus
  da: Kammusklen
tags:
  - imagemap
  - muskel
categories:
  - Muskler
origin:
  da:
insertion:
  da:
function:
  da:
    - short: Flexes the leg at the hip.
      extended: This means that the pectineus muscle bends the hip joint such that there is a decrease in the angle between the upper leg and the torso.
    - short: Adducts the leg at the hip.
      extended: This means that the pectineus muscle moves the upper leg toward the vertical midline of the body (i.e. the action of closing your legs together from a spread out position).
  en:
    - short: Flexes the leg at the hip.
      extended: This means that the pectineus muscle bends the hip joint such that there is a decrease in the angle between the upper leg and the torso.
    - short: Adducts the leg at the hip.
      extended: This means that the pectineus muscle moves the upper leg toward the vertical midline of the body (i.e. the action of closing your legs together from a spread out position).
image: /assets/images/anatomy/pectineus.jpg
image_focus: /assets/images/anatomy/focus-pectineus.jpg
coords:
  - "170,252,165,244,162,249,167,258"
  - "123,247,126,252,120,260,117,255"
---

{{ page.name.da | capitalize }} hedder på latin *{{ page.name.latin | downcase }}*. Musklen laver {% for f in page.function.da %}{% if forloop.last == true and page.function.da.size > 1 %} og {% endif %}{{ f.short | downcase  }}{% if forloop.last == false and page.function.da.size > 1 %}, {% endif %}{% endfor %}. Musklen er en del af {{ page.functional_group | join: ", " | downcase }}.
