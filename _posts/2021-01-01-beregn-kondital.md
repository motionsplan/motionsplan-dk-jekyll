---
title: &title "Beregning af kondital: Beregn dit kondital i vores beregnere 🏃"
permalink: /beregn-kondital/
redirect_from:
  - /kondital-loeb/
language: da
header:
  overlay_image: https://images.unsplash.com/photo-1566709603547-638aba3dbbc0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDd8fGNhbGN1bGF0b3J8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=60
  teaser: https://images.unsplash.com/photo-1566709603547-638aba3dbbc0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDd8fGNhbGN1bGF0b3J8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60
  caption: *title
category:
  - Kondition
tags:
  - konditionstest
  - beregner
last_modified_at: 2019-03-06T23:14:14Z
toc: true
---

Du kan beregne dit kondital på mange forskellige måder. Vi har samlet forskellige måder at lave beregning af dit kondital på, så hvis du leder efter en "kondital beregner", så er du kommet til den helt rigtige side.

Du kan også beregne dit kondital på baggrund af løbetests, en tur på roergometer eller efter at have kørt en tur på cyklen.

Vi har samlet forskellige måder at udregne konditallet på herunder.

En måde er at [beregne dit kondital ud fra en vilkårlig distance](/kondital-loeb-distance-tid/), men hvis du helst ikke vil rejse dig fra sofaen for at få svaret, så kan du også ganske enkelt [udregne dit kondital fra din puls](/kondital-fra-puls/).

## Hvordan beregner jeg mit kondital?

For at beregne dit kondital så har du brug for en test, som på en eller anden måde er blevet sammenlignet med en direkte måling af den maksimale iltoptagelse pr. minut delt med kropsvægten. Det er nemlig definitionen på konditallet. Konditallet måles i ml ilt pr. minut pr. kg. kropsvægt.

Der er lavet mange forskellige studier, hvor man har målt deltagernes kondital direkte og sammenlignet den med andre submaksimale eller maksimale tests. Hvis du er interesseret, så har jeg skrevet et andet indlæg, der handler om, [hvordan man tester sin kondition med en konditest](/test-kondition-konditest-kondital/).

## Beregn dit kondital med løbetests

{% assign site_posts = site.posts | where: "tags", "konditionstest" | where: "tags", "løbetest" | where: "tags", "beregner" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single-simple.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Beregning af kondital fra cykling

{% assign site_posts = site.posts | where: "tags", "konditionstest" | where: "tags", "cykeltest" | where: "tags", "beregner" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single-simple.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Beregn dit kondital til romaskine og roergometer

{% assign site_posts = site.posts | where: "tags", "konditionstest" | where: "tags", "rotest" | where: "tags", "beregner" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single-simple.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Beregner af kondital fra gangtest

{% assign site_posts = site.posts | where: "tags", "konditionstest" | where: "tags", "gåtest" | where: "tags", "beregner" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single-simple.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

***

[Se alle konditionstests](/kondition/tests/){: .btn .btn--large .btn--info }

## Validitet af beregning af kondital

Når du beregner dit kondital, så skal du huske, at alle _indirekte_ tests er forbundet med unøjagtigheder. Beregnerne er lavet med udgangspunkt i en population, og formlerne og algoritmerne er baseret på det, der passer på flest muligt i forsøget. Når du laver en beregning af konditallet, så bliver det altså det bedste gæt ud fra forskernes studier.

## Hvordan forbedrer jeg beregningen af mit kondital?

Dit beregnede kondital vil forbedres, hvis du træner over længere tid, hvor du udfordrer kredsløbet. Den hurtigeste måde at forbedre et udregnet kondital er ved at tabe dig. Det skyldes, at konditallet bl.a. afhænger af vægten. 

For at forbedre beregningen af dit kondital, så skal du imidlertid flytte din maksimale iltoptagelse og det kræver en høj intensitet. Vi har skrevet lidt om [intensitetens betydning for at flytte den maksimale iltoptagelse]({% link _posts/2019-11-03-intensiteten-og-vo2max.md %}).

Hvis du bruger samme beregner til dit kondital næste gang, så skal du altså bare præstere bedre i testen, og så vil udregningen af konditallet give et bedre tal.

## Hvad er et godt kondital?

Jeg har lavet en side, hvor du kan se en tabel med kondital, som du kan vurdere dig selv i forhold til. Men husk på at de udregnede kondital er til en tilnærmelse af dit rigtige kondital.

[Se tabel med kondital](/kondital/){: .btn .btn--large .btn--info }

## Konklusion beregning af kondital

Der er mange søgninger på nettet på "beregn kondital", hvilket tyder på, at mange gerne vil lave en beregning af sit kondital. Jeg bruger ofte også selv en beregner til at udregne mit kondital, fordi jeg godt kan lide at få et tal. Egentlig kunne jeg jo bare lave den samme test flere gange for at se, om jeg er blevet bedre, og så ved jeg, at min kondition er blevet bedre.
