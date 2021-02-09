---
layout: single
title: &title "Ryggen"
excerpt: "Din rygsøjle går fra halebenet og op til kraniet. Den består af 24 knoglehvirvler: 7 halshvirvler, 12 brysthvirvler og 5 lændehvirvler."
tags:
  - led
latin: ""
movements:
  - title: Bøjning (i lændedelen)
    muscles:
      - Den lige
      - Den ydre skrå
      - Den indre skrå bugmuskel
  - title: Strækning (i lændedelen)
    muscles:
      - Den lige rygstrækker
  - title: Sidebøjning (hele rygsøjlen)
    muscles:
      - Den firkantede lændemuskel
      - Den lige rygstrækker
      - Den ydre skrå bugmuskel
      - Den indre skrå bugmuskel.
  - title: Rotation (i brystdelen)
    muscles:
      - Den firkantede lændemuskel
      - Den lige rygstrækker
      - Den ydre skrå bugmuskel
      - Den indre skrå bugmuskel
image: http://rygsygdom.dk/images/6/69/Columnavertebralis.jpg
header:
  overlay_image: https://besimplywell.com/wp-content/uploads/2018/02/xray-back.jpg
  caption: *title
---

{{ page.excerpt }}

{% comment %}

Udover halebenet og korsbenet består rygsøjlen af 24 hvirvler. Disse kan inddeles i: 7 halshvirvler, 12 brysthvirvler og 5 lændehvirvler.

Set fra siden er rygsøjlen S-formet med 4 krumninger, hvis man medtager halebenet. Det er vigtigt at vide, at halsdelen buer fremad, brystdelen buer bagud og lænden buer fremad (lændesvajet). Disse krumninger er med til at gøre rygsøjlen fjedrende overfor påvirkninger i længderetningen.

Den lige rygstrækker (Erector Spinae) er betegnelsen for den muskulatur, der løber op langs selve rygsøjlen. I virkeligheden er det ikke een muskel, men et helt kompleks af større og mindre muskler, der løber både lige op og på skrå.

## Bevægelser i rygsøjlen

De forskellige bevægelser foregår forskellige steder i rygsøjlen. Vi undlader her at omtale halsens bevægelser.

{% for m in page.movements %}
- **{{ m.title }}**.
  {{ m.muscles | join: ", " }}
{% endfor %}

{% endcomment %}

{% include figure image_path=page.image caption=page.title alt=page.title %}

