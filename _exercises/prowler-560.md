---
title: "Prowler"
instructions: ""
permalink: /oevelse/prowler/
redirect_from: /node/560
id: 560
language: da
header:
  teaser: /assets/images/exercises/prowler-0-320.jpg
tags:
  - Helkropsøvelse
  - Kondition
  - Styrketræning
  - helkropsøvelse
  - prowler
  - Baglår
  - Baller
  - Forlår
  - Hoftebøjere
  - Lægge
  - crossfit
categories:
  - Helkropsøvelse
training_type:
  - Kondition
  - Styrketræning
training_focus:
  - helkropsøvelse
equipment:
  - prowler
muscle_group:
  - Baglår
  - Baller
  - Forlår
  - Hoftebøjere
  - Lægge
gallery:
  - url: /assets/images/exercises/prowler-0.jpg
    image_path: /assets/images/exercises/prowler-0-320.jpg
    alt: "Prowler"
    title: "Prowler"
  - url: /assets/images/exercises/prowler-1.jpg
    image_path: /assets/images/exercises/prowler-1-320.jpg
    alt: "Prowler"
    title: "Prowler"
last_modified_at: 2016-01-11T08:39:24Z
---

{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
