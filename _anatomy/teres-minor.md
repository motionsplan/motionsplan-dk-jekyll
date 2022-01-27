---
title: "Teres Minor"
seo_title: "Teres Minor | Muskler"
joint:
  - Skulderleddet
group:
  - Ryg
name:
  latin: "Teres Minor"
tags:
  - muskel
categories:
  - Muskler
origin:
  da:
insertion:
  da:
function:
#  da:
#  - short: Laterally rotates the upper arm.
#    extended: This means that the teres minor muscle rotates the upper arm outward around the axis of the bone (i.e. it rotates the upper arm away from the vertical midline of the body).
#  en:
#  - short: Laterally rotates the upper arm.
#    extended: This means that the teres minor muscle rotates the upper arm outward around the axis of the bone (i.e. it rotates the upper arm away from the vertical midline of the body).
#image: /assets/images/anatomy/teres-major.jpg
#image_focus: /assets/images/anatomy/focus-teres-major.jpg
#coords:
#  - "411,130,430,132,410,119"
#  - "485,132,503,129,505,117"
---

{{ page.name.da | capitalize }} hedder på latin *{{ page.name.latin | downcase }}*. Musklen laver {% for f in page.function.da %}{% if forloop.last == true and page.function.da.size > 1 %} og {% endif %}{{ f.short | downcase  }}{% if forloop.last == false and page.function.da.size > 1 %}, {% endif %}{% endfor %}. Musklen er en del af {{ page.functional_group | join: ", " | downcase }}.

## Træning af {{ page.title }}

{% include video provider="youtube" id="k91SAsiE3wY" %}
