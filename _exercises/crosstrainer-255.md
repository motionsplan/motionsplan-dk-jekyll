---
title: "Crosstrainer"
instructions: ""
permalink: /oevelse/crosstrainer/
redirect_from: /node/255
id: 255
language: da
tags:
  - Kondition
categories:
  - Cardiomaskiner
training_type:
  - Kondition
training_focus: []
equipment: []
muscle_group: []
gallery: []
last_modified_at: 2014-10-12T14:39:17Z
---

{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}

{{ page.title }} er en [cardiomaskine](/bedste-cardiomaskiner/).
