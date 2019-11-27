---
layout: single
title: "Anatomi"
permalink: /anatomi/
header:
  teaser: https://www.pocketprep.com/wp-content/uploads/2018/07/HESI-A2-Practice-Test-Anatomy-and-Physiology.jpg
---

Hvis du vil forstå, hvordan træningsøvelser virker, så er det godt at kende kroppens anatomi.

De tre grundelementer i bevægeapparatets anatomi er:

- Knogler
- Led
- Muskler

Hvis man ved, hvordan musklerne sidder fast på knoglerne og hvilke bevægelser det enkelte led kan lave, så kan man analysere træningsøvelser.

{% assign pages = site.pages | where: "tags", "anatomi" %}
{% for p in pages %}
- **[{{ p.title }}]({{ p.url }})**. {{ p.excerpt | markdownify }}
{% endfor %}
