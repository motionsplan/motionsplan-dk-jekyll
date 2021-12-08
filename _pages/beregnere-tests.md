---
layout: single
toc: true
permalink: /beregnere-tests/
redirect_from:
  - /omregn/
excerpt: "Vi har lavet en lang række beregnere og tests, som du kan bruge i forbindelse med din træning. Se den samlede liste her. "
title: &title "Beregnere & Tests"
seo_title: "Beregnere & Tests til træning | Motionsplan"
author_profile: true
header:
  overlay_image: https://images.unsplash.com/photo-1475274110913-480c45d0e873?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1960&q=5
  caption: *title
  alt: Photo by Clem Onojeghuo on Unsplash
  actions:
    - label: "<i class='fas fa-download'></i> Læs mere om tests"
      url: "/tests/"
---

{{ page.excerpt }}

Jeg har samlet alle beregnere og tests her på siden. Til de fleste tests hører der også en beregner, der kan give dig resultatet på testen. Men der er også beregnere, som bare hjælper med at omregne ting eller udregne fx ting om din kost eller sundhed.

Du kan læse mere om [alle tests til træning her](/tests/).

## BMI beregner, taljemål og idealvægt

Det er meget populært at udregne sin BMI. Jeg har lavet en [BMI beregner](/bmi/), hvor du kan læse mere om BMI og lave en beregning af dit eget BMI.

Du kan bl.a. prøve vores [beregner til idealvægt]({% link _posts/2020-05-30-ideal-weight.md %}) eller [taljemål og hoftemål]({% link _posts/2019-10-14-taljemaal.md %}).

## Beregnere til kropssammensætning og fedtprocent

Vi har beskrevet [alle måder at måle fedtprocent på](/maal-fedtprocent/), men der er mange måder at finde sin kropskomposition på.

{% assign site_posts = site.posts | where: "tags", "test" | where: "tags", "kropskomposition" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 6 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Kalorieberegner og ligevægtsindtag

Rigtig mange er på udkig efter en kalorieberegner, som kan [udregne dit ligevægtsindtag]({% link _posts/2019-11-01-stofskifte-ligevaegtsberegner.md %}). Det er et af de rigtig populære punkter her på siden.

Jeg har skrevet mere om [forskellige typer kalorieberegnere](/kalorieberegner/).

{% assign site_posts = site.posts | where: "tags", "kalorieberegner" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 6 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Konditionstests

Dit kredsløb og din [maksimale iltoptagelse]({% link _posts/2019-11-03-intensiteten-og-vo2max.md %}) har stor betydning for din sundhed. Vi har skrevet en del om [kondition og kondital](/kondital/). Men det er også interessant at teste sit eget kondital.

Det kan du gøre på flere forskellige måder, og du kan springe direkte til en [oversigt over alle konditionstests](/kondition/tests/), eller du kan lade dig inspirere af oversigten herunder.

{% assign site_posts = site.posts | where: "tags", "test" | where: "tags", "konditionstest" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Løbetests

Hvis du godt kan lide at løbe, så kan det være en god ide en gang imellem at lave en løbetest, så du kan se, hvordan det går med træningen.

{% assign site_posts = site.posts | where: "tags", "test" | where: "tags", "løbetest" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Gangtests

Gangtests er ret populære - særligt for folk der ikke har lyst til at lave en maksimal løbetest eller cykeltest. Men faktisk kan alle kaste sig ud i en gåtest. Det er faktisk ikke så let at holde et højt gangtempo over tid.

{% assign site_posts = site.posts | where: "tags", "test" | where: "tags", "gangtest" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Cykeltests

Det er populært at test sig selv på cykel. Nogle af fordelene er, at det er ret let tilgængeligt, og du let kan blive guidet undervejs i testen. Du kan både finde maksimale og submaksimale tests.

{% assign site_posts = site.posts | where: "tags", "test" | where: "tags", "cykeltest" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Psykologiske tests

{% assign site_posts = site.posts | where: "tags", "psykologi" | where: "tags", "test" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Springtest og hoppetests

{% assign site_posts = site.posts | where: "tags", "springtest" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## De mest populære beregnere og tests

{% assign site_posts = site.posts | where: "tags", "beregner" | where: "tags", "featured" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 6 %}
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

## Alle tests på Motionsplan

{% assign site_posts = site.posts | where: "tags", "test" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>
