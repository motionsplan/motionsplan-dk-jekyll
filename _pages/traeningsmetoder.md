---
layout: single
title: "Træningsmetoder"
permalink: /traeningsmetoder/
excerpt: "Her kan du læse om en masse forskellige træningsmetoder til styrketræning, løb og konditionstræning."
header:
  overlay_image: https://images.unsplash.com/photo-1581888748626-2a3f240a6f9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&height=630&w=1200&q=10
  teaser: https://images.unsplash.com/photo-1581888748626-2a3f240a6f9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&height=300&w=400&q=10
  caption: Træningsmetoder
author_profile: false
author: lsolesen
toc: true
sidebar:
  nav: methods
---

{{ page.excerpt }}

Du kan også læse mere om [optimering af træning](/optimer-traening/).

## Træningsmetoder til styrketræning

[Styrketræning](/styrketraening/) handler om at blive stærkere, bygge større muskler eller begge dele på samme tid. Vi har skrevet rigtig mange indlæg om styrketræning, styrketræningsprogrammer og øvelser til styrketræning. Her kan du se en oversigt over forskellige træningsmetoder, som du kan bruge i din styrketræning.

Hvis du er på udkig efter mere information om måder at organisere din træning på, så den er tidsbesparende, så kan du kigge i vores [overlevelsesguide til supersets](/guide-superset/).

### Hypertrofi

{% assign site_posts = site.methods | where: "category", "Hypertrofi" | where_exp: "post", "post.url != page.url" | sort: "last_modfied_at" | reverse %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

### Maksimal styrke

{% assign site_posts = site.methods | where: "tags", "maksimal styrke" | where_exp: "post", "post.url != page.url" | sort: "last_modfied_at" | reverse %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

### Power

{% assign site_posts = site.methods | where: "tags", "maksimal power" | where_exp: "post", "post.url != page.url" | sort: "last_modfied_at" | reverse %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Løb

Løb handler om at lære at løbe, blive en hurtigere løber eller kunne løbe længere. Her kan du se forskellige træningsmetoder, som du kan bruge til løb og kondition. Mange af træningsmetoderne egner sig til [intervalløb og intervaltræning](/intervallob-intervaltraening/). Læs mere om [løb og løbetræning her](/loebesiden/).

### Aerob træning

Her er nogle metoder, som du kan bruge til at forbedre din udholdenhed, [anaerobe tærskel](/anaerobe-taerskel/) og [maksimale iltoptagelse](/maksimale-iltoptagelse-vo2max/).

{% assign site_methods = site.methods | where: "tags", "aerob træning" | where_exp: "post", "post.url != page.url" | sort: "last_modfied_at" | reverse %}
{% assign site_posts_methods = site.posts | where: "tags", "aerob træning" | where: "tags", "træningsmetode" | where_exp: "post", "post.url != page.url" | sort: "last_modfied_at" | reverse %}

{% assign site_posts = site_methods | concat: site_posts_methods | sort: "title" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

### Anaerob træning

Her er træningsmetoder som bruges i forhold til at forbedre det anaerobe energisystem. Metoderne bruges til [anaerob træning](/anaerob-traening/).

{% assign site_methods = site.methods | where: "tags", "anaerob træning" | where_exp: "post", "post.url != page.url" | sort: "last_modfied_at" | reverse %}
{% assign site_posts_methods = site.posts | where: "tags", "anaerob træning" | where: "tags", "træningsmetode" | where_exp: "post", "post.url != page.url" | sort: "last_modfied_at" | reverse %}

{% assign site_posts = site_methods | concat: site_posts_methods | sort: "title" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>
