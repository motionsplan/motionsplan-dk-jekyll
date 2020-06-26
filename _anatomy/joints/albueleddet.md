---
title: "Albueleddet"
excerpt: "Albueleddet er et hængselled, der forbinder overarmen med underarmen og hånden."
latin: 
tags:
  - led
movements:
  - title: Bøjning
    muscles:
      - Biceps Brachii
      - Brachialis
  - title: Strækning
    muscles:
      - Triceps Brachii
  - title: Rotation - supination
    muscles:
      - Biceps Brachi
  - title: Rotation - pronation
    muscles:
      - Underarmsmusklerne
image: https://ars.els-cdn.com/content/image/1-s2.0-S0021929013003527-gr1.jpg
header:
  overlay_image: https://i1.wp.com/dontforgetthebubbles.com/wp-content/uploads/2013/11/image1.jpg
---

Albueleddet består af den nederste del af overarmsknoglen og to underarmsknogler, der ikke kun gør det muligt bøje og strække albuen, men også at dreje i hånden og underarmen. På hver side af leddet er ledkapslen forstærket med et sideledbånd, der kan beskadiges ved et ledskred.

Hen over albueleddet går sener og muskler ned til underarmen og fingre. De store muskler, som bruges til at strække og bøje fingrene og håndleddet, sidder fast med sener på albueknoerne, som er små knoglefremspring på albuens inderside og yderside.

## Bevægelser

{% for m in page.movements %}
- **{{ m.title }}**.
  {{ m.muscles | join: ", " }}
{% endfor %}

{% include figure image_path=page.image caption=page.title alt=page.title %}
