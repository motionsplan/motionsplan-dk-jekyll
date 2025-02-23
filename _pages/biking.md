---
layout: single
permalink: /cykling/
title: &title "Cykling: Alt om cykeltræning og cykeltests"
seo_title: "Cykling – Komplet guide til cykeltræning og cykeltests"
author_profile: true
excerpt: "Guide til cykling og træning. Her på siden kan du finde nyttig viden om motionscykling og cykeltests."
description: "Få den nyeste viden om cykeltræning, kondition og cykeltests. Læs om effektive træningsmetoder, udstyr og gode råd til at forbedre din præstation."
header:
  overlay_image: https://images.unsplash.com/photo-1535913064547-c24f85802447?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&h=630&w=1200&q=10
  teaser: https://images.unsplash.com/photo-1535913064547-c24f85802447?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&h=300&w=400&q=10
  caption: *title
  actions:
    - label: "<i class='fas fa-download'></i> Hvad er min hastighed?"
      url: "/hastighed/"
sidebar:
  nav: trainingtypes
toc: false
classes: wide
feature_row_excerpt:
  - excerpt: "Guide til cykeltræning. Her kan du finde nyttig viden om cykling og cykeltræning. Lær om [pulstræning](/pulstraening/) og [intervaltræning til cykling](/intervaltraening-cykling/)."
category:
  - Træning
  - Træningsformer
breadcrumbs: true
feature_row_heat_training:
  - image_path: https://images.unsplash.com/photo-1546778316-dfda79f1c84e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHN3ZWF0fGVufDB8MHwwfHw%3D&auto=format&fit=crop&h=300&w=400&q=10
    alt: "Varmetræning"
    title: "Varmetræning - bliv klar til varmen"
    excerpt: |
      Varmetræning er blevet mere og mere populært blandt cykelryttere. Dels forbereder det rytterne på at kunne præstere bedre i varmen, men det kaldes også højdetræning for fattigmænd. Skal du prøve?".
    url: "/varmetraening/"
    btn_label: "Læs mere"
    btn_class: "btn--info"
feature_row_heat_virtuel_biking:
  - image_path: https://images.unsplash.com/photo-1546778316-dfda79f1c84e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHN3ZWF0fGVufDB8MHwwfHw%3D&auto=format&fit=crop&h=300&w=400&q=10
    alt: "Virtuel cykling"
    title: "Virtuel cykling - kør på hometrainer"
    excerpt: |
      At cykle på en motionscykel indendørs er en fantastisk måde at forbedre din kondition på, og du kan nu gøre det, mens du kører gennem virtuelle verdener eller konkurrerer mod andre online.
    url: "/hometrainer-apps/"
    btn_label: "Læs mere"
    btn_class: "btn--info"
---

Cykling er en fantastisk måde at forbedre din kondition, styrke og udholdenhed. På Motionsplan.dk finder du alt, hvad du har brug for om cykeltræning, energiforbrug, test af din form og gode råd til at optimere din præstation. 

Uanset om du cykler for motionens skyld eller træner målrettet, får du her værdifuld viden og indsigt.

{% include feature_row type="center" id="feature_row_excerpt" %}

## Cykeltests og kondition

{% assign site_posts = site.posts | where: "tags", "cykeltest" | where: "tags", "kondition" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Virtuel cykling

{% include feature_row id="feature_row_virtuel_biking" type="left" %}

## Cykling på hometrainer

{% assign site_posts = site.posts | where: "tags", "hometrainer" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Test dig selv

{% assign site_posts = site.posts | where: "tags", "cykeltest" | where: "tags", "populær" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper" markdown="1">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Se alle cykeltests](/tests/cykling/){: .btn .btn--success .btn--center }

</div>

{% include feature_row id="feature_row_heat_training" type="left" %}

## Cykling og styrketræning

{% assign site_posts = site.posts | where: "tags", "styrketræning" | where: "tags", "cykling" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Læs meget mere om cykling og cykeltræning

{% assign site_posts = site.posts | where: "tags", "cykling" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>
