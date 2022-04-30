---
title: "Den lange indadfører"
seo_title: "Den lange indadfører | Adductor Longus | Muskler"
functional_group:
  - Hoftens indadførere
group:
  - Ben
joint:
  - Hofteleddet
name:
  latin: Adductor Longus
  da: Den lange indadfører
tags:
  - imagemap
  - muskel
categories:
  - Muskler
origin:
  da: Skambenet.
insertion:
  da: På indersiden og bagsiden af det midterste af lårbensknoglen.
function:
  da:
    - short: Adduktion i hoften
      extended: Adductor longus er med til at samle benene ved at lave adduktion i hoften.
    - short: Udadrotation i hoften
      extended: Adductor longus medvirker til udadrotation i hoften.
    - short: Bøjning i hoften
      extended: Adductor longus er med til at bøje i hoften.
  en:
    - short: Flexes the leg at the hip.
      extended: This means that the adductor longus muscle bends the hip joint such that there is a decrease in the angle between the upper leg and the torso.
    - short: Adducts the leg at the hip.
      extended: This means that the adductor longus muscle moves the upper leg toward the vertical midline of the body (i.e. the action of closing your legs together from a spread out position).
    - short: Provides some lateral rotation of the upper leg.
      extended: This means that the adductor longus muscle rotates the upper leg outward around the axis of the bone (i.e. it rotates the upper leg away from the vertical midline of the body).
image: /assets/images/anatomy/adductor-longus.jpg
image_focus: /assets/images/anatomy/focus-adductor-longus.jpg
coords:
  - "126,253,120,261,125,272,129,288,130,304,132,297,132,285,131,268"
  - "159,255,165,263,162,272,159,286,157,305,155,295,154,284,154,270"
video:
  provider: youtube
  id: U6imQsMgGOI
---

{{ page.name.da | capitalize }} hedder på latin *{{ page.name.latin | downcase }}*. Musklen laver {% for f in page.function.da %}{% if forloop.last == true and page.function.da.size > 1 %} og {% endif %}{{ f.short | downcase  }}{% if forloop.last == false and page.function.da.size > 1 %}, {% endif %}{% endfor %}. Musklen er en del af {{ page.functional_group | join: ", " | downcase }}.
