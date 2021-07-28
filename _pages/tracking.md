---
layout: single
toc: true
permalink: /tracking/
excerpt: "Oversigt over alle måder at lave tracking af din træning. Du kan naturligvis bruge tests, men dette er ment som lette måder at tracke om træningen virker uden at skulle lave maksimale tests."
title: &title "Tracking af træning"
author_profile: true
header:
  overlay_image: https://images.unsplash.com/photo-1475274110913-480c45d0e873?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1960&q=80
  caption: *title
  actions:
    - label: "<i class='fas fa-download'></i> Se alle tests"
      url: "/tests/"
classes: wide
feature_row:
  - image_path: https://images.unsplash.com/photo-1501820434261-5bb046afcf6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80
    alt: Se tests
    title: "Tests"
    excerpt: "Virker min træning efter hensigten? Tests kan være en måde at teste, om du bliver bedre over tid. Se alle vores tests."
    url: "/tests/"
    btn_label: "Se tests"
    btn_class: "btn--danger"
---

{% include feature_row id="feature_row" type="left" %}

## Alle måde at tracke og monitorere træning på

{% assign site_posts = site.posts | where: "tags", "tracking" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>
