---
layout: single
title: 'Lineær sprinttest (5m, 10m, 20m, 30m): Mål acceleration og tophastighed'
seo_title: 'Lineær Sprinttest (5-30m) | Mål acceleration og tophastighed'
excerpt: "Lær hvordan du opsætter og udfører en præcis lineær sprinttest på 5, 10, 20 og 30 meter med fotoceller eller stopur. Mål acceleration, splittider og tophastighed."
permalink: /sprinttest-med-sprintceller/
language: da
header:
  teaser: /assets/images/unsplash/photo-1461896836934-ffe607ba8211.jpg
  credit: https://images.unsplash.com/photo-1461896836934-ffe607ba8211
  caption: 'Lineær sprinttest med fotoceller eller stopur'
  overlay_image: /assets/images/unsplash/photo-1461896836934-ffe607ba8211.jpg
  overlay_filter: "0.3"
categories:
  - Tests
  - Eksplosivitet
tags:
  - test
  - sprinttest
  - eksplosivitet
  - 5m sprinttest
  - 10m sprinttest
  - 20m sprinttest
  - 30m sprinttest
last_modified_at: '2026-08-08T10:00:00Z'
toc: true
meta:
  name: Lineær sprinttest (5-30 meter)
  measures: eksplosiv start, acceleration og tophastighed
  type: sprinttest
  equipment: Fotoceller / sprintceller (eller stopur/video), målebånd, kegler
  max: maksimal test
  direct: direkte test
tests:
  - id: "test-lineaer-sprinttest"
    title: "Lineær Sprinttest (5m, 10m, 20m, 30m)"
    description: "Standardiseret fysisk sprinttest med fotoceller eller stopur til præcis måling af eksplosiv startkraft (0–5m), acceleration (0–10m) og tophastighed (20–30m)."
    category: ["Tests", "Eksplosivitet", "Løb"]
    type: ["Protokol", "Sprinttest"]
    execution: ["Fysisk"]                  # 🏃‍♂️ FYSISK TEST: Kræver maksimal sprintindsats
    method: "direkte"                     # 📊 Måles direkte via tidsregistrering i sekunder
    modality: ["Sprint", "Eksplosivitet"]
    measures: ["Splittider", "Acceleration", "Tophastighed", "Startkraft", "Gennemsnitshastighed (km/t)", "Gennemsnitshastighed (m/s)"]
    equipment: ["Fotoceller / Sprintceller", "Stopur", "Målebånd", "Kegler"]
    setting: ["Udendørs", "Indendørs", "Idrætsanlæg", "Testcenter", "Individuel"]
    target_group: ["Atleter", "Fodboldspillere", "Håndboldspillere", "Motionister", "Mænd", "Kvinder"]
    related_tools:
      - "tool-sprint-calc-beregner"

# INTERAKTIVE SOFTWARE-VÆRKTØJER
tools:
  - id: "tool-sprint-calc-beregner"
    title: "Sprinttest Hastighed & Splittid Beregner"
    description: "Interaktiv beregner til udregning af gennemsnitshastigheder (km/t og m/s) samt splittider på 5m, 10m, 20m og 30m ud fra dine testtider."
    category: ["Tests", "Eksplosivitet"]
    type: ["Beregner"]
    measures: ["Splittider", "Gennemsnitshastighed (km/t)", "Gennemsnitshastighed (m/s)", "Acceleration", "Tophastighed"]  # 🎯 Output-parametre fra modulet
    anchor: "#timer"
    category_schema: "HealthAndFitnessApplication"
faq:
  - question: "Hvad er forskellen på en 10m test og en 30m test?"
    answer: "En 10-meter test måler udelukkende atletens acceleration og eksplosive startkraft (reaktionsstyrke i underkroppen). En 30-meter test giver dig både accelerationen (de første 10m) og atletens tophastighed (de sidste 10-20m)."
  - question: "Kan man bruge et almindeligt stopur til en sprinttest?"
    answer: "Ja, det kan man godt til uformelle tests eller skoleidræt. Man skal blot huske, at manuelle tider typisk har en usikkerhed på 0,15–0,20 sekunder pga. tidtagerens reaktionstid."
  - question: "Hvorfor er opvarmning så vigtig før en sprinttest?"
    answer: "Maksimal sprint belaster baglår (hamstrings) og lyske ekstremt hårdt. Uden en grundig dynamisk opvarmning med gradvis stigning i løbeintensitet er der stor risiko for fibersprængninger."
---

Ved at måle splittider på 5, 10, 20 og 30 meter fanger du alle de vigtige faser i et sprint:

* **0–5 meter:** Eksplosiv reaktion og startkraft (*first-step quickness*).
* **0–10 meter:** Ren acceleration fra stående position.
* **10–20 meter:** Overgangsfase til tophastighed.
* **20–30 meter:** Maksimal løbehastighed (*max velocity*).

<div class="notice--info" markdown="1">
**⏱️ Om den lineære sprinttest (5m, 10m, 20m, 30m)**
En **lineær sprinttest** over korte distancer er "guldstandarden" inden for måling af eksplosivitet, acceleration og tophastighed i mange idrætsgrene (fx fodbold, håndbold og atletik). Ved at opstille **fotoceller** (sprintceller) undervejs på distancen, kan du få et kirurgisk præcist billede af atletens udvikling igennem løbet.

👉 **Leder du efter andre sprint- eller udholdenhedstests?** Se vores komplette oversigt over **[sprinttests og hurtighed](/tests/sprint/)**.  
👉 **Vil du beregne generel løbehastighed eller tempo (km/t, min/km)?** Prøv vores **[generelle hastighedsberegner for løbere](/hastighed/)**.
👉 **Vil du test retningsskift og agility?** Prøv vores **[tests til retningsskift](/retningsskift-test/)**.
</div>

[<i class='fas fa-clock'></i> Hop direkte til timer](#timer){: .btn .btn--success .btn--jump }

---

## Hvordan tager man tid? Fotoceller vs. manuel tidtagning

Valget af tidtagningsudstyr har stor betydning for præcisionen af dine data.

### 1. Fotoceller / Timing Gates (Guldstandarden)
Med fotoceller (også kaldet sprintceller) eliminerer du den menneskelige reaktionstid fra stopuret, som ofte kan svinge med op til **0,20 sekunder**. Det er afgørende, når forskellen på en god og en fantastisk tid måles i hundrededele. Tiden starter automatisk, idet atleten bryder den første lysstråle ved startlinjen.

### 2. Manuel tidtagning (Stopur eller High-Speed Video)
Har du ikke fotoceller til rådighed, kan testen stilles op manuelt:
* **Stopur:** Vær opmærksom på usikkerheden på 0,15–0,20 sekunder fra tidtagerens reaktionstid. Brug altid den samme tidtager for at gøre målingerne så konsistente som muligt. Du kan bruge vores [timer](#timer) nedenunder.
* **Video/App (fx MySprint):** Optag løbet med high-speed video (120 eller 240 FPS) vinkelret på portene. Du kan derefter udregne de præcise splittider ud fra billedrammerne i videoen.

---

## Opsætning og standardiseret protokol

For at få det mest detaljerede billede af atletens løb, opsættes fotocellerne typisk, så de måler tid efter **5, 10, 20 og 30 meter**.

<pre>
Start (0m)       5m             10m            20m            30m
  |              |              |              |              |
  [Port 1]       [Port 2]       [Port 3]       [Port 4]       [Port 5]
</pre>

### Sådan standardiserer du testen:
1. **Startposition:** Atleten starter fra en stationær, stående position med den ene fod foran den anden. Den forreste fods tåspids placeres umiddelbart bag startlinjen (0 meter).
2. **Ingen tyvstart:** For at standardisere testen bør atleten holde startpositionen helt stille i cirka 2 sekunder, før starten går. Der må ikke laves forbevægelser (*rocking*).
3. **Udførelse:** Atleten starter testen på eget initiativ, når vedkommende er klar (første fotocelle står ved startstregen).
4. **Fokus:** Vejled atleten i at holde tyngdepunktet lavt i accelerationsfasen (de første 10 meter) og trække kraftigt med både arme og ben.
5. **Nedbremsning:** Sørg for, at der er mindst 10-15 meters fri plads *efter* 30-meter mærket, så atleten kan sprinte hele vejen gennem den sidste fotocelle uden at bremse for tidligt.

---

## Beregn hastighed og splittider ud fra dine tider
{: id="timer" }

Når du har gennemført testen og fået dine tider fra fotocellerne eller stopuret, kan du indtaste dem herunder. Beregneren udregner gennemsnitshastigheden (i km/t og m/s) på de forskellige deldistancer, så du kan se, hvor atleten peaker i sin acceleration og tophastighed:

{% include components/sprint-calc-widget.html %}

---

## Hvad er gode splittider og sprinttider?

Det er altid interessant at sammenligne sine egne tider med elitens præstationer på de forskellige distancer.

### Usain Bolts verdensrekord (10-meter splits)
Siden Speedendurance lavede en analyse af Usain Bolts legendariske 9,69 verdensrekordløb, kan vi se præcis, hvor lang tid han brugte på at passere de klassiske testdistancer. 

Tabellen viser hans tid (i sekunder) for *hver* 10-meter sektion:

| Reaktionstid | 0-10m | 10-20m | 20-30m | 30-40m | 40-50m | 50-60m | 60-70m | 70-80m | 80-90m | 90-100m | Sluttid |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 0,165 s | **1,85** | **1,02** | **0,91** | 0,87 | 0,85 | 0,82 | 0,82 | 0,82 | 0,83 | 0,90 | **9,69** |

*Bemærk: I atletik regnes reaktionstiden fra startskuddet med. Ved en klassisk sprinttest med fotoceller starter tiden først, når atleten bryder den første stråle (ingen reaktionstid).*

### Sammenligning af acceleration (De første 5, 10 og 20 meter)
* **5 meter:** En stærk atlet eller eliteboldspiller dækker typisk de første 5 meter på omkring **1,00 - 1,05 sekunder**.
* **10 meter:** Usain Bolt brugte 1,85 sekunder på de første 10 meter (inkl. reaktionstid). Til sammenligning løb fodboldspilleren DeJuan Jones ved MLS Combine i 2019 de første 10 meter på svimlende **1,61 sekunder** uden reaktionstid. Det understreger, at boldspillere ofte er ekstremt specialiserede i den ultrakorte, hidsige acceleration.
* **20 meter:** Bolt nåede 20-meter mærket på 2,87 sekunder. Joel Wilkinson løb i 2010 til AFL Combine en ren 20-meter sprint på **2,75 sekunder**.

### De magiske 30 meter
Bolt passerede de første 30 meter på 3,78 sekunder (inklusiv reaktionstid).

Løber man en decideret og isoleret 30-meter test uden at skulle spare energi til de resterende 70 meter, kan det gøres hurtigere. Sprinteren Michael Bates fra USA har angiveligt løbet en 30-meter test på vanvittige **3,09 sekunder**.

I denne video kan du nørde videre og se nogle af de hurtigste sprintere i verden blive analyseret:

{% include video provider="youtube" id="nutDiLADWuY" %}

---

## Ofte stillede spørgsmål

{% include motionsplan/faq.html %}

---

## Referencer

* Speedendurance (2008). *Usain Bolt 100m 10-meter splits and speed endurance*. [speedendurance.com](https://speedendurance.com/2008/08/22/usain-bolt-100m-10-meter-splits-and-speed-endurance/)
* Topend Sports. *Sprint Test Results & Norms*. [topendsports.com](https://www.topendsports.com/testing/results/sprint-tests.htm)
* Science for Sport. *10m Sprint Test*, *20m Sprint Test* & *5m Sprint Test*. [scienceforsport.com](https://www.scienceforsport.com/)