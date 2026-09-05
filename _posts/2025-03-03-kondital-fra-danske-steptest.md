---
title: &title "Den Danske Steptest 📥"
seo_title: "Den Danske Steptest: Find dit kondital"
permalink: /den-danske-steptest/
description: "Den danske steptest bruges til at estimere dit kondital uden brug af puls. Læs mere om testens protokol her."
excerpt: "Den danske steptest bruges til at estimere dit kondital uden brug af puls. Læs mere om testens protokol her."
language: da
header:
  teaser: /assets/images/i.ytimg.com/maxresdefault-6097801a.jpg
  credit: https://i.ytimg.com/vi/kPbmoq5V6AA/maxresdefault.jpg
  caption: *title
categories:
  - Kondition
  - Konditionstests
  - Steptests
meta:
  measures: kondital
  type: steptest
  equipment: stepbænk
  max: submaksimal test
  direct: indirekte test
# TESTS / PROTOKOLLER
tests:
  - id: "test-den-danske-steptest"
    title: "Den Danske Steptest"
    description: "Præstationsbegrænset submaksimal steptest på en 20–35 cm boks med stigende tempo til estimering af VO2max og kondital ud fra trinhøjde, vægt og gennemført tid."
    category: ["Kondition", "Steptest"]      # 💡 Søgbar under BÅDE Kondition og Steptest i databasen
    type: ["Protokol", "Konditionstest"]
    execution: ["Fysisk"]
    method: "indirekte"                  # 🧮 Indirekte test: Estimering af VO2max ud fra udført mekanisk arbejde og tid uden puls
    modality: ["Steptest"]
    measures: ["Kondital", "VO2max", "Iltoptagelse", "MET"]
    equipment: ["Stepbænk", "Boks", "Timer", "Metronom"]
    setting: ["Hjemmetest", "Fitnesscenter", "Skolebrug", "Individuel"]
    target_group: ["Unge", "Voksne", "Ældre", "Mænd", "Kvinder"]
tags:
  - test
  - konditionstest
  - indirekte test
  - steptest
last_modified_at: 2026-09-05T23:14:14Z
toc: true
breadcrumbs: true
---
Den Danske Steptest eller Den Nye Steptest er en præstationsbegrænset submaksimal test, der estimerer den maksimale iltoptagelse og konditallet.

I forhold til de andre [steptests](/kondital-fra-steptest/) så er fordelen, at du i denne test ikke skal tælle din puls efterfølgende.

I denne artikel gennemgår vi protokollen for Den Danske Steptest, og hvordan du kan bruge den til at estimere dit kondital uden brug af pulsmåler.

*[MET]: Metabolic equivalent of Task

[<i class='fas fa-calculator'></i> Hop til beregner](#calculator){: .btn .btn--success .btn--jump } [<i class='fas fa-clock'></i> Hop til timer](#timer){: .btn .btn--success .btn--jump }

## Hvad er Den Danske Steptest?

**Den Danske Steptest er udviklet af danske forskere med bl.a. Morten Zacho i spidsen. Det er en en tilpasning af de eksisterende steptest, så man ikke behøver pulsmålinger undervejs. Den Danske Steptest er en præstationsbegrænset submaksimal test, hvor deltagerne træder op og ned af en forhøjning på en bestemt måde i et forudbestemt tempo, som progressivt stiger i løbet af testen.**

Testen kan laves overalt, hvor man har en computer eller andet device og en forhøjning.

Når testen er færdig får man en estimeret VO₂-max, sit kondital (den maksimale iltoptagelse i forhold til ens kropsvægt) og [MET-værdien](/met/) (som er et mål for hvor meget arbejde, du har lavet).

### Valg af bokshøjde

Forhøjningen i Den Danske Steptest er på 20-35 cm og sættes i forhold til folks nuværende træningsniveau. En højere boks giver en hårdere test, mens en lavere boks passer bedre til nybegyndere eller kortere personer.

### Anbefalet bokshøjde til testen

Trinhøjden vælges ud fra din alder, dit køn og din nuværende fysiske formåen:

* **20 cm:** Til personer med markant nedsat funktionsevne, genoptræningsbehov eller ældre med ledsmerter og bevægelsesudfordringer.
* **25 cm:** Til utrænede, personer med et lavt kondital.
* **30 cm:** Standardhøjde til raske kvinder samt børn og unge.
* **35 cm:** Til raske mænd samt kvinder i særdeles god fysisk form.

> **Testens måleområde:**  
> Så længe du bevarer koordinationen undervejs, kan testen estimere dit kondital præcist op til omkring **60 mL/kg/min**. Det opnås ved at gennemføre samtlige 6 minutter på den højeste bænk (35 cm).

Her kan du bestemme bokshøjden.

{% include components/steptest-stepheight.html test="dansk" %}

## Sådan udfører du Den Danske Steptest

1. **Forberedelse**  
   Find den rette bokshøjde (20–35 cm) med beregneren ovenfor. En af de største fordele ved Den Danske Steptest er, at du **ikke** skal måle din puls undervejs eller tælle pulsslag bagefter.
2. **Start testen**  
   Start vores interaktive guide nedenfor. Træd op og ned af boksen i takt med timeren og animationen. Tempoet stiger automatisk for hvert minut (fra 60 BPM på niveau 1 til 120 BPM på niveau 6).
3. **Notér din tid**  
   Notér den nøjagtige tid i sekunder (eller det niveau du nåede til), da du stoppede testen.
4. **Hvornår stopper testen?**  
   Testen afsluttes enten når:
   * Du har gennemført alle 6 niveauer (6 minutter i alt).
   * Du ikke længere kan holde kadencen eller følge metronomens takt.
   * Du føler dig udmattet eller mister koordinationen.

## Tag testen med interaktiv guide
{: id="timer" }

Brug afspilleren nedenfor til at holde det præcise tempo under testen. Skærmen holdes automatisk tændt på din enhed. Du kan finde den originale afspiller på [exercise.dk](https://exercise.dk/kondition/43-den-danske-steptest).

{% include components/steptest-timer.html type="dansk" %}

## Beregn dit resultat
{: id="calculator" }

Indtast din alder, den anvendte bokshøjde samt din målte puls for de gennemførte niveauer herunder:

{% include calc/steptest.html test="dansk" %}

## Baggrunden for Den Danske Steptest

Den Danske Steptest bruger kun trinhøjden, tiden og kropsvægten som input for at lave sine beregninger til at estimere det den maksimale iltoptagelse og konditallet.

Som baggrund for Den Danske Steptest bruger [Morten Zacho](https://exercise.dk/kondition/43-den-danske-steptest) følgende teoretiske sammenhæng:

$$
\text{arbejde}_{\text{total}} = \frac{\text{kropsvægt} \times \text{tyngdeacceleration} \times \text{stephøjde} \times \text{stepfrekvens}}{\text{nyttevirkning}}
$$

Tyngdekraften er ifølge [Wikipedia](https://da.wikipedia.org/wiki/Tyngdeacceleration) 9,816 m/s<sup>2</sup> i Danmark. Det totale arbejde er i sidste ende præstationsbegrænset ved at både koordinationen og kredsløbet kan være den begrænsende faktor.

$$
\text{VO}_2\text{max} = \frac{\frac{\text{arbejde}_{\text{total}}}{\text{O}_2\text{-energi}}}{\text{intensitet}_{\text{slut}}} + \text{VO}_2\text{hvile}
$$

Hvilestofskiftet er cirka [0,25 liter O₂ pr. minut](https://web.archive.org/web/20230307005511/http://www.fys.dk/nfa/03/heftet/menneskekroppen.pdf){: rel="nofollow" }. Når vi er på vores maksimale ydeevne, så bruger kroppen udelukkende kulhydrat som brændstof, som du kan læse mere om under [den respiratoriske udvekslingskvotient](/respiratoriske-metaboliske-udvekslingskvotient/).

Forbrænding af kulhydrat giver os 21,1 kJ pr. liter ilt. Det kaldes også iltens energetiske værdi for kulhydrat. 

Hvordan testen estimerer slutintensiteten er ikke klart, men hvis du ved det, så brug endelig kommentarerne.

Når man kender den estimerede VO₂max, så kan man udregne konditallet.

$$
\text{kondital} = \frac{\text{VO}_2\text{max}}{\text{kropsvægt}}
$$

## Hvor pålidelig er steptesten?

Aadahl et al (2012) har valideret testen med 795 personer, hvor man har sammenlignet den med en [Watt-max test på cykel](/kondital-wattmax/). Der fandt forskerne følgende korrelationer.

> The correlation between VO₂max (ml/kg/min) estimated by the two tests was moderate to high (men: r = 0.69, p < 0.0001; women: r = 0.77, p < 0.0001). The Danish step test slightly overestimated VO₂max compared to the watt-max test, more so in women than in men.
>
> --- <cite>[Aadahl et al (2012)](https://journals.sagepub.com/doi/10.1177/2047487312462825)</cite>

Testen har en tendens til at overestimere VO₂-max sammenlignet med en Watt-max test på cykel.

Senere har Lerche et al (2017) valideret Den Danske Steptest i forhold til direkte måling af [maksimal iltoptagelse](/maksimale-iltoptagelse-vo2max/).

> The validity of the Danish step test was moderate (women: r=.66, and men: r=.56); however, men were systematically underestimated (43% misclassification).
> ...
> Thus, self‐rated fitness was found to be a superior method to the Danish step test...
>
> --- <cite>[Lerche et al (2017)](https://onlinelibrary.wiley.com/doi/abs/10.1111/sms.12873)</cite>

Den Danske Steptest har altså en fornuftig korrelation med Watt-max-testen, og validiteten er moderat, når forskerne sammenligner med en direkte måling af den maksimale iltoptagelse.

Det skyldes sandsynligvis, at korrelationen mellem Watt-max-testen og en direkte måling af iltoptagelse jo heller ikke er perfekt.

Castro-Piñero et al (2021) konkluderer at [YMCA modificerede steptest](/ymca-modified-steptest/) har en høj validitet, mens den danske steptest er moderat og har begrænset videnskab bag ved sig.

## Hvad betyder MET?

[Metabolic Equivalent for Task (MET)](/met/) er et udtryk for størrelsen af iltforbruget under et givet arbejde.

1 MET svarer til energiomsætningen i hvile, hvor kroppen forbruger 3,5 ml ilt pr. kg kropsvægt pr. minut.

Desto mere intensivt arbejdet bliver, desto højere bliver energiomsætningen under arbejdet.

## Hvorfor giver Den Danske Steptest ofte et meget højt kondital?

Oplever du at gennemføre hele testen og opnå et ret højt kondital? Det er et kendt fænomen ved Den Danske Steptest. Testen er udviklet som en simpel præstationstest uden pulsmåling til store befolkningsundersøgelser (Zacho & Blomqvist, 2005; Aadahl et al., 2013). På individuelt niveau kan den dog overestimere iltoptagelsen markant af følgende fysiologiske og metodiske årsager:

* **Ingen fysiologisk pulsmåling:** Formlen beregner udelukkende dit kondital ud fra den gennemførte tid, din kropsvægt og stephøjden. Den skelner ikke mellem, om du gennemfører testen med en overskuelig arbejdspuls på 160 bpm eller ved absolut udmattelse på 195 bpm – algoritmen antager altid, at du har ydet dit fysiologiske maksimum (Zacho & Blomqvist, 2005).
* **Testens måleloft (Ceiling Effect):** Bliver du ikke tvunget til at stoppe, før tidstælleren udløber ved 6 minutter, rammer du formlens beregningsmæssige maksimum. Da formlen er opbygget som en teoretisk ekstrapolation for at dække et bredt udsnit af befolkningen, tildeler fuld gennemførelse automatisk et elite-kondital (Aadahl et al., 2013).
* **Lokal muskeludholdenhed og benlængde:** I en steptest er begrænsningen ofte lokal muskeltræthed i lårene (quadriceps). Har du stærke ben, god trinhøjde-teknik eller lange ben, kan du gennemføre testen på lokal muskeludholdenhed, selvom dit hjerte-kredsløb reelt svarer til et lavere kondital.
* **Høj usikkerhed på individniveau:** Valideringsstudier viser, at selvom testen korrelerer fornuftigt på gruppeniveau mod maksimale cykeltests, er der stor spredning på individniveau, hvor en betydelig del af testpersonerne kan misklassificeres i konditionskategorier (Aadahl et al., 2013; Castro-Piñero et al., 2021).

> **Sådan tolker du dit resultat:**  
> Den Danske Steptest er et lettilgængeligt redskab til at måle din samlede arbejdsudholdenhed. Bliver du ikke udmattet inden for de 6 minutter, bør du **øge stephøjden** (fx fra 25 cm til 30 eller 35 cm) for at fremprovokere et stop før tid. Hvis du er i rigtig god form, så kan det være en god ide at supplere med en pulsbaseret test som Åstrand, Chester eller Harvard for en fysiologisk mere præcis måling af dit kredsløb.

## Alternativer til Den Danske Steptest

Der findes en række [andre steptests](/kondital-fra-steptest/), som du også kan kigge på, hvis du gerne vil estimere konditallet med en let test, der er let at sætte op overalt.

Vi har også lavet en [oversigt over andre tests af konditallet](/kondition/tests/), eller måske vil du sammenligne dit [kondital med en tabel for mænd og kvinder](/kondital/)?

<details markdown="1" class="references">
  <summary><h2 id="references">Referencer</h2></summary>

- [Udvikling af ny steptest. Zacho & Bloomquist. CMRC 2005](https://exercise.dk/pdf/Steptest_rapport2005.pdf)
- Aadahl M, Zacho M, Linneberg A, Thuesen BH, Jørgensen T. Comparison of the Danish step test and the watt-max test for estimation of maximal oxygen uptake: the Health2008 study. Eur J Prev Cardiol. 2013 Dec;20(6):1088-94. doi: 10.1177/2047487312462825.
- Castro-Piñero J, Marin-Jimenez N, Fernandez-Santos JR, Martin-Acosta F, Segura-Jimenez V, Izquierdo-Gomez R, Ruiz JR, Cuenca-Garcia M. Criterion-Related Validity of Field-Based Fitness Tests in Adults: A Systematic Review. J Clin Med. 2021 Aug 23;10(16):3743. doi: 10.3390/jcm10163743.
- Lerche, L., A. Olsen, K. E. N. Petersen, A. L. Rostgaard‐Hansen, L. O. Dragsted, N. B. Nordsborg, A. Tjønneland, og J. Halkjær. 2017. “Validity of Physical Activity and Cardiorespiratory Fitness in the Danish Cohort ‘Diet, Cancer and Health-Next Generations’”. Scandinavian Journal of Medicine & Science in Sports 27 (12): 1864–72. <https://doi.org/10.1111/sms.12873>.
</details>