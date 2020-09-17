---
title: "Skulderleddet og skulderbladet (skulderbæltet)"
excerpt: "Skulderens store bevægelsesfrihed skabes gennem flere led, som man tilsammen kalder for skulderbæltet, som består af skulderleddet og skulderbladet."
latin: Scapula
tags:
  - led
movements:
  - title: Bøjning
    muscles:
      - Deltamusklen (forreste del)
      - Den store brystmuskel
  - title: Strækning
    muscles:
      - Deltamusklen (bageste del)
      - Den brede rygmuskel
      - Den store trinde skuldermuskel
  - title: Udadføring
    muscles:
      - Deltamusklen (midterste del)
  - title: Indadføring
    muscles:
      - Den store brystmuskel
      - Den brede rygmuskel
      - Den store trinde skuldermuskel
  - title: Indadrotation
    muscles:
      - Den store brystmuskel
      - Den brede rygmuskel
      - Den store trinde skuldermuskel
  - title: Udadrotation
    muscles:
      - hovedsagligt af de mindre skuldermuskler.
movements_scapula:
  - title: Løftning (“trække skuldrene op til ørene”)
    muscles:
      - Kappemusklen (øverste del)
      - Rhombemusklen
  - title: Sænkning (trække dem ned igen)
    muscles:
      - Kappemusklen (nederste del)
  - title: Udadføring (væk fra rygsøjlen)
    muscles:
      - Den savtakkede brystmuskel
  - title: Indadføring (ind mod rygsøjlen)
    muscles:
      - Kappemusklen (midterste del)
      - Rhombemusklen
  - title: Udadrotation (skulderleddet kommer til at pege mere opad, den nederste spids af skulderbladet kommer til at pege mere udad)
    muscles:
      - Den savtakkede brystmuskel
      - Kappemusklen.
  - title: Indadrotation
    muscles:
      - Rhombemusklen
image: https://static1.squarespace.com/static/5bba6b9caf468381c6d11b6f/5d33107d18cbd7000113d73a/5dad8ba351bf6e19d66acec1/1571863756133/acromion-process.jpg?format=2500w
header:
  overlay_image: https://www.orthopaedicsone.com/download/attachments/34800936/Little+Leaguer%27s+Shoulder_AP.jpg
---

{% comment %}

Skulderens utroligt store bevægelsesfrihed skabes gennem flere forskellige led, som man tilsammen kalder for skulderbæltet. Dette består af leddene mellem henholdsvis: overarmsknoglen og skulderbladet, skulderbladet og brystkassen, kravebenet og skulderbladet og leddet mellem kravebenet og brystbenet.

For at kunne forstå skulderens bevægelser er det imidlertid kun nødvendigt at se på to dele, nemlig det egentlige skulderled (mellem overarmsknoglen og skulderbladet) og selve skulderbladets bevægelser. De fleste store bevægelser med armen vil være en kombination af bevægelser i begge disse “led”.

## Skulderleddet

Det egentlige skulderled består af et kugleled mellem overarmsknoglen og skulderbladet. Ledkapslen omkring skulderleddet er temmelig slap, til gengæld bliver leddet holdt aktivt på plads af en gruppe mindre muskler (rotatormanchetten).

### Bevægelser i skulderleddet

{% for m in page.movements %}
- **{{ m.title }}**.
  {{ m.muscles | join: ", " }}
{% endfor %}

## Skulderbladet

Skulderbladets bevægelser er som før nævnt en vigtig del af hele skulderens bevægelser. Kontakten mellem skulderbladet og bagsiden af brystkassen kan betragtes som et stort glideled.

{% for m in page.movements_scapula %}
- **{{ m.title }}**.
  {{ m.muscles | join: ", " }}
{% endfor %}

### Bevægelser i skulderbladet

{% include video provider="youtube" id="PPKlGlwxr5s" %}

{% include figure image_path=page.image caption=page.title alt=page.title %}

{% endcomment %}