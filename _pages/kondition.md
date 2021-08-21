---
layout: single
permalink: /kondition/
title: &title "Kondition, konditionstræning og kredsløbstræning"
excerpt: "Lær mere om kondition, konditionstræning, kredsløbstræning og se eksempler på træning, hvor du kan øge din maksimale iltoptagelse og udholdenhed."
header:
  overlay_image: https://images.unsplash.com/photo-1457449205106-d0aad138e99b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80
  caption: *title
  actions:
    - label: "<i class='fas fa-download'></i> Test din kondition"
      url: "/kondition/tests/"
    - label: "<i class='fas fa-download'></i> Hvad er min hastighed?"
      url: "/hastighed/"
classes: wide
feature_row_feature:
  - image_path: https://images.unsplash.com/photo-1501820434261-5bb046afcf6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80
    alt: "Energisystemer 101"
    title: "Energisystemer 101"
    excerpt: "Forstå kroppens energisystemer for at kunne forstå, hvordan du bedst kan lave konditionstræning og få et bedre kredsløb og udholdenhed."
    url: "/energisystemer/"
    btn_label: "Lær om energisystemer"
    btn_class: "btn--danger"
  - image_path: https://images.unsplash.com/photo-1475274110913-480c45d0e873?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80
    alt: "Konditionstests"
    title: "Konditionstests"
    excerpt: "Vi har samlet alle konditionstests på en side. Der er bl.a. konditests til løb, cykling og gang. Vi har både beskrevet tests til hjemmebrug og i laboratorium."
    url: "/kondition/tests/"
    btn_label: "Se alle konditionstests"
    btn_class: "btn--success"
feature_row:
  - image_path: https://cnet1.cbsistatic.com/img/Y3vodO8bMPi6qlFLRF3xFcQpLHo=/1092x0/2019/07/26/114f1721-1a71-42bc-b1a4-cb35299bedbc/gettyimages-640493589.jpg
    alt: "Kondition og tests"
    title: "Kondition og tests"
    excerpt: "Hvad er kondital og iltoptagelse, og hvordan måler man det i forbindelse med sin konditionstræning?"
    url: "/kondition-og-test/"
    btn_label: "Læs om kondital, kondition og tests"
    btn_class: "btn--success"
  - image_path: https://images.unsplash.com/photo-1544899489-a083461b088c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80
    alt: "Hvad er en god kondition?"
    title: "Hvad er en god kondition?"
    excerpt: "Svaret på hvad et godt kondital er afhænger naturligvis af hvem man sammenligner sig med. Her er tabeller gældende for almindelige mennesker i Skandinavien."
    url: "/kondital/"
    btn_label: "Se konditionstabel"
    btn_class: "btn--danger"
  - image_path: https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80
    alt: "Løbeøkonomi og løbeteknik"
    title: "Løbeøkonomi og løbeteknik"
    excerpt: "En god løbeøkonomi er evnen til at holde høj fart i lang tid ved et minimalt energiforbrug, men hvordan beregner man det egentlig?"
    url: "/lobeokonomi/"
    btn_label: "Lær om løbeøkonomi"
    btn_class: "btn--info"
author_profile: true
system:
  - fitnessinstruktør
sidebar:
  nav: trainingtypes
---

Konditionstræning kan både have til formål at øge den [maksimale iltoptagelse]({% link _posts/2019-11-03-intensiteten-og-vo2max.md %}), så det samme arbejde bliver lettere, og forbedre udholdenheden, altså evnen til at arbejde i længere tid med den samme intensitet.

Konditionstræning handler om at træne kredsløbet til bedre at kunne arbejde over længere tid.

For at forstå kondition og kredsløbstræning, så er det godt at starte med at forstå kroppens energisystemer.

{% include feature_row id="feature_row_feature" type="left" %}

{% include feature_row %}

## Artikler om kondtion, konditionstræning og kredsløbstræning

{% assign site_posts = site.posts | where: "category", "Kondition" | where_exp: "post", "post.url != page.url" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>
