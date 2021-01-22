---
title: "Skræddermusklen"
name:
  latin: "Sartorius"
tags:
  - imagemap
  - muskel
origin: 
  da: forreste øverste hoftebensfremspring
insertion: 
  da: øverst på den inderste skinnebenskondyl
function:
  da:
    - short: Flexes the leg at the hip.
      extended: This means that the sartorius muscle bends the hip joint such that there is a decrease in the angle between the upper leg and the torso.
    - short: Flexes the leg at the knee.
      extended: This means that the sartorius muscle bends the leg at the knee joint such that there is a decrease in the angle between the lower leg and the upper leg.
    - short: Laterally rotates the upper leg.
      extended: This means that the sartorius muscle rotates the upper leg outward around the axis of the bone (i.e. it rotates the upper leg away from the vertical midline of the body).
  en:
    - short: Flexes the leg at the hip.
      extended: This means that the sartorius muscle bends the hip joint such that there is a decrease in the angle between the upper leg and the torso.
    - short: Flexes the leg at the knee.
      extended: This means that the sartorius muscle bends the leg at the knee joint such that there is a decrease in the angle between the lower leg and the upper leg.
    - short: Laterally rotates the upper leg.
      extended: This means that the sartorius muscle rotates the upper leg outward around the axis of the bone (i.e. it rotates the upper leg away from the vertical midline of the body).
exercises:
  - Stående calf-raise
image: /assets/images/anatomy/sartorius.jpg
image_focus: /assets/images/anatomy/focus-sartorius.jpg
coords:
  - "107,228,116,257,122,273,126,295,127,310,127,329,122,300,117,278,110,253,106,237"
  - "182,228,179,229,171,254,164,271,160,296,160,325,162,310,165,293,169,277,176,252"
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
