---
layout: single
permalink: /cykling/
title: "Alt om cykling og cykeltests"
author_profile: true
excerpt: "Guide til cykling og træning. Her på siden kan du finde nyttig viden om cykling og cykeltests."
header:
  overlay_image: https://images.unsplash.com/photo-1581889470536-467bdbe30cd0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1990&q=80
  teaser: https://images.unsplash.com/photo-1581889470536-467bdbe30cd0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80
  caption: "Løbesiden: Alt om løb og løbetræning"
  actions:
    - label: "<i class='fas fa-download'></i> Hvad er min hastighed?"
      url: "/hastighed/"
sidebar:
  nav: trainingtypes
---

{{ page.excerpt }}

## Cykling

{% assign site_posts = site.posts | where: "category", "Cykling" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Cykeltests og kondition

{% assign site_posts = site.posts | where: "tags", "cykeltest" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>
