---
title: "Sprint"
instructions: ""
permalink: /oevelse/sprint-0/
redirect_from: /node/610
id: 610
language: da
header:
  teaser: /assets/images/exercises/sprint-0-0-320.jpg
tags:
  - Hård styrkeøvelse
  - Kondition
  - helkropsøvelse
  - kropsvægt
  - Baglår
  - Baller
  - Core
  - Forlår
  - Hoftebøjere
  - Lægge
categories:
  - Hård styrkeøvelse
training_type:
  - Kondition
training_focus:
  - helkropsøvelse
equipment:
  - kropsvægt
muscle_group:
  - Baglår
  - Baller
  - Core
  - Forlår
  - Hoftebøjere
  - Lægge
alternative_titles: []
gallery:
  - url: /assets/images/exercises/sprint-0-0.jpg
    image_path: /assets/images/exercises/sprint-0-0-320.jpg
    alt: "Sprint"
    title: "Sprint"
last_modified_at: 2014-10-30T10:32:44Z
---
{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
