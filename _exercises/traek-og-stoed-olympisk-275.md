---
title: "Frivend og stød, olympisk"
instructions: ""
permalink: /oevelse/traek-og-stoed-olympisk/
redirect_from: /node/275
id: 275
language: da
header:
  teaser: /assets/images/exercises/traek-og-stoed-olympisk-0-320.jpg
tags:
  - helkropsøvelse
  - vægtstang
categories: []
training_type: []
training_focus:
  - helkropsøvelse
equipment:
  - vægtstang
muscle_group:
alternative_titles:
  - clean and jerk
gallery:
  - url: /assets/images/exercises/traek-og-stoed-olympisk-0.jpg
    image_path: /assets/images/exercises/traek-og-stoed-olympisk-0-320.jpg
    alt: "Frivend og stød, olympisk"
    title: "Frivend og stød, olympisk"
  - url: /assets/images/exercises/traek-og-stoed-olympisk-1.jpg
    image_path: /assets/images/exercises/traek-og-stoed-olympisk-1-320.jpg
    alt: "Frivend og stød, olympisk"
    title: "Frivend og stød, olympisk"
  - url: /assets/images/exercises/traek-og-stoed-olympisk-2.jpg
    image_path: /assets/images/exercises/traek-og-stoed-olympisk-2-320.jpg
    alt: "Frivend og stød, olympisk"
    title: "Frivend og stød, olympisk"
  - url: /assets/images/exercises/traek-og-stoed-olympisk-3.jpg
    image_path: /assets/images/exercises/traek-og-stoed-olympisk-3-320.jpg
    alt: "Frivend og stød, olympisk"
    title: "Frivend og stød, olympisk"
  - url: /assets/images/exercises/traek-og-stoed-olympisk-4.jpg
    image_path: /assets/images/exercises/traek-og-stoed-olympisk-4-320.jpg
    alt: "Frivend og stød, olympisk"
    title: "Frivend og stød, olympisk"
last_modified_at: 2011-04-16T07:46:37Z
---
{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
