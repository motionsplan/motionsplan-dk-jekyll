---
title: "Bildæk, armstrækning og vend"
instructions: ""
permalink: /oevelse/bildaek-armstraekning-og-vend/
redirect_from:
  - /node/582
  - /oevelse/bildæk-armstrækning-og-vend/
id: 582
language: da
header:
  teaser: /assets/images/exercises/bildaek-armstraekning-og-vend-0-320.jpg
tags:
  - Kropsstamme
  - outdoor
categories:
  - Kropsstamme
training_type: []
training_focus: []
equipment:
  - bildæk
muscle_group: []
alternative_titles: []
gallery:
  - url: /assets/images/exercises/bildaek-armstraekning-og-vend-0.jpg
    image_path: /assets/images/exercises/bildaek-armstraekning-og-vend-0-320.jpg
    alt: "Bildæk, armstrækning og vend"
    title: "Bildæk, armstrækning og vend"
  - url: /assets/images/exercises/bildaek-armstraekning-og-vend-1.jpg
    image_path: /assets/images/exercises/bildaek-armstraekning-og-vend-1-320.jpg
    alt: "Bildæk, armstrækning og vend"
    title: "Bildæk, armstrækning og vend"
  - url: /assets/images/exercises/bildaek-armstraekning-og-vend-2.jpg
    image_path: /assets/images/exercises/bildaek-armstraekning-og-vend-2-320.jpg
    alt: "Bildæk, armstrækning og vend"
    title: "Bildæk, armstrækning og vend"
last_modified_at: 2014-10-03T11:04:19Z
---

{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
