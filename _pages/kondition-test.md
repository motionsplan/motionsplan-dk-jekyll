---
layout: single
permalink: /kondition/tests/
title: &title "Test din kondition"
seo_title: "Konditionstests: Test din kondition i gang, løb, cykling og roning"
excerpt: "Oversigt over alle konditionstests, hvor du kan udregne kondital og iltoptagelse med vores beregnere til gang, løb, cykling og roning - og se om du får et bedre kondital og fremgang i træningen."
header:
  overlay_image: https://images.unsplash.com/photo-1475274110913-480c45d0e873?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=630&w=1200&q=10
  caption: *title
  alt: Photo by Clem Onojeghuo on Unsplash
  actions:
    - label: "<i class='fas fa-download'></i> Læs mere om kondition"
      url: "/kondition/"
classes: wide
feature_row_feature:
  - image_path: https://images.unsplash.com/photo-1501820434261-5bb046afcf6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=300&w=400&q=10
    alt: "Om kondition og tests"
    title: "Om kondition og tests"
    excerpt: "Kommer jeg i bedre form og kondition? Udregn dit kondital og iltoptagelse med vores beregnere og se om du får et bedre kondital og fremgang i træningen."
    url: "/test-kondition-konditest-kondital/"
    btn_label: "Lær om  konditionstests"
    btn_class: "btn--info"
toc: true
author_profile: true
---

Her har du en oversigt over alle konditionstests. Vi har skrevet et indlæg, der handler uddybende om [konditionstests og konditionstestning](/test-kondition-konditest-kondital/).

{% include feature_row id="feature_row_feature" type="left" %}

## Konditionstests til løb

{% assign site_posts = site.posts | where: "tags", "konditionstest" | where: "tags", "løbetest" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Konditionstests til cykling

{% assign site_posts = site.posts | where: "tags", "konditionstest" | where: "tags", "cykeltest" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Konditionstests til gang

{% assign site_posts = site.posts | where: "tags", "konditionstest" | where: "tags", "gangtest" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Submaksimale konditionstests

{% assign site_posts = site.posts | where: "tags", "submaksimal test" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Maksimale konditionstests

{% assign site_posts = site.posts | where: "tags", "maksimal test" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Alle konditionstests - test din aerobe udholdenhed

{% assign site_posts = site.posts | where: "tags", "konditionstest" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>
