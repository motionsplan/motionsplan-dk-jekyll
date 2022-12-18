---
title: "Rhomboideus"
seo_title: "Rhombemusklen | Rhomboideus | Muskler"
functional_group:
  - Skulderbladsadduktorer
joint:
  - Skulderbladet
group:
  - Ryg
name:
  latin: "Rhomboideus"
  da: Rhombemusklen
tags:
  - not-in-imagemap
  - muskel
categories:
  - Muskler
origin:
  da:
insertion:
  da:
function:
  da:
  en:
---

{{ page.name.da | capitalize }} hedder på latin *{{ page.name.latin | downcase }}*. Musklen laver {% for f in page.function.da %}{% if forloop.last == true and page.function.da.size > 1 %} og {% endif %}{{ f.short | downcase  }}{% if forloop.last == false and page.function.da.size > 1 %}, {% endif %}{% endfor %}. Musklen er en del af {{ page.functional_group | join: ", " | downcase }}.

Rhomboideus eller Rhombemusklen består af to muskler, som sidder midt mellem skulderbladene. Rhomboideus er to tykke bånd, der samler skulderbladene. Rhomboideus funktion er at trække skulderbladende sammen ligesom den midterste del af [kappemusklen trapezius](/trapezius/).

## Træning af {{ page.title }}

Jeg kan rigtig godt lide at bruge [rows](/rows/) og særligt Bent over Rows.

{% include exercise key="261" title="Bent over rows" %}
