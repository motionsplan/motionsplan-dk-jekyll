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
excerpt: "I denne beregner kan du udregne dit daglige energiforbrug på baggrund af dit basalstofskifte (BMR) og fysiske aktivitetsniveau. Jeg synes det er interessant at udregne, hvad mit hvilestofskifte er i forhold min fysiske aktivitet for at se, hvad mit omtrentlige daglige energibehov er."
---

I denne beregner kan du udregne dit daglige energiforbrug på baggrund af dit basalstofskifte (BMR) og fysiske aktivitetsniveau. Jeg synes det er interessant at udregne, hvad mit hvilestofskifte er i forhold min fysiske aktivitet for at se, hvad mit omtrentlige daglige energibehov er.

**Stofskiftet består af 3 hovedkomponenter: hvilestofskiftet (BMR), fødeinduceret termogenese (FIT) og fysisk aktivitet (PAL).**

## Beregn dit daglige energiforbrug

Med denne beregner kan du udregne dit hvilestofskifte, som også ofte kaldes basalstofskiftet, og dit samlede daglige energibehov. Resultatet er en gennemsnitsberegning for dit køn, din alder og din vægt.

{% include calculate-stofskifte-avanceret.html %}

## Lav præcis aktivitetsregistrering

Din beregning af det daglige energibehov bliver mest præcist, hvis du er lidt omhyggelig med din aktivitetsregistrering.

Du kan udskrive følgende skema og udfylde det for en typisk dag. Når du har udfyldt skemaet og udregnet, hvor meget aktivitet, du har i de enkelte kategorier, så er du klar til at skrive værdierne ind i beregneren af dit daglige energibehov.

[Download skema](https://docs.google.com/document/d/1pWnzxIkn3h_deY7pavw-OnCxhvtSiyFfBZCoyJjj8dY/edit?usp=sharing){: .btn .btn--large .btn--info }

## Baggrund for den avancerede stofskifteberegner

Hvilestofskiftet bliver udregnet ud fra [Schofields formler](https://en.wikipedia.org/wiki/Schofield_equation) (1985) som også bruges af WHO. Der er aldersspecifikke formler for børn. 

### Schofields formler for energibehov for mænd

| Age | Equation (kJ/day) | SEE |
|-|-|-|
|-
| < 3 | 249 × W - 127 | 292 |
| 3–10 | 95 × W + 2110 | 280 |
| 10–18 | 74 × W + 2754 | 441 |
| 18–30 | 63 × W + 2896 | 641 |
| 30–60 | 48 × W + 3653 | 700 |
| > 60 | 49 × W + 2459 | 686 |

### Schofields formler for energibehov for kvinder

| Age | Equation (kJ/day) | SEE |
|-|-|-|
| < 3 | 244 × W - 130 | 246 |
| 3–10 | 85 × W + 2033 | 292 |
| 10–18 | 56 × W + 2898 | 466 |
| 18–30 | 62 × W + 2036 | 497 |
| 30–60 | 34 × W + 3538 | 465 |
| > 60 | 38 × W + 2755 | 451 |

### Energiforbrug for aktiviteter

Energiforbruget ved forskellige aktiviteter bør baseres på forskellige referencer, fordi børn bruger relativt mere energi pr. kg kropsvægt end voksne. Derfor bør der bruges en dynamisk korrektion for børn i forhold deres kropsvægt. På den anden side så tenderer overvægtige personer til at have deres aktivitetsafhængige energiforbrug overestimeret. Derfor kan man bruge en korrektion for [BMI](/bmi/) over 30. Hvis du har brug for denne funktionalitet, så kig på [health-calc.com](http://health-calc.com/diet/energy-expenditure-advanced).
{: .notice .notice--info }

Målet er altså, at beregneren bliver pålidelig både for børn, normalvægtige voksne og overvægtige voksne.

Hvis du kender algoritmerne bag udregneren på [health-calc.com](http://health-calc.com/diet/energy-expenditure-advanced), så skriv endelig.

## Omregning af energibehov fra MET-værdier

[Gerrior et al (2006)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1784117/) viser, hvordan man let udregner energibehovet. Jeg har taget udgangspunkt i dette for at bruge estimerede MET-værdier for aktivitetsniveauet til at udregne PAL.

Hvis du gerne vil udregne dit energiforbrug mere præcist for forskellige aktiviter, så har jeg en [liste over MET-værdier og en beregner af energiforbrug for aktiviteter](/met/).

Brian Henneberg gennemgår et studie, som [sammenligner præcisionen af formler for hvilestofskiftet](https://www.bodylab.dk/shop/hvilestofskifteformler-2881c1.html). Studiet konkluderer:

> Som det fremgår var næsten alle formlerne signifikant off ift. de resultater man fik når man rent faktisk målte hvilestofskiftet. De fleste formler undervurderede hvilestofskiftet, mens to formler overvurderede stofskiftet (De Lorenzo og Cunningham hos kvinderne).
> 
> Hos mændene viste beregningerne at Harris-Benedict var den mest præcise, om end den i gennemsnit vist 284 kcal for lidt. Hos kvinderne var Cunningham den mest præcise med en gennemsnitlig afvigelse på 110 kcal (over det faktiske).

--- <cite>[Brian Henneberg](https://www.bodylab.dk/shop/hvilestofskifteformler-2881c1.html)</cite>

## Se flere typer udregninger af stofskiftet

Jeg har lavet en [simpel beregner til stofskiftet]({% link _posts/2019-10-31-simpel-stofskifteberegner.md %}), som er baseret på _Nordic Nutrition Recommandations fra 2012_ og en [beregner til udregning af ligevægtsindtaget]({% link _posts/2019-10-31-ligevaegtsberegner.md %}).

## Referencer

Schofield, W.N. 1985. Predicting basal metabolic rate, new standards and review of previous work. Hum. Nutr. Clin. Nutr., 39C (suppl. 1): 5-41.