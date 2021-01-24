---
title: "Bred rygmuskel"
name:
  latin: "Latissimus Dorsi"
tags:
  - imagemap
  - fitnessinstruktør
  - muskel
origin: 
  da: Hoftebenskammen, lændehvirvler og de nederste brysthvirvler
insertion: 
  da: Øverst foran på overarmsknoglen, og på den nederste del af skulderbladet
function:
  da:
    - short: Adducts the arm at the shoulder.
      extended: This means that the latissimus dorsi muscle moves the upper arm toward the vertical midline of the body (i.e. the action of pulling your arms in to your sides).
    - short: Extends the arm at the shoulder.
      extended: This means that the latissimus dorsi muscle moves the upper arm downward to the rear.
    - short: Medially rotates the upper arm.
      extended: This means that the latissimus dorsi muscle rotates the upper arm inward around the axis of the bone (i.e. it rotates the upper arm toward the vertical midline of the body).
  en:
    - short: Adducts the arm at the shoulder.
      extended: This means that the latissimus dorsi muscle moves the upper arm toward the vertical midline of the body (i.e. the action of pulling your arms in to your sides).
    - short: Extends the arm at the shoulder.
      extended: This means that the latissimus dorsi muscle moves the upper arm downward to the rear.
    - short: Medially rotates the upper arm.
      extended: This means that the latissimus dorsi muscle rotates the upper arm inward around the axis of the bone (i.e. it rotates the upper arm toward the vertical midline of the body).
secondary_function:
  da:
    - short: "Bøjer i knæleddet"
exercises:
  - Stående calf-raise
image: /assets/images/anatomy/latissimus-dorsi.jpg
image_focus: /assets/images/anatomy/focus-latissimus-dorsi.jpg
coords:
  - "98,123,95,134,99,148,102,134"
  - "188,122,186,134,188,152,192,134"
  - "410,134,426,138,438,135,451,165,441,182,433,204,420,184,419,168,412,146"
  - "462,162,478,131,488,135,503,134,503,142,495,166,494,182,485,195,481,202"
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
