---
layout: single
title: "Sprinttests: Test din hurtighed, acceleration og tophastighed"
seo_title: "Sprinttests & Hurtighedstests – Mål acceleration og tophastighed"
description: "Komplet guide til videnskabelige sprinttests. Mål din acceleration, tophastighed og sprintudholdenhed med fotoceller, 30m sprint og RAST-test."
excerpt: "Komplet guide til videnskabelige sprinttests. Mål din acceleration, tophastighed og sprintudholdenhed med fotoceller, 30m sprint og RAST-test."
permalink: /tests/sprint/
author_profile: true
toc: true
breadcrumbs: true
classes: wide
header:
  overlay_image: /assets/images/unsplash/photo-1461896836934-ffe607ba8211.jpg
  credit: https://images.unsplash.com/photo-1461896836934-ffe607ba8211
  teaser: /assets/images/unsplash/photo-1461896836934-ffe607ba8211.jpg
  caption: "Sprinttests: Måling af lineær hurtighed og acceleration"
  overlay_filter: "0.3"
category:
  - Eksplosivitet
tags:
  - sprinttest
  - eksplosivitet
  - test
---

**Sprinttests** bruges til at måle din lineære hurtighed, accelerationsevne og spidshastighed over korte distancer. Lineær sprinthurtighed er en af de vigtigste fysiske præstationsfaktorer i alt fra atletik til boldsportsgrene som fodbold, håndbold, rugby og basketball.

For at få præcise målinger og isolere dine styrker og svagheder opdeles sprinttests fysiologisk i tre faser: **acceleration**, **tophastighed** og **sprintudholdenhed**.

---

## De 3 faser i sprinttests

Når du tester din hurtighed, er det afgørende at vælge en test, der måler den specifikke fase, du ønsker at forbedre:

<div class="notice--info" markdown="1">
### 🚀 1. Accelerationstests (0–10 meter)
Måler hvor hurtigt du kan generere maksimal kraft fra en stående start.
* **Typiske distancer:** 5m, 10m og 15m.
* **Anvendelse:** Afgørende for den første eksplosive reaktion og de første meter på banen.
* **Primær test:** **[30-meter sprinttest med fotoceller](/sprinttest-med-sprintceller/)** (måler splittider ved 5m og 10m).
</div>

<div class="notice--success" markdown="1">
### ⚡ 2. Tophastighedstests (Max Velocity)
Måler din maksimale løbehastighed, efter du har overstået accelerationsfasen.
* **Typiske distancer:** Flyvende 10m eller flyvende 20m.
* **Metode:** Atleten tager tilløb og rammer sin tophastighed, før tiden startes over en kort, afmålt distance.
* **Anvendelse:** Vurderer atletens absolutte fartpotentiale.
</div>

<div class="notice--warning" markdown="1">
### 🔄 3. Sprintudholdenhed (Anaerob kapacitet)
Måler din evne til at gentage maksimale sprints med kort pause uden et stort fald i hastighed.
* **Typiske protokoller:** RAST-test ($6 \times 35\text{ m}$) eller gentagne 30m-sprints (RST).
* **Anvendelse:** Udvælgelse og formvurdering i holdidræt, hvor atleter skal sprinte mange gange i løbet af en kamp.
* **Primær test:** **[RAST-test (Repeat Anaerobic Sprint Test)](/rast-test/)**.
</div>

---

## Udstyr og metoder til tidsmåling

Præcision er alt i en sprinttest, da forskellen på et gennemsnitligt og et fremragende resultat ofte udgøres af få hundreddele af et sekund.

* **Fotoceller / Sprintceller:** Den mest præcise og standardiserede testmetode. Laserstråler registrerer automatisk start, splittider og målgang uden menneskelig reaktionsfejl.
* **Stopur:** Kan benyttes til uformelle feltmålinger over længere distancer, men indebærer en manuel usikkerhedsmargen på $0,10\text{–}0,20\text{ sekunder}$.
* **GPS & High-speed video:** Bruges i elitemiljøer til kontinuerlig måling af skridtlængde, frekvens og spidshastighed.

👉 *Læs mere om korrekt opstilling af udstyr i vores guide til **[30m sprinttest med sprintceller](/sprinttest-med-sprintceller/)**.*

---

## Alle sprinttests og måleværktøjer

Herunder finder du vores guides, testprotokoller og tilhørende beregnere til måling af sprinthurtighed:

{% assign site_posts = site.posts | where: "tags", "sprinttest" | sort: "date" %}

{% if site_posts.size > 0 %}
<div class="feature__wrapper">
  {% for post in site_posts %}
    {% include_cached archive-single.html post=post type="grid" %}
  {% endfor %}
</div>
{% else %}
<p>Udforsk vores guides til acceleration, tophastighed og sprintceller ovenfor.</p>
{% endif %}

---

## Forskellen på sprint og retningsskift

Det er vigtigt at adskille **lineær sprint** fra **retningsskift og agilitet**:

* **Lineær sprint (denne side):** Test af maksimal acceleration og fart i en lige linje uden opbremsning.
* **Retningsskift & Agilitet (CODS):** Test af din evne til at bremse op, skifte retning og accelerere igen i en ny vinkel.

👉 *Vil du teste din agilitet og evne til hurtige vendinger? Gå til vores kategori for **[retningsskift og agilitetstests](/retningsskift-test/)**.*