---
layout: single
title: "Yoga"
permalink: /yoga/
excerpt: "Her har vi samlet alle de artikler vi har skrevet om yoga, yogaøvelser og yoga for begyndere."
header:
  overlay_image: https://images.unsplash.com/photo-1593810451137-5dc55105dace?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=5
  teaser: https://images.unsplash.com/photo-1593810451137-5dc55105dace?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=5
  caption: Yoga
author_profile: false
toc: true
sidebar:
  nav: trainingtypes
---

{{ page.excerpt }}

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
