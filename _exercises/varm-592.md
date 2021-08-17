---
title: "Varm the"
instructions: ""
permalink: /oevelse/varm/
redirect_from: /node/592
id: 592
language: da
header:
  teaser: /assets/images/exercises/varm-0-320.jpg
tags:
  - Koordination og balance
  - Mobilisering
  - Strækøvelser
  - kropsvægt
  - Arme
  - Skuldre
  - Øvre ryg
categories:
  - Koordination og balance
training_type:
  - Mobilisering
  - Strækøvelser
training_focus:
equipment:
  - kropsvægt
muscle_group:
  - Arme
  - Skuldre
  - Øvre ryg
alternative_titles: []
gallery:
  - url: /assets/images/exercises/varm-0.jpg
    image_path: /assets/images/exercises/varm-0-320.jpg
    alt: "Varm the"
    title: "Varm the"
  - url: /assets/images/exercises/varm-1.jpg
    image_path: /assets/images/exercises/varm-1-320.jpg
    alt: "Varm the"
    title: "Varm the"
  - url: /assets/images/exercises/varm-2.jpg
    image_path: /assets/images/exercises/varm-2-320.jpg
    alt: "Varm the"
    title: "Varm the"
  - url: /assets/images/exercises/varm-3.jpg
    image_path: /assets/images/exercises/varm-3-320.jpg
    alt: "Varm the"
    title: "Varm the"
  - url: /assets/images/exercises/varm-4.jpg
    image_path: /assets/images/exercises/varm-4-320.jpg
    alt: "Varm the"
    title: "Varm the"
  - url: /assets/images/exercises/varm-5.jpg
    image_path: /assets/images/exercises/varm-5-320.jpg
    alt: "Varm the"
    title: "Varm the"
last_modified_at: 2014-10-12T21:34:51Z
---
{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
