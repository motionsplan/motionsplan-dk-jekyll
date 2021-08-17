---
title: "Mave, rotation"
excerpt: "Mave, rotation"
instructions: "Mave, rotation"
permalink: /oevelse/mave-rotation/
redirect_from: /node/251
id: 251
language: da
header:
  teaser: /assets/images/exercises/mave-rotation-0-320.jpg
tags:
  - kropsstamme
  - maskine
categories:
  - Maveøvelser
training_type: []
training_focus:
  - kropsstamme
equipment:
  - maskine
muscle_group: []
gallery:
  - url: /assets/images/exercises/mave-rotation-0.jpg
    image_path: /assets/images/exercises/mave-rotation-0-320.jpg
    alt: "Mave, rotation"
    title: "Mave, rotation"
  - url: /assets/images/exercises/mave-rotation-1.jpg
    image_path: /assets/images/exercises/mave-rotation-1-320.jpg
    alt: "Mave, rotation"
    title: "Mave, rotation"
  - url: /assets/images/exercises/mave-rotation-2.jpg
    image_path: /assets/images/exercises/mave-rotation-2-320.jpg
    alt: "Mave, rotation"
    title: "Mave, rotation"
last_modified_at: 2011-04-16T07:07:06Z
---

{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
