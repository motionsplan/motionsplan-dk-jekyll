---
layout: single
toc: true
permalink: /tests/
excerpt: "Oversigt over alle fysiske fitness tests til gang, løb, cykling, styrketræning, balance, smidighed og roning og træning"
title: &title "Alle tests"
seo_title: "Fysiske og fysiologiske tests til fitness og træning | Motionsplan"
author_profile: true
header:
  overlay_image: https://images.unsplash.com/photo-1428790067070-0ebf4418d9d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&h=630&w=1200&q=10
  teaser: https://images.unsplash.com/photo-1428790067070-0ebf4418d9d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&h=300&w=400&q=10
  caption: *title
  alt: Photo by Clem Onojeghuo on Unsplash
breadcrumbs: true
feature_row_mental_tests:
  - image_path: https://images.unsplash.com/photo-1546016366-bf061374d54e?auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fit=crop&h=300&w=400&q=10
    alt: "Psykisk og mentalt velvære"
    title: "Psykisk og mentalt velvære"
    excerpt: "Psykisk velvære er lige så vigtigt som fysisk sundhed. Med disse tests kan du få en bedre forståelse af din mentale tilstand og tage de første skridt mod at forbedre din trivsel."
    url: "/psykiske-sundhedstest/"
    btn_label: "Test din mentale sundhed"
    btn_class: "btn--success"
feature_row_test_fat_percent:
  - image_path: https://images.unsplash.com/photo-1611077544170-be90a2f68add?auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fit=crop&h=300&w=400&q=10
    alt: "Hvordan måler jeg min fedtprocent?"
    title: "Mål din fedtprocent"
    excerpt: "Vil du gerne måle din fedtprocent? Her har jeg samlet op på, hvordan du kan måle din fedtprocent. Der er i hvert fald mindst 7 forskellige metoder, du kan afprøve."
    url: "/maal-fedtprocent/"
    btn_label: "Test din fedtprocent"
    btn_class: "btn--success"
classes: wide
---

Tests hjælper dig med at få en præcis måling af din fysiske form og træningsfremgang. Uanset om du er løber, cyklist, eller vil teste din generelle kondition, finder du den rette test her.

## Oversigt over alle tests

{% assign site_posts = site.posts | where: "tags", "test" | where_exp: "post", "post.url != page.url" | sort: "date" %}

{% if site_posts.size > 0 %}
| Test | Måler | Udstyr | Hårdhed | Målgruppe |
|------|-------|--------|------|---------|-----------|
  {%- for post in site_posts %}
| [{{ post.meta.name | default: post.title  }}]({{ post.url }}) | {{ post.meta.measures }} | {{ post.meta.equipment }} | {{ post.meta.max }} | {{ post.meta.target | default: "voksne" }} |
  {%- endfor %}
{% endif %}

## Konditionstests

Det er altid interessant at teste sin kondition, sin [maksimale iltoptagelse](/maksimale-iltoptagelse-vo2max/) og sit [kondital](/kondital/). Her har jeg samlet alle konditionstests her på Motionsplan.

Kommer jeg i bedre form og kondition? Udregn dit kondital og iltoptagelse med vores beregnere og se om du får et bedre kondital og fremgang i træningen. Du kan se en mere uddybende side om [konditionstests](/kondition/tests/).

{% assign site_posts = site.posts | where: "tags", "test" | where: "tags", "konditionstest" | sort: "date" %}

<div class="feature__wrapper" markdown="1">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Se alle konditionstests](/kondition/tests/){: .btn .btn--success .btn--center }

</div>

## Løbetests

Der findes flere løbetests, som du kan bruge til at teste dit nuværende niveau.

{% assign site_posts = site.posts | where: "tags", "test" | where: "tags", "løbetest" | sort: "date" %}

<div class="feature__wrapper" markdown="1">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Se alle løbetests](/tests/loeb/){: .btn .btn--success .btn--center }

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

<div class="feature__wrapper" markdown="1">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Se alle cykeltests](/tests/cykling/){: .btn .btn--success .btn--center }

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

{% include feature_row id="feature_row_mental_tests" type="left" %}

{% include feature_row id="feature_row_fat_percent" type="left" %}