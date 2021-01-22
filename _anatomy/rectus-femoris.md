---
title: "Lårmusklens lige hoved"
name:
  latin: "Rectus Femoris"
tags:
  - imagemap
  - fitnessinstruktør
  - muskel
origin: 
  da: Fremspring på hoftebenet
insertion: 
  da: Samles i en sene øverst på forsiden af skinnebenet
function:
  da:
    - short: Extends the leg at the knee.
      extended: This means that the rectus femoris muscle straightens the leg at the knee joint such that there is an increase in the angle between the lower leg and the upper leg.
    - short: Performs some minor extension of the leg at the hip.
      extended: This means that the rectus femoris muscle straightens the hip joint such that there is an increase in the angle between the upper leg and the torso.
  en:
    - short: Extends the leg at the knee.
      extended: This means that the rectus femoris muscle straightens the leg at the knee joint such that there is an increase in the angle between the lower leg and the upper leg.
    - short: Performs some minor extension of the leg at the hip.
      extended: This means that the rectus femoris muscle straightens the hip joint such that there is an increase in the angle between the upper leg and the torso.
exercises:
  - Stående calf-raise
image: /assets/images/anatomy/rectus-femoris.jpg
image_focus: /assets/images/anatomy/focus-rectus-femoris.jpg
coords:
  - "182,243,177,267,170,289,176,315,178,327,185,327,189,304,192,274"
  - "105,242,108,259,115,287,116,303,110,321,110,329,103,328,101,318,97,306,95,274"
---

"quadriceps," "quads" - the rectus femoris muscle forms part of the quadriceps femoris muscle group, along with vastus lateralis, vastus medialis, and vastus intermedius (vastus intermedius is not shown in the muscle anatomy section since it is located below rectus femoris).

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
