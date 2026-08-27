---
title: "Laktattest og Blodlaktattest: Guide, Testprotokol & Beregner"
seo_title: "Laktattest & Blodlaktattest – Guide til Laktattærskel + Beregner"
permalink: /laktattest/
excerpt: "Komplet guide til laktattest og blodlaktattest for løb og cykling. Udfør testen korrekt, fortolk din laktatkurve og beregn din aerobe og anaerobe tærskel."
description: "Komplet guide til laktattest og blodlaktattest for løb og cykling. Udfør testen korrekt, fortolk din laktatkurve og beregn din aerobe og anaerobe tærskel."
language: da
header:
  teaser: /assets/images/blog/lactate-testing.jpg
  caption: Blodlaktattest testprotokol til løbere og cykelryttere 🏃
categories:
  - Kondition
  - Konditionstests
classes: wide
meta:
  name: Laktattest / Blodlaktattest
  measures: LT1, LT2, AeT, AnT
  type: løbetest, cykeltest
  equipment: laktatmåler, lancetter
  max: submaksimal test / maksimal test
  direct: direkte test
tests:
  - id: "test-blodlaktattest"
    title: "Blodlaktattest (Laktattærskel Test)"
    description: "Standardiseret fysiologisk testprotokol til løb eller cykling (3–5 minutters trin med kapillær blodprøvetagning) til direkte måling af blodlaktatkoncentration samt bestemmelse af aerob (LT1) og anaerob (LT2) tærskel."
    category: ["Tests", "Kondition", "Løb", "Cykling"]
    type: ["Protokol", "Konditionstest"]
    execution: ["Fysisk"]                  # 🏃‍♂️ FYSISK TEST: Kræver fysisk belastning og kapillær blodprøvetagning
    method: "direkte"                     # 🩸 Direkte kemisk måling af laktatkoncentration (mmol/L) i blodet
    modality: ["Løb", "Cykling"]
    measures: ["LT1 (Aerob tærskel)", "LT2 (Anaerob tærskel)", "Blodlaktat (mmol/L)", "AeT", "AnT", "FatMax", "Træningszoner"]
    equipment: ["Blodlaktatmåler (fx Lactate Scout / Plus)", "Teststrimler", "Lancetter", "Løbebånd / Cykelergometer", "Pulsbælte"]
    setting: ["Laboratorium", "Testcenter", "Hjemmetest", "Individuel"]
    target_group: ["Løbere", "Cykelryttere", "Atleter", "Motionister", "Mænd", "Kvinder"]
    related_tools:
      - "tool-laktat-beregner"

# INTERAKTIVE SOFTWARE-VÆRKTOWJER
tools:
  - id: "tool-laktat-beregner"
    title: "Interaktiv Laktatberegner (LT1 & LT2)"
    description: "Interaktivt værktøj til automatisk bestemmelse, beregning og grafisk visualisering af dine aerobe (LT1) og anaerobe (LT2) laktattærskler baseret på fysiologiske modeller (Baseline+Delta, mDmax, Dmax, OBLA)."
    category: ["Kondition", "Beregnere", "Tests"]
    type: ["Beregner"]
    measures: ["LT1 (Aerob tærskel)", "LT2 (Anaerob tærskel)", "Laktatkurve", "Tærskelpuls", "Tærskel-watt / Tærskeltempo"]  # 🎯 Output-parametre fra beregneren
    anchor: "#calculator"
    category_schema: "HealthAndFitnessApplication"
tools:
  - title: "Interaktiv Laktatberegner til Laktattest"
    description: "Indtast laktatmålinger fra din laktattest og få beregnet dine tærskler automatisk."
    anchor: "#calculator"
    type: "beregner"
    measures: "LT1, LT2"
    category: "HealthAndFitnessApplication"
tags:
  - laktattest
  - blodlaktattest
  - laktat test
  - mælkesyretest
  - konditionstest
  - direkte test
  - løbetest
  - cykeltest
  - laboratorietest
last_modified_at: '2026-07-29T08:00:00Z'
faq:
  - question: Hvorfor starter laktatmålingerne sommetider på 2 mmol/l eller højere?
    answer: 'Der kan være et par forskellige grunde til dette usædvanlige forløb:
    1. Atleten er træt på forhånd. Hvis det er en lille ophobning af mælkesyre, vil værdierne sommetider stabilisere sig. Men uanset hvad er det vigtigt at komme frisk ind i testen.
    2. Atleten har spist sukkerholdig mad kort tid før testen. Typisk vil målingerne begynde at stabilisere sig på lavere niveauer gennem opvarmningen eller de første arbejdsintervaller.
    3. Ineffektivt aerob system eller aerob mangel. Atleten kan have en uudviklet aerob kapacitet og kan ikke forbruge den producerede laktat.'
  - question: Hvad er aerob mangel?
    answer: 'Sommetider ser man laktatniveauer, der starter over 2 mmol/l og fortsætter med at stige. Dette kan skyldes, at atleten har lavet meget højintensitetstræning mange gange om ugen. Det skærper det glykolytiske system. Hvis det ikke suppleres med træning i zone 1 og 2, som opbygger den aerobe base, står atleten tilbage med et underudviklet aerobt system. I nogle tilfælde er eneste mulighed ifølge Uphill Athlete at skære ned på højintensitetstræning og skifte til mere lav-intensiv træning.'
---

En **laktattest** (også kaldes en **blodlaktattest** eller mælkesyretest) giver indsigt i din træningstilstand, og hvordan kroppen arbejder ved forskellige intensiteter.

Hvor pulszoner baseret på teoretisk maxpuls eller pulsreserven ofte kan ramme ved siden af, måler en **laktat test** direkte på blodet under forskellige belastninger. Hvad enten du søger information om en laktattest til løb eller cykling, får du her en komplet guide til, hvordan du udfører testen korrekt, hvis du har adgang til en laktatmåler.

Efter at have læst denne artikel vil du vide, hvordan testen udføres, hvordan du undgår typiske målefejl, og hvordan du analyserer dine data for at identificere din **aerobe tærskel (AeT / LT1)** og **anaerobe tærskel (AnT / LT2)**.

En laktattest kræver tålmodighed, for det kræver både øvelse og præcision at lave pålidelige laktatmålinger. En laktattest kombineres ofte med en [direkte iltoptagelsestest i laboratoriet](/iltoptagelse-laboratorietest/) for at få det fulde billede af kondital og energiomsætning.

[<i class='fas fa-calculator'></i> Hop direkte til laktatberegneren](#calculator){: .btn .btn--success .btn--jump }

---

## Hvad tester en blodlaktattest?

Kroppens evne til at danne energi til muskelarbejde under træning og konkurrence beror overordnet set påto processer:

1. **De aerobe processer** (der foregår med ilt)
2. **De anaerobe processer** (der foregår uden ilt)

Den samlede energi, der leveres til muskelarbejdet, vil altid være en sum af de anaerobe og aerobe processer. De vil derfor i et konstant sammenspil levere energi til dine muskler.

Det relative bidrag fra de anaerobe processer bliver højere i løbet af en laktattest i takt med, at muskelarbejdets intensitet stiger. Når det anaerobe bidrag stiger, vil den enkelte muskelcelle på et tidspunkt ikke længere kunne forbrænde den producerede mælkesyre selv. Derfor sendes den overskydende mælkesyre ud i blodbanen for at blive *off-loaded* til andre muskelfibre. Det første punkt, hvor dette sker, kaldes den **aerobe tærskel (AeT / LT1)**.

På et senere tidspunkt i testen kan kroppen ikke længere fjerne laktaten lige så hurtigt, som den produceres. Kroppen er ikke længere i fysiologisk *steady state*. Det punkt, hvor kroppen lige netop stadig kan nå at fjerne laktaten i samme takt som den dannes, kaldes den **anaerobe tærskel (AnT / LT2)**.

{% include concept.html concept="lt1" %}
{% include concept.html concept="lt2" %}

{% include figure image_path="/assets/images/blog/lactate-testing.jpg" alt="Blodlaktattest udføres med laktatmåler" %}

---

## Laktatberegner (LT1 & LT2)
{: id="calculator" }

Har du gennemført en laktattest og står med dine målinger? Indtast dine tal i beregneren herunder for at få din laktatkurve - og vælg en af de fysiologisk validerede modeller for at finde dine tærskler, fx *Baseline + Delta* eller *Modificeret Dmax*.

{% include components/lactate-calculator.html %}

---

## Oversigt over laktatværdier: Hvad er normalt?

Når du udfører en laktattest, kan laktatniveauerne fysiologisk set inddeles i fire typiske faser. Bemærk, at vi her fokuserer på *stigningen* (delta) frem for faste tal:

| Fase / Tærskel | Typisk Laktatniveau | Hvad sker der i kroppen? |
| :--- | :--- | :--- |
| **Hvile / Opvarmning** | 0,8 – 2,5 mmol/L | Fuldstændig aerob forbrænding. Laktat fjernes lige så hurtigt, som det dannes. |
| **Aerob Tærskel (LT1)** | Baseline + 0,5 mmol/L | Første markante stigning. Fedtforbrændingen er maksimal (FatMax). |
| **Anaerob Tærskel (LT2)** | Baseline + 1,5 mmol/L | Maximal Lactate Steady State (MLSS). Sidste niveau hvor laktat kan stabiliseres. |
| **Maksimal belastning** | 8,0 – 18,0+ mmol/L | Udmattelse (*failure*). Anaerob glykolyse kører for fuldt tryk. |

---

### Myten om de faste grænser (2,0 og 4,0 mmol/L)

Hvis du har læst ældre fysiologibøger, har du sikkert stødt på reglen om, at den aerobe tærskel ligger ved præcis **2,0 mmol/L**, og den anaerobe tærskel (OBLA) ligger ved præcis **4,0 mmol/L**. 

**Disse faste grænser er i dag forældede.** De blev etableret i 1970'erne med ældre laboratorieudstyr, der analyserede ren *fuldblod*. Moderne laktatmålere analyserer i stedet ud fra en *plasma-ækvivalent* (hvilket indeholder 11-15 % mere laktat). Det betyder, at en fysiologisk grænse, der hed 4,0 i 1970'erne, i virkeligheden svarer til et højere tal på dit moderne udstyr. Samtidig er det helt normalt at have et hvilelaktat på 2,0 mmol/L på nyere apparater. 

Moderne idrætsfysiologi bruger derfor udelukkende **individuelle, relative tærskler** (stigninger i forhold til din egen baseline) – præcis som vores laktatberegner her på siden gør brug af.

### Vigtigt: Forskellen på laktatmålere og deres baseline

Når du fortolker dine målinger, er det afgørende at huske, at laktatmålere ikke kalibreres ens på tværs af mærker:

* **Forskellig baseline:** Producenterne benytter forskellige algoritmer til at matche laboratorieudstyret. Hvor det for nogle målere (fx **Lactate Scout 4**) oftest er normalt at starte testen helt nede på **0,8 – 1,4 mmol/L** i hvile, vil andre målere (fx **Lactate Pro 2**) helt naturligt og korrekt afspejle plasmaniveauet ved at ligge på **1,5 – 2,5 mmol/L** i hvile – uden at det betyder, at atleten er træt eller har spist sukker.
* **Kig kun på Delta (stigningen):** Du kan ikke sammenligne absolutte laktattal direkte på tværs af forskellige modeller. En måling på 2,0 mmol/L på én måler betyder fysiologisk noget andet end 2,0 mmol/L på en anden.

Når du skal identificere din **aerobe tærskel (LT1)** og **anaerobe tærskel (LT2)**, skal du derfor aldrig kigge blindt på det faste tal på skærmen, men i stedet fokusere på *stigningen* i forhold til din egen baseline på det specifikke apparat.

---

## Valg af en håndholdt blodlaktatmåler

For at udføre en laktattest har du brug for en præcis laktatmåler. En laktatmåling er meget følsom over for forurening af blodprøven og udstyrsfejl, så det er vigtigt at bruge en pålidelig model.

De mest anerkendte og udbredte målere på markedet tæller bl.a. **Lactate Scout 4**, **Lactate Pro 2** og **Lactate Plus**. De varierer i pris, svartid og ikke mindst prisen pr. teststrimmel (hvilket oftest er den største løbende udgift). På Vejle Idrætshøjskole har vi haft stor succes med både Lactate Scout og Lactate Pro 2.

> 🛒 **Vil du sammenligne laktatmålere?**  
> Prisen på laktatmålere og strimler varierer meget. Vi har samlet en dybdegående købsguide og sammenligning af præcision og driftsøkonomi for de mest populære modeller.  
> 👉 **[Læs vores store test af laktatmålere her →](/laktatmaaler-test/)**

---

## Sådan får du en god blodprøve

Når du skal tage blodprøven under en blodlaktattest, skal du være meget omhyggelig. Hvis der kommer de mindste urenheder (især sved) med i prøven, får du målinger, der er helt hen i vejret.

{% include video provider="youtube" id="80a7OHZFu-8" %}

<details markdown="1" class="faq">
  <summary>📌 Tips til en god og præcis blodprøve</summary>

- **Brug en passende lancet** – Den nål, du stikker med, skal være tyk og dyb nok til, at der kommer en tilstrækkelig dråbe blod ud uden kraftigt klem. Det reducerer fejlmålinger.
- **Undgå tyndt og vandigt blod** – Hvis blodet er meget flydende, kan det være forurenet med sved, eller atleten kan være overhydreret.
- **Forbered dit udstyr** – Hav alt klar, inden du starter: måler, strimler, lancet og papirhåndklæder.
- **Stabilisér din hånd** – Hvis du tester en anden person, så find en stabil position for at undgå rystelser. Du skal være meget præcis, så du kun berører selve bloddråben med måleren.
- **Varm hænderne op før testen** – Når det er koldt, hæmmes blodgennemstrømningen i fingrene, hvilket gør det svært at få en god prøve.
- **Tør den første dråbe væk** – Dette fjerner eventuelle urenheder og vævsvæske, som kan påvirke målingen.
- **Test den anden dråbe – uden at røre huden** – Når du tester blodet, skal du sikre dig, at strimlen kun berører bloddråben og aldrig huden.

</details>

---

## Blodlaktattest – Protokol for en præcis måling

For at udføre en blodlaktattest korrekt skal du tage prøver under opvarmningen og derefter ved slutningen af hver arbejdsperiode (typisk hvert 3.-5. minut).

### Forberedelse
- Nemmest at udføre på et løbebånd eller et cykelergometer, men gentagne runder på en udendørs bane kan også fungere.
- 💡 **Løbetip (1% hældning):** Ved laktattest på løbebånd anbefales det at indstille løbebåndet til **1% hældning** for at kompensere for den manglende vindmodstand i forhold til udendørs løb.
- Ingen faste er nødvendig, men undgå store måltider inden for 60 minutter før testen.
- Undgå koffein i mindst 4 timer før testen.
- Følg altid nøjagtig samme protokol ved gentagne tests for at få sammenlignelige resultater.
- **Tag en hvilelaktatmåling** før opvarmningen starter. Forhøjet hvilelaktat (over 2,0–2,5 mmol/L) kan indikere:
  - Øget glykolytisk aktivitet (fx pga. sukkerindtag før testen).
  - Manglende restitution eller dårlig fedtmetabolisme.

### Opvarmning
- Varm langsomt op i 15 minutter ved meget lav intensitet (Zone 1). Det tager tid at få startet det aerobe enzymsystem op.
- Tag en blodprøve under opvarmningen for at få et stabilt referencepunkt.

### Testprotokol
- **Start på en meget lav intensitet** – det kan endda være gang ved løbetests. Hvis du starter for hurtigt, risikerer du at misse den aerobe tærskel.
- **Arbejd i mindst 3-5 minutter pr. trin.** Dette er det mindste tidsrum før kroppen opnår *steady state* på det enkelte trin. Hvis du hæver intensiteten for hurtigt, kommer det aerobe system til at være bagefter hele tiden.
- **Øg intensiteten gradvist** – maksimalt 10-15 pulsslag pr. minut ad gangen (fx 1 km/t ved løb eller 20-30 Watt ved cykling).

---

## Sådan vælger du intensitet for første stadie

Under opvarmningen vil laktatniveauet normalt falde gradvist og derefter stige igen. Dette kan hjælpe med at fastlægge intensiteten for testens første trin:

- **Start med en lavere puls, end du tror er nødvendig.** Det er vigtigt at nærme sig den aerobe tærskel (AeT) langsomt nedefra. En langsom tilgang giver flere datapunkter, hvilket forbedrer testens kvalitet markant.
- **Brug mindst 3-minutters trin.** Længere trin på 4-5 minutter er endnu bedre til veltrænede udøvere.
- **Hæv intensiteten gradvist.** Hvert nyt trin bør øge pulsen med maks 10 slag.

---

## Hvornår skal testen stoppes?

Det kommer an på dit specifikke formål med laktattesten:

| Måling / Formål | Hvornår stoppes laktattesten? |
| :--- | :--- |
| **Kun Aerob tærskel (AeT / LT1)** | Stop testen, når laktatniveauet overstiger 3,0 mmol/L, eller når det er steget med 1,0 mmol/L fra det laveste punkt. |
| **Aerob & Anaerob tærskel (AeT & AnT)** | Stop testen, når laktatniveauet overstiger 4,0–5,0 mmol/L, eller når der har været en pludselig stejl stigning. |
| **Fuld laktatprofil (Maxtest / mDmax)** | Stop testen først, når atleten er udmattet og ikke kan opretholde kadencen/tempoet længere (*failure*). |

### Registrering af data
- Notér gennemsnitspuls, belastning (km/t eller watt) og laktatniveau for hvert intensitetsniveau.
- Hvis du får en urealistisk måling (fx 0,3 eller 13,6 mmol/L på et tidligt trin), så tag en ny prøve med det samme, inden du øger intensiteten.

---

## Hvad er den aerobe tærskel (AeT / LT1)?

Ved at bruge en laktatmåler kan vi fastslå din aerobe tærskel præcist. Denne tærskel markerer det øverste niveau af din zone 2-træning, og testen kan afsløre, om du lider af "aerob mangel".

Når du skal identificere LT1 på din laktatkurve, anbefaler vi kraftigt, at du fokuserer på den *relative stigning* frem for faste tal:

- **Laktatstigning på 0,5 mmol/L over baseline (Dickhuth-metoden):** Dette er den mest robuste matematiske model for LT1 (*vores anbefaling*, jf. Dickhuth et al., 1999; Faude et al., 2009).
- **Visuel inspektion (Det første knæk):** Det første synlige bøjningspunkt på kurven, hvor værdierne slipper den flade baseline. Du bør altid bruge det blotte øje til at bekræfte matematikkens resultat.
- **~Blodlaktat på 2,0 mmol/L (Mader):~** En klassisk, men forældet metode fra 1970'erne (Mader et al., 1976). Bruger du en moderne måler som Lactate Pro 2, vil din baseline ofte allerede starte omkring 2,0 mmol/L, hvilket gør denne faste grænse ubrugelig.

**Vil du vide mere?**: [Alt om den aerobe tærskel (AeT / LT1)](/aerobe-taerskel/)
{: .notice }

---

## Blodlaktattest for den anaerobe tærskel (AnT / LT2)

Den anaerobe tærskel (AnT / LT2) er det punkt, hvor kroppen ikke længere kan fjerne laktat i samme tempo, som det produceres. Det svarer til den maksimale bæredygtige indsats for en udholdenhedsatlet, typisk over 20–60 minutter (Maximal Lactate Steady State / MLSS, jf. Poole et al., 2021).

For at finde LT2 på din laktatkurve bruger vores laktatberegner følgende metoder:

- **Baseline + 1,5 mmol/L (Vores anbefaling):** Et glimrende og meget robust estimat (jf. Faude et al., 2009; Bourdon, 2013). Det er vores foretrukne metode til langt de fleste, fordi den fungerer perfekt på en sub-maksimal test, hvor du ikke behøver at køre dig selv til total udmattelse.
- **Visuel inspektion:** Punktet hvor kurven pludselig "stikker af" og stiger eksponentielt. Et afgørende kvalitetstjek, da en enkelt "skæv" måling sommetider kan snyde algoritmerne. Læg altid din visuelle vurdering ned over matematikkens resultat.
- **Modificeret Dmax (mDmax):** Den matematisk mest præcise model til fulde maxtests (Bishop et al., 1998; Jamnick et al., 2018). *Vigtigt:* Denne model er meget brugt, men kan KUN bruges, hvis du har kørt en ægte maxtest helt til udmattelse (*failure*).
- **~OBLA 4,0 mmol/L:~** Endnu en forældet fast grænseværdi. En måling på 4,0 mmol/L på gammelt fuldblodsudstyr svarer i dag oftest til 4,5–5,5 mmol/L på et moderne plasma-kalibreret apparat (Bourdon, 2013; Poole et al., 2021).

**Læs mere**: [Guide til den anaerobe tærskel (AnT / LT2)](/anaerobe-taerskel/)
{: .notice }

---

## Fortolkning af resultaterne: Eksempel med "Aerob Mangel"

Når du plotter dine resultater fra din blodlaktattest (med laktat på y-aksen og puls/watt på x-aksen), er det vigtigste element at kigge på **kurvens form**.

Her er et klassisk eksempel fra [Uphill Athlete](https://uphillathlete.com/aerobic-training/blood-lactate-test-protocol-tips-and-tricks/), som illustrerer en atlet med udtalt *aerob mangel*:

### Test #1 – Atlet med underudviklet aerob base
- **Høj startlaktat:** Laktatniveauet starter over 2,0 mmol/L og stiger støt lige fra starten af testen. **Fortolkning:** Den aerobe energiproduktion er ineffektiv, og en stor del af energien kommer fra glykolyse selv ved helt lave pulsslag.
- **Lav AeT:** Atleten overstiger en stigning på 1,0 mmol/L over laveste punkt allerede ved en puls på 118 bpm. Dette fastsættes som den aerobe tærskel.
- **Midterstykke:** En udfladning i laktatniveauet mellem 140 og 150 bpm tyder på, at atleten har noget effektivitet i dette specifikke område, sandsynligvis fordi en stor del af træningen er foregået her.
- **AnT:** Laktatkurven knækker markant ved 160 bpm, hvilket markerer den anaerobe tærskel.

**Anbefaling:** Atleten blev anbefalet at indstille al højintensitetstræning og i stedet træne udelukkende i pulszonen omkring 115–118 bpm i flere måneder for at opbygge den aerobe kapacitet.

{% include figure image_path="/assets/images/uphillathlete.com/Screen-Shot-2019-11-03-at-08_32_32-a9e5f9b8.png" caption="Test #1: Atlet med aerob mangel. Laktaten stiger støt fra starten. Kilde: [uphillathlete.com](https://uphillathlete.com/aerobic-training/blood-lactate-test-protocol-tips-and-tricks/) [📷](https://uphillathlete.com/wp-content/uploads/2019/11/Screen-Shot-2019-11-03-at-08.32.32.png){: rel='nofollow noopener' }" %}

---

### Test #2 – Efter seks måneders aerob grundtræning

Efter seks måneders dedikeret aerob grundtræning i Zone 1 og 2 gentager atleten laktattesten. Resultaterne viser en markant fysiologisk tilpasning:

- **Flad baseline:** Der ses et klassisk fald i laktat under de første belastningsniveauer. Det aerobe system er nu så effektivt, at det forbrænder laktaten hurtigere end den dannes. 
- **Højere AeT:** Atleten når først sin aerobe tærskel ved en puls på 150 bpm – en forbedring på hele **30 pulsslag** ved ren lav-intensitetstræning med høj volumen!
- **Stabil kurve:** Laktatkurven er meget flad helt op til 140–150 bpm.
- **AnT:** Den anaerobe tærskel er steget en smule til 165 bpm, hvilket er en fin fremgang, selvom der ikke har været fokuseret på tærskelintervaller.

Den aerobe mangel er rettet, og atleten kan nu forsigtigt tilføje højintensitetstræning ovenpå sin stærke fundamentale base.

{% include figure image_path="/assets/images/uphillathlete.com/Screen-Shot-2019-11-03-at-08_31_47-6d2d92af.png" caption="Test #2: Samme atlet efter 6 måneders Zone 1-2 træning. Kurven er flad og forskudt mod højre. Kilde: [uphillathlete.com](https://uphillathlete.com/aerobic-training/blood-lactate-test-protocol-tips-and-tricks/) [📷](https://uphillathlete.com/wp-content/uploads/2019/11/Screen-Shot-2019-11-03-at-08.31.47.png){: rel='nofollow noopener' }" %}

---

## Træningszoner ud fra din laktattest

Når du har fundet dine to tærskler ($LT_1$ og $LT_2$), kan du inddele din træning i 4 fysiologiske hovedzoner:

* **Zone 1–2 (Restitution & Mængdetræning):** Puls og watt/fart **under LT1**. Opbygger det aerobe fundament, øger kapillærtætheden og fedtforbrændingen.
* **Zone 3 (Tempo / Maratontempo):** Mellem **LT1 og LT2**. God fysiologisk balance, men kræver længere restitution end Zone 1–2.
* **Zone 4 (Tærskelintervaller):** Lige omkring **LT2** (MLSS). Træner kroppens evne til at eliminere laktat ved høj hastighed.
* **Zone 5 (VO2max intervaller):** Over **LT2**. Korte, meget hårde intervaller der presser din maksimale iltoptagelse.

---

## Konklusion

En blodlaktattest giver præcise og objektive indsigter i din aerobe og anaerobe kapacitet. Uanset om du har en veludviklet base eller lider af aerob mangel, kan laktattesten hjælpe dig med at målrette din træning helt korrekt.

Ved at bruge blodlaktattests systematisk hver 3.–6. måned kan du løbende overvåge dine fremskridt og sikre, at du træner så effektivt som muligt.

{% include video provider="youtube" id="17NFLGUJ3Pw" %}

Laktattesten laves ofte sammen med en [submaksimal progressiv løbetest](/iltoptagelsestest-loebebaand/). Hvis du er interesseret i at dykke ned i, hvilke andre tests der findes, kan du tjekke vores [oversigt over iltoptagelsestests](/iltoptagelse-laboratorietest/).

---

## Ofte stillede spørgsmål

{% include motionsplan/faq.html %}

<details markdown="1" class="references">
  <summary><h2 id="references">Referencer</h2></summary>

- **Faude, O., Kindermann, W., & Meyer, T. (2009).** *Lactate Threshold Concepts: How Valid are They?* Sports Medicine, 39(6), 469–490.
- **Jamnick, N. A., Botella, J., Pyne, D. B., & Bishop, D. J. (2018).** *Repeatability and predictive value of lactate threshold concepts in endurance-trained individuals.* PLOS ONE, 13(11), e0206846.
- **Poole, D. C., Rossiter, H. B., Whipp, B. J., & Jones, A. M. (2021).** *The Maximal Metabolic Steady State: Redefining the Gold Standard.* Medicine & Science in Sports & Exercise, 53(5), 1029–1037.
- **Bourdon, P. C. (2013).** *Blood Lactate Thresholds: Concepts and Applications.* In: Australian Institute of Sport, *Physiological Tests for Elite Athletes* (2nd ed., pp. 77–101). Human Kinetics.
- **Bishop, D., Jenkins, D. G., & Mackinnon, L. T. (1998).** *The relationship between plasma lactate parameters and muscle characteristics in female cyclists.* European Journal of Applied Physiology, 78(5), 438–444.
- **Dickhuth, H. H. et al. (1999).** *The Concept of Individual Anaerobic Threshold.* International Journal of Sports Medicine, 20(2), 122–127.
</details>