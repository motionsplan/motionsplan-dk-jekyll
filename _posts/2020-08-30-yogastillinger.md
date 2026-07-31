---
title: 'Yogaøvelser: Yogastillinger og øvelser til yoga 🧘‍♂️'
permalink: /yogastillinger-yogaovelser/
excerpt: Jeg har samlet en række gode yogaøvelser og yogastillinger, som du kan gå i gang med allerede i dag. Yogaøvelser
  er rigtig gode at bruge alene som træning, men fungerer også rigtig godt i opvarmning til andre idrætsgrene.
last_modified_at: '2020-08-22T09:41:09Z'
language: da
header:
  overlay_image: /assets/images/unsplash/photo-1544367567-0f2fcb009e0b.jpg
  credit: https://images.unsplash.com/photo-1544367567-0f2fcb009e0b
  teaser: /assets/images/unsplash/photo-1544367567-0f2fcb009e0b.jpg
  caption: 'Yogaøvelser: Yogastillinger og øvelser til yoga 🧘‍♂️'
category:
- Yoga
tags:
- træningsøvelser
- yogaøvelser
- yoga
- øvelser
---

Jeg har samlet en række gode yogaøvelser og yogastillinger, som du kan gå i gang med allerede i dag. Yogaøvelser er rigtig gode at bruge alene som træning, men fungerer også rigtig godt i opvarmning til andre idrætsgrene.

Jeg kan godt selv lide at bruge yogaøvelserne som træningsøvelser og opvarmningsøvelser. 

De fleste yogastillinger, skal man lige øve sig på.

## Blog indlæg om yogaøvelser og yogastillinger

<div class="feature__wrapper">

{% assign site_posts = site.posts | where: "tags", "yoga" | sort: "title" %}

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include_cached archive-single.html post=post type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Yogaøvelser og yogastillinger

Jeg har samlet en række gode yogaøvelser og yogastillinger, som du kan gå i gang med allerede i dag. Yogaøvelser er rigtig gode at bruge alene som træning, men fungerer også rigtig godt i opvarmning til andre idrætsgrene.

{% assign exercises = site.exercises | where: "tags", "Yoga" | sort: "title" %}
{% include motionsplan/exercise-grid.html title="Øvelser til yoga" exercises=exercises input_type="array" %}
