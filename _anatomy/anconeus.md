---
title: "Aconeus"
latin: Aconeus
tags:
  - imagemap
  - muskel
origin: 
  da: Epicondylus lateralis
insertion: 
  da: Proksimalt på ulnas bagflade
function: 
  - short: Extends the arm at the elbow.
    extended: This means that the anconeus muscle straightens the elbow joint such that there is an increase in the angle between the forearm and the upper arm.
exercises:
  - Stående calf-raise
image: /assets/images/anatomy/anconeus.jpg
image_focus: /assets/images/anatomy/focus-anconeus.jpg
coords:
  - "365,178,368,175,371,189,368,194"
  - "542,172,545,174,539,191,536,187"
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
