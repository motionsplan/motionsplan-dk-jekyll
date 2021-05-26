---
title: &title "Rygmuskler: Liste og øvelser til muskler i ryggen"
seo_title: "Rygmuskler • Liste og øvelser til muskler i ryggen »"
description: "Komplet liste over muskler i benet. Forslag til træning af benmusklerne."
permalink: /muskler/ryggen/
language: da
header:
  overlay_image: https://images.unsplash.com/photo-1600677396360-9c4e8e46e7d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80
  teaser: https://images.unsplash.com/photo-1600677396360-9c4e8e46e7d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80
  caption: *title
category:
  - Anatomi
tags:
  - muskler
last_modified_at: 2021-01-28T23:14:14Z
toc: true
author: lsolesen
---

Jeg har samlet en liste over muskler i din ryg her. Det er godt at vide, hvordan dine rygmuskler virker, hvis du gerne vil træne musklerne i ryggen.

{% include figure image_path=page.header.teaser caption="Du ser sjældent dine rygmuskler, men de er vigtige for at have en god og ret holdning" alt="rygmuskler og muskler i benet" %}

[Pullup og chinups]({% link _posts/2020-06-30-pullup-chinup.md %}) er rigtig gode øvelser til ryggen, ligesom du ikke kan undvære de mange [rows og row-variationer]({% link _posts/2020-07-06-rows.md %}).

{% comment %}

## Hvorfor træne musklerne i ryggen?

Du bruger dine ben hele tiden. Benene skal bære hele vægten for din krop. Derfor kan det også betale sig at styrke musklerne - både for at [forebygge skader]({% link _posts/2020-11-23-skadesforebyggelse.md %}), men også for at få bedre præstationer.

Hvis musklerne omkring knæet - på både forsiden og bagsiden - er stærke, så vil det fjerne lidt af belastningen på knæleddet, når du står, går og løber. Det kan hjælpe dig med at have et sundt knæled over mange år.

Når musklerne i benene er stærke, så vil du også præstere bedre, når du springer, løber og sprinter.

## Hvilke muskler har du i dit ben?

Når du træner ben, så er de store muskler den firehovede knæstrækker (quadriceps), sædemusklerne (gluteus maximus og til dels medius), indadførene (adductor magnus, longus og brevis), hasemusklerne (semimembranosus, semitendinosus og biceps femoris), og lægmusklerne (gastrocnemius og soleus).

{% endcomment %}

Jeg har samlet musklerne i ryggen på en liste med lidt flere informationer herunder.

## Liste over muskler i ryggen

{% assign muscles = site.anatomy | where: "group", "Ryg" %}
{%- for m in muscles -%}
- [{{ m.title }} - {{ m.name.latin }}]({{ m.url }})
{% endfor %}

Jeg har lavet en samlet [liste over muskler i kroppen her](/muskler/), hvis du er interesseret i at lære endnu mere om [anatomien i kroppen](/anatomi/).

## Vigtige øvelser til træning af rygmuskler

{% include exercise key="15" title="Dødløft" %}

{% include exercise key="43" title="Pullup" %}

{% include exercise key="261" title="Bent over rows" %}

## Konklusion

Det er vigtigt at træne rygmusklerne. Jeg har samlet flere forslag til din [rygtræning og øvelser til træning af ryggen]({% link _pages/exercises-tag-ryg.md %}).
