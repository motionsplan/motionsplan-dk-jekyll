---
title: &title "Løbeprogram til 10 km"
permalink: /loebeprogram-10km/
excerpt: "Her kan du finde et løbeprogram til at komme i gang med at løbe 10 km. DU kan blive inspireret af programmet, hvis du gerne vil løbe 10 km som begynder eller træningen allerede har taget lidt mere fart."
language: da
header:
  overlay_image: https://images.unsplash.com/photo-1610969524113-bae462bb3892?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80
  teaser: https://images.unsplash.com/photo-1610969524113-bae462bb3892?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80
  caption: *title
category:
  - Løb
  - Løbeprogrammer
tags:
  - løbeprogram
  - træningsprogram
  - 10 km
last_modified_at: 2021-08-22T23:14:14Z
toc: true
---

{{ page.excerpt }}

Der findes et hav af løbeprogrammer rundt omkring på nettet. Vi har skrevet mere om, hvad du skal kigge efter i [løbeprogrammer]({% link _posts/2021-08-24-loebeprogrammer.md %})? I dette indlæg dykker vi specifikt ned i de væsentlige elementer, når du gerne vil lære at løbe 10 km.

## Lær at løbe 10 km

På listen herunder kan du finde et begynder løbeprogram.

{% assign site_posts = site.posts | where: "category", "Løb" | where: "tags", "løbeprogram" | where: "tags", "begynder" | where_exp: "post", "post.url != page.url" | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
<div class="feature__wrapper">
  {% for post in site_posts limit:16 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
{% endif %}

## 10 km løbetræningsprogram

[Løberen](https://www.loberen.dk/sites/default/files/10_km_paa_12_uger.pdf) har et forslag til et 12 ugers træningsprogram, som kan gøre dig klar til at løbe 10 km.

[Få løbeprogram 10 km](https://www.loberen.dk/sites/default/files/10_km_paa_12_uger.pdf){: .btn .btn--large .btn--warning }
