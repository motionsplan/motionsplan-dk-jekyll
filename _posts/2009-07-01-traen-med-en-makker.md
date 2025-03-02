---
title: &title "Makkerøvelser: Træn med en makker"
permalink: /artikel/traen-med-en-makker/
language: da
header:
  overlay_image: https://images.unsplash.com/photo-1571689230986-c2dcb5f4c5f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fHBhcnRuZXIlMjBleGVyY2lzZXxlbnwwfDB8MHx8&auto=format&fit=crop&h=630&w=1200&q=60
  teaser: https://images.unsplash.com/photo-1571689230986-c2dcb5f4c5f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fHBhcnRuZXIlMjBleGVyY2lzZXxlbnwwfDB8MHx8&auto=format&fit=crop&h=300&w=400&q=10
  caption: *title
tags:
  - styrketræning
  - makkerøvelser
  - træning
category:
  - Styrketræning
last_modified_at: 2013-02-13T22:19:00Z
---

Vi har på det seneste eksperimenteret lidt med forskellige makkerøvelser. At træne med en makker giver en række fordele:

- **Motivation**. Det er motiverende at træne med en makker, fordi man hele tiden kan presse hinanden under træningen.
- **Vedholdenhed**. Når man laver aftaler med andre, så er det vanskeligere at blive siddende hjemme på terassen i det gode vejr.

En rigtig god måde at træne med en makker på, er at kombinere intervalløb med styrkeøvelser, hvor man bruger hinanden som belastning.

Men hvad er dine erfaringer med at træne med en makker, og hvilke øvelser plejer I at bruge? Giv din mening til kende i kommentarerne.

## Se flere eksempler på makkerøvelser

Du kan se en masse forslag til makkerøvelser herunder.

{% assign site_posts = site.exercises | where: "tags", "makkerøvelser" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>
