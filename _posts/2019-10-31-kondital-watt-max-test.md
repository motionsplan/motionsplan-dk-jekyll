---
title: "Watt max-test: Find konditallet med watt max testen på cykel"
permalink: /kondital-wattmax/
excerpt: "Watt max-testen er en trinvist stigende maksimal test på ergometercykel. Watt-max-testen kan bruges til at estimere din maksimale iltoptagelse og dit kondital - eller du kan bruge Watt-max-testen som et præstationsmål i sig selv."
language: da
header:
  teaser: https://images.unsplash.com/photo-1598289333486-1d36791de1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=5
  caption: Watt max-testen på cykelergometer. Konditionstest på cykel.
category:
  - Kondition
  - Cykling
tags:
  - konditionstest
  - cykel
  - maksimal test
  - indirekte test
  - cykeltest
  - test
  - beregner
last_modified_at: 2019-03-06T23:14:14Z
toc: true
feature_row:
  - image_path: https://local-wattbike-images.s3.amazonaws.com/images/product__wattbike@3x.jpg
    alt: "Wattbike Pro er perfekt til at lave Watt max test på"
    title: "Wattbike Pro eller trainer"
    excerpt: "Uanset om du er på begynderniveau eller er eliteudøver, er Wattbike Pro og Trainer en rigtig god indendørs cykel til din vintertræning."
    url: "https://wattbike.com/dk/product/wattbike"
    btn_label: "Besøg Wattbike"
    btn_class: "btn--success"
breadcrumbs: true
---

*[RPM]: Rounds Per Minute (omdrejninger pr. minut)
*[MPO]: Maksimale Power Output

Watt max-testen er en nem og præcis måde at finde dit kondital på. Du skal bruge et præcist cykelergometer og en forsøgsperson, der vil køre til grænsen. Watt max-testen kan estimere den maksimale iltoptagelse og konditallet med en ret høj korrelation til direkte undersøgelser i laboratorium.

Watt max-testen er enkel at gennemføre. Testen kræver, at du har adgang til en ergometercykel, hvor du kan styre belastningen i watt. De sidste 2-4 minutter af testen er virkeligt hårde.

Hvis du er på udkig efter [Wattmax-testen til børn, så er den beskrevet i et andet indlæg]({% link _posts/2019-10-31-kondital-watt-max-children-test.md %}).

Jeg læste første gang om Wattmax-testen i denne [artikel af Morten Zacho](http://web.archive.org/web/20110606131920/http://www.motion-online.dk/konditionstraening/testning/watt-max_test/){:rel="nofollow"}
{: .notice .notice--info }

## Watt max-testens gennemførelse

1. Start med at veje dig.
2. Varm op i fem minutter ved at cykle 5 min på 100 watt for mænd eller 70 watt for kvinder.
3. Øg belastningen med 35 watt _hvert andet minut_, indtil du ikke længere kan holde belastningen.
4. Notér den højeste belastning (watt), og antallet af sekunder du kunne køre på denne belastning.

I det originale studie kørte de med en kadence på 58-62 RPM. Hvis du har en cykel, hvor watt stiger og falder med, hvor hurtigt du træder i pedalerne, behøver du ikke tænke på kadencen. Du skal bare sørge for at træde de rigtige watt.
{: .notice .notice--info }

## Udregn dit kondital fra Watt max-testen

{% include calculate-fitness-wattmax.html %}

## Videnskabelig baggrund for Watt max-testen

Wattmax-testen er udviklet af Andersen (1995). I studiet blev 232 mænd og 303 kvinder i alderen fra 15-28 år testet. Studiet fandt en korelation på r=0,88 mellem _maximal power output_ og VO<sub>2</sub>max.

Det er altså en relativt høj korrelation, hvilket fik Andersen (1995) til at konkludere, at wattmax-testen kan bruges til at estimere den maksimale iltoptagelse.

Energiforbruget ved forskellige arbejdsbelastninger er relativt konsistent mellem forskellige individer. Derfor kan man forvente, at personer, der træder samme antal watt har samme nogenlunde samme iltoptagelse.

Derfor kan VO<sub>2</sub>-max estimeres ved den højeste arbejdsbelastning, forsøgspersonen kan køre med.

Testen er baseret på, at gennemførelsen af intervallerne primært er afhængig af aerob energifrigørelse.

Først finder du det maksimale power output (MPO) på baggrund af antallet af sekunder på sidste modstand (T) og belastningen på sidste modstand (W) i watt:

{% include math formula="MPO = \frac{T}{120} * 35 + (W - 35)" %}

Derefter finder du den maksimale iltoptagelse i liter pr. minut ud fra den regressionsligning, Andersen (1995) etablerede:

VO<sub>2</sub>max = 0,16 + (0,0117 x MPO) (w)

Og til sidst finder du konditallet som er ml/kg/min:

{% include math formula="Kondital = \frac{VO_2max * 1000}{weight}" %}

Du kan sammenligne dit [kondital med tabellen for mænd og kvinder](/kondital/).

## Watt max-test på Wattbike

Du kan køre testen på en Wattbike ved at bruge tabellerne, der omsætter modstanden til watt [Power, Resistance and Cadence Tables for Wattbike](https://support.wattbike.com/hc/da/articles/115001881825-Power-Resistance-and-Cadence-Tables). Dog skal du lige kalibrere om det også passer med, hvad du træder. På en Wattbike kan testlederen hele tiden holde øje med, at man træder det korrekte antal watt.

[The Maximal Ramp Test](https://wattbike.com/dk/performance-tests/the-maximal-ramp-test) som er indbygget i Wattbikes ligner Watt max-testen, så det kan anbefales bare at bruge den, hvis du har adgang til en Wattbike.

{% include feature_row type="left" %}

## Referencer til Watt max-testen

- Andersen, L. B. 1995. “A Maximal Cycle Exercise Protocol to Predict Maximal Oxygen Uptake”. Scandinavian Journal of Medicine & Science in Sports 5 (3): 143–46. <https://doi.org/10.1111/j.1600-0838.1995.tb00027.x>.
