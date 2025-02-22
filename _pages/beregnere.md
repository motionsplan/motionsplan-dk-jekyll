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
  overlay_image: https://images.unsplash.com/photo-1475274110913-480c45d0e873?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=630&w=1200&q=10
  teaser: https://images.unsplash.com/photo-1475274110913-480c45d0e873?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=300&w=400&q=10
  caption: *title
  alt: Photo by Clem Onojeghuo on Unsplash
breadcrumbs: true
classes: wide
---

{{ page.excerpt }}

Jeg har samlet alle beregnere og tests her på siden. Til de fleste tests hører der også en beregner, der kan give dig resultatet på testen. Men der er også beregnere, som bare hjælper med at omregne ting eller udregne fx ting om din kost eller sundhed.

Du kan læse mere om [alle tests til træning her](/tests/).

## Oversigt over alle beregnere

{% assign site_posts = site.posts | where: "tags", "beregner" | where_exp: "post", "post.url != page.url" | sort: "date" %}

{% if site_posts.size > 0 %}
| Test | Måler | Udstyr |
|------|-------|--------|
  {%- for post in site_posts %}
| [{{ post.meta.name | default: post.title  }}]({{ post.url }}) | {{ post.meta.measures }} | {{ post.meta.equipment }} |
  {%- endfor %}
{% endif %}

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

{% comment %}

## Energi & Forbrænding

{% endcomment %}

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

{% comment %}

## Træningsberegnere

{% endcomment %}

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

## Interaktive artikler

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
