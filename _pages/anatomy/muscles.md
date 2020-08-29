---
layout: single
title: "Skeletmuskler: Muskler, muskelgrupper og muskeloversigt"
excerpt: "Skeletmuskler bevæger kroppen. Jeg har lavet en oversigt over muskler, muskelgrupper og muskel anatomi, hvor du kan se navne på kroppens muskler på latin og dansk."
permalink: /muskler/
tags:
  - anatomi
toc: true
toc_sticky: true
author_profile: true
sidebar:
  nav: anatomi
---

muskelgrupper
muskel navne
muskel anatomi
muskler på latin
kroppens muskler dansk

De muskler, der skaber bevægelse af kroppen, kaldes for ”den tværstribede skeletmuskulatur”. Denne side handler om skeletmusklerne. Først kan du læse en kort introduktion til, hvad muskler og skeletmuskler er og deres anatomi. Derefter kigger jeg på de forskellige muskelgrupper.

Musklerne er hæftet til knoglerne via sener. Når musklerne gennem nervesystemet får et signal, vil de trække sig sammen og ved hjælp af leddenes bevægelighed skabe bevægelse af skelettets knogler.

Musklerne er altså en del af en funktionel enhed sammen med led og knogler. Musklerne på forsiden og bagsiden af et led samarbejder om en bevægelse. Musklen, der udfører bevægelsen kaldes agonisten, mens musklen på den modsatte side kaldes antagonisten. 

Der er således muskulær aktivitet i begge muskler. Agonisten har mest aktivitet til at udføre bevægelsen, men antagonisten er med til at stabilisere leddet, så den er også aktiv. 

## Skeletmusklernes opdeling

Der findes forskellige muskeltyper, men i forbindelse med analyser af bevægelser er skeletmusklerne de mest relevante.

Skeletmusklerne kan opdeles i tre kategorier.

- **Stabiliserende muskler**. Disse muskler er mindre lednære muskler, som skal stabilisere leddene. Fx findes der små muskler ned langs rygsøjlen.
- **Åndedrætsmuskler**. Musklerne indgår i åndedrættet og kan være med til at lave bugtryk.
- **Bevægelsesmuskler**. Muskler som har til opgave at bevæge kroppen og styre bevægelserne.

I nedenstående figur er det mest relevante muskler i forhold til træning vist på skelettet. Alle musklerne er relevante for træningen.

## Muskeloversigt og anatomi

{% include anatomy.html %}

### Liste over andre muskler

Øvrige vigtige muskler, der ikke vises i skelettet, er:

{% assign imagemap = site.anatomy | where: "tags", "not-in-imagemap" %}
{% for m in imagemap %}
- [{{ m.title }}]({{ m.url }})
{% endfor %}

## Muskeloversigt med navne på dansk og latin

{% include table-muscles.html %}
