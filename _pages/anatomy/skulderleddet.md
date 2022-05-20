---
layout: single
title: &title "Skulderleddet og skulderbladet (skulderbæltet)"
seo_title: "Skulderleddet og skulderbladet: Skulderbæltets anatomi"
permalink: /joints/skulderleddet/
excerpt: "Skulderens store bevægelsesfrihed skabes gennem flere led, som man tilsammen kalder for skulderbæltet. Skulderbæltet består af skulderleddet og skulderbladet."
latin: Scapula
tags:
  - led
categories:
  - Anatomi
  - Led
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
image_movement: /assets/images/anatomy/movement-shoulder.png
header:
  overlay_image: https://www.orthopaedicsone.com/download/attachments/34800936/Little+Leaguer%27s+Shoulder_AP.jpg
  caption: *title
toc: true
sidebar:
  nav: anatomi
last_modified_at: 2022-05-19T08:14:14.000Z
---

Skulderens store bevægelsesfrihed skabes gennem flere led, som man tilsammen kalder for skulderbæltet. Skulderbæltet består af skulderleddet og skulderbladet.

Her kigger vi på den overordnede [anatomi](/anatomi/) for skulderbæltet og strukturerne omkring. Vi kigger på, hvilke [knogler](/knogler/) og [muskler](/muskler/), der er med til at skabe det [led](/led/), som har den største alsidighed i bevægelser for kroppen.

## Hvad er skulderbæltet?

Skulderbæltet består af leddene mellem:

- overarmsknoglen og skulderbladet
- skulderbladet og brystkassen
- kravebenet og skulderbladet
- kravebenet og brystbenet

Det er altså tydeligt, at skulderbæltet er en kompliceret struktur. I det følgende koncentrerer vi os om selve skulderleddet, som er leddet mellem overarmsknoglen og skulderbladet, og skulderbladets bevægelser. Bevægelserne i disse to led kan nemlig være med til at analysere og forklare de fleste betydningsfulde bevægelser, man kan lave med armen.

## Skulderleddet

Skulderleddet er et kugleled mellem overarmsknoglen og skulderbladet. Overarmsknoglen bliver holdt aktivt på plads i skulderleddet ved de muskler, som samlet set kaldes rotatormanchetten. Ledkapslen er rimelig løs i skulderleddet, hvilket også er derfor nogle oplever, at skulderen går af led.

### Bevægelser i skulderleddet

{% for m in page.movements %}
- **{{ m.title }}**.
  {{ m.muscles | join: ", " }}
{% endfor %}

## Skulderbladet

Skulderbladet, eller skulderbladet, er en stor flad knogle, der ligger på bagsiden af brystkassen. Det har en række vigtige funktioner:

- at give en overflade til fastgørelse af de muskler, der bevæger armen
- at beskytte de underliggende strukturer
- at fungere som en løftestang til at bevæge armen

Skulderbladets bevægelser er en vigtig del af hele skulderens bevægelser. Skulderbladet kan bevæge sig rundt på bagsiden af rygsøjlen.

Her kan du se de bevægelser, der kan foregå i skulderbladet.

### Bevægelser i skulderbladet

{% for m in page.movements_scapula %}

- **{{ m.title }}**.
 {{ m.muscles | join: ", " }}
{% endfor %}

I denne video kan du blive klogere på, hvilken betydning skulderbladet har for skulderens bevægelser.

{% include video provider="youtube" id="PPKlGlwxr5s" %}

I dette billede kan du se, hvilket bevægelser der er mulige i skulderbladet.

{% include figure image_path="https://media.springernature.com/lw685/springer-static/image/art%3A10.1007%2Fs12178-020-09672-6/MediaObjects/12178_2020_9672_Fig2_HTML.png" caption="Bevægelser i skulderbladet" %}

## Anatomi i skulderen

{% include figure image_path=page.image caption=page.title alt=page.title %}

## Muskler i skulderleddet og skulderbladet

{% include anatomy/table-muscles-shoulder.html %}

Se [alle muskler delt op efter led](/led/).
