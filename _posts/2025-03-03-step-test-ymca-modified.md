---
title: YMCA Modified steptest – Individualiseret test
seo_title: 'YMCA Modified Steptest – Beregn dit kondital nemt'
excerpt: YMCA’s tilpassede steptest er en hurtig og enkel måde at teste din kondition på ved hjælp af en step-rutine og pulsmåling.
description: YMCA’s modified steptest er en hurtig og enkel måde at teste din kondition på ved hjælp af en step-rutine og pulsmåling.
permalink: /ymca-modified-steptest/
language: da
header:
  teaser: /assets/images/unsplash/photo-1476480862126-209bfaa8edc8.jpg
  credit: https://images.unsplash.com/photo-1476480862126-209bfaa8edc8
  caption: YMCA Modified steptest – Individualiseret test
categories:
- Kondition
- Konditionstests
- Steptests
meta:
  name: YMCA modified steptest
  measures: kondital
  type: steptest
  equipment: stepbænk
  max: submaksimal test
  direct: indirekte test
# TESTS / PROTOKOLLER
tests:
  - id: "test-ymca-modified-steptest"
    title: "YMCA Modified 3-minutters Steptest (Santo & Golding)"
    description: "Individualiseret, submaksimal steptest (3 minutter ved 96 BPM, hvor bokshøjden beregnes ud fra kropshøjde) til indirekte estimering af kondital (VO2max) ud fra 1-minuts restitutionspuls."
    category: ["Tests", "Kondition"]
    type: ["Protokol", "Konditionstest"]
    execution: ["Fysisk"]                  # 🪜 FYSISK TEST: Kræver fysisk steppearbejde på tilpasset bænk
    method: "indirekte"                     # 📊 Indirekte estimering af VO2max ud fra restitutionspuls
    modality: ["Steptest"]
    measures: ["Kondital", "VO2max", "Individualiseret stephøjde", "Restitutionspuls", "Genoprettelsespuls"]
    equipment: ["Justerbar stepbænk / Boks", "Målebånd", "Timer / Metronom (96 BPM)", "Pulsmåler / Stopur"]
    setting: ["Indendørs", "Testcenter", "Fitnesscenter", "Hjemmetest", "Individuel"]
    target_group: ["Voksne", "Motionister", "Mænd", "Kvinder"]
    related_tools:
      - "tool-ymca-modified-steptest-beregner"

# INTERAKTIVE SOFTWARE-VÆRKTØJER
tools:
  - id: "tool-ymca-modified-steptest-beregner"
    title: "YMCA Modified Steptest Beregner & Stephøjde-værktøj"
    description: "Interaktivt værktøj til udregning af individualiseret stephøjde, 96 BPM timer samt beregning af VO2max ud fra Santo & Golding (2003) formlen."
    category: ["Kondition", "Beregnere", "Tests"]
    type: ["Beregner", "Timer"]
    measures: ["Kondital", "VO2max", "Genoprettelsespuls (1-minut)"] # 🎯 Output-parametre fra modulet
    anchor: "#calculator"
    category_schema: "HealthAndFitnessApplication"
tags:
- test
- konditionstest
- indirekte test
- steptest
last_modified_at: '2025-03-03T23:14:14Z'
toc: 'true'
breadcrumbs: 'true'
---

YMCA’s modified 3-minutters steptest ligner den originale [YMCA steptest](/ymca-3-minutters-steptest/). I tre minutter træder du op og ned af en boks, og efterfølgende tager du din puls. Forskellen er, at du i denne version udregner højden på boksen ud fra din egen kropshøjde, hvilket gør testen mere retfærdig uanset din kropsbygning.

Den modificerede 3-minutters steptest kan bruges til at estimere dit kondital (VO₂max).

Du kan også se [andre variationer af steptests](/kondital-fra-steptest/).

[<i class='fas fa-calculator'></i> Hop til beregner](#calculator){: .btn .btn--success .btn--jump } [<i class='fas fa-clock'></i> Hop til timer](#timer){: .btn .btn--success .btn--jump }

## Sådan udføres testen

1. **Find din stephøjde:** Indtast din højde i beregneren nedenfor for at finde din individuelle bokshøjde.
2. **Klargør timeren:** Åbn vores interaktive guide nedenfor (sat til 96 BPM).
3. **Gennemfør testen:** Træd op og ned af boksen i takt med lyden og visualiseringen i 3 minutter (24 step/min).
4. **Mål din puls:** Så snart de 3 minutter er gået, sætter du dig ned med det samme og måler din puls i **ét helt minut** (eller fra sekund 60 til 75 for 15-sekunders tælling).
5. **Beregn dit kondital:** Indtast din ét-minuts puls i resultat-beregneren.

## Find din stephøjde

Brug beregneren til at finde ud af, hvor høj din stepbænk eller kasse skal være:

{% include components/steptest-stepheight.html test="ymca_modified" %}

## Tag testen med interaktiv guide
{: id="timer" }

Brug afspilleren nedenfor til at holde den korrekte takt (96 BPM) og trinfølge under testen. Skærmen holdes automatisk tændt på din enhed.

{% include components/steptest-timer.html test="ymca_modified" %}

## Beregn dit resultat
{: id="calculator" }

Indtast din puls 1 minut efter testen for at beregne dit kondital:

{% include calc/steptest.html test="ymca_modified" title="Beregner: YMCA Modified" %}

## Formlen bag beregningerne

Den modificerede YMCA-steptest benytter formler udviklet af *Santo & Golding (2003)*. 

### 1. Stephøjde
Stephøjden tilpasses din kropshøjde, så belastningen bliver proportional med dine benlængder:

* **Mænd:**
  $$ \text{Stephøjde (cm)} = \text{kropshøjde i cm} \times 0{,}192 $$

* **Kvinder:**
  $$ \text{Stephøjde (cm)} = \text{kropshøjde i cm} \times 0{,}189 $$

### 2. Estimat af VO₂max
Konditallet beregnes direkte ud fra din genoprettelsespuls målt 1 minut efter testens afslutning:

$$ \text{VO}_2\text{max} = 76{,}710 - (0{,}2805 \times \text{puls}_{1\text{ min}}) $$

## Følg denne video-guide til YMCA steptest (valgfrit)

Vil du se en visuel gennemgang af kadencen og testen, kan du benytte denne video fra Why I Exercise som supplement. Vær opmærksom på, at du i denne modified-udgave skal bruge din egen beregnede stephøjde.

{% include video provider="youtube" id="jvSnWWGtMvk" %}

## Opsummering og næste skridt

Den modificerede YMCA 3-minutters steptest er en enkel, individualiseret og effektiv metode til at vurdere dit kondital. Da bokshøjden er tilpasset din højde, giver testen et mere præcist sammenligningsgrundlag på tværs af personer med forskellig kropsbygning.

Er du interesseret i at prøve andre steptests? Tjek vores [oversigt over steptests](/kondital-fra-steptest/) for flere muligheder og detaljerede beskrivelser.

<details markdown="1" class="references">
  <summary><h2 id="references">Referencer</h2></summary>

- Santo, A. S., & Golding, L. A. (2003). Predicting maximum oxygen uptake from a modified 3-minute step test. *Research Quarterly for Exercise and Sport*, 74(1), 110–115. <https://doi.org/10.1080/02701367.2003.10609070>
- Bennett, H., Parfitt, G., Davison, K., & Eston, R. (2016). Validity of Submaximal Step Tests to Estimate Maximal Oxygen Uptake in Healthy Adults. *Sports Medicine (Auckland, N.Z.)*, 46(5), 737–750. <https://doi.org/10.1007/s40279-015-0445-1>
- Castro-Piñero, J., Marin-Jimenez, N., Fernandez-Santos, J. R., Martin-Acosta, F., Segura-Jimenez, V., Izquierdo-Gomez, R., Ruiz, J. R., & Cuenca-Garcia, M. (2021). Criterion-Related Validity of Field-Based Fitness Tests in Adults: A Systematic Review. *Journal of Clinical Medicine*, 10(16), 3743. <https://doi.org/10.3390/jcm10163743>
</details>