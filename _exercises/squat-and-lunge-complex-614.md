---
title: "Squat and lunge complex"
excerpt: ""
instructions: ""
permalink: /oevelse/squat-and-lunge-complex/
redirect_from: /node/614
id: 614
language: da
header:
  teaser: /assets/images/exercises/squat-and-lunge-complex-0-320.jpg
tags:
  - Helkropsøvelse
  - Styrketræning
  - knædomineret
  - kropsvægt
  - Baglår
  - Baller
  - Forlår
  - Lægge
categories:
  - Helkropsøvelse
training_type:
  - Styrketræning
training_focus:
  - knædomineret
equipment:
  - kropsvægt
muscle_group:
  - Baglår
  - Baller
  - Forlår
  - Lægge
alternative_titles:
gallery:
  - url: /assets/images/exercises/squat-and-lunge-complex-0.jpg
    image_path: /assets/images/exercises/squat-and-lunge-complex-0-320.jpg
    alt: "Squat and lunge complex"
    title: "Squat and lunge complex"
  - url: /assets/images/exercises/squat-and-lunge-complex-1.jpg
    image_path: /assets/images/exercises/squat-and-lunge-complex-1-320.jpg
    alt: "Squat and lunge complex"
    title: "Squat and lunge complex"
  - url: /assets/images/exercises/squat-and-lunge-complex-2.jpg
    image_path: /assets/images/exercises/squat-and-lunge-complex-2-320.jpg
    alt: "Squat and lunge complex"
    title: "Squat and lunge complex"
  - url: /assets/images/exercises/squat-and-lunge-complex-3.jpg
    image_path: /assets/images/exercises/squat-and-lunge-complex-3-320.jpg
    alt: "Squat and lunge complex"
    title: "Squat and lunge complex"
  - url: /assets/images/exercises/squat-and-lunge-complex-4.jpg
    image_path: /assets/images/exercises/squat-and-lunge-complex-4-320.jpg
    alt: "Squat and lunge complex"
    title: "Squat and lunge complex"
  - url: /assets/images/exercises/squat-and-lunge-complex-5.jpg
    image_path: /assets/images/exercises/squat-and-lunge-complex-5-320.jpg
    alt: "Squat and lunge complex"
    title: "Squat and lunge complex"
last_modified_at: 2014-11-15T15:33:59Z
---
{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
