---
title: &title "Rygmuskler: Liste og øvelser til muskler i ryggen"
seo_title: "Rygmuskler: Sådan træner du dine muskler i ryggen"
description: "Komplet liste over muskler i ryggen. Forslag til træning af rygmusklerne."
permalink: /muskler/ryggen/
redirect_from:
  - /rygmuskler/
  - /muskler/ryg/
language: da
header:
  overlay_image: https://images.unsplash.com/photo-1600677396360-9c4e8e46e7d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&h=630&w=1200&q=60
  teaser: https://images.unsplash.com/photo-1600677396360-9c4e8e46e7d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&h=300&w=400&q=10
  caption: *title
category:
  - Anatomi
tags:
  - muskler
  - anatomi
last_modified_at: 2021-01-28T23:14:14Z
toc: true
author: lsolesen
sidebar:
  nav: muscles
breadcrumbs: true
---

Jeg har samlet en liste over muskler i din ryg her. Det er godt at vide, hvordan dine rygmuskler virker, hvis du gerne vil træne musklerne i ryggen.

{% include figure image_path=page.header.teaser caption="Du ser sjældent dine rygmuskler, men de er vigtige for at have en god og ret holdning" alt="rygmuskler og muskler i ryggen" %}

[Pullup og chinups](/chinup-vs-pullup/) er rigtig gode øvelser til ryggen, ligesom du ikke kan undvære de mange [rows og row-variationer](/rows/).

Jeg har lavet en liste over [gode øvelser til ryggen](/rygoevelser/).

{% comment %}

## Hvorfor træne musklerne i ryggen?

Du bruger dine ben hele tiden. Benene skal bære hele vægten for din krop. Derfor kan det også betale sig at styrke musklerne - både for at [forebygge skader]({% link _posts/2020-11-23-skadesforebyggelse.md %}), men også for at få bedre præstationer.

Hvis musklerne omkring knæet - på både forsiden og bagsiden - er stærke, så vil det fjerne lidt af belastningen på knæleddet, når du står, går og løber. Det kan hjælpe dig med at have et sundt knæled over mange år.

Når musklerne i benene er stærke, så vil du også præstere bedre, når du springer, løber og sprinter.

## Hvilke muskler har du i dit ryg?

Når du træner ben, så er de store muskler den firehovede knæstrækker (quadriceps), sædemusklerne (gluteus maximus og til dels medius), indadførene (adductor magnus, longus og brevis), hasemusklerne (semimembranosus, semitendinosus og biceps femoris), og lægmusklerne (gastrocnemius og soleus).

***

RYGGENS OPBYGNING
Ryggens muskler kan deles op i to muskelgrupper:

De overfladiske rygmuskler
De dybe rygmuskler
De overfladiske rygmuskler er de store rygmuskler som har funktion på skulder og skulderbæltet (kraveben og skulderblad) og er de muskler du kan se på en veltrænet ryg. De overfladiske rygmuskler består af nakkemusklen, den brede rygmuskel og skulderbladetsmuskler.

Ryggens anatomi

De dybe rygmuskler er muskler som ligger dybere og er dermed ikke er visuel, men som har vigtig funktion på rygsøjlen og ribbene.

I dette indlæg vil vi koncentrere os om de overfladiske rygmuskler, som du direkte kan træne i træk bevægelser og som primært medvirker til en stærk og veltrænet ryg.

{% endcomment %}

Jeg har samlet musklerne i ryggen på en liste med lidt flere informationer herunder.

## Liste over muskler i ryggen

{% assign muscles = site.anatomy | where: "group", "Ryg" %}
{%- for m in muscles -%}
- [{{ m.name.da | default: m.title }} - {{ m.name.latin }}]({{ m.url }})
{% endfor %}

Jeg har lavet en samlet [liste over muskler i kroppen her](/muskler/), hvis du er interesseret i at lære endnu mere om [anatomien i kroppen](/anatomi/).

## Vigtige øvelser til træning af rygmuskler

{% include motionsplan/exercise key="15" title="Dødløft" %}

{% include motionsplan/exercise key="43" title="Pullup" %}

{% include motionsplan/exercise key="261" title="Bent over rows" %}

## Konklusion

Det er vigtigt at træne rygmusklerne. Jeg har samlet flere forslag til din [rygtræning og øvelser til træning af ryggen](/rygoevelser/).
