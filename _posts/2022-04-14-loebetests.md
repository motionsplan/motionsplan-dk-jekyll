---
title: &title "Løbetests"
permalink: /loebetests/
language: da
header:
  teaser: https://images.unsplash.com/photo-1540539234-c14a20fb7c7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHJ1bm5pbmd8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=5
  caption: *title
category:
  - Løb
tags:
  - beregner
last_modified_at: 2022-03-12T22:21:26Z
feature_row_feature:
  - image_path: https://images.unsplash.com/photo-1540539234-c14a20fb7c7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHJ1bm5pbmd8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=5
    alt: "Løbesidens Løbsberegner"
    title: "Løbeberegner"
    excerpt: "Jeg har lavet en løbeberegner baseret, der kan beregne dit træningstempo og konkurrencetider ud fra Jack Daniels Running Formula. Her kan du også læse om forskellige træningsmetoder."
    url: "/loebesiden-jack-daniels-loebeberegner/"
    btn_label: "Brug løbsberegneren"
    btn_class: "btn--info"
# Hvad koster en løbetest
# Hvordan ved jeg om jeg er i god form?
# Er en løbetest nødvendig
# Hvilken løbetest skal jeg vælge?
---

Der findes rigtig mange forskellige løbetests. Her har vi samlet alle de gængse tests, så du kan få testet din løbeform.

## Løbetests og kondition

{% assign site_posts = site.posts | where: "tags", "løbetest" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Coopers Løbetest



## Løbetests

## Fysiologisk løbetest

## Løbestilsanalyse og test af løbestil
