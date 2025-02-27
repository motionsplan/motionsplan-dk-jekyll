---
layout: single
title: "Gang - alt om at gå"
seo_title: "Gang - gå dig i form med enkle skridt"
permalink: /gang/
description: "Gåture forbedrer din sundhed, forbrænder kalorier og reducerer stress. Læs om fordelene ved at gå, og hvordan du får mere gang ind i din hverdag."
excerpt: "Gåture forbedrer din sundhed, forbrænder kalorier og reducerer stress. Læs om fordelene ved at gå, og hvordan du får mere gang ind i din hverdag."
header:
  teaser: https://images.unsplash.com/photo-1580058572462-98e2c0e0e2f0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=300&w=400&q=10
  caption: Gang - fordele ved at gå
author_profile: true
author: lsolesen
toc: true
feature_row_why_walk:
  - image_path: https://images.unsplash.com/photo-1566917306266-652261b1ae5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&h=300&w=400&q=10
    url: /gang-fordele-ved-at-gaa/
    title: "20 fordele ved at gå"
    excerpt: "Der er vel ingen nemmere og billigere motionsform end gang? Har kigger vi på alle de gode grunde, der er til at gå, som også dannede baggrund for #danmarkgårsammen."
    btn_label: "Hvorfor skal du gå?"
    btn_class: "btn--info"
feature_row_inspiration_walking:
  - image_path: https://images.unsplash.com/photo-1538471726790-0f6b031f1982?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D8&auto=format&fit=crop&w=400&q=10
    url: /inspiration-til-gaature/
    title: "Inspiration til gåture"
    excerpt: "Her kan du finde inspiration til dine gåture. Hvor kan du gå, og hvad kan du lave undervejs?"
    btn_label: "Få inspiration"
    btn_class: "btn--info"
feature_row_training:
  - image_path: https://images.unsplash.com/photo-1613931372190-b067a12f73b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHdhbGtpbmd8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=400&q=10
    url: /gangtraening/
    title: "Træning og gang"
    excerpt: "Vil du gerne i gang med at træne lidt mere, mens du går. Så tjek alle forslagene her for inspiration til gåtræning."
    btn_label: "Inspiration til gåtræning"
    btn_class: "btn--info"
feature_row_skridt_til_km:
  - image_path: https://images.unsplash.com/photo-1606474226448-4aa808468efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=10
    url: /skridt-pr-km-10000/
    title: "Hvor langt går du?"
    excerpt: "Hvor mange kilometer er 10.000 skridt? Hvor mange skridt er 1 km? Vi har lavet en omregner fra skridt til km, der kan give dig svaret!"
    btn_label: "Hvor langt går du?"
    btn_class: "btn--info"
  - image_path: https://images.unsplash.com/photo-1560741282-a3ff4a507b4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=10
    url: /tid-at-gaa/
    title: "Hvor hurtigt går du?"
    excerpt: "Hvis du gerne vil vide, hvor lang tid det tager at gå 10.000 skridt, så er du kommet til det rigtige sted. Her får du også svaret på, hvor hurtigt man går 1 kilometer?"
    btn_label: "Hvor hurtigt går du?"
    btn_class: "btn--info"
sidebar:
  nav: trainingtypes
category:
  - Træning
tag:
  - træningsformer
breadcrumbs: true
classes: wide
---

At gå er en af de mest naturlige og effektive former for motion. Det styrker hjertet, forbedrer konditionen og kan reducere stress. Uanset om du går en kort tur i frokostpausen eller bruger gang som en fast del af din træning, kan det gøre en stor forskel for din sundhed.

På denne side dykker vi ned i fordelene ved gang og giver dig inspiration til, hvordan du får mere bevægelse ind i din hverdag.

Så hav skoene klar.

{% include feature_row id="feature_row_why_walk" type="left" %}

## Mest læste om at gå lige nu

{% assign site_posts = site.posts | where: "tags", "gang" | where: "tags", "populær" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Forbrænd kalorier ved at gå

Hvis du gerne vil vide, hvor mange kalorier du forbrænder, når du går, så er du kommet til det rette sted.

Du [forbrænder færre kalorier end ved løb](/loeb-mere-energi-gang/), men hvor meget forbrænder du egentlig ved at gå. Vi har skrevet meget mere om [forbrænding ved gang](/forbraending-ved-gaa-gang/), hvor du kan beregne dit eget kalorieforbrug.

{% assign site_posts = site.posts | where: "tags", "gang" | where: "tags", "forbrænding" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

{% comment %}

## Opgrader din gåtur

## Opgrader din gåtur

## Kom ud og gå i naturen

{% endcomment %}

## Test dig selv

{% assign site_posts = site.posts | where: "tags", "gangtest" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Inspiration til at gå

Du kan se alle grundene til at gå nedenunder, men derfor kan det jo godt være, at du har brug for lidt inspiration til din gåtur.

{% include feature_row id="feature_row_inspiration_walking" type="left" %}

## Hvor lang og hvor hurtig er din gåtur?

{% include feature_row id="feature_row_skridt_til_km" type="left" %}

## Beregnere til gang

{% assign site_posts = site.posts | where: "tags", "gang" | where: "tags", "beregner" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Gåtræning

{% include feature_row id="feature_row_training" type="left" %}

## Læs meget mere om at gå og gang

{% assign site_posts = site.posts | where: "tags", "gang" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>