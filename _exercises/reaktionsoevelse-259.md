---
title: "Reaktionsøvelse"
excerpt: "Lig på maven og kom om på ryggen og tilbage igen ved at føre benene gennem armene."
instructions: "Lig på maven og kom om på ryggen og tilbage igen ved at føre benene gennem armene."
permalink: /oevelse/reaktionsoevelse/
redirect_from: /node/259
id: 259
language: da
header:
  teaser: /assets/images/exercises/reaktionsoevelse-0-320.jpg
tags:
  - Kondition
  - kropsvægt
  - cirkeltræning
categories: []
training_type:
  - Kondition
training_focus:
equipment:
  - kropsvægt
muscle_group: []
gallery:
  - url: /assets/images/exercises/reaktionsoevelse-0.jpg
    image_path: /assets/images/exercises/reaktionsoevelse-0-320.jpg
    alt: "Reaktionsøvelse"
    title: "Reaktionsøvelse"
  - url: /assets/images/exercises/reaktionsoevelse-1.jpg
    image_path: /assets/images/exercises/reaktionsoevelse-1-320.jpg
    alt: "Reaktionsøvelse"
    title: "Reaktionsøvelse"
last_modified_at: 2014-10-10T21:05:41Z
---

{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}

Ser let ud på papiret, men det er virkelig hårdt.
