---
title: &title "Gratis helkropsprogram til styrketræning 💪"
permalink: /gratis-helkropsprogram/
language: da
author: lsolesen
header:
  overlay_image: https://images.unsplash.com/photo-1517931524326-bdd55a541177?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80
  teaser: https://images.unsplash.com/photo-1517931524326-bdd55a541177?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80
  caption: *title
category:
  - Styrketræning
tags:
  - træningsprogram
  - styrketræning
last_modified_at: 2020-12-03T23:14:14Z
toc: true
---

Gratis træningsprogrammer er under udarbejdelse. Indtil vi er helt færdige med denne side, så kan du finde inspiration her:

## Artikler om træningsprogrammer til styrketræning og løb

<div class="feature__wrapper">

{% assign posts = site.posts | where: "tags", "træningsprogram" | where_exp: "post", "post.url != page.url" | sort: "last_modified_at" | reverse %}

{% if posts.size > 0 %}
  {% for post in posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Træningsprogrammer til træning

<div class="feature__wrapper">

{% assign programs = site.programs | sort: "last_modified_at" | reverse %}

{% if programs.size > 0 %}
  {% for post in programs %}
    {% include archive-single.html %}
  {% endfor %}
{% endif %}

</div>

## Artikler om programlægning og træningsplanlægning

<div class="feature__wrapper">

{% assign articles = site.posts | where: "tags", "programlægning" | where_exp: "post", "post.url != page.url" | sort: "last_modified_at" %}

{% if articles.size > 0 %}
  {% for post in articles %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>