---
title: &title "️Udregn energiforbrug og effektivitet af en aktivitet"
seo_title: "️Udregn energiforbrug og effektivitet af en aktivitet"
permalink: /udregne-energiforbrug-og-effektivitet/
description: "Her dykker vi ned i beregningerne bag energiforbrug, bevægelsesøkonomi og effektivitet i øvelser, fx cykling. Du kan efterfølgende selv prøve at udregne din egen bevægelsesøkonomi."
excerpt: "Her dykker vi ned i beregningerne bag energiforbrug, bevægelsesøkonomi og effektivitet i øvelser, fx cykling. Du kan efterfølgende selv prøve at udregne din egen bevægelsesøkonomi."
language: da
header:
  teaser: https://images.unsplash.com/photo-1452573992436-6d508f200b30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=300&w=400&q=10
  caption: *title
category:
  - Fysiologi
tags:
  - beregner
  - fysiologi
  - varmetræning
last_modified_at: 2024-08-04T10:14:14Z
---

Her dykker vi ned i beregningerne bag energiforbrug, bevægelsesøkonomi og effektivitet i øvelser, fx cykling. Du kan efterfølgende selv prøve at udregne din egen bevægelsesøkonomi.

Beregningerne kræver, at du har adgang til at måle iltoptagelsen (og gerne også udskillelsen af kuldioxidudskillelsen).

Her dykker vi særligt ned i en metode til at måle cykeløkonomi, som er inspireret af [VO2MASTERs blogindlæg](https://vo2master.com/blog/exercise-efficiency/).

Det er vigtigt at understrege, at der er flere forskellige måder at udregne bevægelsesøkonomi på, men her dykker vi ned i rationalet bag en metode.

## Hvad er bevægelsesøkonomi?

Bevægelsesøkonomi beskriver kroppens evne til at oversætte den kemiske energi i kroppen til bevægelse.

Sevlom bevægelsesøkonomi og effektivitet ofte bliver brugt synonymt, men der er faktisk en mindre forskel.

- **Effektivitet**. Energi nødvendigt for at fastholde en bestemt hastighed eller power.
- **Økonomi**. Ilt nødvendigt for at fastholde en bestemt hastighed eller power.

For at udregne effektiviteten skal vi først udregne energiforbruget ([Jeukendrup 2001](https://pdfs.semanticscholar.org/eed4/f50eee1600210eb325bb71d0e867dd3ab504.pdfhttps:/pdfs.semanticscholar.org/eed4/f50eee1600210eb325bb71d0e867dd3ab504.pdf)).

## Udregn energiforbrug

Når du har kørt steady state med en specifik intensitet i fx 5 minutter, så kan du bruge gennemsnitsværdierne fra de sidste par minutter og indtaste i nedenstående beregner.

Hvis ikke du kender R-værdien, så kan du bruge 0,90 i beregneren. Der er en lille smule forskel på, hvor mange kcal der bliver brugt pr. liter ilt alt efter om det primære næringsstof er kulhydrat eller fedt. I submaksimalt arbejde vil R=0,9 være et fint kompromis.

{% include calculate-energy-expenditure.html %}

Et eksempel:

Lad os sige, at du cykler med <span id="bike_efficiency_text_workrate">100</span>W og iltoptagelsen er målt til <span id="bike_efficiency_text_vo2">1,89</span>L O<sub>2</sub>/min og en R-værdi på <span id="bike_efficiency_text_r">0,90</span>, så er energiforbruget <span id="bike_efficiency_text_ee">650,77</span>J/s.

## Udregne bruttoeffektivtet (gross efficiency)

Når du kender energiforbruget beregnet ud fra iltoptagelsen, og du kender intensiteten i watt fra cyklen, så kan du udregne bruttoeffektiviteten.

{% include calculate-gross-efficiency.html %}

Bruttoeffektiviteten er altså ikke særlig høj, når du cykler. Typisk er effektiviteten på cykel mellem [7,5-25,4%](https://www.researchgate.net/profile/George_Brooks/publication/22014772_Muscular_efficiency_during_steady-rate_exercise_effects_of_speed_and_work_rate/links/02e7e531d20463170e000000.pdf).

> As power output increases so does gross efficiency up to about 300w (where values range from 18-25%), then due to the recruitment of more type II muscle fibers efficiency begins to drop.

-- <cite>[vo2master.com](https://vo2master.com/blog/exercise-efficiency/)</cite>

Den mindste del af din energi når du cykler bliver altså overført til pedalerne, mens resten udskilles som varme.

Med et energiforbrug på <span id="bike_efficiency_ee_js">650,77</span>J/s og et power output på <span id="bike_efficiency_power_output_watt">100</span>W er bruttoeffektiviteten altså kun <span id="bike_efficiency_ge">15,37</span>%.

***

Læs: [Varmehåndtering i cykling](/varme-management-cykling/)

***

## Udregn cykeløkonomien

Endelig kan vi udregne cykeløkonomien. 

{% include calculate-biking-economy.html %}

I vores eksempel:


Med Power output på <span id="bike_economy_power_output">100</span>W og iltforbrug på <span id="bike_economy_vo2">1,89</span> L/O<sub>2</sub>, så bliver cykeløkonomien <span id="bike_economy_biking_economy">3,17</span>kJ/L.

## Konklusion

Sådan kan du altså ved hjælp af målinger af iltoptagelsen og R-værdien udregne cykeløkonomi og cykeleffektivitet.

***

Læs: [Beregn din løbeøkonomi](/lobeokonomi/)

***
