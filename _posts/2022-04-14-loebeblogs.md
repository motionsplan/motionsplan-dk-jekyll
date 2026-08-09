---
title: De bedste løbeblogs, løbesites og kilder til løbeinspiration
seo_title: "De bedste løbeblogs og løbesites: Inspiration til din løbetræning"
description: Leder du efter de bedste løbeblogs og løbesites? Få overblikket over stærke danske løbesider, løbeberegnere og kilder til løbeinspiration.
permalink: /loebeblogs/
language: da
header:
  teaser: /assets/images/unsplash/photo-1521903062400-b80f2cb8cb9d.jpg
  credit: https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d
  caption: Løbeblogs og kilder til løbeinspiration
category:
  - Løb
tags:
  - inspiration
  - løb
last_modified_at: '2026-08-08T12:00:00Z'
toc: true
feature_row_feature:
  - image_path: /assets/images/unsplash/photo-1540539234-c14a20fb7c7b.jpg
    credit: https://images.unsplash.com/photo-1540539234-c14a20fb7c7b
    alt: Løbesidens Løbsberegner
    title: Jack Daniels Løbeberegner
    excerpt: Udregn dine optimale træningstempoer og estimerede konkurrencetider med vores beregner baseret på Jack Daniels Running Formula.
    url: /loebesiden-jack-daniels-loebeberegner/
    btn_label: Brug løbsberegneren →
    btn_class: btn--info
faq:
  - question: Hvilke løbeblogs og løbesites er de bedste i Danmark?
    answer: Nogle af de stærkeste danske løbesites omfatter Løbesiden.dk (vidensbank og løbeberegnere), Vild Med Løb, Hechmann Running samt specialiserede medier og podcasts som Runcast.
  - question: Hvor finder man ny inspiration til sin løbetræning?
    answer: Udover traditionelle løbeblogs finder du i dag stor inspiration på platforme som Strava, løbe-vlogs på YouTube, løbepodcasts samt uformelle sociale løbefællesskaber.
---

Leder du efter gode **løbeblogs** og løbesites, der kan give dig ny viden, træningsprogrammer og inspiration til at snøre løbeskoene?

Måden, vi forbruger løbeindhold på, har ændret sig markant over de seneste år. Hvor personlige dagbogs-blogs tidligere dominerede, findes den bedste løbeinspiration i dag på faglige videnssites, digitale løbeberegnere, YouTube-vlogs og i podcasts.

Her har vi samlet de stærkeste danske løbesites, beregnere og medier til din løbetræning.

---

## 🏃‍♂️ Stærke danske løbesites og vidensbanker

Hvis du vil nørde fysiologi, løbeøkonomi, tempoløb og træningsprogrammer, er disse sider blandt de mest velfunderede i Danmark:

### 1. Løbesiden.dk
En af Danmarks absolut ældste og mest ikoniske vidensdatabaser om løb. Sitet indeholder dybdegående artikler om alt fra VO2-max og anaerob tærskel til løbeberegnere og træningszoner.

### 2. Hechmann Running
Klassisk løbesite opbygget af træner Claus Hechmann. Sitet fokuserer på den populære Hechmann-metode med opdeling i specifikke iltoptagelses- og udholdenhedszoner baseret på pædagogiske test.

### 3. Vild Med Løb
En fin dansk løbeblog og nyhedsside med fokus på motionsløb, udstyrsanmeldelser, ruteinspiration og erfaringer fra både maraton- og trailløb.

---

## 📊 Digitale beregnere og værktøjer til løbere

Det rette træningstempo er afgørende for at undgå skader og opnå fremgang. Hos Motionsplan har vi udviklet en række populære løbeberegnere:

{% include feature_row id="feature_row_feature" type="left" %}

* **[One Rep Max & VDOT Beregner](/loebesiden-jack-daniels-loebeberegner/):** Find dine nøjagtige træningszoner (Easy, Marathon, Threshold, Interval, Repetition) ud fra dine seneste resultater[cite: 15].
* **[Pulszoner til løb](/pulszoner-beregner/):** Lær hvordan du udregner din maxpuls og tilrettelægger din zone-træning.
* **[Løbefællesskaber i Danmark](/loebefaellesskaber/):** Find en lokal løbegruppe eller et gadeløb i din by.

---

## 📱 Løbei inspiration på YouTube, Strava og Podcasts

Hvis du foretrækker video eller lyd frem for traditionel læsning, er der masser af inspiration at hente her:

* **Strava:** Mange løbere deler i dag deres daglige "løbeblog" direkte på Strava med billeder, pulstal, ruter og kommentarer.
* **YouTube Løbe-vlogs:** Søg på danske og internationale løbe-vloggere for at følge med i deres marathon-forberedelser, sko-anmeldelser og træningshverdag.
* **Løbepodcasts:** Tjek vores store guide til de [bedste danske træningspodcasts](/bedste-fitness-traening-podcasts/) for lyd under din løbetur.

---

## Udvalgte guider fra Motionsplan løbeblog

Herunder kan du dykke ned i vores egne mest populære artikler og guider om løbetræning:

{% assign site_posts = site.posts | where: "tags", "løb" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include_cached archive-single.html post=post type="grid" %}
  {% endfor %}
{% endif %}

</div>

---

## Ofte stillede spørgsmål om løbeblogs

{% include motionsplan/faq.html %}