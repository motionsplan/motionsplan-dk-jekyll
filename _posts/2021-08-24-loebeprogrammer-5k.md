---
title: &title "Løbeprogram til 5 km"
seo_title: "Løbeprogram 5 km"
permalink: /loebeprogram-5km/
excerpt: "Få inspiration til din løbetræning på 5 km med et løbeprogram. Lær at løbe 5 km eller bliv en hurtigere løber på distancen."
language: da
header:
  overlay_image: https://images.unsplash.com/photo-1610969544920-47371c6d0d17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80
  teaser: https://images.unsplash.com/photo-1610969544920-47371c6d0d17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80
  caption: *title
category:
  - Løb
tags:
  - løbeprogram
  - træningsprogram
  - 5 km
last_modified_at: 2021-08-22T23:14:14Z
toc: true
faq:
  - question: "Hvor lang tid tager det at løbe 5 km?"
    answer: "Det kommer naturligvis an på hvor hurtigt du løber. Verdensrekorden for mænd er 12:35, mens den for kvinder er 14:11. Mange drømmer om at komme under 20 minutter, men det kan også tage op til en 30-40 minutter, hvis du er begynder. Du kan bruge vores [beregner til løbehastighed](/hastighed/), hvis du kender din gennemsnitsfart."
---

{{ page.excerpt }}

Der findes et hav af løbeprogrammer rundt omkring på nettet. Vi har skrevet mere om, hvad du skal kigge efter i [et godt løbeprogram?]({% link _posts/2021-08-24-loebeprogrammer.md %}), men her dykker vi specifikt ned i de væsentlige elementer, når du gerne vil lære at løbe 5 km.

Du får et løbetræningsprogram til 5 km, som du kan bruge allerede i dag.

## Lær at løbe 5 km

På listen herunder kan du finde et begynder løbeprogram.

{% assign site_posts = site.posts | where: "category", "Løb" | where: "tags", "løbeprogram" | where: "tags", "begynder" | where_exp: "post", "post.url != page.url" | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
<div class="feature__wrapper">
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
{% endif %}

## 5 km løbeprogrammer

Folk søger ofte efter et specfikt program i forhold til at løbe 5 km på en bestemt tid. Fx "løb 5 km på 25 min". Du kan sagtens finde et program, der giver dig en specifik fremgangsmåde for at nå det mål.

## Ofte stillede spørgsmål om 5 km

{% include faq.html %}
