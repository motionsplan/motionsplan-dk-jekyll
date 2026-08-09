---
title: Harvard Step Test – Klassisk & intensiv konditionstest
seo_title: 'Harvard Step Test: Test din udholdenhed og kondition'
excerpt: Harvard Step Test er en af de mest kendte og udfordrende steptests. Læs om protokollen, tag testen med vores timer, og beregn din score.
description: Harvard Step Test er en af de mest kendte og udfordrende steptests. Læs om protokollen, og beregn din fysiske ydeevne nemt.
permalink: /harvard-step-test/
language: da
header:
  overlay_image: /assets/images/unsplash/photo-1546869372-abdd57773019.jpg
  credit: https://images.unsplash.com/photo-1546869372-abdd57773019
  caption: Harvard Step Test – Klassisk & intensiv konditionstest
category:
- Kondition
- Konditionstests
- Steptests
meta:
  name: Harvard Step Test
  measures: kondital
  type: steptest
  equipment: stepbænk
  max: udholdenhedstest
  direct: indirekte test
tests:
  - id: "test-harvard-step-test"
    title: "Harvard Step Test"
    description: "Intensiv fysiologisk steptest (op til 5 minutter ved 120 BPM på en 50,8 cm / 40,6 cm høj bænk) til vurdering af kardiovaskulær udholdenhed og restitutionskapacitet via Fitness Index."
    category: ["Tests", "Kondition"]
    type: ["Protokol", "Konditionstest"]
    execution: ["Fysisk"]                  # 🪜 FYSISK TEST: Kræver intensivt steppearbejde på høj bænk
    method: "indirekte"                     # 📊 Indirekte vurdering baseret på pulserestitution efter testen
    modality: ["Steptest"]
    measures: ["Fitness Index", "Restitutionspuls", "Kardiovaskulær udholdenhed", "Kondital"]
    equipment: ["Stepbænk / Kasse (50,8 cm for mænd / 40,6 cm for kvinder)", "Stopur / Metronom (120 BPM)", "Pulsmåler"]
    setting: ["Indendørs", "Testcenter", "Skole", "Militær", "Individuel"]
    target_group: ["Atleter", "Motionister", "Mænd", "Kvinder"]
    related_tools:
      - "tool-harvard-steptest-beregner"

# INTERAKTIVE SOFTWARE-VÆRKTØJER
tools:
  - id: "tool-harvard-steptest-beregner"
    title: "Harvard Step Test Beregner & Interaktiv Timer"
    description: "Interaktiv timer med 120 BPM metronom samt beregner til udregning af dit Fitness Index ud fra gennemført tid og restitutionspuls ($P_1, P_2, P_3$)."
    category: ["Kondition", "Beregnere", "Tests"]
    type: ["Beregner", "Timer"]
    measures: ["Fitness Index", "Restitutionsscore", "Fitness-vurdering"]  # 🎯 Output-parametre fra modulet
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

Harvard Step Test er en af de mest kendte og ældste fysiologiske steptests i verden. Testen blev udviklet under 2. verdenskrig til at vurdere unge mænds fysiske form og kardiovaskulære udholdenhed.

Modsat mange nyere, milde submaksimale tests er Harvard Step Test ret intens. Bænken er høj (ca. 50,8 cm), og tempoet er højt (120 BPM), hvilket gør testen til en reel udfordring for dit kredsløb og din benmuskulatur.

Hvis du leder efter en mere skånsom test, kan du se [YMCA 3-minutters steptest](/ymca-3-minutters-steptest/) eller vores samlede [oversigt over steptests](/kondital-fra-steptest/).

[<i class='fas fa-calculator'></i> Hop til beregner](#calculator){: .btn .btn--success .btn--jump } [<i class='fas fa-clock'></i> Hop til timer](#timer){: .btn .btn--success .btn--jump }

## Hvad er Harvard Step Test?

Harvard Step Test måler din krops evne til at restituere efter hårdt arbejde. I stedet for kun at måle iltoptagelse direkte, beregner testen et såkaldt **Fitness Index** (fysisk ydeevne-indeks) baseret på, hvor hurtigt din puls falder efter 5 minutters intensivt steppearbejde.

* **Bokshøjde:** 50,8 cm (20 tommer) for mænd / 40,6 cm for kvinder.
* **Tempo:** 30 step pr. minut (120 taktslag/minut).
* **Varighed:** Op til 5 minutter (300 sekunder).

## Sådan udfører du Harvard Step Test

1. **Forberedelse**  
   Find en bænk eller kasse på **50,8 cm** (eller 40,6 cm for kvinder). 
2. **Gennemfør testen**  
   Start timeren nedenfor og træd op og ned i takt med metronomen i op til **5 minutter** (120 BPM / 30 step pr. minut). Hvis du ikke kan holde tempoet i 5 minutter, stopper du testen og noterer den nøjagtige tid, du holdt ud.
3. **Hvile og pulsmåling**  
   Så snart testen er slut, sætter du dig ned og tæller din puls i tre specifikke tidsintervaller efter testen:
   * **$P_1$:** 1,0 til 1,5 minut efter testen (tæl pulsslag i 30 sekunder).
   * **$P_2$:** 2,0 til 2,5 minutter efter testen (tæl pulsslag i 30 sekunder).
   * **$P_3$:** 3,0 til 3,5 minutter efter testen (tæl pulsslag i 30 sekunder).

## Tag testen med interaktiv guide
{: id="timer" }

Brug afspilleren nedenfor til at holde den korrekte takt (120 BPM) under testen. Skærmen holdes automatisk tændt på din enhed.

{% include components/steptest-timer.html type="harvard" %}

## Beregn dit resultat
{: id="calculator" }

Indtast din gennemførte tid og dine tre 30-sekunders pulsmålinger herunder for at beregne dit **Fitness Index**:

{% include calc/steptest.html test="harvard" %}

## Formlen bag Harvard Step Test

Harvard Step Test benytter to forskellige udgaver af formlen til at beregne scoren, afhængigt af om du laver den lange eller den korte pulsmåling:

### 1. Den lange formel (Mest præcis)
Ved at tælle pulsen i tre omgange af 30 sekunder efter testen benyttes følgende formel:

$$ \text{Fitness Index} = \frac{\text{varighed i sekunder} \times 100}{2 \times (P_1 + P_2 + P_3)} $$

*Hvor $P_1$, $P_2$ og $P_3$ er det faktiske antal pulsslag talt i de tre 30-sekunders intervaller.*

### 2. Den korte formel
Hvis du kun måler pulsen én gang i intervallet 1,0 til 1,5 minut efter testen ($P_1$), kan dette forenklede udtryk benyttes:

$$ \text{Fitness Index} = \frac{\text{varighed i sekunder} \times 100}{5{,}5 \times P_1} $$

## Sådan fortolker du dit Fitness Index

Når du har beregnet din score, kan du sammenligne dit resultat med den klassiske vurderingsskala:

| Fitness Index | Vurdering |
| :--- | :--- |
| **Under 55** | Dårlig fysisk form |
| **55 – 64** | Under middel |
| **65 – 79** | Middel / God |
| **80 – 89** | Meget god |
| **90 eller over** | Fremragende / Elite |

## Styrker og begræsninger for testen

Harvard Step Test er en fantastisk historisk test, der giver en reel udfordring for udholdenheden. Fordi bænken er høj (50,8 cm), kræver den dog en del benstyrke og god balance. 

For personer med knæproblemer, høj kropsvægt eller lav træningstilstand anbefales det i stedet at benytte [YMCA Modified steptest](/ymca-modified-steptest/), hvor bokshøjden tilpasses den enkelte.

<details markdown="1" class="references">
  <summary><h2 id="references">Referencer</h2></summary>

- Brouha, L. (1943). The Step Test: A Simple Method of Measuring Physical Fitness for Muscular Work in Young Men. *Research Quarterly. American Association for Health, Physical Education and Recreation*, 14(1), 31–36.
- Ryhming, I. (1953). A modified Harvard step test for the evaluation of physical fitness. *Arbeitsphysiologie*, 15(3), 235–250.
</details>