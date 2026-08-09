---
title: &title "MSLHST: Multiple Single-Leg Hop Stabilization Test"
seo_title: "MSLHST: Test din dynamiske landingsstabilitet"
description: "Komplet guide til MSLHST (Multiple Single-Leg Hop Stabilization Test) – valideret test med BESS-scoring til vurdering af dynamisk hop- og landingskontrol."
excerpt: "Komplet guide til MSLHST (Multiple Single-Leg Hop Stabilization Test) – valideret test med BESS-scoring til vurdering af dynamisk hop- og landingskontrol."
permalink: /mslhst-test/
language: da
tags:
  - test
  - balance
  - mslhst
  - dynamisk balance
  - landingskontrol
category:
  - Balance
  - Balancetests
tests:
  - id: "test-mslhst"
    title: "Multiple Single-Leg Hop Stabilization Test (MSLHST)"
    description: "Klinisk og sportsvidenskabelig balancetest til vurdering af dynamisk postural kontrol, landingsstabilitet samt ankel- og knæfiksering efter hop på ét ben."
    category: ["Tests", "Balance"]
    type: ["Protokol", "Balancetest"]
    execution: ["Fysisk"]                  # 🏃‍♂️ FYSISK TEST: Kræver fysiske hop og landinger på ét ben
    method: "direkte"                     # ⏱️ Direkte BESS-fejlscoring og 5-sekunders tidsfiksering
    modality: ["Balance", "Hop"]
    measures: ["Dynamisk balance", "Landingskontrol", "Ankelstabilitet", "Fejlscore", "Side-asymmetri"]
    equipment: ["Tape", "Målebånd", "Stopur"]
    setting: ["Klinik", "Fitnesscenter", "Idrætsanlæg", "Individuel"]
    target_group: ["Atleter", "Motionister", "Unge", "Voksne", "Mænd", "Kvinder"]
    related_tools:
      - "tool-mslhst-beregner"

# INTERAKTIVE SOFTWARE-VÆRKTØJER
tools:
  - id: "tool-mslhst-beregner"
    title: "MSLHST Beregner & Scoringsværktøj"
    description: "Interaktivt beregningsværktøj til udregning af individuelle baneafstande ud fra kropshøjde samt BESS-fejlscoring på landings- og stabiliseringsfasen."
    category: ["Balance"]
    type: ["Beregner"]
    measures: ["Fejlscore", "Side-asymmetri", "Baneafstande"]  # 🎯 Output-parametre fra modulet
    anchor: "#calculator"
    category_schema: "HealthAndFitnessApplication"
last_modified_at: 2026-08-02T12:00:00Z
sidebar:
  nav: exercises
faq:
  - question: Hvad er forskellen på MSLHST og Y-Balance Test?
    answer: "[Y-Balance Test](/y-balance-test/) måler din dynamiske balance, mens du har kontakt med gulvet og rækker ud med det frie ben. MSLHST måler din evne til at absorbere stød og stabilisere leddene efter en **fase i luften** (hop/landing)."
  - question: Hvorfor er landingen på 5 sekunder så vigtig?
    answer: De første 1-2 sekunder efter en landing afslører kroppens reaktive neuromuskulære kontrol. Hvis du svajer eller flytter foden, indikerer det nedsat ledsans (proprioception) eller svaghed i hofts- og ankelstabiliserende muskler.
  - question: Kan jeg lave testen uden specialudstyr?
    answer: Ja, du behøver blot kridt/tape til at markere felterne på et skridsikkert underlag, et stopur til 5-sekunders tællingen og et scoringsskema.
---

**Multiple Single-Leg Hop Stabilization Test (MSLHST)** er en klinisk og sportsvidenskabelig balancetest, der måler din dynamiske postural kontrol under hop og landing på ét ben. Testen vurderer kroppens evne til hurtigt at absorbere stød, fiksere underekstremitetens led og genvinde fuld stabilitet på understøttelsesfladen efter en eksplosiv bevægelse.

[<i class='fas fa-calculator'></i> Hop direkte til beregneren](#calculator){: .btn .btn--success .btn--jump }

I dette indlæg får du svar på følgende spørgsmål:

- Hvad er MSLHST, og hvad måler testen?
- Hvilket udstyr og hvilke banemål skal bruges?
- Hvordan udføres testen trin-for-trin?
- Hvad er de specifikke fejlkriterier (L1–L4 og B1–B4) ifølge BESS-systemet?
- Hvad er historien fra den klassiske Bass Test til MSLHST?

---

## Hvad er MSLHST?

MSLHST blev oprindeligt beskrevet af Riemann et al. (1999, 2002) og senere videreudviklet i skadesforebyggende forskning (bl.a. Emery, 2003). Formålet var at skabe et objektivt og funktionelt måleredskab til at evaluere dynamisk ankelstabilitet, knækontrol og landingsteknik.

Hvor statiske balancetests (f.eks. [enkeltbensstand](/balance-tests/)) kun måler din evne til at stå stille, udfordrer MSLHST led og muskler under realistiske, eksplosive vilkår, der ligner påvirkningerne i idrætsgrene som fodbold, håndbold, basketball og løb.

> MSLHST måler ikke blot din balance, men din evne til **dynamisk opbremsning og postural fiksering** i landingsøjeblikket.

---

## Udstyr og Baneopstilling

For at gennemføre en videnskabeligt valideret MSLHST skal banen opbygges ud fra atletens kropshøjde.

### Nødvendigt udstyr:
* Skridsikkert underlag (f.eks. idrætshal eller fast gulv).
* Målebånd og sportstape.
* Stopur til 5-sekunders stabiliseringsfasen.

### Banens formler og mål:
Banen består af 10 nummererede tape-mærker ($2{,}5 \text{ cm} \times 2{,}5 \text{ cm}$) placeret i et specifikt mønster. Hop-afstandene tilpasses individualiseret ud fra kropshøjden:

1. **Diagonal hop-afstand ($y$):** 
   $$y = 0{,}45 \times \text{kropshøjde (i cm)}$$
2. **Vandret og lodret afstand ($x$):** 
   $$x = \sqrt{\frac{y^2}{2}}$$

<pre><code>                  [ 10 ] (Center)
                    ^
                    | (x)
             [ 9 ] <-- [ 8 ]
               \       /
                \ (y) / (x)
                 \   /
             [ 7 ] <-- [ 6 ]
                       ^
                       | (x)
                     [ 5 ] (Center)
                       ^
                       |
             [ 3 ] <-- [ 4 ]
               \       /
                \ (y) / 
                 \   /
             [ 1 ] <-- [ 2 ]
               ^
               | (x)
            [START] (Center)</code></pre>

---

## Udførelse og Testprotokol

Testen udføres i løbesko på et plant underlag. Test hver side separat og notér altid, hvilket ben der er atletens dominerende ben.

### Trin-for-trin instruktion:

1. **Startstilling:** Testpersonen står på ét ben i felt **START** (nederst på midteraksen) med hænderne placeret på hofterne.
2. **Hop-sekvensen:** På signal hopper personen på ét ben frem til **Mærke 1** (nederst til venstre).
3. **Landingen:** Foden skal lande så præcist, at tape-mærket dækkes fuldstændigt af skoen.
4. **5-sekunders stabilisering:** Ved landing skal testpersonen **fryse stillingen i 5 sekunder** uden at flytte foden, miste balancen eller tage hænderne fra hofterne.
5. **Videre forløb:** Efter 5 sekunder hoppes der videre til næste felt i den nummererede sekvens ($1 \rightarrow 2 \rightarrow 3 \rightarrow \dots \rightarrow 10$), indtil alle 10 hop er gennemført.
6. **Gentagelse:** Testen gennemføres på det modsatte ben efter en passende pause (mindst 2 minutters restitution).

---

## Beregner
{: id="calculator" }

{% include components/mslhst-test.html %}

---

## Scoringssystem: Fejlkriterier (BESS-metoden)

MSLHST benytter et **fejlpoint-system** inspireret af BESS (*Balance Error Scoring System*). Hvert af de 10 hop vurderes uafhængigt i to faser: **Landingsfasen** og **Stabiliseringsfasen (5 sekunder)**.

> **Regel:** Hver landing kan tildele op til 4 landingsfejl og 4 balancefejl. En perfekt gennemført test på et ben giver **0 fejlpoint**.

### 1. Landingsfejl (L1 – L4)
Evaluere mekanikken i det sekund, foden rammer gulvet:

| Fejlkode | Beskrivelse | Detaljer |
| :--- | :--- | :--- |
| **L1** | Ved siden af mærket | Standfoden dækker ikke tape-mærket helt ved landing. |
| **L2** | Vinkling af foden | Standfoden roteres mere end $\pm 10^\circ$ i landingsøjeblikket. |
| **L3** | Stød-fejl / Vaklen | Testpersonen snubler, glider eller mister balancen i landingen. |
| **L4** | Hænder af hofter | Hænderne fjerner sig fra hofterne i selve landingsstødet. |

### 2. Balancefejl under 5-sekunders hold (B1 – B4)
Evaluere den statiske fiksering under de 5 sekunders stilstand:

| Fejlkode | Beskrivelse | Detaljer |
| :--- | :--- | :--- |
| **B1** | Berøring med fri fod | Den modsatte (frie) fod berører gulvet eller standfoden. |
| **B2** | Ben-kontakt | Lår eller knæ på de two ben berører hinanden under holdet. |
| **B3** | Voldsom svaj/bevægelse | Overkroppen hælder mere end $30^\circ$, eller hoften svajer kraftigt. |
| **B4** | Hænder af hofter (5s) | Hænderne slippes fra hofterne under de 5 sekunders stabilisering. |

---

## Fortolkning af Testresultater

Når begge ben er testet, opgøres **Total Fejlscore** (Venstre vs. Højre) samt den indbyrdes **Side-asymmetri (differens)**:

* **0–3 fejl totalt pr. ben:** Fremragende dynamisk landingsstabilitet.
* **4–8 fejl totalt pr. ben:** Moderat kontrol. Indikerer opmærksomhedspunkter i ankel- eller hoftestabiliteten.
* **> 8 fejl totalt pr. ben:** Nedsat reaktiv postural kontrol og øget skadesrisiko.
* **Side-asymmetri $\ge 3$ fejl:** En forskel på 3 fejl eller mere mellem højre og venstre ben regnes klinisk for en betydelig asymmetri, hvilket ofte ses under genoptræning efter f.eks. korsbåndsskader (ACL) eller genstridige ankeldistorsioner.

---

## Historisk udvikling: Fra Bass Test til MSLHST

For at forstå, hvorfor MSLHST er blevet den foretrukne hop-stabilitetstest i dag, er det værd at kigge på testens historiske rødder.

### 1. Den originale Bass Test (1939)
Udviklet af Ruth I. Bass i 1939 som en af de allerførste field-tests til dynamisk balance. Testen bestod i at hinke fra mærke til mærke på en bane med 10 afmærkninger og holde balancen i 5 sekunder på hvert mærke.

### 2. Modified Bass Test
I nyere tid (bl.a. beskrevet af Ambegaonkar et al., 2013) blev testen tilpasset under navnet **Modified Bass Test**. Her hinker testpersonen gennem en fast skabelon af 10 felter med 5 sekunders pause pr. felt.

Selvom Modified Bass Test har været udbredt i idrætsundervisning og fitness-tests, har den to klare begrænsninger:
* Den tager i mindre grad højde for atletens kropsbygning og hop-afstande.
* Scoringssystemet er mere subjektivt i vurderingen af den reelle landingsmekanik.

### 3. MSLHST (Den moderne standard)
MSLHST bygger direkte videre på princippet fra Modified Bass Test, men introducerer et mere **strenget og biomekanisk valideret scoringssystem**. Hvor Modified Bass primært blev brugt som en generel hinkebane, er MSLHST fintrimmet til at fange mikroskopiske ubalancer i landingsfasen, hvilket gør den væsentligt mere følsom til klinisk brug og skadesforebyggelse.

---

## FAQ om MSLHST

{% include motionsplan/faq.html %}

---

## Opsamling

MSLHST er en af de stærkeste tests til evaluering af dynamisk hop- og landingsstabilitet. Ved at kombinere elementer fra den klassiske Modified Bass Test med moderne skadesforebyggende scoringskriterier giver den et præcist billede af din atletiske kontrol på ét ben.

* **Se alle balancetests:** [Oversigt over balancetests](/balance-tests/)
* **Forbedr din landingsstabilitet:** [Guide til effektiv balancetræning](/balancetraening/)

<details markdown="1" class="references">
  <summary><h2 id="references">Referencer</h2></summary>

- Ambegaonkar, Jatin, Shane Caswell, Jason Winchester, Yohei Shimokochi, Nelson Cortes, og Amanda Caswell. 2013. “Balance Comparisons Between Female Dancers and Active Nondancers”. _Research quarterly for exercise and sport_ 84 (marts): 24–29. https://doi.org/10.1080/02701367.2013.762287.
- Bass, Ruth I. 1939. “An Analysis of the Components of Tests of Semi-Dynamic and Dynamic Balance with Special Reference to the Total Body Position”. _Research Quarterly. American Association for Health, Physical Education and Recreation_ 10 (2): 33–52.
- Emery, Carolyn A. 2003. “Is there a clinical standing balance measurement tool that predicts ankle sprains in high school athletes?”. _Clinical Journal of Sport Medicine_ 13 (4): 209–215.
- Riemann, Bryan L., og Scott M. Lephart. 2002. “The Sensorimotor System, Part II: The Role of Sensorimotor Integration in Maintaining Postural Stability”. _Journal of Athletic Training_ 37 (1): 80–84.
- Riemann, Bryan L., A. Caggiano, og Scott M. Lephart. 1999. “Examination of a Clinical Method for Assessing Dynamic Postural Stability”. _Journal of Sport Rehabilitation_ 8 (3): 171–183.
</details>