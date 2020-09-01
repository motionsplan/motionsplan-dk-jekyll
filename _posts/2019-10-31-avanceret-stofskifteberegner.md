---
title: "🔥 Beregn dit stofskifte med avanceret stofskifteberegner?"
permalink: /avanceret-stofskifteberegner/
language: da
header:
  overlay_image: https://images.unsplash.com/photo-1495976797530-f33e6580e44b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80
  teaser: https://images.unsplash.com/photo-1495976797530-f33e6580e44b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80
  caption: "Beregn dit stofskifte, daglige energiforbrug og basalstofskifte"
category:
  - Beregnere
  - Kost
tags:
  - stofskifte
last_modified_at: 2020-08-06T23:14:14Z
toc: true
excerpt: "Jeg har lavet en beregner, hvor du kan udregne dit stofskifte og dit daglige energiforbrug på baggrund af dit hvilestofskifte og fysiske aktivitetsniveau. Jeg synes det er interessant at udregne, hvad mit basalstofskifte er i forhold min fysiske aktivitet for at se, hvad mit omtrentlige daglige energibehov er."
---

Jeg har lavet en beregner, hvor du kan udregne dit stofskifte og dit daglige energiforbrug på baggrund af dit hvilestofskifte og fysiske aktivitetsniveau. Jeg synes det er interessant at udregne, hvad mit basalstofskifte er i forhold min fysiske aktivitet for at se, hvad mit omtrentlige daglige energibehov er.

**Stofskiftet består af 3 hovedkomponenter: hvilestofskiftet (BMR), fødeinduceret termogenese (FIT) og fysisk aktivitet (PAL).**

## Beregn dit stofskifte og basalstofskifte

Med denne beregner kan du udregne dit hvilestofskifte, som også ofte kaldes basalstofskiftet, og dit samlede daglige energibehov. Resultatet er en gennemsnitsberegning for dit køn, din alder og din vægt.

{% include calculate-stofskifte-avanceret.html %}

## Baggrund for den avancerede stofskifteberegner

I denne beregner er [Benedict-Harris formlen](https://en.wikipedia.org/wiki/Harris%E2%80%93Benedict_equation) brugt til at udregne basalstofskiftet, som bruges til at udregne ligevægtsindtaget.

- Mænd: BMR = 66.5 + ( 13.75 × weight in kg ) + ( 5.003 × height in cm ) – ( 6.755 × age in years )
- Kvinder: BMR = 655 + ( 9.563 × weight in kg ) + ( 1.850 × height in cm ) – ( 4.676 × age in years )

Roza and Shizgal reviderede formlen i 1984. Den formel forventer jeg senere at integrere i beregneren her. Skriv i kommentarerne, hvis det skal gå lidt hurtigere :)

- Mænd: BMR = 88.362 + (13.397 × weight in kg) + (4.799 × height in cm) - (5.677 × age in years)
- Kvinder: BMR = 447.593 + (9.247 × weight in kg) + (3.098 × height in cm) - (4.330 × age in years)

[Gerrior et al (2006)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1784117/) viser, hvordan man let udregner energibehovet. Jeg har taget udgangspunkt i dette for at bruge estimerede MET-værdier for aktivitetsniveauet til at udregne PAL.

Brian Henneberg gennemgår et studie, som [sammenligner præcisionen af formler for hvilestofskiftet](https://www.bodylab.dk/shop/hvilestofskifteformler-2881c1.html). Studiet konkluderer:

> Som det fremgår var næsten alle formlerne signifikant off ift. de resultater man fik når man rent faktisk målte hvilestofskiftet. De fleste formler undervurderede hvilestofskiftet, mens to formler overvurderede stofskiftet (De Lorenzo og Cunningham hos kvinderne).
> 
> Hos mændene viste beregningerne at Harris-Benedict var den mest præcise, om end den i gennemsnit vist 284 kcal for lidt. Hos kvinderne var Cunningham den mest præcise med en gennemsnitlig afvigelse på 110 kcal (over det faktiske).

--- <cite>[Brian Henneberg](https://www.bodylab.dk/shop/hvilestofskifteformler-2881c1.html)</cite>

## Se flere typer udregninger af stofskiftet

Jeg har lavet en [simpel beregner til stofskiftet]({% link _posts/2019-10-31-simpel-stofskifteberegner.md %}), som er baseret på _Nordic Nutrition Recommandations fra 2012_ og en [beregner til udregning af ligevægtsindtaget]({% link _posts/2019-10-31-ligevaegtsberegner.md %}).
