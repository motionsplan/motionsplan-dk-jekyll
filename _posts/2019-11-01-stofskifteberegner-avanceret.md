---
title: &title "Beregn dit daglige stofskifte og forbrænding? 🔥"
permalink: /beregner/dagligt-stofskifte-og-forbraending/
redirect_from: /avanceret-stofskifteberegner/
language: da
header:
  overlay_image: https://images.unsplash.com/photo-1495976797530-f33e6580e44b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=630&w=1200&q=60
  teaser: https://images.unsplash.com/photo-1495976797530-f33e6580e44b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=300&w=400&q=10
  caption: *title
category:
  - Beregnere
  - Kalorieberegnere
tags:
  - stofskifte
  - kalorieberegner
  - beregner
meta:
  name: Daglig forbrænding og stofskifte
  equipment: ingen
  measures: dagligt energiforbrug
  type: energiforbrug
last_modified_at: 2020-08-06T23:14:14Z
toc: true
excerpt: "I denne beregner kan du udregne dit daglige stofskifte og forbrænding. Ved at beregne energiforbruget på baggrund af dit basalstofskifte (BMR) og fysiske aktivitetsniveau, så kan du finde dit omtrentlige daglige energibehov."
feature_row:
  - image_path: /assets/images/pal-schedule.png
    url: https://docs.google.com/document/d/1pWnzxIkn3h_deY7pavw-OnCxhvtSiyFfBZCoyJjj8dY/copy?usp=sharing
    title: "Skema til registrering af aktivitet"
    excerpt: "Du kan udskrive følgende skema og udfylde det for en typisk dag. Når du har udfyldt skemaet og udregnet, hvor meget aktivitet, du har i de enkelte kategorier, så er du klar til at skrive værdierne ind i beregneren af dit daglige energibehov."
    btn_label: <i class='fas fa-file-alt'></i> Download skema
    btn_class: btn--info
    rel: nofollow noopener
---

I denne beregner kan du udregne dit daglige stofskifte og forbrænding. Ved at beregne energiforbruget på baggrund af dit basalstofskifte (BMR) og fysiske aktivitetsniveau, så kan du finde dit omtrentlige daglige energibehov.

**Dit daglige energiforbrug består af 3 hovedkomponenter: hvilestofskiftet (BMR), fødeinduceret termogenese (FIT) og fysisk aktivitetsniveau (PAL). Når du har beregnet dit hvilestofskifte ganger man typisk med en PAL-faktor for at finde dit daglige energiforbrug.**

## Beregn dit daglige stofskifte, energiforbrug og forbrænding

Med denne beregner kan du udregne dit samlede daglige energibehov, stofskifte og forbrænding. Resultatet er baseret på en gennemsnitsberegning for dit køn, din alder og din vægt, men husk der kan være masser af individuelle variationer.

{% include calculator/calculate-stofskifte-avanceret.html %}

## Lav præcis aktivitetsregistrering til udregning af stofskiftet

Din beregning af det daglige energibehov bliver mest præcist, hvis du er lidt omhyggelig med din aktivitetsregistrering.

{% include feature_row type="left" %}

## Hvilken formel skal jeg vælge til at udregne stofskiftet og forbrændingen?

Der findes en lang række forskellige formler for hvilestofskiftet, basalstofskiftet og BMR. I beregneren er formlerne fra Nordic Nutrition Recommendations (2012) valgt som standard, da disse formler også bruges af WHO. Formlerne tager højde for mange befolkningstyper, og der er formler rettet mod alle aldersgrupper.

Du kan læse mere om de forskellige formler til [hvilestofskifte og basalstofskifte]({% link _posts/2019-11-01-stofskifteberegner-simpel.md %}).

### Udregning af fysisk aktivitetsniveau

Jeg har baseret udregningen af det fysiske aktivitetsniveau på baggrund [Gerrior et al (2006)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1784117/). I artiklen viser Gerrior et al (2006), hvordan man udregner energibehovet med et regneark. Jeg har taget udgangspunkt i dette for at bruge estimerede MET-værdier for aktivitetsniveauet til at udregne PAL.

| Aktivitet | MET | Beskrivelse |
|-|-|-|
| Intens træning | MET 10 | Maksimal aktivitet. Intensiv idræt. Hurtig løb. Hurtig roning. |
| Moderat træning | MET 7 | Styrketræning. Hugge brænde. De fleste idrætsgrene. Cykling. |
| Let aktivitet | MET 4 | Husarbejde. Havearbejde. Hurtig gang. Golf. |
| Stående og gående | MET 2 | Madlavning. Let gang. Indkøb. Shopping. |
| Sove | MET 0,9 | Fra du ligger i sengen til du står op. |
| Siddende | MET 1,2 | Den resterende tid er du siddende. Enten arbejde. TV-kigning. |

Jeg har baseret de valgte MET-værdier i tabellen ud fra [Nordic Nutrition Recommendations 2012](https://www.norden.org/en/publication/nordic-nutrition-recommendations-2012) og [slået aktiviteter op i listen over MET-værdier](/met/). I Nordic Nutrition Recommendations (2012) er _Rest_ sat til 1,0, men der er ingen adskillelse mellem sovende og siddende aktivitet.

**Jeg er i tvivl om jeg har valgt de helt rigtige MET-værdier til at give den bedste beregning. Hvis du har et input til at gøre listen bedre, så brug endelig kommentarerne.**

Gerrior et al (2006) benytter så PAL-værdien til at udregne en PA-værdi, men lige nu ganger beregneren direkte med PAL-værdien udregnet ud fra fremgangsmåden hos Gerrior et al (2006).

Hvis du har et rigtig godt bud, så brug endelig kommentarerne.

{% comment %}

### Energiforbrug korrigeret for vægt og BMI ifølge Morten Zacho

Denne beregner er delvist baseret på Morten Zachos [energiforbrugberegner](https://health-calc.com/diet/energy-expenditure-advanced).

Morten Zacho skriver, at hans beregner er baseret på Schofields formler for energiforbrug, men i beregneren bruges faktisk formlerne fra _[Nordiska Næringsrekommendationer 1996]({% link _posts/2019-11-01-stofskifteberegner-simpel.md %})_. Jeg er i tvivl om formlerne fra den reference blot er reviderede Schofield-formler - og hvilken reference de i så fald kommer fra. Skriv endelig i kommentarerne, hvis du ved mere.

Målet for beregneren af energiforbrug er, at den er pålidelig både for børn, normalvægtige voksne og overvægtige voksne.

Morten Zacho foreslår [to korrektioner til energiberegneren](https://health-calc.com/diet/energy-expenditure-advanced), som vi også har implementeret i denne beregner:

#### Korrektion for overvægtige

Overvægtige tenderer til at få deres aktivitetsafhængige energiforbrug overestimeret, og derfor foreslår Morten Zacho en korrektionsfaktor for [BMI](/bmi/) højere end 30.

Morten Zacho korrigerer 'let aktivitet' for overvægtige med følgende korrektioner med følgende faktor:

{% include motionsplan/math formula="correction1_{BMI} = \frac{\sqrt{30}}{\sqrt{BMI}}" %}

Derudover korrigerer han 'moderat aktivitet' og 'intens aktivitet' for overvægtige med følgende korrektioner.

{% include motionsplan/math formula="correction2_{BMI} = \frac{30}{BMI}" %}

#### Korrektion for børn

Fordi børn bruger relativt mere energi pr. kg kropsvægt i forhold til voksne, så kan man bruge en dynamisk korrektion baseret på deres vægt. Hvis børn vejer mindre end 50, så korrigeres det aktivitetsafhængige del af energiforbruget med følgende faktor.

{% include motionsplan/math formula="correction_{weight} = \frac{1 + 0.5 * (50 kg - weight)}{50 kg}" %}

#### Udregning af samlede energiforbrug

Morten Zacho bruger følgende formel til at udregne det ekstra energiforbrug, som kommer fra aktivitetsniveauet. I formlen indtastes minutter for de forskellige aktiviteter:

***

TEE = BMR + weight * (0.03 * sitting + 0.1 * standing + 0.26 * light * correction1<sub>BMI</sub> + 0.5 * moderat * correction2<sub>BMI</sub> + 0.88 * intense * correction2<sub>BMI</sub>) * correction<sub>weight</sub>

***

Morten Zacho forklarer ikke nogen steder, hvordan han er endt på de korrektioner, eller hvor han har formlen til TEE fra.

Hvis du kender algoritmerne bag udregneren på [health-calc.com](https://health-calc.com/diet/energy-expenditure-advanced), så skriv endelig.

{% endcomment %}

## Omregning af energiforbrug fra MET-værdier

Hvis du gerne vil udregne dit energiforbrug mere præcist for forskellige aktiviter, så har jeg en [liste over MET-værdier og en beregner af energiforbrug for aktiviteter](/met/).

## Udregn stofskifte og forbrænding med andre beregnere

Jeg har lavet en [simpel beregner til hvilestofskiftet og basalstofskiftet]({% link _posts/2019-11-01-stofskifteberegner-simpel.md %}) og en [beregner af dit stofskifte, energiforbrug og energibehov]({% link _posts/2019-11-01-stofskifteberegner-nordic-2012.md %}) med en lidt mere generel angivelse af dit daglige fysiske aktivitetsniveau. Endelig kan du tjekke vores [beregner til udregning af ligevægtsindtaget](/ligevaegtsindtag-beregner/).

Hvis du gerne vil have en energiberegner på engelsk, så har Morten Zacho lavet denne [energiforbrugberegner](https://health-calc.com/diet/energy-expenditure-advanced).

<details markdown="1" class="references">
  <summary><h2 id="references">Referencer</h2></summary>

- Schofield, W.N. 1985. Predicting basal metabolic rate, new standards and review of previous work. Hum. Nutr. Clin. Nutr., 39C (suppl. 1): 5-41. <https://pubmed.ncbi.nlm.nih.gov/4044297/>
- Waterlow, John C., Nevin S. Scrimshaw, og Beat Schürch. 1996. “Energy and Protein requirements, Proceedings of an IDECG workshop”. Eur J Clin Nutr 50 (februar): 1–197. <https://archive.unu.edu/unupress/food2/UID01E/UID01E00.HTM>.
</summary>
