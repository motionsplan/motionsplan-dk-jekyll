---
title: "Bildæk, træ og slam"
instructions: ""
permalink: /oevelse/bildaek-trae-og-slam/
redirect_from:
  - /node/575
  - /oevelse/bildæk-træ-og-slam/
id: 575
language: da
header:
  teaser: /assets/images/exercises/bildaek-trae-og-slam-0-320.jpg
tags:
  - Kondition og puls
  - outdoor
categories:
  - Kondition og puls
training_type: []
training_focus: []
equipment:
  - bildæk
muscle_group: []
alternative_titles: []
gallery:
  - url: /assets/images/exercises/bildaek-trae-og-slam-0.jpg
    image_path: /assets/images/exercises/bildaek-trae-og-slam-0-320.jpg
    alt: "Bildæk, træ og slam"
    title: "Bildæk, træ og slam"
  - url: /assets/images/exercises/bildaek-trae-og-slam-1.jpg
    image_path: /assets/images/exercises/bildaek-trae-og-slam-1-320.jpg
    alt: "Bildæk, træ og slam"
    title: "Bildæk, træ og slam"
  - url: /assets/images/exercises/bildaek-trae-og-slam-2.jpg
    image_path: /assets/images/exercises/bildaek-trae-og-slam-2-320.jpg
    alt: "Bildæk, træ og slam"
    title: "Bildæk, træ og slam"
  - url: /assets/images/exercises/bildaek-trae-og-slam-3.jpg
    image_path: /assets/images/exercises/bildaek-trae-og-slam-3-320.jpg
    alt: "Bildæk, træ og slam"
    title: "Bildæk, træ og slam"
  - url: /assets/images/exercises/bildaek-trae-og-slam-4.jpg
    image_path: /assets/images/exercises/bildaek-trae-og-slam-4-320.jpg
    alt: "Bildæk, træ og slam"
    title: "Bildæk, træ og slam"
last_modified_at: 2014-10-03T10:30:12Z
---

{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
