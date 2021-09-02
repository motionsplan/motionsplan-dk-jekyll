---
title: &title "Udregn pulszoner: Fra maxpuls, laktattærskel eller pulsreserve [Beregner]"
seo_title: "Find dine pulszoner med vores beregner"
excerpt: "Når du vil lave pulstræning, så kan du beregne pulszoner og træningsinstensitet ud fra din maxpuls, laktattærksel eller pulsreserve. Når ud har udregnet dine træningszoner, så kan du målrette din træning ud fra pulsen."
permalink: /pulstraening-pulszoner-fra-maxpuls-og-pulsreserve/
redirect_from:
  - /puls/
  - /puls-intensitet/
language: da
header:
  overlay_image: https://images.unsplash.com/photo-1523475585621-bc60c6d75c2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80
  teaser: https://images.unsplash.com/photo-1523475585621-bc60c6d75c2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80
  caption: *title
category:
  - Kondition
  - Beregnere
tags:
  - kondition
  - træning
  - intensitet
  - puls
  - beregner
  - løb
last_modified_at: 2021-03-06T23:14:14Z
toc: true
garmin_lactate:
  - image_path: /assets/images/blog/garmin-setup-lactate-1.jpg
  - image_path: /assets/images/blog/garmin-setup-lactate-2.jpg
  - image_path: /assets/images/blog/garmin-setup-lactate-3.jpg
---

Når du vil lave pulstræning, så kan du beregne pulszoner og træningsinstensitet ud fra din maxpuls eller pulsreserve. Når ud har udregnet dine træningszoner, så kan du målrette din træning ud fra pulsen.

Pulstræning hænger sammen med konditionstræning og kredsløbstræning. Det er et værktøj, du kan bruge til at styre træningen af din kondition for at være sikker på, at du rammer det rigtige energisystem i løbet af træningen.

I [pulstræning]({% link _posts/2019-10-31-pulstraening.md %}) skal du altså først kende **dine pulszoner**, og vide hvad du træner i de forskellige træningszoner. Derefter kan du fx bruge en pulsmåler til at holde styr på, at pulsen rammer den rigtige zone i løbet af din træning.

Når du skal beregne dine pulszoner, kan du generelt gøre det ved enten at tage udgangspunkt i pulsreserven (HR<sub>reserve</sub>), pulsen ved den anaerobe tærskel (LTHR) eller i den maksimale puls (HR<sub>max</sub>).

Lad os først lige få definitionerne på plads.

## Begreber til pulzonerne

Først kigger vi på et par forskellige definitioner af hvilepuls, maxpuls og pulsreserve.

Hvilepuls
: [Hvilepulsen](/hvilepuls/) er pulsfrekvensen i hvile, når du slapper helt af. En lav hvilepuls kan være et tegn på en god kondition. Hvilepulsen bør måles om morgenen, inden du står op ad sengen.

Max-pulsen
: Max-pulsen er den absolut højeste pulsværdi, dit hjerte kan præstere. Jeg har skrevet et indlæg om, [hvordan du selv kan måle din max-puls](/test-max-puls/).

Pulsen ved den anaerobe tærskel (AT)
: Pulsen ved den anaerobe tærskel er meget brugt til at lave pulszoner ud fra.

Pulsreserven
: Pulsreserven er forskellen mellem din max-puls og hvilepuls.

Når du kender værdierne af din hvilepuls og max-puls, så kan du begynde at udregne træningsintensiteter til din pulstræning. Du kan enten basere dine pulszoner udelukkende på din max-puls eller på din pulsreserve.

Om du skal vælge pulzoner baseret på maxpuls eller på baggrund af pulsreserven er lidt op til dig selv. Du kan læse mere om fordele og ulemper under vores artikel om [pulstræning]({% link _posts/2019-10-31-pulstraening.md %}).

## Forskellige træningszoner

Andrew Coggan opererer med [syv forskellige træningszoner]({% link _posts/2021-09-01-traeningszoner.md %}), som kan være gode guidelines for at kategorisere din træning.

| Zone | Beskrivelse Energisystem |
|-|-|-|
| 1 | Restitution | Aerob |
| 2 | Udholdenhed | Aerob |
| 3 | Tempo | Hovedsageligt aerob |
| 4 | Anaerob tærskel | Aerob og anaerob |
| 5 | VO<sub>2</sub>max | Aerob og anaerob |
| 6 | Anaerob kapacitet | Hovedsageligt anaerob |
| 7 | Neuromuskulær power | Anaerob |

## Beregning af pulszoner ud fra pulsreserven

Karvonen benytter pulsreserven til at beregne sine [klassiske pulszoner](https://runandbeyond.com/karvonen-heart-rate/). Karvonens pulszoner bliver brugt i rigtig mange sammenhænge. Her har vi omskrevet navnene på de enkelte zoner til Coggans terminologi.

{% include calculate-hrzones-karvonen.html %}

Karvonens pulszoner kan være et udemærket udgangspunkt for træningen. Det er ofte Karvonens zoner, der er forprogrammeret ind i forskellige pulsure. Formlen bag Karvonens pulszoner er følgende:

HR<sub>TARGET</sub> = [(HR<sub>MAX</sub> - HR<sub>REST</sub>) * intensitet%] + HR<sub>REST</sub>

## Pulszoner beregner ud fra den anaerobe tærskel

[Joe Friel](https://trainingbible.com/joesblog/2009/11/quick-guide-to-setting-zones.html) baserer sine pulszoner på pulsen ved den anaerobe tærskel (LTHR). Han har i alt 7 zoner, men her har vi reduceret zonerne til at modsvare de vejledende træningszoner fra Coggan, som vi har skitseret ovenfor. Coggan benytter nogle lidt [andre pulsværdier](https://blog.flocycling.com/training-performance/how-are-heart-rate-and-power-used-for-training/), men vi har god erfaring med at bruge Friels pulszoner.

{% include calculate-hrzones-friel.html %}

## Jack Daniels pulszoner ift. maksimale puls

Jack Daniels baserer sine træningsprogrammer på hastigheder. Du kan udregne hans foreslåede løbehastigheder i de forskellige zoner i [Jack Daniels løbeberegner]({% link _posts/2020-08-01-jack-daniels-loebeberegner.md %}).

De enkelte løbeformer for Jack Daniels er imidlertid også forbundet med pulsværdier, som er sat i forhold til hans løbeformer og den maksimale puls. Dem har vi forsøgt at tilpasse til denne beregner. Hvis du kender nogle bedre standarder for intensitet i forhold til maxpuls, så skriv endelig.

Måske rammer pulszonerne her bedst de øvede løbere. Typisk er den anaerobe tærskel lidt lavere for begyndere.

{% include calculate-hrzones-maxhr.html %}

## Find dine egne pulszoner med tests

Generelle træningszoner kan helt sikkert have nogle begrænsninger. Jeg kan godt lide særligt at fokusere på tre elementer i konditionstræning:

1. Maksimale iltoptagelse (zone 5)
2. Anaerobe tærskel og tærskeltræning (zone 4)
3. Udholdenhed og slagvolumen (zone 2)

Du kan sagtens bruge pulszoner til at hjælpe med at styre træningen, men det er en stor fordel, hvis pulszonerne er individuelt tilpassede.

Du kan lave dine egne **individuelle pulszoner** ved at teste dine pulszoner. Du kan naturligvis lade dig teste i et fysiologisk testcenter, hvor det kan ske relativt præcist.

Hvis du ikke helt har penge til det, så kan du lave dine **tilpassede pulstræningszoner** med tre forskellige tests.

## Find pulszonen ved den maksimale iltoptagelse

Man kan løbe omkring den maksimale iltoptagelse i maksimalt omkring 6 minutter.

## Find pulszonen ved den anaerobe tærskel

[McGehee et al (2005)](https://pubmed.ncbi.nlm.nih.gov/16095403/) har sammenlignet forskellige relativt enkle metoder til at bestemme den anaerobe tærskel. De sammenlignede VDOT, 3200 meter, 30 minutter og Conconi-test.

VDOT og 30 minutters tidstagning var valide til at bestemme hastigheden ved den anaerobe tærskel. 30 minutters testen kunne også bruges til at bestemme pulsen ved den anaerobe tærskel. Samlet konkluderer McGehee et al (2005) at 30 minutters testen er den bedste felttest til at bestemme den anaerobe tærskel.

På de moderne pulsure er det også relativt enkelt at lave en test af den anaerobe tærskelHer er et eksempel fra et Garmin Fenix ur.

{% include gallery id="garmin_lactate" caption="Der er en test af den anaerobe tærskel direkte på dit Garmin-ur." %}

## Find pulzonen for udholdenhed og slagvolumen

Joel Jamieson foreslår, at man løber med en puls fra 120-150 i det han kalder _cardiac output_-træning.

[Andre](https://missadventurepants.com/blog/lactate-test-aerobic-threshold) foreslår, at man tester sin aerobe tærskel ved at trække vejret gennem næsen. Når du når et tempo, hvor du ikke længere kan få ilt nok ved kune at trække vejret gennem næsen, så er du omkring din aerobe tærskel.
