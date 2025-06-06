---
layout: single
title: &title "Kost, ernæring & forbrænding"
seo_title: "Kost og Ernæring – Bliv klogere på mad og forbrænding"
redirect_from:
  - /krop-og-sundhed/
permalink: /kost-ernaering/
excerpt: "Få indsigt i kost og ernæring med vores omfattende artikler og værktøjer. Lær om sunde spisevaner, næringsstoffer og find kalorietabeller for forskellige fødevarer."
description: "Få indsigt i kost og ernæring med vores omfattende artikler og værktøjer. Lær om sunde spisevaner, næringsstoffer og find kalorietabeller for forskellige fødevarer."
header:
  overlay_image: https://images.unsplash.com/photo-1517093728432-a0440f8d45af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&h=630&w=1200&q=60
  teaser: https://images.unsplash.com/photo-1517093728432-a0440f8d45af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&h=300&w=400&q=10
  caption: *title
author_profile: true
toc: true
breadcrumbs: true
classes: wide
---

Velkommen til vores sektion om kost og ernæring, hvor vi tilbyder evidensbaseret viden for at hjælpe dig med at træffe informerede valg om din kost. Uanset om du ønsker at optimere din træning, tabe dig eller blot leve sundere, finder du her ressourcer og værktøjer til at støtte dig på din rejse.

Vi dækker emner som makronæringsstoffer, tallerkenmodeller og kosttilskud, så du kan få en dybere forståelse af, hvordan forskellige fødevarer påvirker din krop. Vores kalorietabeller giver dig detaljerede oplysninger om energiinholdet i en lang række fødevarer, hvilket gør det nemmere at planlægge dine måltider og nå dine sundhedsmål.

Udforsk vores artikler og interaktive værktøjer for at få praktiske råd og inspiration til en sund livsstil. Vi er dedikerede til at levere opdateret og pålidelig information, der kan guide dig mod bedre sundhed og velvære.

## Guides til Kost & Ernæring

{% assign site_posts = site.posts | where: "tags", "kost & ernæring" | where: "tags", "featured" | where: "tags", "guide" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Guides til kosttilskud

{% assign site_posts = site.posts | where: "tags", "kosttilskud" | where_exp: "post", "post.url != page.url" | sort: "last_modified_at" %}

<div class="feature__wrapper" markdown="1">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 8 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Guide til kosttilskud der virker](/kosttilskud/){: .btn .btn--success .btn--center }

</div>

## BMI beregner, taljemål og idealvægt

Det er meget populært at udregne sin BMI. Jeg har lavet en [BMI beregner](/bmi-beregner/), hvor du kan læse mere om BMI og lave en beregning af dit eget BMI. Tjek også vores [BMI beregner til børn](/bmi-beregner-boern-unge-teenagere/).

Du kan bl.a. prøve vores [beregner til idealvægt](/idealvaegt/), [taljemål](/taljemaal/) og [talje-hofte-forhold](/talje-hofte-ratio/).

{% assign site_posts = site.posts | where: "tags", "kropskomposition" | where: "tags", "måling" | where: "tags", "antropometri" | sort: "date" %}

<div class="feature__wrapper" markdown="1">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Alt om BMI](/bmi/){: .btn .btn--success .btn--center }

</div>

## Beregnere til kropssammensætning og fedtprocent

Vi har beskrevet [alle måder at måle fedtprocent på](/maal-fedtprocent/), men der er også andre måder at finde din kropskomposition på. Tjek dem her:

{% assign site_posts = site.posts | where: "tags", "kropskomposition" | where: "tags", "metode" | sort: "date" %}

<div class="feature__wrapper" markdown="1">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Alle metoder til kropskomposition](/maal-fedtprocent/){: .btn .btn--success .btn--center }

</div>

{% comment %}

## Energi & Forbrænding

{% endcomment %}

## Energi & Forbrænding: Dagligt energibehov og ligevægtsindtag

Rigtig mange er på udkig efter en kalorieberegner, som kan [udregne dit ligevægtsindtag](/ligevaegtsindtag-beregner/). Det er et af de rigtig populære punkter her på siden.

{% assign site_posts = site.posts | where: "tags", "stofskifteberegner" | sort: "last_modified_at" | reverse %}

<div class="feature__wrapper" markdown="1">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Alt om stofskiftet](/stofskifte/){: .btn .btn--success .btn--center }

</div>

## Kalorieberegnere og energiberegnere

Jeg har skrevet mere om [forskellige typer kalorieberegnere](/kalorieberegner/).

{% assign site_posts = site.posts | where: "tags", "kalorieberegner" | sort: "date" %}

<div class="feature__wrapper" markdown="1">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Find flere kalorieberegnere](/kalorieberegner/){: .btn .btn--success .btn--center }

</div>

## Opskrifter

{% assign site_posts = site.posts | where: "tags", "opskrift" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Vægt & vægttab

Vægttab fylder rigtig meget, når man taler om krop, træning og sundhed. Der findes en kæmpestor forretning af vægttabseksperter og kosttilskud til vægttab. Der bliver brugt før og efter-billeder af en afklædt krop for at vise, hvor effektive resultater, man kan få. Jeg har skrevet lidt om en [anden tilgang til vægttab]({% link _posts/2021-07-31-vaegttab.md %}).

{% assign site_posts = site.posts | where: "tags", "vægttab" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper" markdown="1">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Slankekur er en dårlig ide](/slankekur/){: .btn .btn--success .btn--center }

</div>

## Kalorietabeller og næringsindhold i fødevarer

{% assign site_posts = site.posts | where: "tags", "kalorietabel" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper" markdown="1">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Se den store kalorietabel](/kalorietabellen/){: .btn .btn--success .btn--center }

</div>

## Fysiologi

Det er godt at kende mere til [kroppens fysiologi](/fysiologi/), når man gerne vil forstå træningslæren om kroppen. Du kan blive klogere i nogle af disse indlæg.

{% assign site_posts = site.posts | where: "tags", "fysiologi" | where_exp: "post", "post.url != page.url" | sort: "last_modified_at" %}

<div class="feature__wrapper" markdown="1">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Se alt om fysiologi](/fysiologi/){: .btn .btn--success .btn--center }
</div>

## Læs mere om Kost & Ernæring

{% assign site_posts = site.posts | where: "category", "Kost & Ernæring" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>
