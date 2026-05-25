---
layout: single
permalink: /arme-triceps-biceps/
collection: exercises
header:
  overlay_image: /assets/images/unsplash/photo-1552848031-326ec03fe2ec.jpg
  credit: https://images.unsplash.com/photo-1552848031-326ec03fe2ec
  teaser: /assets/images/unsplash/photo-1552848031-326ec03fe2ec.jpg
  caption: 'Armøvelser: De mest effektive øvelser til biceps og triceps'
title: 'Armøvelser: De mest effektive øvelser til biceps og triceps 🏋'
seo_title: 'Armøvelser: 10+ effektive øvelser til biceps og triceps'
author_profile: 'true'
excerpt: Vi har samlet det bedste og mest effektive armøvelser på en side her. Når du skal have gang i din armtræning, så
  har du brug for øvelser til biceps og triceps, men også øvelser der udfordrer underarmene.
categories:
- Træningsøvelser
breadcrumbs: 'true'
sidebar:
  nav: exercises
toc: 'true'
---

Vi har samlet det bedste og mest effektive armøvelser på en side her. Der er både øvelser til biceps og triceps, men også øvelser der udfordrer underarmene.

## Bicepsøvelser og øvelser til biceps

Bicepsøvelser kan både være isolerede bevægelser eller flerledsøvelser. Når du laver armtræning så er det en god ide også at vælge øvelser, hvor biceps er med i trækøvelser for ryggen som fx [rows](/rows/), [armstrækninger](/armbojninger-eller-armstraekninger-pushups/), [chinups og pullups](/chinup-vs-pullup/). Du kan også lave isolationsøvelser for biceps, hvis du gerne vil have en større biceps.

Vi har samlet de mest effektive øvelser for biceps både med stang, håndvægte og kabel - og du kan også bruge forskellige greb, håndtag og vinkler i din træning.

{% assign site_posts = site.exercises | where: "tags", "biceps" | where_exp: "post", "post.url != page.url" | sort: "title" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Tricepsøvelser og øvelser til triceps

Hvis du gerne vil have store arme, så er det især triceps du skal træne. Triceps udgør nemlig 2/3 af overarmen. Triceps indgår både i store flerledsøvelser, eller du kan træne den med isolationsøvelser.

Vi har samlet de bedste styrkeøvelser til triceps, så du kan optimere din armtræning. Husk at triceps er en væsentlig del af mange skub-øvelser som fx bænkpres, men du kan også træne den isoleret med fx fransk pres, triceps pushdown og triceps extensions.

Du kan træne triceps med både stang, håndvægte, elastik, kettlebell og kropsvægt, fx ved armstrækninger.

{% assign site_posts = site.exercises | where: "tags", "triceps" | where_exp: "post", "post.url != page.url" | sort: "title" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Armøvelser og træningsøvelser for armene

{% assign site_posts = site.exercises | where: "tags", "Arme" | where_exp: "post", "post.url != page.url" | sort: "title" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>
