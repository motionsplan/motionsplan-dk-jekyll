---
title: "Lårmusklens dybe hoved"
latin: "Vastus Intermedius"
tags:
  - fitnessinstruktør
  - muskel
origin: 
  da: Øverst på forsiden af låret
insertion: 
  da: Samles i en sene øverst på forsiden af skinnebenet
function: 
  - short: Extends the leg at the knee.
    extended: This means that the vastus medialis muscle straightens the leg at the knee joint such that there is an increase in the angle between the lower leg and the upper leg.
exercises:
  - Stående calf-raise
image: https://www.healthguideline.net/wp-content/uploads/2019/07/Quadriceps-2BMuscle-2BStrain.jpg
image_focus: 
---

"quadriceps," "quads" - the vastus intermedius muscle forms part of the quadriceps femoris muscle group, along with rectus femoris, vastus lateralis, and vastus intermedius (vastus intermedius is not shown in the muscle anatomy section since it is located below rectus femoris).

_{{ page.latin }}_

- **Udspring**: {{ page.origin.da }}
- **Hæfte**: {{ page.insertion.da }}

{% include figure image_path=page.image alt=page.title caption=page.title %}

## Funktion

{% for f in page.function %}
- **{{ f.short }}**.
  {{ f.extended | markdownify }}
{% endfor %}

{% if page.image_focus %}
{% include figure image_path=page.image_focus alt=page.title caption=page.title %}
{% endif %}