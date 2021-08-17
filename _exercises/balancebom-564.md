---
title: "Balancebom"
excerpt: ""
instructions: ""
permalink: /oevelse/balancebom/
redirect_from: /node/564
id: 564
language: da
header:
  teaser: /assets/images/exercises/balancebom-0-320.jpg
tags:
  - Koordination og balance
categories:
  - Koordination og balance
  - Balanceøvelser
training_type: []
training_focus: []
equipment:
muscle_group: []
alternative_titles: []
gallery:
  - url: /assets/images/exercises/balancebom-0.jpg
    image_path: /assets/images/exercises/balancebom-0-320.jpg
    alt: "Balancebom"
    title: "Balancebom"
  - url: /assets/images/exercises/balancebom-1.jpg
    image_path: /assets/images/exercises/balancebom-1-320.jpg
    alt: "Balancebom"
    title: "Balancebom"
last_modified_at: 2014-10-03T10:14:36Z
---

{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
