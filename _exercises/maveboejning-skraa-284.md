---
title: "Mavebøjning, skrå"
excerpt: "Mavebøjning, skrå"
instructions: "Mavebøjning, skrå"
permalink: /oevelse/maveboejning-skraa/
redirect_from: /node/284
id: 284
language: da
header:
  teaser: /assets/images/exercises/maveboejning-skraa-0-320.jpg
tags: []
categories:
  - Maveøvelser
training_type: []
training_focus: []
equipment: []
muscle_group: []
gallery:
  - url: /assets/images/exercises/maveboejning-skraa-0.jpg
    image_path: /assets/images/exercises/maveboejning-skraa-0-320.jpg
    alt: "Mavebøjning, skrå"
    title: "Mavebøjning, skrå"
  - url: /assets/images/exercises/maveboejning-skraa-1.jpg
    image_path: /assets/images/exercises/maveboejning-skraa-1-320.jpg
    alt: "Mavebøjning, skrå"
    title: "Mavebøjning, skrå"
last_modified_at: 2011-04-19T11:48:31Z
---

{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
