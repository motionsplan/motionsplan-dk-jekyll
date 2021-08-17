---
title: "Trappeløb"
excerpt: ""
instructions: ""
permalink: /oevelse/trappeloeb/
redirect_from:
  - /node/588
  - /oevelse/trappeløb/
id: 588
language: da
header:
  teaser: /assets/images/exercises/trappeloeb-0-320.jpg
tags:
  - Kondition og puls
categories:
  - Kondition og puls
training_type: []
training_focus: []
equipment:
muscle_group: []
alternative_titles: []
gallery:
  - url: /assets/images/exercises/trappeloeb-0.jpg
    image_path: /assets/images/exercises/trappeloeb-0-320.jpg
    alt: "Trappeløb"
    title: "Trappeløb"
  - url: /assets/images/exercises/trappeloeb-1.jpg
    image_path: /assets/images/exercises/trappeloeb-1-320.jpg
    alt: "Trappeløb"
    title: "Trappeløb"
  - url: /assets/images/exercises/trappeloeb-2.jpg
    image_path: /assets/images/exercises/trappeloeb-2-320.jpg
    alt: "Trappeløb"
    title: "Trappeløb"
last_modified_at: 2014-10-03T11:10:56Z
---
{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
