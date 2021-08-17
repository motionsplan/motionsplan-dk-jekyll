---
title: "Touch toes"
excerpt: ""
instructions: ""
permalink: /oevelse/touch-toes/
redirect_from: /node/660
id: 660
language: da
header:
  teaser: /assets/images/exercises/touch-toes-0-320.jpg
tags:
  - Strækøvelser
  - kropsvægt
  - Baglår
categories: []
training_type:
  - Strækøvelser
training_focus:
equipment:
  - kropsvægt
muscle_group:
  - Baglår
gallery:
  - url: /assets/images/exercises/touch-toes-0.jpg
    image_path: /assets/images/exercises/touch-toes-0-320.jpg
    alt: "Touch toes"
    title: "Touch toes"
  - url: /assets/images/exercises/touch-toes-1.jpg
    image_path: /assets/images/exercises/touch-toes-1-320.jpg
    alt: "Touch toes"
    title: "Touch toes"
last_modified_at: 2015-04-10T11:55:28Z
---
{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
