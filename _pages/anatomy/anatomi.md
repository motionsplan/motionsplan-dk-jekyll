---
layout: single
title: "Anatomi"
permalink: /anatomi/
header:
  overlay_image: https://www.pocketprep.com/wp-content/uploads/2018/07/HESI-A2-Practice-Test-Anatomy-and-Physiology.jpg
  teaser: https://www.pocketprep.com/wp-content/uploads/2018/07/HESI-A2-Practice-Test-Anatomy-and-Physiology.jpg
author_profile: true
feature_row:
  - image_path: https://www.denintelligentekrop.dk/media/catalog/product/cache/1/image/1000x/9df78eab33525d08d6e5fb8d27136e95/a/n/anatomisk-guide-til-bevaegeapparatet-9788777499104-andrew-biel-gitte-bjerg-fuusager.jpg
    alt: "Anatomisk Guide til Bevægeapparatet"
    title: "Anatomisk Guide til Bevægeapparatet"
    excerpt: "En praktisk guide til lokalisering af muskler, knogler med mere. Før du kan få succes med at undersøge og behandle bevægeapparatet, er du nødt til først at kende dets opbygning og kunne lokalisere de relevante strukturer."
    url: "https://www.partner-ads.com/dk/klikbanner.php?partnerid=28187&bannerid=38484&htmlurl=https://www.denintelligentekrop.dk/anatomisk-guide-til-bevaegeapparatet-9788777499104"
    btn_label: "Læs mere hos Den Intelligente Krop"
    btn_class: "btn--success"
  - image_path: https://cdn5.bogreolen.dk/thumbnail/300x0/00002/73191/cover.20160911.jpg
    alt: "Menneskekroppen - Anatomi, fysiologi og sygdomme"
    title: "Menneskekroppen - Anatomi, fysiologi og sygdomme"
    excerpt: "Menneskekroppen - anatomi, fysiologi og sygdomme er et anatomisk atlas til mennesket i det 21. århundrede. Gennem de computergenererede 3d-billeder og fantastiske illustrationer kan man opleve menneskekroppen i hidtil uset detaljegrad og skønhed."
    url: "https://www.partner-ads.com/dk/klikbanner.php?partnerid=28187&bannerid=55214&htmlurl=https://bogreolen.dk/menneskekroppen_steve-parker_9788756784436"
    btn_label: "Læs mere hos Bogreolen"
    btn_class: "btn--success"
  - image_path: https://imgcdn.saxo.com/_9788762809000/0x500
    alt: "Bevægeapparatets anatomi"
    title: "Bevægeapparatets anatomi"
    excerpt: "Når man skal lære om anatomi er det selvsagt en fordel med gode lærebøger, og her er “Bevægeapparatets anatomi” en absolut klassiker. Bag lærebogen står forfatterne Finn Bojsen Møller, Jan Hejle, Erik Bruun Simonsen, Jørgen Tranum-Jensen. De kombinerer viden om almen anatomi med information om hvordan man forebygger, undersøger, behandler, træner og genoptræner."
    url: "https://www.partner-ads.com/dk/klikbanner.php?partnerid=28187&bannerid=43264&htmlurl=https://www.saxo.com/dk/bevaegeapparatets-anatomi_joergen-tranum-jensen_indbundet_9788762809000"
    btn_label: "Læs mere hos Saxo"
    btn_class: "btn--success"
toc: true
toc_sticky: true
author_profile: true
---

Hvis du vil forstå, hvordan træningsøvelser virker, så er det godt at kende kroppens anatomi.

De tre grundelementer i bevægeapparatets anatomi er:

{% assign pages = site.pages | where: "tags", "anatomi" %}
{% for p in pages %}
- **[{{ p.title }}]({{ p.url }})**.
  {{ p.excerpt | markdownify }}
{% endfor %}

Hvis man ved, hvordan musklerne sidder fast på knoglerne og hvilke bevægelser det enkelte led kan lave, så kan man analysere træningsøvelser.

{% include feature_row type="left" %}
