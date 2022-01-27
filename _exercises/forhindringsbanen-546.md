---
title: "Forhindringsbanen"
excerpt: "Du skal gennem forhindringsbanen så hurtigt som muligt. Du skal selv bygge forhindringsbanen uden hjælp fra andre. Hvis først du har lagt en forhindring, må du ikke flytte den igen."
instructions: "Du skal gennem forhindringsbanen så hurtigt som muligt. Du skal selv bygge forhindringsbanen uden hjælp fra andre. Hvis først du har lagt en forhindring, må du ikke flytte den igen."
permalink: /oevelse/forhindringsbanen/
redirect_from: /node/546
id: 546
language: da
tags:
  - Koordination og balance
categories:
  - Koordination og balance
training_type: []
training_focus: []
equipment:
muscle_group: []
alternative_titles: []
gallery:
last_modified_at: 2013-10-21T12:36:39Z
---

{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
