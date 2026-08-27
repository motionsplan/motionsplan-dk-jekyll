---
title: 'Powerprofil i roning: Beregn din powerkurve på romaskine'
excerpt: De bedste roere har noget til fælles. De har nogenlunde den samme powerprofil. Her dykker vi ned i, hvordan en powerkurve
  kan se ud i roning og hvordan du tester den på romaskine.
permalink: /roning-powerprofil/
language: da
header:
  teaser: /assets/images/unsplash/photo-1467818488384-3a21f2b79959.jpg
  credit: https://images.unsplash.com/photo-1467818488384-3a21f2b79959
  caption: 'Powerprofil i roning: Beregn din powerkurve på romaskine'
categories:
- Træning
- Roning
tags:
- test
- roning
- rotest
- kondition
meta:
  name: Powerprofil i roning
  equipment: roergometer
  measures: powerprofil
  type: rotest
# TESTS / PROTOKOLLER
tests:
  - id: "test-powerprofil-roning"
    title: "Powerprofil & Ugetest i Roning (Kurt Jensen)"
    description: "Testprotokol bestående af 4 testdage (6 km, 2 km, 3x100m / 1 min og 60 min) til vurdering af roerens samlede aerobe og anaerobe ydeevne i forhold til den teoretiske powerkurve."
    category: ["Tests", "Roning", "Kondition"]
    type: ["Protokol", "Konditionstest"]
    execution: ["Fysisk"]                  # 🚣‍♂️ FYSISK TEST: Kræver maksimale roindsatser over forskellige tidsintervaller og distancer
    method: "direkte"                     # 📊 Måles direkte i Watt og tid på roergometer
    modality: ["Roning"]
    measures: ["Powerprofil", "2k Watt", "Anaerob power (10s/60s)", "Aerob udholdenhed (6k/60m)", "Watt/kg"]
    equipment: ["Roergometer (fx Concept2)"]
    setting: ["Indendørs", "Ro-klub", "Testcenter", "Individuel"]
    target_group: ["Roere", "Atleter", "Motionister", "Mænd", "Kvinder"]
    related_tools:
      - "tool-roning-powerprofil-beregner"

# INTERAKTIVE SOFTWARE-VÆRKTØJER
tools:
  - id: "tool-roning-powerprofil-beregner"
    title: "Powerprofil Roning Dashboard"
    description: "Interaktivt dashboard til udregning af din optimale powerkurve og forventede målwatt på 10s, 60s, 6k og 60 minutter baseret på dit 2k-testresultat. Inkluderer logbogsfunktion til fuld ugetest."
    category: ["Roning", "Kondition", "Tests"]
    type: ["Beregner"]
    measures: ["Powerprofil", "Målwatt (10s)", "Målwatt (60s)", "Målwatt (6k)", "Målwatt (60m)"]  # 🎯 Output-parametre fra modulet
    anchor: "#beregn-din-powerprofil"
    category_schema: "HealthAndFitnessApplication"

# STRUCTURED FAQ (SCHEMA.ORG / JEKYLL SUPPORT)
faq:
  - question: "Hvad betyder det, hvis mine resultater på 6k og 60 minutter ligger under powerprofilens mål?"
    answer: "Hvis du ikke kan ramme 85% på din 6k eller 76% på 60 minutter, betyder det, at din aerobe udholdenhed er din begrænsende faktor. Du mangler evnen til at bortskaffe mælkesyre over længere tid, og du bør fokusere mere på lang, rolig steady-state træning (zone 1-2)."
  - question: "Hvad betyder det, hvis mine sprint-resultater (10s og 60s) er lavere end profilen?"
    answer: "Hvis du rammer målene fint på de lange distancer, men falder under målwatt på dine 10- og 60 sekunders tests, mangler du eksplosivitet og anaerob kapacitet. Træningen bør suppleres med tung styrketræning (squat, dødløft) og ultrakorte, all-out powerintervaller på romaskinen."
  - question: "Skal jeg ro testene på vandet eller romaskinen?"
    answer: "Powerprofilen og Ugetesten fra Kurt Jensen er udelukkende udviklet og valideret på roergometer (typisk Concept2). Vind, vejr og vandmodstand gør det umuligt at måle en pålidelig effekt-profil i en båd."

last_modified_at: '2026-08-16T10:14:14Z'
---

De bedste roere har noget til fælles. De har nogenlunde den samme fysiologiske balance mellem eksplosivitet og udholdenhed – de har den samme powerprofil. Her dykker vi ned i, hvordan en powerkurve i roning ser ud, og hvordan du tester den på romaskine.

I dette indlæg finder du et interaktivt **Dashboard**, som kan udregne din personlige powerprofil til roning på baggrund af dit resultat i en [2 kilometer rotest](/kondital-roning/). Denne side er stærkt inspireret af de bagvedliggende data og analyser hos [Erg Rowing](https://ergrowing.com/2k-erg-power-profile-calculator/).

Powerprofilen danner samtidig udgangspunktet for den landskendte **Ugetest i roning**. Ugetesten er udformet af Kurt Jensen (tidligere leder af Team Danmark Testcenter) og er beskrevet detaljeret i [Aldersrelateret Træning i Roning (ATRO)](https://roning.dk/app/uploads/2016/12/ATRO-bogen.pdf).

Lad os dykke ned i, hvordan powerprofilen ser ud, og hvordan du kan bruge Ugetesten til systematisk at forbedre din rotræning.

{% include figure image_path="https://images.unsplash.com/photo-1467818488384-3a21f2b79959?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=600&q=60" alt="Powerprofil og ugetest i roning på Concept2" %}

## Hvad er en powerprofil i roning?

En powerprofil i roning er en teoretisk kurve, som beskriver sammenhængen mellem roerens evne til at udøve kraft (Watt) over forskellige tidsrum (fra 10 sekunder til 60 minutter). 

Kurt Jensen har igennem mange årtier testet et utal af danske eliteroere – herunder adskillige olympiske medaljevindere. Gennem testningen opdagede han en utroligt konsistent **numerisk sammenhæng** mellem roernes 2 kilometer-resultat og deres resultater på 10 sekunder, 60 sekunder, 6 kilometer og 60 minutters roning.

Denne sammenhæng er et fantastisk værktøj til træningsplanlægning. Ved at kortlægge din egen profil og sammenligne den med guldstandarden, kan du se sort på hvidt, hvilke fysiologiske systemer (det anaerobe eller det aerobe), der bremser din udvikling.

## Beregn din powerprofil og Ugetest
{: id="beregn-din-powerprofil" }

I beregneren herunder kan du indtaste dit 2k-resultat og straks se din ideelle powerkurve. Du kan også vælge at udfolde dashboardet og logge resultaterne af din fulde ugetest. Værktøjet vil da automatisk visualisere, hvor du er stærkest, og hvor du halter bagefter den ideelle profil.

{% include components/rowing-powerprofile.html %}

## Hvad betyder tallene i powerprofilen for roning?

Ud fra analysen af eliteroerne viste Kurt Jensens data følgende faste sammenhæng mellem den intensitet, roerne kunne yde på de forskellige distancer:

* **10 sekunder *all out* sprint:** Gennemsnitlig effekt lå omkring **175%** af de gennemsnitlige Watt for 2k-testen.
* **60 sekunder *all out*:** Omkring **153%** af 2k-testen.
* **2k testen:** Basislinjen (**100%**).
* **6k testen:** Omkring **85%** af 2k-testen.
* **60 minutters "Hour of Power":** Omkring **76%** af 2k-testens gennemsnitlige watt.

I en klassisk XY-graf med tid ud ad X-aksen og procent af 2K-watt op ad Y-aksen ser det således ud:

{% include figure image_path="/assets/images/ergrowing.com/power-profile-ae2e9344.png" alt="Powerprofil for roere baseret på Kurt Jensens Data. Kilde: [Kurt Jensen](https://ergrowing.com/2k-erg-power-profile-calculator/)." caption="[📷](https://ergrowing.com/wp-content/uploads/2012/01/power-profile.png){: rel='nofollow noopener' }" %}

## Sådan analyserer du din egen powerprofil

Det helt store potentiale opstår, når du bruger dashboardet til at plotte *dine egne* testtider ind.

**Er dine sprint-tider (10s og 60s) for langsomme i forhold til kurven?**
Så mangler du rå muskelstyrke, eksplosivitet og anaerob laktattolerance. Ligger dit tyngdepunkt her, bør den fremtidige træning suppleres med tung styrketræning og eksplosive, korte intervaller (fx 15 x 30 sekunders all-out roning).

**Ligger dine lange distancer (6k og 60 min) under målet?**
Dette er det klassiske problem for mange tunge, stærke roere. Du har muskelkraften (og måske en fin 2K-tid), men du "syrer til" og kan ikke fjerne affaldsstofferne hurtigt nok over tid. Løsningen her er at opbygge en langt stærkere aerob motor gennem mange timers lang, stabil zone 1 og 2 roning.

## Hvad er ugetesten i roning?

Ugetesten er en komprimeret [test-protokol til roning](/kondital-roning/), hvor du kortlægger både din anaerobe og aerobe ydeevne på blot én uge. Testen placeres typisk på følgende måde henover træningsugen:

- **1. dag:** 6 km (Test af den primære aerobe kapacitet / anaerob tærskel)
- **2. dag:** 2 km (Basislinje-test, relateret til VO2max)
- **3. dag:** 3 x 100 meter + 1 x 1 minut (Test af det alaktacide og laktacide anaerobe system)
- **4. dag:** 60 minutter (Test af den basale udholdenhed. *For U19 roere er det ofte justeret til 40 minutter*).

For at lave testen skal du blot bruge romaskinen. Maskinens indbyggede monitor måler de præcise gennemsnits-watt, som du bagefter taster ind i dashboardet her på siden.

## Hvordan forbedrer jeg mit resultat i ugetesten?

Når Ugetesten har afsløret din svaghed, skal træningen tilpasses. Vil du gerne i [bedre kondition](/kondition/) generelt, eller vil du forskyde din mælkesyretærskel? 

Det nationale ro-miljø har stærke traditioner for veltilrettelagte, periodiserede træningsprogrammer. Kurt Jensen har deltaget i udformningen af meget materiale, herunder glimrende oversigter om træningsplanlægning for maskinroere (se [redking.me.uk C2 Training](http://www.redking.me.uk/sport/rowing/training/c2_training_v2.pdf)).

Du kan også finde stor inspiration i vores egen samling af de mest klassiske og effektive [rointervaller til romaskine](/artikel/traeningsprogrammer-intervaller-roning/).

---

## FAQ om Powerprofil og Ugetesten

{% include motionsplan/faq.html %}

<details markdown="1" class="references">
  <summary><h2 id="references">Referencer</h2></summary>

* Jensen, K. (2016). *Aldersrelateret Træning i Roning (ATRO)*. Dansk Forening for Rosport & Team Danmark.
* Erg Rowing (2020). *2K Erg Power Profile Calculator*. ErgRowing.com. Hentet fra: [ergrowing.com](https://ergrowing.com/2k-erg-power-profile-calculator/)
* Jensen, K. (2000). *Fysiologiske krav og testning i roning*. Team Danmark Fysiologisk Testcenter.
* Seiler, S. (2010). *What is best practice for training intensity and duration distribution in endurance athletes?* International Journal of Sports Physiology and Performance.

</details>