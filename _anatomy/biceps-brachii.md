---
title: "Tohovedede armbøjer"
latin: Biceps Brachii
tags:
  - imagemap
  - fitnessinstruktør
  - muskel
origin: 
  da: Skulderbladet
insertion: 
  da: Begge underarmsknogler
function: 
  - short: Flexes the arm at the elbow.
    extended: This means that the biceps brachii muscle bends the arm at the elbow joint such that there is a decrease in the angle between the forearm and the upper arm.
  - short: Supinates the forearm.
    extended: This is means that the biceps brachii muscle rotates the forearm outward (i.e. if your arms are hanging by your sides it is the action of turning your palms forward, or if you forearms are held horizontally it is the action of turning your palms upward).
  - short: Bøjning i skulderleddet
    extended: ""
exercises:
  - Stående calf-raise
image: /assets/images/anatomy/biceps-brachii.jpg
image_focus: /assets/images/anatomy/focus-biceps-brachii.jpg
coords:
  - "193,120,209,132,223,143,230,159,229,170,216,167,202,149"
  - "65,167,74,166,85,149,90,135,94,116,77,127,67,138,64,156"
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
