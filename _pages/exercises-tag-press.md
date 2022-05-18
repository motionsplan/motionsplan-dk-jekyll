---
layout: single
permalink: /presoevelser/
title: &title "Presøvelser: Effektive styrketræningsøvelser til at træne pres"
seo_title: "Presøvelser: Effektive øvelser til at træne pres"
author_profile: true
classes: wide
header:
  overlay_image: https://images.unsplash.com/photo-1571689230986-c2dcb5f4c5f7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTZ8fGV4ZXJjaXNlc3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60
  teaser: https://images.unsplash.com/photo-1571689230986-c2dcb5f4c5f7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTZ8fGV4ZXJjaXNlc3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60
  caption: *title
excerpt: "Vi har samlet en række presøvelser, som du kan bruge til din prestræning. Når du vil træne dit bryst og dine, så kan du vælge mellem forskellige presøvelser."
categories:
  - Træningsøvelser
breadcrumbs: true
sidebar:
  nav: exercises
---

{{ page.excerpt }}

Du kan enten vælge at lave basisøvelser, som består af flerledsøvelser, eller isolationsøvelser som rammer den specifikke muskelgruppe lidt mere præcist.

Af **basisøvelser** kommer man naturligvis ikke uden om [bænkpres]({% link _exercises/baenkpres-17.md %}) og varianter af bænkpres med både vægtstang og håndvægte, når du vil finde øvelser til brystet. Brysttræning og styrketræning af brystet involverer også ofte skulderen og triceps.

Vi har samlet en masse effektive styrketræningsøvelser til brystet både med vægtstang, håndvægte, kabel og elastik, så du kan varirere, hvordan du rammer brystmusklen.

## Øvelser til træning af pres

{% assign site_posts = site.exercises | where: "tags", "Pres" | where_exp: "post", "post.url != page.url" | sort: "title" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>
