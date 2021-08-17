---
title: "Reach through"
excerpt: ""
instructions: ""
permalink: /oevelse/reach-through/
redirect_from: /node/685
id: 685
language: da
header:
  teaser: /assets/images/exercises/reach-through-0-320.jpg
tags:
  - Mobilisering
  - Strækøvelser
  - kropsvægt
  - Baglår
categories:
  - Mobilitet
training_type:
  - Mobilisering
  - Strækøvelser
training_focus: []
equipment:
  - kropsvægt
muscle_group:
  - Baglår
alternative_titles:
gallery:
  - url: /assets/images/exercises/reach-through-0.jpg
    image_path: /assets/images/exercises/reach-through-0-320.jpg
    alt: "Reach through"
    title: "Reach through"
  - url: /assets/images/exercises/reach-through-1.jpg
    image_path: /assets/images/exercises/reach-through-1-320.jpg
    alt: "Reach through"
    title: "Reach through"
last_modified_at: 2015-04-10T13:47:22Z
---

{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
