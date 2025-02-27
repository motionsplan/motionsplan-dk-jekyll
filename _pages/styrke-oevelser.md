---
layout: single
permalink: /styrketraeningsoevelser/
title: &title "Styrketræningsøvelser til hele kroppen"
seo_title: "Styrketræningsøvelser – guide til de bedste øvelser"
excerpt: "Vi har samlet de bedste styrketræningsøvelser. Vi har lavet en grundig forklaring af alle øvelserne. Find øvelserne og få forslag til, hvordan du kan bruge dem i træningen?"
description: "Find de bedste styrketræningsøvelser til hele kroppen. Lær korrekt teknik og få inspiration til øvelser, der øger din styrke og muskelmasse."
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
classes: wide
category:
  - Styrketræning
breadcrumbs: true
feature_row_okklusion:
  - image_path: /assets/images/occlude/occlusion-training-768.jpg
    alt: "Okklusionstræning"
    title: "Okklusionstræning"
    excerpt: "Hvis du er blevet skadet og gerne vil sørge for at bibeholde din muskelmasse, så kan du overveje okklusionstræning. Læs lidt mere om det her og spørg din fysioterapeut om gode råd."
    url: "/introduktion-okklusionstraening/"
    btn_label: "Læs mere om okklusionstræning"
    btn_class: "btn--info"
---

Vi har samlet de bedste træningsøvelser, udstrækningsøvelser og styrketræningsøvelser. Vi har lavet en grundig forklaring af alle øvelserne, og der er både øvelser til styrketræning, konditionstræning, yoga, udstrækning, mobilitet og cardio.

Hvis du er på udkig efter [maveøvelser](/maveoevelser/), [armøvelser](/arme-triceps-biceps/), [benøvelser](/benoevelser/), [brystøvelser](/brystoevelser/), [balleøvelser](/balleoevelser/), [rygøvelser](/rygoevelser/), [skulderøvelser](/skulderoevelser/), så har vi lavet en selvstændig side om de muskelgrupper. Vi har også skrevet selvstændigt om [balanceøvelser](/balance/), [coretræning](/core/) eller [udstrækningsøvelser](/udstraekning-udspaending/).

**Hvis ud gerne vil hjælpe med at forbedre beskrivelserne, eller der mangler den helt perfekte øvelse, så skriv endelig.**

## Guides til øvelser

<div class="feature__wrapper">

{% assign site_posts = site.posts | where: "tags", "træningsøvelse" | where: "tags", "styrketræning" | where: "tags", "guide" | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## De vigtigste styrketræningsøvelser

<div class="feature__wrapper" markdown="1">

{% assign site_posts = site.exercises | where: "tags", "featured" | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 8 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Udvalgte øvelser til fitnessinstruktør](/fitnessinstruktoer/oevelser/){: .btn .btn--success .btn--center }

</div>

## Seneste styrkeøvelser

Her kan du se de nyeste træningsøvelser.

<div class="feature__wrapper">

{% assign site_posts = site.exercises | where: "tags", "featured" | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 8 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Øvelser efter muskelgrupper

### Maveøvelser, mavetræning og coretræning

Vi har en lang række maveøvelser, som kan hjælpe dig med at få en stærkere og mere udholdende _core_ og kropsstamme. Maveøvelserne kan enten udføres med kropsvægt, håndvægte, elastikker, bolde og hjul. Du kan også læse meget mere om [kropsstammetræning og coretræning i dette indlæg](/core/) og udfordringerne med [fedttab på maven]({% link _posts/2020-07-07-mavefedt.md %}).

<div class="feature__wrapper" markdown="1">

{% assign site_posts = site.exercises | where: "tags", "Mave" | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Se alle maveøvelser](/maveoevelser/){: .btn .btn--success .btn--center }

</div>

### Armøvelser

Vi har samlet det bedste og mest effektive armøvelser til træning af biceps og triceps, men også øvelser der udfordrer underarmene.

<div class="feature__wrapper">

{% assign site_posts = site.exercises | where: "tags", "Arme" | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Se alle armøvelser til triceps, biceps og underarmene](/arme-triceps-biceps/){: .btn .btn--success .btn--center }

</div>

### Benøvelser

Bentræning kan foregå med virkelig mange forskellige øvelser. Bentræning kan foregå både med frie vægte og lave [squat](/squat/) og [lunges](/lunges/) og i benmaskine som benpres og leg extensions. Du kan finde øvelser med vægtstang, håndvægte, kettlebells og [Safety Squat Bar]({% link _posts/2020-07-05-safetybar-squat.md %}). [Dødløft](/doedloeft/) er også en af de gode benøvelser.

<div class="feature__wrapper">

{% assign site_posts = site.exercises | where: "tags", "Ben" | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Tjek alle benøvelser](/benoevelser/){: .btn .btn--success .btn--center }

</div>

### Brystøvelser

Vi har samlet en masse effektive styrketræningsøvelser til brystet både med vægtstang, håndvægte, kabel og elastik, så du kan varirere, hvordan du rammer brystmusklen på den bedst mulige måde.

<div class="feature__wrapper">

{% assign site_posts = site.exercises | where: "tags", "Bryst" | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Se alle brystøvelser](/brystoevelser/){: .btn .btn--success .btn--center }

</div>

### Balleøvelser

Dine baller bliver trænet i mange forskellige bevægelser. Vi har samlet alle de bedste og mest effektive baldeøvelser her, som du kan lave både hjemme og i styrketræningscenteret.

<div class="feature__wrapper">

{% assign site_posts = site.exercises | where: "tags", "Baller" | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Se alle balleøvelser](/balleoevelser/){: .btn .btn--success .btn--center }

</div>

### Rygøvelser

Din ryg skal bruges og udfordres med de bedste og mest effektive øvelser i din rygtræning. Jeg synes de bedste rygøvelser er basisøvelser, hvor du kan løfte meget vægt i horisontale træk (som [rows](/rows/)) og vertikale træk (som [chinup og pullup](/chinup-vs-pullup/)), men husk også at de mange variationer af dødløft er fremragende til at træne ryggen.

<div class="feature__wrapper">

{% assign site_posts = site.exercises | where: "tags", "Ryg" | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Se alle rygøvelser](/rygoevelser/){: .btn .btn--success .btn--center }

</div>

### Skulderøvelser

Skuldertræning skal tage højde for et kompliceret led, og du kan vælge forskellige øvelser til at træne din skulder. Skulderøvelser handler naturligvis om [armstrækninger](/armbojninger-eller-armstraekninger-pushups/), [rows](/rows/) og [pullups og chinups](/chinup-vs-pullup/), men der er også andre øvelser, der udfordrer skulderbladet og for- og bagskulder på forskellige måder.

Jeg har skrevet lidt om skulderøvelser og [træning af bagskulderen og rotatormanchetten]({% link _posts/2020-12-12-styrk-dine-skuldre.md %}), og du kan også læse mere om [anatomiske opbygning af skulderleddet]({% link _pages/anatomy/skulderleddet.md %}).

<div class="feature__wrapper">

{% assign site_posts = site.exercises | where: "tags", "Skulder" | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Se alle skulderøvelser](/skulderoevelser/){: .btn .btn--success .btn--center }

</div>

## Styrkeøvelser efter funktion

### Knædominante øvelser

<div class="feature__wrapper">

{% assign site_posts = site.exercises | where: "tags", "Ben" | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Se alle knædominante øvelser](/knaedominante-oevelser/){: .btn .btn--success .btn--center }

</div>

### Hoftedominante øvelser

<div class="feature__wrapper">

{% assign site_posts = site.exercises | where: "tags", "Hofte" | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Se alle hoftedominante øvelser](/hoftedominante-oevelser/){: .btn .btn--success .btn--center }

</div>

### Presøvelser

<div class="feature__wrapper">

{% assign site_posts = site.exercises | where: "tags", "Pres" | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Se alle presøvelser](/presoevelser/){: .btn .btn--success .btn--center }

</div>

### Presøvelser

<div class="feature__wrapper">

{% assign site_posts = site.exercises | where: "tags", "Træk" | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Se alle trækøvelser](/traekoevelser/){: .btn .btn--success .btn--center }

</div>

### Presøvelser

<div class="feature__wrapper">

{% assign site_posts = site.exercises | where: "tags", "Core" | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Se alle core-øvelser](/core/){: .btn .btn--success .btn--center }

</div>

### Loaded carries

<div class="feature__wrapper">

{% assign site_posts = site.exercises | where: "tags", "Core" | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Se alle 'loaded carries'](/loaded-carries/){: .btn .btn--success .btn--center }

</div>

## Træningsformer

Tjek også disse forskellige træningsformer:

{% assign site_posts = site.posts | where: "category", "Træning" | where: "tags", "moc" | where_exp: "post", "post.url != page.url" | sort: "last_modfied_at" | reverse %}

<div class="feature__wrapper" markdown="1">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Se alle træningsformer](/traeningsformer/){: .btn .btn--success .btn--center }

</div>

### Balanceøvelser

Balancetræning bør være en del af din træning, da træning af balance forebygger skader. Vi har kigget på, hvad balance er, og hvordan du træner din balance mest effektivt med balanceøvelser?

[Læs mere om balance og balanceøvelser](/balance/).

### Strækøvelser og smidighedsøvelser

Udstrækning og udspænding bliver brugt i rigtig mange idrætsgrene. Udstrækningsøvelser bliver ofte brugt for at blive smidigere, så de kaldes også ofte smidighedsøvelser eller strækøvelser.

[Læs mere om strækøvelser og smidighedstræning](/udstraekning-udspaending/)

### Foamrolling og lacrossbolde

Foamrolling med en foam roller har til formål at løsne spændte og ømme muskler. Du kan også bruge en lacrossebold til at løsne trigger points. Når du afspænder musklerne ved at bearbejde dine trigger points, så kan du ofte opleve at bevæge dig mere frigjort.

[Læs mere om foamrolling og self-myofacial release](/foamrolling-foamroller-lacrossebolde/).

## Artikler om øvelser til styrketræning

<div class="feature__wrapper">

{% assign site_posts = site.posts | where: "tags", "træningsøvelse" | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Alle {{ site.exercises.size }} styrketræningsøvelser

Vi har i alt samlet {{ site.exercises.size }} styrketræningsøvelser, som du kan bruge i din træning.

<div class="feature__wrapper">

{% assign site_posts = site.exercises | where: "tags", "styrketræning" | sort: "title" %}

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>
