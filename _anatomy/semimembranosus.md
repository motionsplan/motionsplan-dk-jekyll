---
title: "Halvsenede knæbøjer"
seo_title: "Halvsenede knæbøjer | Semimembranosus | Muskler"
joint:
  - Knæleddet
  - Hofteleddet
functional_group:
  - Knæbøjere
  - Hoftestrækkere
group:
  - Ben
name:
  latin: "Semimembranosus"
  da: "Halvsenede knæbøjer"
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
    - short: Fleksion i knæet
      extended: Semimembranosus er med til at bøje i knæet sammen med de andre hasemuskler.
    - short: Extension i hoften
      extended: Semimembranosus er med til at lave en strækning i hoften sammen med gluteus maximus og de andre hasemuskler.
  en:
    - short: Flexes the leg at the knee.
      extended: This means that the semimembranosus muscle bends the leg at the knee joint such that there is a decrease in the angle between the lower leg and the upper leg.
    - short: Extends the leg at the hip.
      extended: This means that the semimembranosus muscle straightens the hip joint such that there is an increase in the angle between the upper leg and the torso.
image: /assets/images/anatomy/semimembranosus.jpg
image_focus: /assets/images/anatomy/focus-semimembranosus.jpg
coords:
  - "472,312,475,319,479,338,481,356,479,365,477,351,473,328,471,319"
  - "441,311,438,321,436,333,433,346,434,364,437,353,440,337"
---

{{ page.name.da | capitalize }} hedder på latin *{{ page.name.latin | downcase }}*. Musklen laver {% for f in page.function.da %}{% if forloop.last == true and page.function.da.size > 1 %} og {% endif %}{{ f.short | downcase  }}{% if forloop.last == false and page.function.da.size > 1 %}, {% endif %}{% endfor %}. Musklen er en del af {{ page.functional_group | join: ", " | downcase }}.

Semimembranosus er en del af baglåret eller _hamstrings_ sammen med [biceps femoris](/biceps-femoris/) og [semitendinosus](/semitendinosus/).
