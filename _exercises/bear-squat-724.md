---
title: "Bear squat"
instructions: ""
permalink: /oevelse/bear-squat/
redirect_from: /node/724
id: 724
language: da
header:
  teaser: /assets/images/exercises/bear-squat-0-320.jpg
tags:
  - Helkropsøvelse
  - Balance
  - Styrketræning
  - knædomineret
  - kropsstamme
  - kropsvægt
  - Core
  - Forlår
  - Mave
categories:
  - Helkropsøvelse
training_type:
  - Balance
  - Styrketræning
training_focus:
  - knædomineret
  - kropsstamme
equipment:
  - kropsvægt
muscle_group:
  - Core
  - Forlår
  - Mave
alternative_titles: []
gallery:
  - url: /assets/images/exercises/bear-squat-0.jpg
    image_path: /assets/images/exercises/bear-squat-0-320.jpg
    alt: "Bear squat"
    title: "Bear squat"
  - url: /assets/images/exercises/bear-squat-1.jpg
    image_path: /assets/images/exercises/bear-squat-1-320.jpg
    alt: "Bear squat"
    title: "Bear squat"
  - url: /assets/images/exercises/bear-squat-2.jpg
    image_path: /assets/images/exercises/bear-squat-2-320.jpg
    alt: "Bear squat"
    title: "Bear squat"
last_modified_at: 2016-10-18T07:28:10Z
---

{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
