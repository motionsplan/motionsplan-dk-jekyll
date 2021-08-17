---
title: "Victory raise"
excerpt: ""
instructions: ""
permalink: /oevelse/victory-raise/
redirect_from: /node/738
id: 738
language: da
tags:
  - Pres
  - Styrketræning
  - elastik
  - håndvægte
  - Skuldre
categories:
  - Pres
training_type:
  - Styrketræning
training_focus:
equipment:
  - elastik
  - håndvægte
muscle_group:
  - Skuldre
alternative_titles:
gallery:
video:
  provider: youtube
  id: SV5VV9HK2iQ
last_modified_at: 2016-10-31T21:24:55Z
key: 20161031212455
---
{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
