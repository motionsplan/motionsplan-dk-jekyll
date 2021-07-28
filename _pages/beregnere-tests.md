---
layout: single
toc: true
permalink: /beregnere-tests/
excerpt: "Vi har lavet en lang række beregnere og tests, som du kan bruge i forbindelse med din træning. Se den samlede liste her. "
title: &title "Beregnere & Tests"
author_profile: true
header:
  overlay_image: https://images.unsplash.com/photo-1475274110913-480c45d0e873?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1960&q=80
  caption: *title
  alt: Photo by Clem Onojeghuo on Unsplash
  actions:
    - label: "<i class='fas fa-download'></i> Læs mere om tests"
      url: "/tests/"
    - label: "<i class='fas fa-download'></i> Læs om tracking"
      url: "/tracking/"
feature_row_feature:
  - image_path: https://images.unsplash.com/photo-1501820434261-5bb046afcf6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80
    alt: "Konditionstests"
    title: "Konditionstests"
    excerpt: "Kommer jeg i bedre form og kondition? Udregn dit kondital og iltoptagelse med vores beregnere og se om du får et bedre kondital og fremgang i træningen."
    url: "/kondition/tests/"
    btn_label: "Se kun konditionstests"
    btn_class: "btn--danger"
---

{{ page.excerpt }}

Du kan bl.a. prøve vores [beregner til idealvægt]({% link _posts/2020-05-30-ideal-weight.md %}) eller [taljemål og hoftemål]({% link _posts/2019-10-14-taljemaal.md %}).

## BMI beregner

Det er meget populært at udregne sin BMI. Jeg har lavet en [BMI beregner](/bmi/), hvor du kan læse mere om BMI og lave en beregning af dit eget BMI.

## Kalorieberegner og ligevægtsindtag

Rigtig mange er på udkig efter en kalorieberegner, som kan [udregne dit ligevægtsindtag]({% link _posts/2019-11-01-stofskifte-ligevaegtsberegner.md %}). Det er et af de rigtig populære punkter her på siden.

{% comment %}

## Udregn taljemål og idealvægt

bmi beregner beregn bmi bmi udregning

kalorieberegner ligevægtsindtag bmr ligevægtsindtag beregner

idealvægt

taljemål

beregn kalorier i mad

kondital beregning cykling 

{% endcomment %}

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

Du kan læse mere om [alle tests til træning her](/tests/).

## Konditionstests

{% include feature_row id="feature_row_feature" type="left" %}
