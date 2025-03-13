---
title: "L-Sit"
seo_title: "L-Sit"
instructions: ""
permalink: /oevelse/l-sit/
redirect_from: /node/508
id: 508
language: da
header:
  teaser: /assets/images/exercises/mave-hanging-leg-raise-0-320.jpg
tags:
  - Knees Over Toe Guy
categories:
  - Maveøvelser
training_type: []
training_focus: []
equipment:
  - bar
muscle_group:
  - Mave
alternative_titles: []
gallery:
  - url: /assets/images/exercises/mave-hanging-leg-raise-0.jpg
    image_path: /assets/images/exercises/mave-hanging-leg-raise-0-320.jpg
    alt: "Mave, hanging leg raise"
    title: "Mave, hanging leg raise"
  - url: /assets/images/exercises/mave-hanging-leg-raise-1.jpg
    image_path: /assets/images/exercises/mave-hanging-leg-raise-1-320.jpg
    alt: "Mave, hanging leg raise"
    title: "Mave, hanging leg raise"
  - url: /assets/images/exercises/mave-hanging-leg-raise-2.jpg
    image_path: /assets/images/exercises/mave-hanging-leg-raise-2-320.jpg
    alt: "Mave, hanging leg raise"
    title: "Mave, hanging leg raise"
last_modified_at: 2013-04-21T14:22:12Z
---

{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}

Hvis du vil have en hårdere variation, så kan du prøve [toes to bar](/oevelse/toes-to-bar/).
