---
title: "Rhomboideus"
group:
  - Ryg
name:
  latin: "Rhomboideus"
tags:
  - not-in-imagemap
  - muskel
origin: 
  da: 
insertion: 
  da: 
function:
  da:
    - short: Elevates the scapula.
      extended: This means that the trapezius muscle lifts the shoulder girdle up (i.e. shrugging your shoulders).
    - short: Retracts the scapula.
      extended: This means that the trapezius muscle pulls the scapula, or shoulder blade, rearward such that it approaches the spine.
  en:
    - short: Elevates the scapula.
      extended: This means that the trapezius muscle lifts the shoulder girdle up (i.e. shrugging your shoulders).
    - short: Retracts the scapula.
      extended: This means that the trapezius muscle pulls the scapula, or shoulder blade, rearward such that it approaches the spine.
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
