---
title: "Muscle up"
excerpt: "Hæng i en bar med overhåndsgreb. Herfra trækker du dig selv så højt op, at du kan afslutte med at stemme dig op, så du har strakte arme og hovedet over baren."
instructions: "Hæng i en bar med overhåndsgreb. Herfra trækker du dig selv så højt op, at du kan afslutte med at stemme dig op, så du har strakte arme og hovedet over baren."
permalink: /oevelse/muscle/
redirect_from: /node/238
id: 238
language: da
header:
  teaser: /assets/images/exercises/muscle-0-320.jpg
tags:
  - kropsvægt
  - bar
  - crossfit
categories: []
training_type: []
training_focus: []
equipment:
  - kropsvægt
  - bar
muscle_group: []
gallery:
  - url: /assets/images/exercises/muscle-0.jpg
    image_path: /assets/images/exercises/muscle-0-320.jpg
    alt: "Muscle up"
    title: "Muscle up"
  - url: /assets/images/exercises/muscle-1.jpg
    image_path: /assets/images/exercises/muscle-1-320.jpg
    alt: "Muscle up"
    title: "Muscle up"
  - url: /assets/images/exercises/muscle-2.jpg
    image_path: /assets/images/exercises/muscle-2-320.jpg
    alt: "Muscle up"
    title: "Muscle up"
last_modified_at: 2011-04-19T11:58:59Z
---

{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
