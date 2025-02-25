---
layout: single
permalink: /kondition/tests/
title: &title "Konditionstests - mål din kondition"
seo_title: "Konditionstests: 10+ tests af din kondition og VO2max"
excerpt: "Find den rette konditionstest for dig i vores detaljerede oversigt. Mål kondition, VO2 max og kondital for at forbedre din form."
header:
  overlay_image: https://images.unsplash.com/photo-1475274110913-480c45d0e873?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=630&w=1200&q=10
  caption: *title
  alt: Photo by Clem Onojeghuo on Unsplash
  actions:
    - label: "<i class='fas fa-download'></i> Se alle konditionstests"
      url: "/kondition/tests/#oversigt-over-konditionstests"
classes: wide
feature_row_about_tests:
  - image_path: https://images.unsplash.com/photo-1501820434261-5bb046afcf6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=300&w=400&q=10
    alt: "Om kondition og tests"
    title: "Om kondition og tests"
    excerpt: "Kommer jeg i bedre form og kondition? Der findes mange måder at teste og udregne dit kondital og iltoptagelse med vores beregnere. Kig i tabellen for at finde nøjagtig den test, du helst vil lave."
author_profile: true
feature_row_kondital:
  - image_path: https://images.unsplash.com/photo-1616877217977-fe8d019afd76?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&q=10
    alt: "Hvad er en god kondition?"
    title: "Kondition måles med konditallet"
    excerpt: "Svaret på hvad et godt kondital er afhænger naturligvis af hvem man sammenligner sig med. Her er tabeller gældende for almindelige mennesker i Skandinavien."
    url: "/kondital/"
    btn_label: "Sammenlign dit kondital"
    btn_class: "btn--info"
feature_row_train_fitness:
  - image_path: https://images.unsplash.com/photo-1529795533870-ea8020391255?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=300&w=400&q=10
    alt: "Hvordan forbedrer jeg min kondition?"
    title: "Hvordan forbedrer jeg min kondition?"
    excerpt: "Når du har fået svar på, hvad dit kondital er, så er du nok interesseret i at vide, hvordan du kan forbedre din kondition. Det har vi heldigvis skrevet meget mere om."
    url: "/konditionstraening/"
    btn_label: "Læs om konditionstræning"
    btn_class: "btn--info"
#faq:
#  - question: "FAQ-spørgsmål"
#    answer: "FAQ-svar kommer der en masse af her, når jeg lige finder ud af, hvad jeg bør skrive."
last_modified_at: 2025-02-18T22:21:26Z
breadcrumbs: true
toc: true
---

Vil du vide, hvor god din kondition er? En konditionstest kan give dig indsigt i din VO2 max, udholdenhed og kondital. Uanset om du er nybegynder eller erfaren, findes der en test, der passer til dit niveau.

En konditionstest er en effektiv måde at vurdere din fysiske form på. Ved at måle din kondition, så kan du få indsigt i, om din træning virker.

Her for du en oversigt over de mest populære konditionstests, så du kan vælge nøjagtigt den test, der passer bedst til dine mål.

## Hvorfor tage en konditionstest?

- Måle din kondition og udholdenhed.
- Sætte mål og følge fremgang.
- Få en objektiv vurdering af din fysiske form.

Læs: [Alt om kondition](/kondition/)
{: .notice }

## Hvad måler en konditionstest?

<details markdown="1">
  <summary>🫀 Kondition (din aerobe kapacitet)</summary>

  {% comment %}TODO{% endcomment %}
</details>


<details markdown="1">
  <summary>🫁 Maksimal iltoptagelse (VO<sub>2</sub>max)</summary>

  {% comment %}TODO{% endcomment %}
</details>
<details markdown="1">
  <summary>💨 Kondital (din maksimale iltoptagelse i forhold til din kropsvægt)</summary>

  {% comment %}TODO{% endcomment %}
</details>

## Mest populære tests

Der er selvfølgelig nogle tests som er særligt populære. Hvis du ikke har prøvet dem endnu, så kunne det måske være et godt sted at starte.

Ellers kan du kigge længere nede, hvor du får en oversigt over alle konditionstests.

{% assign site_posts = site.posts | where: "tags", "konditionstest" | where: "tags", "featured" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Oversigt over konditionstests

Her har du en oversigt over alle de forskellige måder du kan teste din kondition på, så du kan vælge hvilken test, der passer bedst til dig.

{% assign site_posts = site.posts | where: "tags", "konditionstest" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="full" markdown="1">
{% if site_posts.size > 0 %}
| Test | Måler | Udstyr | Type | Hårdhed | Målgruppe |
|------|-------|--------|------|---------|-----------|
  {%- for post in site_posts %}
| [{{ post.meta.name | default: post.title  }}]({{ post.url }}) | {{ post.meta.measures }} | {{ post.meta.equipment }} | {{ post.meta.type }} | {{ post.meta.max }} | {{ post.meta.target | default: "voksne" }} |
  {%- endfor %}
{% endif %}
</div>

## Sådan vælger du den rette test

{% include feature_row id="feature_row_about_tests" type="left" %}

## Hvad er god kondition?

{% include feature_row id="feature_row_kondital" type="left" %}

## FAQ - Ofte stillede spørgsmål

{% include motionsplan/faq.html %}

## Løb - test dig selv i vores løbetests

Vil du teste din kondition eller løbepræstation? Der findes flere velafprøvede testmetoder, som kan hjælpe dig med at vurdere din form og udvikling. Tjek disse ud:

{% assign site_posts = site.posts | where: "tags", "konditionstest" | where: "tags", "løbetest" | where: "tags", "populær" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper" markdown="1">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Se alle løbetests](/tests/loeb/){: .btn .btn--success .btn--center }

</div>

## Cykling - prøv vore cykeltests

Vil du vil måle din kondition eller præstation på cyklen? Der findes flere forskellige testmetoder, der giver dig en værdifuld indsigt i din form. De mest relevante kunne være:

{% assign site_posts = site.posts | where: "tags", "konditionstest" | where: "tags", "cykeltest" | where: "tags", "populær" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper" markdown="1">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Se alle cykeltests](/tests/cykling/){: .btn .btn--success .btn--center }

</div>

## Gang - prøv vores gå tests

{% assign site_posts = site.posts | where: "tags", "konditionstest" | where: "tags", "gangtest" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Submaksimale konditionstests

Fordelen ved en submaksimal konditionstest er, at det er lettere at overskue at få lavet testen. Samtidig kan du gentage den oftere.

Til gengæld er den typisk ikke lige så præcis. Her kan du finde nogle af de mest populære submaksimale tests, men få mere inspiration i tabellen ovenfor.

{% assign site_posts = site.posts | where: "tags", "submaksimal test" | where: "tags", "populær" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Maksimale konditionstests

En maksimal test er typisk mere præcis til at estimere dit kondital. Konditallet er jo et udtryk for din maksimale iltoptagelse, og derfor er det også sandsynligt at de maksimale tests er bedre til at give dig det rette kondital.

Til gengæld er det også virkelig hårdt at skulle lave en maksimal test, og du skal gerne have sat dig mentalt op til præstationen.

Her er de mest populære, ellers få endnu mere inspiration i tabellen ovenfor.

{% assign site_posts = site.posts | where: "tags", "maksimal test" | where: "tags", "populær" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 8 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Hvordan træner jeg min kondition?

{% include feature_row id="feature_row_train_fitness" type="left" %}

## Afslutning

Nu har du overblikket over de bedste konditionstests. Hvilken vil du prøve først? Gå videre til den test, der passer bedst til dine mål, og brug vores beregnere til at analysere dine resultater.