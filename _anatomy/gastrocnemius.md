---
title: "Den tohovedede lægmuskel"
group:
  - Ben
name:
  latin: Gastrocnemius
  da: Den tohovedede lægmuskel
tags:
  - imagemap
  - fitnessinstruktør
  - muskel
origin: 
  da: 
insertion: 
  da: 
function:
  da:
    - short: "Plantarfleksion i ankelleddet"
    - short: Flexes the leg at the knee.
      extended: This means that the gastrocnemius muscle bends the leg at the knee joint such that there is a decrease in the angle between the lower leg and the upper leg.
    - short: Plantar flexes the foot.
      extended: This means that the gastrocnemius muscle extends the ankle such that the angle between the top of the foot and the shin increases.
  en:
    - short: "Plantarfleksion i ankelleddet"
    - short: Flexes the leg at the knee.
      extended: This means that the gastrocnemius muscle bends the leg at the knee joint such that there is a decrease in the angle between the lower leg and the upper leg.
    - short: Plantar flexes the foot.
      extended: This means that the gastrocnemius muscle extends the ankle such that the angle between the top of the foot and the shin increases.
secondary_function: 
  da:
    - short: "Bøjer i knæleddet"
image: /assets/images/anatomy/gastrocnemius.jpg
image_focus: /assets/images/anatomy/focus-gastrocnemius.jpg
coords:
  - "423,361,432,373,432,388,435,408,432,424,434,425,425,420,423,413,415,417,406,420,403,406,403,389,408,366,414,357,417,366"
  - "489,359,493,367,500,358,508,365,509,376,512,393,510,410,507,421,499,417,491,410,488,419,483,425,479,416,481,394,483,380,483,370"
  - "117,382,122,399,122,410,121,424,113,418,111,409,111,393"
  - "170,382,177,397,175,415,167,424,166,411,167,398"
---

_{{ page.name.latin }}_

- **Udspring**: {{ page.origin.da }}
- **Hæfte**: {{ page.insertion.da }}

{% include figure image_path=page.image alt=page.title caption=page.title %}

## Funktion

{% for f in page.function.da %}
- **{{ f.short }}**.
  {{ f.extended | markdownify }}
{% endfor %}

{% include figure image_path=page.image_focus alt=page.title caption=page.title %}
