---
layout: category
permalink: /loebesiden/
title: "Løbesiden: Alt om løb, løbetræning og løbeprogrammer"
author_profile: true
sort_by: title # date (default) title
sort_order: forward # forward (default), reverse
taxonomy: Løb
entries_layout: grid
excerpt: &excerpt "Guide til løbetræning. Her på løbesiden kan du finde nyttig viden om løb til 5 km, 10 km, halvmaraton og maraton. Vælg et effektivt løbeprogram. Lær om pulstræning, intervalløb og intervaltræning."
header:
  overlay_image: https://images.unsplash.com/photo-1581889470536-467bdbe30cd0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1990&q=80
  caption: "Løbesiden: Alt om løb og løbetræning"
  actions:
    - label: "<i class='fas fa-download'></i> Hvad er min hastighed?"
      url: "/hastighed/"
classes: wide
feature_row_excerpt:
  - excerpt: *excerpt
feature_row_feature:
  - image_path: https://images.unsplash.com/photo-1529795533870-ea8020391255?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80
    alt: "Løbesidens Løbsberegner"
    title: "Løbeberegner"
    excerpt: "Jeg har lavet en løbeberegner baseret på Løbesiden, der kan beregne dit træningstempo og konkurrencetider ud fra Jack Daniels Running Formula. Jeg har også beskrevet forskellige træningsmetoder."
    url: "/loebesiden-jack-daniels-loebeberegner/"
    btn_label: "Brug løbsberegneren"
    btn_class: "btn--info"
  - image_path: https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80
    alt: "Løbeøkonomi og løbeteknik"
    title: "Løbeøkonomi og løbeteknik"
    excerpt: "En god løbeøkonomi er evnen til at holde høj fart i lang tid ved et minimalt energiforbrug, men hvordan beregner man det egentlig?"
    url: "/lobeokonomi/"
    btn_label: "Lær om løbeøkonomi"
    btn_class: "btn--info"
feature_row:
  - image_path: https://cnet1.cbsistatic.com/img/Y3vodO8bMPi6qlFLRF3xFcQpLHo=/1092x0/2019/07/26/114f1721-1a71-42bc-b1a4-cb35299bedbc/gettyimages-640493589.jpg
    alt: "Kondition og tests"
    title: "Kondition og tests"
    excerpt: "Hvad er kondital og iltoptagelse, og hvordan måler man det?"
    url: "/kondition-og-test/"
    btn_label: "Læs om kondital"
    btn_class: "btn--success"
  - image_path: https://images.unsplash.com/photo-1544899489-a083461b088c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80
    alt: "Hvad er en god kondition?"
    title: "Hvad er en god kondition?"
    excerpt: "Svaret på hvad et godt kondital er afhænger naturligvis af hvem man sammenligner sig med. Her er tabeller gældende for almindelige mennesker i Skandinavien."
    url: "/kondital/"
    btn_label: "Se konditionstabel"
    btn_class: "btn--danger"
  - image_path: https://images.unsplash.com/photo-1501820434261-5bb046afcf6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80
    alt: "Energisystemer 101"
    title: "Energisystemer 101"
    excerpt: "Hvordan ser kroppens energisystemer ud - noget om aerob og anaerob energisystem."
    url: "/energisystemer/"
    btn_label: "Lær om energisystemer"
    btn_class: "btn--danger"
---

{% include feature_row type="center" id="feature_row_excerpt" %}

{% include feature_row id="feature_row_feature" type="left" %}

{% include feature_row %}

## Beregnere til løb

{% assign site_posts = site.posts | where: "category", "Løb" | where: "tags", "beregner" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single-simple.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Løbesiden om løbetræning, intervalløb og løbeprogrammer
