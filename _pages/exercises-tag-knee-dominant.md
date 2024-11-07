---
layout: single
permalink: /knaedominante-oevelser/
header:
  overlay_image: https://images.unsplash.com/photo-1571019613914-85f342c6a11e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&h=630&w=1200&q=10
  teaser: https://images.unsplash.com/photo-1571019613914-85f342c6a11e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&h=300&w=400&q=10
  caption: "Knædominerede øvelser: De mest effektive styrketræningsøvelser til forlåret"
title: "Knædominante øvelser: Træning af dine forlår"
seo_title: "Knædominante øvelser: Træn dine forlår"
author_profile: true
classes: wide
excerpt: "Bentræning kan foregå på virkelig mange forskellige og effektive måder. Vi har samlet et hav af knædominante øvelser, som du kan bruge i din styrketræning af dine forlår. Bentræning er både for dig, der gerne vil blive mere eksplosiv og dig der vil have større og stærkere ben."
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

Bentræning kan foregå på virkelig mange forskellige og effektive måder. Vi har samlet et hav af knædominante øvelser, som du kan bruge i din styrketræning af benene. De knædominante øvelser træner særligt forsiden af benene.

Bentræning kan foregå både med frie vægte og lave squat og lunges og i benmaskine som benpres og leg extensions. Du kan bruge vægtstang, håndvægte, kettlebells og [Safety Bar Squats]({% link _posts/2020-07-05-safetybar-squat.md %}).

Når man træner underkoppen, så opererer man med et kontinuum for, hvornår en øvelse karakteriseres som hoftedomineret frem for knædomineret.

{% include figure image_path="https://crossfys.dk/wp-content/uploads/2021/11/www.Crossfys.dk_-1024x1024.png" caption="Om en øvelse er hoftedominant eller knædominant er et kontinuum. Kilde: [crossfys.dk](https://crossfys.dk/saadan-dyrker-du-crossfit-og-faar-staerkere-ben-trods-knae-smerter/)" %}

Det betyder også, at der er mere eller mindre aktivering af musklerne i de forskellige variationer.

Vi har lavet en anden oversigt med en [oversigt over alle benøvelser](/benoevelser/).

## Knædominerede øvelser

Vi har samlet en række simple og effektive knædominerede øvelser, som du kan bruge til at styrke benmusklerne, din hofte og dine knæ.

{% assign site_posts = site.exercises | where: "tags", "Ben" | where_exp: "post", "post.url != page.url" | sort: "title" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Spændende variationer af knædominante øvelser

Her kigger vi på effektive benøvelser, som du ikke ser så ofte i fitnesscentrene. Benøvelserne er uhyre effektive til at supplere din bentræning. Du kan lade dig inspirere til at træne underkroppen på en lidt ny måde.

Der er naturligvis ikke noget i vejen med de klassiske øvelser til bentræningen, men det er også godt at få variation i træningen, så du bliver bedre til at bevæge dig. Derfor kan du bruge disse benøvelser, fx som suppleringssæt eller når du ikke lige har adgang til det udstyr, du plejer at have adgang til.

Øvelserne kan også være inspiration til dig, der gerne vil prøve noget nyt, og som måske er gået i stå med din nuværende benntræning og underkropstræning.

## Øvelser til bentræning og underkropstræning

{% include motionsplan/exercises-list %}

## Ofte stillede spørgsmål om benøvelser

{% include faq.html %}

## Konklusion om knædominante øvelser

Vi har også skrevet om [ankelleddet og musklerne i anklen]({% link _pages/anatomy/ankelleddet-og-fodleddet.md %}), [knæleddet og musklerne omkring knæet]({% link _pages/anatomy/knaeleddet.md %}) og [hofteleddet og musklerne omkring hofteleddet]({% link _pages/anatomy/hofteleddet.md %}), som du træner med med benøvelser.
