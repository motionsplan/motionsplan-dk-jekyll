---
layout: single
permalink: /cykling/
title: &title "Cykling: Alt om cykeltræning og cykeltests"
author_profile: true
excerpt: "Guide til cykling og træning. Her på siden kan du finde nyttig viden om motionscykling og cykeltests."
header:
  overlay_image: https://images.unsplash.com/photo-1535913064547-c24f85802447?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&h=630&w=1200&q=10
  teaser: https://images.unsplash.com/photo-1535913064547-c24f85802447?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&h=300&w=400&q=10
  caption: *title
  actions:
    - label: "<i class='fas fa-download'></i> Hvad er min hastighed?"
      url: "/hastighed/"
sidebar:
  nav: trainingtypes
toc: true
feature_row_excerpt:
  - excerpt: "Guide til cykeltræning. Her kan du finde nyttig viden om cykling og cykeltræning. Lær om [pulstræning](/pulstraening/) og [intervaltræning til cykling](/intervaltraening-cykling/)."
categories:
  - Træningsformer
breadcrumbs: true
---

{{ page.excerpt }}

{% include feature_row type="center" id="feature_row_excerpt" %}

## Cykling og styrketræning

{% assign site_posts = site.posts | where: "tags", "styrketræning" | where: "tags", "cykling" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Cykeltests og kondition

{% assign site_posts = site.posts | where: "tags", "cykeltest" | where: "tags", "kondition" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Test dig selv

{% assign site_posts = site.posts | where: "tags", "cykeltest" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>


## Alt om cykling og cykeltræning

{% assign site_posts = site.posts | where: "tags", "cykling" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>
