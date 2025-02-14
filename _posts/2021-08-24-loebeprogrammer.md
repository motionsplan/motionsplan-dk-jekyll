---
title: &title "Løbeprogrammer til alle niveauer og distancer"
permalink: /loebeprogrammer/
excerpt: "Løbeprogrammer til alle niveauer. Her kan du finde et løbeprogram, der passer til dig. Der er løbetræningsprogrammer til at blive hurtigere på 5km, 10 km, halvmaraton og maraton."
language: da
header:
  overlay_image: https://images.unsplash.com/photo-1594911772125-07fc7a2d8d9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&h=630&w=1200&q=10
  teaser: https://images.unsplash.com/photo-1594911772125-07fc7a2d8d9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&h=300&w=400&q=10
  caption: *title
category:
  - Løb
tags:
  - løbeprogram
  - træningsprogram
  - løb
last_modified_at: 2021-08-22T23:14:14Z
toc: true
---

{{ page.excerpt }}

Der findes et hav af løbeprogrammer rundt omkring på nettet, men hvad skal du egentlig kigge efter for at finde et godt løbeprogram?

Når du skal vælge et løbetræningsprogram, så er nogle af de vigtigste parametre, du skal kigge efter:

- Hvilket niveau starter du ud på?
- Hvor mange gang om ugen vil du gerne træne?
- Hvor langt vil du gerne løbe?

Målet for en løbeplan er ofte forskellige distancer. Her får du et overblik over, hvordan du kommer i gang med de enkelte distancer, og hvad du skal tænke på.

## Begynder løbeprogram

På listen herunder kan du finde et begynder løbeprogram.

{% assign site_posts = site.posts | where: "category", "Løb" | where: "tags", "løbeprogram" | where: "tags", "begynder" | where_exp: "post", "post.url != page.url" | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
<div class="feature__wrapper">
  {% for post in site_posts limit:16 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
{% endif %}

## 5 km løbeprogrammer

{% assign site_posts = site.posts | where: "category", "Løb" | where: "tags", "løbeprogram" | where: "tags", "5 km" | where_exp: "post", "post.url != page.url" | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
<div class="feature__wrapper">
  {% for post in site_posts limit:16 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
{% endif %}

## 10 km løbeplan

{% assign site_posts = site.posts | where: "category", "Løb" | where: "tags", "løbeprogram" | where: "tags", "10 km" | where_exp: "post", "post.url != page.url" | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
<div class="feature__wrapper">
  {% for post in site_posts limit:16 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
{% endif %}

## Halvmaraton løbeprogrammer

{% assign site_posts = site.posts | where: "category", "Løb" | where: "tags", "løbeprogram" | where: "tags", "halvmaraton" | where_exp: "post", "post.url != page.url" | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
<div class="feature__wrapper">
  {% for post in site_posts limit:16 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
{% endif %}

## Maraton løbeprogrammer

{% assign site_posts = site.posts | where: "category", "Løb" | where: "tags", "løbeprogram" | where: "tags", "maraton" | where_exp: "post", "post.url != page.url" | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
<div class="feature__wrapper">
  {% for post in site_posts limit:16 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
{% endif %}

## Alle løbeprogrammer

Her kan du se alle løbeprogrammerne, som vi har skrevet om på denne side.

{% assign site_posts = site.posts | where: "category", "Løb" | where: "tags", "løbeprogram" | where_exp: "post", "post.url != page.url" | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
<div class="feature__wrapper">
  {% for post in site_posts limit:16 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
{% endif %}
