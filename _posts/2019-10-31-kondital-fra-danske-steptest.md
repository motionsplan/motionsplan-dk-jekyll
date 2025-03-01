---
title: &title "Den Danske Steptest 📥"
seo_title: "Den Danske Steptest: Find dit kondital"
permalink: /kondital-fra-steptest/
language: da
header:
  overlay_image: https://i.ytimg.com/vi/kPbmoq5V6AA/maxresdefault.jpg
  teaser: https://i.ytimg.com/vi/kPbmoq5V6AA/maxresdefault.jpg
  caption: *title
category:
  - Tests
  - Kondition
meta:
  measures: kondital
  type: steptest
  equipment: stepbænk
  max: submaksimal test
  direct: indirekte test
tags:
  - konditionstest
  - indirekte test
  - steptest
  - test
last_modified_at: 2021-01-02T23:14:14Z
toc: true
breadcrumbs: true
---

Den Danske Steptest eller Den Nye Steptest er en præstationsbegrænset submaksimal test, der estimerer den maksimale iltoptagelse og konditallet. Jeg kigger lidt på, om testen kan bruges til at finde konditallet?

*[MET]: Metabolic equivalent of Task

Hvad er Den Danske Steptest? **Den Danske Steptest er udviklet af danske forskere med Morten Zacho i spidsen. Det er en en tilpasning af de eksisterende steptest, så man ikke behøver pulsmålinger undervejs. Den Danske Steptest er en præstationsbegrænset submaksimal test, hvor deltagerne træder op og ned af en forhøjning på en bestemt måde i et forudbestemt tempo, som progressivt stiger i løbet af testen.**

Forhøjningen i Den Danske Steptest er på 20-35 cm og sættes i forhold til folks træningsniveau, hvilket du kan læse mere om i instruktionerne til testen på [exercise.dk](https://exercise.dk/kondition/43-den-danske-steptest). Her kan du tage testen online. Testen kan laves overalt, hvor man har en computer eller andet device og en forhøjning.

Når testen er færdig får man en estimeret VO₂-max, sit kondital (den maksimale iltoptagelse i forhold til ens kropsvægt) og [MET-værdien]({% link _posts/2020-07-24-met.md %}) (som er et mål for hvor meget arbejde, du har lavet).

Den Danske Steptest er udviklet af bl.a. Morten Zacho.

[Tag Den Danske Steptest på exercise.dk](https://exercise.dk/kondition/43-den-danske-steptest){: .btn .btn--large .btn--info }

## Baggrunden for Den Danske Steptest

Den Danske Steptest bruger kun trinhøjden, tiden og kropsvægten som input for at lave sine beregninger til at estimere det den maksimale iltoptagelse og konditallet.

Som baggrund for Den Danske Steptest bruger [Morten Zacho](https://exercise.dk/kondition/43-den-danske-steptest) følgende teoretiske sammenhæng:

{% include motionsplan/math formula="arbejde_{total} = \frac{kropsvaegt * tyngdekraft * stephoejde * stepfrekvens}{nyttevirkning}" %}

Tyngdekraften er ifølge [Wikipedia](https://da.wikipedia.org/wiki/Tyngdeacceleration) 9,816 m/s<sup>2</sup> i Danmark. Det totale arbejde er i sidste ende præstationsbegrænset ved at både koordinationen og kredsløbet kan være den begrænsende faktor.

{% include motionsplan/math formula="VO_2max = \frac{\frac{arbejde_{total}}{O_2energi}}{intensitet_{slut}} + VO_2hvile" %}

Hvilestofskiftet er cirka [0,25 liter O₂ pr. minut](https://web.archive.org/web/20230307005511/http://www.fys.dk/nfa/03/heftet/menneskekroppen.pdf){: rel="nofollow" }. Når vi er på vores maksimale ydeevne, så bruger kroppen udelukkende kulhydrat som brændstof, som du kan læse mere om under [den respiratoriske udvekslingskvotient](/respiratoriske-metaboliske-udvekslingskvotient/). Forbrænding af kulhydrat giver os 21,1 kJ pr. liter ilt. Det kaldes også iltens energetiske værdi for kulhydrat. Hvordan testen estimerer slutintensiteten er ikke klart, men hvis du ved det, så brug endelig kommentarerne.

Når man kender den estimerede VO₂max, så kan man udregne konditallet.

{% include motionsplan/math formula="kondital = \frac{VO_2max}{kropsvaegt}" %}

## Hvor pålidelig er steptesten?

Aadahl et al (2012) har valideret testen med 795 personer, hvor man har sammenlignet den med en [Watt-max test på cykel]({% link _posts/2019-10-31-kondital-watt-max-test.md %}). Der fandt forskerne følgende korrelationer.

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

Den Danske Steptest har altså en fornuftig korrelation med Watt-max-testen, og validiteten er moderat, når forskerne sammenligner med en direkte måling af den maksimale iltoptagelse. Det skyldes sandsynligvis, at korrelationen mellem Watt-max-testen og en direkte måling af iltoptagelse jo heller ikke er perfekt.

## Hvad betyder MET?

[Metabolic Equivalent for Task (MET)]({% link _posts/2020-07-24-met.md %}) er et udtryk for størrelsen af iltforbruget under et givet arbejde.

1 MET svarer til energiomsætningen i hvile, hvor kroppen forbruger 3,5 ml ilt pr. kg kropsvægt pr. minut.

Desto mere intensivt arbejdet bliver, desto højere bliver energiomsætningen under arbejdet.

## Andre steptests

Der findes en række andre steptests, som du også kan kigge på, hvis du gerne vil estimere konditallet med en let test, der er let at sætte op overalt.

- [Åstrands Steptest](https://netdoktor.dk/interactive/interactivetests/steptest.php)
- [Harvard Steptest](https://en.wikipedia.org/wiki/Harvard_step_test)

Vi har også lavet en [oversigt over andre tests af konditallet]({% link _posts/2019-11-04-kondition-og-test.md %}), eller måske vil du sammenligne dit [kondital med en tabel for mænd og kvinder]({% link _posts/2019-11-04-kondital-og-tabel.md %})?

<details markdown="1" class="references">
  <summary><h2 class="references">Referencer</h2></summary>

- Aadahl, Mette, Morten Zacho, Allan Linneberg, Betina Thuesen, og Torben Jørgensen. 2012. “Comparison of the Danish step test and the watt-max test for estimation of maximal oxygen uptake: The Health2008 study”. European journal of preventive cardiology 20 (september). <https://doi.org/10.1177/2047487312462825>.
- Lerche, L., A. Olsen, K. E. N. Petersen, A. L. Rostgaard‐Hansen, L. O. Dragsted, N. B. Nordsborg, A. Tjønneland, og J. Halkjær. 2017. “Validity of Physical Activity and Cardiorespiratory Fitness in the Danish Cohort ‘Diet, Cancer and Health-Next Generations’”. Scandinavian Journal of Medicine & Science in Sports 27 (12): 1864–72. <https://doi.org/10.1111/sms.12873>.
</details>
