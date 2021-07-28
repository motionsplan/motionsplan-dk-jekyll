---
layout: single
title: "Styrketræning"
system:
  - fitnessinstruktør
permalink: /styrke/
excerpt: "Styrketræning er fællesbetegnelse for en række fysiske øvelser, hvori en udøver styrker sine muskler. Her kan du dykke ned i alle vores artikler om styrketræning."
header:
  overlay_image: https://images.unsplash.com/photo-1526403223670-2aa44aaface2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80
  teaser: https://images.unsplash.com/photo-1526403223670-2aa44aaface2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80
  caption: Styrketræning
author_profile: true
author: lsolesen
sidebar:
  nav: strength
---

Jeg har samlet alle artiklerne om styrketræning her på siden. Der er både beregnere til styrketræning og dybdegående artikler om, hvordan du får noget ud af din styrketræning.

## Hvad er styrketræning?

Styrketræning er en fællesbetegnelse for en række fysiske øvelser, som bruges til at styrke udøverens muskler. Formålet med styrketræning kan både være at blive stærkere eller få større muskler.

{% comment %}

## Styrketræning begynder

{% endcomment %}

## Styrketræning øvelser

Styrketræning består typisk af en række forskellige øvelser. Vi har samlet de bedste træningsøvelser med forklaringer her på siden.

Du kan finde [maveøvelser]({% link _pages/exercises-tag-abs.md %}), [armøvelser]({% link _pages/exercises-tag-arme.md %}), [benøvelser]({% link _pages/exercises-tag-ben.md %}), [brystøvelser]({% link _pages/exercises-tag-bryst.md %}), [balleøvelser]({% link _pages/exercises-tag-glutes.md %}), [rygøvelser]({% link _pages/exercises-tag-ryg.md %}), [skulderøvelser]({% link _pages/exercises-tag-skulder.md %}), så har vi lavet en selvstændig side om de muskelgrupper.

Du kan naturligvis også dykke ned i [oversigten over alle vores træningsøvelser](/traeningsoevelser/).

{% comment %}

## Styrketræning program og træningsprogram

**gratis træningsprogram til styrketræning**

## Styrketræning for løbere

{% endcomment %}

## Beregnere til styrketræning

{% assign site_posts = site.posts | where: "category", "Styrketræning" | where: "tags", "beregner" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Alle indlæg om styrketræning

{% assign site_posts = site.posts | where: "category", "Styrketræning" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Eric Helms Strength Training Pyramid

Jeg er meget inspireret af [The Muscle & Strength Pyramid](https://muscleandstrengthpyramids.com/), som bl.a. er skrevet af Eric Helms.

Eric Helms opstiller i pyramiden, hvad der er det vigtigste i forhold til styrketræning. Du kan se pyramiden nedenunder.

Vi er i færd med at skrive artikler, så du kan blive klogere på sammensætningen af din styrketræning.

{% include strength-pyramid.html nav="strength" %}

## Styrketræningspyramiden

Eric Helms beskriver selv træningspyramiden i følgende helt fremragende videoserie.

{% include video provider="youtube" id="OWmchPCyDvw" %}

{% include video provider="youtube" id="Dl8v6frDJHc" %}

{% include video provider="youtube" id="nun-vSQV6wU" %}

{% include video provider="youtube" id="XMpntp3TqSA" %}

{% include video provider="youtube" id="_C_7n704rvc" %}

{% include video provider="youtube" id="CM3Kgp9c7PE" %}
