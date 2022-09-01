---
layout: single
permalink: /eksplosivitet/
title: &title "Eksplosivitet, sprint og spring"
excerpt: "Hvordan arbejder man med eksplosivitet? Hvordan sprinter du hurtigere og springer højere?"
author_profile: true
header:
  overlay_image: https://images.unsplash.com/photo-1507853941863-0ed76ec6add4?ixlib=rb-1.2.1&auto=format&fit=crop&h=630&w=1200&q=10
  teaser: https://images.unsplash.com/photo-1507853941863-0ed76ec6add4?ixlib=rb-1.2.1&auto=format&fit=crop&height=300&w=400&q=10
  alt: "Photo by Tikkho Maciel on Unsplash"
  caption: *title
#  actions:
#    - label: "<i class='fas fa-download'></i> Test din kondition"
#      url: "/kondition/tests/"
#    - label: "<i class='fas fa-download'></i> Hvad er min hastighed?"
#      url: "/hastighed/"
classes: wide
feature_row_feature:
  - image_path: https://images.unsplash.com/photo-1501820434261-5bb046afcf6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&height=630&w=1200&q=10
    alt: "Hvordan sprinter du?"
    title: "Hvordan sprinter du?"
    excerpt: "Hvordan sprinter du?"
    url: "/sprint/"
    btn_label: "Læs om sprint"
    btn_class: "btn--info"
feature_row:
  - image_path: https://cnet1.cbsistatic.com/img/Y3vodO8bMPi6qlFLRF3xFcQpLHo=/1092x0/2019/07/26/114f1721-1a71-42bc-b1a4-cb35299bedbc/gettyimages-640493589.jpg
    alt: "Hvordan springer du?"
    title: "Hvordan springer du?"
    excerpt: "Hvordan springer du?"
    url: "/spring/"
    btn_label: "Læs om spring"
    btn_class: "btn--success"
---

{% comment %}

{% include feature_row id="feature_row_feature" type="left" %}

{% include feature_row %}

{% endcomment %}

## Springtests

<div class="feature__wrapper">

{% assign site_posts = site.posts | where: "tags", "springtest" | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Springtræning

<div class="feature__wrapper">

{% assign site_posts = site.posts | where: "category", "Springtræning" | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Sprinttests

<div class="feature__wrapper">

{% assign site_posts = site.posts | where: "tags", "sprinttest" | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Artikler om eksplosivitet, sprint og spring

{% assign site_posts = site.posts | where: "category", "Eksplosivitet" | where_exp: "post", "post.url != page.url" | sort: "title" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>
