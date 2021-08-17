---
title: "Mobilisering ankel"
excerpt: ""
instructions: ""
permalink: /oevelse/mobilisering-ankel/
redirect_from: /node/689
id: 689
language: da
header:
  teaser: /assets/images/exercises/mobilisering-ankel-0-320.jpg
tags:
  - Strækøvelser
  - kropsvægt
categories: []
training_type:
  - Strækøvelser
training_focus:
equipment:
  - kropsvægt
muscle_group: []
alternative_titles: []
gallery:
  - url: /assets/images/exercises/mobilisering-ankel-0.jpg
    image_path: /assets/images/exercises/mobilisering-ankel-0-320.jpg
    alt: "Mobilisering ankel"
    title: "Mobilisering ankel"
last_modified_at: 2015-04-10T13:53:13Z
---

{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
