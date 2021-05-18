---
title: "Halvsenede knæbøjer"
group:
  - Ben
name:
  latin: "Semimembranosus"
  da: "Halvsenede knæbøjer"
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
    - short: Flexes the leg at the knee.
      extended: This means that the semimembranosus muscle bends the leg at the knee joint such that there is a decrease in the angle between the lower leg and the upper leg.
    - short: Extends the leg at the hip.
      extended: This means that the semimembranosus muscle straightens the hip joint such that there is an increase in the angle between the upper leg and the torso.
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

"hamstrings" - the semimembranosus muscle forms part of the hamstrings muscle group, along with biceps femoris and semitendinosus.

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
