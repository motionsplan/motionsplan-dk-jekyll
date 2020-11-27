---
title: &title "Find konditallet for børn ud fra Watt-max testen på cykel"
permalink: /kondital-wattmax-boern/
excerpt: "Watt-max test for børn er en trinvist stigende maksimaltest på ergometercykel, som du kan bruge til at udregne konditallet."
language: da
header:
  overlay_image: https://i.ytimg.com/vi/jQ_Qtu9qSLU/maxresdefault.jpg
  teaser: https://i.ytimg.com/vi/jQ_Qtu9qSLU/maxresdefault.jpg
  caption: *title
category:
  - Kondition
tags:
  - konditionstest
  - cykel
  - børn
  - maksimal test
  - indirekte test
  - cykeltest
last_modified_at: 2019-03-06T23:14:14Z
toc: true
---

*[RPM]: Rounds Per Minute (omdrejninger pr. minut)

Wattmax-testen nem og præcis måde at finde kondital for børn på. Testen lader belastningen stige progressivt, så den kræver et pålideligt cykelergometer, hvor du kan aflæse belastningen og et stopur. Du kan estimere din maksimale iltoptagelse ud fra den maksimale belastning, du kan træde på cyklen.

Dette er en modificeret udgave af [Wattmax-testen for voksne](/kondital-wattmax/) udarbejdet af Wedderkopp et al (2004). Du skal bruge et præcist cykelergometer og et barn, der kan køre sig selv til grænsen. Denne test kan estimere den maksimale iltoptagelse og konditallet med en ret høj korrelation til undersøgelser i laboratorium.

Jeg læste første gang om Wattmax-testen i denne [artikel af Morten Zacho](http://web.archive.org/web/20110606132059/http://www.motion-online.dk/konditionstraening/testning/watt-max_test_for_boern/){:rel="nofollow"}
{: .notice .notice--info }

## Instruktion til wattmax-testen for børn

1. Først vejer du dig.
2. Du starter testen med at køre 3 minutter på 25 watt.
3. Herefter øges belastningen med 25 watt hvert tredje minut, indtil du ikke længere kan holde til at køre ved den angivne belastning (hvis du vejer under 30 kg, så brug 20 watt i stedet).
3. Notér den højeste belastning og hvor mange sekunder, du kørte på belastningen. 
4. Beregn dit kondital i nedenstående beregner.

## Beregn kondital for børn

{% include calculate-fitness-wattmax-children.html %}

## Om Wattmax-testen for børn

Wattmax-testen til børn er baseret på testen til voksne, men der arbejdes med en anden stigning i belastning.

> Testen er valideret på en elektronisk Monark-cykel, der automatisk holder den indstillede watt-belastning. Testen blev typisk stoppet, hvis kadencen faldt til under 30 RPM.

--- <cite>[Morten Zacho](http://web.archive.org/web/20150403145124/http://www.motion-online.dk/konditionstraening/testning/watt-max-test-for-boern/){:rel="nofollow"}</cite>

Wedderkopp et al (2004) anbefaler, at hvis børnene vejer mindre end 30 kg, så skal de bruge et mindre spring i belastning undervejs. Derfor har jeg lavet beregneren, så du både kan bruge den med 20 watt (for børn under 30 kg) og 25 watt (for børn over 30 kg).

Testen bør køres med en kadence på 60-80 RPM.

## Formler bag Wattmax-testen for børn

Først finder du det maksimale power output (MPO) på baggrund af antallet af sekunder på sidste modstand (T) og belastningen på sidste modstand (W) i watt:

{% include math formula="MPO = \frac{T}{180} * 25 + (W - 25)" %}

Derefter finder du den maksimale iltoptagelse i liter pr. minut ud fra denne formel:

VO<sub>2</sub>max = 13.16 * MPO + 5 * weight

## Reference

- Wedderkopp, N., K. Froberg, H. S. Hansen, og L. B. Andersen. 2004. “Secular Trends in Physical Fitness and Obesity in Danish 9-Year-Old Girls and Boys: Odense School Child Study and Danish Substudy of the European Youth Heart Study”. Scandinavian Journal of Medicine & Science in Sports 14 (3): 150–55. <https://doi.org/10.1111/j.1600-0838.2004.00365.x>.

