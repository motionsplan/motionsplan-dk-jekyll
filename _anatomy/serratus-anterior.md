---
title: "Serratus Anterior"
latin: "Serratus Anterior"
tags:
  - imagemap
  - muskel
origin: 
  da: Et hoved fra hver side af nederste bageste del af lårbenet.
insertion: 
  da: i akillessenen og fæster på hælbenet.
function: 
  - short: Protracts the scapula.
    extended: This means that the serratus anterior muscle pulls the scapula, or shoulder blade, forward and around the ribcage.
  - short: Rotates the scapula upward.
    extended: This means that the serratus anterior muscle turns the scapula, or shoulder blade, such that the bottom of the scapula moves upward and laterally (i.e. outward).
exercises:
  - Stående calf-raise
image: /assets/images/anatomy/serratus-anterior.jpg
image_focus: /assets/images/anatomy/focus-serratus-anterior.jpg
coords:
  - "103,145,111,149,108,156,110,158,104,163,101,152"
  - "173,150,181,154,180,160,184,163,183,145"
---

The serratus anterior is often called the "boxer's muscle" because it is highly developed in professional boxers due to the scapular protraction that occurs during a punching motion.

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
