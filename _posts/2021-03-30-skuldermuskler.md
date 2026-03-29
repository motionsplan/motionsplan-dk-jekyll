---
title: &title "Skuldermuskler: Liste og øvelser til stærke skuldre"
seo_title: "Skuldermuskler: Komplet guide til anatomi og træning"
description: "Lær om skuldermusklerne (deltoideus og rotator cuff). Liste over muskler i skulderen og de bedste øvelser til træning."
permalink: /muskler/skulder/
redirect_from:
  - /skuldermuskler/
  - /muskler/skulderen/
language: da
header:
  overlay_image: https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&h=630&w=1200&q=60
  teaser: https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&h=300&w=400&q=10
  caption: *title
category:
  - Anatomi
  - Muskler
tags:
  - muskler
  - anatomi
  - skulder
last_modified_at: 2026-03-29T17:15:00Z
toc: true
author: lsolesen
sidebar:
  nav: muscles
breadcrumbs: true
---

Jeg har samlet en liste over muskler i din skulder her. Det er afgørende at forstå skulderens anatomi, hvis du vil have stærke, brede og sunde skuldre uden skader.

{% include figure image_path=page.header.teaser caption="Skulderen er kroppens mest bevægelige led, hvilket stiller store krav til muskulaturen." alt="skuldermuskler og anatomi" %}

Skulderen er et komplekst led, hvor balancen mellem styrke og mobilitet er nøglen. For at træne skulderen effektivt skal du både fokusere på de synlige muskler som [deltoideus](/deltoid/) og de dybe stabilisatorer i [rotator cuffen](/rotator-cuff/).

Jeg har lavet en liste over [gode øvelser til skuldrene](/skulderoevelser/).

## Hvorfor træne musklerne i skulderen?

Skulderleddet er et kugleled med en meget flad ledskål. Det betyder, at det er musklerne, der primært holder overarmen på plads. Stærke skuldre er derfor ikke kun vigtige for udseendet (den klassiske V-form), men i høj grad for at [forebygge skader]({% link _posts/2020-11-23-skadesforebyggelse.md %}) som indeklemning (impingement) og instabilitet.

Når skuldermusklerne er stærke og i balance, vil du præstere bedre i alle presse-øvelser som bænkpres og overhead press, samt i sportsgrene som svømning, kast og ketsjersport.

## Hvilke muskler har du i din skulder?

Skulderens muskulatur kan deles op i to primære lag:

1. **De overfladiske muskler:** Her dominerer den store deltamuskel (*m. deltoideus*), som er opdelt i en forreste, midterste og bagerste del. Det er denne muskel, der giver skulderen dens runde form.
2. **De dybe stabilisatorer (Rotator cuffen):** Består af fire mindre muskler (*supraspinatus*, *infraspinatus*, *teres minor* og *subscapularis*). Deres vigtigste job er at "suge" overarmshovedet ind i ledskålen under bevægelse for at sikre stabilitet.

I denne oversigt kigger vi på de muskler, der har deres primære virke over skulderleddet, og som er afgørende for både din styrke og ledstabilitet.

## Liste over muskler i skulderen

Herunder finder du en liste over skuldermusklerne med genveje til dybdegående information om hver enkelt:

{% assign muscles = site.anatomy | where: "group", "Skulder" %}
{%- for m in muscles -%}
- [{{ m.name.da | default: m.title }} - {{ m.name.latin }}]({{ m.url }})
{%- endfor -%}

Herudover spiller muskler omkring skulderbladet som [Trapezius](/trapezius/) og [Serratus Anterior](/serratus-anterior/) en kæmpe rolle for skulderens samlede sundhed og funktion.

Jeg har lavet en samlet [liste over alle muskler i kroppen her](/muskler/), hvis du vil lære mere om [anatomien](/anatomi/).

## Vigtige øvelser til træning af skuldermuskler

For at ramme alle dele af skulderen bør din træning indeholde både pres over hovedet og løft til siden eller bagsiden.

{% include motionsplan/exercise key="45" title="Military Press" %}

{% include motionsplan/exercise key="272" title="Lateral Raise" %}

{% include motionsplan/exercise key="285" title="Face Pulls" %}

## Konklusion

En stærk skulder kræver træning af både de store synlige muskler og de små stabilisatorer. Ved at variere dine øvelser sikrer du, at hele leddet fungerer optimalt og forbliver skadesfrit. Se flere forslag til din [skuldertræning og specifikke øvelser her](/skulderoevelser/).

<details markdown="1" class="references">
  <summary><h2 id="references">Referencer</h2></summary>

- Bojsen-Møller, F. & Simonsen, E. B. (2014). *Bevægeapparatets anatomi* (13. udg.). Munksgaard.
- Schünke, M., Schulte, E. & Schumacher, U. (2020). *Prometheus - Atlas of Anatomy* (3. udg.). Thieme.
- Netter, F. H. (2022). *Atlas of Human Anatomy* (8. udg.). Elsevier.

</details>