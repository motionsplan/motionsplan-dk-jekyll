---
title: "Den mellemste sædemuskel"
group: Ben
name:
  latin: "Gluteus Medius"
tags:
  - imagemap
  - fitnessinstruktør
  - muskel
origin: 
  da: Yderst på øverste kant af hoftebenet
insertion: 
  da: Øverst på bagsiden af låret
function:
  da:
    - short: Abducts the leg at the hip.
      extended: This means that the gluteus medius muscle moves the upper leg outward to the side away from the vertical midline of the body (i.e. the action of spreading your legs to the side).
    - short: The anterior (or front) fibers of the gluteus medius muscle medially rotate the upper leg.
      extended: This means that the anterior fibers of the gluteus medius muscle rotate the upper leg inward around the axis of the bone (i.e. rotate the upper leg toward the vertical midline of the body).
    - short: The anterior (or front) fibers of the gluteus medius muscle flex the leg at the hip.
      extended: This means that the anterior fibers of the gluteus medius muscle bend the hip joint such that there is a decrease in the angle between the upper leg and the torso.
    - short: The posterior (or rear) fibers of the gluteus medius muscle laterally rotate the upper leg.
      extended: This means that the posterior fibers of the gluteus medius muscle rotate the upper leg outward around the axis of the bone (i.e. rotate the upper leg away from the vertical midline of the body).
    - short: The posterior (or rear) fibers of the gluteus medius muscle extend the leg at the hip.
      extended: This means that the posterior fibers of the gluteus medius muscle straighten the hip joint such that there is an increase in the angle between the upper leg and the torso.
    - short: Stabilizes the hip joint during walking.
      extended: This means that the gluteus medius muscle keeps the pelvis level when the leg on the opposite side of the body lifts off the ground during walking.
  en:
    - short: Abducts the leg at the hip.
      extended: This means that the gluteus medius muscle moves the upper leg outward to the side away from the vertical midline of the body (i.e. the action of spreading your legs to the side).
    - short: The anterior (or front) fibers of the gluteus medius muscle medially rotate the upper leg.
      extended: This means that the anterior fibers of the gluteus medius muscle rotate the upper leg inward around the axis of the bone (i.e. rotate the upper leg toward the vertical midline of the body).
    - short: The anterior (or front) fibers of the gluteus medius muscle flex the leg at the hip.
      extended: This means that the anterior fibers of the gluteus medius muscle bend the hip joint such that there is a decrease in the angle between the upper leg and the torso.
    - short: The posterior (or rear) fibers of the gluteus medius muscle laterally rotate the upper leg.
      extended: This means that the posterior fibers of the gluteus medius muscle rotate the upper leg outward around the axis of the bone (i.e. rotate the upper leg away from the vertical midline of the body).
    - short: The posterior (or rear) fibers of the gluteus medius muscle extend the leg at the hip.
      extended: This means that the posterior fibers of the gluteus medius muscle straighten the hip joint such that there is an increase in the angle between the upper leg and the torso.
    - short: Stabilizes the hip joint during walking.
      extended: This means that the gluteus medius muscle keeps the pelvis level when the leg on the opposite side of the body lifts off the ground during walking.
exercises:
  - Stående calf-raise
image: /assets/images/anatomy/gluteus-medius.jpg
image_focus: /assets/images/anatomy/focus-gluteus-medius.jpg
coords:
  - "422,216,435,216,443,219,428,224,417,234"
  - "497,235,491,215,481,216,471,218,486,224"
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

{% if page.image_focus %}
{% include figure image_path=page.image_focus alt=page.title caption=page.title %}
{% endif %}
