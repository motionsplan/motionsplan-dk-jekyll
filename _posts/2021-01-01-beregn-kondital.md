---
title: &title "Udregn dit kondital i vores beregnere 💗🥇"
seo_title: "Beregn dit kondital i vores beregner"
permalink: /beregn-kondital/
redirect_from:
  - /kondital-loeb/
language: da
header:
  overlay_image: https://images.unsplash.com/photo-1566709603547-638aba3dbbc0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDd8fGNhbGN1bGF0b3J8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=5
  teaser: https://images.unsplash.com/photo-1566709603547-638aba3dbbc0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDd8fGNhbGN1bGF0b3J8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=5
  caption: *title
category:
  - Kondition
tags:
  - konditionstest
  - beregner
last_modified_at: 2021-03-06T23:14:14Z
toc: true
gallery:
  - image_path: /assets/images/blog/worldfitnesslevel-www.png
    url: https://www.worldfitnesslevel.org/#/
polar:
  - image_path: /assets/images/blog/polar-ownindex-2.jpg
    url: /assets/images/blog/polar-ownindex-2.jpg
  - image_path: /assets/images/blog/polar-ownindex-3.jpg
    url: /assets/images/blog/polar-ownindex-3.jpg
  - image_path: /assets/images/blog/polar-ownindex-4.jpg
    url: /assets/images/blog/polar-ownindex-4.jpg
---

Du kan beregne dit kondital på mange forskellige måder. Vi har samlet forskellige måder at lave beregning af dit kondital på. Hvis du leder efter en "kondital beregner", så kan du her finde forskellige metoder til udregning af konditallet.

En måde er at beregne [dit kondital](/kondital/) ud fra en [vilkårlig løbedistance](/kondital-loeb-distance-tid/), løbe en [bip-test](/bip-test/) eller en [Cooper test](/cooper-test/). Vi har samlet en række konditionsberegnere til løbetests, en tur på roergometer eller efter at have kørt en tur på cyklen. Du kan se alle vores [konditionstests](/test-kondition-konditest-kondital/).

Men hvis du helst ikke vil rejse dig fra sofaen for at få svaret, så kan kan denne artikel være svaret. Her får du nemlig en række beregnere til kondital, som du kan udføre mens du ligger ned.

Men lad os først lige kigge på, hvordan man laver en kondital beregner. Derefter kommer jeg med forskellige eksempler på konditalberegnere for løb, cykling, gang og roning.

## Hvordan beregner jeg mit kondital?

For at beregne dit kondital så har du brug for en test, som på en eller anden måde er blevet sammenlignet med en direkte måling af den maksimale iltoptagelse pr. minut delt med kropsvægten. Det er nemlig definitionen på konditallet. Konditallet måles i ml ilt pr. minut pr. kg. kropsvægt.

Der er lavet mange forskellige studier, hvor man har målt deltagernes kondital direkte og sammenlignet den med andre submaksimale eller maksimale tests. Hvis du er interesseret, så har jeg skrevet et andet indlæg, der handler om, [hvordan man tester sin kondition med en konditest](/test-kondition-konditest-kondital/)?

## Kondital beregner fra sofaen

### 1. Konditalberegner (Nes 2011)

[Nes et al (2011)](https://pubmed.ncbi.nlm.nih.gov/21502897/) har lavet denne test for VO<sub>2</sub>max, som er baseret på nogle enkle antropometriske spørgsmål og selvoplevet fysisk aktivitetsniveau.

{% include calculate-fitness-norwegian-2011.html %}

### 2. Konditionsberegner (Jackson 1990)

[Jackson (1990)](https://www.topendsports.com/testing/tests/non-exercise.htm) har lavet denne test, som også har en variation, hvor du indsætter din fedtprocent.

{% include calculate-fitness-jackson.html %}

### 3. World Level Fitness

{% include gallery caption="World Fitness Level er lavet af norske forskere og giver dig et bud på dit fitness level ved at besvare en række spørgsmål." %}

### 4. Udregn kondital fra hvilepuls og maxpuls

[Uth et al (2004)](https://doi.org/10.1007/s00421-003-0988-y) har udviklet en konditionstest, hvor det ikke er så besværligt at få et bud på sit kondital. Testens præmis er, at [hvilepulsen](/hvilepuls/) falder, når man kommer i bedre form, fordi slagvolumen øges. Med en højere slagvolumen kan hjertet pumpe mere blod rundt i hvert enkelt slag, og derfor behøver det i hvile ikke at slå så mange gange.

[Find kondital fra din puls](/kondital-fra-puls/){: .btn .btn--success .btn--large }

### 5. Kondital fra Polar Ownindex

{% include gallery id="polar" layout="third" %}

Du kan lave en 5 minutters konditionstest, hvis du har et Polar ur eller Polar Beat og en brystmåler. Jeg har skrevet mere om, hvordan du kan bruge dit [ur til at måle din kondition]({% link _posts/2021-10-17-watch-vo2-max.md %}).

## Beregn kondital fra træning

### Løbetests

{% assign site_posts = site.posts | where: "tags", "konditionstest" | where: "tags", "løbetest" | where: "tags", "beregner" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

### Cykling

{% assign site_posts = site.posts | where: "tags", "konditionstest" | where: "tags", "cykeltest" | where: "tags", "beregner" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

### Romaskine og roergometer

{% assign site_posts = site.posts | where: "tags", "konditionstest" | where: "tags", "rotest" | where: "tags", "beregner" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

### Udregn kondital fra gangtest

{% assign site_posts = site.posts | where: "tags", "konditionstest" | where: "tags", "gangtest" | where: "tags", "beregner" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

***

[Se alle konditionstests](/test-kondition-konditest-kondital/){: .btn .btn--large .btn--info }

## Validitet af beregning af kondital

Når du beregner dit kondital, så skal du huske, at alle _indirekte_ tests er forbundet med unøjagtigheder. Beregnerne er lavet med udgangspunkt i en population, og formlerne og algoritmerne er baseret på det, der passer på flest muligt i forsøget. Når du laver en beregning af konditallet, så bliver det altså det bedste gæt ud fra forskernes studier.

## Hvordan forbedrer jeg beregningen af mit kondital?

Dit beregnede kondital vil forbedres, hvis du træner over længere tid, hvor du udfordrer kredsløbet. Den hurtigeste måde at forbedre et udregnet kondital er ved at tabe dig. Det skyldes, at konditallet bl.a. afhænger af vægten.

For at forbedre beregningen af dit kondital, så skal du imidlertid flytte din maksimale iltoptagelse og det kræver en høj intensitet. Vi har skrevet lidt om [intensitetens betydning for at flytte den maksimale iltoptagelse]({% link _posts/2019-11-03-intensiteten-og-vo2max.md %}).

Hvis du bruger samme beregner til dit kondital næste gang, så skal du altså bare præstere bedre i testen, og så vil udregningen af konditallet give et bedre tal.

## Hvad er et godt kondital?

Jeg har lavet en side, hvor du kan se en tabel med kondital, som du kan vurdere dig selv i forhold til. Men husk på at de udregnede kondital er til en tilnærmelse af dit rigtige kondital.

[Se tabel med kondital](/kondital/){: .btn .btn--large .btn--info }

## Konklusion for beregnere af kondital

Der er mange søgninger på nettet på "beregn kondital", hvilket tyder på, at mange gerne vil lave en beregning af sit kondital. Jeg bruger ofte også selv en beregner til at udregne mit kondital, fordi jeg godt kan lide at få et tal. Egentlig kunne jeg jo bare lave den samme test flere gange for at se, om jeg er blevet bedre, og så ved jeg, at min kondition er blevet bedre.
