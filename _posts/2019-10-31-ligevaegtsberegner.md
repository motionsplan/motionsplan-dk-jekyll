---
title: &title "Beregn dit ligevægtsindtag og energiforbrug til cut og bulk ⚖"
permalink: /ligevaegtsindtag/
language: da
header:
  overlay_image: https://images.unsplash.com/photo-1582004228576-14e8b1256618?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80
  teaser: https://images.unsplash.com/photo-1582004228576-14e8b1256618?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80
  caption: *title
category:
  - Beregnere
tags:
  - stofskifte
  - ligevægtsindtag
last_modified_at: 2019-03-06T23:14:14Z
toc: true
---

Jeg har lavet en beregner til at udregne dit ligevægtsindtag. Det kan være hjælpsomt at kende dit ligevægtsindtag, så du kan sikre dig de bedste resultater med din træning uanset om træningens formål er at tage på i vægt, eller du gerne vil opnå et vægttab.

Hvad er ligevægtsindtaget? **Ligevægtsindtaget er, når du indtager lige så meget energi gennem kost, som du forbruger i løbet af en dag. Når du indtager energi, der svarer til dit ligevægtsindtag, så er din vægt stabil.**

Hvis du gerne vil finde dit ligevægtsindtag, så skal du bare udfylde skemaet nedenunder. Du får det bedste estimat på dit ligevægtsindtag, hvis du er præcis med dine indtastninger. Du skal imidlertid være opmærksom på, at beregnerne bare giver et bud på ligevægtsindtaget.

## Beregn dit ligevægtsindtag med Benedict-Harris formel

Udregneren af ligevægtsindtaget tager udgangspunkt i [Benedict-Harris](https://pubmed.ncbi.nlm.nih.gov/18782481/)-formlen, som nok er den mest brugte formel til ligevægtsindtag.

## Hvad kan jeg bruge ligevægtsindtaget til?

Du kan bruge ligevægtsindtaget, hvis du fx laver kostplaner, hvor du skal ramme et bestemt antal kalorier for at ændre din vægt.

{% include calculate-ligevaegt.html %}

## Hvordan udregner jeg ligevægtsindtaget?

I denne beregner er [Benedict-Harris formlen](https://en.wikipedia.org/wiki/Harris%E2%80%93Benedict_equation) brugt til at udregne basalstofskiftet, som sammen med det fysiske aktivitetsniveau kan bruges til at udregne ligevægtsindtaget. Benedict-Harris-formlen for basalstofskiftet afhænger af vægten, højden og alderen. Formlen ser sådan her ud.

- Mænd: BMR = 66.5 + ( 13.75 × weight in kg ) + ( 5.003 × height in cm ) – ( 6.755 × age in years )
- Kvinder: BMR = 655 + ( 9.563 × weight in kg ) + ( 1.850 × height in cm ) – ( 4.676 × age in years )

[Roza and Shizgal](https://pubmed.ncbi.nlm.nih.gov/6741850/) reviderede formlen i 1984. Den formel forventer jeg senere at integrere i beregneren her. Skriv i kommentarerne, hvis det skal gå lidt hurtigere :) - og hvis du kender den nærmere baggrund for revideringen af Benedict-Harris formel, så brug også endelig kommentarerne, så denne artikel kan blive bedst mulig.

- Mænd: BMR = 88.362 + (13.397 × weight in kg) + (4.799 × height in cm) - (5.677 × age in years)
- Kvinder: BMR = 447.593 + (9.247 × weight in kg) + (3.098 × height in cm) - (4.330 × age in years)

## Konklusion om ligevægtsindtag

Nu kender du dit omtrentlige ligevægtsindtag. Som du kan se så er den største del af ligevægtsindtaget bestemt af din vægt. Det betyder, at hvis du taber vægt, så vil dit ligevægtsindtag gå ned, mens det ved højere vægt vil gå op.

## Andre beregnere til ligevægtsindtag

Udregneren af ligevægtsindtaget tager udgangspunkt i [Benedict-Harris](https://pubmed.ncbi.nlm.nih.gov/18782481/)-formlen, men jeg har også lavet en anden [beregner til at udregne dit stofskifte]({% link _posts/2019-10-31-simpel-stofskifteberegner.md %}), som er baseret på formlen fra _Nordiska Næringsrekommendationer 1996_ til at beregne ligevægtsindtaget. Senere er der kommet opdaterede formler til at [beregne af hvilestofskiftet i _Nordic Nutrition Reccommandations 2012_]({% link _posts/2020-09-01-stofskifte-nordic-2012.md %}), og endelig har jeg en [avanceret beregner til energiforbruget med mere præcis aktivitetsregistrering]({% link _posts/2019-10-31-avanceret-stofskifteberegner.md %}).
