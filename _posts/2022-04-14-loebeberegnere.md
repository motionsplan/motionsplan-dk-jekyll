---
title: &title "Løbeberegnere til udregning af dit løbepace"
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

{% endcomment %}

## 1. Jack Daniels løbeberegner

Ved at indtaste aktuelle konkurrencetider ind i løbeberegneren kan du finde dine løbetider for forskellige distancer. Du får også et bud på, hvilket tempo du bør træne efter i forskellige træningszoner og træningsmetoder.

Jack Daniels Running Formula tager udgangspunkt i statistikker over andre løbere og er efterhånden meget udbredt til at udregne træningstempo og konkurrencetider. Inden Jack Daniels lavede sin løbeberegner, så var [Pete Riegels formel]({% link _posts/2020-08-01-riegels-loebeberegner.md %}) til at udregne konkurrencetider til løb meget udbredt, men den er blevet overhalet af Jack Daniels beregninger.

Du kan bruge Jack Daniels [løbsberegner](/loebesiden-jack-daniels-loebeberegner/) her.

## 3. Billat intervaller

Vi har lavet en beregner, som kan udregne din vVO<sub>2</sub>max baseret på den maksimale distance, du kan løbe på 6 minutter. Beregneren er baseret på Billats arbejde med at flytte den maksimale iltoptagelse. Når du har lavet testen og udregnet dine hastigheder, så ved du hvor hurtigt du skal løbe i Billat-intervallerne, som er 30-30, 60-60 og 3 minutter-3 minutters pause for at flytte din maksimale ydeevne.

Fordelen ved denne beregner med udgangspunkt i Billat et al (1999) er, at du samtidig får et fire ugers træningsprogram til løb, som du ved virker, fordi det har indgået i et studium.

[Udregn Billat-intervaller]({% link _posts/2020-08-08-billat.md %}){: .btn .btn--success .btn--large }

## 3. Pete Riegel

Pete Riegel har lavet en formel til at beregne potentielle løbetider og konkurrencetider. Du kan altså beregne din tilnærmede tid på en distance ud fra en tid på en anden distance. Hvis du fx ønsker at kende din omtrentlige maratontid baseret på din 10 km tid, så kan du bruge [Pete Riegels formel og beregner](/riegels-loebeberegner/) til det.

Pete Pete Riegels udgangspunkt er, at man mister omkring 6% af hastigheden, hver gang man fordobler løbedistancen. Dette præmis er naturligvis ikke uden udfordringer, så derfor fungerer beregneren bedst, hvis du bruger distancer der ligger tæt på din måldistance.

## 4. Jeff Galloway

Galloway har en [beregner baseret på Magic Mile](/galloway-metoden/), som kan udregne forskellige hastigheder, som du kan bruge i din træning alt efter, hvilket tempo du kunne løbe i på _den magiske mil_-testen. Baseret på din sluttid kan du udregne, hvilket tempo du skal bruge på forskellige distancer.

{% comment %}

## Pace beregnere

{% endomment %}

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

## Konklusion

Der er altså mange forskellige løbeberegnere, som du kan bruge i forbindelse med din løbetræning. Jeg bruger selv ofte Jack Daniels beregner, da den kan tage en løbetest fra mange forskellige løbedistancer. Samtidig synes jeg, at den giver et løbetempo, som giver mening i situationen.

{% include feature_row id="feature-row_feature" type="left" %}

Det kan imidlertid også være lidt vanskeligt at løbe efter et løbetempo, hvis du løber i terræn eller i et kuperet område. Der træner jeg ofte efter [wattmåling med Stryd](/loeb-watt/) eller laver [pulstræning](/pulstraening/) baseret på mine [pulszoner](/pulstraening-pulszoner-fra-maxpuls-og-pulsreserve/).
