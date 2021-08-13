---
layout: single
permalink: /benoevelser/
header:
  overlay_image: https://images.unsplash.com/photo-1434682772747-f16d3ea162c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80
  teaser: https://images.unsplash.com/photo-1434682772747-f16d3ea162c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80
  caption: "Benøvelser: De mest effektive styrketræningsøvelser til bentræningen"
title: "Benøvelser: De mest effektive styrketræningsøvelser til bentræningen 🏋"
author_profile: true
classes: wide
excerpt: "Bentræning kan foregå på virkelig mange forskellige og effektive måder. Vi har samlet et hav af benøvelser, som du kan bruge i din styrketræning af benene. Bentræning er både for dig, der gerne vil blive mere eksplosiv og dig der vil have større og stærkere ben."
categories:
  - Træningsøvelser
breadcrumbs: true
---

Bentræning kan foregå på virkelig mange forskellige og effektive måder. Vi har samlet et hav af benøvelser, som du kan bruge i din styrketræning af benene. Bentræning er både for dig, der gerne vil blive mere eksplosiv og dig der vil have større og stærkere ben.

Bentræning kan foregå både med frie vægte og lave squat og lunges og i benmaskine som benpres og leg extensions. Du kan bruge vægtstang, håndvægte, kettlebells og [Safety Bar Squats]({% link _posts/2020-07-05-safetybar-squat.md %}).

Vi har samlet en række simple og effektive benøvelser, som du kan bruge til at styrke benmusklerne, din hofte og dine knæ.

## Artikler om træning af skulder og skulderøvelser

<div class="feature__wrapper">

{% assign site_posts = site.posts | where: "tags", "bentræning" | sort: "title" %}

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Benøvelser: Øvelser til bentræning

{% assign site_posts = site.exercises | where: "tags", "Ben" | where_exp: "post", "post.url != page.url" | sort: "title" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>
