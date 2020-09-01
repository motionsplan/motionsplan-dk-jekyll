---
title: "Beregn dig hvilestofskifte, energibehov og ligevægtsindtag [2020]"
permalink: /stofskifte/
language: da
header:
  overlay_image: https://images.unsplash.com/photo-1551337948-0ad8de8568ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80
  teaser: https://images.unsplash.com/photo-1551337948-0ad8de8568ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80
  caption: Beregn dit stofskifte, daglige energibehov, ligevægtsindtag og hvilestofskifte
category:
  - Beregnere
  - Kost
tags:
  - stofskifte
last_modified_at: 2020-08-31T23:14:14Z
toc: true
feature_row:
  - image_path: https://cdn6.tales.dk/00039/91685/cover.1589756619.jpg
    alt: "Exercise Physiology - Nutrition, Energy, and Human Performance"
    title: "Exercise Physiology - Nutrition, Energy, and Human Performance"
    excerpt: "Skrevet af BS, William D., PhD McArdle, M.Ed, Frank I. Katch, Victor L. Katch."
    url: "https://www.partner-ads.com/dk/klikbanner.php?partnerid=28187&bannerid=55214&htmlurl=https://bogreolen.dk/exercise-physiology_bs_9781451193831"
    btn_label: "Læs mere"
    btn_class: "btn--success"
---

Jeg har lavet en beregner, hvor du kan udregne dit hvilestofskifte og på baggrund af det dit daglige energibehov og ligevægtsindtag. Jeg synes det er interessant at udregne, hvad mit basalstofskifte er i forhold min fysiske aktivitet for at se, hvad mit omtrentlige daglige energibehov er.

Hvordan kan jeg udregne mit energibehov? **Du kan udregne dit energibehov ved at bruge anbefalingerne fra Nordic Nutrition Recommendations 2012. Du skal bruge din vægt og så slår du formlen op i en tabel baseret på din alder. Derefter ganger du med en faktor, der beskriver dit fysiske energiniveau på en dag. Der er en alternativ formel for hvilestofskiftet i samme anbefalinger, hvor du også bruger din højde til at udregne hvilestofskiftet.**

Denne beregner er baseret på [Nordic Nutrition Reccommandations 2012](https://www.norden.org/da/node/7832). Her udregner vi _average resting energy expenditure_ (REE), som vi ganger med den del af stofskiftet, der påvirkes af det fysiske aktivitetsniveau, PAL. Det er denne formel, man har valgt at bruge på [Fitness Institutes uddannelse af personlige trænere](https://fitness-institute.dk/).

Jeg har lavet en anden [beregner af stofskiftet, som tager udgangspunkt i _Nordiska Næringsrekommendationer 1996_]({% link _posts/2019-10-31-simpel-stofskifteberegner.md %}). Jeg har også lavet en [avanceret beregner af dit daglige energibehov, hvor den fysiske aktivitet bliver angivet lidt mere præcist]({% link _posts/2019-10-31-avanceret-stofskifteberegner.md %}). Endelig har jeg lavet en [beregner af ligevægtsindtaget]({% link _posts/2019-10-31-ligevaegtsberegner.md %}).

*[REE]: Average Resting Energy Expenditure

Stofskiftet består af 3 hovedkomponenter: hvilestofskiftet (BMR), fødeinduceret termogenese (FIT) og fysisk aktivitet (PAL). Du kan [læse en lidt mere uddybende forklaring af, hvad stofskiftet er]({% link _posts/2019-10-31-avanceret-stofskifteberegner.md %})

## Beregn dit hvilestofskifte og samlede stofskifte

Med denne beregner kan du udregne dit hvilestofskifte (REE), og dit samlede daglige energibehov. Beregneren er ret simpel idet den tager dit aktivitetsniveau ud fra overordnede mål for fysisk aktivitet. Resultatet er en gennemsnitsberegning for dit køn, din alder, din vægt og din højde.

{% include calculate-stofskifte-nordic-2012.html %}

## Baggrunden for udregning af hvilestofskiftet

Beregningen er behæftet med stor usikkerhed. Værdierne er rettet mod "almindelige" mennesker og ikke meget aktive kredsløbsatleter, fx cykelryttere og triatleter.

## Tabeller for udregning af hvilestofskiftet

Tabellerne og beregneren af stofskiftet er baseret på værdier fra _Nordiska næringsrekommendationer 1996_.

### Formel til at beregne hvilestofskiftet

#### Mænds hvilestofskifte - Resting Energy Expenditure

I forhold til [Nordic Nutrition Reccommandations 2012](https://www.norden.org/da/node/7832), så har jeg flyttet lidt rundt på formlerne for REE baseret på vægt og højde. Det har jeg gjort fordi, der står i den oprindelige reference at den sidste formel gælder for alle over 60 år. Og da der ikke stod en form under 19-30-årige forestiller jeg mig, at det er en fejl.

| Alder   | REE (MJ/dag) baseret på vægt  | REE (MJ/dag) baseret på vægt og højde |
|---------|-----------------|---------------------------|
|	11-18	  | 0,0769 W + 2.43 | 0,0651 W + 1,11 H + 1,25  |
| 19-30	  | 0,0669 W + 2,28 | 0,0600 W + 1,31 H + 0,473 |
| 31-60	  | 0,0592 W + 2,48 | 0,0476 W + 2,26 H - 0,574 |
| 61-70	  | 0,0543 W + 2,37 | 0,0748 W + 2,26 H - 1,070 |
| over 70	| 0,0573 W + 2,01 | 0,0748 W + 2,26 H - 1,070 |

#### Kvinders hvilestofskifte - Resting Energy Expenditure

| Alder   | REE (MJ/dag) baseret på vægt  | REE (MJ/dag) baseret på vægt og højde |
|---------|-----------------|----------------------------|
| 11-18	  | 0,0465 W + 3,18 | 0,0393 W + 1,04 H + 1,93   |
| 19-30	  | 0,0546 W + 2,33 | 0,0433 W + 2,57 H - 1,180  |
| 31-60	  | 0,0407 W + 2,90 | 0,0342 W + 2,10 H - 0,0486 |
| 61-70	  | 0,0429 W + 2,39 | 0,0356 W + 1,76 H + 0,0448 | 
| over 70	| 0,0417 W + 2,41 | 0,0356 W + 1,76 H + 0,0448 |

W er vægt i kg. H er højde i meter.

Eksempel: en mand på 25 år, der vejer 80 kg har et hvilestofskifte på: REE = (0,0669 * 80 kg) + 2,28 = 7,632 MJ/dagligt = 7632 kJ = 1817 kcal. Jeg har skrevet lidt mere om, hvad [kalorier (cal) og kilokalorier (kcal) er her]({% link _posts/2020-07-09-kalorier.md %}).
{: .notice .notice--info }

### Fysisk aktivitetsniveau i forhold til hvilestofskiftet (PAL)

| Aktivitetsniveau	                                                                                                  | PAL     |
|---------------------------------------------------------------------------------------------------------------------|---------|
| Rullestolsbunden eller sengeliggende.	                                                                              | 1,2     |
| Stillesiddende arbejde med kun lidt fysisk aktivitet og ingen eller begrænset fysisk aktivitet i fritiden.	        | 1,4-1,5 |
| Stillesiddende arbejde med et vist behov for fysisk aktivitet og ingen eller begrænset fysisk aktivitet i fritiden.	| 1,6-1,7 |
| Hovedsageligt stående arbejde.	                                                                                    | 1,8-1,9 |
| Sport eller anden hård fysisk aktivitet i fritiden. (30-60 min. 4-5 gange/uge)	                                    | + 0,3   |
| Hårdt kropsarbejde eller meget høj fritidsaktivitet.	                                                              | 2,0-2,4 |

PAL skal ganges med BMR for at estimere ens daglige stofskifte. 

**Eksempel:** Manden fra eksemplet ovenfor arbejder på et kontor, hvor han ikke bevæger sig meget (PAL = 1,4-1,5). Hun er dog rimeligt aktiv i fritiden (PAL + 0,3). REE (7632 kJ) gange med PAL (1,7) = 12.974 kJ. Mandens samlede daglige stofskifte og energibehov (ligevægtsindtag) er altså cirka 13.000 kJ ifølge denne beregner.
{: .notice .notice--info }

## Mere avanceret udregning af dagligt energibehov

Jeg har også lavet en [avanceret beregner af dit daglige energibehov, hvor den fysiske aktivitet bliver angivet lidt mere præcist]({% link _posts/2019-10-31-avanceret-stofskifteberegner.md %}). Hvis du gerne vil have en beregner på engelsk, så kan du finde den på  [health-calc.com](https://www.health-calc.com/diet/energy-expenditure-advanced).

[Avanceret stofskifte beregner]({% link _posts/2019-10-31-avanceret-stofskifteberegner.md %}){: .btn .btn--large .btn--success }

*[BMR]: Kroppens hvilestofskifte (basic metabolic rate)
*[PAL]: Fysisk aktivitetsniveau (Physical Acitivity Level)
*[FIT]: Fødevare induceret termogenese
*[TEE]: Total energiomsætning
*[kJ]: KiloJoule

## Referencer til hvilestofskifte, stofskifte, energibehov og ligevægtsindtag

{% include feature_row type="left" %}

- [Nordic Nutrition Reccommandations 2012](https://www.norden.org/da/node/7832)
