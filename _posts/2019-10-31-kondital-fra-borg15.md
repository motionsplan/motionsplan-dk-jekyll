---
title: &title "Borg 15 konditest på cykel 🚴🚴‍♀️"
seo_title: "Borg 15 konditest på cykel"
permalink: /kondital-borg15/
excerpt: "Borg 15-testen eller _Graded Cycling Test with Talk Test_ er en submaksimal konditest på cykel, hvor forsøgspersonens kondital estimeres ud fra en test på en ergometercykel."
language: da
header:
  teaser: https://i.ytimg.com/vi/gEQ1M-NKHCA/maxresdefault.jpg
  caption: *title
category:
  - Kondition
meta:
  measures: VO2max og kondital
  type: cykeltest
  equipment: cykel
  max: submaksimal test
  direct: indirekte test
tags:
  - konditionstest
  - cykel
  - submaksimal test
  - indirekte test
  - cykeltest
  - test
  - testberegner
last_modified_at: 2019-10-31T23:14:14Z
toc: true
breadcrumbs: true
---

I Borg 15-testen cykler forsøgspersonen på et cykelergometer med en gradvist højere belastning, indtil arbejdet vurderes til at være “Anstrengende” i forhold til Borg-skalaen (15 er anstrengende på Borg-skalaen). Derefter estimeres konditallet ud fra den opnåede belastning på cykeltesten.

Konditionstesten Borg 15 har fået sit navn efter professor Gunnar Borg, som opfandt den. Senere kaldes den også på engelsk for _Graded Cycling Test with Talk Test_.

{% include figure image_path=page.header.teaser caption="Cykeltesten Borg 15 kan være med til at finde dit kondital med en submaksimal test" alt="Borg 15 cykeltest" %}

*[RPE]: Rate of Perceived Exertion

Fordelen med Borg 15-testen er, at den ikke ikke tager udgangspunkt i en anslået, [aldersbestemt maxpuls](/test-max-puls/), og at man kun skal arbejde på en intensitet op til ca. 65% af sin maksimale ydeevne.

Ulempen er selvfølgelig, at testresultatet er afhængigt af testpersonens egen subjektive opfattelse af anstrengelse. For at få det mest pålidelige resultat, skal du formentlig prøve Borg 15-testen nogle gange.

Inden du går i gang med at udføre testen, kan det være en god ide at læse grundigt op på [Borg-skalaen]({% link _posts/2020-06-18-borg-skala.md %}).

## Gennemførelse af Borg 15-cykeltest

1. Varm op i 2 minutter på kondicyklen uden belastning.
2. Kør testen med omkring 60 RPM.
3. Øg herefter belastningen med 15 watt for hvert minut.
4. I slutningen af hvert minut peger forsøgspersonen på sin subjektive vurdering af anstrengelse på Borg-skalaen. I beregneren bruges formler fra Okura og Tanaka (2001), som er baseret på følelsen i benene (og altså ikke følelsen på selve kredsløbet).
5. Når personen vurderer belastningen til at være 15 - altså "Anstrengende" - for benene er testen slut.
6. Du noterer watt, alder og vægt, som du kan indtaste i beregneren nedenunder for at udregne dit kondital.

## Borg-skalaen

{% comment %}

{% include figure image_path="https://hjerteforeningen.dk/wp-content/uploads/sites/14/2018/02/borg-skala-dorthe-768x1086.jpg" caption="Borg-skalaen fra [hjerteforeningen.dk](https://hjerteforeningen.dk)" alt="Borg-skalaen" %}

{% endcomment %}

Jeg har skrevet en mere udførlig artikel om selve [Borg-skalaen, hvor du også kan downloade Borg skala som PDF](/borg-skala/).

## Beregn kondital fra Borg 15-testen

{% include calculator/calculate-fitness-borg15.html %}

## Formlerne bag Borg 15-testen

Jeg har fundet formlen til beregneren i [Okura og Tanaka (2001)](https://doi.org/10.2114/jpa.20.255). Formlen for at udregne VO₂max med Borg 15-testen ser sådan her ud:

***

VO₂max = 1.19 * W<sub>Borg 15</sub> - 15.84 * age + 13.06 * weight + 1365

***

W er workload i kgm·min<sup>-1</sup> (kilogram-force meter/minute). Jeg bruger typisk watt-målinger, og dem er beregneren lavet på baggrund af. For at konvertere kgm·min<sup>-1</sup> deler du med tyngdekraften som i Danmark er 9,816 m/s<sup>2</sup> i følge [Wikipedia](https://da.wikipedia.org/wiki/Tyngdeacceleration) og ganger med 60 sekunder.

## Forbedring af Borg 15-cykeltesten

[Morten Zacho vurderer](https://www.motion-online.dk/borg-15-test/), at validiteten stiger, når Borg15-testen kobles sammen med en systematisk snakketest. Zacho foreslår, at man i slutningen af hvert minut får forsøgspersonen til at læse op af en tekst af ca. 10 sekunders varighed. Når oplæsningen bliver tydeligt og hørbart forstyrret af den øgede vejrtrækning, så er 15 nået på Borg-skalaen.

At en snakketest gør det lettere at finde niveauet for anstrengelse er undersøgt af [Persinger et al (2004)](https://pubmed.ncbi.nlm.nih.gov/15354048/), men det er mig bekendt ikke lavet studier, hvor snakketesten er blevet valideret i forhold til Borg 15-testen.

Jeg er ved at undersøge, om der er lavet valideringsstudier af testen under søgningen _Graded Cycling Test with Talk Test_.

## Konklusion på Borg 15-testen

Borg 15 testen er en submaksimal test, og den går op til omkring 250 watt. For meget veltrænede cyklister er det ret lavt, så derfor er formlen ikke så pålidelig, da de vil have vanskeligt ved at opnå "Anstrengende" på Borg-skalaen.

Okura og Tanaka (2001) fandt den bedste korrelation med VO₂max med følelsen af, hvor anstrengende arbejdet føles for benene, når de skulle angive arbejdets hårdhed på Borg-skalaen.

Selvom man bruger snakketesten og måske en pulsmåler som ekstra parametre, så skal forsøgspersonen altså kunne adskille belastningen på åndedrættet og benene i testen.

Borg 15-konditesten er valideret på 154 japanske mænd i alderen 20-64 år. Jeg har ikke kunnet finde studier, der validerer testen med kvinder eller andre befolkningsgrupper.

Du kan sammenligne dit kondital i [tabellen for kondital for mænd og kvinder](/kondital/).

<details markdown="1" class="references">
  <summary><h2 class="references">Referencer</h2></summary>

- Okura, T., og K. Tanaka. 2001. “A Unique Method for Predicting Cardiorespiratory Fitness Using Rating of Perceived Exertion”. Journal of Physiological Anthropology and Applied Human Science 20 (5): 255–61. <https://doi.org/10.2114/jpa.20.255>.
- R, Persinger, Foster C, Gibson M, Fater Dc, og Porcari Jp. 2004. “Consistency of the Talk Test for Exercise Prescription”. Medicine and Science in Sports and Exercise. Med Sci Sports Exerc. september 2004. <https://pubmed.ncbi.nlm.nih.gov/15354048/>.
</details>
