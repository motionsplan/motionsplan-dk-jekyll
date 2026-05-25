---
title: &title "Træning med sliders: Hjemmetræning med klude 💪"
permalink: /hjemmetraening-med-klude-sliders/
language: da
author: lsolesen
header:
  overlay_image: /assets/images/cdn.outsideonline.com/slider-discs-workout_h-5b1c0de9.jpg
  credit: https://cdn.outsideonline.com/wp-content/uploads/2021/06/23/slider-discs-workout_h.jpg
  teaser: /assets/images/cdn.outsideonline.com/slider-discs-workout_h-5b1c0de9.jpg
  credit: https://cdn.outsideonline.com/wp-content/uploads/2021/06/23/slider-discs-workout_h.jpg
  caption: *title
category:
  - Styrketræning
tags:
  - styrketræning
  - hjemmetræning
last_modified_at: 2020-12-03T23:14:14Z
toc: true
---

Træning med sliders eller klude kan være rigtig effektivt til at give mere modstand i din træning. Jeg bruger ofte klude og sliders, når jeg skal lave nogle øvelser kun med kropsvægt. Det kan virkelig give en god effekt.

Jeg har lavet mine egne sliders af et lille stykke tæppe, som jeg fik foræret af det lokale tæppefirma, men du kan også bruge en klud eller noget andet, som kan bevæge sig hen over dit gulv.

Jeg har her samlet nogle gode øvelser, hvor klude og sliders i træningen giver rigtig god mening.

Klude er særdeles velegnede til, hvis du er ved at planlægge et [træningsprogram til hjemmetræning]({% link _posts/2020-08-06-hjemmetraening.md %}).

## Øvelser til træning med klude og sliders

{% include motionsplan/exercise key="20131002101354" title="Træning af hoftebøjer med klude" %}

{% include motionsplan/exercise key="20131003102221" title="Træning af baglår, glid ud på to ben" %}

{% include motionsplan/exercise key="20131003142257" title="Træning af baglår, glid ud på et ben" %}

## Flere øvelser til træning med klude og sliders

Dan Sapstead [foreslår sliding reaching pushups](https://www.t-nation.com/training/build-muscle-at-home).

{% include video provider="youtube" id="Yqv8bAuqA_Y" %}

{% include video provider="youtube" id="n7i0nTCFnD0" %}

## Øvelser med klude og sliders

<div class="feature__wrapper">

{% assign site_posts = site.exercises | where: "equipment", "klud" | where_exp: "post", "post.url != page.url" | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
  {% for post in site_posts limit:16 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>
