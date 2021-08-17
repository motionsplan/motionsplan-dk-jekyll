---
title: "Bokning, slå i maven"
instructions: ""
permalink: /oevelse/bokning-slaa-i-maven/
redirect_from: /node/668
id: 668
language: da
header:
  teaser: /assets/images/exercises/bokning-slaa-i-maven-0-320.jpg
tags:
  - Kondition og puls
  - Kondition
  - Arme
  - Mave
categories:
  - Kondition og puls
training_type:
  - Kondition
training_focus:
equipment:
muscle_group:
  - Arme
  - Mave
alternative_titles: []
gallery:
  - url: /assets/images/exercises/bokning-slaa-i-maven-0.jpg
    image_path: /assets/images/exercises/bokning-slaa-i-maven-0-320.jpg
    alt: "Bokning, slå i maven"
    title: "Bokning, slå i maven"
  - url: /assets/images/exercises/bokning-slaa-i-maven-1.jpg
    image_path: /assets/images/exercises/bokning-slaa-i-maven-1-320.jpg
    alt: "Bokning, slå i maven"
    title: "Bokning, slå i maven"
last_modified_at: 2015-04-07T11:58:18Z
---

{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
