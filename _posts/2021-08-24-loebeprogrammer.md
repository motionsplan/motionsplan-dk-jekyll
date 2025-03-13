---
title: &title "Løbeprogrammer til alle niveauer og distancer"
permalink: /loebeprogrammer/
excerpt: "Løbeprogrammer til alle niveauer. Her kan du finde et løbeprogram, der passer til dig. Der er løbetræningsprogrammer til at blive hurtigere på 5km, 10 km, halvmaraton og maraton."
language: da
header:
  overlay_image: https://images.unsplash.com/photo-1594911772125-07fc7a2d8d9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&h=630&w=1200&q=60
  teaser: https://images.unsplash.com/photo-1594911772125-07fc7a2d8d9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&h=300&w=400&q=10
  caption: *title
category:
  - Løb
tags:
  - løbeprogram
  - træningsprogram
  - løb
last_modified_at: 2021-08-22T23:14:14Z
toc: true
classes: wide
---

Det er en god ide at have et løbeprogram, hvis du vil ordentligt i gang med at løbe. Det er motiverende, du sikrer dig fremgang, og i et godt program undgår du også irriterende overbelastningsskader.

Her får du råd og tips til, hvordan du finder det rigtige træningsprogram til løb, som passer netop til dig. Du kan bruge denne side som en guide til, hvordan du kommer i gang med at løbe, og hvordan du også bliver klar til de forskellige distancer - uanset hvad dit mål er.

På denne side finder du gode råd og konkrete træningsprogrammer, så du kan få det optimale ud af din løbetræning og få hjælp til at nå dit mål - uanset om du er nybegynder eller garvet løber.

## Skal du i gang med at løbe?

Er du ny løber, kender du det garanteret. Motivationen er høj, og nu skal du i dit livs form. Men det er også her du lige skal tænke dig om. Hvis du går for hurtigt frem, så ender det med kroppen spænder ben for alle dine mål.

Derfor handler det om at væbne sig med tålmodighed, når du går i gang med at løbetræne. En rigtig god måde er ved at følge et løbetræningsprogram.

## Ambitioner om de længere distancer?

Måske er du allerede godt i gang med at løbe, og nu har du ambitioner om at prøve kræfter med halvmaraton eller maraton. Det er afgørende, at du er opmærksom på, at du - ligesom nybegyndere - har en progression i din træning, så du hverken overbelaster dig eller træner for lidt.

På den her side kan du finde træningsprogrammer, vi har lavet til nybegyndere og let øvede løbere. Uanset om din ambition er at komme i gang med at løbe, eller om du skal prøve kræfter med de helt barske distancer, er de lavede til almindelige motionister.

## Lyt til kroppen

Det er vigtigt, at du er opmærksom på, at vores programmer er vejledende og generelle. Du skal for alt i verden først og fremmest lytte til din egen krop og dit eget helbred. Kroppen sender dig konstant signaler, du skal være opmærksom på - skader kan sagtens opstå, selvom du følger et træningsprogram.

Husk at læse den vejledende og forklarende tekst grundigt i gennem, inden du starter på dit træningsprogram. Det er vigtigt for, at du får den optimale oplevelse ud af din træning.

## Hvad er et godt løbeprogram?

Der findes et hav af løbeprogrammer rundt omkring på nettet, men hvad skal du egentlig kigge efter for at finde et godt løbeprogram?

Når du skal vælge et løbetræningsprogram, så er nogle af de vigtigste parametre, du skal kigge efter:

- Hvilket niveau starter du ud på?
- Hvor mange gange om ugen vil du gerne træne?
- Hvor langt vil du gerne løbe?

Målet for en løbeplan er ofte forskellige distancer. Her får du et overblik over, hvordan du kommer i gang med de enkelte distancer, og hvad du skal tænke på.

## Begynder løbeprogram - Kom godt i gang

På listen herunder kan du finde et begynder løbeprogram.

{% assign site_posts = site.posts | where: "category", "Løb" | where: "tags", "løbeprogram" | where: "tags", "begynder" | where_exp: "post", "post.url != page.url" | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
<div class="feature__wrapper">
  {% for post in site_posts limit:16 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
{% endif %}

## 5 km løbeprogrammer

{% assign site_posts = site.posts | where: "category", "Løb" | where: "tags", "løbeprogram" | where: "tags", "5 km" | where_exp: "post", "post.url != page.url" | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
<div class="feature__wrapper">
  {% for post in site_posts limit:16 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
{% endif %}

## 10 km løbeplan

{% assign site_posts = site.posts | where: "category", "Løb" | where: "tags", "løbeprogram" | where: "tags", "10 km" | where_exp: "post", "post.url != page.url" | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
<div class="feature__wrapper">
  {% for post in site_posts limit:16 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
{% endif %}

## Halvmaraton løbeprogrammer

{% assign site_posts = site.posts | where: "category", "Løb" | where: "tags", "løbeprogram" | where: "tags", "halvmaraton" | where_exp: "post", "post.url != page.url" | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
<div class="feature__wrapper">
  {% for post in site_posts limit:16 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
{% endif %}

## Maraton løbeprogrammer

{% assign site_posts = site.posts | where: "category", "Løb" | where: "tags", "løbeprogram" | where: "tags", "maraton" | where_exp: "post", "post.url != page.url" | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
<div class="feature__wrapper">
  {% for post in site_posts limit:16 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
{% endif %}

{% comment %}

## Øvet løber?

{% endcomment %}

## Alle løbeprogrammer

Her kan du se alle løbeprogrammerne, som vi har skrevet om på denne side.

{% assign site_posts = site.posts | where: "category", "Løb" | where: "tags", "løbeprogram" | where_exp: "post", "post.url != page.url" | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
<div class="feature__wrapper">
  {% for post in site_posts limit:16 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
{% endif %}

## Relevante guides om løb

{% assign site_posts = site.posts | where: "category", "Løb" | where: "tags", "guide" | where_exp: "post", "post.url != page.url" | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
<div class="feature__wrapper">
  {% for post in site_posts limit:16 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}

[Læs meget mere om løb](/loebesiden/){: .btn .btn--success .btn--center }
</div>
{% endif %}