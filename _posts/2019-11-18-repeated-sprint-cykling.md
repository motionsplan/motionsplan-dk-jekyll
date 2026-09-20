---
title: "Repeated Sprint Test på cykel (5 x 6 sekunder)"
seo_title: "Repeated Sprint Test på cykel: Mål anaerob kapacitet og Fatigue Index"
permalink: /repeated-sprint-test-cykling/
description: "Lær hvordan en gentagen 6-sekunders sprinttest (Repeated Sprint Ability) måler din anaerobe kapacitet, Fatigue Index og Sdec. Inkl. gratis beregnere."
excerpt: "Ved at gentage 6-sekunders sprints med korte pauser kan du kortlægge din anaerobe kapacitet og evnen til at genoplade det eksplosive system hurtigt."
language: da
header:
  teaser: /assets/images/i.ytimg.com/maxresdefault-edd65ea2.jpg
categories:
  - Cykling
  - Cykeltests
tags:
  - test
  - anaerob
  - cykeltest
meta:
  name: Repeated Sprint Test Cykling
  measures: anaerob kapacitet, fatigue index, Sdec
  type: cykeltest
  equipment: cykelergometer
  max: maksimal test
tests:
  - id: "test-repeated-sprint-cykel"
    title: "Repeated Sprint Test Cykling (5x6 sek)"
    description: "Gentagen sprinttest (5 x 6 sek) til bestemmelse af anaerob kapacitet, udholdenhed og Fatigue Index."
    category: ["Cykling", "Sprint"]
    type: ["Protokol"]
    execution: ["Fysisk"]                  
    method: "direkte"                      
    modality: ["Cykling"]
    measures: ["Fatigue Index", "Sdec", "Anaerob kapacitet"]
    equipment: ["Cykelergometer", "Wattbike", "Wattmåler", "Stopur"]
    setting: ["Fitnesscenter", "Klinik", "Laboratorietest", "Individuel"]
    target_group: ["Motionister", "Atleter", "Unge", "Voksne", "Mænd", "Kvinder"]
    related_tools:
      - "tool-6sek-fatigue-index-beregner"
      - "tool-6sek-sdec-beregner"

tools:
  - id: "tool-6sek-fatigue-index-beregner"
    title: "Fatigue Index Beregner (FI)"
    description: "Beregn træthedsindekset (Fatigue Index) ud fra bedste og dårligste sprint."
    category: ["Cykling"]
    type: ["Beregner"]
    measures: ["Fatigue Index", "FI"]
    anchor: "#fatigue-index-fi"
    category_schema: "HealthAndFitnessApplication"

  - id: "tool-6sek-sdec-beregner"
    title: "Percentage Decrement Score Beregner (Sdec)"
    description: "Beregn den procentvise nedgang (Sdec) på tværs af alle sprints i en 5 x 6 sekunders test."
    category: ["Cykling"]
    type: ["Beregner"]
    measures: ["Percentage Decrement Score", "Sdec"]
    anchor: "#percentage-decrement-score-sdec"
    category_schema: "HealthAndFitnessApplication"
last_modified_at: 2026-09-15T12:00:00Z
toc: true
templates:
  - id: "repeated_sprints_resultatark"
    title: "Resultatark til Repeated 6 sek sprint test"
    description: "Her er et resultatark i Google Sheets, hvis du laver øvelser med repeated sprint test. På arket kan du registrere en test."
    format: "Google Sheets / Excel"
    type: "sheet"
    btn_text: "📊 Få Google Sheets"
    url: "https://docs.google.com/spreadsheets/d/1OvH6YcnCu_ucV92GLIZ9h2paWhc2G0xClW2twg54umA/copy#gid=499201424"
    image: "/assets/images/freebies/repeated-sprints-results.png"
---

*[AF]: Anaerobic fatigue / fatigue index (%)
*[FI]: Fatigue Index
*[Sdec]: Percentage Decrement Score

Mens en enkelt [6-sekunders peak power test](/6sek/) viser dit absolutte loft for kraftudvikling, tester en **Repeated Sprint Test (RSA)** din evne til at fastholde denne kraft gentagne gange. 

Ved at gentage testen kan man måle den anaerobe kapacitet; altså evnen til at genopbygge sine CrP-depoter og ATP-depoter rigtig hurtigt under korte pauser.

*(Bemærk: Leder du efter en repeated sprint test til løb? Se vores guide til [RAST-testen](/rast-test/).)*

---

## Hvordan laver du en gentagen 6 sekunders test på cykel?

Testen udføres typisk som **5 x 6 sekunders sprints**, hvor pausen mellem hver sprint er præcis 24 sekunder. Det betyder, at du starter en ny sprint hver 30. sekund (6 sek sprint + 24 sek pause).

Opvarmningen er den samme som ved den almindelige [peak power test](/6sek/). Herunder har vi lavet en lille timer, du kan bruge til at styre intervallerne:

{% include components/repeated-sprint-bike-timer.html %}

Testen lader dig primært måle følgende:
- **Total power:** Det samlede arbejde (watt) i perioden.
- **Træthed:** Faldet i kraft over de fem sprints, som oftest udregnes som enten **Fatigue Index** eller **S<sub>dec</sub>**.

Der er to primære måder at udregne dette fald på.

### Fatigue Index (FI)

**Fatigue index (FI)** er forskellen mellem det *bedste* og *værste* forsøg, delt med det bedste forsøg. Det kan udregnes ud fra denne formel:

$$
\text{FI} = 100 \times \frac{S_{\text{bedste}} - S_{\text{dårligste}}}{S_{\text{bedste}}}
$$

Ulempen ved at bruge Fatigue Index er, at den kun kigger på to datapunkter. Hvis en enkelt sprint midt i testen går galt på grund af en gearfejl eller et dårligt tråd, tages der ikke højde for det i den samlede score.

{% include calculator/calculate-6sek-fatigue-index.html %}

### Percentage Decrement Score ($S_{\text{dec}}$)

Man kan i stedet bruge **percentage decrement score ($S_{\text{dec}}$)**, som tager højde for *alle* sprints. Denne formel gælder, når du har målt **power** (som i modsætning til tid vil falde hen over de enkelte sprints).

$$
S_{\text{dec}} = \left(1 - \frac{S_1 + S_2 + \dots + S_{\text{sidste}}}{S_{\text{bedste}} \times \text{antal sprints}}\right) \times 100
$$

*(Hvis du i stedet regner på løb - f.eks. RAST - hvor tiderne bliver langsommere/højere, skal formlen vendes om: $S_{\text{dec}} = \left(\frac{S_1 + S_2 + \dots + S_{\text{sidste}}}{S_{\text{bedste}} \times \text{antal sprints}} - 1\right) \times 100$)*

Glaister et al. undersøgte 8 forskellige måder at måle træthed på, og de fandt, at S<sub>dec</sub> var den mest valide og reliable metode til at bestemme træthed i gentagne sprints.

{% include calculator/calculate-6sek-sdec.html %}

{% include figure image_path="/assets/images/d3i71xaburhd42.cloudfront.net/5-Figure4-1-275cc2e2.png" caption="_Peak power output_ under den maksimale 5x6 sek _repeated-sprint cycling test_ udført om morgenen og om aftenen. Læg mærke til, at den første sprint om aftenen havde et højere power output, men de følgende sprints var ikke forskellige fra morgen til aften. Det skabte en større beregnet nedgang i sprinten (indikeret med *). Kilde: [Girard 2011](https://www.researchgate.net/publication/51513211_Repeated-Sprint_Ability_Part_I_Factors_Contributing_to_Fatigue). [📷](https://d3i71xaburhd42.cloudfront.net/f169aebde85ab68ed27c256fe8fc9ec8080bbb8e/5-Figure4-1.png){: rel='nofollow noopener' }" %}

---

## Fysiologien bag gentagne sprints

Det må forventes, at din power falder hen over de 5 sprints. Længden på pausen har en enorm indflydelse på, hvor meget kraft du kan generere.

Som det ses herunder, ville man med fx 2 minutters pause i højere grad kunne genopbygge CrP- og ATP-depoterne og køre _all out_ i alle sprints. Med kun 24 sekunders pause tvinges kroppen ud i voldsom træthed:

{% include figure image_path="/assets/images/d3i71xaburhd42.cloudfront.net/3-Figure2-1-c023baff.png" caption="Effekt af pausen på en maksimal 4 sekunders sprint. _Intermittent sprints_ blev udført med 2 minutters pause, mens _repeated sprints_ blev udført hver 30. sekund. (*) indikerer at resultatet er signifikant forskelligt fra sprint 1. Kilde: Girard 2011. [📷](https://d3i71xaburhd42.cloudfront.net/f169aebde85ab68ed27c256fe8fc9ec8080bbb8e/3-Figure2-1.png){: rel='nofollow noopener' }" %}

### Ændring i energisystemer

Når sprints gentages med kort pause, vil andelen af det **aerobe arbejde** (iltkrævende arbejde) i sprinten blive relativt højere hen over de fem sprints, efterhånden som de anaerobe depoter tømmes. 

Dette fænomen er genialt illustreret i følgende to figurer:

{% include figure image_path="/assets/images/blog/girard-2011.png" caption="Ændringer i metabolismen under (a) den første og (b) den sidste sprint. Bemærk at området i hver cirkel repræsenterer den absolutte energi, som blev brugt. ATP = adenosine triphosphate; PCr = phosphocreatine. Kilde: Girard 2011." %}

Andelen af det aerobe arbejde bliver altså meget større til sidst. Her kan du se forskellen, hvor det aerobe arbejde under den 5. sprint ender med at være tæt på atletens maksimale iltoptagelse (VO₂max):

{% include figure image_path="/assets/images/d3i71xaburhd42.cloudfront.net/10-Figure8-1-ab204c11.png" caption="Når sprints gentages, er der en stigning i det aerobe bidrag til den enkelte sprint. Den stiplede linje repræsenterer VO₂max. AOD = accumulated oxygen deficit; VO₂ = oxygen uptake. Kilde: Girard 2011. [📷](https://d3i71xaburhd42.cloudfront.net/f169aebde85ab68ed27c256fe8fc9ec8080bbb8e/10-Figure8-1.png){: rel='nofollow noopener' }" %}

Dette fortæller os, at for at være rigtig god til *repeated sprints* (hvilket er yderst relevant i holdsport som fodbold eller håndbold), kræver det ikke blot anaerob power, men også en stærk **aerob motor** til at genopbygge systemerne i pauserne.

---

## Resultatark til Repeated 6 sekunders test

Vil du nemt holde styr på dine egne (eller dine atleters) resultater over tid, har vi lavet en Google Sheets-skabelon:

{% include motionsplan/templates.html id="repeated_sprints_resultatark" %}

<details markdown="1" class="references">
  <summary><h2 id="references">Referencer</h2></summary>
- Bishop D, Spencer M, Duffield R, Lawrence S. (2001) The validity of a repeated sprint ability test. J Sci Med Sport. 2001 Mar;4(1):19-29.
- Girard, Olivier, A Mendez-villanueva, David Bishop. Repeated-Sprint Ability — Part I. Sports medicine (2011). <https://www.researchgate.net/publication/51513211_Repeated-Sprint_Ability_Part_I_Factors_Contributing_to_Fatigue>
</details>