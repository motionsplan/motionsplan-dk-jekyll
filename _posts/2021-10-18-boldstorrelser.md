---
title: &title "Boldstørrelser: Størrelser på bolde til sport"
seo_title: "Boldstørrelse: Hvad er størrelsen på bolde til sport?"
permalink: /boldstorrelser/
language: da
header:
  overlay_image: https://images.unsplash.com/photo-1498940757830-82f7813bf178?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&h=630&w=1200&q=10
  teaser: https://images.unsplash.com/photo-1498940757830-82f7813bf178?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&h=300&w=400&q=10
  caption: *title
category:
  - Sportsgrene
tags:
  - bolde
last_modified_at: 2021-10-14T08:14:14Z
toc: true
faq:
 - question: "Hvad er den letteste bold til sport?"
   answer: "Den letteste bold til sport er en bordtennisbold, som kun vejer 2,7 gram."
 - question: "Hvad er den tungeste bold til sport?"
   answer: "Den tungeste bold eller kugle til sport er en uafgjort mellem bowling og kuglestød. Kuglen vejer til begge idrætsgrene 7,26 kg."
 - question: "Hvad er den mindste bold?"
   answer: "En squash-bold er den mindste bold med sine kun omkring 4 cm i diameter." 
 - question: "Hvad er den største bold?"
   answer: "Den største bold er en basketball, som er omkring 23,88 mm i diameter"
---

Sportsbolde kommer i mange former og størrelser. Her er en oversigt over alle de bolde, jeg kunne finde.

Nogle af de mindste bolde er squash- og bordtennisbolde, som er omkring 40 mm i diameter. I den anden ende af skalane er en basketball hele 24 cm i diameter. Basketbolden er dog ikke den tungeste, men der skal du kigge på kuglen til kuglestød og bowlingkuglen.

Men hvordan ser det egentlig ud med alle de andre bolde til sport?

Hvis du er særligt interesseret i fodbold, så kunne du måske være interessret i at læse indlægget om [størrelser på fodbolde til forskellige aldersgrupper](https://www.legestue.net/hvor-stor-og-hvad-vejer-en-fodbold/).

{% include figure image_path="https://www.topendsports.com/resources/images/ball-comparison.jpg" caption="Data til dette indlæg er fundet på [topendsports.com](https://www.topendsports.com/resources/equipment-balls.htm), hvor dette billede også er fra." %}

## Hvilke sportsgrene har de letteste og tungeste bolde?

Hvilken sport har de letteste eller tungeste bolde? Nedenfor er en liste over boldvægte til en bred vifte af sportsgrene. Ud af disse sportsgrene er den letteste bordtennis eller bordtennisbold, den tyngste er en uafgjort mellem bowling og kuglestød.

Jeg har anført de officielle boldvægte i nedenstående tabel. I de tilfælde hvor der er flere officielle boldvægte, så har [Topendsports.com](https://www.topendsports.com/resources/equipment-ball-weight.htm) enten angivet den gennemsnitlige vægt eller den mest almindelige vægt.

Boldvægtene er taget fra de mandlige konkurrencer, hvis der er forskel på boldstørrelsen der bruges til de forskellige aldersgrupper eller aldre.

{% assign balls = site.data.balls %}

| Sport | Vægt (gram) | 
|-|-|
{%- for ball in balls %}
| {{ ball.sport }} | {{ ball.weight }} |
{%- endfor %}

## Hvilken sportsgrene har de mindste og største bolde?

Hvilken sport har de mindste bolde? Nedenfor er en liste over boldstørrelser (boldens diameter er angivet) til en lang række sportsgrene. [Topendsports.com](https://www.topendsports.com/resources/equipment-ball-size.htm) har kun sammenlignet sportsgrene, hvor der bruges runde bolde.

{% include figure image_path="https://www.topendsports.com/resources/images/ball-sizes.jpg" caption="Sammenligning af forskellige boldstørrelser [topendsports.com](https://www.topendsports.com/resources/equipment-ball-size.htm)" alt="sammenligning af forskellige boldstørrelser til sport" %}

Den mindste bold? En squashbold er bare lidt mindre end golfbolden. I den anden ende af skalaen er basketball den største.

I tabellen nedenfor er de officielle boldstørrelser angivet. I tilfælde af at flere boldstørrelser er tilladte, så er den den gennemsnitlige eller almindeligt anvendte størrelse er angivet. Hvis der er variation i boldstørrelsen mellem køn eller aldersgrupper, så er det boldstørrelsen for mænd, der er brugt.

{% assign balls = site.data.balls %}

| Sport | Diameter (mm) | 
|-|-|
{%- for ball in balls %}
| {{ ball.sport }} | {{ ball.diameter }} |
{%- endfor %}

## Ofte stillede spørgsmål om boldstørrelser

{% include motionsplan/faq.html %}

## Samlet tabel med alle boldstørrelser

{% assign balls = site.data.balls %}

| Sport | Vægt (gram) | Diameter (mm) | 
|-|-|-|
{%- for ball in balls %}
| {{ ball.sport }} | {{ ball.weight }} | {{ ball.diameter }} |
{%- endfor %}
