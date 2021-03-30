---
title: &title "Armmuskler: Liste og øvelser til muskler i arme"
seo_title: "Armmuskler • Liste og øvelser til muskler i arme »"
description: "Komplet liste over muskler i dine arme. Forslag til træning af armmusklerne."
permalink: /muskler/ben/
language: da
header:
  overlay_image: https://images.unsplash.com/photo-1598268030450-7a476f602bf6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1902&q=80
  teaser: https://images.unsplash.com/photo-1598268030450-7a476f602bf6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80
  caption: *title
category:
  - Anatomi
tags:
  - muskler
last_modified_at: 2021-01-28T23:14:14Z
toc: true
author: lsolesen
---

Jeg har samlet en liste over muskler i dine arme her. Det er godt at vide, hvordan dine armmuskler virker, hvis du gerne vil træne musklerne i armene.

{% include figure image_path=page.header.teaser caption="Biceps curls er en meget brugt øvelse til at træne musklerne i armene. Hvis du gerne vil have store armmuskler skal du både træne armbøjerne og armstrækkerne, bl.a. triceps." alt="muskler i arme trænes med biceps curls og triceps" %}

## Hvorfor træne musklerne i dine arme?

Rigtig mange vil gerne have større muskler i deres arme. Der er mange måder at træne musklerne i armene på, og hvis du træner armene med en god balance, så kan du undgå skader i albuerne, håndleddene og skuldrene. 

## Hvilke muskler har du i dit arme?

Jeg har samlet musklerne i armene på en liste med lidt flere informationer herunder.

## Liste over muskler i dine arme

{% assign muscles = site.anatomy | where: "group", "Arme" %}
{%- for m in muscles -%}
- [{{ m.title }} - {{ m.name.latin }}]({{ m.url }})
{% endfor %}

Jeg har lavet en samlet [liste over muskler i kroppen her](/muskler/), hvis du er interesseret i at lære endnu mere om [anatomien i kroppen](/anatomi/).

## Vigtige øvelser til træning af armmuskler

{% include exercise key="170" title="Armstrækning" %}

{% include exercise key="279" title="Biceps curl" %}

{% include exercise key="19" title="Chinup" %}

## Konklusion

Det er vigtigt at træne musklerne i armene. Jeg har samlet flere forslag til din [armtræning og øvelser til træning af armene]({% link _pages/exercises-tag-arme.md %}).
