---
title: &title "Mavemuskler: Liste og øvelser til muskler i mave"
seo_title: "Mavemuskler: Læs alt om mavemuskler her"
description: "Komplet liste over muskler i din mave. Du kan læse om mavemusklerne og deres funktion - og du får gode råd til, hvordan du træner dine mavemuskler fuldstændigt."
permalink: /muskler/mave/
redirect_from:
  - /mavemuskler/
language: da
header:
  overlay_image: https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80
  teaser: https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80
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

Jeg har samlet en liste over muskler i dine mave her. Det er godt at vide, hvordan dine mavemuskler virker, hvis du gerne vil træne musklerne i maven.

{% comment %}
{% include figure image_path=page.header.teaser caption="Biceps curls er en meget brugt øvelse til at træne musklerne i armene. Hvis du gerne vil have store armmuskler skal du både træne armbøjerne og armstrækkerne, bl.a. triceps." alt="muskler i arme trænes med biceps curls og triceps" %}

## Hvorfor træne musklerne i dine arme?

Rigtig mange vil gerne have større muskler i deres arme. Der er mange måder at træne musklerne i armene på, og hvis du træner armene med en god balance, så kan du undgå skader i albuerne, håndleddene og skuldrene.

## Hvilke muskler har du i dit arme?

Jeg har samlet musklerne i armene på en liste med lidt flere informationer herunder.

{% endcomment %}

## Liste over muskler i din mave

{% assign muscles = site.anatomy | where: "group", "Mave" %}
{%- for m in muscles -%}
- [{{ m.title }} - {{ m.name.latin }}]({{ m.url }})
{% endfor %}

Jeg har lavet en samlet [liste over muskler i kroppen her](/muskler/), hvis du er interesseret i at lære endnu mere om [anatomien i kroppen](/anatomi/).

{% comment %}

## Vigtige øvelser til træning af armmuskler

{% include exercise key="170" title="Armstrækning" %}

{% include exercise key="279" title="Biceps curl" %}

{% include exercise key="19" title="Chinup" %}

{% endcomment %}

## Konklusion

Det er vigtigt at træne musklerne i maven. Jeg har samlet flere forslag til din [mavetræning og effektive maveøvelser her]({% link _pages/exercises-tag-abs.md %}).
