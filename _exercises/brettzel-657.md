---
title: "Brettzel"
excerpt: ""
instructions: ""
permalink: /oevelse/brettzel/
redirect_from: /node/657
id: 657
language: da
header:
  teaser: /assets/images/exercises/brettzel-0-320.jpg
tags:
  - Strækøvelser
  - Baller
  - Forlår
  - Øvre ryg
categories:
  - Mobilitet
training_type:
  - Strækøvelser
training_focus:
equipment:
muscle_group:
  - Baller
  - Forlår
  - Øvre ryg
gallery:
  - url: /assets/images/exercises/brettzel-0.jpg
    image_path: /assets/images/exercises/brettzel-0-320.jpg
    alt: "Brettzel"
    title: "Brettzel"
  - url: /assets/images/exercises/brettzel-1.jpg
    image_path: /assets/images/exercises/brettzel-1-320.jpg
    alt: "Brettzel"
    title: "Brettzel"
video:
  provider: youtube
  id: SfGV-65GaPg
last_modified_at: 2015-04-10T13:53:54Z
---

{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
