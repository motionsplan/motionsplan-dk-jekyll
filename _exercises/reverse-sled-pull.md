---
title: "Reverse Sled Pull"
instructions: ""
permalink: /oevelse/reverse-sled-pull/
id: 271
language: da
header:
  teaser: /assets/images/exercises/laeg-0-320.jpg
tags:
  - Ben
  - Styrketræning
  - vægtstang
  - Lægge
  - Knees Over Toe Guy
categories:
  - Ben
training_type:
  - Styrketræning
training_focus:
equipment:
  - vægtstang
muscle_group:
  - Lægge
alternative_titles:
  - calf raise
gallery:
  - url: /assets/images/exercises/laeg-0.jpg
    image_path: /assets/images/exercises/laeg-0-320.jpg
    alt: "Læg"
    title: "Læg"
  - url: /assets/images/exercises/laeg-1.jpg
    image_path: /assets/images/exercises/laeg-1-320.jpg
    alt: "Læg"
    title: "Læg"
last_modified_at: 2014-10-12T19:19:38Z
---

{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
