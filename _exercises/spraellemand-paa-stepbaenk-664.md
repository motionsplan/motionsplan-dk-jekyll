---
title: "Sprællemand på stepbænk"
excerpt: ""
instructions: ""
permalink: /oevelse/spraellemand-paa-stepbaenk/
redirect_from: /node/664
id: 664
language: da
header:
  teaser: /assets/images/exercises/spraellemand-paa-stepbaenk-0-320.jpg
tags:
  - Kondition og puls
  - Kondition
  - helkropsøvelse
  - bænk
  - Step
  - Arme
  - Baller
  - Forlår
  - Lægge
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
  - Arme
  - Baller
  - Forlår
  - Lægge
alternative_titles:
gallery:
  - url: /assets/images/exercises/spraellemand-paa-stepbaenk-0.jpg
    image_path: /assets/images/exercises/spraellemand-paa-stepbaenk-0-320.jpg
    alt: "Sprællemand på stepbænk"
    title: "Sprællemand på stepbænk"
  - url: /assets/images/exercises/spraellemand-paa-stepbaenk-1.jpg
    image_path: /assets/images/exercises/spraellemand-paa-stepbaenk-1-320.jpg
    alt: "Sprællemand på stepbænk"
    title: "Sprællemand på stepbænk"
last_modified_at: 2015-04-07T11:48:45Z
---
{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
