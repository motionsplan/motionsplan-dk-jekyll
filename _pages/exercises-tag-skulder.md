---
layout: single
permalink: /skulderoevelser/
title: "Skulderøvelser: De mest effektive træningsøvelser til skulderen 🏋"
seo_title: "Skulderøvelser: Effektive træningsøvelser til skulderen 🏋"
author_profile: true
toc: true
header:
  overlay_image: https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80
  teaser: https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80
  caption: "Skulder-øvelser: De mest effektive styrketræningsøvelser til skulderen"
excerpt: "Skuldertræning kan bestå af forskellige skulder øvelser. Vi har samlet det bedste styrketræningsøvelser og skulder-øvelser til træning af din skulder."
categories:
  - Træningsøvelser
breadcrumbs: true
sidebar:
  nav: exercises
---

Skuldertræning skal tage højde for et kompliceret led, og du kan vælge forskellige øvelser til at træne din skulder. Træning af skulderen laves med øvelser, hvor du løfter armene over hovedet og ud til siden eller presser fremad. Vi har samlet de bedste skulderøvelser til træning af dine skuldermuskler.

Det er vigtigt at bevæge skulderen på mange forskellige måder for at forebygge skuldersmerter og ondt i skulderen. Skuldre, nakke og skulderblade bør udfordres i træningen, og du bør have en forståelse for, hvordan sammenhængen er mellem de tre. Du kan også læse mere om selve [skulderleddet]({% link _anatomy/joints/skulderleddet.md %}).

Jeg har skrevet mere om [armstrækninger]({% link _posts/2020-07-05-pushups.md %}), [rows]({% link _posts/2020-07-06-rows.md %}) og [pullups og chinups]({% link _posts/2020-06-30-pullup-chinup.md %}), som udfordrer skulderbladet og for- og bagskulder på forskellige måder.

## 10 gode skulder øvelser

Når du styrketræner, så er det en god ide at tilføje skulder øvelser til træningsprogrammet. Det store spørgsmål er så: hvilke øvelser skal du vælge? Her har du et forslag til de 10 bedste skulder øvelser.

{% include exercise key="20210818223910" title="1) Skulderpres" %}

{% include exercise key="20210818223920" title="2) Arnold press" %}

{% include exercise key="20210818223930" title="3) Lateral raises" %}

{% include exercise key="20210818223940" title="4) Military Press" %}

{% include exercise key="20210818192300" title="5) Push press" %}

{% include exercise key="20210818224100" title="6) Bænkpres" %}

{% include exercise key="20200706160818" title="7) Bent Over Rows (BOR)" %}

{% include exercise key="20201213171600" title="8) Facepull" %}

{% include exercise key="20201213171700" title="9) Scapula Pushups" %}

{% include exercise key="20201213172700" title="10) Seated External Rotation" %}

## Træning af rotatormanchetten

Du har sikkert ofte hørt om rotatormanchetten og dens betydning for at have sunde skuldre. Det er en rigtig god ide at få trænet rotatormanchetten i din træning.

Rotatormanchetten eller _rotator cuff_ dækker over fire små muskler i skulderen. Musklerne er med til at lave rotationer. Hvis musklerne er for svage, så kan de ikke stabilisere skulderen ordentligt.

Derfor kan du forebygge skader i skulderleddet ved at træne din rotatormanchet. Det er fx en god ide at lave intern og ekstern rotation. Hvis du træner din *rotator cuff* 10 minutters træning 2 gange om ugen, så har du gjort dig selv en tjeneste.

Du kan læse om flere [skulderøvelser og træning af bagskulderen og rotatormanchetten]({% link _posts/2020-12-12-styrk-dine-skuldre.md %}).

Se et par øvelser til rotatormanchetten i denne video:

{% include video provider="youtube" id="cgrixtJDuh4" %}

## Artikler om træning af skulder og skulderøvelser

<div class="feature__wrapper">

{% assign site_posts = site.posts | where: "tags", "skulder" | sort: "title" %}

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Skulderøvelser: Øvelser til skuldertræning

{% assign site_posts = site.exercises | where: "tags", "Skuldre" | where_exp: "post", "post.url != page.url" | sort: "title" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>
