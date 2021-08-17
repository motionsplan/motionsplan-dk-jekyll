---
title: "Hip thrusts"
excerpt: ""
instructions: ""
permalink: /oevelse/hip-thrusters/
redirect_from: /node/626
id: 626
language: da
header:
  teaser: /assets/images/exercises/hip-thrusters-0-320.jpg
tags:
  - Kropsstamme
  - Styrketræning
  - hoftedomineret
  - vægtstang
  - Baller
categories:
  - Kropsstamme
training_type:
  - Styrketræning
training_focus:
  - hoftedomineret
equipment:
  - vægtstang
muscle_group:
  - Baller
alternative_titles:
  - Hip thrusters
gallery:
  - url: /assets/images/exercises/hip-thrusters-0.jpg
    image_path: /assets/images/exercises/hip-thrusters-0-320.jpg
    alt: "Hip thrusts"
    title: "Hip thrusts"
  - url: /assets/images/exercises/hip-thrusters-1.jpg
    image_path: /assets/images/exercises/hip-thrusters-1-320.jpg
    alt: "Hip thrusts"
    title: "Hip thrusts"
  - url: /assets/images/exercises/hip-thrusters-2.jpg
    image_path: /assets/images/exercises/hip-thrusters-2-320.jpg
    alt: "Hip thrusts"
    title: "Hip thrusts"
last_modified_at: 2016-10-18T07:15:52Z
---

{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
