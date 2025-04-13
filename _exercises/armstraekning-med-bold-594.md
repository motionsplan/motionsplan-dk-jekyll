---
title: "Armstrækning, med bold"
instructions: ""
permalink: /oevelse/armstraekning-med-bold/
id: 594
language: da
header:
  teaser: /assets/images/exercises/armstraekning-med-bold-0-320.jpg
tags:
  - Pres
  - Styrketræning
  - skub vandret
  - kropsstamme
  - bold
  - Medicinbold
  - Arme
  - Bryst
  - Core
  - Mave
categories:
  - Armstrækninger
  - Pres
training_type:
  - Styrketræning
training_focus:
  - skub vandret
  - kropsstamme
equipment:
  - bold
  - Medicinbold
muscle_group:
  - Arme
  - Bryst
  - Core
  - Mave
alternative_titles: []
gallery:
  - url: /assets/images/exercises/armstraekning-med-bold-0.jpg
    image_path: /assets/images/exercises/armstraekning-med-bold-0-320.jpg
    alt: "Armstrækning, med bold"
    title: "Armstrækning, med bold"
  - url: /assets/images/exercises/armstraekning-med-bold-1.jpg
    image_path: /assets/images/exercises/armstraekning-med-bold-1-320.jpg
    alt: "Armstrækning, med bold"
    title: "Armstrækning, med bold"
  - url: /assets/images/exercises/armstraekning-med-bold-2.jpg
    image_path: /assets/images/exercises/armstraekning-med-bold-2-320.jpg
    alt: "Armstrækning, med bold"
    title: "Armstrækning, med bold"
  - url: /assets/images/exercises/armstraekning-med-bold-3.jpg
    image_path: /assets/images/exercises/armstraekning-med-bold-3-320.jpg
    alt: "Armstrækning, med bold"
    title: "Armstrækning, med bold"
  - url: /assets/images/exercises/armstraekning-med-bold-4.jpg
    image_path: /assets/images/exercises/armstraekning-med-bold-4-320.jpg
    alt: "Armstrækning, med bold"
    title: "Armstrækning, med bold"
last_modified_at: 2014-10-12T21:56:03Z
---

{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
