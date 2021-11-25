---
title: &title "Populære blog posts på Motionsplan i 2020 🥇"
permalink: /populaere-posts/
redirect_from: /webclips/populaere-posts-2020/
language: da
header:
  overlay_image: https://images.unsplash.com/photo-1538503529202-7a0e79cbb6f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=5
  teaser: https://images.unsplash.com/photo-1538503529202-7a0e79cbb6f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=5
  caption: *title
tags:
  - webclips
category:
  - Webclips
last_modified_at: 2020-12-23T18:21:26Z
popular_posts:
  - /artikel/de-fem-tibetanere/
  - /skridt-pr-km-10000/
  - /bip-test/
  - /bmi/
  - /hastighed/
  - /kondital-loeb/
  - /rm-beregner/
  - /tab-fedt-paa-maven/
  - /kondital/
  - /artikel/udregning-af-fedtprocent/
---

Det har været et godt år på Motionsplan. Vi har skrevet mere end 100 artikler, og vores besøgstal er virkelig gået i vejret.

Her samler vi op på de mest populære blog posts i løbet af 2020. Der er nogle ældre blog posts, men en del af de nye artikler har også fundet vej til top {{ page.popular_posts.size }} listen.

## De {{ page.popular_posts.size }} mest populære blog posts i løbet af 2020

{% for permalink in page.popular_posts %}

{% assign site_posts = site.posts | where: "permalink", permalink %}

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html %}
  {% endfor %}
{% endif %}

{% endfor %}

## Blog posts skrevet i 2020

{% assign date_from = '2020-01-01' | date: '%s' %}
{% assign date_to = '2020-12-31' | date: '%s' %}

{% assign site_posts = site.posts | where_exp: "post", "post.url != page.url" | sort: "last_modified_at" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% capture current_year %}{{ post.date | date: "%Y" }}{% endcapture %}
    {% if current_year == '2020' %}
      {% include archive-single.html type="grid" %}
    {% endif %}
  {% endfor %}
{% endif %}

</div>
