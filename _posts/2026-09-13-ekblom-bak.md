---
title: "Ekblom-Bak Cykeltest – Submaksimal testen med lav fejlmargin"
seo_title: "Ekblom-Bak Cykeltest: Beregn dit kondital præcist (Beregner)"
excerpt: "Ekblom-Bak cykeltesten er en moderne submaksimal konditionstest på ergometercykel. Omgår usikkerheden ved maxpuls ved at bruge to trin."
description: "Beregn dit kondital (VO2max) præcist med Ekblom-Bak cykeltesten. Submaksimal test på 8 minutter med lav fejlmargin og uden krav om maxpuls."
permalink: /ekblom-bak-test/
language: da
header:
  teaser: https://www.gih.se/images/18.17a7a9a197a1d649fd91fdc/1752134580415/GIH_ekblom_bak_testet.jpg
  caption: *title
categories:
  - Kondition
  - Konditionstests
meta:
  name: "Ekblom-Bak Cykeltest"
  measures: "kondital"
  type: "cykeltest"
  equipment: "ergometercykel"
  max: "submaksimal"
  method: "indirekte"
  intensity: "moderat"

# TESTS / PROTOKOLLER
tests:
  - id: "test-ekblom-bak-cykel"
    title: "Ekblom-Bak Cykeltest"
    description: "Moderne submaksimal cykeltest på 8 minutter med fast 32W baseline og individuel arbejdsbelastning til præcis beregning af VO2max."
    category: ["Cykling", "Kondition"]
    type: ["Protokol", "Konditionstest"]
    execution: ["Fysisk"]
    method: "indirekte"
    modality: ["Cykling"]
    measures: ["Kondital", "VO2max", "Iltoptagelse"]
    equipment: ["Ergometercykel", "Wattmåler", "Pulsmåler"]
    setting: ["Fitnesscenter", "Klinik", "Laboratorietest", "Individuel"]
    target_group: ["Unge", "Voksne", "Ældre", "Mænd", "Kvinder"]
    related_tools: ["tool-ekblom-bak-beregner"]
    icon: "🚴"
    badge: "Cykeltest"
    unit: "ml/kg/min"
    storage_key: "ekblom_bak"
    allow_quick_log: false

# INTERAKTIVE SOFTWARE-VÆRKTØJER
tools:
  - id: "tool-ekblom-bak-beregner"
    title: "Ekblom-Bak Beregner"
    description: "Beregn dit kondital (VO2max) ud fra din pulstigning i Ekblom-Bak cykeltesten med indbygget valgfri timer."
    category: ["Kondition"]
    type: ["Beregner"]
    execution: ["Testberegner"]
    anchor: "#calculator"
    category_schema: "HealthAndFitnessApplication"
tags:
  - test
  - konditionstest
  - submaksimal test
  - indirekte test
  - cykeltest
  - ekblom bak
  - testberegner
last_modified_at: 2026-09-13T20:00:00Z
toc: true
breadcrumbs: true
---

Vil du kende dit [kondital](/kondital/) med høj præcision, men uden at skulle presse din puls helt op til sit maksimale? **Ekblom-Bak cykeltesten** er en af de mest anerkendte og moderne submaksimale konditionstests. Den blev udviklet i Sverige i 2012 og opdateret i 2016 som et videnskabeligt opgør med de gamle klassiske cykeltests.

Testen tager præcis **8 minutter** på en ergometercykel og kræver hverken kendskab til din reelle maxpuls eller risikabel all-out belastning.

[<i class='fas fa-calculator'></i> Hop direkte til beregneren](#calculator){: .btn .btn--success .btn--jump }

## Hvorfor er Ekblom-Bak testen mere præcis?

De fleste traditionelle submaksimale cykeltests (som f.eks. Åstrands et-punktstest) estimerer konditallet ved at ekstrapolere din puls op til en beregnet maxpuls ($220 - \text{alder}$). Da maxpulsen kan variere med $\pm 10\text{--}12\text{ slag/minut}$ fra gennemsnittet, introducerer det en betydelig fejlmargin.

Ekblom-Bak testen løser dette problem ved at kigge på **pulstigningen ($\Delta\text{HR}$)** mellem to belastninger i stedet for din absolutte puls:

1. **Eliminerer maxpuls-gæt:** Testens regressionsligning anvender alders- og kønsspecifikke koefficienter i stedet for direkte ekstrapolation til maxpuls.
2. **Korrigerer for dagsform og støj:** Ved at måle forskellen mellem en lav baseline og en højere arbejdsbelastning neutraliseres støj som dagsform, kaffe, nervøsitet og rumtemperatur.
3. **Lav standardafvigelse:** Testen har en estimeret standardfejl ($\text{SEE}$) på kun ca. $\pm 4{,}5\text{ ml/kg/min}$, hvilket gør den mærkbart mere præcis end den klassiske 1-punkts Åstrand-test.

## Sådan udfører du Ekblom-Bak testen (Step-by-step)

Testen kræver en ergometercykel med wattvisning samt en pulsmåler. Kadencen skal holdes stabilt på **60 omdrejninger i minuttet (RPM)** under hele testen.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        EKBLOM-BAK PROTOKOL (8 MIN)                     │
├───────────────────────────────┬────────────────────────────────────────┤
│ Min 0:00 – 4:00 (Trin 1)      │ Fast 32 Watt (0.5 kp v. 60 RPM)        │
│                               │ ⚡ Aflæs HR1 i minut 4:00              │
├───────────────────────────────┼────────────────────────────────────────┤
│ Min 4:00 – 8:00 (Trin 2)      │ Højere watt (fx 100, 150 eller 200 W)  │
│                               │ ⚡ Aflæs HR2 i minut 8:00              │
└───────────────────────────────┴────────────────────────────────────────┘
```

### 1. Trin 1: Baseline (Minut 0 til 4)

* **Belastning:** Præcis **32 Watt** (eller $0{,}5\text{ kp}$ ved 60 RPM).
* **Varighed:** 4 minutter.
* **Formål:** Etablerer kroppens tomgangs-puls under ren bevægelse.
* **Måling:** Aflæs din puls ($HR_1$) nøjagtigt ved slutningen af det 4. minut.

### 2. Trin 2: Arbejdsbelastning (Minut 4 til 8)

* **Belastning:** Øg straks modstanden til en højere belastning ($PO_2$). Vælg et watt-niveau ud fra dit træningsniveau:
  * *Utrænede / ældre:* 50 – 100 Watt
  * *Moderat trænede:* 100 – 150 Watt
  * *Veltrænede:* 150 – 200 Watt+
* **Krav:** Belastningen skal vælges således, at din puls når over **120 slag/minut**, og du føler en oplevet anstrengelse ($\text{RPE}$) på over 14 ("Noget hårdt") på Borg-skalaen.
* **Måling:** Aflæs din puls ($HR_2$) nøjagtigt ved slutningen af det 8. minut.

## Beregner til Ekblom-Bak cykeltesten
{: id="calculator" }

Indtast din alder, vægt og testværdier herunder. Du kan enten benytte den indbyggede 8-minutters timer under testen eller indtaste dine pulstal direkte efterfølgende.

{% include calc/ekblom-bak.html %}

## Matematikken bag Ekblom-Bak formlen

Konditallet ($VO_2\max$ i $\text{ml/kg/min}$) beregnes ved først at finde den absolutte iltoptagelse ($VO_2\max$ i $\text{L/min}$) ud fra Ekblom-Bak et al. (2016) regressionsmodellerne:

For mænd:

$$
VO_2\max (\text{L/min}) = 2{,}446 - (0{,}0215 \times \text{alder}) + (0{,}00769 \times \Delta PO) - (0{,}00977 \times \Delta HR) - (0{,}00490 \times HR_2)
$$

For kvinder:

$$
VO_2\max (\text{L/min}) = 1{,}836 - (0{,}0190 \times \text{alder}) + (0{,}00885 \times \Delta PO) - (0{,}00984 \times \Delta HR) - (0{,}00397 \times HR_2)
$$

Hvor:
* $\Delta PO = PO_2 - 32\text{ W}$ (Ændringen i Watt)
* $\Delta HR = HR_2 - HR_1$ (Ændringen i puls)
* $HR_2$ = Pulsen ved slutningen af minut 8.

Det relative kondital findes herefter ved:

$$
\text{Kondital (ml/kg/min)} = \frac{VO_2\max (\text{L/min}) \times 1000}{\text{Vægt (kg)}}
$$

Resultatet vurderes automatisk mod [alders- og kønsspecifikke normtabeller for kondital](/kondital/).

<details markdown="1" class="references">
  <summary><h2 id="references">Referencer</h2></summary>

- Ekblom-Bak, E., Björkman, F., Hellenius, M. L., & Ekblom, B. (2014). "A new submaximal cycle ergometer test for prediction of VO2max." *Scandinavian Journal of Medicine & Science in Sports*, 24(2), 319–326.
- Björkman, F., Ekblom-Bak, E., Ekblom, Ö., & Ekblom, B. (2016). "Validity of the revised Ekblom-Bak cycle ergometer test in adults." *European Journal of Applied Physiology*, 116(9), 1643–1652.
</details>