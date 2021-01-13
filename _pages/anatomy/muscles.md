---
layout: single
title: &title "Skeletmuskler: Muskler, muskelgrupper og muskeloversigt 💪"
excerpt: "Skeletmuskler bevæger kroppen. Jeg har lavet en oversigt over muskler, muskelgrupper og muskel anatomi, hvor du kan se navne på kroppens muskler på latin og dansk."
permalink: /muskler/
header:
  overlay_image: https://images.unsplash.com/photo-1539814858141-928517f6afd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=60
  teaser: https://images.unsplash.com/photo-1539814858141-928517f6afd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60
  caption: *title
tags:
  - anatomi
toc: true
toc_sticky: true
author_profile: true
sidebar:
  nav: anatomi
feature_row:
  - image_path: https://citatplakat.dk/wp-content/uploads/2020/11/Plakat-med-menneskets-muskler-AN10023.png
    url: https://www.partner-ads.com/dk/klikbanner.php?bannerid=71238&partnerid=28187&htmlurl=https://citatplakat.dk/plakater/muskulatur-anatomi-plakat/
    title: Muskulatur - Anatomi plakat
---

De muskler, der skaber bevægelse af kroppen, kaldes for ”den tværstribede skeletmuskulatur”. Denne side handler om skeletmusklerne. Først kan du læse en kort introduktion til, hvad muskler og skeletmuskler er og deres anatomi. Derefter kigger jeg på de forskellige muskelgrupper.

Musklerne er hæftet til knoglerne via sener. Når musklerne gennem nervesystemet får et signal, vil de trække sig sammen og ved hjælp af leddenes bevægelighed skabe bevægelse af skelettets knogler.

Musklerne er altså en del af en funktionel enhed sammen med led og knogler. Musklerne på forsiden og bagsiden af et led samarbejder om en bevægelse. Musklen, der udfører bevægelsen kaldes agonisten, mens musklen på den modsatte side kaldes antagonisten. 

Der er aktivitet i begge muskler. Agonisten har mest aktivitet til at udføre bevægelsen, men antagonisten er med til at stabilisere leddet, så den er også aktiv. 

{% include gallery id="feature_row" caption="Se flere [anatomiplakater med skeletter og muskler hos plakaterne.dk](https://www.plakaterne.dk/anatomi-anatomiplakater-muskler-skeletter/)." %}

## Skeletmusklernes opdeling

Der findes forskellige muskeltyper, men i forbindelse med analyser af bevægelser er skeletmusklerne de mest relevante.

Skeletmusklerne kan opdeles i tre kategorier.

- **Stabiliserende muskler**. Disse muskler er mindre lednære muskler, som skal stabilisere og kontrollere leddene. Fx findes der små muskler ned langs rygsøjlen.
- **Åndedrætsmuskler**. Musklerne indgår i åndedrættet og kan være med til at lave bugtryk.
- **Bevægelsesmuskler**. Muskler som har til opgave at bevæge kroppen og styre bevægelserne.

I nedenstående figur er det mest relevante muskler i forhold til træning vist på skelettet. Alle musklerne er relevante for træningen.

## Muskeloversigt og anatomi

{% include anatomy.html %}

### Liste over andre muskler

Øvrige vigtige muskler for træning, der ikke vises i skelettet, er:

{% assign imagemap = site.anatomy | where: "tags", "not-in-imagemap" %}
{%- for m in imagemap -%}
- [{{ m.title }}]({{ m.url }})
{% endfor %}

## Muskeloversigt med navne på dansk og latin

{% include table-muscles.html %}

## Artikler om muskler

<div class="feature__wrapper">

{% assign site_posts = site.posts | where: "tags", "muskler" | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
  {% for post in site_posts limit:16 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>
