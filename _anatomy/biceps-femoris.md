---
title: "Den tohovedede knæbøjer"
seo_title: "Den tohovedede knæbøjer | Biceps Femoris | Muskler"
joint:
  - Knæleddet
  - Hofteleddet
functional_group:
  - Knæbøjere
  - Hoftestrækkere
group:
  - Ben
name:
  latin: Biceps Femoris
  da: "Den tohovedede knæbøjer"
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
    - short: Fleksion i knæleddet
      extended: Biceps femoris deltager i bøjning i knæleddet.
    - short: Ekstension i hofteleddet
      extended: Biceps femoris deltager som en del af hasemusklerne i udstrækningen i hofteleddet.
  en:
    - short: Flexes the leg at the knee.
      extended: This means that the biceps femoris muscle bends the leg at the knee joint such that there is a decrease in the angle between the lower leg and the upper leg.
    - short: Extends the leg at the hip.
      extended: This means that the biceps femoris muscle straightens the hip joint such that there is an increase in the angle between the upper leg and the torso.
image: /assets/images/anatomy/biceps-femoris.jpg
image_focus: /assets/images/anatomy/focus-biceps-femoris.jpg
coords:
  - "429,285,421,284,414,305,410,328,409,343,417,345,422,328,425,305"
  - "483,284,491,282,499,304,501,319,503,330,505,344,496,348,491,329,487,301"
---

{{ page.name.da | capitalize }} hedder på latin *{{ page.name.latin | downcase }}*. Musklen laver {% for f in page.function.da %}{% if forloop.last == true and page.function.da.size > 1 %} og {% endif %}{{ f.short | downcase  }}{% if forloop.last == false and page.function.da.size > 1 %}, {% endif %}{% endfor %}. Musklen er en del af {{ page.functional_group | join: ", " | downcase }}.

Biceps femoris er en del af baglåret eller _hamstrings_ sammen med [semitendinosus](/semitendinosus/) og [semimembranosus](/semimembranosus/).
