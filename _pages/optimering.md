---
layout: single
title: "Optimer træningen"
seo_title: "Sådan optimerer du din træning"
permalink: /optimer-traening/
excerpt: "Træning handler først og fremmest om at nyde det. Men derfor kan man jo godt arbejde med at optimere træningen også. Her har vi samlet en række emner, som kan være med til at optimere din træning."
header:
  overlay_image: https://images.unsplash.com/photo-1620213391117-0d169a917221?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&h=630&w=1200&q=60
  teaser: https://images.unsplash.com/photo-1620213391117-0d169a917221?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&h=300&w=400&q=10
  caption: Optimering af træningen
author_profile: true
author: lsolesen
feature_row_feature:
  - image_path: https://images.unsplash.com/photo-1428790067070-0ebf4418d9d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&h=300&w=400&q=10
    alt: "Tests"
    title: "Tests"
    excerpt: "Du kan bruge tests før, under og efter din træningperioder, så du kan se om dit træningsprogram virker."
    url: "/tests/"
    btn_label: "Test"
    btn_class: "btn--info"
  - image_path: https://images.unsplash.com/photo-1475274110913-480c45d0e873?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=300&w=400&q=10
    alt: "Træning"
    title: "Træning"
    excerpt: "Fremgang kræver naturligvis træning. Vi har samlet viden om forskellige træning til inspiration her."
    url: "/traening/"
    btn_label: "Træn"
    btn_class: "btn--success"
  - image_path: https://images.unsplash.com/photo-1501820434261-5bb046afcf6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=300&w=400&q=10
    alt: "Tracking"
    title: "Tracking"
    excerpt: "Du kan holde styr på din træning med fx en træningslog eller _tracke_ din træning på andre måder."
    url: "/tracking/"
    btn_label: "Track"
    btn_class: "btn--info"
toc: true
breadcrumbs: true
classes: wide
---

{{ page.excerpt }}

Når du træner, så håber du på at du bliver bedre til det du gør, eller din krop tilpasser sig de udfordringer, du stiller den. Hvis du skal blive bedre, så skal du øve dig. Men optimering af træning handler ikke kun om selve træningen. Effektiv træning handler også om [hvordan du restituerer fra træningen](/restitution/), hvilke [træningsprogrammer du vælger](/traeningsprogrammer/) og hvilke [træningsøvelser](/traeningsoevelser/) du bruger.

## Test - træn - track

Hvis du træner for at blive bedre til noget, så synes jeg, at det kan være meget motiverende at planlægge træningen på en god måde. I dit træningsprogram så kan du tænke over, hvordan du vil _teste_ og _tracke_ din træning og dine fremskridt.

{% include feature_row id="feature_row_feature" %}

## Restitution

Jeg kan godt lide at træne, men jeg vil stadig gerne gøre det så effektivt som muligt, så jeg også tager højde for restitutionstiden. Hvis jeg gerne vil bygge kroppen op, skal jeg finde en balance mellem træningen og restitutionen.

Lad dig inspirere af vores anbefalede indlæg om restitution her:

{% assign site_posts = site.posts | where: "tags", "restitution" | where: "tags", "anbefalet" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper" markdown="1">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Læs alt om restitution](/restitution/){: .btn .btn--success .btn--center }

</div>

## Træningsprogrammer

Det er altid en god ide at have en eller anden form for træningsprogram, når du laver træning. Det vigtigtste er faktisk at have en plan, så du **vedholdende** gider at træne. Vi har skrevet indlæg om, [hvordan du laver dit eget styrketræningsprogram](/traeningsprogram-programlaegning-styrketraening/) og [hvad du skal tænke på i et løbeprogram](/artikel/kom-i-gang-med-loebetraeningen/).

{% assign site_posts = site.posts | where: "tags", "træningsprogram" | where_exp: "post", "post.url != page.url" | sort: "last_modfied_at" | reverse %}

<div class="feature__wrapper" markdown="1">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 8 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Se alle træningsprogrammer](/traeningsprogrammer/){: .btn .btn--success .btn--center }

</div>

## Træningsøvelser

Du skal vælge passende træningsøvelser til din træning, så du træner det, du gerne vil blive bedre til.

Vi har her på sitet samlet de [bedste træningsøvelser](/traeningsoevelser/), [strækøvelser](/udstraekning-udspaending/), [balanceøvelser](/balancetraening/), [træning af core og kropsstammen](/core/) og styrketræningsøvelser. Vi har lavet en grundig forklaring af alle øvelserne, og der er både øvelser til styrketræning, konditionstræning, yoga, udstrækning, mobilitet og cardio.

Du kan også tjekke vores dedikerede sider til [øvelser til maven](/maveoevelser/), [armøvelser](/arme-triceps-biceps/), [benøvelser](/benoevelser/), [øvelser til brystet](/brystoevelser/), [balleøvelser](/balleoevelser/), [rygøvelser](/rygoevelser/) eller [skulderøvelser](/skulderoevelser/).

[Se alle vores træningsøvelser til inspiration](/traeningsoevelser/){: .btn .btn--success .btn--center }

## Skader og forebyggelse

Skader er desværre ofte en del af det at træne. Med fornuftig træningsplanlægning kan du heldigvis ofte undgå skader, men det kan altid betale sig at arbejde med at forebygge skader også.

Skadesforebyggende træning kan nemlig mindske risikoen for skader, så vi dykker ned i skadesforebyggelse i disse artikler.

{% assign site_posts = site.posts | where: "tags", "skadesforebyggelse" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper" markdown="1">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Alt om skader og skadesforebyggelse](/skader/){: .btn .btn--success .btn--center }

</div>

## Træningslære

Når du gerne vil optimere din træning, så kan det være en god ide at vide lidt mere om træningslæren.

Du kan fx dykke ned i vores [omfattende anatomiguide](/anatomi/), [guide til bevægelsesanalyse](/bevaegelsesanalyse/) eller læse mere om [fysiologi](/fysiologi/).

{% assign site_posts = site.posts | where: "tags", "træningslære" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Alt om træningslæren](/traeningslaere/){: .btn .btn--success .btn--center }

</div>
