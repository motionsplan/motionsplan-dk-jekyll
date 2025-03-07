---
layout: single
toc: true
permalink: /beregnere-tests/
redirect_from:
  - /omregn/
excerpt: "Få overblik over de bedste tests og beregnere til træning og sundhed. Test din kondition, styrke og sundhedsprofil med vores værktøjer og guides."
description: "Få overblik over de bedste tests og beregnere til træning og sundhed. Test din kondition, styrke og sundhedsprofil med vores værktøjer og guides."
title: &title "Tests & Beregnere"
seo_title: "Tests & Beregnere - Find din form og sundhed | Motionsplan"
author_profile: true
header:
  overlay_image: https://images.unsplash.com/photo-1475274110913-480c45d0e873?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=630&w=1200&q=60
  caption: *title
  alt: Photo by Clem Onojeghuo on Unsplash
  actions:
    - label: "<i class='fas fa-stopwatch'></i> Tests"
      url: "/tests/"
    - label: "<i class='fas fa-calculator'></i> Beregnere"
      url: "/beregnere/"
    - label: "<i class='fas fa-tools'></i> Værktøjer"
      url: "/vurderingsvaerktoejer/"
breadcrumbs: true
classes: wide
feature_row_navigation:
  - image_path: https://images.unsplash.com/photo-1428790067070-0ebf4418d9d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&h=300&w=400&q=10
    alt: "Tests"
    title: "Tests"
    excerpt: "Udforsk fysiske tests, der måler din kondition, styrke og præstation. Følg din udvikling og se din fremgang."
    url: "/tests/"
    btn_label: "<i class='fas fa-stopwatch'></i> Gå til tests"
    btn_class: "btn--success"
  - image_path: https://images.unsplash.com/photo-1475274110913-480c45d0e873?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=300&w=400&q=10
    alt: "Beregnere"
    title: "Beregnere"
    excerpt: "Brug vores beregnere til at få indsigt i din forbrænding, kondital og BMI. Få detaljeret information om din sundhed."
    url: "/beregnere/"
    btn_label: "<i class='fas fa-calculator'></i> Gå til beregnere"
    btn_class: "btn--success"
  - image_path: https://images.unsplash.com/photo-1546016366-bf061374d54e?auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fit=crop&h=300&w=400&q=10
    alt: "Værktøjer"
    title: "Værktøjer"
    excerpt: "Test din mentale og fysiske sundhed. Få indsigt i dine styrker og opdag områder, der kan forbedres."
    url: "/vurderingsvaerktoejer/"
    btn_label: "<i class='fas fa-tools'></i> Gå til værktøjer"
    btn_class: "btn--success"
feature_row_police_test:
  - image_path: "/assets/images/blog/politiets-fysiske-test.jpeg"
    alt: "Politiets optagelsesprøven"
    title: "Politiets optagelsesprøve"
    excerpt: "Forstå de fysiske krav og tests i politiets optagelsesprøve. Få indsigt i testens opbygning og forbered dig optimalt."
    url: "/politiets-optagelsesproeve/"
    btn_label: "Læs mere"
    btn_class: "btn--success"
---

Her finder du en samlet oversigt over beregnere og tests. De fleste tests har en tilhørende beregner, der hjælper dig med at få dit resultat.

Derudover finder du også beregnere, der kan omregne værdier eller give indsigt i din kost, sundhed og træning.

Find den rette test, beregner eller værktøj til dine behov!

{% include feature_row id="feature_row_navigation" %}

<details markdown="1" class="faq">
  <summary><h3>🏋️‍♀️📏 Antropometri - BMI, taljemål og idealvægt</h3></summary>

Det er meget populært at udregne sin BMI. Jeg har lavet en [BMI beregner](/bmi-beregner/), hvor du kan læse mere om BMI og lave en beregning af dit eget BMI. Tjek også vores [BMI beregner til børn](/bmi-beregner-boern-unge-teenagere/).

Du kan bl.a. prøve vores [beregner til idealvægt](/idealvaegt/), [taljemål](/taljemaal/) og [talje-hofte-forhold](/talje-hofte-ratio/).

</details>

<details markdown="1" class="faq">
  <summary><h3>🧑‍🔬📊 Kropssammensætning - fedtprocent & muskelmasse</h3></summary>

Vi har beskrevet [alle måder at måle fedtprocent på](/maal-fedtprocent/), men der er mange måder at finde sin kropskomposition på.

{% assign site_posts = site.posts | where: "tags", "test" | where: "tags", "kropskomposition" | where: "tags", "metode" | sort: "date" %}

<div class="feature__wrapper" markdown="1">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Alle metoder til kropskomposition](/maal-fedtprocent/){: .btn .btn--success .btn--center }

</div>
</details>

<details markdown="1" class="faq">
  <summary><h3>🍏🔢 Kalorieberegnere - ligevægtsindtag, energi og forbrænding</h3></summary>

Rigtig mange er på udkig efter en kalorieberegner, som kan [udregne dit ligevægtsindtag](/ligevaegtsindtag-beregner/). Det er et af de rigtig populære punkter her på siden.

Jeg har skrevet mere om [forskellige typer kalorieberegnere](/kalorieberegner/).

{% assign site_posts = site.posts | where: "tags", "kalorieberegner" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>
</details>

<details markdown="1" class="faq">
  <summary><h3>💨🫁 Konditionstests - pulszoner og iltoptagelse</h3></summary>

Dit kredsløb og din [maksimale iltoptagelse](/maksimale-iltoptagelse-vo2max/) har stor betydning for din sundhed. Vi har skrevet en del om [kondition og kondital](/kondital/). Men det er også interessant at teste sit eget kondital.

Det kan du gøre på flere forskellige måder, og du kan springe direkte til en [oversigt over alle konditionstests](/kondition/tests/), eller du kan lade dig inspirere af oversigten herunder.

{% assign site_posts = site.posts | where: "tags", "test" | where: "tags", "konditionstest" | where: "tags", "populær" | sort: "date" %}

<div class="feature__wrapper" markdown="1">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Se alle konditionstests](/kondition/tests/){: .btn .btn--success .btn--center }

</div>
</details>

<details markdown="1" class="faq">
  <summary><h3>🏃‍♀️📏 Løbetests - hastighed, puls og vo2max</h3></summary>

Hvis du godt kan lide at løbe, så kan det være en god ide en gang imellem at lave en løbetest, så du kan se, hvordan det går med træningen.

{% assign site_posts = site.posts | where: "tags", "test" | where: "tags", "løbetest" | where: "tags", "populær" | sort: "date" %}

<div class="feature__wrapper" markdown="1">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Se alle løbetests](/kondition/loeb/){: .btn .btn--success .btn--center }

</div>
</details>

<details markdown="1" class="faq">
  <summary><h3>🚶‍♂️📊 Gangtests - skridtlængde & kondition</h3></summary>

Gangtests er ret populære - særligt for folk der ikke har lyst til at lave en maksimal løbetest eller cykeltest. Men faktisk kan alle kaste sig ud i en gåtest. Det er faktisk ikke så let at holde et højt gangtempo over tid.

{% assign site_posts = site.posts | where: "tags", "test" | where: "tags", "gangtest" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>
</details>

<details markdown="1" class="faq">
  <summary><h3>🚴‍♀️💨 Cykeltests - FTP, Wattmax & kondital</h3></summary>

Det er populært at test sig selv på cykel. Nogle af fordelene er, at det er ret let tilgængeligt, og du let kan blive guidet undervejs i testen. Du kan både finde maksimale og submaksimale tests.

{% assign site_posts = site.posts | where: "tags", "test" | where: "tags", "cykeltest" | where: "tags", "populær" | sort: "date" %}

<div class="feature__wrapper" markdown="1">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Se alle cykeltests](/tests/cykling/){: .btn .btn--success .btn--center }

</div>

</details>

<details markdown="1" class="faq">
  <summary><h3>🦘🏋️‍♀️ Springtests & eksplosivitet</h3></summary>

Her kan du finde [tests til eksplosivitet](/eksplosivitet/) og [springtests](/springtests-hoppehoejde/). Her er et lille udpluk af de populære springtests.

{% assign site_posts = site.posts | where: "tags", "springtest" | sort: "date" %}

<div class="feature__wrapper" markdown="1">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Se alle hoppe- og springtests](/springtests-hoppehoejde/){: .btn .btn--success .btn--center }

</div>
</details>

<details markdown="1" class="faq">
  <summary><h3>🧠💭 Psykologiske tests</h3></summary>

{% assign site_posts = site.posts | where: "tags", "psykologisk test" | sort: "date" %}

<div class="feature__wrapper" markdown="1">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Se alle psykologiske tests](/psykiske-sundhedstest/){: .btn .btn--success .btn--center }

</div>
</details>

## De mest populære beregnere

{% assign site_posts = site.posts | where: "tags", "beregner" | where: "tags", "populær" | sort: "date" %}

<div class="feature__wrapper" markdown="1">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Se alle beregnere](/beregnere/){: .btn .btn--success .btn--center }

</div>

## De mest populære tests

{% assign site_posts = site.posts | where: "tags", "test" | where: "tags", "featured" | sort: "date" %}

<div class="feature__wrapper" markdown="1">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Se alle tests](/tests/){: .btn .btn--success .btn--center }
</div>

## Flere tests og prøver

{% include feature_row id="feature_row_police_test" type="left" %}