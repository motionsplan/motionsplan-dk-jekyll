---
title: "Armgang"
instructions: ""
permalink: /oevelse/armgang/
id: 586
language: da
header:
  teaser: /assets/images/exercises/armgang-0-320.jpg
tags:
  - Hård styrkeøvelse
categories:
  - Hård styrkeøvelse
training_type: []
training_focus: []
equipment: []
muscle_group: []
alternative_titles: []
gallery:
  - url: /assets/images/exercises/armgang-0.jpg
    image_path: /assets/images/exercises/armgang-0-320.jpg
    alt: "Armgang"
    title: "Armgang"
  - url: /assets/images/exercises/armgang-1.jpg
    image_path: /assets/images/exercises/armgang-1-320.jpg
    alt: "Armgang"
    title: "Armgang"
last_modified_at: 2014-10-03T11:08:05Z
---

{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
