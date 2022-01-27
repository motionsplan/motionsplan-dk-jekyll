---
title: "Walking lunges"
instructions: ""
permalink: /oevelse/walking-lunges/
redirect_from: /node/607
id: 607
language: da
header:
  teaser: /assets/images/exercises/walking-lunges-0-320.jpg
tags:
  - Ben
  - Styrketræning
  - knædomineret
  - håndvægte
  - Baller
  - Forlår
categories:
  - Ben
training_type:
  - Styrketræning
training_focus:
  - knædomineret
equipment:
  - håndvægte
muscle_group:
  - Baller
  - Forlår
alternative_titles: []
gallery:
  - url: /assets/images/exercises/walking-lunges-0.jpg
    image_path: /assets/images/exercises/walking-lunges-0-320.jpg
    alt: "Walking lunges"
    title: "Walking lunges"
  - url: /assets/images/exercises/walking-lunges-1.jpg
    image_path: /assets/images/exercises/walking-lunges-1-320.jpg
    alt: "Walking lunges"
    title: "Walking lunges"
  - url: /assets/images/exercises/walking-lunges-2.jpg
    image_path: /assets/images/exercises/walking-lunges-2-320.jpg
    alt: "Walking lunges"
    title: "Walking lunges"
  - url: /assets/images/exercises/walking-lunges-3.jpg
    image_path: /assets/images/exercises/walking-lunges-3-320.jpg
    alt: "Walking lunges"
    title: "Walking lunges"
last_modified_at: 2014-10-30T10:19:29Z
---
{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
