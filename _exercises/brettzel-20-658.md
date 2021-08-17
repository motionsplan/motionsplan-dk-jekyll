---
title: "Brettzel 2.0"
excerpt: ""
instructions: ""
permalink: /oevelse/brettzel-20/
redirect_from: /node/658
id: 658
language: da
header:
  teaser: /assets/images/exercises/brettzel-20-0-320.jpg
tags:
  - Strækøvelser
categories:
  - Mobilitet
training_type:
  - Strækøvelser
training_focus:
equipment:
muscle_group: []
alternative_titles: []
gallery:
  - url: /assets/images/exercises/brettzel-20-0.jpg
    image_path: /assets/images/exercises/brettzel-20-0-320.jpg
    alt: "Brettzel 2.0"
    title: "Brettzel 2.0"
  - url: /assets/images/exercises/brettzel-20-1.jpg
    image_path: /assets/images/exercises/brettzel-20-1-320.jpg
    alt: "Brettzel 2.0"
    title: "Brettzel 2.0"
video:
  provider: youtube
  id: SfGV-65GaPg
last_modified_at: 2015-04-06T09:58:17Z
---

{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
