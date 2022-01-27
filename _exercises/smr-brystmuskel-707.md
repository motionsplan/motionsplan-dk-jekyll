---
title: "SMR brystmuskel"
instructions: ""
permalink: /oevelse/smr-brystmuskel/
redirect_from: /node/707
id: 707
language: da
tags:
  - Self Myofascial Release (SMR)
  - lacrosse bold
categories:
  - SMR
training_type:
  - Self Myofascial Release (SMR)
training_focus: []
equipment:
  - lacrosse bold
muscle_group: []
alternative_titles: []
gallery:
last_modified_at: 2016-10-14T11:10:57Z
---
{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
