---
title: &title "Countermovement Jump (CMJ) & Squat Jump: Test din eksplosivitet"
seo_title: "Countermovement Jump (CMJ) & Squat Jump – Test eksplosivitet"
description: "Komplet guide til vertikale hoppetests: Countermovement Jump (CMJ), Squat Jump (SJ) og Abalakov-test. Mål din eksplosivitet og sammenlign resultater."
permalink: /countermovement-jump-cmj-squat-jump-sj/
redirect_from:
  - /squat-jump-test/
language: da
header:
  overlay_image: /assets/images/i.ytimg.com/maxresdefault-06f8a2b2.jpg
  credit: https://i.ytimg.com/vi/rSaR_Aq38SQ/maxresdefault.jpg
  teaser: /assets/images/i.ytimg.com/maxresdefault-06f8a2b2.jpg
  caption: *title
category:
  - Tests
  - Eksplosivitet
  - Hoppetests
tags:
  - test
  - springtest
  - testberegner
  - eksplosivitet
  - spring
last_modified_at: '2026-07-30T10:00:00Z'
toc: true
# TESTS / PROTOKOLLER
tests:
  - id: "test-squat-jump"
    title: "Squat Jump (SJ)"
    description: "Vertikal hoppetest til måling af ren koncentrisk muskelkraft i benene helt uden forspænding (start fra 90° bøjede knæ i 2-3 sekunder)."
    category: ["Tests", "Eksplosivitet"]
    type: ["Protokol", "Springtest"]
    execution: ["Fysisk"]                  # 🏋️‍♂️ FYSISK TEST: Kræver maksimalt lodret hop fra statisk position
    method: "direkte"                     # 📏 Måles direkte i cm (via svævetid eller kraftplatform)
    modality: ["Hop"]
    measures: ["Hoppehøjde", "Eksplosivitet", "Koncentrisk styrke"]
    equipment: ["Hoppemåtte", "Kraftplatform", "My Jump App", "Vertec"]
    setting: ["Fitnesscenter", "Klinik", "Laboratorietest", "Individuel"]
    target_group: ["Motionister", "Atleter", "Unge", "Voksne", "Mænd", "Kvinder"]
    related_tools:
      - "tool-sj-cmj-abalakov-analysator"
      - "tool-svaevetid-hoppehoejde-beregner"

  - id: "test-countermovement-jump"
    title: "Countermovement Jump (CMJ)"
    description: "Vertikal hoppetest til måling af underkroppens eksplosivitet med udnyttelse af stræk-forkortningscyklussen (SSC) og forspænding."
    category: ["Tests", "Eksplosivitet"]
    type: ["Protokol", "Springtest"]
    execution: ["Fysisk"]                  # 🏋️‍♂️ FYSISK TEST: Kræver dynamisk knæbøjning og eksplosivt hop
    method: "direkte"                     # 📏 Måles direkte i cm
    modality: ["Hop"]
    measures: ["Hoppehøjde", "Eksplosivitet", "SSC-effekt", "EUR"]
    equipment: ["Hoppemåtte", "Kraftplatform", "My Jump App"]
    setting: ["Fitnesscenter", "Klinik", "Laboratorietest", "Individuel"]
    target_group: ["Motionister", "Atleter", "Unge", "Voksne", "Mænd", "Kvinder"]
    related_tools:
      - "tool-sj-cmj-abalakov-analysator"
      - "tool-svaevetid-hoppehoejde-beregner"

  - id: "test-abalakov"
    title: "Abalakov-test (CMJ med armsving)"
    description: "Vertikal hoppetest til måling af den maksimale hoppehøjde ved kombinering af underkroppens eksplosivitet og overkroppens armsving."
    category: ["Tests", "Eksplosivitet"]
    type: ["Protokol", "Springtest"]
    execution: ["Fysisk"]                  # 🏋️‍♂️ FYSISK TEST: Kræver maksimalt hop med aktivt armsving
    method: "direkte"                     # 📏 Måles direkte i cm
    modality: ["Hop"]
    measures: ["Hoppehøjde", "Eksplosivitet", "Armsvingseffekt"]
    equipment: ["Vertec", "Hoppemåtte", "Kraftplatform", "My Jump App"]
    setting: ["Fitnesscenter", "Klinik", "Laboratorietest", "Individuel"]
    target_group: ["Motionister", "Atleter", "Unge", "Voksne", "Mænd", "Kvinder"]
    related_tools:
      - "tool-sj-cmj-abalakov-analysator"
      - "tool-svaevetid-hoppehoejde-beregner"

# INTERAKTIVE SOFTWARE-VÆRKTØJER
tools:
  - id: "tool-sj-cmj-abalakov-analysator"
    title: "SJ, CMJ & Abalakov Effekt Beregner"
    description: "Analyser dine testresultater og beregn den procentvise effekt af forspænding (EUR) og armsving."
    category: ["Eksplosivitet"]
    type: ["Beregner"]
    measures: ["EUR", "SSC-effekt", "Armsvingseffekt"]  # 🎯 Output-parametre fra analysatoren
    anchor: "#sammenlign-effekten-af-forspænding-og-armsving"
    category_schema: "HealthAndFitnessApplication"

  - id: "tool-svaevetid-hoppehoejde-beregner"
    title: "Svævetid til Hoppehøjde Beregner"
    description: "Beregn din reelle hoppehøjde i centimeter baseret på din målte svævetid i sekunder."
    category: ["Eksplosivitet"]
    type: ["Beregner"]
    measures: ["Hoppehøjde", "Svævetid"]             # 🎯 Output-parametre fra beregneren
    anchor: "#beregn-din-hoppehøjde-fra-svævetid"
    category_schema: "HealthAndFitnessApplication"
faq:
  - question: Hvad er forskellen på et Countermovement Jump og et Squat Jump?
    answer: CMJ starter fra stående stilling med et hurtigt dyk (forspænding) for at udnytte musklernes elastiske energi (SSC). SJ starter fra en statisk, bøjet stilling i 2-3 sekunder for udelukkende at måle ren koncentrisk muskelkraft.
  - question: Hvad måler en Abalakov-test?
    answer: Abalakov-testen er et Countermovement Jump udført med et aktivt armsving. Det måler, hvor meget du kan forøge din hoppehøjde ved at tilføje overkroppens impuls (typisk 10-15% ekstra).
  - question: Hvorfor er det værdifuldt at sammenligne SJ, CMJ og Abalakov?
    answer: Ved at sammenligne de tre hop kan du isolere effekten af din rå koncentriske styrke (SJ), din elastiske reaktivitet/SSC (CMJ - SJ) og dit armtræk (Abalakov - CMJ) for at tilpasse din træning målrettet.
meta:
  name: Samling af vertikale hoppetests
  measures: springstyrke og eksplosivitet
  type: springtest
  equipment: hoppemåtte, kraftplatform eller video-app
---

Måling af vertikale hop er guldstandarden inden for atletisk testning, når underkroppens **eksplosive muskelkraft** og **powerudvikling** skal evalueres.

I stedet for blot at kigge på ét enkelt talløst hop, giver kombinationen af **Squat Jump (SJ)**, **Countermovement Jump (CMJ)** og **Abalakov-testen** et fuldstændigt billede af din fysiologiske profil: Hvor meget af din springkraft skyldes ren muskelmasse, hvor meget skyldes senernes elasticitet, og hvor godt udnytter du overkroppens impuls?

---

## De 3 vertikale hoppetests

<div class="notice--info" markdown="1">
### 1. Squat Jump (SJ) – ren koncentrisk styrke
{: id="sj" }
[Squat Jump](/squat-jump-test/) måler den rene koncentriske muskelkraft i benene **helt uden forspænding**. 
* **Udførelse:** Atleten starter fra en statisk position med knæene bøjede i $90^\circ$ vinkel i mindst 2–3 sekunder. Derefter springes der direkte lodret op uden nogen forudgående nedbevægelse.
* **Formål:** Isolere musklernes evne til at skabe kraft fra nulpunktet uden hjælp fra oplagret elastisk energi.
</div>

{% include figure image_path="https://www.researchgate.net/profile/Karim_Chamari/publication/229085181/figure/fig3/AS:667776209412097@1536221663136/Squat-Jump.png" caption="Squat Jump (SJ) faser: Statisk udgangsposition, afsæt og landing. Kilde: [Chamari et al. (2010)](https://www.researchgate.net/publication/229085181_Anaerobic_power_and_capacity)." %}

{% include video provider="youtube" id="lHPcnacJ_Ss" %}

---

<div class="notice--success" markdown="1">
### 2. Countermovement Jump (CMJ) – eksplosivitet med forspænding
{: id="cmj" }
Countermovement Jump er den mest udbredte test i sportens verden. Den måler din underkrops eksplosivitet, når musklernes **stræk-forkortningscyklus (SSC)** aktiveres.
* **Udførelse:** Atleten starter stående, laver en hurtig, dynamisk knæbøjning ned til ca. $90^\circ$ og vender bevægelsen øjeblikkeligt i et eksplosivt lodret afsæt. Hænderne holdes på hoften.
* **Formål:** Måle evnen til at genanvende den elastiske energi, der oplagres i sener og muskelhinder under nedbevægelsen.
</div>

{% include figure image_path="https://www.researchgate.net/profile/Karim_Chamari/publication/229085181/figure/fig1/AS:300700530692099@1448704001393/Counter-movement-Jump.png" caption="Countermovement Jump (CMJ) faser. Kilde: [Chamari et al. (2010)](https://www.researchgate.net/publication/229085181_Anaerobic_power_and_capacity)." %}

#### Eksempel på CMJ uden armsving (hænder i siden):
{% include video provider="youtube" id="hXkVRKkrjdY" %}

---

<div class="notice--warning" markdown="1">
### 3. Abalakov-test – CMJ med aktivt armsving
{: id="abalakov" }
Abalakov-testen udføres nøjagtigt som et CMJ, men med **fri anvendelse af armene**.
* **Udførelse:** Atleten svinger armene aktivt bagud i nedbevægelsen og trækker dem kraftfuldt opad i afsættet.
* **Formål:** Måle hvor meget overkroppens impuls og tyngdepunktsforskydning bidrager til den samlede hoppehøjde (typisk en forøgelse på 10–15%).
</div>

#### Eksempel på CMJ med armsving (Abalakov):
{% include video provider="youtube" id="lgkCxnSHV7w" %}

---

## Sammenlign effekten af forspænding og armsving

Ved at sammenligne resultaterne fra de tre hoppetests kan du identificere dine styrker og svagheder i din [springtræning](/springtraening/):

* **Effekt af forspænding (SSC):** Forskellen mellem CMJ og SJ udtrykker din elastiske udnyttelsesgrad (*Eccentric Utilization Ratio - EUR*). Hvis dit CMJ ikke er højere end dit SJ, har du brug for mere plyometrisk træning.
* **Effekt af armsving:** Forskellen mellem Abalakov og CMJ viser, hvor effektivt du overfører overkroppens bevægelsesmængde til det lodrette afsæt.

Prøv beregneren herunder for at analysere dine testresultater og beregne effekten af både forspænding og armtræk:

{% include components/sj-cmj-abalakov-effekt.html %}

### Se den tekniske forskel på CMJ og SJ i bevægelse:
{% include video provider="youtube" id="DZV_RlzfSIY" %}

---

## Målemetoder og udstyr til hoppetests

Vertikale hop kan registreres på flere måder afhængigt af dit budget og udstyr. Læs mere om alle målemetoder i vores dybdegående [guide til måling af hoppehøjde](/springtests-hoppehoejde/).

| Målemetode | Præcision | Pris | Brugervenlighed | Typiske faldgruber |
| :--- | :--- | :--- | :--- | :--- |
| **Kraftplatform** | Høj | Dyr | Avanceret | Kræver kalibrering, men giver mest præcise data |
| **Hoppemåtte** | Middel | Mellem | Nem | Kan overvurdere hoppehøjden ved uren landing |
| **Videoanalyse** | Lav-middel | Billig | Moderat | Kræver præcis manuel markering af svævetid |

<div class="notice--info" markdown="1">
### 📏 Test af funktionel række- og hoppehøjde
Måler du din hoppehøjde ved at række op mod et mål (f.eks. i basketball eller volleyball) frem for svævetid på en måtte? 
* **[Jump & Reach Test](/jump-reach/)** – Måling af funktionel hoppehøjde med et Vertec-apparat eller på basketplade.
* **[Sargent Jump Test](/sargent-jump-test/)** – Den klassiske, gratis lavpraktiske version, hvor du måler forskellen på væggen med kridt på fingrene.
</div>

---

## 🧮 Beregn din hoppehøjde fra svævetid

Benytter du en hoppemåtte, kontaktmåtte eller video-app (f.eks. My Jump 2), der måler din svævetid i sekunder, kan du indtaste den herunder for at beregne din reelle hoppehøjde:

{% include calculator/calculate-jump-cmj-height.html %}

### Formlen bag beregningen:
$$ \text{Hoppehøjde (m)} = \frac{g \cdot t^2}{8} = \frac{9{,}81 \cdot t^2}{8} $$  
*Hvor $t$ er den samlede svævetid i sekunder.*

---

## Normer for vertikale hop

Husk altid at sammenligne dine tal med normer, der benytter samme udstyr og protokol.

<details markdown="1" class="faq">
  <summary><h3>Output Sports normer (CMJ uden armsving)</h3></summary>

Samlet percentilopdeling for mandlige og kvindelige atleter med hænderne placeret på hoften:

{% include figure image_path="/assets/images/cdn.prod.website-files.com/64ca3c82125e9c569b72a6e1_CMJ_20Jump_20Height-c9c86542.png" caption="Kilde: [Output Sports](https://www.outputsports.com/blog/how-do-your-scores-compare-to-normatives-from-thousands-of-athletes-personal-bests-in-power-jumps)." %}

I en post på [Instagram](https://www.instagram.com/p/CMxse7zHwcN/) har de desuden delt normer for kvinder med hænderne på hoften.

| Kategori | Mænd (cm) | Kvinder (cm) |
| :--- | :--- | :--- |
| **Vanvittigt** | $> 70\text{ cm}$ | $> 60\text{ cm}$ |
| **Virkelig fremragende** | $61\text{--}70\text{ cm}$ | $51\text{--}60\text{ cm}$ |
| **Fremragende** | $51\text{--}60\text{ cm}$ | $41\text{--}50\text{ cm}$ |
| **Godt** | $41\text{--}50\text{ cm}$ | $31\text{--}40\text{ cm}$ |
| **Gennemsnitligt** | $31\text{--}40\text{ cm}$ | $21\text{--}30\text{ cm}$ |

</details>

<details markdown="1" class="faq">
  <summary><h3>Plantiga normer (Abalakov med armsving)</h3></summary>

Når der anvendes armsving (Abalakov), øges præstationen typisk med omkring 10% ([Blache & Monteil, 2013](https://onlinelibrary.wiley.com/doi/abs/10.1111/sms.12042)):

| Kategori | Mænd (cm) | Kvinder (cm) |
| :--- | :--- | :--- |
| **Fremragende** | $> 70\text{ cm}$ | $> 60\text{ cm}$ |
| **Meget god** | $61\text{--}70\text{ cm}$ | $51\text{--}60\text{ cm}$ |
| **Over middel** | $51\text{--}60\text{ cm}$ | $41\text{--}50\text{ cm}$ |
| **Middel** | $41\text{--}50\text{ cm}$ | $31\text{--}40\text{ cm}$ |
| **Under middel** | $31\text{--}40\text{ cm}$ | $21\text{--}30\text{ cm}$ |
| **Dårlig** | $21\text{--}30\text{ cm}$ | $11\text{--}20\text{ cm}$ |
| **Meget dårlig** | $< 21\text{ cm}$ | $< 11\text{ cm}$ |

</details>

---

## Standardiseret opvarmning før testen

For at få valide og sammenlignelige testresultater bør du gennemføre en aktiverende opvarmning (baseret på [Petrigna et al., 2019](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6853898/)):

1. Stå på ét ben og nik forsigtigt med hovedet i 30 sekunder.
2. Single-leg airplane squat med hofteskub (20 gentagelser).
3. Single-leg airplane squat med kropsrotation (20 gentagelser).
4. Single-leg airplane squat med en sort Theraband-modstand på knæet, der inkluderer kropsrotation med en håndvægt i hånden (10 gentagelser).
5. Monster walk med en sort Theraband-modstand placeret omkring forfoden, fremad og bagud (3 meter hver vej).
6. Monster walk med en sort Theraband placeret omkring forfoden, sideværts, dvs. til venstre og højre (3 meter hver vej) ([Pinfold et al., 2018](https://pubmed.ncbi.nlm.nih.gov/29962240/)).

*Formålet er særligt at aktivere gluteal-muskulaturen og klargøre leddene til eksplosiv kraftudvikling.*

---

## Typiske fejl og faldgruber

> "The flight time method is reliable and had low intra-participant variability, but it cannot be recommended for a vertical jump when comparing with others (such as at tryouts) because of the potential “cheating” effect of differences in landing posture."
>
> --- <cite>[Yamashita (2020)](https://www.mdpi.com/2076-3417/10/3/776/pdf)</cite>

1. **Glemmer pausen i Squat Jump:** Hvis du ikke holder pausen på 2–3 sekunder i bunden af dit SJ, udnytter du ubevidst forspænding, og testen bliver ugyldig.
2. **Kompensation i landingen:** Bøjning i knæ eller hofte i luften/landingen forlænger svævetiden kunstigt og giver et for højt resultat.
3. **Manglende pauser mellem forsøg:** Hold altid minimum 1 minuts pause mellem dine hop for at sikre fuld genopfyldning af det kreatinfosfagene energisystem.

Sørg for at se hele denne glimrende video igennem for at undgå fejl på hoppemåtten:
{% include video provider="youtube" id="KNtoP1P2dUA" %}

Se også betydningen af en fast protokol med fokus på landingen:
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7307877606345830400?compact=1" height="399" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>

---

## FAQ - ofte stillede spørgsmål

{% include motionsplan/faq.html %}

<details markdown="1" class="references">
  <summary><h2 id="references">Referencer</h2></summary>

- **Petrigna, L., et al.** (2019). *The Countermovement Jump and Squat Jump protocols: A systematic review.* Frontiers in Physiology, 10, 1368.
- **Chamari, K., et al.** (2010). *Anaerobic power and capacity in athletes.* Journal of Exercise Science & Fitness.
- **Blache, Y., & Monteil, K.** (2013). *Effect of arm swing on maximal vertical jump performance.* Scandinavian Journal of Medicine & Science in Sports, 23(6), e382-e388.
- **Glatthorn, J. F., et al.** (2011). *Validity and reliability of Optojump photoelectric cells for estimating vertical jump height.* Journal of Strength and Conditioning Research, 25(2), 556–560.
- **Yamashita, D.** (2020). *Evaluation of landing posture in vertical jump using flight time method.* Applied Sciences, 10(3), 776.
</details>