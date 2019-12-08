---
title: "Flyndermusklen"
latin: "Soleus"
tags:
  - imagemap
  - fitnessinstruktør
  - muskel
origin: 
  da: Øverst på lægbenet og øverste 2/3 af skinnebenet bagpå.
insertion: 
  da: I akillessenen og fæster på hælbenet.
function: 
  - short: Plantar flexes the foot.
    extended: This means that the soleus muscle extends the ankle such that the angle between the top of the foot and the lower leg increases (i.e. the action of rising up on your toes or the balls of your feet).
exercises:
  - Stående calf-raise
  - Siddende calf-raise
image: /assets/images/anatomy/soleus.jpg
image_focus: /assets/images/anatomy/focus-soleus.jpg
coords:
  - "406,419,419,451,420,460,410,439,407,429"
  - "508,421,501,434,496,457,504,442"
  - "112,421,114,426,119,429,117,443,114,463,111,440"
  - "174,465,171,446,168,430,173,427,176,419"
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
