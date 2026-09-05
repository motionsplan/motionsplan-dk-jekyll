---
title: Chester Step Test – Progressiv & udbredt konditionstest (CST)
seo_title: 'Chester Step Test: Test dit kondital med progressiv steptest'
excerpt: Chester Step Test er en populær, submaksimal og progressiv steptest. Læs om protokollen, brug vores interaktive timer, og beregn dit kondital.
description: Chester Step Test er en populær, submaksimal og progressiv steptest. Læs om protokollen, og beregn dit kondital nemt.
permalink: /chester-step-test/
language: da
header:
  overlay_image: /assets/images/unsplash/photo-1546869372-abdd57773019.jpg
  credit: https://images.unsplash.com/photo-1546869372-abdd57773019
  caption: Chester Step Test – Progressiv & udbredt konditionstest
categories:
- Kondition
- Konditionstests
- Steptests
meta:
  name: Chester Step Test (CST)
  measures: kondital
  type: steptest
  equipment: stepbænk
  max: submaksimal test
  direct: indirekte test
tests:
  - id: "test-chester-step-test"
    title: "Chester Step Test (CST)"
    description: "Progressiv, submaksimal steptest over op til 5 niveauer (2 min pr. niveau med øgende kadence) til indirekte estimering af kondital (VO2max) ud fra pulsekstrapolation."
    category: ["Tests", "Kondition"]
    type: ["Protokol", "Konditionstest"]
    execution: ["Fysisk"]                  # 🪜 FYSISK TEST: Kræver fysisk træde-arbejde op/ned af stepbænk
    method: "indirekte"                     # 📊 Indirekte estimering af VO2max baseret på submax pulstilpasning
    modality: ["Steptest"]
    measures: ["Kondital", "VO2max", "Submaksimal puls", "Pulsrespons"]
    equipment: ["Stepbænk (15-30 cm)", "Pulsmåler / Pulsbælte", "Timer / Metronom"]
    setting: ["Indendørs", "Klinik", "Testcenter", "Arbejdsmedicin", "Individuel"]
    target_group: ["Brandmænd / Politi", "Atleter", "Voksne", "Mænd", "Kvinder"]
    related_tools:
      - "tool-chester-steptest-beregner"

# INTERAKTIVE SOFTWARE-VÆRKTØJER
tools:
  - id: "tool-chester-steptest-beregner"
    title: "Chester Step Test Beregner & Interaktiv Timer"
    description: "Interaktiv timer med automatisk kadencestyring samt beregner til ekstrapolation af dit kondital (VO2max) ud fra målte pulsværdier."
    category: ["Kondition", "Beregnere", "Tests"]
    type: ["Beregner", "Timer"]
    measures: ["Kondital", "VO2max", "Teoretisk maxpuls", "Stop-puls (80% HRmax)"]  # 🎯 Output-parametre fra modulet
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

Chester Step Test (CST) er en af de mest udbredte og anerkendte submaksimale steptests i Europa. Testen blev oprindeligt udviklet af professor Kevin Sykes ved University of Chester og bruges i dag hyppigt inden for arbejdsmedicin, sundhedstjek samt hos redningstjenester som brandvæsen og politi.

Testen er progressiv, hvilket vil sige, at tempoet skrues op for hvert 2. minut. Fordi testen stoppes, når din puls når omkring 80% af din teoretiske maksimale hjertefrekvens, undgår du at skulle presse dig selv til fuldstændig udmattelse.

Søger du en test med et helt fast tempo i stedet, kan du læse om [YMCA 3-minutters steptest](/ymca-3-minutters-steptest/) eller se vores samlede [oversigt over steptests](/kondital-fra-steptest/).

[<i class='fas fa-calculator'></i> Hop til beregner](#calculator){: .btn .btn--success .btn--jump } [<i class='fas fa-clock'></i> Hop til timer](#timer){: .btn .btn--success .btn--jump }

## Hvad er Chester Step Test?

Chester Step Test er opbygget af op til 5 niveauer af 2 minutters varighed (maksimalt 10 minutter i alt). For hvert niveau stiger kadencen med 5 step pr. minut (20 BPM).

* **Niveau 1 (0–2 min):** 15 step/min (60 BPM)
* **Niveau 2 (2–4 min):** 20 step/min (80 BPM)
* **Niveau 3 (4–6 min):** 25 step/min (100 BPM)
* **Niveau 4 (6–8 min):** 30 step/min (120 BPM)
* **Niveau 5 (8–10 min):** 35 step/min (140 BPM)

### Valg af bokshøjde
Modsat mange andre tests tilpasses bokshøjden ud fra din alder og dit nuværende aktivitetsniveau:
* **15 cm:** Ældre eller personer med lavt aktivitetsniveau.
* **20 cm:** Aktive voksne over 40 år.
* **25 cm:** Aktive voksne under 40 år.
* **30 cm:** Meget veltrænede personer eller erhvervsgrupper (fx brandmænd).

{% include components/steptest-stepheight.html test="chester" %}

## Sådan udfører du Chester Step Test

1. **Forberedelse**  
   Vælg den rette bokshøjde ud fra din alder og form. [Find din maxpuls](/test-max-puls/) eller udregn den.
   Beregn din stop-grænse (80% af $\text{HR}_{\text{max}}$):
   $$ \text{Stop-puls} = \text{HR}_{\text{max}} \times 0{,}80 $$
2. **Start testen**  
   Start vores interaktive guide nedenfor. Træd op og ned i takt med timeren. Timeren skruer automatisk op for tempoet hvert 2. minut.
3. **Mål pulsen ved hvert niveau**  
   Notér din puls i de sidste 5–10 sekunder af hvert 2-minutters niveau.
   Indtast kun pulsen for de niveauer, du har gennemført helt (2 minutter). Hvis du må stoppe midtvejs i et niveau (fx fordi du rammer din stop-puls), lader du blot dette felt stå tomt. Beregneren skal bruge pulsen fra minimum 2 gennemførte niveauer for at ekstrapolere dit kondital.
4. **Hvornår stopper testen?**  
   Testen afsluttes enten når:
   * Du har gennemført alle 5 niveauer (10 minutter).
   * Din puls overstiger din stop-grænse (80% af $\text{HR}_{\text{max}}$).
   * Du føler dig udmattet eller ikke kan holde kadencen.

## Tag testen med interaktiv guide
{: id="timer" }

Brug afspilleren nedenfor til at gennemføre testen. Modulet skifter automatisk tempo for hvert niveau og holder skærmen aktiv på din enhed.

{% include components/steptest-timer.html type="chester" %}

## Beregn dit resultat
{: id="calculator" }

Indtast din alder, den anvendte bokshøjde samt din målte puls for de gennemførte niveauer herunder:

{% include calc/steptest.html test="chester" %}

## Formlen og princippet bag Chester Step Test

Testen estimerer dit kondital ved at optegne en lineær sammenhæng mellem den iltoptagelse ($\text{VO}_2$), som hvert niveau kræver, og din registrerede pulstrend.

Det teoretiske iltkrav for et givet niveau beregnes fysiologisk som:

$$ \text{VO}_2 = (\text{step/min} \times 0{,}2) + (\text{step/min} \times \text{stephøjde i m} \times 1{,}8 \times 1{,}33) + 3{,}5 $$

Når pulsen for de gennemførte niveauer indplottes mod disse VO₂-værdier, ekstrapoleres den linje, der danner sig, op til din forventede maksimalpuls. Skæringspunktet angiver dit estimerede kondital (VO₂max) i $\text{mL O}_2/\text{kg/min}$.

## Styrker og begræsninger for testen

Chester Step Test er yderst fleksibel og sikker, fordi opvarmningen sker glidende i de første niveauer, og fordi testen tilpasses individuelt via bokshøjden.

En begrænsning ved testen er, at formlen benytter standard-estimatet for maksimalpuls, som kan afvige med 10-15 slag/minut hos enkelte individer. Hvis du indtaster dit faktiske maxpuls er denne begrænsning naturligvis mindre.

<details markdown="1" class="references">
  <summary><h2 id="references">Referencer</h2></summary>

- Sykes, K., & Roberts, A. (2004). The Chester step test—a simple submaximal field test for the estimation of aerobic capacity. *Journal of Sports Sciences*, 22(7), 641–645.
- Buckley, J. P., Sim, J., Eston, R. G., Hession, R., & Fox, R. (2004). Reliability and validity of the Chester Step Test for predicting VO2max. *Journal of Sports Sciences*, 22(7), 621–626.
</details>