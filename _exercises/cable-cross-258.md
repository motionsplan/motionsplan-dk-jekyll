---
title: "Cable cross"
instructions: ""
permalink: /oevelse/cable-cross/
redirect_from: /node/258
id: 258
language: da
header:
  teaser: /assets/images/exercises/cable-cross-0-320.jpg
tags: []
categories: []
training_type: []
training_focus: []
equipment: []
muscle_group: []
gallery:
  - url: /assets/images/exercises/cable-cross-0.jpg
    image_path: /assets/images/exercises/cable-cross-0-320.jpg
    alt: "Cable cross"
    title: "Cable cross"
  - url: /assets/images/exercises/cable-cross-1.jpg
    image_path: /assets/images/exercises/cable-cross-1-320.jpg
    alt: "Cable cross"
    title: "Cable cross"
last_modified_at: 2011-04-14T15:31:25Z
---

{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
