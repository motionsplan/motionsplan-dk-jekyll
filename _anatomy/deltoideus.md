---
title: "Skuldermuskel"
name:
  latin: Deltoideus
  da: "Skuldermuskel"
category:
  - Skulder
group:
  - Skulder
tags:
  - imagemap
  - fitnessinstruktør
  - muskel
origin: 
  da: Øverste del af skulderbladet og kravebenet
insertion: 
  da: Øverst på ydersiden af overarmsknoglen
function:
  da:
    - short: The anterior (or front) fibers of the deltoid muscle flex the arm at the shoulder.
      extended: This means that the anterior fibers of the deltoid muscle move the upper arm upward to the front.
    - short: The anterior (or front) fibers of the deltoid muscle medially rotate the upper arm.
      extended: This means that the anterior fibers of the deltoid muscle rotate the upper arm inward around the axis of the bone (i.e. rotate the upper arm toward the vertical midline of the body).
    - short: The lateral (or side) fibers of the deltoid muscle abduct the arm at the shoulder.
      extended: This means that the lateral fibers of the deltoid muscle move the upper arm upward to the side.
    - short: The posterior (or rear) fibers of the deltoid muscle extend the arm at the shoulder.
      extended: This means that the posterior fibers of the deltoid muscle move the upper arm downward to the rear.
    - short: The posterior (or rear) fibers of the deltoid muscle laterally rotate the upper arm.
      extended: This means that the posterior fibers of the deltoid muscle rotate the upper arm outward around the axis of the bone (i.e. rotate the upper arm away from the vertical midline of the body).
  en:
    - short: The anterior (or front) fibers of the deltoid muscle flex the arm at the shoulder.
      extended: This means that the anterior fibers of the deltoid muscle move the upper arm upward to the front.
    - short: The anterior (or front) fibers of the deltoid muscle medially rotate the upper arm.
      extended: This means that the anterior fibers of the deltoid muscle rotate the upper arm inward around the axis of the bone (i.e. rotate the upper arm toward the vertical midline of the body).
    - short: The lateral (or side) fibers of the deltoid muscle abduct the arm at the shoulder.
      extended: This means that the lateral fibers of the deltoid muscle move the upper arm upward to the side.
    - short: The posterior (or rear) fibers of the deltoid muscle extend the arm at the shoulder.
      extended: This means that the posterior fibers of the deltoid muscle move the upper arm downward to the rear.
    - short: The posterior (or rear) fibers of the deltoid muscle laterally rotate the upper arm.
      extended: This means that the posterior fibers of the deltoid muscle rotate the upper arm outward around the axis of the bone (i.e. rotate the upper arm away from the vertical midline of the body).
image: /assets/images/anatomy/deltoid.jpg
image_focus: /assets/images/anatomy/focus-deltoid.jpg
coords:
  - "199,119,220,133,217,117,208,97,188,88,172,95,190,103"
  - "116,89,100,83,89,85,75,98,71,115,72,126,86,117,94,100"
  - "491,95,502,92,512,88,524,98,530,111,529,127,519,119,508,104"
  - "426,97,414,96,404,93,390,103,385,121,385,131,399,121,408,106"
---

_{{ page.name.latin }}_

- **Udspring**: {{ page.origin.da }}
- **Hæfte**: {{ page.insertion.da }}

{% include figure image_path=page.image alt=page.title caption=page.title %}

## Funktion for {{ page.title }}

{% for f in page.function.da %}
- **{{ f.short }}**.
  {{ f.extended | markdownify }}
{% endfor %}

## Træning af {{ page.title }}

{% include video provider="youtube" id="q8lwFkXMoOo" %}

{% include figure image_path=page.image_focus alt=page.title caption=page.title %}
