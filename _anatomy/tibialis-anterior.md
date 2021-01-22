---
title: "Forreste skinnebensmuskel"
latin: "Tibialis Anterior"
category:
  - Fodled
tags:
  - imagemap
  - muskel
origin: 
  da: Øverst på skinnebenets yderside.
insertion: 
  da: Inderside af fodrod og mellemfod.
function: 
  - short: Dorsiflexes the foot.
    extended: This means that the tibialis anterior muscle bends the ankle such that the angle between the top of the foot and the lower leg decreases (i.e. bringing your toes toward your knees).
  - short: Supinates, or inverts, the foot (sekundær)
    extended: This means that the tibialis anterior muscle bends the ankle inward to the side such that the sole of the foot faces inward.
image: /assets/images/anatomy/tibialis-anterior.jpg
image_focus: /assets/images/anatomy/focus-tibialis-anterior.jpg
coords:
  - "96,372,100,384,101,402,104,435,100,435,94,406,94,390"
  - "191,370,193,384,192,398,191,411,186,434,183,433,185,411,188,392"
---

_{{ page.name.latin }}_

- **Udspring**: {{ page.origin.da }}
- **Hæfte**: {{ page.insertion.da }}

{% include figure image_path=page.image alt=page.title caption=page.title %}

## Funktion

{% for f in page.function %}
- **{{ f.short }}**.
  {{ f.extended | markdownify }}
{% endfor %}

{% include figure image_path=page.image_focus alt=page.title caption=page.title %}
