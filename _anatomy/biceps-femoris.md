---
title: "Den tohovedede knæbøjer"
group: Ben
name:
  latin: Biceps Femoris
tags:
  - imagemap
  - fitnessinstruktør
  - muskel
origin: 
  da: Et hoved fra hver side af nederste bageste del af lårbenet.
insertion: 
  da: i akillessenen og fæster på hælbenet.
function:
  da:
    - short: Flexes the leg at the knee.
      extended: This means that the biceps femoris muscle bends the leg at the knee joint such that there is a decrease in the angle between the lower leg and the upper leg.
    - short: Extends the leg at the hip.
      extended: This means that the biceps femoris muscle straightens the hip joint such that there is an increase in the angle between the upper leg and the torso.
  en:
    - short: Flexes the leg at the knee.
      extended: This means that the biceps femoris muscle bends the leg at the knee joint such that there is a decrease in the angle between the lower leg and the upper leg.
    - short: Extends the leg at the hip.
      extended: This means that the biceps femoris muscle straightens the hip joint such that there is an increase in the angle between the upper leg and the torso.
exercises:
  - Stående calf-raise
image: /assets/images/anatomy/biceps-femoris.jpg
image_focus: /assets/images/anatomy/focus-biceps-femoris.jpg
coords:
  - "429,285,421,284,414,305,410,328,409,343,417,345,422,328,425,305"
  - "483,284,491,282,499,304,501,319,503,330,505,344,496,348,491,329,487,301"
---

"hamstrings" - the biceps femoris muscle forms part of the hamstrings muscle group, along with semimembranosus and semitendinosus.

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
