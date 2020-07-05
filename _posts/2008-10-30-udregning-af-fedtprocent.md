---
title: "Beregn din fedtprocent: Enkel udregning med højde og vægt"
seo_title: "Fedtprocent • Beregn din fedtprocent ud fra din højde og vægt »"
permalink: /artikel/udregning-af-fedtprocent
redirect_from:
  - /udregn-fp/
excerpt: "Beregn din fedtprocent med en udregning med din højde og vægt i denne simple beregner. Beregneren udregner også dit BMI."
language: da
header:
  overlay_image: https://images.unsplash.com/photo-1522844990619-4951c40f7eda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80
  caption: Photo by i yunmai on Unsplash
  teaser: https://images.unsplash.com/photo-1522844990619-4951c40f7eda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80
category:
  - Test
tags:
  - fedtprocent
  - test
  - kropskomposition
  - skinfold
last_modified_at: 2020-02-11T23:14:14Z
toc: true
feature_row:
  - image_path: https://cdn6.tales.dk/00039/91685/cover.1589756619.jpg
    alt: "Exercise Physiology - Nutrition, Energy, and Human Performance"
    title: "Exercise Physiology - Nutrition, Energy, and Human Performance"
    excerpt: "Skrevet af BS, William D., PhD McArdle, M.Ed, Frank I. Katch, Victor L. Katch - og indeholder bl.a. formlen til at udregne fedtprocenten."
    url: "https://www.partner-ads.com/dk/klikbanner.php?partnerid=28187&bannerid=55214&htmlurl=https://bogreolen.dk/exercise-physiology_bs_9781451193831"
    btn_label: "Læs mere"
    btn_class: "btn--success"
---

*[BMI]: Body Mass Index

Jeg har lavet en beregner, hvor du kan udregne din fedtprocent på baggrund af din vægt, højde, køn og alder. 

Udregningen er naturligvis forbundet med flere usikkerheder. Beregningen af din fedtprocent er indirekte og inddrager kun din højde og din vægt. Derfor er udregningen unøjagtig, da den ikke har mulighed for at vide, om din vægt skyldes muskler eller fedt.

Der er mange metoder til at måle kropskomposition, og mange går meget op i at finde ud af, hvad deres fedtprocent er.

De vigtigste parametre for mig er styrke, hurtighed, udholdenhed og springhøjde. Det er de parametre, du har brug for i livet, mens en viden om kropssammensætning ikke tilføjer noget til dit liv.

Hvis du fortsat gerne vil udregne din fedtprocent, så fortsæt til vores enkle beregner.

## Udregn din fedtprocent

{% include calculate-fat-percent.html %}

## Beregn din fedtprocent fra højde og vægt

Fedtprocenten er den relative del af kropsvægten, som udgøres af fedt. Du har behov for fedt for at kunne holde varmen 

Formularen benytter sig af flere forskellige udregninger til at estimere fedtprocenten. Formlerne for de enkelte beregninger, kan du se nedenunder.

Baggrunden for beregneren er at BMI på populationsniveau er nogenlunde korreleret med fedtprocent.

### Heitmann beregning af fedtprocent

Heitmann bruger i sin formel køn, BMI og alder.

#### Mænd

{% include math formula="PBF = \frac{0.988 * BMI + 0.242 * weight (kg) + 0.094 * age - 30.18;}{weight (kg)}" %}

#### Kvinder

{% include math formula="PBF = \frac{0.988 * BMI + 0.344 * weight (kg) + 0.094 * age - 30.18}{height (m)^2}" %}

### Durnin & Womersley udregning af fedtprocent

Durnin & Womersley bruger i sin formel køn og alder.

#### Mænd

PBF = 1.34 * BMI - 12.47

#### Kvinder

PBF = 1.37 * BMI - 3.47

### Duerenberg et al. udregning

PBF = 1.20 * BMI + 0.23 * age - 10.8 * sex[^note] - 5.4;

[^note]: sex: men = 1; female = 0

## Usikkerhed i udregningen

Hvad kan jeg så bruge udregningen af fedtprocent til?

Udregningen af fedtprocent efter Heitmanns formel har en standardafvigelse på op til 3,9%. Det betyder, at den værdi du har udregnet i formularen kan svinge med mindst 3,9% ift. din virkelige fedtprocent.

Det betyder i praksis, at hvis du har udregnet din fedtprocent til 15%, så er det mest sandsynlige, at den ligger i intervallet fra 11,1% til 18,9%. Det er en ret stor afvigelse.

Fedtprocenten bliver med begge formler udregnet på baggrund af de samme oplysninger, som man udregner BMI på. Derfor er disse beregninger behæftet med de samme usikkerheder som BMI

- Tager ikke højde for om vægten skyldes muskler eller fedt eller din kropsbygning i det hele taget.

Jeg har skrevet mere om [BMI og lavet en beregner](/bmi/).

Du kan kombinere udregningen af fedtprocent med en øjemålstest. Så har du formentlig en nogenlunde ide om din fedtprocent ligger inden for et sundt spektrum.

{% include figure image_path="https://exerciseandwellness.files.wordpress.com/2016/03/body-fat-percentage-men-women.jpg" caption="Øjemålstest af fedtprocenten - [via](https://exerciseandwellness.wordpress.com/2016/03/28/body-fat-percentages/)" %}

## Andre typer målinger af kropskomposition

Hvis du vil have et mere præcist bud på din fedtprocent, så kan du kigge på vores andre måder at måle fedtprocent på. Men overvej hvorfor du gerne vil have sat tal på din fedtprocent.

{% assign site_posts = site.posts | where: "category", "Test" | where: "tags", "kropskomposition" | sort: "date" %}

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single-simple.html %}
  {% endfor %}
{% endif %}

## Referencer om BMI og fedtprocentmåling

- Loenneke, Jeremy P., Kathryn M. Hirt, Jacob M. Wilson, Jeremy T Barnes, og Thomas J Pujol. 2013. “Predicting Body Composition in College Students Using the Womersley and Durnin Body Mass Index Equation”. Asian Journal of Sports Medicine 4 (2): 153–57. <https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3690736/>.
- Heitmann, B. L. 1990. “Evaluation of Body Fat Estimated from Body Mass Index, Skinfolds and Impedance. A Comparative Study”. European Journal of Clinical Nutrition 44 (11): 831–37.
- Deurenberg, P., J. A. Weststrate, og J. C. Seidell. 1991. “Body Mass Index as a Measure of Body Fatness: Age- and Sex-Specific Prediction Formulas”. The British Journal of Nutrition 65 (2): 105–14. <https://doi.org/10.1079/bjn19910073>.

{% include feature_row type="left" %}
