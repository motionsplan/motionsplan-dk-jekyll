---
title: "Extensor Digitorum"
seo_title: "Extensor Digitorum | Muskler"
functional_group:
  - Håndleddets strækkere (dorsalflektorer) og fingerstrækkerne
joint:
  - Håndleddet
group:
  - Arme
name:
  latin: Extensor Digitorum
tags:
  - muskel
  - imagemap
categories:
  - Muskler
origin:
  da:
insertion:
  da:
function:
  da:
    - short: Extends the wrist.
      extended: This means that the extensor digitorum muscle straightens the wrist joint such that the angle between the back of the hand and the back of the forearm decreases (i.e. it moves the back of the hand toward the back of the forearm).
    - short: Extends the fingers.
      extended: This means that the extensor digitorum muscle straightens the fingers.
  en:
    - short: Extends the wrist.
      extended: This means that the extensor digitorum muscle straightens the wrist joint such that the angle between the back of the hand and the back of the forearm decreases (i.e. it moves the back of the hand toward the back of the forearm).
    - short: Extends the fingers.
      extended: This means that the extensor digitorum muscle straightens the fingers.
image: /assets/images/anatomy/extensor-digitorum.jpg
image_focus: /assets/images/anatomy/focus-extensor-digitorum.jpg
coords:
  - "341,218,344,218,354,193"
  - "563,217,560,219,554,195"
---

{{ page.name.da | capitalize }} hedder på latin *{{ page.name.latin | downcase }}*. Musklen laver {% for f in page.function.da %}{% if forloop.last == true and page.function.da.size > 1 %} og {% endif %}{{ f.short | downcase  }}{% if forloop.last == false and page.function.da.size > 1 %}, {% endif %}{% endfor %}. Musklen er en del af {{ page.functional_group | join: ", " | downcase }}.
