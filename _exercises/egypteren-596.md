---
title: "Egypteren"
instructions: ""
permalink: /oevelse/egypteren/
redirect_from: /node/596
id: 596
language: da
header:
  teaser: /assets/images/exercises/egypteren-0-320.jpg
tags:
  - Koordination og balance
  - Mobilisering
  - kropsvægt
  - Skuldre
categories:
  - Koordination og balance
  - Mobilitet
training_type:
  - Mobilisering
training_focus:
equipment:
  - kropsvægt
muscle_group:
  - Skuldre
alternative_titles: []
gallery:
  - url: /assets/images/exercises/egypteren-0.jpg
    image_path: /assets/images/exercises/egypteren-0-320.jpg
    alt: "Egypteren"
    title: "Egypteren"
  - url: /assets/images/exercises/egypteren-1.jpg
    image_path: /assets/images/exercises/egypteren-1-320.jpg
    alt: "Egypteren"
    title: "Egypteren"
last_modified_at: 2014-10-12T22:06:25Z
---

{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
