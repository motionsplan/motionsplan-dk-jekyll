---
layout: single
title: "Træningsformer"
permalink: /traeningsformer/
excerpt: "Vi præsenterer viden om en lang række forskellige træningsformer. Du kan lade dig inspirere af alle de forskellige måder at træne på."
header:
  overlay_image: https://images.unsplash.com/photo-1540474238286-8fd6702d30d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80
  teaser: https://images.unsplash.com/photo-1540474238286-8fd6702d30d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80
  caption: Træningsformer
  actions:
    - label: "<i class='fas fa-download'></i> Styrketræning"
      url: "/styrke/"
    - label: "<i class='fas fa-download'></i> Løb"
      url: "/loebesiden/"
    - label: "<i class='fas fa-download'></i> Konditionstræning"
      url: "/kondition/"
    - label: "<i class='fas fa-download'></i> Træningsøvelser"
      url: "/traeningsoevelser/"
    - label: "<i class='fas fa-download'></i> Træningsprogrammer"
      url: "/traeningsprogrammer/"
author_profile: true
author: lsolesen
toc: true
---

{{ page.excerpt }}

Du kan også læse mere om, [hvordan du kan optimere din træning](/optimer-traening/).

## Styrketræning

Styrketræning handler om at blive stærkere, bygge større muskler eller begge dele på samme tid. Vi har skrevet rigtig mange indlæg om styrketræning, styrketræningsprogrammer og øvelser til styrketræning. 

Læs mere om [styrketræning her](/styrke/) eller vores [begynderprogram til calisthenics]({% link _posts/2021-01-18-calistenics.md %}).

## Løb

Løb handler om at lære at løbe, blive en hurtigere løber eller kunne løbe længere. Vi hjælper dig i gang med træningsprogrammer og løbeøvelser.

Læs mere om [løb og løbetræning her](/loebesiden/).

## Cardio

Cardio handler om at træne din kondition og dit kredsløb. Du kan bruge mange forskellige måder til at træne på. Vi har forslag til træningsprogrammer og øvelser til din cardiotræning. Du kan også tjekke vores [guide til de bedste cardiomaskiner]({% link _posts/2020-12-23-bedste-cardiomaskiner.md %}).

Læs mere om [cardio og konditionstræning](/kondition/).

## Yoga og mindfulness

Vi har skrevet flere indlæg om yoga og mindfulness. Tjek dem her:

{% assign site_posts = site.posts | where: "tags", "yoga" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Træning af muskelgrupper

Når du gerne vil træne forskellige muskelgrupper, så skal du vælge passende træningsøvelser, så du træner de rigtige muskler.

Vi har her på sitet samlet de [bedste træningsøvelser](/traeningsoevelser/), [strækøvelser]({% link _posts/2020-07-08-udstraekning.md %}), [balanceøvelser]({% link _posts/2020-07-16-balancetraening.md %}), [træning af core og kropsstammen]({% link _posts/2020-07-16-coretraening.md %}) og styrketræningsøvelser. Vi har lavet en grundig forklaring af alle øvelserne, og der er både øvelser til styrketræning, konditionstræning, yoga, udstrækning, mobilitet og cardio.

Du kan også tjekke vores dedikerede sider til [øvelser til maven]({% link _pages/exercises-tag-abs.md %}), [armøvelser]({% link _pages/exercises-tag-arme.md %}), [benøvelser]({% link _pages/exercises-tag-ben.md %}), [øvelser til brystet]({% link _pages/exercises-tag-bryst.md %}), [balleøvelser]({% link _pages/exercises-tag-glutes.md %}), [rygøvelser]({% link _pages/exercises-tag-ryg.md %}) eller [skulderøvelser]({% link _pages/exercises-tag-skulder.md %}).

Nogle af vores meget populære guides til træning af muskelgrupper er vores [guide til chinups og pullups]({% link _posts/2020-06-30-pullup-chinup.md %}) og [armstrækninger og armbøjninger]({% link _posts/2020-07-05-pushups.md %}).

Under alle omsændigheder bør du dykke ned i [alle vores træningsøvelser til inspiration](/traeningsoevelser/).
