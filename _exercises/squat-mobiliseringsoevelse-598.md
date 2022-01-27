---
title: "Squat, mobiliseringsøvelse"
instructions: ""
permalink: /oevelse/squat-mobiliseringsoevelse/
redirect_from:
  - /node/598
  - /oevelse/squat-mobiliseringsøvelse/
id: 598
language: da
header:
  teaser: /assets/images/exercises/squat-mobiliseringsoevelse-0-320.jpg
tags:
  - Ben
  - Mobilisering
  - knædomineret
  - kropsvægt
  - Baller
  - Forlår
  - Øvre ryg
categories:
  - Ben
  - Squat
training_type:
  - Mobilisering
training_focus:
  - knædomineret
equipment:
  - kropsvægt
muscle_group:
  - Baller
  - Forlår
  - Øvre ryg
alternative_titles: []
gallery:
  - url: /assets/images/exercises/squat-mobiliseringsoevelse-0.jpg
    image_path: /assets/images/exercises/squat-mobiliseringsoevelse-0-320.jpg
    alt: "Squat, mobiliseringsøvelse"
    title: "Squat, mobiliseringsøvelse"
  - url: /assets/images/exercises/squat-mobiliseringsoevelse-1.jpg
    image_path: /assets/images/exercises/squat-mobiliseringsoevelse-1-320.jpg
    alt: "Squat, mobiliseringsøvelse"
    title: "Squat, mobiliseringsøvelse"
  - url: /assets/images/exercises/squat-mobiliseringsoevelse-2.jpg
    image_path: /assets/images/exercises/squat-mobiliseringsoevelse-2-320.jpg
    alt: "Squat, mobiliseringsøvelse"
    title: "Squat, mobiliseringsøvelse"
  - url: /assets/images/exercises/squat-mobiliseringsoevelse-3.jpg
    image_path: /assets/images/exercises/squat-mobiliseringsoevelse-3-320.jpg
    alt: "Squat, mobiliseringsøvelse"
    title: "Squat, mobiliseringsøvelse"
  - url: /assets/images/exercises/squat-mobiliseringsoevelse-4.jpg
    image_path: /assets/images/exercises/squat-mobiliseringsoevelse-4-320.jpg
    alt: "Squat, mobiliseringsøvelse"
    title: "Squat, mobiliseringsøvelse"
last_modified_at: 2014-10-12T22:10:21Z
---
{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
