---
title: "Powell Raise"
instructions: ""
permalink: /oevelse/powell-raise/
redirect_from: /node/732
id: 732
language: da
header:
  teaser: /assets/images/exercises/poliquin-stepup-0-320.jpg
tags:
  - Koordination og balance
  - Balance
  - Styrketræning
  - knædomineret
  - Step
  - Forlår
  - Knees Over Toe Guy
categories:
  - Koordination og balance
training_type:
  - Balance
  - Styrketræning
training_focus:
  - knædomineret
equipment:
  - Step
muscle_group:
  - Forlår
alternative_titles: []
gallery:
  - url: /assets/images/exercises/poliquin-stepup-0.jpg
    image_path: /assets/images/exercises/poliquin-stepup-0-320.jpg
    alt: "Poliquin stepup"
    title: "Poliquin stepup"
  - url: /assets/images/exercises/poliquin-stepup-1.jpg
    image_path: /assets/images/exercises/poliquin-stepup-1-320.jpg
    alt: "Poliquin stepup"
    title: "Poliquin stepup"
last_modified_at: 2016-10-18T07:39:15Z
---

{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
