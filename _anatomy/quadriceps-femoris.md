---
title: "Firehovedede knæstrækker - Quadriceps femoris"
group:
  - Ben
name:
  latin: "Quadriceps Femoris"
  da: "Firehovedede knæstrækker"
tags:
  - fitnessinstruktør
  - muskel
#origin: 
#  da: Øverst på forsiden af låret
#insertion: 
#  da: Samles i en sene øverst på forsiden af skinnebenet
function:
  da:
    - short: Extends the leg at the knee.
      extended: This means that the vastus medialis muscle straightens the leg at the knee joint such that there is an increase in the angle between the lower leg and the upper leg.
  en:
    - short: Extends the leg at the knee.
      extended: This means that the vastus medialis muscle straightens the leg at the knee joint such that there is an increase in the angle between the lower leg and the upper leg.
image: https://www.healthguideline.net/wp-content/uploads/2019/07/Quadriceps-2BMuscle-2BStrain.jpg
---

Den firehovede knæstrækker består af fire muskler. Yderst ligger [vastus lateralis]({% link _anatomy/vastus-lateralis.md %}) og inderst ligger [vastus medialis]({% link _anatomy/vastus-medialis.md %}). Inders lever [vastus intermedius]({% link _anatomy/vastus-intermedius.md %}) et ret ubemærket liv, fordi [rectus femoris]({% link _anatomy/rectus-femoris.md %}) er forrest på låret og dækker over musklen.

_{{ page.name.latin }}_

- **Udspring**: {{ page.origin.da }}
- **Hæfte**: {{ page.insertion.da }}

{% include figure image_path=page.image alt=page.title caption=page.title %}

## Funktion for {{ page.title }}

{% for f in page.function.da %}
- **{{ f.short }}**.
  {{ f.extended | markdownify }}
{% endfor %}

{% if page.image_focus %}
{% include figure image_path=page.image_focus alt=page.title caption=page.title %}
{% endif %}