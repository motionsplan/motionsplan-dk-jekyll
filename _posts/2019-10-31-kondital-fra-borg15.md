---
title: "Borg 15 Test: Beregn dit kondital på cykel 🚴"
seo_title: "Borg 15 Test & Beregner: Submaksimal Cykeltest til Kondital"
permalink: /kondital-borg15/
excerpt: "Tag Borg 15-testen på cykel og beregn dit kondital. En skånsom submaksimal konditest baseret på Borg-skalaen og watt."
language: da
header:
  teaser: /assets/images/i.ytimg.com/maxresdefault-57623931.jpg
  credit: https://i.ytimg.com/vi/gEQ1M-NKHCA/maxresdefault.jpg
  caption: 'Borg 15 Test: Konditest på cykel'
category:
  - Kondition
  - Konditionstests
meta:
  name: "Borg 15 Test"
  measures: "kondital, VO2max"
  type: "cykeltest"
  equipment: "cykel"
  max: "submaksimal test"
  direct: "indirekte test"
# TESTS / PROTOKOLLER
tests:
  - id: "test-borg-15"
    title: "Borg 15 Cykeltest"
    description: "Submaksimal cykeltest med gradvist øget belastning (15 W/min) indtil den oplevede anstrengelse i benene når niveau 15 (Anstrengende) på Borg-skalaen."
    category: ["Kondition", "Cykling"]        # 💡 Søgbar under BÅDE Kondition og Cykling i test-databasen
    type: ["Protokol", "Konditionstest"]
    execution: ["Fysisk"]
    method: "indirekte"                  # 🧮 Indirekte test: Måler opnået watt ved Borg 15 RPE for at beregne VO2max
    modality: ["Cykling"]
    measures: ["Kondital", "VO2max", "Iltoptagelse"]
    equipment: ["Kondicykel", "Wattmåler", "Borg-skala"]
    setting: ["Fitnesscenter", "Klinik", "Laboratorietest", "Individuel"]
    target_group: ["Unge", "Voksne", "Ældre", "Mænd", "Kvinder"]
    related_tools: ["tool-borg-15-beregner"]

# INTERAKTIVE SOFTWARE-VÆRKTØJER
tools:
  - id: "tool-borg-15-beregner"
    title: "Borg 15 Kondital Beregner"
    description: "Beregn dit kondital og VO2max ud fra alder, vægt og dine opnåede watt på Borg 15 cykeltesten."
    category: ["Kondition"]
    type: ["Beregner"]
    execution: ["Testberegner"]
    anchor: "#calculator"
    category_schema: "HealthAndFitnessApplication"
tags:
  - test
  - konditionstest
  - cykling
  - submaksimal test
  - indirekte test
  - cykeltest
  - testberegner
last_modified_at: '2026-07-28T12:00:00Z'
toc: true
breadcrumbs: true
faq:
  - question: "Hvad er Borg 15 testen?"
    answer: "Borg 15-testen er en submaksimal cykeltest, hvor du gradvist øger belastningen på en kondicykel, indtil anstrengelsen i benene føles som niveau 15 (anstrengende) på Borg-skalaen. Ud fra de opnåede watt estimeres dit kondital."
  - question: "Hvor meget stiger belastningen i en Borg 15 test?"
    answer: "Efter to minutters let opvarmning stiger belastningen på cyklen med 15 watt for hvert minut, du cykler. Du skal holde en jævn kadence på omkring 60 RPM under hele testen."
---

I **Borg 15-testen** cykler forsøgspersonen på et cykelergometer med en gradvist højere belastning, indtil arbejdet vurderes til at være “Anstrengende” i forhold til Borg-skalaen (niveau 15). Derefter estimeres konditallet ud fra den opnåede belastning i watt.

Konditionstesten Borg 15 har fået sit navn efter professor Gunnar Borg, som opfandt den fysiologiske anstrengelsesskala. På engelsk omtales en videreudvikling af testen ofte som *Graded Cycling Test with Talk Test*.

> 💡 **Leder du efter selve anstrengelsesskalaen eller en PDF til print?**  
> Hvis du vil lære teorien bag skalaen eller downloade skemaet, skal du gå til vores [store guide om Borg-skalaen](/borg-skala/). Denne side er udelukkende til udførelse og beregning af **Borg 15 konditionstesten**.
{: .notice--info }

{% include figure image_path=page.header.teaser caption="Cykeltesten Borg 15 kan være med til at estimere dit kondital via en submaksimal test." alt="Borg 15 cykeltest" %}

*[RPE]: Rate of Perceived Exertion

Fordelen ved Borg 15-testen er, at den ikke tager udgangspunkt i en anslået, [aldersbestemt maxpuls](/max-puls-beregner/), og at man kun skal arbejde med en intensitet op til ca. 65% af sin maksimale ydeevne. Testen er derfor meget skånsom.

Ulempen er selvfølgelig, at testresultatet er stærkt afhængigt af testpersonens egen subjektive opfattelse af anstrengelse. For at få det mest pålidelige resultat, skal du formentlig prøve Borg 15-testen et par gange for at kende din krops signaler.

Inden du går i gang med at udføre testen, er det en god ide at læse grundigt op på [Borg-skalaen](/borg-skala/).

## Gennemførelse af Borg 15-cykeltest

1. **Opvarmning:** Varm op i 2 minutter på kondicyklen uden belastning.
2. **Kadence:** Kør testen med en stabil kadence på omkring 60 RPM (omdrejninger pr. minut).
3. **Belastning:** Øg herefter belastningen med 15 watt for hvert minut.
4. **Vurdering:** I slutningen af hvert minut peger forsøgspersonen på sin subjektive vurdering af anstrengelse på Borg-skalaen. *Bemærk:* I denne beregner bruges formler fra Okura og Tanaka (2001), som er baseret specifikt på følelsen **i benene** (og altså ikke den samlede følelse af belastning på kredsløbet).
5. **Afslutning:** Når personen vurderer belastningen for benene til at være 15 – altså "Anstrengende" – er testen slut.
6. **Beregning:** Du noterer de opnåede watt, alder og vægt, som du efterfølgende indtaster i beregneren nedenunder for at udregne dit kondital.

## Beregn kondital fra Borg 15-testen
{: id="calculator" }

Indtast dine resultater fra cykeltesten herunder for at estimere din maksimale iltoptagelse (VO₂max) og dit kondital.

{% include calculator/calculate-fitness-borg15.html %}

---

## Formlerne bag Borg 15-testen

Jeg har fundet formlen til beregneren i [Okura og Tanaka (2001)](https://doi.org/10.2114/jpa.20.255). Formlen for at udregne VO₂max med Borg 15-testen ser sådan her ud:

***

$\text{VO}_2\text{max} = 1{,}19 \times W_{\text{Borg 15}} - 15{,}84 \times \text{alder} + 13{,}06 \times \text{vægt} + 1365$

***

**W** er *workload* målt i kgm·min⁻¹ (kilogram-force meter/minute). Da de fleste moderne cykler måler i watt, er beregneren bygget til at modtage watt-målinger. 

For at konvertere kgm·min⁻¹ til watt deler man med tyngdeaccelerationen, som i Danmark er $9{,}816 \text{ m/s}^2$ ifølge [Wikipedia](https://da.wikipedia.org/wiki/Tyngdeacceleration), og ganger med 60 sekunder.

## Forbedring af Borg 15-cykeltesten (Talk Test)

[Morten Zacho vurderer](https://www.motion-online.dk/borg-15-test/){:rel="nofollow"}, at validiteten af testen stiger, når Borg 15-testen kobles sammen med en systematisk "snakketest" (Talk Test). 

Zacho foreslår, at man i slutningen af hvert minut får forsøgspersonen til at læse op af en tekst af ca. 10 sekunders varighed. Når oplæsningen bliver tydeligt og hørbart forstyrret af den øgede vejrtrækning og mangel på luft, er niveau 15 nået på Borg-skalaen.

At en snakketest gør det lettere at finde niveauet for anstrengelse er undersøgt af [Persinger et al. (2004)](https://pubmed.ncbi.nlm.nih.gov/15354048/), men der er mig bekendt endnu ikke lavet studier, hvor snakketesten er blevet formelt valideret i direkte relation til Okura og Tanakas formel for Borg 15-testen. 

*Jeg undersøger løbende, om der udgives valideringsstudier af testen under søgetermen "Graded Cycling Test with Talk Test".*

## Konklusion på Borg 15-testen

Borg 15-testen er en submaksimal test, og belastningen stiger typisk op til maksimalt omkring 250 watt for almindelige motionister. For meget veltrænede cykelryttere er dette niveau ret lavt, og formlen er derfor ikke pålidelig for eliteudøvere, da de vil have vanskeligt ved at opnå følelsen "Anstrengende" (Borg 15) i benene ved så lave watt-tal.

Okura og Tanaka (2001) fandt den bedste korrelation mellem testen og den reelle VO₂max ud fra følelsen af, hvor anstrengende arbejdet føltes **for benene**.

Selvom man supplerer med en snakketest og eventuelt en pulsmåler, skal forsøgspersonen altså være i stand til at adskille belastningen på åndedrættet og den muskulære træthed i benene, når testen udføres.

### Validitet og målgruppe
Det er vigtigt at bemærke, at Borg 15-konditestens formel er valideret på et begrænset grundlag af 154 japanske mænd i alderen 20-64 år. Jeg har indtil videre ikke kunnet finde faglige studier, der validerer testens algoritme specifikt på kvinder eller andre befolkningsgrupper, hvorfor resultatet skal ses som et velkvalificeret estimat.

Når du har fundet dit tal, kan du sammenligne dit resultat i [tabellen for kondital for mænd og kvinder](/kondital/).

---

## Ofte stillede spørgsmål

{% include motionsplan/faq.html %}

<details markdown="1" class="references">
  <summary><h2 id="references">Referencer</h2></summary>

- Okura, T., og K. Tanaka. 2001. “A Unique Method for Predicting Cardiorespiratory Fitness Using Rating of Perceived Exertion”. *Journal of Physiological Anthropology and Applied Human Science* 20 (5): 255–61. <https://doi.org/10.2114/jpa.20.255>.
- Persinger, R., C. Foster, M. Gibson, D. C. Fater, og J. P. Porcari. 2004. “Consistency of the Talk Test for Exercise Prescription”. *Medicine and Science in Sports and Exercise*. September 2004. <https://pubmed.ncbi.nlm.nih.gov/15354048/>.
</details>