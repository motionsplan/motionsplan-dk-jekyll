---
title: Den store brystmuskel
seo_title: "Den store brystmuskel | Pectoralis Major | Muskler"
functional_group:
  - Armens fremadføring
joint:
  - Skulderleddet
group:
  - Bryst
name:
  latin: Pectoralis Major
  da: Den store brystmuskel
origin:
  da: Brystben, kraveben og ribbensbrusk
insertion:
  da: Øverst foran på overarmsknoglen
tags:
  - imagemap
  - fitnessinstruktør
  - muskel
categories:
  - Muskler
function:
  da:
    - short: Abducts the arm at the shoulder.
      extended: This means that the pectoralis major muscle moves the upper arm away from the vertical midline of the body (i.e. the action of raising your arms to the side).
    - short: Medially rotates the upper arm.
      extended: This means that the pectoralis major muscle rotates the upper arm inward around the axis of the bone (i.e. it rotates the upper arm toward the vertical midline of the body).
  en:
    - short: Abducts the arm at the shoulder.
      extended: This means that the pectoralis major muscle moves the upper arm away from the vertical midline of the body (i.e. the action of raising your arms to the side).
    - short: Medially rotates the upper arm.
      extended: This means that the pectoralis major muscle rotates the upper arm inward around the axis of the bone (i.e. it rotates the upper arm toward the vertical midline of the body).
names:
  - chest
  - pecs
image: /assets/images/anatomy/pectoralis-major.jpg
image_focus: /assets/images/anatomy/focus-pectoralis-major.jpg
coords:
  - "133,96,118,97,103,102,101,114,104,126,108,138,117,143,139,141,141,121"
  - "155,97,146,120,149,142,167,143,181,136,186,117,183,106,171,98"
---

{{ page.name.da | capitalize }} hedder på latin *{{ page.name.latin | downcase }}*. Musklen laver {% for f in page.function.da %}{% if forloop.last == true and page.function.da.size > 1 %} og {% endif %}{{ f.short | downcase  }}{% if forloop.last == false and page.function.da.size > 1 %}, {% endif %}{% endfor %}. Musklen er en del af {{ page.functional_group | join: ", " | downcase }}.
