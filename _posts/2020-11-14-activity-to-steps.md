---
title: &title "Omregn aktivitet, sport og motion til skridt [Beregner] 🚴‍♀️ ⇒ 🚶‍♀️"
permalink: /omregn-motion-aktivitet-sport-til-skridt/
language: da
header:
  overlay_image: https://images.unsplash.com/photo-1453342664588-b702c83fc822?ixlib=rb-1.2.1&auto=format&fit=crop&w=1980&q=80
  teaser: https://images.unsplash.com/photo-1453342664588-b702c83fc822?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80
  caption: *title
category:
  - Beregner
tags:
  - skridt
  - motion
  - beregner
last_modified_at: 2020-10-13T23:14:14Z
toc: true
---

Hvis du gerne vil have svar på hvor mange skridt 10 km cykling svarer til - eller hvor mange skridt du kan skrive i regnskabet for anden motion, sport og aktivitet, så tjek denne beregner.

Omregningen af aktivitet, motion og sport til skridt er baseret på MET, så det er kun en tilnærmelse, men hvis du hovedsageligt holder øje med dine skridt, så kan det være en hjælp. Du kan læse mere om at [omregne motion, sport og aktivitet til skridt](https://www.verywellfit.com/pedometer-step-equivalents-for-exercises-and-activities-3435742).

## Omregn aktivitet, motion og sport til skridt

{% include calculate-activity-to-steps.html %}

Omregn den motion du ikke kan tælle med din skridttæller til skridt i denne omregner.

## Omregningsfaktor fra motion til skridt

Beregneren bruger [omregningsfaktoreren fra aktivitet til skridt herfra](https://globalchallenge.zendesk.com/hc/en-gb/articles/360000440186-What-activities-can-be-converted-).

{% assign met_values = site.data.step-conversion %}
| Aktivitet | Skridt/min | Skridt/30 min | Skridt/timen |
|-|-|
{% for row in met_values offset:2 -%}
| {{ row.Activity }} | {{ row.Steps }} | {{ row.Steps | times: 30 }} | {{ row.Steps | times: 60 }} |
{% endfor %}

## Hvordan omregner du aktivitet til skridt?

Vælg din aktivitet i omregneren, og indtast det antal minutter du har været aktiv. Omregneren beregner det antal skridt, du kan notere i stedet for din aktivitet i dit skridtregnskab.

## Baggrunden for omregning fra motion til skridt

"Omregnede skridt" er typisk relativt store tal. Det skyldes at vi udregner tallene på baggrund af MET-værdier, som er et mål for, hvor megtn energi en given aktivitet kræver.

Det tal du får ud af udregneren svarer således til det antal skridt du ville skulle gå, hvis du skulle forbrænde den samme mængde energi, som den aktivitet du har valgt, i det antal minutter du har indtastet.

Husk at beregneren kun er en estimering af antallet af skridt. Ikke nødvendigvis det faktuelle antal skridt.

Jeg har skrevet en grundig artikel om [Hvor langt er 10.000 skridt og hvor mange skridt er en km?]({% link _posts/2020-11-14-activity-to-steps.md %}).
