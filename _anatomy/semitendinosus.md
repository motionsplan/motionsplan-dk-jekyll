---
title: "Halvtrinde knæbøjer"
group: Ben
name:
  latin: "Semitendinosus"
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
      extended: This means that the semitendinosus muscle bends the leg at the knee joint such that there is a decrease in the angle between the lower leg and the upper leg.
    - short: Extends the leg at the hip.
      extended: This means that the semitendinosus muscle straightens the hip joint such that there is an increase in the angle between the upper leg and the torso.
  en:
    - short: Flexes the leg at the knee.
      extended: This means that the semitendinosus muscle bends the leg at the knee joint such that there is a decrease in the angle between the lower leg and the upper leg.
    - short: Extends the leg at the hip.
      extended: This means that the semitendinosus muscle straightens the hip joint such that there is an increase in the angle between the upper leg and the torso.
exercises:
  - Stående calf-raise
image: /assets/images/anatomy/semitendinosus.jpg
image_focus: /assets/images/anatomy/focus-semitendinosus.jpg
coords:
  - "434,283,429,299,429,310,426,326,424,339,428,358,430,355,429,343,434,324,437,314,439,296"
  - "477,282,475,292,472,307,478,325,482,340,483,348,484,357,487,337,483,307,484,291"
---

"hamstrings" - the semitendinosus muscle forms part of the hamstrings muscle group, along with semimembranosus and biceps femoris.

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
