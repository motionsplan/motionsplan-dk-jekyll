---
title: "TRX Bodyrows"
excerpt: ""
instructions: ""
permalink: /oevelse/trx-bodyrows/
redirect_from: /node/721
id: 721
language: da
tags: []
categories: []
training_type: []
training_focus: []
equipment:
  - trx
muscle_group: []
alternative_titles: []
gallery:
video:
  provider: youtube
  id: lBxgQ2FEiH8
last_modified_at: 2016-10-17T21:19:09Z
---
{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
