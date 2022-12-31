---
title: &title "Populære blog posts på Motionsplan i 2022 🥇"
permalink: /populaere-posts/
redirect_from:
  - /webclips/populaere-posts-2020/
language: da
header:
  overlay_image: https://images.unsplash.com/photo-1538503529202-7a0e79cbb6f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&h=630&w=1200&q=10
  teaser: https://images.unsplash.com/photo-1538503529202-7a0e79cbb6f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&h=300&w=400&q=10
  caption: *title
tags:
  - webclips
category:
  - Webclips
last_modified_at: 2022-12-31T18:21:26Z
popular_posts_2022:
  - /skridt-pr-km-10000/
  - /idealvaegt/
  - /cooper-test/
  - /kondital/
  - /artikel/de-fem-tibetanere/
  - /kalorietabellen/
  - /bip-test/
  - /muskler/
  - /koncentrisk-excentrisk-isometrisk/
  - /andersen-test/
popular_posts_2021:
  - /skridt-pr-km-10000/
  - /artikel/de-fem-tibetanere/
  - /hvad-er-gennemsnitshoejden-i-danmark/
  - /kondital/
  - /cooper-test/
  - /bip-test/
  - /tab-fedt-paa-maven/
  - /idealvaegt/
  - /bmi/
  - /koncentrisk-excentrisk-isometrisk/
popular_posts_2020:
  - /artikel/de-fem-tibetanere/
  - /skridt-pr-km-10000/
  - /bip-test/
  - /bmi/
  - /beregn-kondital/
  - /rm-beregner/
  - /tab-fedt-paa-maven/
  - /kondital/
  - /artikel/udregning-af-fedtprocent/
  - /koncentrisk-excentrisk-isometrisk/
---

Vi har virkelig mange populære blog posts på Motionsplan. Det er sjovt hvert år at samle op på, hvad der gør en et blogindlæg populært.

Her har vi kigget på de mest populære blog posts for i år.

## De {{ page.popular_posts_2022.size }} mest populære blog posts i 2022

I 2022 har vi i alt haft 524.592 sidevisninger fra 327.206 brugere. Det er ret vildt.

Vi har i alt skrevet 90 nye blog posts i 2022, men listen indeholder en lang række af de gamle indlæg også.

{% for permalink in page.popular_posts_2022 %}

{% assign site_posts = site.posts | where: "permalink", permalink %}
{% assign site_pages = site.pages | where: "permalink", permalink %}
{% assign site_posts = site_posts | concat: site_pages %}

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html %}
  {% endfor %}
{% endif %}

{% endfor %}

## De {{ page.popular_posts_2021.size }} mest populære blog posts i 2021

I 2021 har vi i alt haft 631.677 sidevisninger fra 380.079 brugere. Det er ret vildt.

Vi har i alt skrevet 85 nye blog posts i 2021, men listen indeholder en lang række af de gamle indlæg også.

{% for permalink in page.popular_posts_2021 %}

{% assign site_posts = site.posts | where: "permalink", permalink %}

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html %}
  {% endfor %}
{% endif %}

{% endfor %}

## De {{ page.popular_posts_2020.size }} mest populære blog posts i 2020

Det har været et godt år på Motionsplan. Vi har skrevet mere end 100 artikler, og vores besøgstal er virkelig gået i vejret. Samlet set havde vi 138.777 sidevisninger fordelt på 82.876 brugere.

Her samler vi op på de mest populære blog posts i løbet af 2020. Der er nogle ældre blog posts, men en del af de nye artikler har også fundet vej til top {{ page.popular_posts.size }} listen.

{% for permalink in page.popular_posts_2020 %}

{% assign site_posts = site.posts | where: "permalink", permalink %}

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html %}
  {% endfor %}
{% endif %}

{% endfor %}
