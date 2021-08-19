---
title: "RKC Planke"
instructions: ""
permalink: /oevelse/rkc-planke/
redirect_from: /node/715
id: 715
language: da
tags:
  - Kropsstamme
  - Styrketræning
  - kropsstamme
  - kropsvægt
  - Mave
  - planken
categories:
  - Kropsstamme
training_type:
  - Styrketræning
training_focus:
  - kropsstamme
equipment:
  - kropsvægt
muscle_group:
  - Mave
alternative_titles: []
gallery:
video:
  provider: youtube
  id: zmybubRi1TU
last_modified_at: 2016-10-17T21:09:12Z
---

{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
