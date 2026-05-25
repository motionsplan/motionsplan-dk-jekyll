---
layout: single
permalink: /brystoevelser/
title: 'Øvelser til brystet: Effektive styrketræningsøvelser til brystet 🏋'
seo_title: 'Brystøvelser: Effektive øvelser til træning af bryst'
author_profile: 'true'
classes: wide
header:
  overlay_image: /assets/images/unsplash/photo-1534368959876-26bf04f2c947.jpg
  credit: https://images.unsplash.com/photo-1534368959876-26bf04f2c947
  teaser: /assets/images/unsplash/photo-1534368959876-26bf04f2c947.jpg
  caption: 'Øvelser til brystet: De mest effektive styrketræningsøvelser til brystet'
excerpt: Vi har samlet en række brystøvelser, som du kan bruge til din brysttræning. Når du vil træne dit bryst, så kan du
  vælge mellem forskellige øvelser.
categories:
- Træningsøvelser
breadcrumbs: 'true'
sidebar:
  nav: exercises
---

{{ page.excerpt }}

Du kan enten vælge at lave basisøvelser, som består af flerledsøvelser, eller isolationsøvelser som rammer den specifikke muskelgruppe lidt mere præcist.

Af **basisøvelser** kommer man naturligvis ikke uden om [bænkpres]({% link _exercises/baenkpres-17.md %}) og varianter af bænkpres med både vægtstang og håndvægte, når du vil finde øvelser til brystet. Brysttræning og styrketræning af brystet involverer også ofte skulderen og triceps.

Vi har samlet en masse effektive styrketræningsøvelser til brystet både med vægtstang, håndvægte, kabel og elastik, så du kan varirere, hvordan du rammer brystmusklen.

## Øvelser til træning af brystet

{% assign site_posts = site.exercises | where: "tags", "Bryst" | where_exp: "post", "post.url != page.url" | sort: "title" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>
