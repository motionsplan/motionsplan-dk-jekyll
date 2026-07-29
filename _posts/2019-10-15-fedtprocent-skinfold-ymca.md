---
title: "YMCA metoden - Mål fedtprocent med fedttang"
permalink: /skinfold-ymca/
excerpt: "YMCA-metoden er baseret på Jackson & Pollocks formler, men specielt tilpasset YMCA's behov. Det betyder, at mænd og kvinder måles på de samme punkter, og hvis det volder problemer at måle på låret, så kan den måling let udelades."
language: da
header:
  teaser: /assets/images/shutterstock/fedtmaaling-hudfoldsmaaling.jpg
category:
  - Tests
  - Fedtprocent
tags:
  - måling
  - fedtprocent
  - kropskomposition
  - skinfold
# 1. Til dit eget Jekyll-site og oversigter (/tests/)
meta:
  name: "YMCA metoden"
  measures: "fedtprocent"
  type: "skinfold"
  equipment: "hudfoldsmaaler"
  intensity: "ingen"
  method: "indirekte"
tools:
  - title: "YMCA Hudfoldsberegner"
    description: "Beregn din fedtprocent med YMCA-metoden ud fra 3 eller 4 hudfoldsmålinger (mave, triceps, hofte og valgfrit lår)."
    anchor: "#ymca-fedtprocent-beregner"
    type: "beregner"
    measures: "fedtprocent"
    category: "HealthAndFitnessApplication"
last_modified_at: 2026-03-06T23:14:14Z
toc: true
---

YMCA hudfoldstesten er en af de mest anvendte metoder til måling af fedtprocent. Den har den fordel, at man frit kan vælge om lår-målingen skal indgå. Det kan nemlig godt være besværligt at lave lårmålingen - og det kan være forbundet blufærdighed også.

*[YMCA]: Young Men's Christian Association

## Hvordan laver man målingerne?

Mål hudfoldstykkelsen med en fedttang fire steder på kroppen:

- på maven ved navlen
- midt på triceps
- lige over hoftebenskammen
- foran på låret _(Hvis lår-målingen giver problemer - enten pga. af problemer med at få en defineret hudfold eller pga. af tøj - så kan man vælge at udelade denne måling.)_

{% include figure image_path="/assets/images/fedtprocent/ymca.png" caption="Her skal der måles til YMCA-formlen for fedtprocent." alt="ymca fedtprocent målinger" %}

## YMCA fedtprocent beregner

Angiv værdierne i beregneren nedenunder.

{% include calculator/calculate-fatpercent-skinfold-ymca.html %}

{% include calc/skinfold.html 
   calc_id="skinfold-ymca-4" 
   title="📐 YMCA 4-punkt" 
%}

## Formel til YMCA

YMCA hudfoldstesten er baseret på Jackson & Pollocks formler. Formlerne er dog specielt tilpasset til YMCA og gjort enklere, så både mænd og kvinder vurderes ud fra de samme målepunkter. Samtidig kan lårmålingen let ekskluderes. Validiteten i testen påvirkes kun ganske lidt af at udelade låret.

Når du har beregnet din fedtprocent, så kan du tjekke en [normal fedtprocent i vores tabel](/fedtprocent-normer/).

## Alternativer til YMCA-formlen

{% assign site_posts = site.posts | where: "tags", "skinfold" | where_exp: "post", "post.url != page.url" | sort: "date" %}

{% assign i = 0 %}

{% if site_posts.size > 0 %}
  {% for post in site_posts %}

{% assign i = i | plus: 1 %}

### [{{ i }}. {{ post.title }}]({{ post.url }})

{{ post.excerpt }}

  {% endfor %}
{% endif %}

<details markdown="1" class="references">
  <summary><h2 id="references">Referencer</h2></summary>

- Golding, Lawrence A. 2000. Ymca Fitness Testing and Assessment Manual. 4. udg. Human Kinetics Publishers. Set 10. november 2019. <https://www.amazon.com/Ymca-Fitness-Testing-Assessment-Manual/dp/0736033165>.
- Jackson, A. S., og M. L. Pollock. 2004. “[Generalized Equations for Predicting Body Density of Men. 1978](https://www.ncbi.nlm.nih.gov/pubmed/14748950)”. The British Journal of Nutrition 91 (1): 161–68.
</details>

{% include motionsplan/affiliate-box.html type="product" item=site.data.affiliates.products.accumeasure_fat_caliper view="card" %}

{% include motionsplan/affiliate-box.html type="product" item=site.data.affiliates.products.harpenden_skinfold_caliper view="card" %}