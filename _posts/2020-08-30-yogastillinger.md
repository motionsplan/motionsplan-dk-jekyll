---
title: &title "Yogaøvelser: Yogastillinger og øvelser til yoga"
permalink: /yogastillinger-yogaovelser/
last_modified_at: 2020-08-22T09:41:09Z
language: da
header:
  overlay_image: https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=60
  teaser: https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60
  caption: *title
category:
  - Yoga
tags:
  - træningsøvelser
  - yogastillinger
  - yogaovelser
  - yoga
classes: wide
---

Jeg har samlet en række gode yogaøvelser og yogastillinger, som du kan gå i gang med allerede i dag. Yogaøvelser er rigtig gode at bruge alene som træning, men fungerer også rigtig godt i opvarmning til andre idrætsgrene.

Jeg kan godt selv lide at bruge yogaøvelserne som træningsøvelser og opvarmningsøvelser. 

De fleste yogastillinger, skal man lige øve sig på.s

## Blog indlæg om yogaøvelser og yogastillinger

<div class="feature__wrapper">

{% assign site_posts = site.posts | where: "tags", "yoga" | sort: "title" %}

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single-simple.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Yogaøvelser og yogastillinger

Jeg har samlet en række gode yogaøvelser og yogastillinger, som du kan gå i gang med allerede i dag. Yogaøvelser er rigtig gode at bruge alene som træning, men fungerer også rigtig godt i opvarmning til andre idrætsgrene.

{% assign exercises = site.exercises | where: "tags", "Yoga" | sort: "title" %}
{% include exercises-by-search title="Øvelser til yoga" exercises=exercises %}
