---
layout: single
title: "Træningsformer og motionsformer"
seo_title: "Træningsformer og motionsformer - inspiration til bevægelse"
permalink: /traeningsformer/
description: "Er du på udkig efter spændende træningsformer og motionsformer? Her får du en grundig gennemgang af, hvad man kan træne for at være fysisk aktiv."
excerpt: "Vi præsenterer viden om en lang række forskellige træningsformer og motionsformer. Du kan lade dig inspirere af alle de forskellige måder at træne på."
header:
  overlay_image: https://images.unsplash.com/photo-1540474238286-8fd6702d30d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&h=630&w=1200&q=10
  teaser: https://images.unsplash.com/photo-1540474238286-8fd6702d30d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&h=300&w=400&q=10
  caption: Træningsformer
  actions:
    - label: "<i class='fas fa-download'></i> Styrketræning"
      url: "/styrketraening/"
    - label: "<i class='fas fa-download'></i> Løb"
      url: "/loebesiden/"
    - label: "<i class='fas fa-download'></i> Konditionstræning"
      url: "/kondition/"
    - label: "<i class='fas fa-download'></i> Træningsøvelser"
      url: "/traeningsoevelser/"
    - label: "<i class='fas fa-download'></i> Træningsprogrammer"
      url: "/traeningsprogrammer/"
author_profile: false
author: lsolesen
toc: true
sidebar:
  nav: trainingtypes
breadcrumbs: true
---

Vi præsenterer viden om en lang række forskellige træningsformer og motionsformer. Du kan lade dig inspirere af alle de forskellige måder at træne på.

Du kan også læse mere om, [hvordan du kan optimere din træning](/optimer-traening/). Vi har også lavet en oversigt over mange forskellige [træningsmetoder](/traeningsmetoder/), som du kan lade dig inspirere af.

## Styrketræning

Styrketræning handler om at blive stærkere, bygge større muskler eller begge dele på samme tid. Vi har skrevet rigtig mange indlæg om styrketræning, styrketræningsprogrammer og øvelser til styrketræning.

Læs mere om [styrketræning her](/styrketraening/) eller se vores [begynderprogram til calisthenics]({% link _posts/2021-01-18-calistenics.md %}).

{% assign site_posts = site.posts | where: "category", "Styrketræning" | where_exp: "post", "post.url != page.url" | sort: "last_modfied_at" | reverse %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 3 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Løb

Løb handler om at lære at løbe, blive en hurtigere løber eller kunne løbe længere. Vi hjælper dig i gang med træningsprogrammer og løbeøvelser.

Læs mere om [løb og løbetræning her](/loebesiden/).

{% assign site_posts = site.posts | where: "category", "Løb" | where_exp: "post", "post.url != page.url" | sort: "last_modfied_at" | reverse %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 3 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Cardio og kondition

Cardio handler om at træne din kondition og dit kredsløb. Du kan bruge mange forskellige måder til at træne på. Vi har forslag til træningsprogrammer og øvelser til din cardiotræning. Du kan også tjekke vores [guide til de bedste cardiomaskiner]({% link _posts/2020-12-23-bedste-cardiomaskiner.md %}).

Læs mere om [cardio træning](/cardio-traening-workout/) og [konditionstræning](/kondition/).

{% assign site_posts = site.posts | where: "category", "Kondition" | where_exp: "post", "post.url != page.url" | sort: "last_modfied_at" | reverse %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 3 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Cykling

Cykling bliver mere og mere populært. Vi har samlet masser indhold om cykling og tests, som du kan bruge, hvis cykling er din primære træningsform.

Læs mere om [cykling og cykeltræning her](/cykling/).

{% assign site_posts = site.posts | where: "category", "Cykling" | where_exp: "post", "post.url != page.url" | sort: "last_modfied_at" | reverse %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 3 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Yoga og mindfulness

Vi har skrevet flere indlæg om [yoga og mindfulness](/yoga/). Tjek dem her:

{% assign site_posts = site.posts | where: "category", "Yoga" | where_exp: "post", "post.url != page.url" | sort: "last_modfied_at" | reverse %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 3 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Springtræning og plyometrisk træning

Hvis du gerne vil være mere eksplosiv og hoppe højere, så er der ingen vej uden om at komme i gang med [springtræning](/springstyrke-og-springtraening/). Plyometrisk træning er en måde at træne _stretch shortening cycle (SSC)_. Her er fire enkle trin til, hvordan du [træne plyometrisk træning](/plyometrisk-traening/).

## Træning af muskelgrupper

Når du gerne vil træne forskellige muskelgrupper, så skal du vælge passende træningsøvelser, så du træner de rigtige muskler.

Vi har her på sitet samlet de [bedste træningsøvelser](/traeningsoevelser/), [strækøvelser](/udstraekning-udspaending/), [balanceøvelser](/balance/), [træning af core og kropsstammen](/core/) og styrketræningsøvelser. Vi har lavet en grundig forklaring af alle øvelserne, og der er både øvelser til styrketræning, konditionstræning, yoga, udstrækning, mobilitet og cardio.

Du kan også tjekke vores dedikerede sider til [øvelser til maven](/maveoevelser/), [armøvelser](/arme-triceps-biceps/), [benøvelser](/benoevelser/), [øvelser til brystet](/brystoevelser/), [baldeøvelser](/balleoevelser/), [rygøvelser](/rygoevelser/) eller [skulderøvelser](/skulderoevelser/).

Nogle af vores meget populære guides til træning af muskelgrupper er vores [guide til chinups og pullups](/chinup-vs-pullup/) og [armstrækninger og armbøjninger](/armbojninger-eller-armstraekninger-pushups/).

Under alle omstændigheder bør du til inspiration dykke ned i [alle vores træningsøvelser](/traeningsoevelser/).
