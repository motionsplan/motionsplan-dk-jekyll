---
title: 'Trappetest i roning: Test din maksimale præstation'
excerpt: Trappetesten i roning er en test til at finde dit kondital. Det er en af de mest pålidelige tests til roning, hvis du gerne vil finde din maksimale ydeevne og iltoptagelse.
permalink: /roning-trappetest/
language: da
header:
  teaser: /assets/images/unsplash/photo-1520536363714-9459b8f1af72.jpg
  credit: https://images.unsplash.com/photo-1520536363714-9459b8f1af72
  caption: 'Trappetest i roning: Test din maksimale præstation'
categories:
- Kondition
- Konditionstests
- Roning
tags:
- test
- sport
- roning
- kondition
- konditionstest
meta:
  name: Trappetest i roning
  equipment: roergometer
  measures: anaerob tærskel
  type: rotest
# TESTS / PROTOKOLLER
tests:
  - id: "test-trappetest-roning"
    title: "Trappetest i Roning (Kurt Jensen / ATRO)"
    description: "Maksimal, trinvist stigende ergometertest i roning (5 minutter pr. trin) til vurdering af roerens maksimale iltoptagelse (VO2max) og kondital."
    category: ["Tests", "Roning", "Kondition"]
    type: ["Protokol", "Konditionstest"]
    execution: ["Fysisk"]
    method: "indirekte"
    modality: ["Roning"]
    measures: ["Kondital", "VO2max", "Watt", "Maksimal ydeevne", "Anaerob tærskel"]
    equipment: ["Roergometer (fx Concept2)", "Pulsmåler"]
    setting: ["Indendørs", "Ro-klub", "Testcenter", "Individuel"]
    target_group: ["Roere", "Atleter", "Motionister", "Mænd", "Kvinder"]
    related_tools:
      - "tool-roning-trappetest-beregner"

# INTERAKTIVE SOFTWARE-VÆRKTØJER
tools:
  - id: "tool-roning-trappetest-beregner"
    title: "Trappetest Roning Beregner"
    description: "Interaktiv live-timer og beregner til udregning af dit kondital og VO2max i l/min baseret på dit slutresultat i rotrappetesten."
    category: ["Roning", "Kondition", "Tests"]
    type: ["Beregner"]
    measures: ["Kondital", "VO2max", "Slut-watt"]
    anchor: "#calculator"
    category_schema: "HealthAndFitnessApplication"

# STRUCTURED FAQ (SCHEMA.ORG / JEKYLL SUPPORT)
faq:
  - question: "Hvad er formålet med Trappetesten i roning?"
    answer: "Formålet er at estimere roerens maksimale iltoptagelse (VO2max) og kondital, samt at fastlægge specifikke træningszoner (puls og watt) til brug i den fremtidige træning."
  - question: "Hvordan udregnes den maksimale watt-belastning i testen?"
    answer: "Hvis du ikke gennemfører det sidste trin fuldt ud (5 minutter), laves en lineær interpolering. Hvert gennemført minut tæller som 1/5 af springet mellem to trin. Stiger trinnet fx med 15 watt, og ror du i 3 minutter, lægges 9 watt til bundtrinnet."
  - question: "Hvilken formel bruges til at udregne konditallet?"
    answer: "Testen bruger en dansk valideret formel udviklet af Kurt Jensen for Team Danmark: VO2max (mL/min) = 13,7 × Watt + 287. Dette deles herefter med kropsvægten for at få det relative kondital."
  - question: "Hvordan konverteres Watt til hastighed (Tid/500m) i skemaet?"
    answer: "Concept2 benytter en fast, fysisk formel til at konvertere den mekaniske effekt (Watt) til bådhastighed. Formlen er: Pace (sekunder pr. 500m) = 500 × (2.8 / Watt)^(1/3)."

last_modified_at: '2026-08-16T10:14:14Z'
---

Trappetesten i roning er en test til at [finde dit kondital](/kondital/). Det er en af de mest udbredte og fysiologisk pålidelige tests sammen med [2000 meter testen til roning](/kondital-roning/), især hvis du ror regelmæssigt og vil kende din maksimale ydeevne uden brug af iltmaske.

Trappetests (inkrementelle tests) kendes fra forskellige udholdenhedsidrætter, fx cykling og løb. Fælles for dem alle er, at du starter på et relativt lavt niveau og gradvist øger belastningen, indtil du til sidst rammer udmattelse. 

Fordelen ved den 5 minutter lange trintid i rotrappetesten er, at kredsløbet når en stabil tilstand (*steady state*) på hvert niveau. Dermed bliver sammenhængen mellem den ydede effekt (Watt) og den maksimale iltoptagelse (VO₂max) meget præcis. Det kræver blot et ergometer, fx en Concept2, der viser Watt.

{% include figure image_path="https://images.unsplash.com/photo-1520536363714-9459b8f1af72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=600&q=60" alt="Trappetest i roning på Concept2" %}

## Timer & Beregner til trappetesten i roning
{: id="calculator" }

Vi har udviklet et interaktivt værktøj, der ikke alene indeholder samtlige **28 niveauer** fra den officielle ATRO-test, men også en indbygget pacing-timer, som viser dig **Watt, Kadence (SPM) og din præcise målhastighed (Tid/500m)** undervejs i testen.

Sæt computeren eller mobilen foran roergometeret, vælg dit startniveau og tryk **Start Trappetest**!

{% include components/roning-trappetest.html %}

---

## Sådan udføres trappetesten i roning i praksis

Protokollen er udviklet af Kurt Jensen for Team Danmark og beskrevet detaljeret i [Aldersrelateret Træning i Roning (ATRO)](https://roning.dk/app/uploads/2016/12/ATRO-bogen.pdf). Den udføres således:

- Trinene varer præcis **5 minutter**.
- I værktøjet ovenfor (eller i ATRO-tabellen længere nede) vælger du det niveau, der bedst matcher den forventede Tid/500m, du kan holde på en 2000-meter-test.
- Start på Trin 1. Hold det præcise **Watt-tal** og den foreslåede **kadence (+/- 2 tag pr. min)**. Modsat cykling styrer romaskinen ikke selv belastningen, så det kræver koncentration at ro *steady*.
- Efter præcis 5 minutter på Trin 1 fortsætter du straks og uden pause på Trin 2, hvor både Watt og kadence stiger.
- Fortsæt til du er totalt udmattet. Testen afbrydes, når du ikke længere kan holde den krævede Watt-belastning i tre på hinanden følgende rotag.
- Bemærk: Hvis du kan fortsætte forbi Trin 7, lægger du manuelt de faste Watt-stigninger til per trin, indtil udmattelse indtræffer.
- Notér på minuttet (og sekundet), hvornår testen afbrydes på det sidste ufuldstændige trin.

## Omregning fra Watt til Hastighed (Tid/500m)

I det officielle skema fra Team Danmark er alle pacing-krav angivet i **Watt**. Mange roere er imidlertid vant til at styre deres intensitet ud fra **Tid/500m** (Pace) på ergometerets skærm. 

I vores beregner har vi indbygget Concept2's fysiske omregningsformel, så du får vist præcis, hvilken gennemsnitshastighed der svarer til de krævede Watt. For den nysgerrige er formlen:

$$ \text{Pace/500m (i sekunder)} = 500 \times \sqrt[3]{\frac{2,8}{\text{Watt}}} $$

*Sætter du dit ergometer til at vise Tid/500m, vil vores live-timer derfor fungere som din direkte pacesætter gennem alle 35 minutter.*

---

## Det officielle trappetest skema

Herunder finder du det originale skema for niveauerne 1 til 28, som de er gengivet i ATRO-manualen:

{% include figure image_path="/assets/images/blog/roning-trappetest-atk.png" alt="Trappetest i roning tabel (ATRO)" %}

## Eksempel på udførelse og udregning

Hvis din forventede 2000-meter tid svarer til **1:53 pr. 500m**, skal du vælge at starte på **Niveau 13**. 

1. **Trin 1:** Du starter på 155 Watt, som holdes stabilt i 5 minutter (Kadence 20).
2. **Trin 2:** Du stiger uden pause til 170 Watt i 5 minutter (Kadence 22).
3. **Udmattelse:** Du bliver ved med at stige trin for trin. Antag, at du gennemfører Trin 6 (230 Watt), men må kaste håndklædet i ringen efter **3 minutter inde i Trin 7**.

Mellem Trin 6 (230 Watt) og Trin 7 (245 Watt) er der en forskel på 15 Watt. Hvert minut tæller som 1/5 af trinnet. Du har roet 3 minutter, altså $\frac{3}{5}$ af 15 Watt, hvilket giver 9 Watt.

Din samlede, interpolerede maksimale effekt i testen bliver dermed: 
$230 \text{ Watt} + 9 \text{ Watt} = \mathbf{239 \text{ Watt}}$.

I vores beregner øverst sker denne interpolering helt automatisk.

---

## Hvordan varmer jeg op til testen?

Du behøver ikke køre en separat opvarmning, da de to første trin på 5 minutter ved relativt lav belastning (hhv. Trin 1 og Trin 2) fungerer perfekt som fysiologisk opvarmning. Brug dem til at finde ro-rytmen, holde øje med skærmen og mærke efter i musklerne.

---

## Hvornår er testen godkendt?

1. **Du skal være fuldstændig udmattet**, når du slipper håndtaget. Hvis du benytter en pulsmåler, bør din puls være inden for få slag af din maksimale puls. Tager du laktatprøver, vil værdierne også være maksimale.
2. For at sikre, at testen har forløbet primært aerobt, skal du **som minimum nå til Trin 6 eller Trin 7**. Bliver du udmattet på Trin 4, startede du for hårdt, og testen viser ikke et retvisende billede af din udholdenhed.

---

## Den fysiologiske formel bag beregningen

Kurt Jensen og Team Danmark har efter talrige valideringstests i laboratoriet på danske roere fundet følgende stærke lineære sammenhæng mellem resultatet fra rotrappetesten og roerens maksimale iltoptagelse (VO₂max i liter pr. minut):

$$ \text{VO}_2\text{max (mL/min)} = 13,7 \times \text{Maksimal Watt} + 287 $$

Dette absolutte tal (i milliliter) deles herefter med din kropsvægt i kilo for at finde dit endelige **relative kondital** (mL/kg/min).

---


## Hvorfor skal kadencen (SPM) overholdes?

Den primære årsag er **standardisering og formlens validitet**. Kurt Jensens formel for VO₂max er udledt empirisk på baggrund af præcis denne protokol, hvor kadencen stiger synkront med belastningen (fra 20 til 32 SPM).

* **Præcis iltudnyttelse:** Hvis du ændrer kadencen markant, ændres den mekaniske virkningsgrad (forholdet mellem dit faktiske iltforbrug og den ydede effekt i Watt). Dermed passer formlens fysiologiske præmisser ikke længere.
* **Kredsløb frem for muskelstyrke:** Sænker du kadencen for at ro på ren råstyrke, øges kraftudviklingen i det enkelte rotag. Det flytter testen fra at være en måling af dit centrale kredsløb (hjerte og lunger) over mod lokal muskulær udholdenhed.

---

## Sådan bruger du trappetesten til at finde dine træningszoner

Trappetesten måler din maksimale aerobe effekt (Peak Power Output). Da testen afvikles i 5-minutters trin, opnår dit kredsløb en stabil tilstand (*steady state*) på hvert niveau, hvilket gør testen ideel til at kortlægge dine træningszoner:

1. **Watt og Puls (med pulsmåler):** Bærer du pulsmåler under testen, kan du direkte aflæse, hvilken puls du holder ved de enkelte Watt-niveauer. Det giver et præcist billede af din reelle belastning på fx Trin 3 og Trin 4.
2. **Matematiske zoner (baseret på Peak Watt):** Har du ikke målt mælkesyre eller puls, kan du bruge dit slut-resultat (Max Watt) fra testen som udgangspunkt for dine træningszoner:

* **Zone 1 (Aktiv Restitution):** < 45 % af Max Watt
* **Zone 2 (Udholdenhed / Langtur):** 45 – 60 % af Max Watt
* **Zone 3 (Tempo / Sub-tærskel):** 60 – 75 % af Max Watt
* **Zone 4 (Anaerob Tærskel / AT):** 75 – 90 % af Max Watt
* **Zone 5 (VO₂max / Intervaller):** 90 – 100+ % af Max Watt

---

## Hvordan forbedrer jeg mit kondital?

Hvis testen afslører, at der er plads til forbedring, skal der mere aerobt og anaerobt arbejde ind i ugens program. Roning kræver både stor central kredsløbskapacitet og stærk lokal udholdenhed i ryg, ben og arme.

Dansk Forening for Rosport har glimrende materiale om intervaltræning og intensitetszoner, som du kan hente meget viden i. 

Du kan også lade dig inspirere af vores [intervaller til romaskinen](/artikel/traeningsprogrammer-intervaller-roning/).

---

## Har du travlt? Prøv 2000-meter testen i stedet

Trappetesten er den fysiologisk mest præcise rotest, og den er dejlig nem at pace, fordi du bare skal følge skemaets faste Watt- og SPM-krav slavisk. Ulempen er, at testen typisk tager 30-40 minutter.

Hvis du foretrækker en kortere, mere brutal test (6-10 minutter) og gerne vil måle din samlede præstationsevne og "kampskarphed", kan du i stedet køre en **2000-meter all-out test**. Denne test måler dog i højere grad din mælkesyretolerance og kræver, at du selv er i stand til at disponere (pace) dine kræfter perfekt fra start til slut.

[Læs alt om 2000-meter testen og beregn kondital her](/kondital-roning/){: .btn .btn--large .btn--info }

---

## FAQ om trappetesten i roning

{% include motionsplan/faq.html %}

<details markdown="1" class="references">
  <summary><h2 id="references">Referencer</h2></summary>

* Jensen, K. (2016). *Aldersrelateret Træning i Roning (ATRO)*. Dansk Forening for Rosport & Team Danmark.
* Klusiewicz, A., Borkowski, L., Zdanowicz, R., & Sitkowski, D. (2016). The validity of submaximal rowing ergometer tests for predicting maximal oxygen uptake. *Journal of Human Kinetics*, 54(1), 161-170.
* Concept2 (2023). *Watts Calculator & Formulas*. Concept2.com.

</details>