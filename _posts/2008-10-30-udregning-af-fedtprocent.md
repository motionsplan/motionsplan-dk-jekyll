---
title: "Udregning af fedtprocent"
permalink: /artikel/udregning-af-fedtprocent
excerpt: "Der er forskellige måder at udregne din fedtprocent på. Metoderne er mere eller mindre reliable og valide."
language: da
header:
  overlay_image: /assets/images/blog/udregning-af-fedtprocent.jpg
  teaser: /assets/images/blog/udregning-af-fedtprocent.jpg
tags:
  - fedtprocent
  - udregning
category:
  - Beregnere
  - Test
last_modified_at: 2019-03-06T23:14:14Z
toc: true
feature_row:
  - image_path: https://cdn6.bogreolen.dk/00039/91685/cover.1571714918.jpg
    alt: "Exercise Physiology - Nutrition, Energy, and Human Performance"
    title: "Exercise Physiology - Nutrition, Energy, and Human Performance"
    excerpt: "Skrevet af BS, William D., PhD McArdle, M.Ed, Frank I. Katch, Victor L. Katch."
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

| Tabel 1: Body Mass Index                     |||
| Klassifikation | Kvinde (kg/m2) | Mand (kg/m2) |
|----------------|----------------|--------------|
| Undervægtig    | Under 20       | Under 20     |
| Normal         | 20-25          | 20-25        |
| Overvægtig     | 25-30          | 25-30        |
| Fed            | 30 og højere   | 30 og højere |

## Fedtprocent ud fra udregning

Fedtprocenten er den relative del af kropsvægten, som udgøres af fedt. Du har behov for fedt for overhovedet at kunne holde varmen. I formularen oven for er fedtprocenten udregnet ud fra køn, BMI og alder.

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

{% assign site_posts = site.posts | where: "tags", "kropskomposition" | sort: "date" %}

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single-simple.html %}
  {% endfor %}
{% endif %}

## Referencer

{% include feature_row type="left" %}
