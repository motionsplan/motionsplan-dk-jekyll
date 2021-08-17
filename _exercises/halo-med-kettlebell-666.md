---
title: "Halo med kettlebell"
excerpt: ""
instructions: ""
permalink: /oevelse/halo-med-kettlebell/
redirect_from: /node/666
id: 666
language: da
header:
  teaser: /assets/images/exercises/halo-med-kettlebell-0-320.jpg
tags:
  - Koordination og balance
  - Styrketræning
  - kettlebell
  - Arme
  - Mave
  - Skuldre
categories:
  - Koordination og balance
training_type:
  - Styrketræning
training_focus:
equipment:
  - kettlebell
muscle_group:
  - Arme
  - Mave
  - Skuldre
alternative_titles:
gallery:
  - url: /assets/images/exercises/halo-med-kettlebell-0.jpg
    image_path: /assets/images/exercises/halo-med-kettlebell-0-320.jpg
    alt: "Halo med kettlebell"
    title: "Halo med kettlebell"
  - url: /assets/images/exercises/halo-med-kettlebell-1.jpg
    image_path: /assets/images/exercises/halo-med-kettlebell-1-320.jpg
    alt: "Halo med kettlebell"
    title: "Halo med kettlebell"
  - url: /assets/images/exercises/halo-med-kettlebell-2.jpg
    image_path: /assets/images/exercises/halo-med-kettlebell-2-320.jpg
    alt: "Halo med kettlebell"
    title: "Halo med kettlebell"
  - url: /assets/images/exercises/halo-med-kettlebell-3.jpg
    image_path: /assets/images/exercises/halo-med-kettlebell-3-320.jpg
    alt: "Halo med kettlebell"
    title: "Halo med kettlebell"
  - url: /assets/images/exercises/halo-med-kettlebell-4.jpg
    image_path: /assets/images/exercises/halo-med-kettlebell-4-320.jpg
    alt: "Halo med kettlebell"
    title: "Halo med kettlebell"
last_modified_at: 2015-04-07T11:55:38Z
---

{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
