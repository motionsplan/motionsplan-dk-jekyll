---
title: "Albueleddet"
excerpt: ""
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

## Bevægelser

{% for m in page.movements %}
- **{{ m.title }}**.
  {{ m.muscles | join: ", " }}
{% endfor %}

{% include figure image_path=page.image caption=page.title alt=page.title %}
