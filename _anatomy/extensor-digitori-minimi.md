---
title: "Extensor Digitori Minimi"
seo_title: "Extensor Digitori Minimi | Muskler"
functional_group:
  - Håndleddets strækkere (dorsalflektorer) og fingerstrækkerne
joint:
  - Håndleddet
group:
  - Arme
name:
  latin: Extensor Digitori Minimi
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
      extended: This means that the extensor digiti minimi muscle straightens the wrist joint such that the angle between the back of the hand and the back of the forearm decreases (i.e. it moves the back of the hand toward the back of the forearm).
    - short: Extends digiti minimi (i.e. the little finger).
      extended: This means that the extensor digiti minimi muscle straightens the little finger.
  en:
    - short: Extends the wrist.
      extended: This means that the extensor digiti minimi muscle straightens the wrist joint such that the angle between the back of the hand and the back of the forearm decreases (i.e. it moves the back of the hand toward the back of the forearm).
    - short: Extends digiti minimi (i.e. the little finger).
      extended: This means that the extensor digiti minimi muscle straightens the little finger.
image: /assets/images/anatomy/extensor-digiti-minimi.jpg
image_focus: /assets/images/anatomy/focus-extensor-digiti-minimi.jpg
coords:
  - "346,219,348,221,357,191"
  - "555,220,558,220,547,179"
---

{{ page.name.da | capitalize }} hedder på latin *{{ page.name.latin | downcase }}*. Musklen laver {% for f in page.function.da %}{% if forloop.last == true and page.function.da.size > 1 %} og {% endif %}{{ f.short | downcase  }}{% if forloop.last == false and page.function.da.size > 1 %}, {% endif %}{% endfor %}. Musklen er en del af {{ page.functional_group | join: ", " | downcase }}.
