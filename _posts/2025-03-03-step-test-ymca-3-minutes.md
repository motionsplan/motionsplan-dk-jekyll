---
title: YMCA’s 3-minutters steptest – Enkel konditionstest
seo_title: YMCA’s 3-minutters steptest – Test din kondition på 3 minutter
excerpt: YMCA’s 3-minutters steptest er en hurtig og enkel måde at teste din kondition på ved hjælp af en step-rutine og pulsmåling.
description: YMCA’s 3-minutters steptest er en hurtig og enkel måde at teste din kondition på ved hjælp af en step-rutine og pulsmåling.
permalink: /ymca-3-minutters-steptest/
language: da
header:
  teaser: /assets/images/unsplash/photo-1448387473223-5c37445527e7.jpg
  credit: https://images.unsplash.com/photo-1448387473223-5c37445527e7
  caption: YMCA’s 3-minutters steptest – Enkel konditionstest
categories:
- Kondition
- Konditionstests
- Steptests
meta:
  name: YMCA 3 minutters steptest (3MST)
  measures: kondital
  type: steptest
  equipment: stepbænk
  max: submaksimal test
  direct: indirekte test
tests:
  - id: "test-ymca-3-minutters-steptest"
    title: "YMCA 3-minutters Steptest (3MST)"
    description: "Standardiseret submaksimal steptest (3 minutter på en 30 cm høj boks ved 96 BPM / 24 step/min) til indirekte estimering af kondital (VO2max) ud fra 1-minuts genoprettelsespuls."
    category: ["Tests", "Kondition"]
    type: ["Protokol", "Konditionstest"]
    execution: ["Fysisk"]                  # 🪜 FYSISK TEST: Kræver fysisk steppearbejde på 30 cm bænk
    method: "indirekte"                     # 📊 Indirekte estimering af VO2max ud fra restitutionspuls og antropometri
    modality: ["Steptest"]
    measures: ["Kondital", "VO2max", "Restitutionspuls", "Genoprettelsespuls"]
    equipment: ["Stepbænk / Boks (30 cm)", "Timer / Metronom (96 BPM)", "Pulsmåler / Stopur"]
    setting: ["Indendørs", "Testcenter", "Fitnesscenter", "Hjemmetest", "Individuel"]
    target_group: ["Voksne", "Motionister", "Mænd", "Kvinder"]
    related_tools:
      - "tool-ymca-steptest-beregner"

# INTERAKTIVE SOFTWARE-VÆRKTØJER
tools:
  - id: "tool-ymca-steptest-beregner"
    title: "YMCA 3-minutters Steptest Beregner & Interaktiv Timer"
    description: "Interaktiv timer med 96 BPM metronom samt beregner til estimering af VO2max baseret på Kieu et al. (2020) formlerne ud fra genoprettelsespuls og kropsmål."
    category: ["Kondition", "Beregnere", "Tests"]
    type: ["Beregner", "Timer"]
    measures: ["Kondital", "VO2max", "Genoprettelsespuls (1-minut)"]  # 🎯 Output-parametre fra modulet
    anchor: "#calculator"
    category_schema: "HealthAndFitnessApplication"
tags:
- test
- konditionstest
- indirekte test
- steptest
- testberegner
last_modified_at: '2025-03-03T23:14:14Z'
toc: 'true'
breadcrumbs: 'true'
whyiexercise:
- image_path: /assets/images/whyiexercise.com/x3-minute-step-test-chart-for-women_jpg_pagespeed_ic_ypA8zMp-Fx-f80caf55.webp
  credit: https://www.whyiexercise.com/images/x3-minute-step-test-chart-for-women.jpg.pagespeed.ic.ypA8zMp-Fx.webp
- image_path: /assets/images/whyiexercise.com/x3-minute-step-test-chart-for-men_jpg_pagespeed_ic_Nt00qIrgK0-c1a184b7.webp
  credit: https://www.whyiexercise.com/images/x3-minute-step-test-chart-for-men.jpg.pagespeed.ic.Nt00qIrgK0.webp
---

YMCA’s 3-minutters steptest er en hurtig og effektiv metode til at vurdere hjerte-kar-konditionen. Testen består af tre minutters step-arbejde med efterfølgende pulsmåling, hvilket gør den nem at gennemføre for de fleste.

Du har brug for en 30 cm høj boks eller skammel og din telefon. Du skal også kunne holde balancen til at gå op og ned. Hvis du ikke kan gøre det sikkert uden støtte, kan du overveje [Rockports 1,6 kilometer gangtest](/gaatest/).

Der findes også en [modificeret udgave af YMCA-steptesten](/ymca-modified-steptest/), hvor du udregner højden på boksen i forhold til din højde før testen. Se også [andre variationer af steptests](/kondital-fra-steptest/).

[<i class='fas fa-calculator'></i> Hop til beregner](#calculator){: .btn .btn--success .btn--jump } [<i class='fas fa-clock'></i> Hop til timer](#timer){: .btn .btn--success .btn--jump }

## Sådan udfører du YMCA steptesten

1. **Forberedelse**  
   Find en bænk eller boks, der er 30 cm høj. Åbn vores interaktive guide nedenfor.

2. **Gennemfør testen**  
   Start timeren nedenfor og træd op og ned i takt med lyden og visualiseringen i 3 minutter (96 taktslag/min, hvilket giver 24 step/min). 

3. **Skift af førende ben (valgfrit)**  
   Hvis du følger det samme trinmønster under hele testen, kan det føles ujævnt i benmusklerne til sidst. Du kan løbende skifte førende ben ved hjælp af en "tap step"-teknik.

4. **Mål din puls**  
   Når de 3 minutter er gået, skal du straks sætte dig ned og måle din puls i **ét helt minut**. Din ét-minuts genoprettelsespuls er dit testresultat.

## Tag testen med interaktiv guide
{: id="timer" }

Brug afspilleren nedenfor til at holde den korrekte takt (96 BPM) og trinfølge under testen. Skærmen holdes automatisk tændt på din enhed.

{% include components/steptest-timer.html type="ymca" %}

## Beregn dit resultat
{: id="calculator" }

Når du har målt din puls i 1 minut efter testen, kan du indtaste dine data herunder for at beregne dit estimerede kondital.

{% include calc/steptest.html test="ymca" title="Beregner: YMCA 3 minutters" %}

## Formlen bag beregning af konditallet

Beregneren benytter validerede formler fra *Kieu et al. (2020)*. Formlerne estimerer din maksimale iltoptagelse (VO₂max) baseret på din alder, højde, vægt og din puls målt i ét minut umiddelbart efter testen:

**For mænd:**
$$ \text{VO}_2\text{max} = 70{,}597 - (0{,}246 \times \text{alder}) + (0{,}077 \times \text{højde i cm}) - (0{,}222 \times \text{vægt i kg}) - (0{,}147 \times \text{puls}) $$

**For kvinder:**
$$ \text{VO}_2\text{max} = 70{,}597 - (0{,}185 \times \text{alder}) + (0{,}097 \times \text{højde i cm}) - (0{,}246 \times \text{vægt i kg}) - (0{,}122 \times \text{puls}) $$

*Bemærk:* Da formlerne oprindeligt er udviklet på en asiatisk studiepopulation med en lavere gennemsnitshøjde, kan lavere personer skulle arbejde relativt hårdere på en standard 30 cm boks.

## Sådan vurderer du testen

Du kan vurdere dit resultat ved at udregne dit kondital med beregneren ovenfor, eller ved at sammenligne din 1-minuts puls direkte med standardtabellerne for YMCA-steptesten.

{% include gallery id="whyiexercise" caption="Tabeller for mænd og kvinder. Hvis du har en puls i det første minut efter testen på 95-111 for kvinder eller 88-102 for mænd, ligger du over gennemsnittet." %}

## Styrker og begræsninger for testen

Steptesten er en nem, hurtig og effektiv måde at vurdere din kondition på. Testen tager kun 3 minutter, og resultaterne kan nemt sammenlignes over tid for at måle dine træningsfremskridt. Testen har dokumenteret pålidelighed i forskningen og er ideel til gentagen brug.

Hvis du ønsker at estimere din VO₂max uden at steppe eller løbe, er [Rockport Walking Test](/gaatest/) et godt alternativ. Hvis du foretrækker at løbe, er [Cooper-testen](/cooper-test/) en yderst præcis mulighed.

## Følg denne video-guide til YMCA steptest (valgfrit)

Vil du se en visuel gennemgang af testen inden start, kan du følge denne YouTube-guide fra Why I Exercise:

{% include video provider="youtube" id="jvSnWWGtMvk" %}

<details markdown="1" class="references">
  <summary><h2 id="references">Referencer</h2></summary>

1. YMCA Fitness Testing and Assessment Manual, YMCA of the USA, Edition 4, 2000.
2. Castro-Piñero J, Marin-Jimenez N, Fernandez-Santos JR, Martin-Acosta F, Segura-Jimenez V, Izquierdo-Gomez R, Ruiz JR, Cuenca-Garcia M. Criterion-Related Validity of Field-Based Fitness Tests in Adults: A Systematic Review. J Clin Med. 2021 Aug 23;10(16):3743. doi: 10.3390/jcm10163743.
3. Kieu NTV, Jung SJ, Shin SW, Jung HW, Jung ES, Won YH, Kim YG, Chae SW. The Validity of the YMCA 3-Minute Step Test for Estimating Maximal Oxygen Uptake in Healthy Korean and Vietnamese Adults. J Lifestyle Med. 2020 Jan 31;10(1):21-29. doi: 10.15280/jlm.2020.10.1.21.
4. Bohannon RW, Bubela DJ, Wang YC, Magasi SS, Gershon RC. Six-Minute Walk Test Vs. Three-Minute Step Test for Measuring Functional Endurance. J Strength Cond Res. 2015 Nov;29(11):3240-4. doi: 10.1519/JSC.0000000000000253.
</details>