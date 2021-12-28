---
layout: single
permalink: /benoevelser/
redirect_from:
  - /effektive-benovelser-til-bentraening/
header:
  overlay_image: https://images.unsplash.com/photo-1434682772747-f16d3ea162c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=5
  teaser: https://images.unsplash.com/photo-1434682772747-f16d3ea162c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=5
  caption: "Benøvelser: De mest effektive styrketræningsøvelser til bentræningen"
title: "Benøvelser: De mest effektive styrketræningsøvelser til bentræningen 🏋"
seo_title: "Benøvelser: Effektive øvelser til bentræning 🏋"
author_profile: true
classes: wide
excerpt: "Bentræning kan foregå på virkelig mange forskellige og effektive måder. Vi har samlet et hav af benøvelser, som du kan bruge i din styrketræning af benene. Bentræning er både for dig, der gerne vil blive mere eksplosiv og dig der vil have større og stærkere ben."
categories:
  - Træningsøvelser
breadcrumbs: true
sidebar:
  nav: exercises
exercises:
  - key: 20201212201800
    title: "Zercher Squat"
  - key: 20201212203300
    title: "Hack Squat"
  - key: 20201212203500
    title: "Jefferson Deadlift"
  - key: 20201212203700
    title: "Sissy Squat"
  - key: 20201212203800
    title: "Kneeling Squat"
  - key: 20201212231800
    title: "Frankenstein Squat"
  - key: 20201212231900
    title: "Cronus Squat"
faq:
  - question: "Hvilke benøvelser giver den bedste bentræning?"
    answer: "Du kan lave bentræning med mange forskellige øvelser. Men husk at inkludere squat, lunges, dødløft, bulgarian split squat og glute ham raises. Så får du en allround bentræning. Du kan læse om alle de store benøvelser her på siden."
  - question: "Kan man lave bentræning med dårligt knæ?"
    answer: "Ja. Hvis du har dårligt knæ, så skal du bare sørge for at vælge de rigtige varianter. Det kan være, at du skal gå efter nogle lidt mere isolerede øvelser eller forbedre din teknik i de store basisøvelser. Med skader i knæet, så er det vigtigt, at du tænker over den rette dosering og at optimere dit bevægelsesmønster. Det hjælper ikke noget at lade være med at træne knæet. Der er masser af forslag til gode benøvelser for knæene her på siden."
---

Bentræning kan foregå på virkelig mange forskellige og effektive måder. Vi har samlet et hav af benøvelser, som du kan bruge i din styrketræning af benene. Bentræning er både for dig, der gerne vil blive mere eksplosiv og dig der vil have større og stærkere ben.

Bentræning kan foregå både med frie vægte og lave squat og lunges og i benmaskine som benpres og leg extensions. Du kan bruge vægtstang, håndvægte, kettlebells og [Safety Bar Squats]({% link _posts/2020-07-05-safetybar-squat.md %}).

Vi har samlet en række simple og effektive benøvelser, som du kan bruge til at styrke benmusklerne, din hofte og dine knæ.

## Funktionel opdeling af benøvelserne

Typisk opdeler man øvelserne til underkoppen i enten [knædominante øvelser]({% link _pages/exercises-tag-knee-dominant.md %}) eller [hoftedominante øvelser]({% link _pages/exercises-tag-hip-dominant.md %}). Det kan illustreres meget godt på dette kontinuum, hvornår en øvelse kan siges at tilhøre den ene eller anden kategori.

{% include figure image_path="https://crossfys.dk/wp-content/uploads/2021/11/www.Crossfys.dk_-1024x1024.png" caption="Om en øvelse er hoftedominant eller knædominant er et kontinuum. Kilde: [crossfys.dk](https://crossfys.dk/saadan-dyrker-du-crossfit-og-faar-staerkere-ben-trods-knae-smerter/)" %}

## Artikler om træning af bentræning

<div class="feature__wrapper">

{% assign site_posts = site.posts | where: "tags", "bentræning" | sort: "title" %}

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Benøvelser: Øvelser til bentræning

{% assign site_posts = site.exercises | where: "tags", "Ben" | where_exp: "post", "post.url != page.url" | sort: "title" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Spændende variationer af knædominerede øvelser

Her kigger vi på effektive benøvelser, som du ikke ser så ofte i fitnesscentrene. Benøvelserne er uhyre effektive til at supplere din bentræning. Du kan lade dig inspirere til at træne underkroppen på en lidt ny måde.

Der er naturligvis ikke noget i vejen med de klassiske øvelser til bentræningen, men det er også godt at få variation i træningen, så du bliver bedre til at bevæge dig. Derfor kan du bruge disse benøvelser, fx som suppleringssæt eller når du ikke lige har adgang til det udstyr, du plejer at have adgang til.

Øvelserne kan også være inspiration til dig, der gerne vil prøve noget nyt, og som måske er gået i stå med din nuværende benntræning og underkropstræning.

## Øvelser til bentræning og underkropstræning

{% include exercises-list %}

## Ofte stillede spørgsmål om benøvelser

{% include faq.html %}

## Konklusion om bentræning

Vi har også skrevet om [ankelleddet og musklerne i anklen]({% link _pages/anatomy/ankelleddet-og-fodleddet.md %}), [knæleddet og musklerne omkring knæet]({% link _pages/anatomy/knaeleddet.md %}) og [hofteleddet og musklerne omkring hofteleddet]({% link _pages/anatomy/hofteleddet.md %}), som du træner med med benøvelser.
