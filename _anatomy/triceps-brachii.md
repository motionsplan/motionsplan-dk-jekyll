---
title: "Trehovede armstrækker"
latin: "Triceps Brachii"
tags:
  - imagemap
  - fitnessinstruktør
  - muskel
origin: 
  da: Bagsiden af skulderbladet og overarmsknoglen
insertion: 
  da: Underarmsknoglen
function: 
  - short: Extends the arm at the elbow.
    extended: This means that the triceps brachii muscle straightens the elbow joint such that there is an increase in the angle between the forearm and the upper arm.
  - short: Stræk i skulderleddet
    extended: ""
exercises:
  - Stående calf-raise
image: /assets/images/anatomy/triceps-brachii.jpg
image_focus: /assets/images/anatomy/focus-triceps-brachii.jpg
coords:
  - "404,127,384,136,378,146,369,164,374,180,386,176,399,156,407,141"
  - "510,119,508,137,523,170,533,176,537,162,531,135"
---

_{{ page.latin }}_

- **Udspring**: {{ page.origin.da }}
- **Hæfte**: {{ page.insertion.da }}

{% include figure image_path=page.image alt=page.title caption=page.title %}

## Funktion

{% for f in page.function %}
- **{{ f.short }}**.
  {{ f.extended | markdownify }}
{% endfor %}

{% include figure image_path=page.image_focus alt=page.title caption=page.title %}
