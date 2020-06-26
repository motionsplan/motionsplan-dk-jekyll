---
title: "Lårmusklens indre hoved"
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
  - short: Extends the leg at the knee.
    extended: This means that the vastus medialis muscle straightens the leg at the knee joint such that there is an increase in the angle between the lower leg and the upper leg.
exercises:
  - Stående calf-raise
image: /assets/images/anatomy/vastus-medialis.jpg
image_focus: /assets/images/anatomy/focus-vastus-medialis.jpg
coords:
  - "118,288,122,311,124,333,122,343,115,344,112,332,115,317,118,305"
  - "169,290,166,306,164,318,163,332,166,345,175,343,173,324,171,311"
---

"quadriceps," "quads" - the vastus medialis muscle forms part of the quadriceps femoris muscle group, along with rectus femoris, vastus lateralis, and vastus intermedius (vastus intermedius is not shown in the muscle anatomy section since it is located below rectus femoris).

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
