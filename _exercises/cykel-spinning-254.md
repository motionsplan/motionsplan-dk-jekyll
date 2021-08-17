---
title: "Cykel, spinning"
excerpt: "Cykel, spinning"
instructions: "Cykel, spinning"
permalink: /oevelse/cykel-spinning/
redirect_from: /node/254
id: 254
language: da
header:
  teaser: /assets/images/exercises/cykel-spinning-0-320.jpg
tags:
  - Kondition
categories: []
training_type:
  - Kondition
training_focus:
equipment: []
muscle_group: []
gallery:
  - url: /assets/images/exercises/cykel-spinning-0.jpg
    image_path: /assets/images/exercises/cykel-spinning-0-320.jpg
    alt: "Cykel, spinning"
    title: "Cykel, spinning"
last_modified_at: 2014-10-10T21:03:47Z
---

{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
