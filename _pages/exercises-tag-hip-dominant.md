---
layout: single
permalink: /hoftedominante-oevelser/
title: &title "Hoftedominante øvelser: Træn din bagside med hængelsbevægelser"
seo_title: "Hoftedominante øvelser: Træn bagsiden med hinge-bevægelser"
author_profile: true
classes: wide
header:
  overlay_image: https://images.unsplash.com/photo-1584863231364-2edc166de576?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=5
  teaser: https://images.unsplash.com/photo-1584863231364-2edc166de576?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=5
  caption: *title
excerpt: "Din bagside kan trænes med hoftedominante øvelser. Her kigger vi på de bedste variationer af øvelser til bagkæden. Denne type kaldes også _hinge_ eller hængelsbevægelser."
categories:
  - Træningsøvelser
breadcrumbs: true
sidebar:
  nav: exercises
---

{{ page.excerpt }}

Din bagkæde bliver trænet i mange forskellige bevægelser. Vi har lavet en anden oversigt med en [oversigt over alle benøvelser]({% link _pages/exercises-tag-ben.md %}).

## Hængselsbevægelsen og _hinge_

De hoftedominante øvelser er en hængselsbevægelse i hofteleddet. Det er et grundlæggende bevægelsesmønster, som er rigtig godt at træne.

På engelsk kalder man bevægelsen for en _hinge_-bevægelse. Når man træner underkoppen, så opererer man med et kontinuum for, hvornår en øvelse karakteriseres som hoftedomineret frem for knædomineret.

{% include figure image_path="https://crossfys.dk/wp-content/uploads/2021/11/www.Crossfys.dk_-1024x1024.png" caption="Om en øvelse er hoftedominant eller knædominant er et kontinuum. Kilde: [crossfys.dk](https://crossfys.dk/saadan-dyrker-du-crossfit-og-faar-staerkere-ben-trods-knae-smerter/)" %}

## Hoftedominerede øveler

Vi har samlet alle de bedste og mest effektive øvelser til at træne hoften i hængselsbevægelsen her, som du kan lave både hjemme og i styrketræningscenteret.

{% assign site_posts = site.exercises | where: "tags", "Baller" | where_exp: "post", "post.url != page.url" | sort: "title" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>
