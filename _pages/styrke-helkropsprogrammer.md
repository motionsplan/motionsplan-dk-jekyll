---
title: Helkropsprogrammer til styrketræning
seo_title: Fullbody – find det rette program til at træne hele kroppen
excerpt: Find et fullbody styrketræningsprogram, der passer til dit niveau og din hverdag. Vi har helkropsprogrammer til både
  begyndere og øvede.
description: Find et fullbody styrketræningsprogram, der passer til dit niveau og din hverdag. Vi har helkropsprogrammer til
  både begyndere og øvede.
permalink: /styrketraening/helkropsprogrammer/
language: da
header:
  overlay_image: /assets/images/unsplash/photo-1520948013839-62020f374478.jpg
  credit: https://images.unsplash.com/photo-1520948013839-62020f374478
  teaser: /assets/images/unsplash/photo-1520948013839-62020f374478.jpg
  caption: Helkropsprogrammer til styrketræning
tags:
- styrketræning
- begynder
- øvet
- fullbody
category:
- Styrketræning
last_modified_at: '2025-04-03T11:44:17Z'
classes: wide
---

Helkropsprogrammer – også kaldet fullbody-programmer – er en enkel og effektiv måde at styrketræne på. Her træner du hele kroppen i hver session, hvilket giver høj træningsfrekvens, god balance og solid fremgang med få ugentlige træningspas.

På denne side finder du færdige fullbody-programmer til forskellige behov. Uanset om du er nybegynder, har begrænset tid eller ønsker at optimere din træning, kan du finde et program, der passer til dig.

**Lav dit eget program!** Vi har skrevet en guide til dig, der gerne [vil lave dit eget helkropsprogram](/artikel/hvordan-opbygger-jeg-et-helkropsprogram/).

Hvis du vil se andre typer styrketræningsprogrammer, kan du gå til vores [oversigt over styrketræningsprogrammer](/styrketraeningsprogrammer/). Leder du efter programmer, hvor kroppen deles op over flere dage, kan du også se vores [splitprogrammer](/styrketraening/split-programmer/).

> 💡 **Se alle programmer:** Vil du hellere opdele din træning på specifikke muskelgrupper? Se vores overblik over **[splitprogrammer](/styrketraening/split-programmer/)** eller gå til vores **[samlede katalog af styrkeprogrammer](/styrketraeningsprogrammer/)**.

## Eksempler på helkropsprogrammer (fullbody)

Rigtig mange af de [klassiske træningsprogrammer til styrke](/styrketraeningsprogrammer/) er fuldkropsprogrammer. Her kan du se et udsnit af de helkropsprogrammer, jeg har beskrevet.

{% assign site_posts = site.posts | where: "category", "Styrketræning" | where: "tags", "fullbody" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include_cached archive-single.html post=post type="grid" %}
  {% endfor %}
{% endif %}

</div>

{% comment %}

## Ofte stillede spørgsmål om fullbody-programmer

{% endcomment %}

<details markdown="1" class="references">
  <summary><h2 id="references">Referencer</h2></summary>

- Lou Schuler og Alwyn Cosgrowe (2006): The New Rules of Lifting. Six Basic Moves for Maximum Muscle, Penguin Books.
</details>