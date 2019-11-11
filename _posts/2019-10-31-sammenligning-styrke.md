---
title: "Hvem er stærkest? - beregning på tværs af vægtklasser"
permalink: /sammenligning-styrke/
excerpt: ""
language: da
header:
  overlay_image: https://c.pxhere.com/photos/af/dd/arm_wrestling_bar_bet_betting_black_and_white_compare_comparison_competition-920992.jpg!d
  teaser: https://c.pxhere.com/photos/af/dd/arm_wrestling_bar_bet_betting_black_and_white_compare_comparison_competition-920992.jpg!d
category:
  - Beregnere
tags:
  - stofskifte
last_modified_at: 2019-03-06T23:14:14Z
toc: true
---

Hvis man gerne vil sammenligne styrken af forskellige løftere, så kan man i stedet operere med relativ styrke. Det er imidlertid for enkelt bare at bruge relativ styrke, da sammenhængen mellem løft og kropsvægt ikke er lineær.

{% include figure image_path="https://web.archive.org/web/20070610031909im_/http://www.motion-online.dk/images/siff_loeft1.gif" %}

Derfor findes der en række forskellige beregningsmodeller. 

## Wilks score

Den mest kendte metode til at sammenligne løftere på tværs af vægtklasser er _Wilks score_, som også er den anerkendte metode i styrkeløft i øjeblikket, men der findes også andre beregningsmodeller.

{% include calculate-strength-wilks.html %}

## Dr. Mel Siff

Mel Siff har i _Supertraining_ beskrevet følgende formular til sammenligning på tværs af vægtklasser. 

T = a - b * bw<sup>(-c)</sup>

hvor T er forventet for en topklasseløfter, og hvor bw er kropsvægt (kg) og `a`, `b` og `c` er numeriske konstanter.

**Data til styrkeløft op til 1987**

| Powerlifting Total       | a = 1270.4 | b = 172970 | c = 1.3925 |
| Powerlifting Squat       | a = 638.01 | b = 9517.7 | c = 0.7911 |
| Powerlifting Bench Press | a = 408.15 | b = 11047  | c = 0.9371 |
| Powerlifting Deadlift    | a = 433.14 | b = 493825 | c = 1.9712 |

**Data for vægtløftere op til 1988**

| a  =  512.245 | b =  146230 | c =  1.605 |

{% include calculate-strength-siff.html %}

## Nuckols 

## Index100

Morten Zacho har udviklet en Index100 beregner. Index100-beregneren omregner dit løft til, hvad det teoretisk set ville være, hvis man vejer 100 kg. Formålet med beregneren er, at den skulle give intuitiv mening for den enkelte løfter. Grundlaget for beregneren er Mel Siffs formler, som har et relativt stor empirisk ballast. 

{% include calculate-strength-index-100.html %}

NB! Beregneren kan ikke anvendes ved kropsvægt lavere end 50 kg.
{: .notice .notice--info }

Index100 = (kg * 986,63) / (1270 - 172970 * (kropsvægt^-1,3925))

{% include math formula="Index100 = \frac{(kg * 986,63)}{(1270 - 172970 * (body weight^(-1,3925)))}" %}

Beregningen bag Index100 er baseret på sammenhængen mellem præstation og kropsvægt hos verdens bedste styrkeløftere. Dr. Mel C. Siff fra Sydafrika har ud fra en statistisk behandling af de bedste løft i alle vægtklasser gennem en årrække fundet frem til en formel som giver en Siff-score, der kan bruges til fair sammenligning. Fordelen ved Index100 tallet er, at det er lettere at forholde sig til.

Beregningen kan som sagt bruges på andre løft end styrkeløft, da det er rimeligt at antage at sammenhængen mellem styrke og kropsvægt for de 3 styrkeløft også gælder for andre løft. Den oprindelige Siff-score er beregnet til løft for både mænd og kvinder, hvilket derfor også gælder for Index100-beregningen.

**Eksempel:** A vejer 90 kg og kan tage 115 kg i bænkpres. B vejer 75 kg og kan tage 100 kg i bænkpres. Hvem er stærkest? A løfter 1,28 kg pr. kg kropsvægt og B løfter 1,33 kg pr. kg kropsvægt. Er B så stærkest? Nej, ifølge Index100-beregningen ville A løfte 120 kg hvis han vejede 100 kg og B ville kun løfte 117 kg. A er altså den stærkeste (efter retfærdig normalisering)
{: .notice .notice--info }

## Referencer

- [Evolution of Bodymass Adjustments](http://web.archive.org/web/20050304042306/http://www.sportsci.com/SPORTSCI/JANUARY/evolution_of_bodymass_adjustment.htm)
- [About relative strength](http://tsampa.org/training/scripts/relative_strength/#about)
- [Who is the most impressive powerlifter](https://www.strongerbyscience.com/whos-the-most-impressive-powerlifter/)
