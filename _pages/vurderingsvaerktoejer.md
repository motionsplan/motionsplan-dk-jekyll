---
layout: single
toc: true
permalink: /vurderingsvaerktoejer/
excerpt: "Brug vores vurderingsværktøjer til at få indsigt i din sundhed, trivsel og livsstil. Screening, risikovurderinger og selvtests samlet ét sted."
description: "Brug vores vurderingsværktøjer til at få indsigt i din sundhed, trivsel og livsstil. Screening, risikovurderinger og selvtests samlet ét sted."
title: &title "Vurderingsværktøjer til din sundhed og trivsel"
seo_title: "Vurderingsværktøjer – få indsigt i din sundhed og trivsel"
author_profile: true
header:
  overlay_image: https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&h=630&w=1200&q=60
  caption: *title
  alt: Photo by Clem Onojeghuo on Unsplash
  actions:
    - label: "<i class='fas fa-stopwatch'></i> Tests"
      url: "/tests/"
    - label: "<i class='fas fa-calculator'></i> Beregnere"
      url: "/beregnere/"
#    - label: "<i class='fas fa-chart-line'></i> Analyseværktøjer"
#      url: "/biomekanik/"
    - label: "<i class='fas fa-tools'></i> Værktøjer"
      url: "/vaerktoejer/"
    - label: "<i class='fas fa-brain'></i> Psykologiske tests"
      url: "#tests"
breadcrumbs: true
classes: wide
---

Vil du have bedre indsigt i din sundhed, trivsel eller livsstil? Vores vurderingsværktøjer hjælper dig med at forstå din fysiske form, mentale velvære og livsstilsvaner.

Uanset om du vil teste din kondition, måle dit stressniveau eller vurdere din risiko for livsstilssygdomme, finder du her et samlet overblik.

Brug værktøjerne som et første skridt mod bedre sundhed og trivsel – og husk, at ingen test kan erstatte en professionel vurdering. Gå i gang med din vurdering i dag!

## Kategorier af vurderingsværktøjer

Fysiske vurderinger
: Her finder du værktøjer til at vurdere din kondition, styrke og generelle fysiske form. Brug dem til at måle din nuværende status og følge din udvikling over tid. De fleste af de fysiske vurderinger finder du under [oversigten over tests](/tests/).

Mentale vurderinger
: Disse værktøjer hjælper dig med at vurdere trivsel, stress og mentale ressourcer. De kan give en indikation af, hvordan du har det, men erstatter ikke professionel rådgivning.

Livsstils- og helbredsrisici
: Få indsigt i, hvordan din livsstil påvirker din sundhed. Disse værktøjer giver dig en idé om risikofaktorer og mulige forbedringsområder.

## Oversigt over alle vurderingsværktøjer
{: id="tests" }

{% assign site_posts = site.posts | where: "tags", "vurderingsværktøj" | where_exp: "post", "post.url != page.url" | sort: "date" %}

{% if site_posts.size > 0 %}
| Test | Måler |
|------|-------|
  {%- for post in site_posts %}
| [{{ post.meta.name | default: post.title  }}]({{ post.url }}) | {{ post.meta.measures }} |
  {%- endfor %}
{% endif %}

## Sådan bruger du vurderingsværktøjerne

For at få mest muligt ud af disse værktøjer er det vigtigt at besvare spørgsmålene ærligt og i en rolig situation. Brug resultaterne som en rettesnor, men vær opmærksom på, at de ikke erstatter professionel rådgivning.

Hvis et resultat giver anledning til bekymring, kan det være en god idé at søge yderligere vejledning hos en fagperson.

## Mest populære vurderingsværktøjer

{% assign site_posts = site.posts | where: "tags", "vurderingsværktøj" | where: "tags", "populær" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Psykologiske tests

{% assign site_posts = site.posts | where: "tags", "psykologisk test" | sort: "date" %}

<div class="feature__wrapper" markdown="1">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Se alle psykologiske tests](/psykiske-sundhedstest/){: .btn .btn--success .btn--center }

</div>

## Afslutning

Udforsk de forskellige vurderingsværktøjer og få værdifuld indsigt i din sundhed og trivsel. Vil du dykke dybere ned i et område? Se vores guides og artikler for mere viden, eller prøv andre [tests](/tests/) og [beregnere](/beregnere/) på Motionsplan.dk!

{% comment %}

***

## BMI beregner, taljemål og idealvægt

Det er meget populært at udregne sin BMI. Jeg har lavet en [BMI beregner](/bmi-beregner/), hvor du kan læse mere om BMI og lave en beregning af dit eget BMI. Tjek også vores [BMI beregner til børn](/bmi-beregner-boern-unge-teenagere/).

Du kan bl.a. prøve vores [beregner til idealvægt](/idealvaegt/), [taljemål](/taljemaal/) og [talje-hofte-forhold](/talje-hofte-ratio/).

## Beregnere til kropssammensætning og fedtprocent

Vi har beskrevet [alle måder at måle fedtprocent på](/maal-fedtprocent/), men der er mange måder at finde sin kropskomposition på.

{% assign site_posts = site.posts | where: "tags", "test" | where: "tags", "kropskomposition" | where: "tags", "metode" | sort: "date" %}

<div class="feature__wrapper" markdown="1">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Alle metoder til kropskomposition](/maal-fedtprocent/){: .btn .btn--success .btn--center }

</div>

## Energi & Forbrænding

## Kalorieberegner og ligevægtsindtag

Rigtig mange er på udkig efter en kalorieberegner, som kan [udregne dit ligevægtsindtag](/ligevaegtsindtag-beregner/). Det er et af de rigtig populære punkter her på siden.

Jeg har skrevet mere om [forskellige typer kalorieberegnere](/kalorieberegner/).

{% assign site_posts = site.posts | where: "tags", "kalorieberegner" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Træningsberegnere

## De mest populære beregnere

{% assign site_posts = site.posts | where: "tags", "beregner" | where: "tags", "featured" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Alle beregnere på Motionsplan

{% assign site_posts = site.posts | where: "tags", "beregner" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## De mest populære tests

{% assign site_posts = site.posts | where: "tags", "test" | where: "tags", "featured" | sort: "date" %}

<div class="feature__wrapper" markdown="1">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Se alle tests](/tests/){: .btn .btn--success .btn--center }

</div>

{% endcomment %}