---
title: "Floor press"
instructions: ""
permalink: /oevelse/floor-press/
redirect_from: /node/740
id: 740
language: da
tags:
  - Styrketræning
  - skub vandret
  - bar
  - Bryst
  - Skuldre
categories: []
training_type:
  - Styrketræning
training_focus:
  - skub vandret
equipment:
  - bar
muscle_group:
  - Bryst
  - Skuldre
alternative_titles: []
gallery:
video:
  provider: youtube
  id: aM1TYdZaXMk
last_modified_at: 2016-11-01T08:32:19Z
---

{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
