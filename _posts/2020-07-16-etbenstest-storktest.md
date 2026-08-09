---
title: &title "Enkeltbensstand og Stork Test: Test din statiske balance"
seo_title: "Enkeltbensstand & Stork Test: Guide og normtal til balancetest"
description: "Lær om Enkeltbensstand og Stork-testen – se aldersopdelte normtal, vurder din skadesrisiko og test din ankelstabilitet med vores timer."
excerpt: "Lær om Enkeltbensstand og Stork-testen – se aldersopdelte normtal, vurder din skadesrisiko og test din ankelstabilitet med vores timer."
permalink: /enkeltbensstand-stork-test/
language: da
tags:
  - test
  - balance
  - enkeltbensstand
  - stork-test
  - statisk balance
category:
  - Balance
  - Balancetests
last_modified_at: 2026-08-02T12:00:00Z
sidebar:
  nav: exercises
faq:
  - question: Hvorfor er testen med lukkede øjne så meget sværere?
    answer: "Synet er vores dominerende balancesans. Når du lukker øjnene, fjernes den visuelle faste referenceramme, og hjernen tvinges til 100 % at stole på signaler fra ledbånd, sener og det vestibulære system i det indre øre."
  - question: Er "Stork Test" det samme som en bækkenundersøgelse hos fysioterapeuten?
    answer: Inden for manuel terapi og fysioterapi findes der en undersøgelse af SI-leddet og bækkenbevægelighed, som også kaldes *Stork Test* (eller *Gillet Test*). Når man taler om træning, motion og fitness, henviser Stork-testen dog næsten altid til balancetest på tæer.
  - question: Hvad er en god score i Enkeltbensstand med åbne øjne?
    answer: Raske voksne under 60 år bør generelt kunne holde balancen uden problemer i **30–60 sekunder** på flad fod med åbne øjne. Med lukkede øjne er **10–15 sekunder** et godt udgangspunkt for generel ankelstabilitet.
# TESTS / PROTOKOLLER
tests:
  - id: "test-enkeltbensstand"
    title: "Enkeltbensstand (Single-Leg Stance Test)"
    description: "Klinisk og fysiologisk balancetest på flad fod (med åbne og lukkede øjne) til vurdering af statisk balance, proprioception og ankelstabilitet."
    category: ["Tests", "Balance"]
    type: ["Protokol", "Balancetest"]
    execution: ["Fysisk"]                  # 🧘‍♂️ FYSISK TEST: Kræver fysisk balance på ét ben
    method: "direkte"                     # ⏱️ Måles direkte i sekunder
    modality: ["Balance"]
    measures: ["Statisk balance", "Proprioception", "Ankelstabilitet", "Sekunder"]
    equipment: ["Stopur", "Timer"]
    setting: ["Klinik", "Hjemmetest", "Fitnesscenter", "Individuel"]
    target_group: ["Børn", "Unge", "Voksne", "Ældre", "Motionister", "Atleter"]
    related_tools:
      - "tool-balance-timer"

  - id: "test-stork-test"
    title: "Stork-testen (Stork Stand Test)"
    description: "Avanceret balancetest på tæerne/trædepuden med modstående fod placeret på knæet til vurdering af ankelstabilitet og lægudholdenhed."
    category: ["Tests", "Balance"]
    type: ["Protokol", "Balancetest"]
    execution: ["Fysisk"]                  # 🧘‍♂️ FYSISK TEST: Kræver fysisk balance på tæer/trædepude
    method: "direkte"                     # ⏱️ Måles direkte i sekunder
    modality: ["Balance"]
    measures: ["Statisk balance", "Lægudholdenhed", "Ankelstabilitet", "Sekunder"]
    equipment: ["Stopur", "Timer"]
    setting: ["Klinik", "Fitnesscenter", "Idrætsanlæg", "Individuel"]
    target_group: ["Unge", "Voksne", "Motionister", "Atleter"]
    related_tools:
      - "tool-balance-timer"

# INTERAKTIVE SOFTWARE-VÆRKTØJER
tools:
  - id: "tool-balance-timer"
    title: "Balance Test Timer"
    description: "Interaktiv timer og stopur til registrering af tid og præstation på Enkeltbensstand og Stork-testen."
    category: ["Balance"]
    type: ["Beregner"]
    measures: ["Tid", "Sekunder"]         # 🎯 Output-parametre fra timeren
    anchor: "#timer"
    category_schema: "HealthAndFitnessApplication"
---

**Enkeltbensstand (Single-Leg Stance Test)** og **Stork-testen (Stork Stand Test)** er to af de mest anvendte og tilgængelige tests til vurdering af statisk balance og ankelstabilitet. 

Selvom begge tests udføres stående på ét ben uden brug af specialudstyr, adskiller de sig markant i sværhedsgrad, udførelse og formål. I denne guide gennemgår vi begge tests, vurderer din score mod aldersrelaterede normtal og forklarer, hvad resultatet betyder for din skadesrisiko.

[<i class='fas fa-clock'></i> Hop direkte til timer](#timer){: .btn .btn--success .btn--jump }

I dette indlæg får du svar på følgende spørgsmål:

- Hvad er forskellen på Enkeltbensstand og Stork-testen?
- Hvordan udføres den klassiske Enkeltbensstand (med åbne og lukkede øjne)?
- Hvordan udføres den avancerede Stork-test på tæerne?
- Hvad er normtallene for din aldersgruppe?
- Hvad fortæller testresultaterne om din skadesrisiko?

---

## Statisk balance på ét ben

Statisk balance handler om kroppens evne til at opretholde tyngdepunktet inden for understøttelsesfladen, når du står stille. Når du reducerer understøttelsesfladen fra to fødder til én, tvinges anklen, knæet, hoften og nervesystemet til at foretage kontinuerlige mikromuskulære korrektioner.

Test af enkeltbensbalance er udbredt inden for både genoptræning, aldersrelateret faldforebyggelse og præstationstest af atleter.

---

## 1. Enkeltbensstand (Single-Leg Stance Test)

Enkeltbensstand er basistesten, der bruges i sundhedstjek, klinisk undersøgelse og generel skadesforebyggelse.

### Udførelse

1. **Udgangsstilling:** Stå barefods på et plant, fast underlag. Placér hænderne på hofterne eller krydset over brystet.
2. **Løftet:** Løft det ene ben fra gulvet ved at bøje i knæet. Det løftede ben må **ikke** berøre støttebenet.
3. **Tidtagning:** Start stopuret i det øjeblik, foden forlader gulvet. Tiden stoppes, hvis:
   * Det løftede ben rører gulvet eller støttebenet.
   * Støttefoden flytter sig (glider eller hopper) på gulvet.
   * Hænderne fjerner sig fra hofterne/brystet.
4. **Testvariationer:** Testen gennemføres først med **åbne øjne** og bagefter med **lukkede øjne**.

### Skadesrisiko og lukkede øjne
Enkeltbensstand med lukkede øjne udkobler synssansen, hvilket tvinger kroppen til udelukkende at stole på det proprioceptive system (ledsansen) og det indre øre.

> **Vidste du?** I et studie af Trojian & McKeag (2006) fandt forskerne, at unge udøvere, der ikke kunne holde balancen i 10 sekunder på ét ben med lukkede øjne, havde **2,5 gange højere risiko for at pådrage sig en ankelskade** i den efterfølgende sæson.

---

## 2. Stork-testen (Stork Stand Test)

Stork-testen er en væsentligt mere krævende variation, der anvendes meget i sportsverdenen og atletik. Ud over balance kræver den markant styrke og udholdenhed i underbenets og læggens muskulatur.

### Udførelse

1. **Udgangsstilling:** Stå barefods på et plant underlag med hænderne på hofterne.
2. **Placering:** Løft det frie ben, og placér fodsålen fladt mod **indersiden af støttebenets knæ**.
3. **Løft til tæer (det svære element):** Løft hælen på støttebenet, så du balancerer udelukkende på **trædepuden/tæerne**.
4. **Tidtagning:** Tiden starter i det øjeblik hælen løftes. Tiden stoppes, hvis:
   * Hælen rører gulvet igen.
   * Foden slipper knæet på støttebenet.
   * Hænderne fjerner sig fra hofterne.
   * Støttefoden roterer eller flytter sig på gulvet.

---

## Sammenligning: Hvornår skal du vælge hvad?

| Parameter | Enkeltbensstand | Stork Test |
| :--- | :--- | :--- |
| **Sværhedsgrad** | Basis / Moderat | Høj / Avanceret |
| **Understøttelse** | Flad fod | Trædepude / Tæer |
| **Primært fokus** | Proprioception & ankelstabilitet | Lægudholdenhed & maksimal ledsammenstilling |
| **Målgruppe** | Genoptræning, motionister, ældre | Atleter, idrætsudøvere, styrketrænende |
| **Typisk varighed** | 30–60 sek. (åbne) / 10–30 sek. (lukkede) | 10–25 sekunder |

---

## Normtal: Hvor god er din statiske balance?

For at vurdere dit testresultat kan du sammenligne dine tider med etablerede videnskabelige normdata.

### Normtal for Enkeltbensstand (flad fod)
Nedenstående tabel viser aldersopdelte gennemsnitstider (i sekunder) for raske mænd og kvinder med henholdsvis åbne og lukkede øjne (baseret på data fra *Springer et al., 2007* og *Bohannon, 2006*):

| Aldersgruppe | Åbne øjne (Sekunder) | Lukkede øjne (Sekunder) |
| :--- | :--- | :--- |
| **18–39 år** | 43 – 45 sek. (maks cut-off: 60s) | 9 – 15 sek. |
| **40–49 år** | 40 – 44 sek. | 7 – 12 sek. |
| **50–59 år** | 36 – 42 sek. | 5 – 9 sek. |
| **60–69 år** | 25 – 34 sek. | 3 – 5 sek. |
| **70–79 år** | 14 – 22 sek. | 2 – 3 sek. |

*Bemærk: For voksne under 50 år anbefales en cutoff-grænse på **10 sekunder med lukkede øjne** som minimum for godkendt ankelstabilitet (Trojian & McKeag, 2006).*

### Normtal for Stork-testen (på tæerne)
Da Stork-testen udføres på trædepuden, er tiderne naturligt kortere. Nedenstående vurderingsskala anvendes i atletiske præstationstests for voksne og unge idrætsudøvere (*Johnson & Nelson, 1979*; *Schell & Leelarthaepin, 1994*):

| Vurdering | Tid på tæerne (Sekunder) |
| :--- | :--- |
| **Fremragende (Excellent)** | > 50 sek. |
| **Over middel (Above Average)** | 37 – 50 sek. |
| **Middel (Average)** | 15 – 36 sek. |
| **Under middel (Below Average)** | 5 – 14 sek. |
| **Lav (Poor)** | < 5 sek. |

---

## Timer og scoring
{: id="timer" }

{% include components/balance-timer.html %}

---

## FAQ

{% include motionsplan/faq.html %}

---

## Opsamling

Både Enkeltbensstand og Stork-testen er enkle, men stærke redskaber til at afsløre ubalancer og svagheder i din statiske postural kontrol. Start med den klassiske Enkeltbensstand for at sikre en god basisfunktion, før du avancerer til Stork-testen.

* **Se alle balancetests:** [Oversigt over balancetests på Motionsplan.dk](/balance-tests/)
* **Gå i krig med balancetræning:** [Effektive balanceøvelser og progression](/balancetraening/)

<details markdown="1" class="references">
  <summary><h2 id="references">Referencer</h2></summary>

- Bohannon, Richard W. 2006. “Single-limb Stance Times: A Review of Values Obtained from Healthy Subjects in Age Groups from Thirty to Eighty-Eight Years”. _Dynamic Medicine_ 5 (marts): 9. https://doi.org/10.1186/1476-5918-5-9.
- Hrysomallis, Con. 2011. “Balance Ability and Athletic Performance”. _Sports Medicine (Auckland, N.Z.)_ 41 (3): 221–32. https://doi.org/10.2165/11538560-000000000-00000.
- Johnson, Barry L., og Jack K. Nelson. 1979. _Practical Measurements for Evaluation in Physical Education_. 3. udg. Minneapolis: Burgess Publishing Company.
- Schell, S. N., og B. Leelarthaepin. 1994. _Physical Fitness Assessment Procedures Manual_. Sydney: Health and Fitness Testing Services.
- Springer, Barbara A., Ruth Marin, Tamara Cyhan, Holly Roberts, og J. J. Norman. 2007. “Normative Values for the Unipedal Stance Test with Eyes Open and Closed”. _Journal of Geriatric Physical Therapy_ 30 (1): 8–15. https://doi.org/10.1519/00139143-200730010-00003.
- Trojian, T. H., og D. B. McKeag. 2006. “Single Leg Balance Test to Identify Risk of Ankle Sprains”. _British Journal of Sports Medicine_ 40 (7): 610–13. https://doi.org/10.1136/bjsm.2005.024315.
</details>