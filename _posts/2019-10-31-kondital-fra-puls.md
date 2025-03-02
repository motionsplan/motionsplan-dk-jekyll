---
title: &title "Find dit kondital ud fra din puls 💗"
permalink: /kondital-fra-puls/
redirect_from:
  - /kondition-fra-puls/
excerpt: "Danske forskere har udviklet en konditionstest, hvor du kun skal bruge din hvilepuls og maxpuls til at finde dit kondital."
language: da
header:
  overlay_image: https://images.unsplash.com/photo-1517867065801-e20f409696b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&h=630&w=1200&q=60
  teaser: https://images.unsplash.com/photo-1517867065801-e20f409696b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&h=300&w=400&q=10
  caption: *title
category:
  - Beregnere
  - Kondition
meta:
  measures: kondital
  type: pulstest
  equipment: pulsbælte
  max: maksimal test
  direct: indirekte test
tags:
  - konditionstest
  - indirekte test
  - test
  - tracking
  - beregner
last_modified_at: 2019-03-06T23:14:14Z
toc: true
breadcrumbs: true
---

Du kan estimere dit kondital kun ved hjælp af din puls med denne test fra danske forskere. Det bliver næsten ikke lettere.

Det kan være besværligt at finde sit kondital, men [Uth et al (2004)](https://doi.org/10.1007/s00421-003-0988-y) har udviklet en test, hvor det ikke er så besværligt.

Du skal faktisk kun bruge lidt viden om din [puls](/puls/).

Testens præmis er, at hvilepulsen falder, når man kommer i bedre form, fordi slagvolumen øges. Med en højere slagvolumen kan hjertet pumpe mere blod rundt i hvert enkelt slag, og derfor behøver det i hvile ikke at slå så mange gange.

Testen bygger på en forudsætning om, at desto større afstand der er mellem hvilepulsen og den maksimale puls, desto større sandsynlighed er der for, at testpersonen har en høj maksimal iltoptagelse og derved et højt kondital. Testen forsøger altså at estimere den maksimale iltoptagelse blot ved hjælp af hvilepulsen og max-pulsen.

Testen er baseret på en test af veltrænede mænd i alderen 20-50 år. Det betyder, at man ikke kan forvente, at testen er præcis på andre målgrupper.

{% comment %}
Later studies have revised the constant factor for different populations. According to Voutilainen et al. 2020, the constant factor should be 14 in around 40-year-old normal weight never-smoking men with no cardiovascular diseases, bronchial asthma, or cancer.[11] Every 10 years of age reduces the coefficient by one, as well as does the change in body weight from normal weight to obese or the change from never-smoker to current smoker. Consequently, V̇O2 max of 60-year-old obese current smoker men should be estimated by multiplying the HRmax to HRrest ratio by 10.

TODO - måske skal vi slette noget af det med hvilepuls og maxpuls og bare henvise til de andre artikler.

 Voutilainen, Ari; Mounir Ould Setti; Tomi-Pekka Tuomainen (July 2020). "Estimating Maximal Oxygen Uptake from the Ratio of Heart Rate at Maximal Exercise to Heart Rate at Rest in Middle-Aged Men" (PDF). World J Mens Health. 38 (4): 666–672. doi:10.5534/wjmh.200055. ISSN 2287-4208. PMC 8443998. PMID 32777866.

 https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8443998/

 https://portal.findresearcher.sdu.dk/en/publications/estimation-of-maximal-oxygen-uptake-using-the-heart-rate-ratio-me


 Se alternativ med netHR.
{% endcomment %}

## Måling af hvilepulsen

Det bedste tidspunkt at måle hvilepulsen lige før, at du står op om morgenen. Hvis ikke du har mulighed for det, så kan du lægge dig ned og hvile i fem minutter og derefter tage hvilepulsen. Hold et ubesværet åndedræt.

Du kan også estimere din hvilepuls ud fra følgende skema:

| Form              | Hvilepuls |
|-------------------|----------:|
| Ekstremt god form | 40        |
| Meget god form    | 50        |
| God form          | 60        |
| Dårlig form       | 70        |
| Meget dårlig form | 80        |

### Hvad er en normal hvilepuls?

|                                                          | slag pr. minut |
|----------------------------------------------------------|---------------:|
| Meget høj hvilepuls                                      | > 100          |
| Lettere forhøjet                                         | 80-100         |
| Normal hvilepuls                                         | 70-80          |
| Lidt lavere end normalt                                  | 60-70          |
| Lav hvilepuls                                            | 50-60          |
| Meget lav hvilepuls (typisk meget konditionsstærk atlet) | < 50           |

Jeg har skrevet et andet indlæg, som går i dybden med, [hvad hvilepulsen er og hvordan du måler den](/hvilepuls/).

## Måling af maxpulsen

Du kan måle din maksimale puls ved efter grundig opvarmning at lave en række bakkesprints af op til 45 sekunder.

Vil du teste din maxpuls, gøres det bedst ved at løbe i et jævnt og forholdsvis højt tempo i 2 min, efterfulgt af 20 sek. sprint. Herefter lunter du lige så stille i 30-45 sek, hvorefter du gentager hele proceduren to gange mere. Med et pulsur med bryststrop vil du efter sidste hårde sprint kunne aflæse din maxpuls.
{: .notice .notice--success }

Du kan også estimere den ud fra alder, da den maksimale puls typisk falder med alderen. I denne beregner har vi brugt følgende formel:

HR<sub>max</sub> = 208 – 0,7 x alder

{% include calculator/calculate-max-hr.html %}

Denne formel har vist sig at være mere præcis end den tidligere tommelfingerregel for estimering af maxpuls. Jeg skriver mere om [hvordan du kan måle, beregne og teste maxpulsen](/test-max-puls/) i et andet indlæg.

## Udregn dit kondital på baggrund af hvilepuls og maxpuls

{% include calculator/calculate-vo2-max-hr.html %}

## Formlen bag beregneren af kondital

[Uth et al (2004)](https://doi.org/10.1007/s00421-003-0988-y) har lavet en formel, hvor du kan estimere dit kondital på baggrund af forholdet mellem din maxpuls og din hvilepuls. 

Formlen ser sådan her ud:

{% include motionsplan/math formula="kondital = \frac{maxpuls}{hvilepuls}*15.3" %}

For at finde iltoptagelsen dividerer vi med 1000 ml/l og ganger med vægten i kilo.

{% include motionsplan/math formula="VO_2max = \frac{kondital * bodyweight}{1000}" %}

Du kan sammenligne dit kondital i [tabellen for kondital for mænd og kvinder](/kondital/).

<details markdown="1" class="references">
  <summary><h2 id="references">Referencer</h2></summary>

- Uth, Niels, Henrik Sørensen, Kristian Overgaard, og Preben K. Pedersen. 2004. “Estimation of VO2max from the Ratio between HRmax and HRrest--the Heart Rate Ratio Method”. European Journal of Applied Physiology 91 (1): 111–15. <https://doi.org/10.1007/s00421-003-0988-y>.
- Tanaka, H., K. D. Monahan, og D. R. Seals. 2001. “Age-Predicted Maximal Heart Rate Revisited”. Journal of the American College of Cardiology 37 (1): 153–56. <https://doi.org/10.1016/s0735-1097(00)01054-8>.
</details>