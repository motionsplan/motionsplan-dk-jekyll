---
title: "Suitcase carry"
excerpt: ""
instructions: ""
permalink: /oevelse/suitcase-carry/
redirect_from: /node/736
id: 736
language: da
tags: []
categories: []
training_type: []
training_focus: []
equipment:
muscle_group: []
alternative_titles: []
gallery:
video:
  provider: youtube
  id: FyK-synJ9fs
last_modified_at: 2016-10-31T09:36:12Z
---
{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
