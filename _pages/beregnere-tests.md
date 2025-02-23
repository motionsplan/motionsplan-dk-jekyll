---
layout: single
toc: false
permalink: /beregnere-tests/
redirect_from:
  - /omregn/
excerpt: "Vi har lavet en lang række beregnere og tests, som du kan bruge i forbindelse med din træning. Se den samlede liste her."
description: "Få overblik over de bedste tests og beregnere til træning og sundhed. Test din kondition, styrke og sundhedsprofil med vores værktøjer og guides."
title: &title "Tests & Beregnere"
seo_title: "Tests & Beregnere - Find din form og sundhed | Motionsplan"
author_profile: true
header:
  overlay_image: https://images.unsplash.com/photo-1475274110913-480c45d0e873?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=630&w=1200&q=10
  caption: *title
  alt: Photo by Clem Onojeghuo on Unsplash
  actions:
    - label: "<i class='fas fa-download'></i> Tests"
      url: "/tests/"
    - label: "<i class='fas fa-download'></i> Beregnere"
      url: "/beregnere/"
    - label: "<i class='fas fa-download'></i> Værktøjer"
      url: "/vurderingsvaerktoejer/"
breadcrumbs: true
classes: wide
feature_row_navigation:
  - image_path: https://images.unsplash.com/photo-1428790067070-0ebf4418d9d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&h=300&w=400&q=10
    alt: "Tests"
    title: "Tests"
    excerpt: "Udforsk fysiske tests, der måler din kondition, styrke og præstation. Følg din udvikling og se din fremgang."
    url: "/tests/"
    btn_label: "Gå til tests"
    btn_class: "btn--success"
  - image_path: https://images.unsplash.com/photo-1475274110913-480c45d0e873?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=300&w=400&q=10
    alt: "Beregnere"
    title: "Beregnere"
    excerpt: "Brug vores beregnere til at få indsigt i din forbrænding, kondital og BMI. Få detaljeret information om din sundhed."
    url: "/beregnere/"
    btn_label: "Gå til beregnere"
    btn_class: "btn--success"
  - image_path: https://images.unsplash.com/photo-1546016366-bf061374d54e?auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fit=crop&h=300&w=400&q=10
    alt: "Værktøjer"
    title: "Værktøjer"
    excerpt: "Test din mentale og fysiske sundhed. Få indsigt i dine styrker og opdag områder, der kan forbedres."
    url: "/vurderingsvaerktoejer/"
    btn_label: "Gå til værktøjer"
    btn_class: "btn--success"
---

{{ page.excerpt }}

Jeg har samlet alle beregnere og tests her på siden. Til de fleste tests hører der også en beregner, der kan give dig resultatet på testen. Men der er også beregnere, som bare hjælper med at omregne ting eller udregne fx ting om din kost eller sundhed.

{% include feature_row id="feature_row_navigation" %}

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

## Konditionstests

Dit kredsløb og din [maksimale iltoptagelse](/maksimale-iltoptagelse-vo2max/) har stor betydning for din sundhed. Vi har skrevet en del om [kondition og kondital](/kondital/). Men det er også interessant at teste sit eget kondital.

Det kan du gøre på flere forskellige måder, og du kan springe direkte til en [oversigt over alle konditionstests](/kondition/tests/), eller du kan lade dig inspirere af oversigten herunder.

{% assign site_posts = site.posts | where: "tags", "test" | where: "tags", "konditionstest" | where: "tags", "populær" | sort: "date" %}

<div class="feature__wrapper" markdown="1">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Se alle konditionstests](/kondition/tests/){: .btn .btn--success .btn--center }

</div>

## Løbetests

Hvis du godt kan lide at løbe, så kan det være en god ide en gang imellem at lave en løbetest, så du kan se, hvordan det går med træningen.

{% assign site_posts = site.posts | where: "tags", "test" | where: "tags", "løbetest" | where: "tags", "populær" | sort: "date" %}

<div class="feature__wrapper" markdown="1">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Se alle løbetests](/kondition/loeb/){: .btn .btn--success .btn--center }

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

{% assign site_posts = site.posts | where: "tags", "test" | where: "tags", "cykeltest" | where: "tags", "populær" | sort: "date" %}

<div class="feature__wrapper" markdown="1">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Se alle cykeltests](/tests/cykling/){: .btn .btn--success .btn--center }

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

## Springtest og hoppetests

{% assign site_posts = site.posts | where: "tags", "springtest" | sort: "date" %}

<div class="feature__wrapper" markdown="1">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Se alle hoppe- og springtests](/springtests-hoppehoejde/){: .btn .btn--success .btn--center }

</div>

## De mest populære beregnere

{% assign site_posts = site.posts | where: "tags", "beregner" | where: "tags", "populær" | sort: "date" %}

<div class="feature__wrapper" markdown="1">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Se alle beregnere](/beregnere/){: .btn .btn--success .btn--center }

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
