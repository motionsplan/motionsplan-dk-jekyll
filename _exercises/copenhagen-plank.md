---
title: "Copenhagen Plank"
instructions: ""
permalink: /oevelse/copenhagen-plank/
key: 20201212205400
language: da
video:
  provider: youtube
  id: n5WeYzi7Dqo
#header:
#  teaser: /assets/images/exercises/180-jump-0-320.jpg
tags:
  - kropsvægt
categories: []
training_type: []
training_focus: []
equipment:
#  - kropsvægt
muscle_group: []
gallery: []
#  - url: /assets/images/exercises/180-jump-0.jpg
#    image_path: /assets/images/exercises/180-jump-0-320.jpg
#    alt: "Spring, 180  jump "
#    title: "Spring, 180  jump "
last_modified_at: 2020-11-02T13:43:26Z
---

{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
