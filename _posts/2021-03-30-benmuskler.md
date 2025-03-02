---
title: &title "Benmuskler: Liste og øvelser til muskler i benet"
seo_title: "Benmuskler: Liste og øvelser til muskler i benet"
description: "Komplet liste over muskler i benet. Forslag til træning af benmusklerne."
permalink: /muskler/ben/
redirect_from:
  - /benmuskler/
language: da
header:
  overlay_image: https://images.unsplash.com/photo-1434608519344-49d77a699e1d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&h=630&w=1200&q=60
  teaser: https://images.unsplash.com/photo-1434608519344-49d77a699e1d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&h=300&w=400&q=10
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

Jeg har samlet en liste over muskler i dine ben her. Det er godt at vide, hvordan dine benmuskler virker, hvis du gerne vil træne musklerne i benet.

{% include figure image_path=page.header.teaser caption="Benpres er en meget brugt øvelse til at træne musklerne i benet. Jeg anbefaler her også andre øvelser for benmusklerne." alt="muskler i benet trænes med benpres" %}

## Hvorfor træne musklerne i benet?

Du bruger dine ben hele tiden. Benene skal bære hele vægten for din krop. Derfor kan det også betale sig at styrke musklerne - både for at [forebygge skader]({% link _posts/2020-11-23-skadesforebyggelse.md %}), men også for at få bedre præstationer.

Hvis musklerne omkring knæet - på både forsiden og bagsiden - er stærke, så vil det fjerne lidt af belastningen på [knæleddet](/joints/knaeleddet/), når du står, går og løber. Det kan hjælpe dig med at have et sundt knæled over mange år.

Når musklerne i benene er stærke, så vil du også præstere bedre, når du springer, løber og sprinter.

## Hvilke muskler har du i dit ben?

Når du træner ben, så er de store muskler den firehovede knæstrækker (quadriceps), sædemusklerne (gluteus maximus og til dels medius), indadførene (adductor magnus, longus og brevis), hasemusklerne (semimembranosus, semitendinosus og biceps femoris), og lægmusklerne (gastrocnemius og soleus).

Jeg har samlet musklerne i benet på en liste med lidt flere informationer herunder.

## Liste over muskler i benet

{% assign muscles = site.anatomy | where: "group", "Ben" %}
{%- for m in muscles -%}
- [{{ m.title }} - {{ m.name.latin }}]({{ m.url }})
{% endfor %}

Jeg har lavet en samlet [liste over muskler i kroppen her](/muskler/), hvis du er interesseret i at lære endnu mere om [anatomien i kroppen](/anatomi/).

## Vigtige øvelser til træning af benmuskler

{% include motionsplan/exercise key="15" title="Squat" %}

{% include motionsplan/exercise key="43" title="Romanian Deadlift" %}

{% include motionsplan/exercise key="261" title="Glute Ham Raise" %}

{% include motionsplan/exercise key="267" title="Træning af læg" %}

## Konklusion

Det er vigtigt at træne musklerne i benet. Jeg har samlet flere forslag til din [bentræning og øvelser til træning af benene](/benoevelser/).
