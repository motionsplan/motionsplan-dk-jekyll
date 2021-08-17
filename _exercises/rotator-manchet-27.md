---
title: "Rotator manchet"
excerpt: "Rotator manchet"
instructions: "Rotator manchet"
permalink: /oevelse/rotator-manchet/
redirect_from: /node/27
id: 27
language: da
header:
  teaser: /assets/images/exercises/rotator-manchet-0-320.jpg
tags: []
categories: []
training_type: []
training_focus: []
equipment: []
muscle_group: []
gallery:
  - url: /assets/images/exercises/rotator-manchet-0.jpg
    image_path: /assets/images/exercises/rotator-manchet-0-320.jpg
    alt: "Rotator manchet"
    title: "Rotator manchet"
  - url: /assets/images/exercises/rotator-manchet-1.jpg
    image_path: /assets/images/exercises/rotator-manchet-1-320.jpg
    alt: "Rotator manchet"
    title: "Rotator manchet"
  - url: /assets/images/exercises/rotator-manchet-2.jpg
    image_path: /assets/images/exercises/rotator-manchet-2-320.jpg
    alt: "Rotator manchet"
    title: "Rotator manchet"
  - url: /assets/images/exercises/rotator-manchet-3.jpg
    image_path: /assets/images/exercises/rotator-manchet-3-320.jpg
    alt: "Rotator manchet"
    title: "Rotator manchet"
  - url: /assets/images/exercises/rotator-manchet-4.jpg
    image_path: /assets/images/exercises/rotator-manchet-4-320.jpg
    alt: "Rotator manchet"
    title: "Rotator manchet"
last_modified_at: 2013-04-21T14:18:26Z
---
{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
