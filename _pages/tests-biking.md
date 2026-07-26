---
layout: single
title: "Cykeltests: FTP, Kondition og Eksplosivitet 🚴‍♂️"
seo_title: "Cykeltests: Test FTP, Kondition og Watt på Cykel"
excerpt: "Den komplette oversigt over cykeltests. Find din FTP, test din maksimale iltoptagelse (VO2max) eller mål din eksplosive sprintstyrke."
description: "Find den rette cykeltest til din træning. Prøv vores FTP-test beregnere, Åstrand-konditionstests, Wattmax og anaerobe sprinttests."
permalink: /tests/cykling/
toc: 'true'
author_profile: 'true'
header:
  overlay_image: /assets/images/unsplash/photo-1452573992436-6d508f200b30.jpg
  credit: https://images.unsplash.com/photo-1452573992436-6d508f200b30
  teaser: /assets/images/unsplash/photo-1452573992436-6d508f200b30.jpg
  caption: 'Cykeltests: Test din præstation på cyklen'
breadcrumbs: 'true'
feature_row_training:
- image_path: /assets/images/unsplash/photo-1546778316-dfda79f1c84e.jpg
  credit: https://images.unsplash.com/photo-1546778316-dfda79f1c84e
  alt: Sådan forbedrer du dine resultater
  title: Træn og få bedre resultater
  excerpt: 'Brug dine testresultater til at målrette din træning og forbedre din præstation. Med den rette indsats kan du opnå endnu bedre resultater næste gang! Find flere træningstips her 🚴‍♂️💪'
  url: /cykling/
  btn_label: Læs mere
  btn_class: btn--success
classes: wide
last_modified_at: 2026-03-29T17:21:31.000Z
---

Hvad enten du vil kende din **FTP** (*Functional Threshold Power*) til struktureret watt-træning, estimere dit [kondital](/kondital/), eller måle din eksplosive sprintstyrke på cyklen, finder du den rette testmetode og beregner herunder.

Regelmæssig testning gør det muligt at fastsætte dine præcise træningszoner, spore din fremgang og optimere din præstation på cyklen.

---

## 1. FTP & Ydeevnetests (De mest populære)

For cykelryttere og triatleter er FTP-testen det vigtigste redskab til at bestemme watt-zoner og tærskelstyrke.

<div class="feature__wrapper">
  
  <div class="archive__item" style="background:#f8f9fa; border:1px solid #e9ecef; border-radius:10px; padding:20px; margin-bottom:15px;">
    <h3 style="margin-top:0;">⚡ 20-minutters FTP-test</h3>
    <p><strong>Formål:</strong> Fastsæt dine watt-zoner • <strong>Type:</strong> Maksimal tærskeltest</p>
    <p>Guldstandarden inden for cykeltræning. Kør alt hvad du kan i 20 minutter for at beregne din Functional Threshold Power (FTP) og dine trænigszoner.</p>
    <a href="/ftp-test/" class="btn btn--success">Beregn din FTP her »</a>
  </div>

  <div class="archive__item" style="background:#f8f9fa; border:1px solid #e9ecef; border-radius:10px; padding:20px; margin-bottom:15px;">
    <h3 style="margin-top:0;">📈 Ramp Test</h3>
    <p><strong>Formål:</strong> Hurtig FTP-bestemmelse • <strong>Type:</strong> Trinvis udmattelse</p>
    <p>Et populært alternativ til 20-minutters testen. Belastningen stiger løbende hvert minut indtil udmattelse, hvorfra din FTP estimeres automatisk.</p>
    <a href="/trappetest-cykel/" class="btn btn--info">Se Ramp Test beregner »</a>
  </div>

</div>

---

## 2. Konditionstests & VO2max (Iltoptagelse)

Det er altid interessant at teste sin kondition, sin [maksimale iltoptagelse](/maksimale-iltoptagelse-vo2max/) og sit [kondital](/kondital/). Her har jeg samlet alle konditionstests til cykling her på Motionsplan.

Kommer jeg i bedre form og kondition? Udregn dit kondital og iltoptagelse med vores beregnere og se om du får et bedre kondital og fremgang i træningen. Du kan se en mere uddybende side om [konditionstests](/kondition/tests/).

Testmetoder til at måle din maksimale iltoptagelse ($VO_2\text{max}$) og dit generelle helbreds-kondital – både submaksimalt (uden udmattelse) og maksimalt.

| Testmetode | Type | Tidsforbrug | Beskrivelse & Formål |
| :--- | :--- | :--- | :--- |
| **[Åstrand 1-punktstest](/etpunktstest/)** | Submaksimal | 6 min. | Hurtig og skånsom test baseret på puls ved én fast belastning. |
| **[Åstrand 2-punktstest](/topunktstest/)** | Submaksimal | 10-12 min. | Højere præcision med to pulstrin. Kører dig ikke helt i sænk. |
| **[Wattmax-test](/kondital-wattmax/)** | Maksimal | 10-15 min. | Trinvis belastning til udmattelse. Præcis måling af max iltoptagelse. |

---

{% assign site_posts = site.posts | where: "tags", "cykeltest" | where: "tags", "konditionstest" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include_cached archive-single.html post=post type="grid" %}
  {% endfor %}
{% endif %}

</div>

---

## 3. Eksplosive & Anaerobe Tests (Sprint & Power)

Tests til dig, der vil måle din absolutte spidseffekt (Peak Power), din evne til kortvarige eksplosive accelerationer og din syretolerance.

* **[Wingate-testen](/wingate/):** Den klassiske 30-sekunders all-out sprinttest på cykelergometer til måling af anaerob kapacitet og effektfald.
* **[Peak Power Test (5-15 sekunder)](/6sek/):** Måler din rene rå maks-watt i en stående sprint.

---

## Alle cykeltests

Cykling kan være en rigtig god måde at teste sig selv på. Her har jeg samlet en oversigt over alle cykeltests her på siden. Det er en blanding af de anaerobe tests og konditionstests.

{% assign site_posts = site.posts | where: "tags", "cykeltest" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include_cached archive-single.html post=post type="grid" %}
  {% endfor %}
{% endif %}

</div>

---

## Populære beregnere til cykling

{% assign site_posts = site.posts | where: "tags", "beregner" | where: "tags", "cykling" | sort: "date" %}

<div class="feature__wrapper" markdown="1">

{% if site_posts.size > 0 %}
  {% for post in site_posts limit: 4 %}
    {% include_cached archive-single.html post=post type="grid" %}
  {% endfor %}
{% endif %}

[Se alle vores beregnere](/beregnere/){: .btn .btn--success .btn--center }

</div>

{% include feature_row type="center" id="feature_row_training" type="left" %}
