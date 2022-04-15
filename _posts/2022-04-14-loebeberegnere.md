---
title: &title "Løbeberegnere: Beregn din "
permalink: /loebeberegnere/
language: da
header:
  teaser: https://images.unsplash.com/photo-1587587448924-b5a1db520d29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=5
  caption: *title
category:
  - Løb
tags:
  - beregner
last_modified_at: 2022-03-12T22:21:26Z
feature_row_feature:
  - image_path: https://images.unsplash.com/photo-1529795533870-ea8020391255?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=5
    alt: "Løbesidens Løbsberegner"
    title: "Løbeberegner"
    excerpt: "Jeg har lavet en løbeberegner, der kan beregne dit træningstempo og konkurrencetider ud fra Jack Daniels Running Formula. Her kan du også læse om forskellige træningsmetoder."
    url: "/loebesiden-jack-daniels-loebeberegner/"
    btn_label: "Brug løbsberegneren"
    btn_class: "btn--info"
# Hvad er et godt løbetempo?
# Hvordan finder man sin gennemsnitsfart?
---

Her kan du finde alle vores løbeberegnere. Vi har både beregnere til hastighed og til at udregne dit løbepace.

{% include feature_row id="feature-row_feature" type="left" %}

{% comment %}


pace beregner
løbehastighed
beregn løbetid
løb hastighed
beregn løbehastighed
løbe hastighed
beregn pace

løbetider
løbsberegner
løbeberegner
løbetider beregner
beregn løbetid
beregn løbetider
løbetid beregner
pace beregner


km i timen
hastigheds beregner



Beregn dine løbetider og -tempi
Beregn hastighed i km/t og min/km
Løb hastighedsberegner. Beregn pace



## 1. Jack Daniels løbeberegner

Ved at indtaste aktuelle konkurrencetider ind i løbeberegneren kan du finde dine løbetider for forskellige distancer. Du får også et bud på, hvilket tempo du bør træne efter i forskellige træningszoner og træningsmetoder.

Jack Daniels Running Formula tager udgangspunkt i statistikker over andre løbere og er efterhånden meget udbredt til at udregne træningstempo og konkurrencetider. Inden Jack Daniels lavede sin løbeberegner, så var [Pete Riegels formel]({% link _posts/2020-08-01-riegels-loebeberegner.md %}) til at udregne konkurrencetider til løb meget udbredt, men den er blevet overhalet af Jack Daniels beregninger.

Du kan bruge Jack Daniels [løbsberegner](/loebesiden-jack-daniels-loebeberegner/) her.

## 3. Billat intervaller


## 2. Pete Riegel

## 3. Jeff Galloway


## Pace beregnere

{% endcomment %}

## Alle vores beregnere til løb

Her på sitet har vi mange forskellige løbeberegnere. Du kan se hele listen herunder.

{% assign site_posts = site.posts | where: "category", "Løb" | where: "tags", "beregner" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>
