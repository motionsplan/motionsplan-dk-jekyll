---
title: &title "Motionsomregner: Omregn aktivitet, sport og motion til skridt 🚴‍♀️ ⇒ 🚶‍♀️"
seo_title: "Skridtomregner 2022: Omregn til skridt i vores motionsomregner"
description: "GRATIS ultimative tæl skridt omregner! Leder du efter en motionsomregner? Her kan du lave en omregning fra din aktivitet, motion og sport til antal skridt!"
permalink: /omregn-motion-aktivitet-sport-til-skridt/
language: da
header:
  overlay_image: https://images.unsplash.com/photo-1453342664588-b702c83fc822?ixlib=rb-1.2.1&auto=format&fit=crop&h=630&w=1200&q=10
  teaser: https://images.unsplash.com/photo-1453342664588-b702c83fc822?ixlib=rb-1.2.1&auto=format&fit=crop&h=300&w=400&q=10
  caption: *title
category:
  - Beregnere
tags:
  - skridt
  - motion
  - beregner
  - featured
meta:
  name: Motionsomregner fra sport til sport
  equipment: ingen
  measures: energiforbrug
  type: kalorieberegner
last_modified_at: 2020-10-13T23:14:14Z
toc: true
faq:
  - question: Hvordan omregnes cykling til skridt?
    answer: I gennemsnit kan du regne med omkring 100-343 skridt pr. minut du cykler alt efter, hvor hurtigt du cykler. Se mere i omregningstabellen.
  - question: Hvordan omregner jeg svømning til skridt?
    answer: I gennemsnit kan du omregne svømning til mellem 171 - 286 alt efter, hvor hurtigt du svømmer. Se tabellen med omregningsfaktor mellem sport og aktivitet.
---

Hvis du gerne vil have svar på hvor mange skridt 10 km cykling svarer til - eller hvor mange skridt du kan skrive i regnskabet for anden motion, sport og aktivitet, så tjek vores "tæl skridt beregner" og motionsomregner.

Omregningen af aktivitet, motion og sport til skridt er baseret på [MET](/met/), så det er kun en tilnærmelse, men hvis du hovedsageligt holder øje med dine skridt, så kan det være en hjælp. Du kan læse mere om at omregne motion, sport og aktivitet til skridt på [verywellfit.com](https://www.verywellfit.com/pedometer-step-equivalents-for-exercises-and-activities-3435742).

## Skridtomregner: Omregn aktivitet, motion og sport til skridt

Du kan omregne anden motion, sport og aktivitet til skridt i vores "Tæl skridt beregner" og motionsomregner.

{% include calculator/calculate-activity-to-steps.html %}

Omregn den motion du ikke kan tælle med din skridttæller til skridt i denne omregner.

## Omregningsfaktor fra motion til skridt

Vores "Tæl skridt-beregner" bruger omregningsfaktoreren fra aktivitet til skridt fra [Global Challenge](https://globalchallenge.zendesk.com/hc/en-gb/articles/360000440186-What-activities-can-be-converted-). Omregningsfaktoren tager udgangspunkt i MET og kan ses i føglende tabel.

{% assign met_values = site.data.step-conversion %}
| Aktivitet | Skridt/min | Skridt/30 min | Skridt/timen |
|-|-|
{% for row in met_values offset:2 -%}
| {{ row.Activity }} | {{ row.Steps }} | {{ row.Steps | times: 30 }} | {{ row.Steps | times: 60 }} |
{% endfor %}

## Hvordan omregner du aktivitet til skridt?

Vælg din aktivitet i omregneren, og indtast det antal minutter du har været aktiv. Så kan du lave en omregning til det antal skridt, du kan notere i stedet for din aktivitet i dit skridtregnskab.

## Baggrunden for omregning fra motion til skridt

"Omregnede skridt" er typisk relativt store tal. Det skyldes at vi udregner tallene på baggrund af MET-værdier, som er et mål for, hvor megtn energi en given aktivitet kræver.

Det tal du får ud af udregneren svarer således til det antal skridt du ville skulle gå, hvis du skulle forbrænde den samme mængde energi, som den aktivitet du har valgt, i det antal minutter du har indtastet.

Husk at beregneren kun er en estimering af antallet af skridt. Ikke nødvendigvis det faktuelle antal skridt.

Jeg har skrevet en grundig artikel om [Hvor langt er 10.000 skridt og hvor mange skridt er en km?]({% link _posts/2020-11-14-activity-to-steps.md %}).

## Konklusion på "Tæl skridt omregner"

Hvis du gerne vil blive motiveret af at gå nok skridt om dagen, men laver en masse anden aktivitet, så kan det være sjovt at bruge en "Tæl skridt-beregner". Du skal bare huske, at tallene godt kan blive rigtig høje.

For mig selv, synes jeg det kan være motiverende at [tælle skridt](/artikel/tael-skridt/) for at huske at få nok motion hver dag.

## Ofte stillede spørgsmål

{% include motionsplan/faq.html %}
