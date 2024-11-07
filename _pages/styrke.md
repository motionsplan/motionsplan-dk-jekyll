---
layout: single
title: "Styrketræning"
redirect_from:
  - /styrke/
seo_title: "Styrketræning: Alt om styrke og træning | Motionsplan"
system:
  - fitnessinstruktør
permalink: /styrketraening/
excerpt: "Styrketræning er fællesbetegnelse for en række fysiske øvelser, hvori en udøver styrker sine muskler. Her kan du dykke ned i alle vores artikler om styrketræning."
header:
  overlay_image: https://images.unsplash.com/photo-1526403223670-2aa44aaface2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=630&w=1200&q=10
  teaser: https://images.unsplash.com/photo-1526403223670-2aa44aaface2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=300&w=400&q=10
  caption: Styrketræning
author_profile: true
author: lsolesen
toc: true
category:
  - Træningsformer
breadcrumbs: true
feature_row_strength:
  - image_path: https://www.reponestrength.com/hubfs/outerglow_hardware-1.png
    alt: "RepOne device"
    url: https://repone-strength.myshopify.com/lars-olesen
    title: "Repone"
    excerpt: "RepOne er opfølgeren til Open Barbell. RepOne fungerer ved at spænde en snor på stangen med en lille magnet. Formålet med RepOne er at have et prisleje, hvor den almindelige forbruger kan være med."
    btn_class: "btn--info"
    rel: sponsored nofollow noopener
sidebar:
  nav: trainingtypes
---

Jeg har samlet alle artiklerne om styrketræning her på siden. Der er både beregnere til styrketræning og dybdegående artikler om, hvordan du får noget ud af din styrketræning.

## Hvad er styrketræning?

Styrketræning er en fællesbetegnelse for en række fysiske øvelser, som bruges til at styrke udøverens muskler. Formålet med styrketræning kan både være at blive stærkere eller få større muskler.

## Styrketræning begynder

Styrketræning kan være en rigtig god træningsaktivitet. Vi har skrevet en del indlæg, der henvender sig til begyndere i styrketræning.

{% assign site_posts = site.posts | where: "category", "Styrketræning" | where: "tags", "begynder" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Styrketræning øvelser

Styrketræning består typisk af en række forskellige øvelser. Vi har samlet de bedste træningsøvelser med forklaringer her på siden.

Du kan finde [maveøvelser](/maveoevelser/), [armøvelser](/arme-triceps-biceps/), [benøvelser](/benoevelser/), [brystøvelser](/brystoevelser/), [baldeøvelser](/balleoevelser/), [rygøvelser](/rygoevelser/), [skulderøvelser](/skulderoevelser/), så har vi lavet en selvstændig side om de muskelgrupper.

Du kan naturligvis også dykke ned i [oversigten over alle vores træningsøvelser](/traeningsoevelser/).

## Styrketræning program og træningsprogram

Vi har skrevet en del om styrketræningsprogrammer. Du kan let finde et **gratis træningsprogram til styrketræning** her på siden. Tjek også alle [træningsprogrammer til styrketræning](/traeningsprogrammer/).

{% assign site_posts = site.posts | where: "tags", "styrketræning" | where: "tags", "træningsprogram" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Styrketræning programlægning

{% assign site_posts = site.posts | where: "category", "Styrketræning" | where: "tags", "programlægning" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Styrketræning for løbere

{% assign site_posts = site.posts | where: "tags", "styrketræning" | where: "tags", "løb" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Beregnere til styrketræning

{% assign site_posts = site.posts | where: "category", "Styrketræning" | where: "tags", "beregner" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Udstyr til styrketræning

{% assign site_posts = site.posts | where: "category", "Styrketræning" | where: "tags", "udstyr" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

Jeg bruger selv RepOne til at lave [velocity based training](/vbt/). Jeg synes det er en rigtig interessant måde at måle min træningsintensitet og træningsfremgang på.

{% include feature_row type="left" id="feature_row_strength" %}

## Alle indlæg om styrketræning

{% assign site_posts = site.posts | where: "category", "Styrketræning" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Eric Helms Styrketræningspyramide

Jeg er meget inspireret af [The Muscle & Strength Pyramid](https://muscleandstrengthpyramids.com/), som bl.a. er skrevet af Eric Helms.

Eric Helms opstiller i pyramiden, hvad der er det vigtigste i forhold til styrketræning. Du kan se pyramiden nedenunder.

{% include motionsplan/strength-pyramid.html nav="strength" %}

Jeg har skrevet uddybdende om [træningspyramiden til styrketræning](/traeningspyramiden-styrketraening/). Styrketræningspyramiden er en måde at prioritere de vigtigste indsatser på, når du laver styrketræning.

Eric Helms fortæller selv om træningspyramiden i en helt [fremragende videoserie](/traeningspyramiden-styrketraening/).
