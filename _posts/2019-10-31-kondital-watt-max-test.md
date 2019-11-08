---
title: "Find konditallet ud fra Watt-max testen på cykel"
permalink: /kondital-wattmax/
excerpt: ""
language: da
header:
  overlay_image: https://i.ytimg.com/vi/zUyuUoU7lAQ/maxresdefault.jpg
  teaser: https://i.ytimg.com/vi/zUyuUoU7lAQ/maxresdefault.jpg
category:
  - Kondition
tags:
  - konditionstest
  - cykel
last_modified_at: 2019-03-06T23:14:14Z
toc: true
---

TILFØJ FEATURE_ROW MED WATTBIKE 
https://wattbike.com/dk/product/wattbike

*[RPM]: Rounds Per Minute (omdrejninger pr. minut)

En nem og præcis måde at finde dit kondital på. Du skal bruge et præcist cykelergometer og en forsøgsperson, der vil køre til grænsen. Denne test kan estimere den maksimale iltoptagelse og konditallet med en ret høj korrelation til undersøgelser i laboratorie. 

Testen er uhyre simpel at gennemføre og kræver blot, at man har adgang til en ergometercykel, der kan vise belastningen i watt. Hertil kræver testen, at man er i stand til at køre sig helt ud, men dette er faktisk mindre hårdt end det lyder, da det kun er de sidste 2-4 minutter der er virkeligt hårde.

## Testens gennemførelse

1. Start med at veje dig.
2. Varm op i fem minutter ved at cykle 5 min på 100 watt (mand) eller 5 min på 70 watt (kvinde).
3. Øg belastningen med 35 watt _hvert andet minut_, indtil du ikke længere kan holde belastningen.
4. Notér den højeste belastning (watt), og antallet af sekunder du kunne køre på denne belastning.

I det originale studie kørte de med en kadence på 58-62 RPM. Hvis du har en cykel, hvor watt stiger og falder med, hvor hurtigt du træder i pedalerne, behøver du ikke tænke på kadencen. Du kører bare indtil, du ikke kan træde længere.
{: .notice .notice--info }

{% include calculate-fitness-wattmax.html %}

## Baggrund

Energiforbruget ved forskellige arbejdsbelastninger er relativt konsistent mellem forskellige individer. Derfor kan VO<sub>2</sub>-max estimeres ved den højeste arbejdsbelastning, forsøgspersonen kan køre med.

## Den videnskabelige baggrund for testen 

Testen er udviklet af Lars Bo Andersen fra Institut for Idræt på Københavns Institut. Formlen, der ligger til grund for testen, er fundet ved regressionsanalyse på testresultater fra over 500 forsøgspersoner (både mænd og kvinder).

Testen baserer sig på, at en belastning der skal holdes i 2 minutter (og som laves efter andre lavere 2 minutters intervaller) primært er afhængig af aerob energifrigørelse. Da nyttevirkningen ved kørsel på kondicykel er ret ens for forskellige personer, kan man regne med, at folk der træder det samme antal watt ved en sådan test også har den samme iltoptagelse.

Formlen bag testen: VO2max = 0,16 + (0,0117 x MPO) (w)

VO2max er den maksimale iltoptagelse i liter pr. minut.

MPO er det maksimale power output (antal watt) (der tages højde for hvor mange sekunder man holdt sit max).

## Det tekniske

Først finder du P<sub>max</sub> på baggrund af antallet af sekunder på sidste modstand (T) og belastningen på sidste modstand (W) i watt:

{% include math formula="P_{max} = \frac{T}{120} * 35 + (W - 35)" %}

Herefter finder du VO<sub>2</sub>-max:

VO<sub>2</sub>-max = 0.16 + (0.0117 * P<sub>max</sub>)

Og til sidst finder du konditallet:

{% include math formula="Kondital = \frac{VO_2max * 1000}{weight}" %}

## Wattbike

Hvis du har adgang til en Wattbike, så https://wattbike.com/dk/performance-tests/the-maximal-ramp-test

## Referencer

[Power, Resistance and Cadence Tables for Wattbike](https://support.wattbike.com/hc/da/articles/115001881825-Power-Resistance-and-Cadence-Tables)

[Wattmax test](https://systime.dk/fileadmin/indhold/SupplerendeMaterialer/Idraet_-_teori_og_traening/4_Traeningslaere/watt-max.htm)

A maximal cycle exercise protocol to predict maximal oxygen uptake.
Andersen LB.
Scand J Med Sci Sports 1995 Jun;5(3):143-6
