---
title: "Beregn dit hvilestofskifte 🔥 og dit daglige energiforbrug?"
permalink: /avanceret-stofskifteberegner/
language: da
header:
  overlay_image: https://images.unsplash.com/photo-1495976797530-f33e6580e44b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80
  teaser: https://images.unsplash.com/photo-1495976797530-f33e6580e44b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80
  caption: "Beregn dit stofskifte, daglige energiforbrug og basalstofskifte"
category:
  - Beregnere
  - Kost
tags:
  - stofskifte
last_modified_at: 2020-08-06T23:14:14Z
toc: true
excerpt: "I denne beregner kan du udregne dit daglige energiforbrug på baggrund af dit basalstofskifte (BMR) og fysiske aktivitetsniveau. Jeg synes det er interessant at udregne, hvad mit hvilestofskifte er i forhold min fysiske aktivitet for at se, hvad mit omtrentlige daglige energiforbrug er."
feature_row:
  - image_path: /assets/images/pal-schedule.png
    url: https://docs.google.com/document/d/1pWnzxIkn3h_deY7pavw-OnCxhvtSiyFfBZCoyJjj8dY/edit?usp=sharing
    title: "Skema til registrering af aktivitet"
    excerpt: "Du kan udskrive følgende skema og udfylde det for en typisk dag. Når du har udfyldt skemaet og udregnet, hvor meget aktivitet, du har i de enkelte kategorier, så er du klar til at skrive værdierne ind i beregneren af dit daglige energibehov."
    btn_label: Download skema
    btn_class: btn--info
---

I denne beregner kan du udregne dit daglige energiforbrug på baggrund af dit basalstofskifte (BMR) og fysiske aktivitetsniveau. Jeg synes det er interessant at udregne, hvad mit hvilestofskifte er i forhold min fysiske aktivitet for at se, hvad mit omtrentlige daglige energibehov er.

Hvad er det daglige energiforbrug? **Dit daglige energiforbrug består af 3 hovedkomponenter: hvilestofskiftet (BMR), fødeinduceret termogenese (FIT) og fysisk aktivitetsniveau (PAL). Når du har beregnet dit hvilestofskifte ganger man typisk med en PAL-faktor for at finde dit daglige energiforbrug.**

## Beregn dit daglige energiforbrug

Med denne beregner kan du udregne dit hvilestofskifte, som også ofte kaldes basalstofskiftet, og dit samlede daglige energibehov. Resultatet er en gennemsnitsberegning for dit køn, din alder og din vægt.

{% include calculate-stofskifte-avanceret.html %}

## Lav præcis aktivitetsregistrering til energiforbruget

Din beregning af det daglige energibehov bliver mest præcist, hvis du er lidt omhyggelig med din aktivitetsregistrering.

{% include feature_row type="left" %}

## Baggrund for den avancerede udregning af energiforbrug

Hvilestofskiftet bliver udregnet ud fra [Schofields formler](https://en.wikipedia.org/wiki/Schofield_equation) (1985) som også bruges af WHO. Læg mærke til, at der er aldersspecifikke formler for børn, hvilket betyder, at beregneren er relativt pålidelig også til at udregne hvilestofskiftet til børn.

### Schofields formler for energibehov for mænd

| Age | Equation (kJ/day) | SEE |
|-|-|-|
| < 3 | 249 × W - 127 | 292 |
| 3–10 | 95 × W + 2110 | 280 |
| 10–18 | 74 × W + 2754 | 441 |
| 18–30 | 63 × W + 2896 | 641 |
| 30–60 | 48 × W + 3653 | 700 |
| > 60 | 49 × W + 2459 | 686 |

### Schofields formler for energiforbrug for kvinder

| Age | Equation (kJ/day) | SEE |
|-|-|-|
| < 3 | 244 × W - 130 | 246 |
| 3–10 | 85 × W + 2033 | 292 |
| 10–18 | 56 × W + 2898 | 466 |
| 18–30 | 62 × W + 2036 | 497 |
| 30–60 | 34 × W + 3538 | 465 |
| > 60 | 38 × W + 2755 | 451 |

### Udregning af fysisk aktivitetsniveau

Jeg har baseret udregningen af det fysiske aktivitetsniveau på baggrund [Gerrior et al (2006)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1784117/). I artiklen viser Gerrior et al (2006), hvordan man let udregner energibehovet med et regneark. Jeg har taget udgangspunkt i dette for at bruge estimerede MET-værdier for aktivitetsniveauet til at udregne PAL.

| Aktivitet | MET | Beskrivelse |
|-|-|-|
| Intens træning | MET 10 | Maksimal aktivitet. Intensiv idræt. Hurtig løb. Hurtig roning. |
| Moderat træning | MET 7 | Styrketræning. Hugge brænde. De fleste idrætsgrene. Cykling. |
| Let aktivitet | MET 4 | Husarbejde. Havearbejde. Hurtig gang. Golf. |
| Stående og gående | MET 2 | Madlavning. Let gang. Indkøb. Shopping. |
| Sove | MET 0,9 | Fra du ligger i sengen til du står op. |
| Siddende | MET 1,2 | Den resterende tid er du siddende. Enten arbejde. TV-kigning. |

Jeg er lidt i tvivl om nøjagtigt, hvilke MET-værdier jeg bør bruge for de enkelte kategorier for at udregne PAL mest præcist.

Gerrior et al (2006) benytter så PAL-værdien til at udregne en PA-værdi

Hvis du har et rigtig godt bud, så brug endelig kommentarerne.

{% comment %}

### Energiforbrug korrigeret for vægt og BMI ifølge Morten Zacho

Denne beregner er delvist baseret på Morten Zachos [energiforbrugberegner](http://health-calc.com/diet/energy-expenditure-advanced).

Morten Zacho skriver, at hans beregner er baseret på Schofields formler for energiforbrug, men i beregneren bruges faktisk formlerne fra _[Nordiska Næringsrekommendationer 1996]({% link _posts/2019-10-31-simpel-stofskifteberegner.md %})_. Jeg er i tvivl om formlerne fra den reference blot er reviderede Schofield-formler - og hvilken reference de i så fald kommer fra. Skriv endelig i kommentarerne, hvis du ved mere.

Målet for beregneren af energiforbrug er, at den er pålidelig både for børn, normalvægtige voksne og overvægtige voksne.

Morten Zacho foreslår [to korrektioner til energiberegneren](http://health-calc.com/diet/energy-expenditure-advanced), som vi også har implementeret i denne beregner:

#### Korrektion for overvægtige

Overvægtige tenderer til at få deres aktivitetsafhængige energiforbrug overestimeret, og derfor foreslår Morten Zacho en korrektionsfaktor for [BMI](/bmi/) højere end 30.

Morten Zacho korrigerer 'let aktivitet' for overvægtige med følgende korrektioner med følgende faktor:

{% include math formula="correction1_{BMI} = \frac{\sqrt{30}}{\sqrt{BMI}}" %}

Derudover korrigerer han 'moderat aktivitet' og 'intens aktivitet' for overvægtige med følgende korrektioner.

{% include math formula="correction2_{BMI} = \frac{30}{BMI}" %}

#### Korrektion for børn

Fordi børn bruger relativt mere energi pr. kg kropsvægt i forhold til voksne, så kan man bruge en dynamisk korrektion baseret på deres vægt. Hvis børn vejer mindre end 50, så korrigeres det aktivitetsafhængige del af energiforbruget med følgende faktor.

{% include math formula="correction_{weight} = \frac{1 + 0.5 * (50 kg - weight)}{50 kg}" %}

#### Udregning af samlede energiforbrug

Morten Zacho bruger følgende formel til at udregne det ekstra energiforbrug, som kommer fra aktivitetsniveauet. I formlen indtastes minutter for de forskellige aktiviteter:

***

TEE = BMR + weight * (0.03 * sitting + 0.1 * standing + 0.26 * light * correction1<sub>BMI</sub> + 0.5 * moderat * correction2<sub>BMI</sub> + 0.88 * intense * correction2<sub>BMI</sub>) * correction<sub>weight</sub>

***

Morten Zacho forklarer ikke nogen steder, hvordan han er endt på de korrektioner, eller hvor han har formlen til TEE fra.

Hvis du kender algoritmerne bag udregneren på [health-calc.com](http://health-calc.com/diet/energy-expenditure-advanced), så skriv endelig.

{% endcomment %}

## Omregning af energiforbrug fra MET-værdier

Hvis du gerne vil udregne dit energiforbrug mere præcist for forskellige aktiviter, så har jeg en [liste over MET-værdier og en beregner af energiforbrug for aktiviteter](/met/).

## Udregn energibehov med andre beregnere

Jeg har lavet en [simpel beregner til stofskiftet]({% link _posts/2019-10-31-simpel-stofskifteberegner.md %}), som er baseret på _Nordiska Næringsrekommendationer 1996_ eller en [beregner af energibehov]({% link _posts/2020-09-01-stofskifte-nordic-2012.md %}) baseret på _Nordic Nutrition Recommandations fra 2012_ og en [beregner til udregning af ligevægtsindtaget]({% link _posts/2019-10-31-ligevaegtsberegner.md %}).

Hvis du gerne vil have en energiberegner på engelsk, så har Morten Zacho lavet denne [energiforbrugberegner](http://health-calc.com/diet/energy-expenditure-advanced).

## Referencer om udregning af dagligt energiforbrug

- Schofield, W.N. 1985. Predicting basal metabolic rate, new standards and review of previous work. Hum. Nutr. Clin. Nutr., 39C (suppl. 1): 5-41. <https://pubmed.ncbi.nlm.nih.gov/4044297/>
- Waterlow, John C., Nevin S. Scrimshaw, og Beat Schürch. 1996. “Energy and Protein requirements, Proceedings of an IDECG workshop”. Eur J Clin Nutr 50 (februar): 1–197. <http://archive.unu.edu/unupress/food2/UID01E/UID01E00.HTM>.
