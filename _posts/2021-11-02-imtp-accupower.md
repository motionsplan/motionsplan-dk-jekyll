---
title: &title "Opsætning og brug af AccuPower kraftplatform"
seo_title: " AccuPower: Guide til opsætning og korrekt brug af kraftplatform"
excerpt: Lær hvordan du opsætter og bruger AccuPower kraftplatformen til præcise IMTP-målinger. Få detaljerede instruktioner om forbindelser, indstillinger og kalibrering.
description: Lær hvordan du opsætter og bruger AccuPower kraftplatformen til præcise IMTP-målinger. Få detaljerede instruktioner om forbindelser, indstillinger og kalibrering.
permalink: /accupower-setup/
language: da
header:
  teaser: https://www.accupowersolutions.com/wp-content/uploads/2018/10/For-Website-Forces-Side.jpg
category:
  - Udstyr
tags:
  - udstyr
last_modified_at: 2024-10-14T08:14:14Z
toc: true
---

AccuPower kraftplatformen er et vigtigt redskab til at måle maksimal styrke og eksplosivitet, især ved udførelse af IMTP-testen. 

På Vejle Idrætshøjskole bruger vi AccuPower programmet sammen med vores kraftplatform. Vi bruger version 2.0 af softwaren.

Denne artikel guider dig gennem opsætningen og korrekt brug af AccuPower, så du kan få præcise data til at optimere din træning.

For at komme i gang med testen, så kan du læse vores [detaljerede guide til IMTP-testen](/imtp-test/).

## 1. Tilslut platformen via USB

Først skal platformen tilsluttes din computer gennem USB-porten.

## 2. Find COM-porten i enhedshåndteringen

Nu skal du så finde ud af, hvilken COM-port kraftplatformen bliver tilføjet. Det kan du finde ud af gennem Enhedshåndteringen i Windows.

{% include figure image_path="/assets/images/accupower/enhedshaandtering.png" %}

## 3. Vælg COM-port i programmet

Når du har fundet COM-porten skal den vælges i programmet.

{% include figure image_path="/assets/images/accupower/com-port.png" %}

## 4. Indlæs kalibreringsfilen

Programmet skal bruge en 'Calibration file'. Vi bruger filen `D1464_2.acl`.

## 5. Sæt indstillingerne i AccuPower

Dernæst skal du sørge for at indstillingerne i programmet kan fungere i forhold til IMTP-målingerne.

{% include figure image_path="/assets/images/accupower/settings.png" %}

- Settings --> Trigger Wait At --> +/- 15% Body Weight
- Settings --> Preroll time --> 4

Husk at gemme indstillingerne, så de er der til næste gang.

## Sådan udføres en IMTP-test i AccuPower

Så er du klar til at lave en IMTP-test. Det gør du fra dette skærmbillede:

{% include figure image_path="/assets/images/accupower/imtp-forces-only.png" %}

Du følger protokollen ovenfor. Når du tæller ned for løfteren fra `3-2-1-Træk!`, så plejer vi at starte selve målingen ved 1, så de kun starter kort tid før vedkommende skal trække maksimalt.

Efterfølgende kan du se graferne for løftet, og hvordan kraften har udviklet sig undervejs.

I `Summary` kan du se _Max Force (N)_. Enheden er Newton, og for at få kraften i kilo, så skal du jo egentlig dele med tyngdekraften. Vi plejer at gøre hovedregningen lidt lettere ved at dele kraften målt i Newton med 10 m/s<sup>2</sup>.

{% include figure image_path="/assets/images/accupower/max-force.png" %}

Så ved du altså, hvor meget du kan trække.

Platformen giver også et svar på, hvor god du er til at få kraften til at gå direkte ned i platformen, da kraften bliver målt på x- og y-aksen også.

## Konklusion

AccuPower kraftplatformen er et effektivt værktøj til IMTP-testen, men den kan også bruges til en række andre tests, der kræver præcise målinger af kraftudvikling. Uanset om du evaluerer styrke, eksplosivitet eller andre præstationsmål, giver AccuPower værdifulde data, som kan bruges til at optimere din træning og forskning.

<details markdown="1" class="references">
  <summary><h2 id="references">Referencer</h2></summary>

- [www.scienceforsport.com](https://www.scienceforsport.com/isometric-mid-thigh-pull-imtp/)
- [simplifaster.com](https://simplifaster.com/articles/isometric-mid-thigh-pull-strength-test/)
</details>
