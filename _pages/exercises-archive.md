---
layout: single
permalink: /traeningsoevelser/
redirect_from:
  - /exercise-search/
title: &title "Træningsøvelser: De bedste øvelser til træning 🏋"
seo_title: "Træningsøvelser – styrke, udstrækning, yoga og balance"
excerpt: "Vi har samlet de bedste træningsøvelser. Vi har lavet en grundig forklaring af alle øvelserne, og der er både øvelser til styrketræning, konditionstræning, yoga, udstrækning, mobilitet og cardio."
description: "Find træningsøvelser til styrke, udstrækning, yoga og balance. Få inspiration til øvelser, der forbedrer din mobilitet, stabilitet og styrke."
comments: false
author_profile: true
gallery:
  - image_path: https://i.pinimg.com/564x/3f/17/84/3f17845a79b4552c5fbbcbd584d1c36a.jpg
    url: https://i.pinimg.com/564x/3f/17/84/3f17845a79b4552c5fbbcbd584d1c36a.jpg
    alt: *title
    title: *title
    data_pin_id: 579768152024756849
sidebar:
  nav: exercises
toc: true
category:
  - Træning
breadcrumbs: true
classes:
  - wide
---

Vi har samlet de bedste træningsøvelser, udstrækningsøvelser og styrketræningsøvelser. Vi har lavet en grundig forklaring af alle øvelserne, og der er både øvelser til styrketræning, konditionstræning, yoga, udstrækning, mobilitet og cardio.

Hvis du er på udkig efter [maveøvelser](/maveoevelser/), [armøvelser](/arme-triceps-biceps/), [benøvelser](/benoevelser/), [brystøvelser](/brystoevelser/), [balleøvelser](/balleoevelser/), [rygøvelser](/rygoevelser/), [skulderøvelser](/skulderoevelser/), så har vi lavet en selvstændig side om de muskelgrupper. Vi har også skrevet selvstændigt om [balanceøvelser](/balance/), [coretræning](/core/) eller [udstrækningsøvelser](/udstraekning-udspaending/).

**Hvis ud gerne vil hjælpe med at forbedre beskrivelserne, eller der mangler den helt perfekte øvelse, så skriv endelig.**

## Forskellige træningsformer

{% assign site_posts = site.posts | where: "category", "Træning" | where: "tags", "moc" | where_exp: "post", "post.url != page.url" | sort: "last_modfied_at" | reverse %}

<div class="feature__wrapper" markdown="1">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Se alle træningsformer](/traeningsformer/){: .btn .btn--success .btn--center }

</div>


## Seneste opdaterede øvelser

Her kan du se de nyeste træningsøvelser.

<div class="feature__wrapper">

{% assign site_posts = site.exercises | where: "tags", "featured" | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 8 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Maveøvelser, mavetræning og coretræning

Vi har en lang række maveøvelser, som kan hjælpe dig med at få en stærkere og mere udholdende _core_ og kropsstamme. Maveøvelserne kan enten udføres med kropsvægt, håndvægte, elastikker, bolde og hjul. Du kan også læse meget mere om [kropsstammetræning og coretræning i dette indlæg](/core/) og udfordringerne med [fedttab på maven]({% link _posts/2020-07-07-mavefedt.md %}).

[Se alle maveøvelser](/maveoevelser/).

## Armøvelser

Vi har samlet det bedste og mest effektive armøvelser til træning af biceps og triceps, men også øvelser der udfordrer underarmene.

Læs mere om [armøvelser til triceps, biceps og underarmene her](/arme-triceps-biceps/).

## Benøvelser

Bentræning kan foregå med virkelig mange forskellige øvelser. Bentræning kan foregå både med frie vægte og lave [squat](/squat/) og [lunges](/lunges/) og i benmaskine som benpres og leg extensions. Du kan finde øvelser med vægtstang, håndvægte, kettlebells og [Safety Squat Bar]({% link _posts/2020-07-05-safetybar-squat.md %}). [Dødløft](/doedloeft/) er også en af de gode benøvelser.

[Tjek alle benøvelser](/benoevelser/).

## Brystøvelser

Vi har samlet en masse effektive styrketræningsøvelser til brystet både med vægtstang, håndvægte, kabel og elastik, så du kan varirere, hvordan du rammer brystmusklen på den bedst mulige måde.

[Se alle brystøvelser](/brystoevelser/).

## Balleøvelser

Dine baller bliver trænet i mange forskellige bevægelser. Vi har samlet alle de bedste og mest effektive baldeøvelser her, som du kan lave både hjemme og i styrketræningscenteret.

[Se alle balleøvelser](/balleoevelser/).

## Rygøvelser

Din ryg skal bruges og udfordres med de bedste og mest effektive øvelser i din rygtræning. Jeg synes de bedste rygøvelser er basisøvelser, hvor du kan løfte meget vægt i horisontale træk (som [rows](/rows/)) og vertikale træk (som [chinup og pullup](/chinup-vs-pullup/)), men husk også at de mange variationer af dødløft er fremragende til at træne ryggen.

[Se alle rygøvelser](/rygoevelser/).

## Skulderøvelser

Skuldertræning skal tage højde for et kompliceret led, og du kan vælge forskellige øvelser til at træne din skulder. Skulderøvelser handler naturligvis om [armstrækninger](/armbojninger-eller-armstraekninger-pushups/), [rows](/rows/) og [pullups og chinups](/chinup-vs-pullup/), men der er også andre øvelser, der udfordrer skulderbladet og for- og bagskulder på forskellige måder.

Jeg har skrevet lidt om skulderøvelser og [træning af bagskulderen og rotatormanchetten]({% link _posts/2020-12-12-styrk-dine-skuldre.md %}), og du kan også læse mere om [anatomiske opbygning af skulderleddet]({% link _pages/anatomy/skulderleddet.md %}).

[Se alle skulderøvelser](/skulderoevelser/).

## Balanceøvelser

Balancetræning bør være en del af din træning, da træning af balance forebygger skader. Vi har kigget på, hvad balance er, og hvordan du træner din balance mest effektivt med balanceøvelser?

[Læs mere om balance og balanceøvelser](/balance/).

## Strækøvelser og smidighedsøvelser

Udstrækning og udspænding bliver brugt i rigtig mange idrætsgrene. Udstrækningsøvelser bliver ofte brugt for at blive smidigere, så de kaldes også ofte smidighedsøvelser eller strækøvelser.

[Læs mere om strækøvelser og smidighedstræning](/udstraekning-udspaending/)

## Foamrolling og lacrossbolde

Foamrolling med en foam roller har til formål at løsne spændte og ømme muskler. Du kan også bruge en lacrossebold til at løsne trigger points. Når du afspænder musklerne ved at bearbejde dine trigger points, så kan du ofte opleve at bevæge dig mere frigjort.

[Læs mere om foamrolling og self-myofacial release](/foamrolling-foamroller-lacrossebolde/).

## Artikler om træningsøvelser

<div class="feature__wrapper">

{% assign site_posts = site.posts | where: "tags", "træningsøvelse" | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Alle {{ site.exercises.size }} træningsøvelser til træning

Vi har i alt samlet {{ site.exercises.size }} træningsøvelser, som du kan bruge i din træning.

<div class="feature__wrapper">

{% assign site_posts = site.exercises | sort: "title" %}

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>
