---
title: "Flexor Carpi Radialis"
seo_title: "Flexor Carpi Radialis | Muskler"
functional_group:
  - Håndleddets bøjere (volarflektorer) og fingerbøjerne
joint:
  - Håndleddet
group:
  - Arme
name:
  latin: Flexor Carpi Radialis
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
    - short: Flexes the wrist.
      extended: This means that the flexor carpi radialis muscle bends the wrist joint such that the angle between the palm of the hand and the front of the forearm decreases (i.e. it moves the palm of the hand toward the front of the forearm).
    - short: Abducts the hand.
      extended: This means that the flexor carpi radialis muscle bends the wrist sideways such that the thumb side of the hand moves toward the forearm.
  en:
    - short: Flexes the wrist.
      extended: This means that the flexor carpi radialis muscle bends the wrist joint such that the angle between the palm of the hand and the front of the forearm decreases (i.e. it moves the palm of the hand toward the front of the forearm).
    - short: Abducts the hand.
      extended: This means that the flexor carpi radialis muscle bends the wrist sideways such that the thumb side of the hand moves toward the forearm.
image: /assets/images/anatomy/flexor-carpi-radialis.jpg
image_focus: /assets/images/anatomy/focus-flexor-carpi-radialis.jpg
coords:
  - "70,184,68,178,49,206,54,208"
  - "224,181,227,180,246,206,243,208"
---

{{ page.name.da | capitalize }} hedder på latin *{{ page.name.latin | downcase }}*. Musklen laver {% for f in page.function.da %}{% if forloop.last == true and page.function.da.size > 1 %} og {% endif %}{{ f.short | downcase  }}{% if forloop.last == false and page.function.da.size > 1 %}, {% endif %}{% endfor %}. Musklen er en del af {{ page.functional_group | join: ", " | downcase }}.
