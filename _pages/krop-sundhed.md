---
layout: single
title: &title "Krop og sundhed"
permalink: /krop-og-sundhed/
excerpt: "Krop og sundhed handler om at blive klogere på kroppen. Vi har samlet emner om kost, vægttab og træningslære."
header:
  overlay_image: https://images.unsplash.com/photo-1517093728432-a0440f8d45af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&h=630&w=1200&q=10
  teaser: https://images.unsplash.com/photo-1517093728432-a0440f8d45af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&h=300&w=400&q=10
  caption: *title
author_profile: true
author: lsolesen
toc: true
breadcrumbs: true
---

{{ page.excerpt }}

## Kost & Opskrifter

{% assign site_posts = site.posts | where: "tags", "kost" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Fysiologi

Det er godt at kende mere til [kroppens fysiologi](/fysiologi/), når man gerne vil forstå træningslæren om kroppen. Du kan blive klogere i nogle af disse indlæg.

{% assign site_posts = site.posts | where: "tags", "fysiologi" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Anatomi

Du kan fx dykke ned i vores [omfattende anatomiguide](/anatomi/) og [guide til bevægelsesanalyse](/bevaegelsesanalyse/).

{% assign site_posts = site.posts | where: "tags", "anatomi" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Vægttab

Vægttab fylder rigtig meget, når man taler om krop, træning og sundhed. Der findes en kæmpestor forretning af vægttabseksperter og kosttilskud til vægttab. Der bliver brugt før og efter-billeder af en afklædt krop for at vise, hvor effektive resultater, man kan få. Jeg har skrevet lidt om en [anden tilgang til vægttab]({% link _posts/2021-07-31-vaegttab.md %}).

{% assign site_posts = site.posts | where: "tags", "vægttab" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Psykologi

{% assign site_posts = site.posts | where: "tags", "psykologi" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>
