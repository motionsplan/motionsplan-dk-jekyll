---
layout: single
title: &title "Træningslære – Forstå effekten af træning"
seo_title: "Træningslære – Optimér din træning med viden om kroppen"
excerpt: Lær hvordan fysiologi, anatomi, biomekanik og træningsprincipper hænger sammen, og optimer din træning effektivt.
permalink: /traeningslaere/
author_profile: true
toc: true
feature_row_optimering:
  - image_path: https://images.unsplash.com/photo-1620213391117-0d169a917221?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&h=300&w=400&q=10
    alt: "Sådan optimerer du din træning"
    title: "Optimer din træning"
    excerpt: "Træning handler først og fremmest om at nyde det. Men derfor kan man jo godt arbejde med at optimere træningen også. Her har vi samlet en række emner, som kan være med til at optimere din træning."
    url: "/optimer-traening/"
    btn_label: "Læs mere"
    btn_class: "btn--info"
header:
  overlay_image: https://images.unsplash.com/photo-1453847668862-487637052f8a?q=60&w=1200&h=630&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
  teaser: https://images.unsplash.com/photo-1453847668862-487637052f8a?q=60&w=400&h=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
  caption: *title
feature_row_anatomi:
  - image_path: /assets/images/anatomy/blank-muscle-anatomy.jpg
    alt: "Muskeloversigt"
    title: "Interaktiv muskeloversigt"
    excerpt: "Vil du blive klogere på musklernes placering, så kan du prøve den interaktive muskeloversigt. Vi synes selv den er ret cool."
    url: "/muskler/"
    btn_label: "Prøv den"
    btn_class: "btn--danger"
feature_row_principles:
  - image_path: https://images.unsplash.com/photo-1541757088-1c919081357f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&q=60
    alt: "Træningsprincipper"
    title: "Træningsprincipper"
    excerpt: "Bliv klogere på de vigtigste træningsprincipper, som du kan vurdere god træning efter. Specificitet, progression, håndtering af træthed er nogle af de vigtigste."
    url: "/traeningsprincipper/"
    btn_label: "10 træningsprincipper"
    btn_class: "btn--info"
feature_row_planning:
  - image_path: https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=60
    alt: "Træningsplanlægning"
    title: "Træningsplanlægning"
    excerpt: "Vil du gerne lave dine egne træningsprogrammer, så tjek vores guide til træningsplanlægning og programlægning. Du får konkrete råd til, hvordan du kommer videre med din egen planlægning."
    url: "/traeningsplanlaegning/"
    btn_label: "Lær om træningsplanlægning"
    btn_class: "btn--info"
breadcrumbs: true
classes: wide
feature_row_biomekanik:
  - image_path: "/assets/images/blog/biomekanik-squat.jpg"
    alt: "Biomekanik i squat - se dig selv som en tændstikmand"
    title: "Squat model"
    excerpt: "I squat kan du indstille en tændstikmand til at have dine kropsmål for: overkrop, lår og underben. Så kan du se, hvordan løftet alt andet lige vil se ud."
    url: "/squat-biomekanik/"
    btn_label: "Prøv det"
    btn_class: "btn--primary"
  - image_path: "/assets/images/blog/biomekanik-benchpress.jpg"
    alt: "Biomekanik i bænkpres - forstå kraftoverførsel"
    title: "Bænkpres model"
    excerpt: "I bænkpres kan du indstille, hvordan du ligger på bænken, og hvordan du gerne vil have stangens bane til at være. Gør det individuelt med din armlængde."
    url: "/baenkpres-biomekanik/"
    btn_label: "Prøv det"
    btn_class: "btn--primary"
  - image_path: "/assets/images/blog/biomekanik-doedloeft.jpg"
    alt: "Biomekanik i dødløft - den rette løftevinkel"
    title: "Dødløft model"
    excerpt: "I dødløft kan du indstille en tændstikmand med længden på din overkrop, lårben og underben. Se, hvordan et konventionelt dødløft alt andet lige vil se ud."
    url: "/doedloeft-biomekanik/"
    btn_label: "Prøv det"
    btn_class: "btn--primary"
---

Træningslære er fundamentet for at forstå, hvordan kroppen reagerer på træning og hvordan du kan optimere din fysiske ydeevne. Ved at forstå kroppens fysiologi, biomekanik og de [grundlæggende træningsprincipper](/traeningsprincipper/), kan du tilpasse din træning for at opnå de bedste resultater, samtidig med at du undgår skader.

Denne guide giver dig et indblik i, hvordan musklerne arbejder, hvordan restitution fungerer, og hvordan du kan anvende træningsteorier i praksis for at opbygge en stærk og sund krop. Uanset om du er begynder eller erfaren, er træningslære en vigtig del af din træningsrejse.

## Sådan laver du din egen træningsplanlægning

{% include feature_row id="feature_row_planning" type="left" %}

## 10 principper i træningslæren

{% include feature_row id="feature_row_principles" type="left" %}

## Artikler om træningslære

{% assign site_posts = site.posts | where: "tags", "træningslære" | sort: "last_modified_at" | reverse %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Emner inden for træningslæren

<details markdown="1" class="faq">
  <summary><h3 id="fysiologi">🧬 Fysiologi</h3></summary>

Hvis du vil forstå, hvordan træning virker i kroppen, så er det godt at dykke ned i kroppens fysiologi.

Kroppen består af virkelig mange forskellige specialiserede celler. Alle levende organismer styres af overlevelsesmekanismer, som kan beskrives ved disse tre principper.

[Læs meget mere om fysiologi](/fysiologi/).
</details>

<details markdown="1" class="faq">
  <summary><h3 id="anatomi">🦴 Anatomi</h3></summary>

Anatomi er læren om hvordan de forskellige strukturer i kroppen er opbygget, hvordan de forskellige celler er opbygget, hvordan disse igen samler sig til væv, organer og systemer i kroppen. Her kan du læse mere om de forskellige grene i anatomien.

- [Grundlæggende anatomi](/anatomi/)
- [Muskler](/muskler/)
- [Knogler](/knogler/)
- [Led](/led/)
</details>

<details markdown="1" class="faq">
  <summary><h3 id="biomekanik">⚙️ Biomekanik</h3></summary>

For at forstå, hvordan kroppen bevæger sig under træning, er det vigtigt at lære om biomekanik. Biomekanik beskæftiger sig med de fysiske love og principper, der styrer bevægelser i kroppen, som fx kraft, bevægelse og leddenes funktion.

Kroppens bevægelser påvirkes af både muskelkræfter og de mekaniske forhold mellem knogler og led. Denne viden kan være essentiel for at optimere din træning og præstation.

[Læs meget mere om biomekanik](/biomekanik/).
</details>

## Biomekanik - se dig selv som en tændstikmand

På nedenstående modeller kan du indtaste dine egne kropsmål og se dig selv som en tændstikmand, mens du er i gang med at løfte et af dine favoritløft.

{% include feature_row id="feature_row_biomekanik" %}

## Anatomi - prøv vores muskeloversigt

{% include feature_row id="feature_row_anatomi" type="left" %}

## Optimer din træning

{% include feature_row id="feature_row_optimering" type="left" %}