---
layout: single
toc: true
permalink: /tests/
excerpt: "Oversigt over alle fysiske fitness tests til gang, løb, cykling, styrketræning, balance, smidighed og roning og træning"
title: &title "Alle tests"
seo_title: "Fysiske og fysiologiske tests til fitness og træning | Motionsplan"
author_profile: true
header:
  overlay_image: https://images.unsplash.com/photo-1428790067070-0ebf4418d9d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=5
  teaser: https://images.unsplash.com/photo-1428790067070-0ebf4418d9d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=5
  caption: *title
  alt: Photo by Clem Onojeghuo on Unsplash
---

{{ page.excerpt }}

## Konditionstests

Det er altid interessant at teste sin kondition, sin [maksimale iltoptagelse]({% link _posts/2019-11-03-intensiteten-og-vo2max.md %}) og sit [kondital](/kondital/). Her har jeg samlet alle konditionstests her på Motionsplan.

Kommer jeg i bedre form og kondition? Udregn dit kondital og iltoptagelse med vores beregnere og se om du får et bedre kondital og fremgang i træningen. Du kan se en mere uddybende side om [konditionstests her](/kondition/tests/).

{% assign site_posts = site.posts | where: "tags", "test" | where: "tags", "konditionstest" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Løbetests

Der findes flere løbetests, som du kan bruge til at teste dit nuværende niveau.

{% assign site_posts = site.posts | where: "tags", "test" | where: "tags", "løbetest" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Gangtests

Gangtests kan være en rigtig god måde at få tjekket sit nuværende fysiske niveau. Disse gangtests er ofte benyttet til lidt ældre mennesker, som ikke kan løbe eller cykle.

{% assign site_posts = site.posts | where: "tags", "test" | where: "tags", "gangtest" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Cykeltests

Cykling kan være en rigtig god måde at teste sig selv på. Her har jeg samlet en oversigt over alle cykeltests her på siden.

{% assign site_posts = site.posts | where: "tags", "test" | where: "tags", "cykeltest" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Alle fitness tests på Motionsplan

{% assign site_posts = site.posts | where: "tags", "test" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>
