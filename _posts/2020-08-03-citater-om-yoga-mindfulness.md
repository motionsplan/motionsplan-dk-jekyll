---
title: 15 citater om yoga, meditation og mindfulness
seo_title: Citater om yoga, meditation og mindfulness (Inspiration)
permalink: /citater-yoga-meditation-mindfulness/
excerpt: Find ro og nærvær med 15 inspirerende citater om yoga, meditation og mindfulness fra Dalai Lama, Patanjali, Iyengar og Gandhi.
last_modified_at: '2026-08-08T12:00:00Z'
language: da
header:
  overlay_image: /assets/images/unsplash/photo-1487088678257-3a541e6e3922.jpg
  credit: https://images.unsplash.com/photo-1487088678257-3a541e6e3922
  teaser: /assets/images/unsplash/photo-1487088678257-3a541e6e3922.jpg
  caption: 13 citater om yoga, meditation og mindfulness
  overlay_filter: '0.8'
categories:
- Yoga
tags:
- citater
- motivation
- fitness
- yoga
feature_quotes:
- quote: Jeg kender ikke til et mere opmuntrende faktum end den utvivlsomme evne mennesket har til at løfte sit liv ved bevidst
    bestræbelse.
  cite: Henry David Thoreau
- quote: Hvis du er lykkelig, er det sandsynligvis din egen skyld, for der er masser af ting i verden at være ulykkelig over.
  cite: Storm P
- quote: Der er en revne i alting. Det er sådan, lyset kommer ind.
  cite: Leonard Cohen
- quote: Yoga is not a work-out, it is a work-in. And this is the point of spiritual practice. To make us teachable. To open
    up our hearts and focus our awareness so that we can know what we already know and be who we already are.
  cite: Rolf Gates
- quote: You cannot do yoga. Yoga is your natural state. What you can do are yoga poses, which may reveal to you where you
    are resisting your natural state.
  cite: Sharon Gannon
- quote: Crying is one of the highest devotional songs. One who knows crying, knows spiritual practice. If you can cry with
    a pure heart, nothing else compares to such a prayer. Crying includes all the principles of Yoga.
  cite: Kripalvanandji
- quote: Sleep is the best meditation.
  cite: Dalai Lama
- quote: There will always be people who can do it better than you, but that’s a good thing! Start to see competition as inspiration
    — without envy.
  cite: Kathryn Budig
- quote: I offer you peace. I offer you love. I offer you friendship. I see your beauty. I hear your need. I feel your feelings.
    My wisdom flows from the Highest Source. I salute that Source in you. Let us work together for unity and love.
  cite: Gandhi
- quote: May all beings everywhere be happy and free, and may the thoughts, words, and actions of my own life contribute in
    some way to that happiness and to that freedom for all.
  cite: Lokah Samastah Sukhino Bhavantu
- quote: The attitude of gratitude is the highest yoga. Make an attitude to be in gratitude, you will find the whole Universe
    will come to you.
  cite: Yogi Bhajan
- quote: The rhythm of the body, the melody of the mind and the harmony of the soul create the symphony of life.
  cite: B.K.S. Iyengar
- quote: Yoga is the practice of quieting the mind.
  cite: Patanjali
- quote: Yoga keeps punching me in the face with how good it is.
  cite: Nicky Lobo
---

Der findes mange inspirerende citater om yoga, mindfulness og meditation. Jeg har samlet {{ page.feature_quotes.size }} citater, der kan inspirere dig på din spirituelle vej.

{% comment %}
https://sadhgurujvquotes.com/da/yoga/citater
{% endcomment %}

Ud over at have samlet citater om yoga og mindfulness her, så har jeg har også oprettet en [Pinterest Opslagstavle med citater](https://pin.it/6VHPDcC). Skynd dig at følge den opslagstavle. Du er også meget velkommen til at dele dine citater om yoga, mindfulness og meditation i kommentarerne.

Da jeg kiggede på [citater om at kæmpe](/citater-om-at-kaempe/) var der faktisk også et par stykker, der fandt vej til denne liste.

## {{ page.feature_quotes.size }} om yoga, mindfulness og meditation

Her er bl.a. citater fra B. K. S. Iyengar, Dalai Lama, Gandhi og Yogi Bhajan.

{% assign quotes = page.feature_quotes | sort: "cite" %}

{% for quote in quotes %}
> {{ quote.quote | markdownify }}
>
> --- <cite>{{ quote.cite }}</cite>

***
{% endfor %}

## Citater om yoga, indre balance og meditation på Pinterest

Jeg har lavet et board med citater om yoga på Pinterest. Skynd dig ind og følge det og foreslå gerne dine egne citater også.

<a data-pin-do="embedBoard" data-pin-lang="da" data-pin-board-width="600" data-pin-scale-height="400" data-pin-scale-width="115" href="https://www.pinterest.dk/motionsplan/tr%25C3%25A6ningscitater-citater-om-tr%25C3%25A6ning-og-motivation/"></a>
<script async defer src="https://assets.pinterest.com/js/pinit.js"></script>

## Konklusion om citater om yoga, mindfulness og meditation

Du kender sikkert også en masse forskellige citater, som du bruger som motivation og inspiration i dit liv. Del det meget gerne i kommentarerne. Jeg vil rigtig gerne høre dine inspirerende favoritcitater.

{% include figure image_path="https://www.cdn.alt.dk/99959288abca4422af1727e52177f813/583e68750af645ca9fa2957fad719939_1125.jpg" caption="Joan Crawford: 'Kærlighed er en ild, men om det kommer til at varme dit hjerte eller brænde dit hus ned, kan du aldrig regne ud.'" %}

Husk også at tjekke vores [træningscitater om løb, styrketræning og motivation](/citater-traening-motivation/), inden du drager videre på din søgen.

## Udforsk mere yoga på Motionsplan

Vil du fordybe dig mere i din praksis? Tjek vores populære guider:
* **[De Fem Tibetanere](/artikel/de-fem-tibetanere/):** Det klassiske foryngende yogaprogram.
* **[Solhilsen A og B](/artikel/solhilsen-a-b-surya-namaskar/):** Trin-for-trin guide til Surya Namaskar.

## Flere citater

{% assign site_posts = site.posts | where: "tags", "citater" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include_cached archive-single.html post=post type="grid" %}
  {% endfor %}
{% endif %}

</div>
