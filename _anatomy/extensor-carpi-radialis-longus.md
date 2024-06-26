---
title: "Extensor Carpi Radialis Longus"
seo_title: "Extensor Carpi Radialis Longus | Muskler"
functional_group:
  - Håndleddets strækkere (dorsalflektorer) og fingerstrækkerne
joint:
  - Håndleddet
group:
  - Arme
name:
  latin: Extensor Carpi Radialis Longus
tags:
  - imagemap
  - muskel
categories:
  - Muskler
origin:
  da:
insertion:
  da:
function:
  da:
    - short: Extends the wrist.
      extended: This means that the extensor carpi radialis longus muscle straightens the wrist joint such that the angle between the back of the hand and the back of the forearm decreases (i.e. it moves the back of the hand toward the back of the forearm).
    - short: Abducts the hand.
      extended: This means that the extensor carpi radialis longus muscle bends the wrist sideways such that the thumb side of the hand moves toward the forearm.
  en:
    - short: Extends the wrist.
      extended: This means that the extensor carpi radialis longus muscle straightens the wrist joint such that the angle between the back of the hand and the back of the forearm decreases (i.e. it moves the back of the hand toward the back of the forearm).
    - short: Abducts the hand.
      extended: This means that the extensor carpi radialis longus muscle bends the wrist sideways such that the thumb side of the hand moves toward the forearm.
image: /assets/images/anatomy/extensor-carpi-radialis-longus.jpg
image_focus: /assets/images/anatomy/focus-extensor-carpi-radialis-longus.jpg
coords:
  - "548,176,556,181,559,198"
  - "347,201,356,179,361,178"
---

{{ page.name.da | capitalize }} hedder på latin *{{ page.name.latin | downcase }}*. Musklen laver {% for f in page.function.da %}{% if forloop.last == true and page.function.da.size > 1 %} og {% endif %}{{ f.short | downcase  }}{% if forloop.last == false and page.function.da.size > 1 %}, {% endif %}{% endfor %}. Musklen er en del af {{ page.functional_group | join: ", " | downcase }}.
