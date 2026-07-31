---
title: 12 citater om fitness og bodybuilding
seo_title: 12 citater om fitness og bodybuilding (2025)
permalink: /citater-fitness-bodybuilding/
last_modified_at: '2020-12-29T09:41:09Z'
excerpt: Her får du en række citater om fitness og bodybuilding. Jeg synes et citat kan give motivation til min træning i
  fitness, og nogle af dem der træner allermest er bodybuildere.
language: da
header:
  teaser: /assets/images/unsplash/photo-1487088678257-3a541e6e3922.jpg
  credit: https://images.unsplash.com/photo-1487088678257-3a541e6e3922
  caption: 12 citater om fitness og bodybuilding
  overlay_filter: '0.8'
category:
- Styrketræning
tags:
- citater
- motivation
- fitness
- træning
feature_quotes:
- quote: If you don’t find the time, if you don’t do the work, you don’t get the results.
  cite: Arnold Schwarzenegger
- quote: Make time for it. Just get it done. Nobody ever got strong or got in shape by thinking about it. They did it.
  cite: Jim Wendler
- quote: But don't go ape-shit with supplemental exercises. They should complement the training, not detract from it. You
    must have a very strong reason for doing an exercise. If you don't, scrap it and move on. **Who fucking cares, it is accessories.**
  cite: Jim Wendler
- quote: If you don't learn from your mistakes, they become your regrets.
  cite: John Zena
- quote: The gym will always provide the most important tool we need to get through life's challenges - Perserverance.
  cite: Dwayne Johnson, The Rock
- quote: To be a champion you must act like one, act like a champion.
  cite: Lou Ferrigno
- quote: If you spend too much time thinking about a thing, you'll never get it done.
  cite: Bruce Lee
- quote: Everybody want to be a 'powerbuilder', but don't nobody want to lift no heavy-ass weights.
  cite: Ronnie Coleman
- quote: In training you listen to your body. In competition, you tell it to shut up.
  cite: Rich Froning
- quote: The single biggest mistake that most beginners make is putting 100% of their effort into the positive (concentric)
    part of the rep, while paying no attention to the negative (eccentric) segment.
  cite: Dorian Yates
- quote: If you're capable of sending a legible text message between sets, you probably aren't working hard enough.
  cite: Dave Tate
- quote: For me, life is continuously being hungry. The meaning of life is not simply to exist, to survive, but to move ahead,
    to go up, to achieve, to conquer.
  cite: Arnold Schwarzenegger
gallery:
- image_path: /assets/images/pinterest/citat-dwayne-johnson.jpg
  url: /assets/images/pinterest/citat-dwayne-johnson.jpg
- image_path: /assets/images/pinterest/wendler-accessories.jpg
  url: /assets/images/pinterest/wendler-accessories.jpg
- image_path: /assets/images/pinterest/wendler-get-it-done.jpg
  url: /assets/images/pinterest/wendler-get-it-done.jpg
---

Jeg falder ofte over citater om fitness og bodybuilding. Det er alle inspirerende og motiverende udsagn til din træning.

Jeg har samlet {{ page.feature_quotes.size }} citater her. Jeg synes et citat kan give motivation til min træning i fitness, og nogle af dem der træner allermest er jo bodybuildere.

Jeg har samlet en masse forskellige citater om fitness og bodybuilding her på siden, men jeg har også oprettet en [Pinterest Opslagstavle med citater](https://pin.it/6VHPDcC), så skynd dig ind og følge den.

## {{ page.feature_quotes.size }} motiverende citater om fitness og bodybuilding

Her er bl.a. citater fra Arnold Schwarzenegger, som er en meget kendt bodybuilder. Desuden fra Jim Wendler, der har konkurreret i styrkeløft og så naturligvis John Zena og The Rock. Lad os dykke ned i citaterne.

Et par citater fra [træningscitater om løb, styrketræning og motivation](/citater-traening-motivation/) fik også lov til at være med på denne liste.

{% include motionsplan/pinterest-gallery id="gallery" caption=page.title %}

{% assign quotes = page.feature_quotes | sort: "cite" %}

{% for quote in quotes %}
> {{ quote.quote | markdownify }}
>
> --- <cite>{{ quote.cite }}</cite>

***
{% endfor %}

Når man snakker om træningsplanlægning, så synes jeg Jim Wendler fanger det meget godt med dette citat.

{% include motionsplan/pinterest image_path="/assets/images/pinterest/wendler-accessories.jpg" data-pin-media="/assets/images/pinterest/wendler-accessories.jpg" %}

## Citater om fitness på Pinterest

Jeg har lavet et board med citater om fitness på Pinterest. Skynd dig ind og følge det og foreslå gerne dine egne citater også.

<a data-pin-do="embedBoard" data-pin-lang="da" data-pin-board-width="600" data-pin-scale-height="400" data-pin-scale-width="115" href="https://www.pinterest.dk/motionsplan/tr%25C3%25A6ningscitater-citater-om-tr%25C3%25A6ning-og-motivation/"></a>
<script async defer src="https://assets.pinterest.com/js/pinit.js"></script>

## Konklusion om citater om fitness og bodybuilding

Du kender sikkert også en masse forskellige citater, som du bruger som motivation og inspiration til din træning i fitness og bodybuilding.

Brug meget gerne kommentarerne til at dele dine inspirerende favoritcitater, så udvider jeg meget gerne listen her.

## Flere citater

{% assign site_posts = site.posts | where: "tags", "citater" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include_cached archive-single.html post=post type="grid" %}
  {% endfor %}
{% endif %}

</div>
