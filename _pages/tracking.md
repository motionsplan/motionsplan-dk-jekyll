---
layout: single
toc: 'true'
permalink: /tracking/
excerpt: Oversigt over alle måder at lave tracking af din træning. Du kan naturligvis bruge tests, men monitoriering af træning
  kan sagtens fungere uden at skulle lave maksimale tests.
title: Tracking af træning
author_profile: 'true'
header:
  overlay_image: /assets/images/unsplash/photo-1589953605483-a2964c38d415.jpg
  credit: https://images.unsplash.com/photo-1589953605483-a2964c38d415
  caption: Tracking af træning
  actions:
  - label: <i class='fas fa-download'></i> Se alle tests
    url: /tests/
classes: wide
feature_row:
- image_path: /assets/images/unsplash/photo-1501820434261-5bb046afcf6b.jpg
  credit: https://images.unsplash.com/photo-1501820434261-5bb046afcf6b
  teaser: /assets/images/unsplash/photo-1501820434261-5bb046afcf6b.jpg
  alt: Se tests
  title: Tests
  excerpt: Virker min træning efter hensigten? Tests kan være en måde at teste, om du bliver bedre over tid. Se alle vores
    tests.
  url: /tests/
  btn_label: Se tests
  btn_class: btn--info
breadcrumbs: 'true'
---

{{ page.excerpt }}

{% include feature_row id="feature_row" type="left" %}

## Alle måde at tracke og monitorere træning på

{% assign site_posts = site.posts | where: "tags", "tracking" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include_cached archive-single.html post=post type="grid" %}
  {% endfor %}
{% endif %}

</div>
