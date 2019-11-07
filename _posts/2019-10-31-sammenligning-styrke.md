---
title: "Hvem er stærkest? - beregning på tværs af vægtklasser"
permalink: /sammenligning-styrke/
excerpt: ""
language: da
header:
  overlay_image: https://i.ytimg.com/vi/zUyuUoU7lAQ/maxresdefault.jpg
  teaser: https://i.ytimg.com/vi/zUyuUoU7lAQ/maxresdefault.jpg
category:
  - Beregnere
tags:
  - stofskifte
last_modified_at: 2019-03-06T23:14:14Z
toc: true
---

Hvis man gerne vil sammenligne styrken af forskellige løftere, så kan man i stedet operere med relativ styrke. Det er imidlertid for enkelt bare at bruge relativ styrke, da sammenhængen mellem løft og kropsvægt ikke er lineær.

{% include figure image_path="https://web.archive.org/web/20070610031909im_/http://www.motion-online.dk/images/siff_loeft1.gif" %}

Derfor findes der en række forskellige beregningsmodeller. Den mest kendte er formentlig _Wilks score_, som også er den anerkendte metode i styrkeløft i øjeblikket. 



## Dr. Mel Siff

Mel Siff har i _Supertraining_ beskrevet følgende formular. 

T = a - b * bw^(-c)

hvor T er forventet for en topklasseløfter og where bw = bodymass and a, b and c are numerical constants.

For powerlifting data up to 1987, the values of the constants are:
Powerlifting Total:         a = 1270.4, b = 172970, c = 1.3925
Powerlifting Squat:         a = 638.01, b = 9517.7, c = 0.7911
Powerlifting Bench Press:   a = 408.15, b = 11047, c = 0.9371
Powerlifting Deadlift:      a = 433.14, b = 493825, c = 1.9712

For weightlifting data up to 1988, the values of the constants for adult
lifters are:

  a  =  512.245, b =  146230  and c =  1.605

## Wilks score

## Nuckols 

## Index100

Index100 er udviklet af Morten Zacho.

For noget tid siden udviklede jeg Index100-beregneren på baggrund af nu afdøde Mel Siffs formler. Index100 har vist aldrig opnået den popularitet jeg havde tiltænkt den, hvilket kan hænge sammen med at folk ikke er overbevist om at den er retfærdig. Desuden har man jo Wilks score der bliver anvendt i styrkeløft.

Index100 omregner dit løft til hvad det teoretisk ville være hvis du havde en kropsvægt på 100 kg. Index100 giver derfor intuitiv mening også ved andre styrkeøvelser end de tre store. Index100 kan umiddelbart forstås - også af folk der ikke er inde i styrkeløft og kender Wilks score. Desuden påstod Mel Siff at det teoretiske fundament for hans formler var mere solidt end for Wilks score.

For at sammenligne de to beregningsmetoder anvendte jeg de to formler på de opnåede totaler fra MOL-træf II. Resultatet ses i nedenstående skema. Som det ses ændres der ikke meget på rækkefølgen om man anvender den ene eller den anden.

Hvis man er styrkeløfter kan der være mere information i at beregne sin Wilks score, da man herved hurtigt kan sammenligne sig med andre Wilks scoringer, men til alle andre uoficielle dyster går min anbefaling til Index100.

***

En del af motivationen ved træning kan være at sammenligne sig med andre. Ved styrketræning er der den uretfærdighed at store personer har en fordel, men ved at brugeMotion-online's Index100 beregner kan man sammenligne på tværs af kropsvægt!

Princippet i Index100 er, at alle løft bliver regnet om til hvad de teoretisk ville være såfremt man vejede 100 kg. Index100-beregningen kan bruges på alle løft, både for mænd og kvinder (dog ikke til fair sammenligning mellem mænd og kvinder).

Indtast dit løft og din kropsvægt i nedenstående felter og tryk på beregn.

### Beregning af Index100

{% include calculate-index-100.html %}

Med dette tal i hånden kan du nu sammenligne dig med andre personer i samme løft, selvom deres kropsvægt er anderledes end din. (NB! Beregneren kan ikke anvendes ved kropsvægt lavere end 50 kg)

Index100 = (kg * 986,63) / (1270 - 172970 * (kropsvægt^-1,3925))

{% include math formula="\frac{(kg * 986,63)}{(1270 - 172970 * (kropsvægt^-1,3925))}" %}

### Teoretisk baggrund for Index100 beregningen

Når man skal sammenligne løftepræstationer mellem forskellige personer, kan man ikke bare dividere løftene med kropsvægten, da sammenhængen mellem løft og kropsvægt ikke er lineær (se graf).



Beregningen bag Index100 er baseret på sammenhængen mellem præstation og kropsvægt hos verdens bedste styrkeløftere. Dr. Mel C. Siff fra Sydafrika har ud fra en statistisk behandling af de bedste løft i alle vægtklasser gennem en årrække fundet frem til en formel som giver en Siff-score, der kan bruges til fair sammenligning. Det er med udgangspunkt i denne Siff-score at vi har beregnet en Index100-formel. Fordelen ved Index100 tallet er, at det er lettere at forholde sig til, specielt når man ønsker at bruge det på andre løft end blot summen af de 3 styrkeløft.

Beregningen kan som sagt bruges på andre løft end styrkeløft, da det er rimeligt at antage at sammenhængen mellem styrke og kropsvægt for de 3 styrkeløft også gælder for andre løft. Den oprindelige Siff-score er beregnet til løft for både mænd og kvinder, hvilket derfor også gælder for Index100-beregningen.

**Eksempel:** A vejer 90 kg og kan tage 115 kg i bænkpres. B vejer 75 kg og kan tage 100 kg i bænkpres. Hvem er stærkest? A løfter 1,28 kg pr. kg kropsvægt og B løfter 1,33 kg pr. kg kropsvægt. Er B så stærkest? Nej, ifølge Index100-beregningen ville A løfte 120 kg hvis han vejede 100 kg og B ville kun løfte 117 kg. A er altså den stærkeste (efter retfærdig normalisering)
{: .notice .notice--info }

Der findes andre metoder til at sammenligne løft på tværs af vægtklasser. I styrkeløftskonkurrencer bruger man Wilks score til at finde "den bedste" løfter ved stævner. Selvom Wilks score er mest anvendt, finder vi at Siffs score baserer sig på et mere solidt statistisk fundament. Forskellen mellem disse to er dog ikke voldsomt stor.

Man kan også lave rent teoretiske overvejelser over sammenhængen mellem styrke og kropsvægt, men da kroppen er noget mere kompleks end blot en geometrisk model, er det rimeligt at anvende disse empiriske formler.

Det vil være for meget at kalde Index100 for videnskabelig baseret, men det er dog et stykke avanceret empiri og tættere på et retfærdigt sammenligningsgrundlag kommer man nok ikke.

## Referencer

- [Evolution of Bodymass Adjustments](http://web.archive.org/web/20050304042306/http://www.sportsci.com/SPORTSCI/JANUARY/evolution_of_bodymass_adjustment.htm)
- [About relative strength](http://tsampa.org/training/scripts/relative_strength/#about)
- [Who is the most impressive powerlifter](https://www.strongerbyscience.com/whos-the-most-impressive-powerlifter/)
