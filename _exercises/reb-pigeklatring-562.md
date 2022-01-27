---
title: "Reb, pigeklatring"
instructions: ""
permalink: /oevelse/reb-pigeklatring/
redirect_from: /node/562
id: 562
language: da
header:
  teaser: /assets/images/exercises/reb-pigeklatring-0-320.jpg
tags:
  - Hård styrkeøvelse
  - tov
categories:
  - Hård styrkeøvelse
training_type: []
training_focus: []
equipment:
  - tov
muscle_group: []
gallery:
  - url: /assets/images/exercises/reb-pigeklatring-0.jpg
    image_path: /assets/images/exercises/reb-pigeklatring-0-320.jpg
    alt: "Reb, pigeklatring"
    title: "Reb, pigeklatring"
  - url: /assets/images/exercises/reb-pigeklatring-1.jpg
    image_path: /assets/images/exercises/reb-pigeklatring-1-320.jpg
    alt: "Reb, pigeklatring"
    title: "Reb, pigeklatring"
  - url: /assets/images/exercises/reb-pigeklatring-2.jpg
    image_path: /assets/images/exercises/reb-pigeklatring-2-320.jpg
    alt: "Reb, pigeklatring"
    title: "Reb, pigeklatring"
  - url: /assets/images/exercises/reb-pigeklatring-3.jpg
    image_path: /assets/images/exercises/reb-pigeklatring-3-320.jpg
    alt: "Reb, pigeklatring"
    title: "Reb, pigeklatring"
  - url: /assets/images/exercises/reb-pigeklatring-4.jpg
    image_path: /assets/images/exercises/reb-pigeklatring-4-320.jpg
    alt: "Reb, pigeklatring"
    title: "Reb, pigeklatring"
last_modified_at: 2014-10-10T21:26:25Z
---

{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
