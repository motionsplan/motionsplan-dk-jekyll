---
layout: single
permalink: /rygoevelser/
title: "Rygøvelser: De mest effektive styrkeøvelser til ryggen 🏋"
header:
  overlay_image: https://images.unsplash.com/photo-1584863231364-2edc166de576?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80
  teaser: https://images.unsplash.com/photo-1584863231364-2edc166de576?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80
  caption: "Rygøvelser: De mest effektive styrkeøvelser til ryggen"
author_profile: true
classes: wide
excerpt: "Du kan træne ryggen ved rygøvelserne dødløft, rows og pullups, men der er mange andre styrketræningsøvelser for ryggen. Ryggen er stærk og skal trænes på mange måder."
categories:
  - Træningsøvelser
breadcrumbs: true
---

Du kan træne ryggen ved rygøvelserne dødløft, rows og pullups, men der er mange andre styrketræningsøvelser for ryggen. Ryggen er stærk og skal trænes på mange måder.

Din ryg skal bruges og udfordres med de bedste og mest effektive øvelser i din rygtræning.

Jeg synes de bedste rygøvelser er basisøvelser, hvor du kan løfte meget vægt i horisontale træk (som [rows]({% link _posts/2020-07-06-rows.md %}))) og vertikale træk (som [chinup og pullup]({% link _posts/2020-06-30-pullup-chinup.md %})), men husk også at de mange variationer af dødløft er fremragende til at træne ryggen.

## Øvelser til ryggen

{% assign site_posts = site.exercises | where: "tags", "Ryg" | where_exp: "post", "post.url != page.url" | sort: "title" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>
