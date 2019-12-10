---
title: "Brachialis"
latin: Brachialis
tags:
  - imagemap
  - muskel
origin: 
  da: anteriore overflade af humerus, især den distale halvdel af denne knogle
insertion: 
  da: Lateralsiden af ekstremitas distalis radii (processus styloideus radii)
function: 
  - short: Flexes the arm at the elbow.
    extended: This means that the brachioradialis muscle bends the arm at the elbow joint such that there is a decrease in the angle between the forearm and the upper arm.
exercises:
  - Stående calf-raise
image: /assets/images/anatomy/brachioradialis.jpg
image_focus: /assets/images/anatomy/focus-brachioradialis.jpg
coords:
  - "61,177,58,166,47,179,41,206,45,207"
  - "232,167,232,177,247,201,251,200,245,178"
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
