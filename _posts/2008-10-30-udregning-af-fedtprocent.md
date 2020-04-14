---
title: "Udregning af fedtprocent"
permalink: /artikel/udregning-af-fedtprocent
redirect_from:
  - /udregn-fp/
excerpt: "Beregn din fedtprocent med denne enkle formel, som kun kræver din højde og vægt."
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
  - image_path: https://cdn6.bogreolen.dk/00039/91685/cover.1571714918.jpg
    alt: "Exercise Physiology - Nutrition, Energy, and Human Performance"
    title: "Exercise Physiology - Nutrition, Energy, and Human Performance"
    excerpt: "Skrevet af BS, William D., PhD McArdle, M.Ed, Frank I. Katch, Victor L. Katch - og indeholder bl.a. formlen til at udregne fedtprocenten."
    url: "https://www.partner-ads.com/dk/klikbanner.php?partnerid=28187&bannerid=55214&htmlurl=https://bogreolen.dk/exercise-physiology_bs_9781451193831"
    btn_label: "Læs mere"
    btn_class: "btn--success"
---

*[BMI]: Body Mass Index

Nedenunder kan du udregne BMI og fedtprocent og sammenligne dig med _det normale_. Målingen er indirekte og tager ikke højde for, om din vægt skyldes muskler eller fedt.

Der er mange metoder til at måle kropskomposition. De vigtigste parametre for mig er styrke, hurtighed, udholdenhed, springhøjde. Det er de parametre, du har brug for i livet, mens kropssammensætningen jo ikke tilføjer noget til dit liv.

{% include calculate-fat-percent.html %}

## Body Mass Index (BMI)

BMI er nogenlunde korreleret med fedtprocenten og kan derfor bruges til at estimere fedme i en større population. BMI tager ikke højde for, om din vægt skyldes muskler eller fedt. BMI er ikke præcis, hvis du er høj eller eller ikke så høj. BMI fungerer bedst til voksne mennesker, som har en højde indenfor normalområdet.

BMI er let at udregne, når du kender din højde og din vægt:

{% include math formula="BMI = \frac{weight (kg)}{height (m)^2}" %}

I tabel 1 kan du se normalværdierne for BMI:

| Tabel 1: Body Mass Index                                           |||
| Klassifikation | Kvinde (kg/m<sup>2</sup>) | Mand (kg/m<sup>2</sup>) |
|----------------|---------------------------|-------------------------|
| Undervægtig    | Under 20                  | Under 20                |
| Normal         | 20-25                     | 20-25                   |
| Overvægtig     | 25-30                     | 25-30                   |
| Fed            | 30 og højere              | 30 og højere            |

## Fedtprocent ud fra udregning

Fedtprocenten er den relative del af kropsvægten, som udgøres af fedt. Du har behov for fedt for overhovedet at kunne holde varmen. 

Formularen oven for benytter sig af to forskellige udregninger til at estimere fedtprocenten.

### Heitmann

Heitmann bruger i sin formel køn, BMI og alder.

#### Mænd

{% include math formula="PBF = \frac{0.988 * BMI + 0.242 * weight (kg) + 0.094 * age - 30.18;}{weight (kg)}" %}

#### Kvinder

{% include math formula="PBF = \frac{0.988 * BMI + 0.344 * weight (kg) + 0.094 * age - 30.18}{height (m)^2}" %}

### Durnin & Womersley

Durnin & Womersley bruger i sin formel køn og alder.

#### Mænd

PBF = 1.34 * BMI - 12.47

#### Kvinder

PBF = 1.37 * BMI - 3.47

### Duerenberg et al.

PBF = 1.20 * BMI + 0.23 * age - 10.8 * sex[^note] - 5.4;

[^note]: sex: men = 1; female = 0

## Normer for fedtprocent

| Tabel 2: Fedtprocent normer                            |||
| Klassifikation         | Kvinde (% fedt) | Mand (% fedt) |
|------------------------|-----------------|---------------|
| Essentiel fedt         | 10-12%          | 2-4%          |
| Udholdenhedsatlet      | 14-16%          | 6-8%          |
| Atlet                  | 17-20%          | 10-13%        |
| Fitness                | 21-24%          | 14-17%        |
| Grænsende til problem  | 24-29%          | 18-22%        |
| Fed                    | 30 og højere    | 23 og højere  |

_Data fra Howley and Franks: Health/Fitness Instructor's Handbook, Human Kinetics 1986._

Udregningen af fedtprocent i formularen har en standardfejl på på 3,9%. Det betyder, at den værdi du har udregnet i formularen kan svinge med 3,9% ift. den virkelige værdi. Fedtprocenten er udregnet på baggrund af BMI og er således behæftet med de samme usikkerheder som BMI er.

## Andre typer målinger af kropskomposition

{% assign site_posts = site.posts | where: "category", "Test" | where: "tags", "kropskomposition" | sort: "date" %}

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single-simple.html %}
  {% endfor %}
{% endif %}

## Referencer

Predicting Body Composition in College Students Using the Womersley and Durnin Body Mass Index Equation Jeremy P. Loenneke*1BCDG, MS; Kathryn M. Hirt2CDG, MS; Jacob M. Wilson3CDG, PhD; Jeremy T Barnes4ABDG, PhD; Thomas J Pujol4ABDG, EdD

Evaluation of body fat estimated from body mass index, skinfolds and impedance. A comparative study.
BL Heitmann - European journal of clinical nutrition, 1990 - europepmc.org

Duerenberg et al. https://www.ncbi.nlm.nih.gov/pubmed/2043597

{% include feature_row type="left" %}
