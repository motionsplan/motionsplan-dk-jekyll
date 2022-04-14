---
title: &title "Løbeberegnere"
permalink: /loebeberegnere/
language: da
header:
  teaser: https://images.unsplash.com/photo-1587587448924-b5a1db520d29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=5
  caption: *title
category:
  - Løb
tags:
  - beregner
last_modified_at: 2022-03-12T22:21:26Z
feature_row_feature:
  - image_path: https://images.unsplash.com/photo-1529795533870-ea8020391255?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=5
    alt: "Løbesidens Løbsberegner"
    title: "Løbeberegner"
    excerpt: "Jeg har lavet en løbeberegner baseret, der kan beregne dit træningstempo og konkurrencetider ud fra Jack Daniels Running Formula. Her kan du også læse om forskellige træningsmetoder."
    url: "/loebesiden-jack-daniels-loebeberegner/"
    btn_label: "Brug løbsberegneren"
    btn_class: "btn--info"
# Hvad er et godt løbetempo?
# Hvordan finder man sin gennemsnitsfart?
---

Her kan du finde alle vores løbeberegnere. Vi har både beregnere til hastighed og til at udregne dit løbepace.

{% include feature_row id="feature-row_feature" type="left" %}

{% comment %}


Beregn dine løbetider og -tempi
Beregn hastighed i km/t og min/km
Løb hastighedsberegner. Beregn pace



## 1. Jack Daniels løbeberegner


## 3. Billat intervaller


## 2. Pete Riegel

## 3. Jeff Galloway


## Pace beregnere

{% endcomment %}

## Alle vores beregnere til løb

Her på sitet har vi mange forskellige løbeberegnere. Du kan se hele listen herunder.

{% assign site_posts = site.posts | where: "category", "Løb" | where: "tags", "beregner" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>
