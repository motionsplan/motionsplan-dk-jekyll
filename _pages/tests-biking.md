---
layout: single
toc: true
permalink: /tests/cykling/
excerpt: "Oversigt over alle cykeltests."
title: &title "Alle tests"
author_profile: true
header:
  overlay_image: https://images.unsplash.com/photo-1428790067070-0ebf4418d9d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&h=630&w=1200&q=10
  teaser: https://images.unsplash.com/photo-1428790067070-0ebf4418d9d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&h=300&w=400&q=10
  caption: *title
  alt: Photo by Clem Onojeghuo on Unsplash
breadcrumbs: true
---

{{ page.excerpt }}

## Konditionstests

Det er altid interessant at teste sin kondition, sin [maksimale iltoptagelse](/maksimale-iltoptagelse-vo2max/) og sit [kondital](/kondital/). Her har jeg samlet alle konditionstests her på Motionsplan.

Kommer jeg i bedre form og kondition? Udregn dit kondital og iltoptagelse med vores beregnere og se om du får et bedre kondital og fremgang i træningen. Du kan se en mere uddybende side om [konditionstests](/test-kondition-konditest-kondital/).

{% assign site_posts = site.posts | where: "tags", "cykeltest" | where: "tags", "konditionstest" | sort: "date" %}

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
