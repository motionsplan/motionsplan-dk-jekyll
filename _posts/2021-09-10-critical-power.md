---
title: &title "Critical Power: Alternativ til FTP-træning"
permalink: /critical-power/
excerpt: "Critical Power er et alternativ til at teste din fysiske formåen, når du har adgang til at måle _power_. Det kan bruges som en erstatning for at måle Functional Threshold Power."
language: da
header:
  overlay_image: https://images.unsplash.com/photo-1475666675596-cca2035b3d79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80
  teaser: https://images.unsplash.com/photo-1475666675596-cca2035b3d79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80
  caption: *title
category:
  - Træning
  - Kondition
tags:
  - træningszoner
last_modified_at: 2021-08-22T23:14:14Z
toc: true
---

Critical Power er et alternativ til at teste din fysiske formåen, når du har adgang til at måle _power_. Det kan bruges som en erstatning for at måle [Functional Threshold Power (FTP)]({% link _posts/2021-08-29-ftp-power.md %}).

{% include video provider="youtube" id="JLDqPDqH69I" %}

## Hvad er Critical Power?

Test af Critical Power er baseret på det princip, at _power output_ over et bestemt 'critical power' følger en veldefineret hyperbolsk kraft-tid kurve.

{% include figure image_path="https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_1024,h_528/https://cpsinmotion.com/wp-content/uploads/2013/10/Critical_Power-1024x528.png" caption="Kilde: [cpsinmotion.com](https://cpsinmotion.com/critical-power-profiling/)" %}

Kurven er defineret af to variable: Critical Power (CP) og W’ (udtales ‘W prime’).

**CP** er *power output* som du kan kører omkring 30-40 minutter.

**W’** er den mængde arbejde som du kan bruge over CP før du når hen til fuldstændig udmattelse.

## Hvordan måles Critical Power?

Du kan bruge en test, hvor du bruger to tests. Du kan enten lave de to tests på to forskellige dage, eller du kan holde en pause på omkring 30 minutter mellem de to tests.

- 3 minutters all out
- 12 minutters all out

Når du kører testene, så skal du forsøge at holde nogenlunde det samme _power output_ gennem hele testen. Du skal altså _pace_ dig selv fra starten i et tempo, du kan holde hele testen.

Når du har lavet de to tests, så kan du sætte resultaterne ind i disse formler.

{% include math formula="CP={\frac{(12*P_{12})-(3*P_3)}{9}}" %}

{% include math formula="W={0.24*(P_3-P_{12})}" %}

I formlerne er P<sub>3</sub> og P<sub>12</sub> den gennemsnitlige watt i hhv. 3-minutters og 12-minutters testen.

Du kan bruge denne beregner:

{% include calculate-critical-power.html %}

Du kan også bruge en lidt **mere præcis testprotokol, hvor du bruger 4 tests**. Du kan finde en beskrivelse og et link til et regneark på [www.bikeradar.com](https://www.bikeradar.com/advice/fitness-and-training/critical-power/).

## Træningszoner baseret på CP

Hvis du vil basere dine [træningszoner]({% link _posts/2021-09-01-traeningszoner.md %}) på *critical power*, så kan du bruge FTP-zonerne med et let modificeret Critical Power.

> Critical power is not the same as FTP, but can be used to estimate your training zones. If using the zones above, take 94 per cent of your Critical Power to replace FTP, then apply the percentages to find your values for each zone.

--- <cite>[www.bikeradar.com](https://www.bikeradar.com/advice/fitness-and-training/critical-power/)</cite>

{% include table-ftp-critical-power.html %}

## Konklusion

Du kan læse mere om critical power i dette studium af [Poole et al (2016)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5070974/).
