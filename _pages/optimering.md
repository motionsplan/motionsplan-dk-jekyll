---
layout: single
title: "Optimer træningen"
permalink: /optimer-traening/
excerpt: "Træning handler først og fremmest om at nyde det. Men derfor kan man jo godt arbejde med at optimere træningen også. Her har vi samlet en række emner, som kan være med til at optimere din træning."
header:
  overlay_image: https://images.unsplash.com/photo-1620213391117-0d169a917221?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80
  teaser: https://images.unsplash.com/photo-1620213391117-0d169a917221?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80
  caption: Optimering af træningen
author_profile: true
author: lsolesen
sidebar:
  nav: strength
feature_row_feature:
  - image_path: https://images.unsplash.com/photo-1475274110913-480c45d0e873?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80
    alt: "Tests"
    title: "Tests"
    excerpt: "Det er meget motiverende at lave tests før og efter din træning. Det er en god måde at se på, om der sker noget med din træning, og så ved du om dit træningsprogram er passende."
    url: "/tests/"
    btn_label: "Se alle tests"
    btn_class: "btn--danger"
  - image_path: https://images.unsplash.com/photo-1475274110913-480c45d0e873?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80
    alt: "Træning"
    title: "Træning"
    excerpt: "Din træning fungerer naturligvis kun, hvis du også får lavet noget træning. Vi har samlet en række forskellige træningsformer her, som du kan lade dig inspirere af."
    url: "/traeningsmetoder/"
    btn_label: "Se træningsformer"
    btn_class: "btn--success"
  - image_path: https://images.unsplash.com/photo-1475274110913-480c45d0e873?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80
    alt: "Tracking"
    title: "Tracking"
    excerpt: "Det er en god ide at holde styr på din træning med fx en træningslog, så du kan se om din træning går planmæssigt. Der findes flere rigtig gode måder at _tracke_ din træning på uden, at du behøver at skulle levere toppræstationer i tests."
    url: "/tracking/"
    btn_label: "Læs om tracking"
    btn_class: "btn--success"
toc: true
---

{{ page.excerpt }}

Når du træner, så håber du på at du bliver bedre til det du gør, eller din krop tilpasser sig de udfordringer, du stiller den. Hvis du skal blive bedre, så skal du øve dig. Men optimering af træning handler ikke kun om selve træningen. Effektiv træning handler også om [hvordan du restituerer fra træningen]({% link _posts/2020-05-28-restitutionstid-alder.md %}), hvilke [træningsprogrammer du vælger](/traeningsprogrammer/) og hvilke [træningsøvelser](/traeningsoevelser/) du bruger.

## Test - træn - track

Hvis du træner for at blive bedre til noget, så synes jeg, at det kan være meget motiverende at planlægge træningen på en god måde. I dit træningsprogram så kan du tænke over, hvordan du vil _teste_ og _tracke_ din træning og dine fremskridt.

{% include feature_row id="feature_row_feature" %}

## Restitution

Jeg kan godt lide at træne, men jeg vil stadig gerne gøre det så effektivt som muligt, så jeg også tager højde for restitutionstiden. Hvis jeg gerne vil bygge kroppen op, skal jeg finde en balance mellem træningen og restitutionen.

Læs meget mere om [restitution og restitutionstid]({% link _posts/2020-05-28-restitutionstid-alder.md %}).

Du kan også lade dig inspirere af alle vores indlæg om restitution her:

{% assign site_posts = site.posts | where: "tags", "restitution" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Træningsprogrammer

Det er altid en god ide at have en eller anden form for træningsprogram, når du laver træning. Det vigtigtste er faktisk at have en plan, så du **vedholdende** gider at træne. Vi har skrevet indlæg om, [hvordan du laver dit eget styrketræningsprogram]({% link _posts/2020-08-19-programlaegning.md %}) og [hvad du skal tænke på i et løbeprogram]({% link _posts/2011-04-27-kom-i-gang-med-loebetraeningen.md %}).

Tjek mere på vores side om [træningsprogrammer](/traeningsprogrammer/).

## Træningsøvelser

Du skal vælge passende træningsøvelser til din træning, så du træner det, du gerne vil blive bedre til.

Vi har her på sitet samlet de [bedste træningsøvelser](/traeningsoevelser/), [strækøvelser]({% link _posts/2020-07-08-udstraekning.md %}), [balanceøvelser]({% link _posts/2020-07-16-balancetraening.md %}), [træning af core og kropsstammen]({% link _posts/2020-07-16-coretraening.md %}) og styrketræningsøvelser. Vi har lavet en grundig forklaring af alle øvelserne, og der er både øvelser til styrketræning, konditionstræning, yoga, udstrækning, mobilitet og cardio.

Du kan også tjekke vores dedikerede sider til [øvelser til maven]({% link _pages/exercises-tag-abs.md %}), [armøvelser]({% link _pages/exercises-tag-arme.md %}), [benøvelser]({% link _pages/exercises-tag-ben.md %}), [øvelser til brystet]({% link _pages/exercises-tag-bryst.md %}), [balleøvelser]({% link _pages/exercises-tag-glutes.md %}), [rygøvelser]({% link _pages/exercises-tag-ryg.md %}) eller [skulderøvelser]({% link _pages/exercises-tag-skulder.md %}).

Under alle omsændigheder bør du dykke ned i [alle vores træningsøvelser til inspiration](/traeningsoevelser/).

## Skader og forebyggelse

Skader er desværre ofte en del af det at træne. Med fornuftig træningsplanlægning kan du heldigvis ofte undgå skader, men det kan altid betale sig at arbejde med at forebygge skader også. Skadesforebyggende træning kan nemlig mindske risikoen for skader, så vi dykker ned i aksdesforebyggelse i disse artikler.

{% assign site_posts = site.posts | where: "tags", "skadesforebyggelse" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Træningslære

Når du gerne vil optimere din træning, så kan det være en god ide at vide lidt mere om træningslæren.

Du kan fx dykke ned i vores [omfattende anatomiguide](/anatomi/), [guide til bevægelsesanalyse]({% link _posts/2020-08-01-bevaegelsesanalyse.md %}) eller læse mere om [fysiologi](/fysiologi/).

{% assign site_posts = site.posts | where: "tags", "træningslære" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>
