---
layout: single
permalink: /loebesiden/
title: "Løbesiden: Alt om løb, løbetræning og løbeprogrammer"
author_profile: true
excerpt: "Guide til løbetræning. Her på løbesiden kan du finde nyttig viden om løb til 5 km, 10 km, halvmaraton og maraton. Vælg et effektivt løbeprogram. Lær om pulstræning, intervalløb og intervaltræning."
header:
  overlay_image: https://images.unsplash.com/photo-1581889470536-467bdbe30cd0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=5
  teaser: https://images.unsplash.com/photo-1581889470536-467bdbe30cd0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=5
  caption: "Løbesiden: Alt om løb og løbetræning"
  actions:
    - label: "<i class='fas fa-download'></i> Hvad er min hastighed?"
      url: "/hastighed/"
    - label: "<i class='fas fa-download'></i> Løbeprogrammer"
      url: "/loebeprogrammer/"
classes: wide
feature_row_excerpt:
  - excerpt: "Guide til løbetræning. Her på løbesiden kan du finde nyttig viden om løb til [5 km](/loebeprogram-5km/), [10 km](/loebeprogram-10km/), [halvmaraton](/loebeprogram-halvmaraton-21km/) og [maraton](/loebeprogram-maraton-42km/). Vælg et effektivt [løbeprogram](/loebeprogrammer/). Lær om [pulstræning](/pulstraening/), [intervalløb og intervaltræning](/intervallob-intervaltraening/)."
feature_row_feature:
  - image_path: https://images.unsplash.com/photo-1529795533870-ea8020391255?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=5
    alt: "Løbeberegnere"
    title: "Løbeberegnere"
    excerpt: "Her på sitet har vi en del forskellige løbeberegnere. Den mest populære er [Jack Daniels løbeberegner](/loebesiden-jack-daniels-loebeberegner/)."
    url: "/loebeberegnere/"
    btn_label: "Se løbeberegnerne"
    btn_class: "btn--info"
  - image_path: https://images.unsplash.com/photo-1540539234-c14a20fb7c7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHJ1bm5pbmd8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=5
    alt: "Løbetests"
    title: "Løbetests"
    excerpt: "Der findes rigtig mange forskellige løbetests. Her har vi samlet alle de gængse tests, så du kan få testet din løbeform.."
    url: "/loebetests/"
    btn_label: "Se løbetests"
    btn_class: "btn--info"
  - image_path: https://images.unsplash.com/photo-1594911772125-07fc7a2d8d9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=5
    alt: "Løbeprogrammer"
    title: "Løbeprogrammer"
    excerpt: "Løbeprogrammer til alle niveauer. Her kan du finde et løbeprogram, der passer til dig. Der er løbetræningsprogrammer til at blive hurtigere på 5km, 10 km, halvmaraton og maraton."
    url: "/loebeprogrammer/"
    btn_label: "Se løbeprogrammer"
    btn_class: "btn--info"
feature_row_better_runner:
  - image_path: https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=5
    alt: "Løbeøkonomi"
    title: "Løbeøkonomi"
    excerpt: "En god løbeøkonomi er evnen til at holde høj fart i lang tid ved et minimalt energiforbrug, men hvordan beregner man løbeøkonomien?"
    url: "/lobeokonomi/"
    btn_label: "Lær om løbeøkonomi"
    btn_class: "btn--info"
  - image_path: https://images.unsplash.com/photo-1512941675424-1c17dabfdddc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=5
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

## Hvordan bliver du en bedre løber?

Hvis du gerne vil være en bedre løber, så er der flere forskellige parametre, du kan arbejde for. Hvad du har brug for at arbejde med kommer naturligvis an på, hvad dine mål som løber er.

{% include feature_row id="feature_row_better_runner" type="left" %}

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

{% comment %}

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

## Løbeprogrammer

<div class="feature__wrapper">

{% assign site_posts = site.posts | where: "category", "Løb" | where: "tags", "løbeprogram" | where_exp: "post", "post.url != page.url" | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Alle indlæg på løbesiden om løbetræning

{% assign site_posts = site.posts | where: "tags", "løb" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>
