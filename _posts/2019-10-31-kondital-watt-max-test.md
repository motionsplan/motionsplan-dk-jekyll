---
title: "Find konditallet ud fra Watt-max testen på cykel"
permalink: /kondital-wattmax/
excerpt: ""
language: da
header:
  overlay_image: https://prod-wattbike-images.s3.amazonaws.com/images/Wattbike4059_edit-(2)-ecffa30a11c87543.jpg
  teaser: https://prod-wattbike-images.s3.amazonaws.com/images/Wattbike4059_edit-(2)-ecffa30a11c87543.jpg
category:
  - Kondition
tags:
  - konditionstest
  - cykel
last_modified_at: 2019-03-06T23:14:14Z
toc: true
feature_row:
  - image_path: https://local-wattbike-images.s3.amazonaws.com/images/product__wattbike@3x.jpg
    alt: "Wattbike Pro"
    title: "Wattbike Pro eller trainer"
    excerpt: "Uanset om du er på begynderniveau eller er eliteudøver, er Wattbike Pro og Trainer udviklet til at forbedre din performance."
    url: "https://wattbike.com/dk/product/wattbike"
    btn_label: "Læs mere"
    btn_class: "btn--success"
---

*[RPM]: Rounds Per Minute (omdrejninger pr. minut)
*[MPO]: Maksimale Power Output

En nem og præcis måde at finde dit kondital på. Du skal bruge et præcist cykelergometer og en forsøgsperson, der vil køre til grænsen. Denne test kan estimere den maksimale iltoptagelse og konditallet med en ret høj korrelation til undersøgelser i laboratorium. 

Testen er uhyre simpel at gennemføre og kræver blot, at man har adgang til en ergometercykel, der kan vise belastningen i watt. Testen er mindre hård end den lyder, da det kun er de sidste 2-4 minutter der er virkeligt hårde.

## Testens gennemførelse

1. Start med at veje dig.
2. Varm op i fem minutter ved at cykle 5 min på 100 watt (mand) eller 5 min på 70 watt (kvinde).
3. Øg belastningen med 35 watt _hvert andet minut_, indtil du ikke længere kan holde belastningen.
4. Notér den højeste belastning (watt), og antallet af sekunder du kunne køre på denne belastning.

I det originale studie kørte de med en kadence på 58-62 RPM. Hvis du har en cykel, hvor watt stiger og falder med, hvor hurtigt du træder i pedalerne, behøver du ikke tænke på kadencen. Du kører bare indtil, du ikke kan træde længere.
{: .notice .notice--info }

{% include calculate-fitness-wattmax.html %}

## Videnskabelig baggrund for Wattmax-testen

Testen er udviklet af Lars Bo Andersen fra Institut for Idræt på Københavns Institut. Formlen, der ligger til grund for testen, er fundet ved regressionsanalyse på testresultater fra over 500 forsøgspersoner (både mænd og kvinder).

Energiforbruget ved forskellige arbejdsbelastninger er relativt konsistent mellem forskellige individer, fordi man kan forvente at personer, der træder samme antal watt har samme iltoptagelse. Derfor kan VO<sub>2</sub>-max estimeres ved den højeste arbejdsbelastning, forsøgspersonen kan køre med.

Testen er baseret på, at gennemførslen af intervallerne primært er afhængig af aerob energifrigørelse. 

Først finder du det maksimale power output (MPO) på baggrund af antallet af sekunder på sidste modstand (T) og belastningen på sidste modstand (W) i watt:

{% include math formula="MPO = \frac{T}{120} * 35 + (W - 35)" %}

Derefter finder du den maksimale iltoptagelse i liter pr. minut:

VO<sub>2</sub>max = 0,16 + (0,0117 x MPO) (w)

Og til sidst finder du konditallet som er ml/kg/min:

{% include math formula="Kondital = \frac{VO_2max * 1000}{weight}" %}

## Wattmax-test på Wattbike

Du kan køre testen på en Wattbike ved at bruge tabellerne, der omsætter modstanden til watt [Power, Resistance and Cadence Tables for Wattbike](https://support.wattbike.com/hc/da/articles/115001881825-Power-Resistance-and-Cadence-Tables). Dog skal du lige kalibrere om det også passer med, hvad du træder.

[The Maximal Ramp Test](https://wattbike.com/dk/performance-tests/the-maximal-ramp-test) som er indbygget i Wattbikes ligner dog rigtig meget Wattmax-testen, så det kan anbefales bare at bruge den.

{% include feature_row type="left" %}

## Referencer

[Wattmax test](https://systime.dk/fileadmin/indhold/SupplerendeMaterialer/Idraet_-_teori_og_traening/4_Traeningslaere/watt-max.htm)

A maximal cycle exercise protocol to predict maximal oxygen uptake.
Andersen LB.
Scand J Med Sci Sports 1995 Jun;5(3):143-6
