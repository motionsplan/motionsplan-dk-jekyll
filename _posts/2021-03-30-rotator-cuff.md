---
title: &title "Rotator cuffen: Skulderens dybe stabilisatorer"
seo_title: "Rotator cuff: Anatomi, funktion og træning af skulderstabilitet"
description: "Lær om de fire muskler i rotator cuffen. Se liste over muskler, deres funktion i skulderen og hvordan du forebygger skader."
permalink: /rotator-cuff/
language: da
header:
  overlay_image: https://images.unsplash.com/photo-1576037722139-10871f993f4d?auto=format&fit=crop&h=630&w=1200&q=60
  teaser: https://images.unsplash.com/photo-1576037722139-10871f993f4d?auto=format&fit=crop&h=300&w=400&q=10
  caption: *title
category:
  - Anatomi
  - Muskler
tags:
  - muskler
  - anatomi
  - skulder
last_modified_at: 2026-03-29T20:15:00Z
toc: true
author: lsolesen
sidebar:
  nav: muscles
breadcrumbs: true
---

Jeg har samlet en oversigt over musklerne i rotator cuffen her. Selvom de er små og ligger gemt under den store deltamuskel, er de de vigtigste muskler for at holde din skulder sund og stabil.

{% include figure image_path=page.header.teaser caption="Rotator cuffen består af fire små muskler, der arbejder sammen om at holde overarmshovedet sikkert på plads i ledskålen." alt="rotator cuff muskler anatomi" %}

Rotator cuffen er fundamentet for al skulderbevægelse. Hvis disse stabilisatorer ikke fungerer optimalt, hjælper det ikke meget at have store overfladiske muskler – det vil ofte føre til irritation og skader som impingement.

Jeg har lavet en liste over [gode øvelser til skuldrene](/skulderoevelser/).

## Hvad er rotator cuffen?

Rotator cuffen (på dansk kaldet *rotatormanchetten*) er en gruppe på fire muskler, hvis sener smelter sammen og danner en kappe omkring skulderleddet. Skulderleddet er kroppens mest bevægelige led, men prisen for den store bevægelighed er en naturlig instabilitet.

Rotator cuffens primære opgave er **dynamisk stabilisering**. Det betyder, at de "suger" overarmshovedet ind i den flade ledskål, hver gang du bevæger armen, så den ikke "skrider" ud af kurs og rammer sener eller slimsække.

## De fire muskler i rotator cuffen

Rotator cuffen består af følgende muskler (ofte husket under akronymet **SITS**):

1.  **Supraspinatus:** Ligger øverst og hjælper med at løfte armen ud til siden (abduktion). Det er den hyppigst skadede muskel i skulderen.
2.  **Infraspinatus:** Sidder på bagsiden af skulderbladet og er en kraftig udadrotator.
3.  **Teres Minor:** En lille muskel der arbejder tæt sammen med infraspinatus om udadrotation.
4.  **Subscapularis:** Sidder på forsiden af skulderbladet (ind mod ribbenene) og sørger for indadrotation.

## Liste over rotator cuff muskler

Herunder finder du de fire muskler med links til deres specifikke udspring, hæfte og detaljerede funktion:

{% assign muscles = site.anatomy | where: "functional_group", "Rotator cuffen" %}
{%- for m in muscles -%}
- [{{ m.name.da | default: m.title }} - {{ m.name.latin }}]({{ m.url }})
{%- endfor -%}

Jeg har også en samlet [liste over alle muskler i kroppen her](/muskler/).

## Træning og forebyggelse

Skader i rotator cuffen opstår ofte som følge af ubalance, hvor de store muskler (bryst og ryg) bliver for stærke i forhold til de små stabilisatorer. 

For at holde cuffen sund bør du fokusere på:
* **Udadrotationer:** Træning med elastik eller kabel for at styrke bagsiden.
* **Kontrol:** Langsomme og kontrollerede bevægelser frem for maksimal vægt.
* **Mobilitet:** Sørg for at skulderbladet kan bevæge sig frit på brystkassen.

## Konklusion

En velfungerende rotator cuff er nøglen til at undgå "svømmeskulder", indeklemning og andre gængse skulderproblemer. Ved at inkludere specifik stabilitetstræning sikrer du, at din skulder kan holde til tunge presøvelser i mange år. Se flere forslag til [træning af skuldrene her](/skulderoevelser/).

---

## Se oversigt over muskler
Hvis du vil lære mere om kroppens opbygning, kan du se min komplette [liste over muskler her](/muskler/) eller dykke ned i den generelle [anatomi](/anatomi/).

👉 **[Se den store søgbare tabel over alle muskler her](/muskler/tabel/)**
{: .notice--info }

<details markdown="1" class="references">
  <summary><h2 id="references">Referencer</h2></summary>

- Bojsen-Møller, F. & Simonsen, E. B. (2014). *Bevægeapparatets anatomi* (13. udg.). Munksgaard.
- Schünke, M., Schulte, E. & Schumacher, U. (2020). *Prometheus - Atlas of Anatomy* (3. udg.). Thieme.
- Netter, F. H. (2022). *Atlas of Human Anatomy* (8. udg.). Elsevier.

</details>