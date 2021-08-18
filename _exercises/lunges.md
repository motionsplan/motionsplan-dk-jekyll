---
title: "Lunges"
seo_title: "Lunges teknik: Sådan kommer du i gang med forskellige variationer"
excerpt: "Lunges er en effektiv benøvelse, som træner hele underkoppen, og samtidig stiller krav til din balance og koordination. Udfaldsskridtet træner både forlår og balder. Her kigger vi på teknik i lunges og variationer."
instructions: "Lav et udfaldsskridt og gå ned i knæ, indtil det forreste lår er vandret og det andet næsten knæ rører jorden. Bevæg dig dynamisk tilbage til udgangspositionen."
permalink: /lunges/
id: 20210818093400
key: 20210818093400
language: da
header:
  teaser: /assets/images/exercises/lunges-dynamisk-0-320.jpg
tags:
  - knædomineret
  - vægtstang
  - fitnessinstruktør
  - crossfit
categories: []
training_type:  []
training_focus:
  - knædomineret
equipment:
  - vægtstang
muscle_group: []
gallery:
  - url: /assets/images/exercises/lunges-dynamisk-0.jpg
    image_path: /assets/images/exercises/lunges-dynamisk-0-320.jpg
    alt: "Lunges, dynamisk"
    title: "Lunges, dynamisk"
  - url: /assets/images/exercises/lunges-dynamisk-1.jpg
    image_path: /assets/images/exercises/lunges-dynamisk-1-320.jpg
    alt: "Lunges, dynamisk"
    title: "Lunges, dynamisk"
  - url: /assets/images/exercises/lunges-dynamisk-2.jpg
    image_path: /assets/images/exercises/lunges-dynamisk-2-320.jpg
    alt: "Lunges, dynamisk"
    title: "Lunges, dynamisk"
  - url: /assets/images/exercises/lunges-dynamisk-3.jpg
    image_path: /assets/images/exercises/lunges-dynamisk-3-320.jpg
    alt: "Lunges, dynamisk"
    title: "Lunges, dynamisk"
  - url: /assets/images/exercises/lunges-dynamisk-4.jpg
    image_path: /assets/images/exercises/lunges-dynamisk-4-320.jpg
    alt: "Lunges, dynamisk"
    title: "Lunges, dynamisk"
last_modified_at: 2021-08-18T19:08:58Z
video:
  provider: youtube
  id: X-9_0rwFmI0
---

Lunges er en rigtig god og funktionel øvelse til at træne forlår, baglår og baller.

## Variationer af lunges

Her kan du se de mange forskellige variationer af lunges.

{% assign site_posts = site.exercises | where: "categories", "Lunges" | where_exp: "post", "post.url != page.url" | sort: "title" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>
