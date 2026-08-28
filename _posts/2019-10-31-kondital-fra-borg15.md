---
title: "Borg 15 Test: Beregn dit kondital på cykel 🚴"
seo_title: "Borg 15 Test, Timer & Beregner: Submaksimal Cykeltest"
permalink: /kondital-borg15/
excerpt: "Tag Borg 15-testen på cykel med vores interaktive timer. Beregn dit kondital og VO2max via validerede formler eller Eston & Faulkner ekstrapolering."
language: da
header:
  teaser: /assets/images/i.ytimg.com/maxresdefault-57623931.jpg
  credit: https://i.ytimg.com/vi/gEQ1M-NKHCA/maxresdefault.jpg
  caption: 'Borg 15 Test: Konditest på cykel'
categories:
  - Kondition
  - Konditionstests
meta:
  name: "Borg 15 Test"
  measures: "kondital, VO2max, Borg15"
  type: "cykeltest"
  equipment: "cykel"
  max: "submaksimal test"
  direct: "indirekte test"

# TESTS / PROTOKOLLER
tests:
  - id: "test-borg-15"
    title: "Borg 15 Cykeltest"
    description: "Submaksimal cykeltest med gradvist øget belastning (+15 W/min) indtil den oplevede anstrengelse i benene når niveau 15 (Anstrengende) på Borg-skalaen."
    category: ["Kondition", "Cykling"]
    type: ["Protokol", "Konditionstest"]
    execution: ["Fysisk"]
    method: "indirekte"
    modality: ["Cykling"]
    measures: ["Kondital", "VO2max", "Iltoptagelse"]
    equipment: ["Kondicykel", "Wattmåler", "Borg-skala"]
    setting: ["Fitnesscenter", "Klinik", "Laboratorietest", "Individuel"]
    target_group: ["Unge", "Voksne", "Ældre", "Mænd", "Kvinder"]
    related_tools: ["tool-borg-15-beregner"]

# INTERAKTIVE SOFTWARE-VÆRKTØJER
tools:
  - id: "tool-borg-15-beregner"
    title: "Borg 15 Kondital Beregner & Test Timer"
    description: "Interaktiv timer og beregner til Borg 15 cykeltesten. Beregn VO2max ud fra alder, vægt, køn og opnåede watt."
    category: ["Kondition"]
    type: ["Beregner", "Timer"]
    execution: ["Testberegner"]
    anchor: "#calculator"
    category_schema: "HealthAndFitnessApplication"

tags:
  - borg 15 test
  - borg 15
  - borg15
  - cykeltest
  - konditionstest
  - submaksimal test
  - indirekte test
  - testberegner
  - eston faulkner

last_modified_at: '2026-08-28T12:00:00Z'
toc: true
breadcrumbs: true

faq:
  - question: "Hvad er Borg 15 testen?"
    answer: "Borg 15-testen er en submaksimal cykeltest, hvor du øger belastningen på en kondicykel med 15 watt i minuttet, indtil anstrengelsen i benene når niveau 15 (Anstrengende) på Borg-skalaen."
  - question: "Hvor meget stiger belastningen i en Borg 15 cykeltest?"
    answer: "Efter to minutters let opvarmning (30 W) stiger belastningen på cyklen med 15 watt for hvert minut med en jævn kadence på omkring 60 RPM."
  - question: "Hvilken formel bruges til at beregne kondital fra Borg 15?"
    answer: "Beregneren anvender automatisk Okura & Tanaka (2001) for raske voksne, Coquart et al. (2009) ved BMI over 30, eller Eston & Faulkner lineær ekstrapolering, hvis der er registreret RPE på flere trin."
  - question: "Hvad er forskellen på Borg 15 og Graded Cycling Test (GCT-TT)?"
    answer: "Begge protokoller øger belastningen med 15 watt pr. minut. Borg 15-testen bruger subjektiv anstrengelse i benene (Borg 15) som stopkriterium, mens GCT-TT bruger Talk Testen (hvornår du ikke længere kan tale ubesværet)."
---

I **Borg 15-testen** (også omtalt som Borg15 cykeltest) cykler forsøgspersonen på et cykelergometer med en gradvist højere belastning, indtil arbejdet vurderes til at være “Anstrengende” i forhold til Borg-skalaen (niveau 15). Derefter [estimeres konditallet](/kondital/) ud fra den opnåede belastning i watt.

[Konditionstesten](/kondition/tests/) Borg 15 har fået sit navn efter professor Gunnar Borg, som opfandt den fysiologiske anstrengelsesskala. På engelsk omtales en videreudvikling af testen ofte som *Graded Cycling Test with Talk Test*.

> 💡 **Leder du efter selve anstrengelsesskalaen eller en PDF til print?**  
> Hvis du vil lære teorien bag skalaen eller downloade skemaet, skal du gå til vores [guide til Borg-skalaen](/borg-skala/). Denne side er udelukkende til udførelse og beregning af **Borg 15 konditionstesten**.
{: .notice--info }

{% include figure image_path=page.header.teaser caption="Cykeltesten Borg 15 kan være med til at estimere dit kondital via en submaksimal test." alt="Borg 15 cykeltest" %}

*[RPE]: Rate of Perceived Exertion

Fordelen ved Borg 15-testen er, at den ikke tager udgangspunkt i en anslået, [aldersbestemt maxpuls](/max-puls-beregner/), og at man kun skal arbejde med en intensitet op til ca. 65% af sin maksimale ydeevne. Testen er derfor meget skånsom.

Ulempen er selvfølgelig, at testresultatet er stærkt afhængigt af testpersonens egen subjektive opfattelse af anstrengelse. For at få det mest pålidelige resultat, skal du formentlig prøve Borg 15-testen et par gange for at kende din krops signaler.

Inden du går i gang med at udføre testen, er det en god ide at læse grundigt op på [Borg-skalaen](/borg-skala/).

## Sådan udføres en Borg 15 test

1. **Opvarmning:** Varm op i 2 minutter på kondicyklen uden belastning.
2. **Kadence:** Kør testen med en stabil kadence på omkring 60 RPM (omdrejninger pr. minut).
3. **Belastning:** Øg herefter belastningen med 15 watt for hvert minut.
4. **Vurdering:** I slutningen af hvert minut peger forsøgspersonen på sin subjektive vurdering af anstrengelse på Borg-skalaen. *Bemærk:* I denne beregner bruges forskellige formler, som er baseret specifikt på følelsen **i benene** (og altså ikke den samlede følelse af belastning på kredsløbet).
5. **Afslutning:** Når personen vurderer belastningen for benene til at være 15 – altså "Anstrengende" – er testen slut.
6. **Beregning:** Du noterer den opnåede watt-belastning, alder og vægt, som du efterfølgende indtaster i beregneren nedenunder for at udregne dit kondital - eller du kan lade timeren guide dig igennem hele testen.

## Beregn kondital fra Borg 15-testen
{: id="calculator" }

Indtast dine resultater fra cykeltesten herunder for at estimere din maksimale iltoptagelse (VO₂max) og dit kondital.

{% include components/borg15-gcttt-timer.html %}

---

## Formlerne bag Borg 15-testen

Beregneren tager udgangspunkt i formlen fra [Okura og Tanaka (2001)](https://doi.org/10.2114/jpa.20.255). Formlen estimerer den maksimale iltoptagelse ($\text{VO}_{2\text{max}}$ i ml/min) direkte ud fra den opnåede belastning ved Borg 15:

$$\text{VO}_{2\text{max}} = 1{,}19 \times W_{\text{Borg 15}} - 15{,}84 \times \text{alder} + 13{,}06 \times \text{v\ae gt} + 1365$$

* **$W_{\text{Borg 15}}$:** Belastningen målt i $\text{kgm}\cdot\text{min}^{-1}$. Da kondicykler måler i watt, omregner beregneren automatisk inputtet ($1 \text{ W} \approx 6{,}12 \text{ kgm}\cdot\text{min}^{-1}$).
* **Alder:** Målt i år.
* **Vægt:** Målt i kg.

Det beregnede resultat i ml/min divideres med kropsvægten for at finde det endelige, relative kondital (ml $\text{O}_2$/min/kg).

---

**W** er *workload* målt i kgm·min⁻¹ (kilogram-force meter/minute). Da de fleste moderne cykler måler i watt, er beregneren bygget til at modtage watt-målinger. 

For at konvertere kgm·min⁻¹ til watt deler man med tyngdeaccelerationen, som i Danmark er $9{,}816 \text{ m/s}^2$ ifølge [Wikipedia](https://da.wikipedia.org/wiki/Tyngdeacceleration), og ganger med 60 sekunder.

---

### Alternative fysiologiske modeller

Selvom Okura & Tanaka (2001) er standarden for denne specifikke protokol, anvendes der i træningsfysiologien også andre tilgange til at estimere iltoptagelse ud fra Borg-skalaen:

* **Coquart-modellen (overvægtige og kliniske grupper):**  
  Okura & Tanakas formel er valideret på raske mænd. Til overvægtige eller kliniske populationer benyttes i stedet specifikke modeller som Coquart et al., der tager højde for lavere watt-ydelse ved samme oplevede anstrengelse:
  $$\text{VO}_{2\text{peak}} \text{ (L/min)} = 1{,}355 - 0{,}00992 \times \text{alder} + 0{,}0085 \times P_{\text{Borg 15}}$$
* **Lineær ekstrapolering (Eston & Faulkner-metoden):**  
  I stedet for kun at beregne ud fra ét skæringspunkt ved Borg 15, registreres watt og puls ved flere trin (fx Borg 11, 13 og 15). Punkterne forbindes i en lineær regression og ekstrapoleres op til teoretisk max (Borg 20 eller max-puls). Dette reducerer usikkerheden ved dagsformsbetingede svingninger på ét enkelt trin.

---

## Borg 15 vs. Graded Cycling Test with Talk Test (GCT-TT)

I praksis og i klinisk genoptræning overlapper Borg 15-testen ofte med **Graded Cycling Test with Talk Test (GCT-TT)**. Begge protokoller øger belastningen med 15 watt pr. minut efter 2 minutters opvarmning.

Forskellen ligger primært i stopkriteriet:

* **Borg 15:** Stopper, når forsøgspersonen vurderer anstrengelsen i benene til niveau 15.
* **GCT-TT:** Stopper, når vejrtrækningen forstyrrer taleevnen hørbart (den ventilatoriske tærskel).

I Graded Cycling Test bruger man [snakketesten](/snakketest/) som parameter for stop. Dette parameter kunne man sagtens indføre i Borg 15-testen. På den måde vil validiteten formentlig stige markant. Ved at lade forsøgspersonen læse en kort standardtekst højt i slutningen af hvert minut, får du et objektivt pejlemærke for, hvornår Borg 15 reelt er nået.

At en snakketest gør det lettere at finde niveauet for anstrengelse er undersøgt af [Persinger et al. (2004)](https://pubmed.ncbi.nlm.nih.gov/15354048/), men der er mig bekendt endnu ikke lavet studier, hvor snakketesten er blevet formelt valideret i direkte relation til Okura og Tanakas formel for Borg 15-testen. 

## Validitet og målgruppe

Det er vigtigt at bemærke, at Borg 15-konditestens formel er valideret på et begrænset grundlag af 154 japanske mænd i alderen 20-64 år. Jeg har indtil videre ikke kunnet finde faglige studier, der validerer testens algoritme specifikt på kvinder eller andre befolkningsgrupper, hvorfor resultatet skal ses som et velkvalificeret estimat.

Når du har fundet dit tal, kan du sammenligne dit resultat i [tabellen for kondital for mænd og kvinder](/kondital/).

## Konklusion på Borg 15-testen

Borg 15-testen er en submaksimal test, og belastningen stiger typisk op til maksimalt omkring 250 watt for almindelige motionister. For meget veltrænede cykelryttere er dette niveau ret lavt, og formlen er derfor ikke pålidelig for eliteudøvere, da de vil have vanskeligt ved at opnå følelsen "Anstrengende" (Borg 15) i benene ved så lave watt-tal.

Okura og Tanaka (2001) fandt den bedste korrelation mellem testen og den reelle VO₂max ud fra følelsen af, hvor anstrengende arbejdet føltes **for benene**.

Selvom man supplerer med en snakketest og eventuelt en pulsmåler, skal forsøgspersonen altså være i stand til at adskille belastningen på åndedrættet og den muskulære træthed i benene, når testen udføres.

---

## Ofte stillede spørgsmål

{% include motionsplan/faq.html %}

<details markdown="1" class="references">
  <summary><h2 id="references">Referencer</h2></summary>

- Okura, T., og K. Tanaka. 2001. “A Unique Method for Predicting Cardiorespiratory Fitness Using Rating of Perceived Exertion”. *Journal of Physiological Anthropology and Applied Human Science* 20 (5): 255–61. <https://doi.org/10.2114/jpa.20.255>.
- Persinger, R., C. Foster, M. Gibson, D. C. Fater, og J. P. Porcari. 2004. “Consistency of the Talk Test for Exercise Prescription”. *Medicine and Science in Sports and Exercise*. September 2004. <https://pubmed.ncbi.nlm.nih.gov/15354048/>.
- Coquart, J. B., M. Garcin, A. Parfitt, E. Tourny-Chollet, og R. G. Eston. 2014. “Prediction of Peak Oxygen Uptake from Rating of Perceived Exertion during a Submaximal Exercise Test on a Cycle Ergometer”. *Journal of Sports Sciences* 32 (13): 1255–63. <https://doi.org/10.1080/02640414.2014.889844>.
- Eston, R. G., og K. L. Faulkner. 2007. “Ratings of Perceived Exertion for the Prediction of Maximal Oxygen Uptake”. *Sports Medicine* 37 (12): 1027–44. <https://doi.org/10.2165/00007256-200737120-00002>.
</details>