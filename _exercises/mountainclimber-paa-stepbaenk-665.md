---
title: "Mountainclimber på stepbænk"
instructions: ""
permalink: /oevelse/mountainclimber-paa-stepbaenk/
redirect_from: /node/665
id: 665
language: da
header:
  teaser: /assets/images/exercises/mountainclimber-paa-stepbaenk-0-320.jpg
tags:
  - Kondition og puls
  - Kondition
  - helkropsøvelse
  - bænk
  - Step
  - Hoftebøjere
  - Lægge
  - Mave
categories:
  - Kondition og puls
training_type:
  - Kondition
training_focus:
  - helkropsøvelse
equipment:
  - bænk
  - Step
muscle_group:
  - Hoftebøjere
  - Lægge
  - Mave
alternative_titles: []
gallery:
  - url: /assets/images/exercises/mountainclimber-paa-stepbaenk-0.jpg
    image_path: /assets/images/exercises/mountainclimber-paa-stepbaenk-0-320.jpg
    alt: "Mountainclimber på stepbænk"
    title: "Mountainclimber på stepbænk"
  - url: /assets/images/exercises/mountainclimber-paa-stepbaenk-1.jpg
    image_path: /assets/images/exercises/mountainclimber-paa-stepbaenk-1-320.jpg
    alt: "Mountainclimber på stepbænk"
    title: "Mountainclimber på stepbænk"
last_modified_at: 2015-04-07T11:51:30Z
---

{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
