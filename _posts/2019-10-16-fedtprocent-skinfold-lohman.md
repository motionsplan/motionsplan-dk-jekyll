---
title: "Lohman formlen: Mål fedtprocent for børn 8-18 år"
permalink: /lohman-fedtprocent-boern/
redirect_from:
  - /skinfold-lohman/
excerpt: "Lohman-formlen kan bruges til at teste børn fra 8-18 år. Hudfoldene måles ved triceps og på læggen."
language: da
header:
  teaser: /assets/images/shutterstock/fedtmaaling-hudfoldsmaaling.jpg
categories:
  - Kropskomposition
  - Fedtprocent
  - Hudfoldsmåling
tags:
  - måling
  - fedtprocent
  - kropskomposition
  - skinfold
  - børn
# 1. Til dit eget Jekyll-site og oversigter (/tests/)
meta:
  name: "Lohmans 2-punktsmåling til børn"
  measures: "fedtprocent"
  type: "skinfold"
  equipment: "hudfoldsmaaler"
  target: "børn"
  intensity: "ingen"
  method: "indirekte"
page_type: "spoke"
tests:
  - id: "test-lohman-2punkt-boern"
    title: "Lohman 2-punkts hudfoldsmåling til børn"
    description: "Enkel 2-punkts hudfoldsmåling (triceps og læg) til estimering af fedtprocent hos børn og unge i alderen 8-18 år."
    category: ["Kropskomposition", "Antropometri"]
    type: ["Protokol", "Måling"]
    execution: ["Fysisk"]
    modality: ["Kropsmål"]
    method: "Indirekte"
    measures: ["Fedtprocent"]
    equipment: ["Hudfoldsmåler"]
    setting: ["Individuel", "Skolebrug", "Laboratorietest"]
    target_group: ["Børn", "Unge"]
    related_tools: ["tool-lohman-2punkt-beregner"]

# INTERAKTIVE SOFTWARE-VÆRKTØJER
tools:
  - id: "tool-lohman-2punkt-beregner"
    title: "Lohman 2-punkts Hudfoldsberegner til Børn"
    description: "Beregn fedtprocent hos børn og unge (8-18 år) ud fra 2 hudfoldsmålinger (triceps og læg) med Lohman-formlen."
    category: ["Kropskomposition"]
    type: ["Beregner"]
    execution: ["Testberegner"]
    anchor: "#beregn-fedtprocent-med-lohman-formlen"
    category_schema: "HealthAndFitnessApplication"
last_modified_at: 2026-03-06T23:14:14Z
toc: true
---

Lohman-formlen er en enkel måling af fedtprocent hos børn mellem 8-18 år baseret på hudfoldsmålinger. Den kræver bare to målinger af hudfoldstykkelsen ved triceps og ved læggen.

Lohman-formlen bruges som reference i mange større undersøgelser med børn. I studier af danske skolebørn, har man imidlertid brugt [Slaughter-formlen](/slaughter-fedtprocent-boern/).

Der findes mange andre lignende [fedtmålinger med fedttang for voksne](/skinfold/). Læs den artikel grundigt igennem for alle faldgruberne om fedtprocent-målinger.

## Instruktion til Lohman-formlen

Mål hudfoldstykkelsen med en fedttang.

- **Triceps**. Mål midt på triceps. Du måler fra toppen af skulderen og ned albuen og tager det midterste punkt.
- **Læggen**. Mål på indersiden af _højre_ læg på det tykkeste sted.

{% include figure image_path="/assets/images/fedtprocent/lohman-boern.png" caption="Her skal der måles til Lohman-formlen for fedtprocent for børn." alt="lohman fedtprocent målinger for børn" %}

Mål tre gange hvert sted og brug gennemsnittet af de tre målinger for at få en mere præcis måling.

## Beregn fedtprocent med Lohman-formlen

I nedenstående beregner kan du udregne fedtprocenten baseret på dine målinger.

{% include calc/skinfold.html 
   calc_id="skinfold-lohman-2" 
   title="📐 Lohman 2-punkt børn" 
%}

## Lohman formlen

Jeg bruger i beregneren formlen som præsenteres på [www.topendsports.com](https://www.topendsports.com/testing/bodyfat-equation-slaughter-lohman.htm).

- **Drenge:** $\text{Fedtprocent} = 0{,}735 \cdot (\text{Triceps} + \text{Læg}) + 1{,}0$
- **Piger:** $\text{Fedtprocent} = 0{,}610 \cdot (\text{Triceps} + \text{Læg}) + 5{,}1$

## Konklusion

Lohman-formlen kan bruges til at estimere fedtprocenten for børn.

Metoden er dog mest anvendelig til at sammenligne hudfoldstykkelserne for børnene over tid, hvis de har behov for at tabe sig. 

Måske er du også interesseret i at læse lidt om, hvordan man bruger [BMI beregner til børn og unge](/bmi-beregner-boern-unge-teenagere/).

<details markdown="1" class="references">
  <summary><h2 id="references">Referencer</h2></summary>

- Lohman, T.G.: The use of skinfolds to estimate body fatness on children and youth. Journal of physical education, recreation and dance, 58(9):67, 69, 1987.
- Slaughter, M. H., T. G. Lohman, R. A. Boileau, C. A. Horswill, R. J. Stillman, M. D. Van Loan, og D. A. Bemben. 2014. “[Skinfold Equations for Estimation of Body Fatness in Children and Youth](https://www.researchgate.net/publication/19931264_Skinfold_Equations_for_Estimation_of_Body_Fatness_in_Children_and_Youth)”. Human Biology 60 (5).
</details>

## Køb en hudfoldsmåler

{% include motionsplan/affiliate-box.html type="product" item=site.data.affiliates.products.accumeasure_fat_caliper view="card" %}

{% include motionsplan/affiliate-box.html type="product" item=site.data.affiliates.products.harpenden_skinfold_caliper view="card" %}
