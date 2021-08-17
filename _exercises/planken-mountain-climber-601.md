---
title: "Planken, mountain climber"
instructions: ""
permalink: /oevelse/planken-mountain-climber/
redirect_from: /node/601
id: 601
language: da
header:
  teaser: /assets/images/exercises/planken-mountain-climber-0-320.jpg
tags:
  - Kropsstamme
  - Styrketræning
  - kropsstamme
  - kropsvægt
  - Core
  - Hoftebøjere
  - Mave
categories:
  - Kropsstamme
training_type:
  - Styrketræning
training_focus:
  - kropsstamme
equipment:
  - kropsvægt
muscle_group:
  - Core
  - Hoftebøjere
  - Mave
alternative_titles:
gallery:
  - url: /assets/images/exercises/planken-mountain-climber-0.jpg
    image_path: /assets/images/exercises/planken-mountain-climber-0-320.jpg
    alt: "Planken, mountain climber"
    title: "Planken, mountain climber"
  - url: /assets/images/exercises/planken-mountain-climber-1.jpg
    image_path: /assets/images/exercises/planken-mountain-climber-1-320.jpg
    alt: "Planken, mountain climber"
    title: "Planken, mountain climber"
  - url: /assets/images/exercises/planken-mountain-climber-2.jpg
    image_path: /assets/images/exercises/planken-mountain-climber-2-320.jpg
    alt: "Planken, mountain climber"
    title: "Planken, mountain climber"
  - url: /assets/images/exercises/planken-mountain-climber-3.jpg
    image_path: /assets/images/exercises/planken-mountain-climber-3-320.jpg
    alt: "Planken, mountain climber"
    title: "Planken, mountain climber"
last_modified_at: 2014-10-12T22:17:36Z
---

{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
