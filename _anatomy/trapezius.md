---
title: "Kapppemusklen - Trapezius"
group:
  - Ryg
name:
  latin: "Trapezius"
  da: "Kappemusklen"
tags:
  - imagemap
  - muskel
#origin: 
#  da: Nakkehvirvlen og nakkebåndet. Desuden torntappene fra 6. halshvirvel til 12. brysthvirvel
#insertion: 
#  da: "Øverste del: Yderste del af kravebenet. Midterste del: Skulderhøjden og øverste rand af skulderkammen. Nederste del: Inderste del af skulderkammen."
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
image: /assets/images/anatomy/trapezius.jpg
image_focus: /assets/images/anatomy/focus-trapezius.jpg
coords:
  - "464,55,449,56,448,66,439,76,416,94,429,97,437,105,440,129,457,158,475,124,481,95,497,90,475,77,465,67"
  - "180,87,160,72,163,89"
  - "124,88,110,83,127,73"
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

Her er en nem og effektiv øvelse til for trapezius (kappemusklen). Øvelsen er også god til at styrke øvre ryg. Brug en elastik eller evt. en håndvægt til øvelsen.

{% include video provider="youtube" id="AYOTS-L4_Wg" %}

{% if page.image_focus %}
  {% include figure image_path=page.image_focus alt=page.title caption=page.title %}
{% endif %}