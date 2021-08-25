---
layout: single
permalink: /loebesiden/
title: "Løbesiden: Alt om løb, løbetræning og løbeprogrammer"
author_profile: true
excerpt: &excerpt "Guide til løbetræning. Her på løbesiden kan du finde nyttig viden om løb til 5 km, 10 km, halvmaraton og maraton. Vælg et effektivt løbeprogram. Lær om pulstræning, intervalløb og intervaltræning."
header:
  overlay_image: https://images.unsplash.com/photo-1581889470536-467bdbe30cd0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1990&q=80
  teaser: https://images.unsplash.com/photo-1581889470536-467bdbe30cd0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80
  caption: "Løbesiden: Alt om løb og løbetræning"
  actions:
    - label: "<i class='fas fa-download'></i> Hvad er min hastighed?"
      url: "/hastighed/"
classes: wide
feature_row_excerpt:
  - excerpt: *excerpt
feature_row_feature:
  - image_path: https://images.unsplash.com/photo-1529795533870-ea8020391255?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80
    alt: "Løbesidens Løbsberegner"
    title: "Løbeberegner"
    excerpt: "Jeg har lavet en løbeberegner baseret på Løbesiden, der kan beregne dit træningstempo og konkurrencetider ud fra Jack Daniels Running Formula. Jeg har også beskrevet forskellige træningsmetoder."
    url: "/loebesiden-jack-daniels-loebeberegner/"
    btn_label: "Brug løbsberegneren"
    btn_class: "btn--info"
  - image_path: https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80
    alt: "Løbeøkonomi og løbeteknik"
    title: "Løbeøkonomi og løbeteknik"
    excerpt: "En god løbeøkonomi er evnen til at holde høj fart i lang tid ved et minimalt energiforbrug, men hvordan beregner man det egentlig?"
    url: "/lobeokonomi/"
    btn_label: "Lær om løbeøkonomi"
    btn_class: "btn--info"
  - image_path: https://images.unsplash.com/photo-1512941675424-1c17dabfdddc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80
    alt: "Løbeteknik"
    title: "Løbeteknik og løbestil"
    excerpt: "Når du løber, så kan det være en rigtig god ide at tænke over din løbeteknik og løbestil. Jeg kigger her på, hvilke elementer i din løbestil, du kan arbejde med, hvis du vil forbedre din teknik, når du løber."
    url: "/loebeteknik/"
    btn_label: "Lær om løbeteknik og løbestil"
    btn_class: "btn--info"
sidebar:
  nav: trainingtypes
---

{% include feature_row type="center" id="feature_row_excerpt" %}

{% include feature_row id="feature_row_feature" type="left" %}

## Løb begyndere

{% assign site_posts = site.posts | where: "category", "Løb" | where: "tags", "begynder" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

{% comment %}

Kom i gang med at løbe
lær at løbe
løb for begyndere
løbetræning nybegynder
nybegynder løbeprogram
løb for begynder
løbetræning begynder
løbetræning for begynder
løbetræningsprogram
starte med at løbe

## Løb hurtigere

{% endcomment %}

## Intervalløb

{% assign site_posts = site.posts | where: "category", "Løb" | where: "tags", "intervalløb" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

{% comment %}

10-20-30 løb
intervaltræning løb
interval løbetræning
interval løbeprogram

## Opvarmning til løb

opvarmning før løb
opvarmning løb

{% endcomment %}

## Løb og styrketræning

{% assign site_posts = site.posts | where: "tags", "styrketræning" | where: "tags", "løb" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

{% comment %}

styrketræning for løbere
styrketræning løb
styrketræning og løb
styrketræning til løb
styrketræning og løb samme dag

## Udstrækning før og efter løb

udstrækning efter løb
udstrækning før løb
udstrækning løberknæ

## Fedtforbrænding løb

fedtforbrænding løb

## Løbetur

## Løbeudstyr

høretelefoner til løb
kompressionsstrømper løb
Løbetræning
pandelampe løb

***

løbeguide

løb 10 km begynder

løbetræning opstart
løbeøvelser
boost dit løb
bliv en bedre løber
langdistanceløb
løbeprogrammer
løberknæ udstrækning
løbetempo
løbetræning vægttab
løbetræningsprogram 5 km
må man løbe hver dag
opvarmning inden løb
start løbetræning
12 ugers løbeprogram
fordele ved løb
hiit træning løb
hvad gør løb ved kroppen
løb muskler
restitution efter løb
sprint løb
hiit løbeprogram
konditionstræning løb
løb restitution
løbetræning app
løbetræning børn
løbetræning efter fødsel
løbetræning halvmarathon
løbetræning hver dag
løbetræning hvor ofte
aerob træning løb
hiit træning løbebånd

{% endcomment %}

## Løbetests og kondition

{% assign site_posts = site.posts | where: "tags", "konditionstest" | where: "tags", "løbetest" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Løbeprogrammer

{% comment %}

## Beregnere til løb

{% assign site_posts = site.posts | where: "category", "Løb" | where: "tags", "beregner" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Løbeprogram

Løbeprogram begyndere
begynder løbeprogram

Løbeprogram 5 km
Lær at løbe 5 km

løbe hver dag
løbeplan
løbetræning 5 km
løb 5 km på 25 min
{% endcomment %}

<div class="feature__wrapper">

{% assign site_posts = site.posts | where: "category", "Løb" | where: "tags", "løbeprogram" | where_exp: "post", "post.url != page.url" | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Alle indlæg på løbesiden om løbetræning

{% assign site_posts = site.posts | where: "category", "Løb" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>
