---
title: &title "Løbeblogs til inspiration"
seo_title: "Inspirerende løbeblogs til inspiration"
permalink: /loebeblogs/
language: da
header:
  teaser: https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=5
  caption: *title
category:
  - Løb
tags:
  - blogs
last_modified_at: 2022-04-12T22:21:26Z
feature_row_feature:
  - image_path: https://images.unsplash.com/photo-1540539234-c14a20fb7c7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHJ1bm5pbmd8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=5
    alt: "Løbesidens Løbsberegner"
    title: "Løbeberegner"
    excerpt: "Jeg har lavet en løbeberegner baseret, der kan beregne dit træningstempo og konkurrencetider ud fra Jack Daniels Running Formula. Her kan du også læse om forskellige træningsmetoder."
    url: "/loebesiden-jack-daniels-loebeberegner/"
    btn_label: "Brug løbsberegneren"
    btn_class: "btn--info"
# Hvad koster en løbetest
# Hvordan ved jeg om jeg er i god form?
# Er en løbetest nødvendig
# Hvilken løbetest skal jeg vælge?
---

Hvis du er på udkig efter gode løbeblogs, som kan inspirere dig til at komme afsted på en løbetur, så er du kommet til det rigtige sted. Motionsplan er god dansk løbeblog, der kan give dig inspiration til din træning!

I øjeblikket findes der ikke så mange gode danske løbeblogs. Hvis du kender nogle blogs som burde komme på listen, så skriv endelig.

## Alle blogindlæg fra Motionsplan løbeblog

{% assign site_posts = site.posts | where: "tags", "løb" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Konklusion

Kender du gode løbeblogs på enten dansk eller engelsk, så skriv endelig, så de kan komme på listen.
