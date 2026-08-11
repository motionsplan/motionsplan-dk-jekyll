---
layout: single
permalink: /t-test-agility/
title: Agility T-Test – Måling af Multidirektionel Hurtighed
seo_title: Agility T-Test – Guide til Opstilling, Procedure & Normtal
excerpt: Komplet guide til Agility T-Testen. Mål din evne til at sprinte fremad, sidelæns og baglæns med vores interaktive timer, banetegning og normtal.
description: Lær hvordan du opstiller og afvikler Agility T-Testen. Se præcise banemål i meter, fysiologisk baggrund, regler for fodskifte samt normtabel for mænd og kvinder.
category:
  - Løb
  - Retningsskifttests
tags:
  - test
  - løbetest
  - agilitet
  - t-test
  - retningsskift
  - sprint
  - sideløb
  - cod
# TESTS / PROTOKOLLER
tests:
  - id: "test-agility-t-test"
    title: "Agility T-Test"
    description: "Standardiseret fysiologisk agilitetstest (T-formet bane med fremadlæns sprint, lateralt sideløb og baglænsløb) til måling af multidirektionel hurtighed, sideløbseffektivitet og retningsskifthastighed (CODS)."
    category: ["Løb", "Tests"]
    type: ["Protokol", "Agilitetstest"]
    execution: ["Fysisk"]                  # 🏃‍♂️ FYSISK TEST: Kræver sprint, shuffling og baglænsløb
    method: "indirekte"                     # 📊 Indirekte måling af agilitet og kropskontrol via tidtagning
    modality: ["Løb", "Sprint"]
    measures: ["Multidirektionel agilitet", "T-test tid (s)", "Retningsskifthastighed (CODS)", "Sideløbshurtighed"]  # 🎯 KUN rene præstationsmæssige slutmål
    equipment: ["Markeringskegler (4 stk)", "Målebånd", "Stopur / Fotoceller", "Skridsikkert underlag"]
    setting: ["Indendørs", "Udendørs", "Idrætshal", "Testcenter", "Individuel"]
    target_group: ["Holdatleter", "Fodboldspillere", "Basketballspillere", "Atleter", "Motionister", "Mænd", "Kvinder"]
    related_tools:
      - "tool-t-test-timer"

# INTERAKTIVE SOFTWARE-VÆRKTØJER
tools:
  - id: "tool-t-test-timer"
    title: "Agility T-Test Interaktiv Timer"
    description: "Interaktiv timer og stopur til tidtagning af Agility T-Testen med nedtælling og automatisk resultatvurdering i forhold til normtal."
    category: ["Løb", "Beregnere", "Tests"]
    type: ["Timer", "Beregner"]
    measures: ["T-test tid (s)", "Retningsskifthastighed (CODS)", "Agilitetsniveau"]  # 🎯 KUN rene slutmål
    anchor: "#timer"
    category_schema: "HealthAndFitnessApplication"
header:
  teaser: /assets/images/tests/t-test.webp
  caption: Agility T-Test – En klassisk test af hurtighed og retningsskift i fire retninger
author_profile: true
last_modified_at: '2026-07-29T10:00:00Z'
breadcrumbs: true
toc: true
faq:
  - question: Hvad måler Agility T-Testen, som andre test ikke gør?
    answer: T-Testen er unik, fordi den kombinerer fire forskellige bevægelsesmønstre i én test – lineær sprint fremad, sideløb (shuffling) til begge sider og baglænsløb.
  - question: Må jeg krydse fødderne under sideløbet?
    answer: Nej, det er en streng regel, at fødderne skal holdes parallelle, og de må ikke krydses under sideløbet (shuffling). Gør man det, er forsøget ugyldigt.
  - question: Hvorfor skal jeg røre ved bunden af keglerne?
    answer: Kravet om at røre keglens bund med hånden sikrer, at udøveren sænker sit tyngdepunkt (tyngdepunktskontrol) og opretholder balance under retningsskiftet, hvilket er afgørende for ægte agilitet.
  - question: Hvilken hånd skal jeg røre keglerne med?
    answer: Ved venstre sidekegle bruges venstre hånd, og ved højre sidekegle bruges højre hånd. Midterkeglen røres med højre hånd ved ankomst. Dette tester kropskontrol.
---

**Agility T-Test** er en af de mest anvendte og anerkendte felt-test til vurdering af en udøvers **multidirektionelle hurtighed** og agilitet. Testen blev oprindeligt beskrevet af Semenick (1990) og er siden blevet en standard i fysiologiske testbatterier verden over.

Testens styrke ligger i dens evne til at simulere de komplekse bevægelsesmønstre, der findes i mange holdsportsgrene (fx basketball, fodbold, tennis og badminton). Udøveren skal her mestre hurtig omstilling mellem **lineær acceleration fremad**, **lateralt sideløb (shuffling)** til både venstre og højre, samt **hurtigt baglænsløb**.

Testen giver et validt mål for udøverens evne til at:
*   Accelerere og deaccelerere hurtigt i sagittalplanet.
*   Opretholde lavt tyngdepunkt og kropskontrol under laterale bevægelser.
*   Skifte retning effektivt uden tab af balance.

 [<i class='fas fa-clock'></i> Timer & Beregner](#timer){: .btn .btn--success .btn--jump }

---

{% include figure image_path="/assets/images/tests/t-test.webp" %}

## Fysiologisk Baggrund & Bevægelsesanalyse

T-Testen stiller høje krav til både det neuromuskulære system og energiomsætningen. Da testen typisk varer mellem $8{,}0$ og $13{,}0$ sekunder for trænede udøvere, er den primære energikilde det **anaerobe alaktacide system (ATP-CP systemet)**.

```
[Start A] ──► [Sprint 9.14m] ──► [Lateral Shuffle 4.57m] ──► [Lateral Shuffle 9.14m] ──► [Lateral Shuffle 4.57m] ──► [Baglæns 9.14m]
Eksplosiv kraft       Koncentrisk/Ekscentrisk        Agilitet & Koordinering        Tyngdepunktskontrol        Proprioception & Speed
```

### Bevægelsesanalyse og Krav

Testen kan opdeles i fire fysiologiske komponenter:

1.  **Lineær Sprint (A til B):** Krav om høj koncentrisk kraftudvikling fra startpositionen og maksimal acceleration over de første $9\text{ meter}$.
2.  **Deacceleration og Tyngdepunkt (ved B, C og D):** Udøveren skal ekscentrisk bremse sin bevægelse, sænke sit tyngdepunkt og røre keglen. Dette kræver stor **ekscentrisk styrke** i forlår (m. quadriceps) og balder (m. gluteus maximus).
3.  **Lateralt Sideløb / Shuffling (B-C-D-B):** Dette stiller krav til koordination, balancestyring og styrke i hofteabduktorer og -adduktorer. Reglen om ikke at krydse fødderne tester specifik lateral hurtighed.
4.  **Baglænsløb (B til A):** Krav om proprioception (kropsbevidsthed) og evnen til at opretholde hurtig fodafvikling (plantarfleksion) bagud, mens balancen holdes.

---

## Banens Mål & Opstilling

{% include figure image_path="/assets/images/tests/t-test-ill.webp" %}

Selvom testen ofte opstilles i yards ($10\text{--}5\text{--}5$ yards), er standarden i international litteratur og videnskabelige studier konverteret til præcise meter for at sikre reliabilitet. Banen skal opstilles på et skridsikkert underlag.

### Præcise banemål (Meter):
*   **A til B (Hovedakse):** $9{,}14\text{ meter}$.
*   **B til C (Venstre arm):** $4{,}57\text{ meter}$.
*   **B til D (Højre arm):** $4{,}57\text{ meter}$.
*   **Samlet bredde (C til D):** $9{,}14\text{ meter}$.
*   **Samlet løbedistance:** $36{,}56\text{ meter}$.

---

## Testprocedure & Strenge Regler

Reliabiliteten af T-Testen afhænger fuldstændigt af, at de tekniske regler overholdes strengt, især ved sideløbet.

### Trin-for-trin afvikling
1.  **Opvarmning:** 10–15 minutters dynamisk opvarmning med fokus på lyske, hofteadduktorer/-abduktorer, ankler og $2\text{--}3$ submaksimale gennemløb af banen.
2.  **Startposition:** Udøveren står med fødderne bag startlinjen ved kegle A, klar til start.
3.  **Startsignal:** Ved kommandoråbet *"KØR!"* (eller tidtagningens start) sprinter udøveren fremad.
4.  **Løberuten (se illustration i timeren):**
    *   Sprinter frem og rører bunden af kegle B med **højre hånd**.
    *   Laver lateralt sideløb (shuffling) til venstre uden at krydse fødderne, og rører bunden af kegle C med **venstre hånd**.
    *   Laver sideløb helt over til højre (forbi B), og rører bunden af kegle D med **højre hånd**.
    *   Laver sideløb tilbage til midten, og rører bunden af kegle B med **venstre hånd**.
    *   Løber hurtigst muligt baglæns tilbage til kegle A.
5.  **Tidtagning:** Tiden stoppes, når udøverens bryst krydser linjen ved kegle A.

> **Diskvalifikation / Om-omgang:** Forsøget er ugyldigt, hvis udøveren krydser fødderne under sideløbet, undlader at røre bunden af en kegle, rører en kegle med den forkerte hånd, eller drejer kroppen og løber forlæns i stedet for sidelæns/baglæns.

---

## ⏱️ Interaktiv Agility T-Test Timer
{: id="timer" }

Brug modulet nedenfor til at tage tid, tælle ned og registrere tider direkte fra telefonen eller computeren under testen på banen.

{% include components/t-test-timer.html %}

---

## Tolkning af Resultater & Normtal

Sluttiden vurderes i sekunder. Ligesom ved Illinois-testen er fodtøj, underlag og teknisk udførelse af svingene afgørende for resultatet.

### Normtabel for voksne mænd og kvinder ($18\text{--}35\text{ år}$)

| Vurdering / Kategori | Mænd (Sekunder) | Kvinder (Sekunder) |
| :--- | :--- | :--- |
| **Fremragende (Excellent)** | $< 9{,}50\text{ s}$ | $< 10{,}50\text{ s}$ |
| **Over middel (Above Average)** | $9{,}51\text{--}10{,}50\text{ s}$ | $10{,}51\text{--}11{,}50\text{ s}$ |
| **Middel (Average)** | $10{,}51\text{--}11{,}50\text{ s}$ | $11{,}51\text{--}13{,}50\text{ s}$ |
| **Under middel (Below Average)** | $11{,}51\text{--}12{,}50\text{ s}$ | $13{,}51\text{--}14{,}50\text{ s}$ |
| **Ringe (Poor)** | $> 12{,}50\text{ s}$ | $> 14{,}50\text{ s}$ |

### Hvad påvirker din tid?
*   **Sideløbsteknik (Shuffling):** Udøvere, der kan holde fødderne parallelle og "glide" hurtigt lateralt med korte, kraftfulde afsæt, sparer tid i forhold til dem, der tager for lange skridt eller næsten krydser fødderne.
*   **Tyngdepunktskontrol:** Evnen til at sænke hoften markant $1\text{ meter}$ før keglen, røre den hurtigt og øjeblikkeligt accelerere igen, er nøglen til en elitetid.
*   **Baglæns Hurtighed:** Mange udøvere taber tid på den sidste sektion, fordi de mangler tillid til at løbe hurtigt baglæns eller har dårlig proprioception.

---

## Målgruppe & Anvendelse

T-Testen er uundværlig i sportsgrene, der kræver hyppige, uforudsigelige retningsskift i et begrænset område:

*   **Basketball og Volleyball:** Svarer til defensive bevægelser, hvor man skal spejle en modstander lateral.
*   **Fodbold og Håndbold:** Simulerer situationer, hvor en forsvarsspiller skal omstille fra fremadrettet pres til sidelæns forflytning og baglæns tilbageløb.
*   **Tennis og Badminton:** Måler evnen til hurtigt at dække hele banen (frem til nettet, ud til sidelinjerne og tilbage til baglinjen).

---

## FAQ - Ofte Stillede Spørgsmål

{% include motionsplan/faq.html %}

<details markdown="1" class="references">
  <summary><h2 id="references">Referencer & Litteratur</h2></summary>

- **Semenick, D.** (1990). *Tests and measurements: The T-test.* Strength & Conditioning Journal, 12(1), 36–37.
- **Pauole, K., Madole, K., Garhammer, J., Lacourse, M., & Rozenek, R.** (2000). *Reliability and validity of the T-test as a measure of agility, leg power, and leg speed in college-age men and women.* Journal of Strength and Conditioning Research, 14(4), 443–450.
- **Munro, A. G., & Herrington, L. C.** (2011). *Between-session reliability of the T-test and Illinois agility test.* Journal of Strength and Conditioning Research, 25(5), 1479–1484.
</details>