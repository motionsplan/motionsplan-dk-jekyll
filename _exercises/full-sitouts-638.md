---
title: "Full sitouts"
instructions: ""
permalink: /oevelse/full-sitouts/
redirect_from: /node/638
id: 638
language: da
header:
  teaser: /assets/images/exercises/full-sitouts-0-320.jpg
tags:
  - Koordination og balance
  - Balance
  - kropsstamme
  - kropsvægt
  - Core
  - Mave
categories:
  - Koordination og balance
training_type:
  - Balance
training_focus:
  - kropsstamme
equipment:
  - kropsvægt
muscle_group:
  - Core
  - Mave
alternative_titles: []
gallery:
  - url: /assets/images/exercises/full-sitouts-0.jpg
    image_path: /assets/images/exercises/full-sitouts-0-320.jpg
    alt: "Full sitouts"
    title: "Full sitouts"
  - url: /assets/images/exercises/full-sitouts-1.jpg
    image_path: /assets/images/exercises/full-sitouts-1-320.jpg
    alt: "Full sitouts"
    title: "Full sitouts"
  - url: /assets/images/exercises/full-sitouts-2.jpg
    image_path: /assets/images/exercises/full-sitouts-2-320.jpg
    alt: "Full sitouts"
    title: "Full sitouts"
  - url: /assets/images/exercises/full-sitouts-3.jpg
    image_path: /assets/images/exercises/full-sitouts-3-320.jpg
    alt: "Full sitouts"
    title: "Full sitouts"
last_modified_at: 2015-03-27T13:51:48Z
---

{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
