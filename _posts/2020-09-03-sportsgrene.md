---
title: &title "Liste over sportsgrene, idræt og motion"
permalink: /sportsgrene-liste/
language: da
header:
  overlay_image: https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80
  teaser: https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80
  caption: *title
category:
  - Viden om
tags:
  - liste
  - sportsgrene
last_modified_at: 2019-09-03T23:14:14Z
toc: true
---

Jeg har samlet en lang liste med forskellige sportsgrene, motionsformer og idrætsgrene, som du kan dyrke i fritiden. Hvis du gerne vil finde en sport, motion og idræt, så kan du finde masser af inspiration på vores liste over sportsgrene.

Søger du inspiration til en aktiv fritid, så har jeg samlet en liste, hvor du kan få inspiration til sport, motion, idræt og træning.

Listen indeholder sportsgrene, som man konkurrerer i til de olympiske lege, folkelige idrætsgrene, men der er også både mindre kendte idrætsgrene.

Men lad os komme til listen over sportsgrene med det samme!

## Liste over sportsgrene, idræt og motion

{% include table-sportsgrene.html %}

## 10 mest populære idrætsgrene i Danmark

Jeg har samlet en liste over de mest populære sportsgrene i Danmark herunder. I den ene kolonne står der, hvor mange aktive medlemmer, der er i foreninger på landsplan. Tallene er fra 2018, så der kan naturligvis godt være sket noget siden. Kilden til medlemstallene er [Danmarks Idræts-Forbunds medlemsliste](https://www.dif.dk/da/politik/vi-er/medlemstal): 

{% assign sports = site.data.sportsgrene | sort: "Medlem2018" | reverse %}

{% include table-sportsgrene.html column="Medlem2018" sports=sports limit="10" %}

Hvis du gerne vil læse mere om, hvor mange der dyrker en bestemt idrætsgren, så kan du se [Danmarks Idræts-Forbunds medlemsliste](https://www.dif.dk/da/politik/vi-er/medlemstal). Her får du også delt medlemstallene oå, så du kan se hvilke sportsgrene der er mest populære for mænd og kvinder, og hvordan det ser ud med børn og ældre.

## 10 mindst populære idrætsgrene i Danmark

{% assign sports = site.data.sportsgrene | sort: "Medlem2017" %}

{% include table-sportsgrene.html column="Medlem2017" sports=sports limit="5" description="hide" %}

## Medlemstal i idræt og sportsgrene

Både [Danmarks Idræts-Forbund](https://www.dif.dk/) og [DGI](https://www.dgi.dk/) har medlemslister. Da mange klubber er medlem af begge de landsdækkende idrætsforbund bliver nogle af medlemstallene i de enkelte sportsgrene ekstra høje.

## Liste over de mest populære sportsgrene og idrætsgrene i verden

Ovenfor er de forskellige sportsgrenes popularitet baseret på antallet af aktive medlemmer. Vi kan også kigge på det i forhold til sportsgrenenes popularitet bland fans.

[World Atlas](https://www.worldatlas.com/articles/what-are-the-most-popular-sports-in-the-world.html) har estimeret hvor mange fans, der følger de enkelte idrætsgrene. De er kommet frem til en liste, der ser sådan her ud:

{% assign sports = site.data.sportsgrene | sort: "Fans" | reverse %}

{% include table-sportsgrene.html column="Fans" sports=sports limit="10" description="hide" %}

## Sport, idræt motion og træning

Listen over sportsgrene har mange forskellige typer sportsgrene. Men sport og idræt kan defineres lidt på forskellige måder.

- **Sport** er organiseret idræt, hvor der er et konkurrenceelement. Man kan enten konkurrere i officielle konkurrencer og turneringer eller for sjov i haven.
- **Idræt** er alle og der behøver ikke nødvendigvis være et konkurrence forbundet med idræt.
- **Motion** er selvorganiseret idræt og træning, som man laver i sin fritid. Man kan sagtens motionere ved at dyrke både sport og idræt, men en gåtur er også motion.
- **Træning** kan være selvorganiseret eller organiseret i foreninger. Træning er målrettet for at forbedre enten sundheden eller præstationsevnen.

Idræt, motion og træning kan ifølge [Marina Aaagaard](http://marinaaagaardblog.com/2015/11/09/aktiv-fritid-motionsformer-100-former-for-sport-idraet-og-motion/) være:

- **Organiseret** i klub, foreninger (eller fitnesscentre); man melder sig til sport eller idræt på faste hold og faste tider; fordelene er instruktion og fællesskab. Eller:
- **Selvorganiseret**: Man kan designe, sammensætte og arrangere sine egne idrætsaktiviteter og træning og træne når som helst og hvor som helst.

## Sportsgrene du ikke anede eksisterede

Der er naturligvis også en [række sportsgrene og idrætsgrene, du ikke anede eksisterede](https://www.888sport.dk/blog/alt-andet/del-1-anderledes-sportsgrene-som-du-ikke-vidste-eksisterede). Måske vil du starte en forening eller invitere dine venner til lidt [sjove sportsgrene](https://mmm.dk/5-sportsgrene-du-ikke-anede-fandtes.3834.html).

- Shin-kicking
- Bossaball
- Skakboksning
- Hornussen
- Royal Shrovetide Football
- Konebæringsløb
- Havetraktorløb
- Kæphestridning
- Cornhole

{% include video provider="youtube" id="6jVxi6ps0dk" %}

- Sten-saks-papir
- Trække krog

{% include video provider="youtube" id="PdjA_TtUvTw" %}

- Fierljeppen

{% include video provider="youtube" id="9AG8A-emXHE" %}

- Quidditch
- Tå-wrestling

## Læs mere om sportsgrene og idrætsgrene

- Danmarks Idræts-forbund: [DIF](http://www.dif.dk/en/forbund)
- Danske Gymnastik og Idrætsforeninger: [DGI](https://www.dgi.dk/Udover/Idraetsmaerket/Find%20forening.aspx)
- Dansk Arbejder Idrætsforbund: [DAI](http://dai-sport.dk/fp.php)
- Dansk Firmaidrætsforbund: [DFIF](http://www.firmaidraet.dk/)
- Dansk Handicap Idræts-Forbund: DHIF
- For børn (site med forslag til idræt for børn): [Nysport](http://www.nysport.dk/)
