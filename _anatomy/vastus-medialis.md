---
title: "Lårmusklens indre hoved"
group:
  - Ben
name:
  latin: "Vastus Medialis"
tags:
  - imagemap
  - fitnessinstruktør
  - muskel
origin: 
  da: Øverst på forsiden af låret
insertion: 
  da: Samles i en sene øverst på forsiden af skinnebenet
function:
  da:
    - short: Extends the leg at the knee.
      extended: This means that the vastus medialis muscle straightens the leg at the knee joint such that there is an increase in the angle between the lower leg and the upper leg.
  en:
    - short: Extends the leg at the knee.
      extended: This means that the vastus medialis muscle straightens the leg at the knee joint such that there is an increase in the angle between the lower leg and the upper leg.
image: /assets/images/anatomy/vastus-medialis.jpg
image_focus: /assets/images/anatomy/focus-vastus-medialis.jpg
coords:
  - "118,288,122,311,124,333,122,343,115,344,112,332,115,317,118,305"
  - "169,290,166,306,164,318,163,332,166,345,175,343,173,324,171,311"
---

Denne muskel er en del af den [firehovede knæstrækker - eller quadriceps femoris]({% link _anatomy/quadriceps-femoris.md %}). Den firehovede knæstrækker består af fire muskler. Yderst ligger [vastus lateralis]({% link _anatomy/vastus-lateralis.md %}) og inderst ligger [vastus medialis]({% link _anatomy/vastus-medialis.md %}). Inderst lever [vastus intermedius]({% link _anatomy/vastus-intermedius.md %}) et ret ubemærket liv, fordi [rectus femoris]({% link _anatomy/rectus-femoris.md %}) er forrest på låret og dækker over musklen.

_{{ page.name.latin }}_

- **Udspring**: {{ page.origin.da }}
- **Hæfte**: {{ page.insertion.da }}

{% include figure image_path=page.image alt=page.title caption=page.title %}

## Funktion

{% for f in page.function.da %}
- **{{ f.short }}**.
  {{ f.extended | markdownify }}
{% endfor %}

{% if page.image_focus %}
  {% include figure image_path=page.image_focus alt=page.title caption=page.title %}
{% endif %}
