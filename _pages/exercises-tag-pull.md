---
layout: single
permalink: /traekoevelser/
title: 'Trækøvelser: De mest effektive styrkeøvelser til at træne træk 🏋'
seo_title: 'Trækøvelser: 10+ mest effektive øvelser til at træne træk'
header:
  overlay_image: /assets/images/unsplash/photo-1584863231364-2edc166de576.jpg
  credit: https://images.unsplash.com/photo-1584863231364-2edc166de576
  teaser: /assets/images/unsplash/photo-1584863231364-2edc166de576.jpg
  caption: 'Trækøvelser: De mest effektive styrkeøvelser til at træne træk 🏋'
author_profile: 'true'
excerpt: Trækøvelser bør være en vigtig del af din træning. Her har vi samlet træk øvelser, som du kan bruge i din styrketræning.
  Vi har bla.a samlet de 10+ bedste trækøvelser.
toc: 'true'
categories:
- Træningsøvelser
breadcrumbs: 'true'
sidebar:
  nav: exercises
---

Trækøvelser træner ryggen og armene. Vi samlet mere om gode trækøvelser både med og uden vægte, så du kan få trænet det øverste af din ryg og dine arme på en god måde.

I et godt træningsprogram skal der både være nogle [presøvelser]({% link _pages/exercises-tag-press.md %}) og nogle trækøvelser.

Trækøvelser opdeles typisk i vandrette træk og lodrette træk. [Rows](/rows/) er i gruppen horisontale træk og [chinup og pullup](/chinup-vs-pullup/) er et eksempel på vertikale eller lodrette trækøvelser.

## Trækøvelser for øvre ryg og armene

Ryggen er delt op i øvre ryg og nedre ryg. Når du vælger øvelser, så skal du både træne lænden, men også den øvre ryg. Derfor er det en god ide med et alsidigt program. Heldigvis findes der nogle store *basisøvelser*, så du kan ramme rigtig mange af rygmusklerne på samme tid.

En ting er at træne rygmusklerne, men du har også brug for stærke og udholdende mavemuskler for at have et godt muskelkorset omkring din [rygsøjle]({% link _pages/anatomy/rygsojlen.md %}). Her har samlet en masse gode [maveøvelser til din mavetræning](/maveoevelser/).

## De bedste trækøvelser til træktræning

{% include motionsplan/exercise key="20210819092000" title="1) Rows" %}

Rows er en helt central del af din træning. Når du gerne vil træne den øvre ryg, så er det en god ide at bruge flere forskellige varianter. Jeg har samlet en artikel over [rows](/rows/) her. Nogle af de mest kendte er [bent over barbell rows]({% link _exercises/roning-foroverboejet-63.md %}). Alt efter hvordan du laver din teknik, så kan du ramme ryggen på forskellig måde med dine rows.

{% include motionsplan/exercise key="20210819092600" title="2) Pulldown" %}

{% include motionsplan/exercise key="20210819092800" title="3) Pullup og chinups" %}

[Pullups og chinups](/chinup-vs-pullup/) er nogle rigtig gode øvelser til at træne ryggen. Jeg har skrevet mere om, [hvordan du kommer i gang med kropshævninger](/laer-kropshaevning-chinup-pullup-program/) her.

{% include motionsplan/exercise key="20210819093100" title="4) Bodyrows" %}

## Trækøvelser uden udstyr

Trækøvelser er nogle af de øvelser, som er sværest at finde på gode variationer uden udstyr.

I denne video kan du få lidt inspiration til at træne træk uden udstyr:

{% include video provider="youtube" id="X-tsHJCdKz8" %}

## Oversigt over alle trækøvelser

{% assign site_posts = site.exercises | where: "tags", "Træk" | where_exp: "post", "post.url != page.url" | sort: "title" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>
