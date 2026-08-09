---
title: 'Paceberegner & Hastighedsberegner'
seo_title: 'Paceberegner: Omregn nemt pace til km/t & beregn din tid'
description: 'Gratis hastigheds- og paceberegner til løb. Indtast din tid og distance, eller omregn lynhurtigt mellem pace (min/km) og km/t. Få svaret her!'
permalink: /hastighed/
redirect_from:
  - /hastighed/beregn-fart/
  - /hastighed/beregn-distance/
  - /hastighed/beregn-tid/
  - /hastighed/omregner-tempo-fart/
  - /hastighed/beregn-hastighed/
excerpt: Brug vores samlede hastighedsberegner til at udregne gennemsnitshastighed (km/t), pace (min/km), tid og distance på ét samlet sted.
language: da
header:
  teaser: /assets/images/unsplash/photo-1585218059208-5cfd7659560b.jpg
  credit: https://images.unsplash.com/photo-1585218059208-5cfd7659560b
  caption: 'Hastighedsberegner & Paceberegner'
category:
- Beregnere
tags:
- beregner
- løb
- cykling
meta:
#  name: Beregn hastighed i km/t, m/s og min/km
  name: "Paceberegner & Hastighedsberegner"
  measures: "hastighed, pace, tid, distance"
  type: "beregner"
  equipment: "ingen"
  intensity: "ingen"
  method: "formel"
tools:
  - id: "tool-pace-beregner"
    title: "Paceberegner (min/km)"
    description: "Beregn dit løbetempo (pace i min/km) ud fra tid og distance, eller omregn dit tempo direkte til en sluttid på 5 km, 10 km eller maraton."
    category: ["Løb"]
    type: ["Beregner"]
    measures: ["Pace", "Tid", "Distance", "Sluttid"]  # 🎯 Nøjagtige output-værdier fra pace-modulet
    anchor: "#calculator"
    category_schema: "HealthAndFitnessApplication"

  - id: "tool-hastigheds-beregner"
    title: "Hastighedsberegner (km/t)"
    description: "Udregn din gennemsnitshastighed i km/t eller m/s ud fra distance og tid. Perfekt til både løbebånd, cykling og løbetræning."
    category: ["Løb"]
    type: ["Beregner"]
    measures: ["Hastighed", "km/t", "m/s"]           # 🎯 Nøjagtige output-værdier fra hastigheds-modulet
    anchor: "#calculator"
    category_schema: "HealthAndFitnessApplication"
last_modified_at: '2026-07-24T00:00:00Z'
toc: 'true'
feature_row:
- image_path: /assets/images/freebies/hastighed-og-pace.png
  title: Skema med hastighed og pace
  excerpt: Tabel med hastighed og pace lige til at skrive ud. Her kan du hurtigt se, hvad en hastighed i km/t eller m/s svarer til i dit pace i min/km.
  url: /hastighed/pace-tabeller/
  btn_label: <i class='fas fa-file-alt'></i> Få en hastighedstabel
  btn_class: btn--success
  rel: nofollow noopener
faq:
- question: Hvad bruger løbere og cyklister mest - min/km eller km/t?
  answer: Det er meget forskelligt, hvad løbere og cyklister foretrækker at bruge. Når jeg bruger mit GPS-ur, så står der som standard under løbeprofilerne et tempo og en løbehastighed, der er angivet i min/km. Hvis jeg skifter til cykling, så er tempoet og cykelhastigheden angivet i km/t. Det lader altså til, at de fleste løbere bruger min/km, men cyklister mest bruger km/t.
- question: Hvordan beregner man km/t?
  answer: Når du kender den tilbagelagte distance og tiden det tog, kan du beregne km/t ved at dividere distancen i km med tiden i timer. Du kan også bruge vores super-beregner øverst på siden.
- question: Hvordan finder man gennemsnitsfarten?
  answer: Hvis du gerne vil finde gennemsnitsfarten, skal du bruge formlen for gennemsnitshastighed (distance / tid). Vores beregner udregner automatisk både km/t, m/s og min/km for dig.
- question: Hvordan regner man distance ud fra hastighed og tid?
  answer: Du ganger hastigheden (i km/t) med tiden (i minutter) og dividerer med 60.
- question: Hvordan beregner jeg, hvor lang tid det tager at løbe en bestemt distance?
  answer: Du skal kende din hastighed og gange den omvendt med distancen. Tid (minutter) = (Distance * 60) / Hastighed.
- question: Hvordan omregner man km/t til min/km (pace)?
  answer: "Du kan omregne hastighed (km/t) til tempo (min/km) med formlen: pace = 60 / hastighed. Fx svarer 12 km/t til et tempo på 5:00 min/km."
---

Hvordan hænger **hastighed, tempo og tid** sammen i træning og løb? Med denne super-beregner kan du udregne og omregne alle variabler på ét samlet sted:

[<i class='fas fa-calculator'></i> Gå direkte til beregneren](#calculator){: .btn .btn--success .btn--jump }

**Brug vores hastighedsberegner til:**

- Udregn **gennemsnitshastighed** i km/t eller m/s  
- Find dit **tempo (pace)** i min/km  
- Beregn **distance** eller **tid** ud fra tempo og fart  
- Omregn direkte mellem **km/t, min/km og m/s**

---

## Beregn dit pace og din hastighed
{: id="calculator" }

{% include calc/speed-pace.html %}

---

## Hvorfor bruge en paceberegner?

Når jeg laver træningsprogrammer til løb eller cykling, bruger jeg næsten altid hastighed og tempo som udgangspunkt. Med en god beregner eller en **tempo-tabel** kan du nemt finde ud af:

- Hvor hurtigt du løber eller cykler
- Hvor lang tid det tager at tilbagelægge en bestemt distance
- Hvordan du omregner **km/t til min/km** – og den anden vej rundt

---

## Hvordan angiver man løbehastighed?

Løbehastighed kan typisk angives på tre måder:

- **Kilometer i timen (km/t):** Det samme som du kender fra bilens speedometer og løbebåndet.
- **Pace i minutter per kilometer (min/km):** Det mest almindelige blandt løbere. Angiver hvor mange minutter du bruger på at løbe én kilometer.
- **Meter per sekund (m/s):** Bruges især i atletik, sprint og fysiologiske test.

---

## Formler og eksempler: Sådan regner du det manuelt

Vil du selv have lommeregneren frem, eller vil du forstå matematikken bag super-beregneren? Her er formlerne og konkrete eksempler på hver beregning:

### 1. Beregn Hastighed (km/t) ud fra Distance og Tid
For at finde din gennemsnitshastighed i km/t dividerer du distancen (i km) med tiden (i timer):

$$\text{Hastighed (km/t)} = \frac{\text{Distance (km)} \times 60}{\text{Tid (min)}}$$

> **Eksempel:** Du løber **10 km** på **50 minutter**:
> $$\text{Hastighed} = \frac{10 \times 60}{50} = \mathbf{12 \text{ km/t}}$$

---

### 2. Beregn Distance ud fra Hastighed og Tid
Vil du vide, hvor langt du når på en bestemt tid med en givet hastighed, bruger du denne formel:

$$\text{Distance (km)} = \frac{\text{Hastighed (km/t)} \times \text{Tid (min)}}{60}$$

> **Eksempel:** Du løber i **15 minutter** med en hastighed på **15 km/t**:
> $$\text{Distance} = \frac{15 \times 15}{15} = \mathbf{3,75 \text{ km}}$$

---

### 3. Beregn Tid ud fra Distance og Hastighed
Hvis du kender din planlagte distance og din hastighed, kan du udregne varigheden:

$$\text{Tid (min)} = \frac{\text{Distance (km)} \times 60}{\text{Hastighed (km/t)}}$$

> **Eksempel:** Du skal løbe **10 km** med en hastighed på **12 km/t**:
> $$\text{Tid} = \frac{10 \times 60}{12} = \mathbf{50 \text{ minutter}}$$

---

### 4. Omregn pace til km/t (og km/t til min/km)
- **Fra km/t til pace (min/km):** Divider 60 med din hastighed i km/t.
  $$\text{Pace (min/km)} = \frac{60}{\text{Hastighed (km/t)}}$$
  *Eksempel:* $12 \text{ km/t} \rightarrow \frac{60}{12} = \mathbf{5:00 \text{ min/km}}$.

- **Fra pace (min/km) til km/t:** Divider 60 med dit tempo i minutter (inkl. sekunder omregnet til decimaler).
  $$\text{Hastighed (km/t)} = \frac{60}{\text{Minutter} + \frac{\text{Sekunder}}{60}}$$
  *Eksempel:* Et tempo på $6:00 \text{ min/km} \rightarrow \frac{60}{6} = \mathbf{10 \text{ km/t}}$.

---

### Sådan omregner du selv mellem tempo og hastighed

#### Eksempel A: Fra Tempo (min/km) til Hastighed (km/t)
Hvis du løber i et tempo på **5:30 min/km** (5 minutter og 30 sekunder per km):

1. **Omregn sekunderne til decimaler:**  
   $$30 \text{ sekunder} / 60 = 0{,}5 \text{ minutter}$$  
   Dit tempo er altså **5,5 minutter/km**.
2. **Brug formlen:**  
   $$\text{Hastighed} = \frac{60}{5{,}5} = \mathbf{10{,}91 \text{ km/t}}$$

#### Eksempel B: Fra Hastighed (km/t) til Tempo (min/km)
Hvis du løber med en hastighed på **14 km/t** på løbebåndet:

1. **Brug formlen:**  
   $$\text{Pace} = \frac{60}{14} = 4{,}2857 \text{ min/km}$$
2. **Omregn decimalerne til sekunder:**  
   Gang decimalerne med 60 for at få sekunder:  
   $$0{,}2857 \times 60 \approx \mathbf{17 \text{ sekunder}}$$  
   Dit tempo er altså **4:17 min/km**.

---

### Sådan angiver du tiden korrekt (Minutter vs. Timer)
Når du regner med hastighed og distance, skal du være opmærksom på, hvordan du angiver tiden:

* **Tid i minutter:** Løber du i 1 time og 15 minutter, skal du omregne det hele til minutter ($60 + 15 = \mathbf{75 \text{ minutter}}$).
* **Tid i decimaltimer:** 90 minutter svarer til $\frac{90}{60} = \mathbf{1{,}5 \text{ time}}$. Husk at 30 minutter er $0{,}5$ time og ikke $0{,}30$ time!

---

## Hvorfor skal du kende din hastighed?

Det gør virkelig en forskel i din træning, om du rammer den rigtige intensitet. Hastigheden kan være en god måde at måle intensiteten på, hvis du løber på et nogenlunde fladt underlag eller på en løbebane.

Når du løber de planlagte langsommere ture med lav intensitet, giver det god mening at kende dit tempo, så din løbehastighed ikke bliver for høj.

Det giver også god mening at vide, hvilken hastighed du skal løbe under dine [intervaller og intervalløb](/intervallob-intervaltraening/). Du kan også beregne, [hvor langt du skal løbe på et interval](/hvor-langt-per-interval/).

---

## Tabel med km/t, m/s og min/km

Vil du hurtigt se, hvad en bestemt hastighed betyder i praksis? Vi har lavet en overskuelig tabel, der viser, hvordan km/t, m/s og pace i min/km relaterer sig til de tider, du kan forvente på 5 km, 10 km, halvmaraton og maraton.

👉 **[Gå til siden med detaljerede pace-tabeller](/hastighed/pace-tabeller/)** og få det fulde overblik.

Hvis du i stedet vil beregne dine realistiske løbetider på baggrund af en tidligere præstation, kan du bruge vores [Jack Daniels løbeberegner](/loebesiden-jack-daniels-loebeberegner/).

{% include feature_row type="left" %}

---

### Hvad med min/mile og engelske enheder?
Hvis du løber i USA eller bruger et GPS-ur indstillet til miles, svarer 1 mile til ca. **1,609 km**. 

* **Fra min/km til min/mile:** Gang dit min/km-tempo med $1{,}609$.  
  *Eksempel:* $5:00 \text{ min/km} \times 1{,}609 = \mathbf{8:02 \text{ min/mile}}$.
* **Fra mph (miles per hour) til km/t:** Gang din hastighed i mph med $1{,}609$.

---

## Næste skridt i din træning

- 📊 **[Slå op i vore pacetabeller](/hastighed/pace-tabeller/):** Find dine forventede sluttider på 5 km, 10 km og maraton.
- ⏱️ **[Beregn dine konkurrencetider](/loebesiden-jack-daniels-loebeberegner/):** Forudsig din sluttid ud fra VDOT og tidligere løberesultater.
- 🚶‍♂️ **[Gangtempo-beregner](/tid-at-gaa/):** Beregn hvor lang tid det tager at gå en bestemt distance.

---

## Ofte stillede spørgsmål

{% include motionsplan/faq.html %}