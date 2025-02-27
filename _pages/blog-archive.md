---
layout: posts
permalink: /blog/
redirect_from:
  - /artikler/
excerpt: "Motionsplan.dk blog er for os der træner og gerne vil blive klogere på kroppen."
title: Motionsplans blog
seo_title: "Blog om fitness, styrketræning, løb og træning | Motionsplan"
classes: wide
author_profile: true
blog:
  - excerpt: '[Se blogindlæg efter kategori](/blog/){: .btn .btn--large .btn--success }'
---

## Seneste opdateringer på Motionsplans blog

<div class="feature__wrapper">

{% assign site_posts = site.posts | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
  {% for post in site_posts limit:16 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

{% include feature_row id="blog" type="center" %}
