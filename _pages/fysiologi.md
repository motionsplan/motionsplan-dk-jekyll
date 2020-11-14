---
layout: single
title: &title "Fysiologi"
excerpt: "Fysiologi er læren om kroppens forskellige organsystemer og deres funktioner i hvile og under fysisk aktivitet. Fysiologien beskæftiger sig med den sunde krop under normale betingelser."
permalink: /fysiologi/
system:
  - fitnessinstruktør
header:
  overlay_image: https://images.unsplash.com/photo-1559757296-5c84adc6d116?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80
  teaser: https://images.unsplash.com/photo-1559757296-5c84adc6d116?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80
  caption: *title
  overlay_filter: 0.4
feature_row:
  - image_path: https://www.denintelligentekrop.dk/media/catalog/product/cache/1/image/1600x/9df78eab33525d08d6e5fb8d27136e95/a/n/anatomisk-guide-til-bevaegeapparatet-9788777499104-andrew-biel-gitte-bjerg-fuusager.jpg
    alt: "Anatomisk Guide til Bevægeapparatet"
    title: "Anatomisk Guide til Bevægeapparatet"
    excerpt: "En praktisk guide til lokalisering af muskler, knogler med mere. Før du kan få succes med at undersøge og behandle bevægeapparatet, er du nødt til først at kende dets opbygning og kunne lokalisere de relevante strukturer."
    url: "https://www.partner-ads.com/dk/klikbanner.php?partnerid=28187&bannerid=38484&htmlurl=https://www.denintelligentekrop.dk/anatomisk-guide-til-bevaegeapparatet-9788777499104"
    btn_label: "Se prisen hos Den Intelligente Krop*"
    btn_class: "btn--success"
  - image_path: https://cdn6.tales.dk/00002/73191/cover.20160911.jpg
    alt: "Menneskekroppen - Anatomi, fysiologi og sygdomme"
    title: "Menneskekroppen - Anatomi, fysiologi og sygdomme"
    excerpt: "Menneskekroppen - anatomi, fysiologi og sygdomme er et anatomisk atlas til mennesket i det 21. århundrede. Gennem de computergenererede 3d-billeder og fantastiske illustrationer kan man opleve menneskekroppen i hidtil uset detaljegrad og skønhed."
    url: "https://www.partner-ads.com/dk/klikbanner.php?partnerid=28187&bannerid=55214&htmlurl=https://bogreolen.dk/menneskekroppen_steve-parker_9788756784436"
    btn_label: "Se prisen hos Tales*"
    btn_class: "btn--success"
  - image_path: https://imgcdn.saxo.com/_9788762809000/0x500
    alt: "Bevægeapparatets anatomi"
    title: "Bevægeapparatets anatomi"
    excerpt: "Når man skal lære om anatomi er det selvsagt en fordel med gode lærebøger, og her er “Bevægeapparatets anatomi” en absolut klassiker. Bag lærebogen står forfatterne Finn Bojsen Møller, Jan Hejle, Erik Bruun Simonsen, Jørgen Tranum-Jensen. De kombinerer viden om almen anatomi med information om hvordan man forebygger, undersøger, behandler, træner og genoptræner."
    url: "https://www.partner-ads.com/dk/klikbanner.php?partnerid=28187&bannerid=43264&htmlurl=https://www.saxo.com/dk/bevaegeapparatets-anatomi_joergen-tranum-jensen_indbundet_9788762809000"
    btn_label: "Se prisen hos Saxo*"
    btn_class: "btn--success"
toc: true
toc_sticky: true
sidebar:
  nav: anatomi
author_profile: true
---

Hvad er fysiologi? **Fysiologi er læren om kroppens forskellige organsystemer og deres funktioner i hvile og under fysisk aktivitet. Fysiologien beskæftiger sig med den sunde krop under normale betingelser.**

Hvis du vil forstå, hvordan træning virker i kroppen, så er det godt at dykke ned i kroppens fysiologi.

## Artikler om fysiologi

<div class="feature__wrapper">

{% assign site_posts = site.posts | where: "tags", "fysiologi" | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
  {% for post in site_posts limit:16 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Anbefalelsesværdige bøger om fysiologi

{% include feature_row type="left" %}