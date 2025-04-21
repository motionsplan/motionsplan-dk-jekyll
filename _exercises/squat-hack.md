---
title: "Hack Squat"
instructions: "Oprindeligt kaldet “hacke” og kommer fra det tyske ord for hæl da øvelsen oprindeligt blev udført med hælene samlet. Den nutidige form af hack squat udføres ved at stangen placeres som ved dødløft, blot på bagsiden af underbenene i stedet. Herfra gribes om stangen med ovenhåndsgreb og som ved klassisk dødløft, med armene ned langs siden på ydersiden af knæene. Stangen løftes herefter op indtil man er udstrakt og sænkes efterfølgende tilbage til gulvet. Det er meget forskelligt hvorvidt det er muligt for folk at udføre øvelsen optimalt og kan afhænge meget af antropometri og hvor store ens muskler er. fx kan øvelsen være problematisk at udføre hvis man har korte arme eller store baglår da dette kan gøre at disse kommer i vejen på vej op. Fordelene ved øvelsen er at man ved at have vægten bagved ikke kan komme frem med overkroppen uden at trække stangen ind i bagsiden af benene. Det tvinger derved overkroppen til at stå mere oprejst og løftet flyttes derved mere over i forlåret."
permalink: /oevelse/hack-squat/
key: 20201212203300
language: da
video:
  provider: youtube
  id: EdtaJRBqwes
#header:
#  teaser: /assets/images/exercises/180-jump-0-320.jpg
tags: []
categories:
  - Squat
training_type: []
training_focus: []
equipment: []
muscle_group: []
gallery: []
last_modified_at: 2020-11-02T13:43:26Z
---

{{ page.title }} kan trænes med {% for f in page.equipment %}{% if forloop.last == true and page.equipment > 1 %} og {% endif %}{{ f | downcase  }}{% if forloop.last == false and page.equipment > 1 %}, {% endif %}{% endfor %}. Øvelsen er en del af kategorien {{ page.categories | join: ", " | downcase }}. {% if page.muscle_group.size > 0 %}{{ page.title }} træner {% for f in page.muscle_group %}{% if forloop.last == true and page.muscle_group.size > 1 %} og {% endif %}{{ f | downcase }}{% if forloop.last == false and page.muscle_group.size > 2 %}, {% endif %}{% endfor %}.{% endif %}

{{ page.instructions }}
