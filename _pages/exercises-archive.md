---
layout: single
permalink: /traeningsoevelser/
redirect_from:
  - /exercise-search/
title: &title "Træningsøvelser: De bedste øvelser til træning 🏋"
seo_title: "Træningsøvelser – styrke, udstrækning, yoga og balance"
excerpt: "Vi har samlet de bedste træningsøvelser. Vi har lavet en grundig forklaring af alle øvelserne, og der er både øvelser til styrketræning, konditionstræning, yoga, udstrækning, mobilitet og cardio."
description: "Find træningsøvelser til styrke, udstrækning, yoga og balance. Få inspiration til øvelser, der forbedrer din mobilitet, stabilitet og styrke."
comments: false
author_profile: true
gallery:
  - image_path: https://i.pinimg.com/564x/3f/17/84/3f17845a79b4552c5fbbcbd584d1c36a.jpg
    url: https://i.pinimg.com/564x/3f/17/84/3f17845a79b4552c5fbbcbd584d1c36a.jpg
    alt: *title
    title: *title
    data_pin_id: 579768152024756849
sidebar:
  nav: exercises
toc: true
category:
  - Træning
breadcrumbs: true
classes: wide
---

Vi har samlet de bedste træningsøvelser, udstrækningsøvelser og styrketræningsøvelser. Vi har lavet en grundig forklaring af alle øvelserne, og der er både øvelser til styrketræning, konditionstræning, yoga, udstrækning, mobilitet og cardio.

Hvis du er på udkig efter [maveøvelser](/maveoevelser/), [armøvelser](/arme-triceps-biceps/), [benøvelser](/benoevelser/), [brystøvelser](/brystoevelser/), [balleøvelser](/balleoevelser/), [rygøvelser](/rygoevelser/), [skulderøvelser](/skulderoevelser/), så har vi lavet en selvstændig side om de muskelgrupper. Vi har også skrevet selvstændigt om [balanceøvelser](/balance/), [coretræning](/core/) eller [udstrækningsøvelser](/udstraekning-udspaending/).

**Hvis ud gerne vil hjælpe med at forbedre beskrivelserne, eller der mangler den helt perfekte øvelse, så skriv endelig.**

## Forskellige træningsformer

{% assign site_posts = site.posts | where: "category", "Træning" | where: "tags", "moc" | where_exp: "post", "post.url != page.url" | sort: "last_modfied_at" | reverse %}

<div class="feature__wrapper" markdown="1">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

[Se alle træningsformer](/traeningsformer/){: .btn .btn--success .btn--center }

</div>

## Senest opdaterede øvelser

Her kan du se de nyeste træningsøvelser.

<div class="feature__wrapper">

{% assign site_posts = site.exercises | where: "tags", "featured" | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Træningsøvelser efter muskelgrupper

<details markdown="1" class="faq">
  <summary>🏋️ Maveøvelser, mavetræning og coretræning</summary>

Vi har en lang række maveøvelser, der styrker din core og kropsstamme. Øvelserne kan udføres med kropsvægt, håndvægte, elastikker, bolde eller hjul. 

Læs mere om [coretræning](/core/) og [fedttab på maven]({% link _posts/2020-07-07-mavefedt.md %}).

[Se alle maveøvelser](/maveoevelser/).
</details>

<details markdown="1" class="faq">
  <summary>💪 Armøvelser (biceps, triceps, underarme)</summary>

Vi har samlet de bedste armøvelser til biceps, triceps og underarme – både med frie vægte og kropsvægt. 

Læs mere om [armøvelser her](/arme-triceps-biceps/).
</details>

<details markdown="1" class="faq">
  <summary>🦵 Benøvelser (squat, lunges, benpres)</summary>

Bentræning kan foregå både med frie vægte og maskiner. Squat, lunges og dødløft er fundamentale øvelser, men vi dækker også leg extensions, benpres og træning med Safety Squat Bar.

[Tjek alle benøvelser](/benoevelser/).
</details>

<details markdown="1" class="faq">
  <summary>🏋️‍♂️ Brystøvelser (bænkpres, push-ups)</summary>

Træn dit bryst effektivt med vægtstang, håndvægte, kabler eller elastikker. Vi guider dig til den bedste teknik og variation.

[Se alle brystøvelser](/brystoevelser/).
</details>

<details markdown="1" class="faq">
  <summary>🍑 Balleøvelser (hip thrust, glute bridge)</summary>

Ballemusklerne arbejder i mange bevægelser. Vi har samlet de mest effektive øvelser, som du kan lave både hjemme og i træningscenteret.

[Se alle balleøvelser](/balleoevelser/).
</details>

<details markdown="1" class="faq">
  <summary>💪 Rygøvelser (pull-ups, dødløft, rows)</summary>

Din ryg skal udfordres med effektive øvelser. Rows og pull-ups træner ryggen i både horisontale og vertikale træk, mens dødløft aktiverer hele bagsiden.

[Se alle rygøvelser](/rygoevelser/).
</details>

<details markdown="1" class="faq">
  <summary>🏋️‍♀️ Skulderøvelser (militærpres, lateral raises)</summary>

Skuldertræning kræver en god balance mellem styrke og stabilitet. Læs om træning af bagskulderen, rotatormanchetten og variationer af presøvelser.

[Se alle skulderøvelser](/skulderoevelser/).
</details>

<details markdown="1" class="faq">
  <summary>⚖️ Balanceøvelser (single-leg stance, bosu-træning)</summary>

Balancetræning er vigtigt for skadesforebyggelse og stabilitet. Vi gennemgår de bedste balanceøvelser, du kan integrere i din træning.

[Læs mere om balance og balanceøvelser](/balance/).
</details>

## Træningsøvelser efter funktion

<details markdown="1" class="faq">
  <summary>🦵 Knædominante øvelser (squat, lunges)</summary>

Knædominerede øvelser aktiverer forlår, baglår og baller. Squat og lunges er essentielle for underkropsstyrke.

[Se knædominante øvelser](/knaedominante-oevelser/)
</details>

<details markdown="1" class="faq">
  <summary>🍑 Hoftedominante øvelser (dødløft, hip hinge)</summary>

Hoftedominerede øvelser fokuserer på baglår, baller og den nedre ryg. En korrekt hip hinge-teknik er afgørende for at løfte tungt uden at overbelaste ryggen.

[Se hoftedominante øvelser](/hoftedominante-oevelser/)
</details>

<details markdown="1" class="faq">
  <summary>🪝 Trækøvelser (rows, pull-ups)</summary>

Trækøvelser træner øvre ryg, skuldre og biceps. Vi ser på både horisontale træk som barbell row og vertikale træk som pull-ups.

[Se alle trækøvelser](/traekoevelser/)
</details>

<details markdown="1" class="faq">
  <summary>➡️ Presøvelser (bænkpres, skulderpres)</summary>

Presøvelser styrker bryst, skuldre og triceps. Horisontale pres involverer bænkpres, mens vertikale pres inkluderer skulderpres og dips.

[Se alle presøvelser](/presoevelser/)
</details>

<details markdown="1" class="faq">
  <summary>🏋️ Coreøvelser (planke, hanging leg raises)</summary>

Core-træning handler om stabilitet i mave, bækken og ryg. Vi gennemgår både statiske og dynamiske øvelser.

[Se alle coreøvelser](/core/)
</details>

<details markdown="1" class="faq">
  <summary>🔄 Rotation og anti-rotation (Russian twists, Pallof press)</summary>

Rotationsøvelser træner skrå mavemuskler, mens anti-rotation styrker kropsstabiliteten.
</details>

<details markdown="1" class="faq">
  <summary>🚶 Bæreøvelser (farmer’s walk, bear hug walk)</summary>

Bæreøvelser forbedrer grebsstyrke, corestabilitet og kropskontrol. Farmer’s walk og bear hug walk er gode eksempler.
</details>

## Typer træningsøvelser

<details markdown="1" class="faq">
  <summary>🤸 Stræk- og smidighedsøvelser (dynamisk og statisk udstrækning)</summary>

Udstrækning bruges i mange idrætsgrene. Dynamiske øvelser forbedrer bevægelighed, mens statiske øger fleksibilitet.

[Læs mere om strækøvelser og smidighedstræning](/udstraekning-udspaending/)
</details>

<details markdown="1" class="faq">
  <summary>🎾 Foamrolling og trigger point-massage</summary>

Foamrolling løsner spændte muskler og trigger points. Lacrossebolde kan bruges til mere præcis massage.

[Læs mere om foamrolling og self-myofascial release](/foamrolling-foamroller-lacrossebolde/).
</details>

## Artikler om træningsøvelser

<div class="feature__wrapper">

{% assign site_posts = site.posts | where: "tags", "træningsøvelse" | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Alle {{ site.exercises.size }} træningsøvelser til træning

Vi har i alt samlet {{ site.exercises.size }} træningsøvelser, som du kan bruge i din træning.

<div class="feature__wrapper">

{% assign site_posts = site.exercises | sort: "title" %}

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>
