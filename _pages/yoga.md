---
layout: single
title: "Yoga & Mindfulness"
permalink: /yoga/
excerpt: "Her har vi samlet alle de artikler vi har skrevet om yoga, yogaøvelser og yoga for begyndere."
description: "Opdag yoga og mindfulness. Lær øvelser og teknikker til at reducere stress, forbedre fleksibilitet og skabe balance i hverdagen."
header:
  overlay_image: https://images.unsplash.com/photo-1593810451137-5dc55105dace?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&h=630&w=1200&q=10
  teaser: https://images.unsplash.com/photo-1593810451137-5dc55105dace?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&h=300&w=400&q=10
  caption: Yoga
author_profile: false
toc: false
sidebar:
  nav: trainingtypes
category:
  - Træning
tag:
  - træningsformer
breadcrumbs: true
classes: wide
toc: true
feature_row_restitution:
  - image_path: https://images.unsplash.com/photo-1470777639313-60af88918203?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=300&w=400&q=10
    alt: "Restitution"
    title: "Restitution & Restitutionstræning"
    excerpt: "Lær alt om, hvordan du får en balance mellem træning og restitution, så du kan bygge kroppen op og få de optimale resultater. Her er en komplet guide til restitution, så du kan gøre den så optimal og effektiv som muligt."
    url: "/restitution/"
    btn_label: "Læs mere"
    btn_class: "btn--success"
feature_row_breathing:
  - image_path: https://images.unsplash.com/photo-1483004406427-6acb078d1f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=300&w=400&q=10
    alt: "Åndedrætstræning"
    title: "Åndedrætstræning"
    excerpt: "Åndedrætstræning kan forbedre din vejrtrækning, reducere stress og øge energiniveauet. Enkle øvelser kan gavne både restitution og velvære."
    url: "/aandedraetstraening-forbedrer-udholdenheden/"
    btn_label: "Prøv åndedrætstræning"
    btn_class: "btn--success"
---

Velkommen til vores dedikerede sektion om yoga og mindfulness. Her finder du en samling af artikler designet til at hjælpe både begyndere og erfarne udøvere med at fordybe sig i praksisser, der fremmer fysisk og mental sundhed.

Uanset om du søger at forbedre din fleksibilitet, reducere stress eller finde en dybere forbindelse mellem krop og sind, tilbyder vi ressourcer og vejledning til at støtte dig på din rejse.

## Yoga og mindfulness

Vi har skrevet flere indlæg om yoga og mindfulness. Tjek dem her:

{% assign site_posts = site.posts | where: "tags", "yoga" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Mere inspiration

{% include feature_row id="feature_row_restitution" type="left" %}

{% include feature_row id="feature_row_breathing" type="left" %}