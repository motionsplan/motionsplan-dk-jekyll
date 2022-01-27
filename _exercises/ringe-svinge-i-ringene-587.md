---
title: "Ringe, svinge i ringene"
instructions: ""
permalink: /oevelse/ringe-svinge-i-ringene/
redirect_from: /node/587
id: 587
language: da
header:
  teaser: /assets/images/exercises/ringe-svinge-i-ringene-0-320.jpg
tags:
  - Hård styrkeøvelse
categories:
  - Hård styrkeøvelse
training_type: []
training_focus: []
equipment: []
muscle_group: []
gallery:
  - url: /assets/images/exercises/ringe-svinge-i-ringene-0.jpg
    image_path: /assets/images/exercises/ringe-svinge-i-ringene-0-320.jpg
    alt: "Ringe, svinge i ringene"
    title: "Ringe, svinge i ringene"
  - url: /assets/images/exercises/ringe-svinge-i-ringene-1.jpg
    image_path: /assets/images/exercises/ringe-svinge-i-ringene-1-320.jpg
    alt: "Ringe, svinge i ringene"
    title: "Ringe, svinge i ringene"
  - url: /assets/images/exercises/ringe-svinge-i-ringene-2.jpg
    image_path: /assets/images/exercises/ringe-svinge-i-ringene-2-320.jpg
    alt: "Ringe, svinge i ringene"
    title: "Ringe, svinge i ringene"
  - url: /assets/images/exercises/ringe-svinge-i-ringene-3.jpg
    image_path: /assets/images/exercises/ringe-svinge-i-ringene-3-320.jpg
    alt: "Ringe, svinge i ringene"
    title: "Ringe, svinge i ringene"
last_modified_at: 2014-10-03T11:10:12Z
---

{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
