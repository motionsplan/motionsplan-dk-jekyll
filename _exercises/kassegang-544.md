---
title: "Kassegang"
excerpt: "Med to kasser skal du tilbagelægge en distance. Du står på den ene kasse og flytter den anden fremad."
instructions: "Med to kasser skal du tilbagelægge en distance. Du står på den ene kasse og flytter den anden fremad."
permalink: /oevelse/kassegang/
redirect_from: /node/544
id: 544
language: da
header:
  teaser: /assets/images/exercises/kassegang-0-320.jpg
tags:
  - Koordination og balance
categories:
  - Koordination og balance
training_type: []
training_focus: []
equipment: []
muscle_group: []
gallery:
  - url: /assets/images/exercises/kassegang-0.jpg
    image_path: /assets/images/exercises/kassegang-0-320.jpg
    alt: "Kassegang "
    title: "Kassegang "
  - url: /assets/images/exercises/kassegang-1.jpg
    image_path: /assets/images/exercises/kassegang-1-320.jpg
    alt: "Kassegang "
    title: "Kassegang "
  - url: /assets/images/exercises/kassegang-2.jpg
    image_path: /assets/images/exercises/kassegang-2-320.jpg
    alt: "Kassegang "
    title: "Kassegang "
  - url: /assets/images/exercises/kassegang-3.jpg
    image_path: /assets/images/exercises/kassegang-3-320.jpg
    alt: "Kassegang "
    title: "Kassegang "
last_modified_at: 2013-10-21T08:31:15Z
---

{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
