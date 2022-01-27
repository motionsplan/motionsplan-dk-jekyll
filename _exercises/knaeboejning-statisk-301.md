---
title: "Wallsit: Knæbøjning, statisk"
instructions: ""
permalink: /oevelse/knaeboejning-statisk/
redirect_from: /node/301
id: 301
language: da
header:
  teaser: /assets/images/exercises/knaeboejning-statisk-0-320.jpg
tags: []
categories: []
training_type: []
training_focus: []
equipment: []
muscle_group: []
gallery:
  - url: /assets/images/exercises/knaeboejning-statisk-0.jpg
    image_path: /assets/images/exercises/knaeboejning-statisk-0-320.jpg
    alt: "Knæbøjning, statisk"
    title: "Knæbøjning, statisk"
last_modified_at: 2011-05-02T15:58:43Z
---

{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
