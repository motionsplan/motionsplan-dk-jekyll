---
layout: single
title: "Muskler og skeletmuskler"
excerpt: "Muskler (skeletmuskler) bevæger kroppen. Musklerne hæfter på knoglerne, så musklerne kan bevæge knoglerne i forhold til hinanden."
permalink: /muskler/
tags:
  - anatomi
toc: true
toc_sticky: true
author_profile: true
sidebar:
  nav: anatomi
---

De muskler, der skaber bevægelse af kroppen, kaldes for ”den tværstribede skeletmuskulatur”. Det er dem vi kigger på i denne sammenhæng. Musklerne er hæftet til knoglerne via sener. Når musklerne gennem nervesystemet får et signal, vil de trække sig sammen og ved hjælp af leddenes bevægelighed skabe bevægelse af skelettets knogler.

Musklerne er altså en del af en funktionel enhed sammen med led og knogler. Musklerne på forsiden og bagsiden af et led samarbejder om en bevægelse. Musklen, der udfører bevægelsen kaldes agonisten, mens musklen på den modsatte side kaldes antagonisten. 

Der er således muskulær aktivitet i begge muskler. Agonisten har mest aktivitet til at udføre bevægelsen, men antagonisten er med til at stabilisere leddet, så den er også aktiv. 

## Skeletmusklernes opdeling

Der findes forskellige muskeltyper, men i forbindelse med analyser af bevægelser er skeletmusklerne de mest relevante.

Skeletmusklerne kan opdeles i tre kategorier.

- **Stabiliserende muskler**. Disse muskler er mindre lednære muskler, som skal stabilisere leddene. Fx findes der små muskler ned langs rygsøjlen.
- **Åndedrætsmuskler**. Musklerne indgår i åndedrættet og kan være med til at lave bugtryk.
- **Bevægelsesmuskler**. Muskler som har til opgave at bevæge kroppen og styre bevægelserne.

I nedenstående figur er det mest relevante muskler i forhold til træning vist på skelettet. Alle musklerne er relevante for træningen.

## Muskeloversigt

{% include anatomy.html %}

### Øvrige muskler

Øvrige vigtige muskler, der ikke vises i skelettet, er:

{% assign imagemap = site.anatomy | where: "tags", "not-in-imagemap" %}
{% for m in imagemap %}
- [{{ m.title }}]({{ m.url }})
{% endfor %}
