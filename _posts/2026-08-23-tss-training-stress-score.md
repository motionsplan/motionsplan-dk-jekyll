---
title: 'TSS (Training Stress Score): Koden til din træningsbelastning'
seo_title: 'TSS (Training Stress Score): Beregn belastning på cykel & løb'
description: 'Hvad er TSS, rTSS og hrTSS? Lær hvordan du måler din samlede træningsbelastning med watt, tempo og puls, og undgå overtræning.'
permalink: /tss-training-stress-score/
language: da
header:
  overlay_image: https://images.unsplash.com/photo-1452573992436-6d508f200b30?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
  teaser: https://images.unsplash.com/photo-1452573992436-6d508f200b30?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
  caption: Træningsbelastning med TSS
categories:
- Træning
- Fysiologi
tags:
- tss
- rtss
- hrtss
- ftp
- træningsbelastning
last_modified_at: '2026-08-23T10:00:00Z'
toc: true

faq:
- question: Hvad er et normalt ugentligt TSS?
  answer: 'For en almindelig motionsatlet ligger en bæredygtig ugentlig belastning typisk mellem 300 og 500 TSS. Eliteatleter og Tour de France-ryttere kan nå 800–1200+ TSS om ugen i spidsbelastningsperioder.'
- question: Hvad er forskellen på TSS, rTSS og hrTSS?
  answer: 'TSS (Training Stress Score) måles med wattmåler på cykel. rTSS (Running TSS) måles med tempo/hastighed i forhold til tærskeltempo ved løb. hrTSS (Heart Rate TSS) estimeres ud fra tid i pulszoner i forhold til din laktattærskelpuls.'
- question: Kan man sammenligne 100 TSS fra løb med 100 TSS fra cykling?
  answer: 'Ja, teoretisk set repræsenterer 100 TSS den samme fysiologiske træningsstress. Dog giver løb højere mekanisk vævsbelastning på sener og ledbånd pga. stødene mod underlaget, hvilket kan kræve længere restitutionstid.'
---

En kilometer er ikke bare en kilometer. **10 km roligt restitutionsløb** belaster din krop på en helt anden måde end **10 km hård enkeltstart ved syretærsklen**.

For at sammenligne træningspas på tværs af intensitet, tid og sportsgrene opfandt fysiologen Dr. Andrew Coggan **TSS (Training Stress Score)**. TSS er i dag den absolutte verdensstandard til at måle den samlede fysiologiske træningsbelastning i platforme som TrainingPeaks, Garmin Connect og Intervals.icu.

---

## ⚡ Multisport TSS Beregner

Brug værktøjet herunder til at udregne din præcise **TSS (Cykling)**, **rTSS (Løb)** eller **hrTSS (Puls)** og få øjeblikkeligt svar på, hvor lang restitution dit træningspas kræver:

{% include components/tss-calculator.html %}

---

## 🧩 Den Hellige Treenighed: FTP, NP og IF

For at forstå, hvordan TSS beregnes, skal du kende de tre fysiologiske grundpiller:

### 1. FTP (Functional Threshold Power)
Din **FTP** er den maksimale gennemsnitlige effekt i watt (eller tærskeltempo i løb), som du fysiologisk kan opretholde i cirka 60 minutter ved din syretærskel ($LT2$). Alt træningsstress måles i forhold til dette referencepunkt.

### 2. NP (Normalized Power / Vægtet Effekt)
Gennemsnits-watt fortæller sjeldet hele sandheden. Hvis du triller ned ad en bakke med 0 watt og kører op ad med 400 watt, kan snittet sige 200 watt – men din krop er betydeligt mere udmattet, end hvis du havde kørt 200 watt jævnt. **Normalized Power (NP)** vægter de hårde ryk eksponentielt højt for at afspejle den reelle fysiologiske omkostning.

### 3. IF (Intensity Factor)
**Intensitetsfaktoren (IF)** udtrykker, hvor hårdt passet var i forhold til din tærskel:

$$IF = \frac{\text{NP}}{\text{FTP}}$$

* **IF < 0,75:** Rolig Zone 1–2 basetræning.
* **IF 0,85–0,95:** Hårdt Sweet Spot- eller tærskelpas.
* **IF 1,00:** 1 times maksimal indsats ved din syretærskel.
* **IF > 1,05:** Korte, eksplosive interval- eller HIIT-pas.

---

## 🧮 Hvordan udregnes TSS matematisk?

Formlen for watt-baseret TSS tager højde for både varighed (i sekunder) og intensitetsfaktoren i anden potens ($IF^2$), fordi fysiologisk træthed stiger eksponentielt, når du nærmer dig eller overskrider din tærskel:

$$TSS = \frac{\text{Varighed (sekunder)} \times \text{NP} \times \text{IF}}{\text{FTP} \times 3600} \times 100$$

Udført ved præcis $1,00 \text{ IF}$ (1 times kørsel ved FTP) giver formlen nøjagtigt **100 TSS**. 

### TSS-Skalaen: Hvad betyder dit resultat?

| TSS Score | Belastningskategori | Typisk Restitutionsbehov |
| :--- | :--- | :--- |
| **< 50** | **Mindre pas** | Lav belastning. Du er klar til ny træning samme dag eller i morgen. |
| **50 – 150** | **Moderat pas** | Klar igen næste dag med god ernæring og søvn. |
| **150 – 300** | **Hårdt pas** | Mærkbar træthed i 1–2 dage. Kræver restitutionspas eller hvile. |
| **300 – 450** | **Meget hårdt** | Ekstrem udmattelse. Kræver 2–3 dages genopbygning. |
| **> 450** | **Episk belastning** | Flere dages udmattelse (f.eks. Ironman eller etape-løb). |

---

## 🏃‍♂️ rTSS og hrTSS: Når du mangler wattmåleren

Cykling måles i watt, men hvordan opgør du træningsbelastning i andre idrætter?

### rTSS (Running TSS)
Løber du i fladt terræn, benyttes dit tærskeltempo (*Functional Threshold Pace*) i stedet for watt. I kuperet terræn anvendes **NGP (Normalized Graded Pace)**, som kompenserer for højdemeter. 

👉 *Tip:* Husk at løb medfører mekanisk stød-belastning på led og sener. 100 rTSS føles ofte hårdere for kroppen dagen derpå end 100 TSS på cykel.

### hrTSS (Heart Rate TSS)
Har du hverken wattmåler eller GPS-tempo (f.eks. under langrend, svømning eller indendørs kropstræning), beregner uret din **hrTSS** ud fra din puls over tid i forhold til din laktattærskelpuls ($LTHR$).

👉 **[Vil du finde din fysiologiske tærskelpuls? Brug vores interaktive pulszone-beregner her →](/pulszoner-beregner/)**

---

## 📊 Fra enkelte pas til langsigtede formtoppe

En enkelt TSS-score fortæller dig kun om dagens pas. Men samler du dine daglige TSS-scorer over uger og måneder, kan du styre din langsigtede form ved hjælp af **PMC-modellen (Performance Management Chart)**:

* **CTL (Chronic Training Load):** Et 42-dages glidende snit af dit ugentlige TSS udtrykker din samlede **Fitness**.
* **ATL (Acute Training Load):** Et 7-dages glidende snit udtrykker din akutte **Træthed**.
* **TSB (Training Stress Balance):** Forskellen ($CTL - ATL$) udtrykker din aktuelle **Form og Friskhed**.

👉 **[Læs vores store hovedguide til træningsbelastning, CTL, ATL og TSB her →](/traeningsbelastning/)**  
👉 **[Tjek din aktuelle skadesrisiko med vores ACWR-beregner →](/acwr-beregner/)**

---

## Ofte stillede spørgsmål om TSS

{% include motionsplan/faq.html %}

<details markdown="1" class="references">
  <summary><h2 id="references">Referencer</h2></summary>

- Coggan, A. (2006). "Training Stress Score (TSS) Explanation." *TrainingPeaks Technical Articles*.
- Allen, H., & Coggan, A. (2010). *Training and Racing with a Power Meter*. Velopress.
- Vance, J. (2016). *Run with Power: The Complete Guide to Power Meters for Runners*. Velopress.
</details>