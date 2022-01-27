---
layout: single
title: "Hofteleddet"
seo_title: "Hofteleddet: Hoftens opbygning og anatomi"
permalink: /joints/hofteleddet/
excerpt: "Hofteleddet er et kugleled, der er dannet af en ledskål på hoftebenet og et ledhoved på lårbensknoglen. Leddet er forstærket af kraftige ledbånd, der begrænser stræknings- og udadføringsbevægelser."
latin: ""
header:
  teaser: https://upload.wikimedia.org/wikipedia/commons/9/9b/Knochenmetastase_Mamma-Ca_Becken_02.jpg
  overlay_image: https://upload.wikimedia.org/wikipedia/commons/9/9b/Knochenmetastase_Mamma-Ca_Becken_02.jpg
type: Kugleled
categories:
  - Led
movements:
  - title: Bøjning
    muscles:
      - Iliopsoas
      - Rectus femoris
  - title: Strækning
    muscles:
      - Gluteus Maximus
      - Hamstrings
  - title: Udadføring
    muscles:
      - Gluteus Medius
      - Gluteus Minimus
      - Tensor Fascie Latae
  - title: Indadføring
    muscles:
      - Adductors
  - title: Udadrotation
    muscles:
      - Gluteus Maximus
      - Piriformis
  - title: Indadrotation
    muscles:
      - Gluteus Minimus
      - Adductors
image: https://www.orthonow.com/3d-images/Hip-Anatomy.jpg
toc: true
sidebar:
  nav: anatomi
---

Hofteleddet er et kugleled. Hofteleddet dannes af en ledskål på hoftebenet og et kugleformet ledhoved på lårbensknoglen. Hofteleddet er forstærket af kraftige ledbånd.

En bøjning i hoften er med strakt knæ typisk begrænset af smidigheden i hasemusklerne, mens en bøjning i hofteleddet med bøjet knæ typisk begrænses, når låret og maven møder hinanden.

## Bevægelser i hofteleddet

{% for m in page.movements -%}
- **{{ m.title }}**.
  {{ m.muscles | join: ", " }}
{% endfor %}

{% include figure image_path=page.image caption=page.title alt=page.title %}

## Muskler i hofteleddet

{% include anatomy/table-muscles-hip.html %}

Se [alle muskler delt op efter led](/led/).
