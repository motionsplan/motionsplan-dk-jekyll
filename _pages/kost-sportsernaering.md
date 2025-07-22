---
layout: single
title: &title "Sportsernæring"
seo_title: "Sportsernæring: Kost til træning, præstation og restitution"
permalink: /sportsernaering/
excerpt: "Få styr på sportsernæring: Læs hvordan du spiser før, under og efter træning for at præstere bedre og restituere hurtigere – uanset din sport."
description: "Få styr på sportsernæring: Læs hvordan du spiser før, under og efter træning for at præstere bedre og restituere hurtigere – uanset din sport."
header:
  overlay_image: https://images.unsplash.com/photo-1517093728432-a0440f8d45af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&h=630&w=1200&q=60
  teaser: https://images.unsplash.com/photo-1517093728432-a0440f8d45af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&h=300&w=400&q=10
  caption: *title
author_profile: true
toc: true
breadcrumbs: true
classes: wide
feature_row_content:
  - image_path: https://images.unsplash.com/photo-1542736667-069246bdbc82?ixlib=rb-1.2.1&auto=format&fit=crop&h=300&w=400&q=10
    alt: "Kost"
    title: "Kost"
    excerpt: "Hvordan du spiser, hvornår du spiser, og hvordan du sammensætter din kost. Det er med til at afgøre, hvordan du præsterer i træning og konkurrence."
    url: "/kost-ernaering/"
    btn_label: "Læs mere"
    btn_class: "btn--info"
  - image_path: https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&h=300&w=400&q=10
    alt: "Væske"
    title: "Væske"
    excerpt: "Som sportsudøver er det vigtigt at have styr på sit væskebehov. Hvad og hvor meget du bør drikke afhænger af din træningsmængde og -intensitet."
    url: "/vaeske/"
    btn_label: "Læs mere"
    btn_class: "btn--info"
  - image_path: https://images.unsplash.com/photo-1615485290248-d1b5e5e62f1a?ixlib=rb-1.2.1&auto=format&fit=crop&h=300&w=400&q=10
    alt: "Kosttilskud"
    title: "Kosttilskud"
    excerpt: "Kosttilskud flytter ikke en atlet fra nummer 100 til medaljeskamlen, men de kan rykke marginaler, hvis de bruges korrekt og med omtanke."
    url: "/kosttilskud/"
    btn_label: "Læs mere"
    btn_class: "btn--info"
  - image_path: https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&h=300&w=400&q=10
    alt: "Restitution"
    title: "Restitution"
    excerpt: "Kosten er vigtig for evnen til at restituere – både hvad angår mængde, type og timing. En velvalgt kost forbedrer både restitution og præstation."
    url: "/restitution/"
    btn_label: "Læs mere"
    btn_class: "btn--info"
  - image_path: https://images.unsplash.com/photo-1604881991720-6346f3030f3e?ixlib=rb-1.2.1&auto=format&fit=crop&h=300&w=400&q=10
    alt: "Kropskomposition og vejning"
    title: "Kropskomposition og vejning"
    excerpt: "Vægt og kropskomposition kan påvirke præstationsevnen. Se anbefalinger om vejning og om, hvordan man taler ansvarligt om vægt i sport."
    url: "/kropskomposition/"
    btn_label: "Læs mere"
    btn_class: "btn--info"
  - image_path: https://images.unsplash.com/photo-1618213836154-d7900e2b658e?ixlib=rb-1.2.1&auto=format&fit=crop&h=300&w=400&q=10
    alt: "Spiseforstyrrelser"
    title: "Spiseforstyrrelser"
    excerpt: "Vægt og kropssammensætning fylder i mange sportsgrene. Det kan føre til et forstyrret forhold til mad og krop – noget, man skal tage alvorligt."
    url: "/spiseforstyrrelser/"
    btn_label: "Læs mere"
    btn_class: "btn--info"
---

Uanset om du løber, cykler, styrketræner eller dyrker holdsport, har din krop brug for den rette energi på det rette tidspunkt. Sportsernæring handler om at optimere din kost før, under og efter træning, så du kan præstere bedre og restituere hurtigere.

På denne side får du en praktisk og evidensbaseret guide til, hvordan du sammensætter din kost, så den matcher din træning og dine mål.

{% include feature_row id="feature_row_content" %}

## Guides til Kost & Ernæring

{% assign site_posts = site.posts | where: "tags", "kost & ernæring" | where: "tags", "featured" | where: "tags", "guide" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Guides til kosttilskud

{% assign site_posts = site.posts | where: "tags", "kosttilskud" | where_exp: "post", "post.url != page.url" | sort: "last_modified_at" %}

<div class="feature__wrapper" markdown="1">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 8 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Guide til kosttilskud der virker](/kosttilskud/){: .btn .btn--success .btn--center }

</div>

## Energi & Forbrænding: Dagligt energibehov og ligevægtsindtag

Rigtig mange er på udkig efter en kalorieberegner, som kan [udregne dit ligevægtsindtag](/ligevaegtsindtag-beregner/). Det er et af de rigtig populære punkter her på siden.

{% assign site_posts = site.posts | where: "tags", "stofskifteberegner" | sort: "last_modified_at" | reverse %}

<div class="feature__wrapper" markdown="1">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Alt om stofskiftet](/stofskifte/){: .btn .btn--success .btn--center }

</div>

## Kalorieberegnere og energiberegnere

Jeg har skrevet mere om [forskellige typer kalorieberegnere](/kalorieberegner/).

{% assign site_posts = site.posts | where: "tags", "kalorieberegner" | sort: "date" %}

<div class="feature__wrapper" markdown="1">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Find flere kalorieberegnere](/kalorieberegner/){: .btn .btn--success .btn--center }

</div>
