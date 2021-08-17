---
title: "Reb, klatring"
excerpt: ""
instructions: ""
permalink: /oevelse/reb-klatring/
redirect_from: /node/563
id: 563
language: da
header:
  teaser: /assets/images/exercises/reb-klatring-0-320.jpg
tags:
  - Helkropsøvelse
  - tov
  - crossfit
categories:
  - Helkropsøvelse
training_type: []
training_focus: []
equipment:
  - tov
muscle_group: []
gallery:
  - url: /assets/images/exercises/reb-klatring-0.jpg
    image_path: /assets/images/exercises/reb-klatring-0-320.jpg
    alt: "Reb, klatring"
    title: "Reb, klatring"
  - url: /assets/images/exercises/reb-klatring-1.jpg
    image_path: /assets/images/exercises/reb-klatring-1-320.jpg
    alt: "Reb, klatring"
    title: "Reb, klatring"
last_modified_at: 2014-10-10T21:26:48Z
---

{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
