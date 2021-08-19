---
title: "Planken, superman"
instructions: ""
permalink: /oevelse/planken-superman/
redirect_from: /node/600
id: 600
language: da
header:
  teaser: /assets/images/exercises/planken-superman-0-320.jpg
tags:
  - Kropsstamme
  - Styrketræning
  - kropsstamme
  - kropsvægt
  - Baller
  - Core
  - Mave
  - planken
categories:
  - Kropsstamme
training_type:
  - Styrketræning
training_focus:
  - kropsstamme
equipment:
  - kropsvægt
muscle_group:
  - Baller
  - Core
  - Mave
alternative_titles: []
gallery:
  - url: /assets/images/exercises/planken-superman-0.jpg
    image_path: /assets/images/exercises/planken-superman-0-320.jpg
    alt: "Planken, superman"
    title: "Planken, superman"
  - url: /assets/images/exercises/planken-superman-1.jpg
    image_path: /assets/images/exercises/planken-superman-1-320.jpg
    alt: "Planken, superman"
    title: "Planken, superman"
  - url: /assets/images/exercises/planken-superman-2.jpg
    image_path: /assets/images/exercises/planken-superman-2-320.jpg
    alt: "Planken, superman"
    title: "Planken, superman"
  - url: /assets/images/exercises/planken-superman-3.jpg
    image_path: /assets/images/exercises/planken-superman-3-320.jpg
    alt: "Planken, superman"
    title: "Planken, superman"
last_modified_at: 2014-10-12T22:16:03Z
---

{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
