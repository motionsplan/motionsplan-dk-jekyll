---
layout: single
title: "Skeletmuskler"
excerpt: "Musklerne hæfter på knoglerne, så de kan bevæge dem i forhold til hinanden."
permalink: /muskler/
tags:
  - anatomi
toc: true
toc_sticky: true
author_profile: true
sidebar:
  nav: anatomi
---

Der findes forskellige muskeltyper, men i forbindelse med analyser af bevægelser er skeletmusklerne de mest relevante.

Skeletmusklerne kan opdeles i tre kategorier.

- **Stabiliserende muskler**. Disse muskler er mindre lednære muskler, som skal stabilisere leddene. Fx findes der små muskler ned langs rygsøjlen.
- **Åndedrætsmuskler**. Musklerne indgår i åndedrættet og kan være med til at lave bugtryk.
- **Bevægelsesmuskler**. Muskler som har til opgave at bevæge kroppen og styre bevægelserne.

I nedenstående figur er det mest relevante muskler i forhold til træning vist på skelettet. Alle musklerne er relevante for træningen.

## Muskeloversigt

{% include anatomy.html %}

### Øvrige muskler

Øvrige vigtige muskler, der ikke vises i skelettet er:

{% assign imagemap = site.anatomy | where: "tags", "not-in-imagemap" %}
{% for m in imagemap %}
- [{{ m.title }}]({{ m.url }})
{% endfor %}
