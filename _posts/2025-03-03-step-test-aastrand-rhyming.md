---
title: Åstrand-Ryhming Step Test – Klassisk skandinavisk konditionstest
seo_title: 'Åstrand-Ryhming Step Test: Test dit kondital præcist'
excerpt: Åstrand-Ryhming Step Test er en anerkendt, submaksimal konditionstest. Læs om protokollen, brug vores interaktive timer, og beregn dit kondital.
description: Åstrand-Ryhming Step Test er en anerkendt, submaksimal konditionstest. Læs om protokollen, og beregn dit kondital nemt.
permalink: /astrand-ryhming-step-test/
language: da
header:
  overlay_image: /assets/images/unsplash/photo-1546869372-abdd57773019.jpg
  credit: https://images.unsplash.com/photo-1546869372-abdd57773019
  caption: Åstrand-Ryhming Step Test – Klassisk skandinavisk konditionstest
category:
- Kondition
- Konditionstests
- Steptests
meta:
  name: Åstrand-Ryhming Step Test
  measures: kondital
  type: steptest
  equipment: stepbænk
  max: submaksimal test
  direct: indirekte test
tests:
  - id: "test-astrand-ryhming-step-test"
    title: "Åstrand-Ryhming Step Test"
    description: "Klassisk, submaksimal fysiologisk steptest (6 minutter ved 90 BPM på en 40 cm / 33 cm høj bænk) til indirekte estimering af absolut VO2max og kondital baseret på steady-state arbejdspuls og alderskorrektion."
    category: ["Tests", "Kondition"]
    type: ["Protokol", "Konditionstest"]
    execution: ["Fysisk"]                  # 🪜 FYSISK TEST: Kræver fysisk steppearbejde på bænk
    method: "indirekte"                     # 📊 Indirekte estimering af VO2max ud fra steady-state arbejdspuls
    modality: ["Steptest"]
    measures: ["Kondital", "VO2max", "Absolut VO2max (L/min)", "Arbejdspuls", "Steady-state puls"]
    equipment: ["Stepbænk (40 cm for mænd / 33 cm for kvinder)", "Timer / Metronom (90 BPM)", "Pulsmåler / Pulsbælte"]
    setting: ["Indendørs", "Testcenter", "Klinik", "Skole", "Individuel"]
    target_group: ["Voksne", "Motionister", "Atleter", "Mænd", "Kvinder"]
    related_tools:
      - "tool-astrand-ryhming-steptest-beregner"

# INTERAKTIVE SOFTWARE-VÆRKTØJER
tools:
  - id: "tool-astrand-ryhming-steptest-beregner"
    title: "Åstrand-Ryhming Step Test Beregner & Interaktiv Timer"
    description: "Interaktiv timer med 90 BPM metronom samt beregner til estimering af absolut VO2max og alderskorrigeret kondital baseret på Åstrand-Ryhming nomogrammet."
    category: ["Kondition", "Beregnere", "Tests"]
    type: ["Beregner", "Timer"]
    measures: ["Kondital", "VO2max", "Alderskorrigeret VO2max"] # 🎯 Output-parametre fra modulet
    anchor: "#calculator"
    category_schema: "HealthAndFitnessApplication"
tags:
- test
- konditionstest
- indirekte test
- steptest
last_modified_at: '2026-07-27T10:00:00Z'
toc: 'true'
breadcrumbs: 'true'
---

Åstrand-Ryhming Step Test er en af de mest fundamentale og anerkendte fysiologiske konditionstests i verden. Testen blev udviklet af de svenske fysiologer Per-Olof Åstrand og Irma Ryhming i 1950'erne og har en stærk forankring i skandinavisk idrætsforskning.

Testen er submaksimal, hvilket betyder, at du ikke behøver at presse dig selv til udmattelse. I stedet måles din arbejdspuls undervejs for at estimere din maksimale iltoptagelse ($\text{VO}_2\text{max}$).

Hvis du ønsker en kortere test, kan du se på [YMCA 3-minutters steptest](/ymca-3-minutters-steptest/) eller gå til vores samlede [oversigt over steptests](/kondital-fra-steptest/).

[<i class='fas fa-calculator'></i> Hop til beregner](#calculator){: .btn .btn--success .btn--jump } [<i class='fas fa-clock'></i> Hop til timer](#timer){: .btn .btn--success .btn--jump }

## Hvad er Åstrand-Ryhming Step Test?

Testen bygger på den fysiologiske sammenhæng mellem arbejdspuls og iltoptagelse ved submaksimalt arbejde. Når du arbejder med en fast belastning i 6 minutter, opnår dit kredsløb en såkaldt *steady state* (stabil puls), hvor ilttilførslen dækker musklernes behov.

* **Bokshøjde:** **40 cm** for mænd / **33 cm** for kvinder.
* **Tempo:** 22,5 step pr. minut (**90 taktslag/minut**).
* **Varighed:** 6 minutter (360 sekunder).

## Sådan udfører du Åstrand-Ryhming Step Test

1. **Forberedelse**  
   Find en bænk med den rette højde for dit køn (40 cm for mænd, 33 cm for kvinder). 
2. **Start testen**  
   Start vores interaktive guide nedenfor og træd op og ned i takt med metronomen i **6 minutter** (90 BPM / 22,5 step pr. minut).
3. **Registrer arbejdspulsen**  
   Det er afgørende at måle pulsen i testens **5. og 6. minut**. Pulsen i disse tre minutter bør være stabil (afvigelse på højst 5 slag/min). Gennemsnittet af disse målinger udgør din testpuls.
4. **Beregn dit resultat**  
   Indtast din gennemsnitlige testpuls, alder og kropsvægt i beregneren nedenfor.

## Tag testen med interaktiv guide
{: id="timer" }

Brug afspilleren nedenfor til at holde det præcise tempo (90 BPM) under testen. Skærmen holdes automatisk tændt på din enhed.

{% include components/steptest-timer.html type="astrand" %}

## Beregn dit resultat
{: id="calculator" }

Når du har gennemført de 6 minutter og noteret din gennemsnitlige puls fra det 5. og 6. minut, kan du beregne dit kondital her:

{% include calc/steptest.html test="astrand" %}

## Formlen og princippet bag Åstrand-Ryhming

Testen estimerer først din absolutte iltoptagelse i liter pr. minut ($\text{L/min}$) ud fra sammenhængen mellem din belastningspuls og arbejdsintensiteten. Derefter korrigeres resultatet for alder, da den maksimale hjertefrekvens falder naturligt med alderen.

### 1. Alderskorrektion
Det estimerede $\text{VO}_2\text{max}$-tal ganges med en alderskorrektionsfaktor ($f_{\text{alder}}$):

$$ \text{VO}_2\text{max}_{\text{korrigeret}} = \text{VO}_2\text{max}_{\text{estimerede}} \times f_{\text{alder}} $$

Typiske aldersfaktorer ($f_{\text{alder}}$) inkluderer:
* **15–24 år:** $1{,}10 \text{ til } 1{,}00$
* **25–34 år:** $1{,}00 \text{ til } 0{,}87$
* **35–44 år:** $0{,}87 \text{ til } 0{,}78$
* **45–54 år:** $0{,}78 \text{ til } 0{,}71$
* **55+ år:** $0{,}71 \text{ og lavere}$

### 2. Beregning af kondital
Når den absolutte $\text{VO}_2\text{max}$ ($\text{L/min}$) er korrigeret, omregnes den til dit relativt kondital i forhold til din kropsvægt:

$$ \text{kondital} = \frac{\text{VO}_2\text{max}_{\text{korrigeret}} \times 1000}{\text{kropsvægt i kg}} $$

## Styrker og begræsninger for testen

Åstrand-Ryhming Step Test har en høj videnskabelig validitet og er meget udbredt i kliniske og akademiske sammenhænge. Da den varer 6 minutter og kræver et stabilt arbejdsniveau, er den fysiologisk mere pålidelig end kortere 3-minutters tests.

Testen kræver dog, at din puls forbliver i et submaksimalt område (typisk mellem 120 og 170 slag/minut). Hvis din puls er for høj eller for lav under testen, falder præcisionen af estimatet.

<details markdown="1" class="references">
  <summary><h2 id="references">Referencer</h2></summary>

- Åstrand, P. O., & Ryhming, I. (1954). A nomogram for calculation of aerobic capacity (physical fitness) from pulse rate during submaximal work. *Journal of Applied Physiology*, 7(2), 218–221.
- Åstrand, I. (1960). Aerobic work capacity in men and women with special reference to age. *Acta Physiologica Scandinavica. Supplementum*, 49(169), 1–92.
</details>