---
layout: single
permalink: /conconi-test/
title: Conconi-testen – Bestemmelse af den Anaerobe Tærskel
seo_title: Conconi-test – Mål din anaerobe tærskel & HRdp uden blodprøver
excerpt: "Lær alt om Conconi-testen: Fysiologisk teori, testprocedure, bestemmelse af Heart Rate Deflection Point (HRdp) og videnskabelig validitet."
description: Dybdegående guide til Conconi-testen. Lær hvordan du måler din anaerobe tærskel (syregrænse) via pulskurven uden brug af invasive laktatmålinger.
category:
  - Løb
  - Løbetests
tags:
  - test
  - løb
  - løbetest
  - pulstræning
  - conconi
header:
  teaser: /assets/images/unsplash/photo-1506077709666-1932cac9ad51.jpg
  credit: https://images.unsplash.com/photo-1506077709666-1932cac9ad51
  caption: Conconi-testen – Ikke-invasiv bestemmelse af den anaerobe tærskel
author_profile: 'true'
author: lsolesen
last_modified_at: '2026-03-30T10:00:00Z'
breadcrumbs: 'true'
toc: 'true'
meta:
  name: Conconi-testen
  measures: anaerob tærskel (HRdp)
  type: løbetest
  equipment: 400m løbebane, pulsmåler, timer
  max: maksimal test
  direct: indirekte test
tests:
  - id: "test-conconi-test"
    title: "Conconi-testen (HRdp Løbetest)"
    description: "Kontinuerlig, trinvist stigende løbetest på 400m bane (+0,5 km/t pr. 200m til udmattelse) til ikke-invasiv bestemmelse af den anaerobe tærskel via Heart Rate Deflection Point (HRdp)."
    category: ["Tests", "Løb", "Kondition"]
    type: ["Protokol", "Konditionstest"]
    execution: ["Fysisk"]                  # 🏃‍♂️ FYSISK TEST: Kræver fysisk løbeindsats med stigende tempo til udmattelse
    method: "indirekte"                     # 📊 Indirekte estimering af anaerob tærskel ud fra afbøjning i pulskurven (HRdp)
    modality: ["Løb"]
    measures: ["Anaerob tærskel (AT)", "HRdp (Heart Rate Deflection Point)", "Tærskelpuls", "Tærskelhastighed", "Træningszoner"]
    equipment: ["400m løbebane", "Pulsmåler / Pulsbælte", "Pacer / Timer / Lydfil"]
    setting: ["Udendørs", "Løbebane", "Testcenter", "Individuel"]
    target_group: ["Løbere", "Atleter", "Motionister", "Mænd", "Kvinder"]
    related_tools:
      - "tool-conconi-test-timer"

# INTERAKTIVE SOFTWARE-VÆRKTØJER
tools:
  - id: "tool-conconi-test-timer"
    title: "Conconi Test Interaktiv Timer & Pacer"
    description: "Interaktiv timer og bip-styret pacer med 200m intervalmarkeringer og registrering af pulsværdier til gennemførelse af Conconi-testen."
    category: ["Løb", "Tests", "Kondition"]
    type: ["Timer", "Pacer"]
    measures: ["LT2 (Anaerob tærskel)"]  # 🎯 Output-parametre fra modulet
    anchor: "#timer"
    category_schema: "HealthAndFitnessApplication"
faq:
  - question: Hvad måler Conconi-testen præcist?
    answer: Testen estimerer din anaerobe tærskel (laktattærskel) ved at identificere det punkt på pulskurven, hvor sammenhængen mellem hastighed og puls ophører med at være lineær.
  - question: Kræver Conconi-testen blodprøver?
    answer: Nej, testen er udviklet som et ikke-invasivt alternativ til laktatmålinger og kræver kun en præcis pulsmåler og en kontrolleret hastighedsstigning.
  - question: Hvorfor kan det være svært at finde knækket på pulskurven?
    answer: Forskning viser, at op mod 15-20% af alle udøvere udviser en helt lineær pulskurve helt op til maxpuls, hvilket gør det umuligt at identificere et Heart Rate Deflection Point (HRdp).
  - question: Hvad kan jeg bruge resultatet til?
    answer: Den hastighed og puls, du opnår ved tærskelpunktet, kan bruges direkte til at zone-inddele din træning og bestemme dit optimale konkurrencetempo på distancer fra 10 km til halvmaraton.
---

**Conconi-testen** er en klassisk, ikke-invasiv felttest udviklet af den italienske professor **Francesco Conconi og hans kolleger i 1982**. Testen blev skabt som et praktisk alternativ til invasive blodprøver med det formål at bestemme den **anaerobe tærskel (AT)** – populært kaldet syregrænsen – udelukkende ved at analysere forholdet mellem løbehastighed og hjertefrekvens.

**Gå direkte til det, du skal bruge:**

- [<i class='fas fa-stopwatch'></i> **Interaktiv Conconi Timer**](#timer) – Bip-styret pacer med indtastning af 200m puls

---

## Fysiologisk baggrund & Teori

Under submaksimalt arbejde er forholdet mellem iltoptagelse ($\text{VO}_2$), løbehastighed ($v$) og hjertefrekvens ($HR$) stort set **lineært**. Når belastningen øges, stiger pulsen proportionalt for at levere den nødvendige ilt til de arbejdende muskler.

Når belastningen nærmer sig den anaerobe tærskel (omkring $85\text{--}90\%$ af $\text{HR}_{\max}$ hos trænede), sker der et fysiologisk skift:

1. **Anaerob supplering:** Den aerobe energiproduktion kan ikke længere følge med det stigende energibehov alene. Kroppen øger den anaerobe glykolyse, hvilket fører til en accelereret ophobning af mælkesyre (laktat) og brintioner ($H^+$) i blodet.
2. **Heart Rate Deflection Point ($HR_{dp}$):** På grund af det øgede anaerobe bidrag og hjertets biologiske loft for maksimal fyldning og slagvolumen, flader stigningen i hjertefrekvensen ud. 

Dette fænomen kaldes i litteraturen for **Heart Rate Deflection Point ($HR_{dp}$)** eller "Conconi-knækket". Hastigheden og pulsen ved dette afbøjningspunkt svarer ifølge Conconi et al. (1982) til den anaerobe tærskel.

{% include figure image_path="https://i.ytimg.com/vi/DpKBBAsekP4/maxresdefault.jpg" caption="Teoretisk Conconi-graf: Forholdet mellem hastighed og puls knækker (HRdp) ved den anaerobe tærskel." %}

---

## Formål og Anvendelse

Conconi-testen anvendes til at:
* Estikere den **anaerobe tærskel (AT)** i km/t og slag pr. minut (bpm).
* Fastlægge **præcise træningszoner** til udholdenhedstræning (specifikt zone 4 / tærskeltræning).
* Evaluere **træningseffekt** over tid (en forskydning af $HR_{dp}$ mod højre indikerer forbedret aerob kapacitet).

---

## Udstyr

For at gennemføre Conconi-testen med høj præcision kræves:

* **400m løbebane** med markeringer for hver 200 meter.
* **Pulsmåler:** Et pulsbælte med kontinuerlig datalogning ($1\text{ Hz}$) eller mulighed for at registrere omgangstider (lap-funktion).
* **Pacer-system / Lydfil:** En udstyrskilde eller app, der giver præcise bip-signaler for hver 200m passage.

---

## Testprocedure

{% include video provider="youtube" id="DpKBBAsekP4" %}

Testen er en **kontinuerlig, trinvist stigende belastningstest**:

1. **Startfart:** Løberen starter ved en lav, behagelig hastighed (typisk 8,0–10,0 km/t afhængigt af niveau).
2. **Hastighedsstigning:** Farten øges systematisk med **0,5 km/t for hver 200 meter** (eller via faste tidsintervaller).
3. **Pulsregistrering:** Ved hver 200m-passering registreres løberens aktuelle puls enten via urets lap-funktion eller ved manuel indtastning.
4. **Udmattelse:** Løberen fortsætter med at øge farten på hver 200m sektion indtil volitonal udmattelse (indtil tempoet ikke længere kan opretholdes).

---

## Interaktiv Conconi / Montreal Test Afspiller
{: id="timer" }

Da Conconi-testen kræver en absolut præcis tempo-stigning pr. 200 meter, har vi udviklet denne interaktive pacer-afspiller. Den bipper automatisk ved hver 200m-markering og lader dig indtaste din puls direkte undervejs:

{% include components/conconi-test-timer.html %}

---

## Dataanalyse: Sådan findes $HR_{dp}$

Efter testen opstilles en datatabel bestående af hastighed ($v$) på x-aksen og hjertefrekvens ($HR$) på y-aksen:

1. Plot alle datapunkter i et koordinatsystem.
2. Tegn en ret linje gennem de første (submaksimale) datapunkter.
3. Identificer det punkt i den øvre ende af kurven, hvor datapunkterne afviger fra den rette linje og flader ud mod højre.
4. Skæringspunktet angiver din **tærskelhastighed** og **tærskelpuls**.

| Trin | Distance | Hastighed ($v$) | Puls ($HR$) | Bemarkning |
| :--- | :--- | :--- | :--- | :--- |
| Trin 1 | 200 m | 10,0 km/t | 138 bpm | Lineær fase |
| Trin 2 | 400 m | 10,5 km/t | 145 bpm | Lineær fase |
| Trin 3 | 600 m | 11,0 km/t | 152 bpm | Lineær fase |
| **Trin 8** | **1600 m** | **13,5 km/t** | **174 bpm** | **HRdp (Anaerob Tærskel)** |
| Trin 9 | 1800 m | 14,0 km/t | 177 bpm | Afbøjet / Udfladning |

---

## Videnskabelig Evaluering & Kritiske Overvejelser

Selvom Conconi-testen er verdenskendt og har haft enorm praktisk betydning for konditionstræning siden 1980'erne, har uafhængig idrætsfysiologisk forskning påpeget visse metodiske begrænsninger:

### 1. Tilstedeværelse af $HR_{dp}$
Uafhængige undersøgelser (f.eks. *Jones & Doust, 1995*; *Tokmakidis et al., 1996*) har vist, at **$HR_{dp}$ kun kan identificeres hos $60\text{--}85\%$ af testpersonerne**. Hos den resterende gruppe forbliver sammenhængen mellem puls og hastighed fuldstændig lineær helt op til $\text{HR}_{\max}$.

### 2. Protokolfølsomhed
Placeringen af afbøjningspunktet påvirkes af den anvendte acceleration. Hvis hastigheden øges for hurtigt, halter kredsløbsresponset bagefter (fysiologisk forsinkelse), hvilket kan forskyde det estimerede tærskelpunkt kunstigt højt.

### 3. Kardiovaskulært drift
Kropstemperatur, dehydrering og manglende opvarmning kan medføre *cardiovascular drift*, hvilket slører pulskurven og gør objektiv identifikation af knækket vanskelig uden avanceret matematisk regression (f.eks. D-max metoden).

---

## Fordele og Ulemper

### Fordele
- ✔ **Ikke-invasiv:** Kræver ingen nålestik eller blodgasanalyse.
- ✔ **Billig & Tilgængelig:** Kan udføres på en almindelig løbebane med standard pulsur.
- ✔ **Direkte anvendelig:** Giver både et pulstal og en konkret hastighed (km/t) til træningsplanlægning.

### Ulemper
- ❌ **Ikke alle udviser et knæk:** Kan mislykkes for en vis procentdel af løbere.
- ❌ **Kræver maksimal indsats:** Kræver høj motivation og god grundform.
- ❌ **Subjektiv aflæsning:** Visuel identifikation af knækket kan variere mellem to trænere.

---

## FAQ - Ofte stillede spørgsmål

{% include motionsplan/faq.html %}

<details markdown="1" class="references">
  <summary><h2 id="references">Referencer</h2></summary>

- **Conconi F, Ferrari M, Ziglio PG, Droghetti P, Codeca L.** (1982) *Determination of the anaerobic threshold by a noninvasive field test in runners.* Journal of Applied Physiology, 52(4):869-873.
- **Jones AM, Doust JH.** (1995) *Lack of reliability in the determination of the heart rate deflection point.* International Journal of Sports Medicine, 16(8):541-544.
- **Tokmakidis SP, Léger LA.** (1996) *Comparison of the heart rate deflection point with the lactate threshold in trained runners.* Medicine & Science in Sports & Exercise, 28(11):1417-1422.
- **Bodner ME, Rhodes EC.** (2000) *A review of the physiological background and reliability of the Conconi test.* Sports Medicine, 30(4):269-280.
</details>