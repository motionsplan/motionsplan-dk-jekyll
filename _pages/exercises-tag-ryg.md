---
layout: single
permalink: /rygoevelser/
title: "Rygøvelser: De mest effektive styrkeøvelser til ryggen 🏋"
seo_title: "Rygøvelser: 10+ mest effektive øvelser til din rygtræning"
header:
  overlay_image: https://images.unsplash.com/photo-1584863231364-2edc166de576?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=5
  teaser: https://images.unsplash.com/photo-1584863231364-2edc166de576?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=5
  caption: "Rygøvelser: De mest effektive styrkeøvelser til ryggen"
author_profile: true
excerpt: "Rygøvelser bør være en vigtig del af din træning. Her har vi samlet ryg øvelser, som du kan bruge i din rygtræning, når du laver styrketræning. Vi har bla.a samlet de 10+ bedste rygøvelser."
toc: true
categories:
  - Træningsøvelser
breadcrumbs: true
sidebar:
  nav: exercises
---

Rygøvelser gør ryggen og lænden stærkere og mere udholdende. Øvelser til ryggen bør være en del af din styrketræning, så derfor har vi samlet mere om gode rygøvelser både med og uden vægte.

Der er mange styrketræningsøvelser for ryggen. Ryggen er stærk og skal trænes på mange måder. Din ryg skal bruges og udfordres med de bedste og mest effektive øvelser i din rygtræning.

Jeg synes de bedste rygøvelser er basisøvelser, hvor du kan løfte meget vægt i horisontale træk (som [rows]({% link _posts/2020-07-06-rows.md %}))) og vertikale træk (som [chinup og pullup]({% link _posts/2020-06-30-pullup-chinup.md %})), men husk også at de mange variationer af [dødløft](/doedloeft/) er fremragende til at træne ryggen.

## Ondt i ryggen

Ifølge [Rigshospitalet](https://www.rigshospitalet.dk/afdelinger-og-klinikker/hovedorto/rygkirurgi-led-og-bindevaevssygdomme/for-patienter-og-paaroerende/rygsygdomme/Sider/fakta-om-ryggen-og-rygsmerter.aspx) kommer 80% af danskere til på et tidspunkt at opleve at have ondt i ryggen. Du kan forebygge problemer med ryggen ved at ræne ryggen. Det er overhovedet ikke farligt at træne ryggen, men i virkeligheden bare en rigtig god ide.

## Rygøvelser for øvre og nedre ryg

Ryggen er delt op i øvre ryg og nedre ryg. Når du vælger øvelser, så skal du både træne lænden, men også den øvre ryg. Derfor er det en god ide med et alsidigt program. Heldigvis findes der nogle store *basisøvelser*, så du kan ramme rigtig mange af rygmusklerne på samme tid.

En ting er at træne rygmusklerne, men du har også brug for stærke og udholdende mavemuskler for at have et godt muskelkorset omkring din [rygsøjle]({% link _pages/anatomy/rygsojlen.md %}). Her har samlet en masse gode [maveøvelser til din mavetræning]({% link _pages/exercises-tag-abs.md %}).

## 7 gode rygøvelser til rygtræning

{% include exercise key="20210819091800" title="1) Dødløft" %}

Dødløft er en rigtig god øvelse til din rygtræning. Det er en basisøvelse, som rammer rigtig mange muskelgrupper, men de hjælper dig også med at lære at spænde op omkring din rygsøjle. Øvelsen findes i mange varianter, fx [konventionel dødløft]({% link _exercises/doedloeft-konventionel-55.md %}), [sumo dødløft]({% link _exercises/doedloeft-sumo-40.md %}), [stivbenet dødløft]({% link _exercises/doedloeft-stivbenet-620.md %}), trækfat dødløft og [rumænsk dødløft]({% link _exercises/doedloeft-romanian-43.md %}). Dødløft er ikke farligt. Du skal bare sørge for at dosere rigtigt og prioritere din teknik.

{% include exercise key="20210819092000" title="2) Rows" %}

Rows er en helt central del af din træning. Når du gerne vil træne den øvre ryg, så er det en god ide at bruge flere forskellige varianter. Jeg har samlet en artikel over [rows](/rows/) her. Nogle af de mest kendte er [bent over barbell rows]({% link _exercises/roning-foroverboejet-63.md %}). Alt efter hvordan du laver din teknik, så kan du ramme ryggen på forskellig måde med dine rows.

{% include exercise key="20210819092600" title="3) Pulldown" %}

{% include exercise key="20210819092800" title="4) Pullup og chinups" %}

[Pullups og chinups](/chinup-vs-pullup/) er nogle rigtig gode øvelser til at træne ryggen. Jeg har skrevet mere om, [hvordan du kommer i gang med kropshævninger](/laer-kropshaevning-chinup-pullup-program/) her.

{% include exercise key="20210819093100" title="5) Bodyrows" %}

{% include exercise key="20210819093200" title="6) Planken" %}

{% include exercise key="20210819093210" title="7) Good morning" %}

## Øvelser til ryggen

{% assign site_posts = site.exercises | where: "tags", "Ryg" | where_exp: "post", "post.url != page.url" | sort: "title" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>
