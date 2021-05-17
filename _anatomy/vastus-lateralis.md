---
title: "Lårmusklens ydre hoved"
group:
  - Ben
name:
  latin: "Vastus Lateralis"
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
      extended: This means that the vastus lateralis muscle straightens the leg at the knee joint such that there is an increase in the angle between the lower leg and the upper leg.
  en:
    - short: Extends the leg at the knee.
      extended: This means that the vastus lateralis muscle straightens the leg at the knee joint such that there is an increase in the angle between the lower leg and the upper leg.
image: /assets/images/anatomy/vastus-lateralis.jpg
image_focus: /assets/images/anatomy/focus-vastus-lateralis.jpg
coords:
  - "191,258,193,270,193,287,192,308,189,321,187,329,187,338,193,339,195,327,197,290,196,272"
  - "100,337,100,326,94,310,92,293,94,272,97,257,89,278,89,290,90,313,95,338"
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
