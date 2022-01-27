---
title: "Step, footwork"
excerpt: "Start stående på tværs af steppen. Løb ned og op ad steppen. Venstre fod på venstre side af steppen, og højre fod på højre side af steppen. "
instructions: "Start stående på tværs af steppen. Løb ned og op ad steppen. Venstre fod på venstre side af steppen, og højre fod på højre side af steppen. "
permalink: /oevelse/step/
redirect_from: /node/532
id: 532
language: da
header:
  teaser: /assets/images/exercises/step-0-320.jpg
tags:
  - Kondition og puls
  - Kondition
  - helkropsøvelse
  - kasse
  - plint
  - Step
  - Baller
  - Forlår
  - Lægge
categories:
  - Kondition og puls
training_type:
  - Kondition
training_focus:
  - helkropsøvelse
equipment:
  - kasse
  - plint
  - Step
muscle_group:
  - Baller
  - Forlår
  - Lægge
gallery:
  - url: /assets/images/exercises/step-0.jpg
    image_path: /assets/images/exercises/step-0-320.jpg
    alt: "Step, footwork"
    title: "Step, footwork"
  - url: /assets/images/exercises/step-1.jpg
    image_path: /assets/images/exercises/step-1-320.jpg
    alt: "Step, footwork"
    title: "Step, footwork"
  - url: /assets/images/exercises/step-2.jpg
    image_path: /assets/images/exercises/step-2-320.jpg
    alt: "Step, footwork"
    title: "Step, footwork"
  - url: /assets/images/exercises/step-3.jpg
    image_path: /assets/images/exercises/step-3-320.jpg
    alt: "Step, footwork"
    title: "Step, footwork"
  - url: /assets/images/exercises/step-4.jpg
    image_path: /assets/images/exercises/step-4-320.jpg
    alt: "Step, footwork"
    title: "Step, footwork"
last_modified_at: 2014-10-30T11:39:48Z
---
{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}
