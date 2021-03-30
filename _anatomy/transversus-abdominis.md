---
title: "Bugpressen"
group:
  - Mave
name:
  latin: "Transversus Abdominis"
tags:
  - fitnessinstruktør
  - muskel
  - not-in-imagemap
origin: 
  da: Nederste ribben, hoftebenskammen og lændefascien
insertion: 
  da: Rectusskeden
function:
  da:
    - short: Vigtig stabilisator af rygsøjlen
      extended: ""
exercises:
  - Stående calf-raise
image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Transversus_abdominis.png/375px-Transversus_abdominis.png
image_focus: 
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

{% if page.image_focus %}
{% include figure image_path=page.image_focus alt=page.title caption=page.title %}
{% endif %}
