---
layout: single
title: "Fitnessinstruktør: Øvelser og træningsøvelser til fitnessinstruktør"
permalink: /fitness/ovelser/
author_profile: true
classes: wide
header:
  overlay_image: https://www.vih.dk/sites/vih/files/styles/banner_small/public/2K2A8073.JPG
  teaser: https://www.vih.dk/sites/vih/files/styles/banner_small/public/2K2A8073.JPG
  caption: "Fitnessinstruktør: Øvelser til Bevæg Dig For Livet Fitness"
feature_row:
  - image_path: https://imgcdn.saxo.com/_9788771801835/0x500
    alt: "Stærk"
    title: "Stærk - Jacob Beermann"
    excerpt: "Denne bog er et must, hvis du gerne vil være fitnessinstruktør? Jacob Beermann har med bogen _Stærk_ skrevet en rigtig god indføring i styrketræning. Her får du en god og grundig introduktion til, hvordan man styrketræner bedst."
    url: "https://www.partner-ads.com/dk/klikbanner.php?partnerid=28187&bannerid=43264&htmlurl=https://www.saxo.com/dk/staerk_jacob-beermann_haeftet_9788771801835"
    btn_label: "Tjek prisen hos Saxo"
    btn_class: "btn--danger"
---

Jeg har samlet alle øvelserne, der bruges i forbindelse med Fitnessinstruktør. Det giver et samlet overblik over træningsøvelserne, som du skal kunne undervise i, når du gerne vil være Fitnessinstruktør.

På [Vejle Idrætshøjskole underviser vi i Fitnessinstruktør](https://www.vih.dk/fag/fitnessinstruktor). Her er nogle af de spørgsmål, vi bruger til at gøre os klar til den afsluttende prøve.

{% assign exercises = site.exercises | where: "tags", "fitnessinstruktør" | sort: "title" %}
{% include exercises-by-search exercises=exercises %}

{% include feature_row type="left" %}
