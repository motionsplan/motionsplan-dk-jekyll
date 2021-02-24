---
title: &title "Hvad er min hastighed i km/t, m/s eller min/km? [Beregner]"
description: "Beregn hastighed og løbehastighed i vores beregner ✔ Hvordan udregner man km/t, m/s og min/km ✔ Omregning km/t til min/km ✔ Tabel til udskrift."
permalink: /hastighed/
excerpt: "Beregn din hastighed i km/t, m/s eller min/km, så du ved hvor hurtigt du løber eller cykler. Du kan også se en tabel, så du ikke behøver at regne."
language: da
header:
  overlay_image: https://images.unsplash.com/photo-1526676537331-7747bf8278fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80
  teaser: https://images.unsplash.com/photo-1526676537331-7747bf8278fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80
  caption: *title
category:
  - Kondition
  - Løb
tags:
  - løb
  - cykling
  - beregnere
last_modified_at: 2019-11-19T23:14:14Z
toc: true
---

Når jeg laver træningsprogrammer til løb eller cykling, vil jeg typisk gerne kende den hastighed og tempo, jeg skal træne med. Jeg har lavet en beregner og en tabel, som kan hjælpe med at beregne km/t, m/s og min/km og derved finde din løbehastighed og cykelhastighed.

Du kan bruge tabellen og beregneren til at få svar på spørgsmålet: "Hvad er min hastighed?". Du kan i beregneren udregne din løbehastighed eller omregne fra km/t til min/km eller tilbage igen.

Hvis du leder efter en [løbsberegner til at udregne løbehastigheder for træningstider og konkurrencetider, så tjek Jack Daniels Running Formula]({% link _posts/2020-08-01-jack-daniels-loebeberegner.md %}).

## Hvordan angiver man løbehastighed?

Typisk kan man i angive hastigheden på to forskellige måder:

- **km/t**. Den hastighed kender du fra sit spedometer i bilen, så den er let at forholde sig til. Typisk er det også den hastighed, man kan indstille på et løbebånd. Jeg synes, at den er lidt vanskeligere at bruge, når man er ude på en løbetur.
- **min/km**. På løbeture foretrækker jeg at forholde mig til, hvor mange minutter jeg bruger for at løbe en kilometer. Det er let at forholde sig til - særligt hvis man kender den distance, man løber.

## Udregn hastighed fra distance og tid (km/t)

{% include calculate-hastighed.html %}

## Omregn fra km/t til min/km

{% include convert-hastighed-kmt-minkm.html %}

## Konverter fra min/km til km/t

{% include convert-hastighed-minkm-kmt.html %}

## Hvorfor skal jeg kende min hastighed?

Det gør virkelig en forskel i din træning om du rammer den rigtige intensitet. Hastigheden er en måde at måle intensiteten på. Det er særligt på de planlagte langsommere ture, at det giver god mening at kende sit tempo, så din løbehastighed ikke bliver for høj.

## Tabel med km/t, m/s og min/km og andre tider

{% include table-kmt-minkm.html %}

## Formel: Beregning af hastighed i km/t fra distance og tid

Hvis du gerne selv vil beregne hastigheden ud fra distance og tid uden at skulle bruge en beregner, så kan du benytte følgende formel.

{% include math formula="Hastighed (km/t) = \frac{distance (km) * 60 (min/t)}{tid (min)}" %}

Hvis du fx løber 10 km på 50 minutter, så bliver regnestykket altså:

{% include math formula="Hastighed (km/t) = \frac{10 km * 60 (min/t)}{50 min} = 12 km/t" %}

Du vil altså hvis du løber 10 kilometer på 50 minutter have en løbehastighed på 12 km/t.

## Beregn distancen ud fra hastighed og tid

Når du gerne vil beregne distancen ud fra en hastighed og tid, så skal du bruge samme formel, hvor du bytter lidt rundt på variablerne.

{% include math formula="Distance (km) = \frac{hastighed (km/t) * tid (min)}{60 min/t}" %}

Lad os tage et eksempel, hvor du løber 15 minutter med en hastighed på 15 km/t, så vil distancen kunne beregnes sådan her:

{% include math formula="Distance (km) = \frac{15 km/t * 15 min}{60 min/t} = 3,75 km" %}

Du vil altså med en løbehastighed på 15 km/t på 15 minutter løbe 3,75 km.

## Beregn tid ud fra hastighed og distance

Hvis du kender hastigheden og distancen, men ikke kender den samlede tid det tog dig at løbe eller cykle distancen, så kan du stadig finde ud af, hvor lang tid det tog.

Hvis du har hastigheden i min/km, som man fx ofte får på et GPS-ur, så skal du først lige konvertere tempoet til km/t. 

{% include math formula="Tid (min) = \frac{Distance (km) * 60 min/t}{hastighed (km/t)}" %}

Hvis du fx har løbet 12 km/t på 10 km, så bliver tiden således:

{% include math formula="Tid (min) = \frac{10 km * 60 min/t}{12 km/t} = 50 minutter" %}

Det vil altså tage 50 minutter at løbe eller cykle en distance på 10 km, hvis du løber 12 km/t.

## Omregn km/t til min/km

Når du ved, hvor hurtigt du har løbet i km/t, men gerne vil omregne til dit tempo og løbehastighed i min/km, så gør du det på følgende måde:

Hvis du vil omregne fra min/km til km/t kan du bruge følgende formel:

{% include math formula="Hastighed (km/t) = \frac{60 min/t}{min + {sek}{60}}" %}

Hvis du vil omregne fra km/t til min/km kan du bruge følgende formel:

{% include math formula="Hastighed (min/km) = \frac{60}{Hastighed (km/t)}" %}

## Hvad bruger løbere og cyklister mest - min/km eller km/t?

Det er meget forskelligt, hvad løbere og cyklister foretrækker at bruge. Når jeg bruger mit GPS-ur, så står der som standard under løbeprofilerne et tempo og en løbehastighed, der er angivet i min/km. Hvis jeg skifter til cykling, så er tempoet og cykelhastigheden angivet i km/t.

Det lader altså til, at de fleste løbere bruger min/km, men cyklister mest bruger km/t.

Jeg har imidlertid ofte brug for at kunne udregne min løbehastighed og omregne mellem min/km og km/t, fx når jeg skal sætte [løbebåndet]({% link _posts/2020-08-14-loebebaand.md %}) til at have den rigtige hastighed.
