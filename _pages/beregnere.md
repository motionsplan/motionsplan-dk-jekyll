---
layout: single
toc: true
permalink: /beregnere/
excerpt: "Brug vores beregnere til at finde din BMI, fedtprocent, ligevægtsindtag og meget mere. Få præcise beregninger til din træning og sundhed her."
description: "Brug vores beregnere til at finde din BMI, fedtprocent, ligevægtsindtag og meget mere. Få præcise beregninger til din træning og sundhed her."
title: &title "Beregnere til træning og sundhed"
seo_title: "Præcise beregnere til træning, sundhed og kost | Motionsplan"
author_profile: true
header:
  overlay_image: https://images.unsplash.com/photo-1608792992053-f397e328a56d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&h=630&w=1200&q=60
  teaser: https://images.unsplash.com/photo-1608792992053-f397e328a56d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&h=300&w=400&q=10
  caption: *title
  alt: Photo by Clem Onojeghuo on Unsplash
  actions:
    - label: "<i class='fas fa-stopwatch'></i> Tests"
      url: "/tests/"
    - label: "<i class='fas fa-calculator'></i> Beregnere"
      url: "#calculators"
    - label: "<i class='fas fa-tools'></i> Værktøjer"
      url: "/vaerktoejer/"
#    - label: "<i class='fas fa-chart-line'></i> Analyseværktøjer"
#      url: "/biomekanik/"
    - label: "<i class='fas fa-brain'></i> Psykologiske tests"
      url: "/vurderingsvaerktoejer/"
breadcrumbs: true
classes: wide
---

Brug vores beregnere til at finde din BMI, fedtprocent, ligevægtsindtag og meget mere. Få præcise beregninger til din træning og sundhed her.

Beregnerne hjælper dig med at omregne fra en enhed til en anden, eller udregne fakta om din kost eller sundhed. Du kan også finde [alle tests til træning her](/tests/).

## Oversigt over alle beregnere
{: id="calculators" }

{% include table/filter-table-beregnere.html %}

<details markdown="1" class="faq">
  <summary><h3>🏋️‍♀️📏 BMI beregner, taljemål og idealvægt</h3></summary>

Det er meget populært at udregne sin BMI. Jeg har lavet en [BMI beregner](/bmi-beregner/), hvor du kan læse mere om BMI og lave en beregning af dit eget BMI. Tjek også vores [BMI beregner til børn](/bmi-beregner-boern-unge-teenagere/).

Du kan bl.a. prøve vores [beregner til idealvægt](/idealvaegt/), [taljemål](/taljemaal/) og [talje-hofte-forhold](/talje-hofte-ratio/).
</details>

<details markdown="1" class="faq">
  <summary><h3>🧑‍🔬📊 Beregnere til kropssammensætning og fedtprocent</h3></summary>

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

</details>

<details markdown="1" class="faq">
  <summary><h3>🍏🔢 Kalorieberegner, ligevægtsindtag, energi og forbrænding</h3></summary>

Rigtig mange er på udkig efter en kalorieberegner, som kan [udregne dit ligevægtsindtag](/ligevaegtsindtag-beregner/). Det er et af de rigtig populære punkter her på siden.

Jeg har skrevet mere om [forskellige typer kalorieberegnere](/kalorieberegner/).

{% assign site_posts = site.posts | where: "tags", "kalorieberegner" | sort: "date" %}

<div class="feature__wrapper markdown="1">
{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>
</details>

<details markdown="1" class="faq">
  <summary><h3>🏋️‍♂️📐 Træningsberegnere</h3></summary>

{% assign site_posts = site.posts | where: "tags", "træning" | where: "tags", "beregner" | sort: "date" %}

<div class="feature__wrapper" markdown="1">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>
</details>


<details markdown="1" class="faq">
  <summary><h3>🏃‍♂️📊 Løbeberegnere & Løbeværktøjer</h3></summary>

{% assign site_posts = site.posts | where: "tags", "løb" | where: "tags", "beregner" | sort: "date" %}

<div class="feature__wrapper" markdown="1">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Se alle løbeværktøjer](/loeb/vaerktoejer/){: .btn .btn--success .btn--center }

</div>
</details>

## De mest populære beregnere

{% assign site_posts = site.posts | where: "tags", "beregner" | where: "tags", "featured" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Interaktive artikler med beregnere

Jeg har skrevet en række artikler, hvor jeg har inkluderet beregnere for at illustrere pointerne i artiklerne. Jeg synes selv, at det gør artiklerne meget engagerende.

{% assign site_posts = site.posts | where: "tags", "interaktiv artikel" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
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

## Alle beregnere på Motionsplan

{% assign site_posts = site.posts | where: "tags", "beregner" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>
