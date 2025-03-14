---
title: &title "Find konditallet for børn ud fra Watt-max testen på cykel"
permalink: /kondital-wattmax-boern/
excerpt: "Watt-max test for børn er en trinvist stigende maksimaltest på ergometercykel, som du kan bruge til at udregne konditallet. Testen er tilpasset børn fra 7 - 15 år og lavet af danske forskere."
language: da
header:
  teaser: https://i.ytimg.com/vi/jQ_Qtu9qSLU/maxresdefault.jpg
  caption: *title
category:
  - Kondition
meta:
  name: Watt-max-test for børn
  measures: kondital
  type: cykeltest
  equipment: cykel
  max: maksimal test
  direct: indirekte test
  target: børn
tags:
  - konditionstest
  - cykling
  - børn
  - maksimal test
  - indirekte test
  - cykeltest
  - test
  - testberegner
last_modified_at: 2019-03-06T23:14:14Z
toc: true
breadcrumbs: true
---

*[RPM]: Rounds Per Minute (omdrejninger pr. minut)

[Watt max-testen](/kondital-wattmax/) nem og præcis måde at finde kondital for børn på. I testen stiger belastningen progressivt, så den kræver et pålideligt cykelergometer, hvor du kan aflæse belastningen og et stopur. Du kan estimere din maksimale iltoptagelse ud fra den maksimale belastning, du kan træde på cyklen.

Dette er en modificeret udgave af [Watt-max-testen for voksne](/kondital-wattmax/) udarbejdet af Wedderkopp et al (2004). Du skal bruge et præcist cykelergometer og et barn, der kan køre sig selv til grænsen af sin maksimale ydeevne. Denne test kan estimere den maksimale iltoptagelse og konditallet med en ret høj korrelation i forhold til iltoptagelsesmålinger lavet i et laboratorium.

## Instruktion til watt-max-testen for børn

1. Først vejer du dig.
2. Varm op i 10 minutter.
3. Du starter testen med at køre 3 minutter på 25 watt.
4. Herefter øges belastningen med 25 watt hvert tredje minut, indtil du ikke længere kan holde til at køre ved den angivne belastning (hvis du vejer under 30 kg, så foreslår Wedderkopp et al (2004) at bruge 20 watt i stedet).
5. Dit resultat er den højeste belastning og hvor mange sekunder, du kørte på belastningen.
6. Beregn dit kondital i nedenstående beregner.

## Beregn kondital for børn

{% include calculator/calculate-fitness-wattmax-children.html %}

## Om Watt-max-testen for børn

Watt-max-testen til børn er baseret på testen til voksne, men der arbejdes med en anden stigning i belastning.

> Testen er valideret på en elektronisk Monark-cykel, der automatisk holder den indstillede watt-belastning. Testen blev typisk stoppet, hvis kadencen faldt til under 30 RPM.
>
> --- <cite>[Morten Zacho](https://web.archive.org/web/20150403145124/http://www.motion-online.dk/konditionstraening/testning/watt-max-test-for-boern/){:rel="nofollow"}</cite>

Wedderkopp et al (2004) anbefaler, at hvis børnene vejer mindre end 30 kg, så skal de bruge et mindre spring i belastning undervejs. Derfor har jeg lavet beregneren, så du både kan bruge den med 20 watt (for børn under 30 kg) og 25 watt (for børn over 30 kg).

Testen bør køres med en kadence på 60-80 RPM.

## Formler bag Watt-max-testen for børn

Først finder du det maksimale power output (MPO) på baggrund af antallet af sekunder på sidste modstand (T) og belastningen på sidste modstand (W) i watt:

{% include motionsplan/math formula="MPO = \frac{T}{180} * 25 + (W - 25)" %}

Derefter finder du den maksimale iltoptagelse i liter pr. minut ud fra denne formel:

VO₂max = 13.16 * MPO + 5 * weight

## Andre konditionstests for børn

Hvis du har en større gruppe børn, du gerne vil teste på en gang, så bør du kigge på [Andersen testen](/andersen-test/), som er en let måde at teste flere børn ad gangen med mindre udstyr.

<details markdown="1" class="references">
  <summary><h2 id="references">Referencer</h2></summary>

- Wedderkopp, N., K. Froberg, H. S. Hansen, og L. B. Andersen. 2004. “Secular Trends in Physical Fitness and Obesity in Danish 9-Year-Old Girls and Boys: Odense School Child Study and Danish Substudy of the European Youth Heart Study”. Scandinavian Journal of Medicine & Science in Sports 14 (3): 150–55. <https://doi.org/10.1111/j.1600-0838.2004.00365.x>.
</details>
