---
layout: collection
permalink: /traeningsoevelser/
redirect_from:
  - /exercise-search/
title: "Træningsøvelser: De bedste øvelser til styrketræning 🏋"
excerpt: "Vi har samlet de bedste træningsøvelser og styrketræningsøvelser. Vi har lavet en grundig forklaring af alle øvelserne, og der er både øvelser til styrketræning, konditionstræning, yoga, udstrækning, mobilitet og cardio."
comments: false
collection: exercises
entries_layout: grid
classes: wide
author_profile: true
---

Vi har samlet de bedste træningsøvelser, udstrækningsøvelser og styrketræningsøvelser. Vi har lavet en grundig forklaring af alle øvelserne, og der er både øvelser til styrketræning, konditionstræning, yoga, udstrækning, mobilitet og cardio.

Hvis du er på udkig efter [maveøvelser]({% link _pages/exercises-tag-abs.md %}), [armøvelser]({% link _pages/exercises-tag-arme.md %}), [benøvelser]({% link _pages/exercises-tag-ben.md %}), [brystøvelser]({% link _pages/exercises-tag-bryst.md %}), [balleøvelser]({% link _pages/exercises-tag-glutes.md %}), [rygøvelser]({% link _pages/exercises-tag-ryg.md %}), [skulderøvelser]({% link _pages/exercises-tag-skulder.md %}), så har vi lavet en selvstændig side om de muskelgrupper. Vi har også skrevet selvstændigt om [balanceøvelser]({% link _posts/2020-07-16-balancetraening.md %}), [coretræning]({% link _posts/2020-07-16-coretraening.md %}) eller [udstrækningsøvelser]({% link _posts/2020-07-08-udstraekning.md %}).

Hvis ud gerne vil hjælpe med at forbedre beskrivelserne, eller der mangler den helt perfekte øvelsen, så skriv endelig.

## Artikler om træningsøvelser

<div class="feature__wrapper">

{% assign site_posts = site.posts | where: "tags", "træningsøvelse" | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
  {% for post in site_posts limit:4 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Træningsøvelser til træning
