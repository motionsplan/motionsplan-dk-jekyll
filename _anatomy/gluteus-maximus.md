---
title: "Den store sædemuskel"
group:
  - Ben
name:
  latin: "Gluteus Maximus"
tags:
  - imagemap
  - fitnessinstruktør
  - muskel
origin: 
  da: Hofteben og korsben
insertion: 
  da: Øverst på bagsiden af låret og dens fascie
function:
  da:
    - short: Extends the leg at the hip.
      extended: This means that the gluteus maximus muscle straightens the hip joint such that there is an increase in the angle between the upper leg and the torso.
    - short: Laterally rotates the upper leg.
      extended: This means that the gluteus maximus muscle rotates the upper leg outward around the axis of the bone (i.e. it rotates the upper leg away from the vertical midline of the body).
  en:
    - short: Extends the leg at the hip.
      extended: This means that the gluteus maximus muscle straightens the hip joint such that there is an increase in the angle between the upper leg and the torso.
    - short: Laterally rotates the upper leg.
      extended: This means that the gluteus maximus muscle rotates the upper leg outward around the axis of the bone (i.e. it rotates the upper leg away from the vertical midline of the body).
exercises:
  - Stående calf-raise
image: /assets/images/anatomy/gluteus-maximus.jpg
image_focus: /assets/images/anatomy/focus-gluteus-maximus.jpg
coords:
  - "440,220,417,237,415,261,423,279,445,280,457,264,466,281,488,282,497,265,494,237,474,220,457,241"
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
