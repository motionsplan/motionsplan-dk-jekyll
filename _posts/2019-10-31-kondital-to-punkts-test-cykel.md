---
title: &title "Åstrands to-punktstest: Konditionstest på cykel 🚴"
permalink: /topunktstest/
excerpt: "Åstrands to-punktstest er en submaksimal konditionstest på en ergometercykel, hvor du måler belastning og puls."
language: da
header:
  overlay_image: https://i.ytimg.com/vi/bTynfzI2bWw/maxresdefault.jpg
  teaser: https://i.ytimg.com/vi/bTynfzI2bWw/maxresdefault.jpg
  caption: *title
category:
  - Kondition
tags:
  - konditionstest
  - submaksimal test
  - indirekte test
last_modified_at: 2019-03-06T23:14:14Z
toc: true
feature_row:
  - image_path: https://books.google.dk/books/content?id=BC9SiAsUPqsC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70NFS4lEU6whWCqlyrgOGErL5OJe7YUn-qJQJ5_NuL_euKqiLC3Uf1qDPx-lSIhDDhVIpgexBiz5cdAiKXbtccrKfOlel8OTdj9EgWhSXwkff-qWaHaQt5WU1MvzRP65Jcjll3V
    alt: "Textbook of Work Physiology"
    title: "Textbook of Work Physiology - Åstrand m.fl."
    excerpt: "Åstrand og Rohdals bog er en klassiker inden for arbejdsfysiologi. Den inkluderer bl.a. Åstrands 2-punktstest, hvor du kan læse en endnu mere udførlig forklaring af testen. Bogen er imidlertid også en rigtig god reference til at forstå kroppen, og der er andre praktiske konditionstests i bogen."
    url: "https://books.google.dk/books/about/Textbook_of_Work_Physiology.html?id=BC9SiAsUPqsC&redir_esc=y"
    btn_label: "Læs mere*"
    btn_class: "btn--success"
---

Åstrands to-punktstest er en submaksimal konditionstest på en ergometercykel, hvor du på baggrund af måling af belastning og puls kan estimere konditallet.

Jeg beskriver i det følgende, hvad Åstrands to-punktstest er, og hvordan testen udføres?

Hvad er Åstrands to-punktstest? **Åstrands to-punktstest er en submaksimal konditionstest, der udføres på en kondicykel. På baggrund af belastningen og pulsfrekvensen kan du estimere forsøgspersonens kondital.**

Hvis du leder efter [Åstrands et-punktstest, så har jeg skrevet om den her](/etpunktstest/).

## Hvordan udføres Åstrands to-punktstest?

Til Åstrands **to-punktstest** skal du bruge en kondicykel, der kan vise belastningen i watt. Desuden skal du kunne måle din puls - gerne med et pulsur, mens du cykler.

{% include video provider="youtube" id="Ej5UH8KrE5Q" %}

I testen skal du køre på to forskellige belastninger:

- Den **første belastning**: din puls skal stabilisere sig i området 120-140 slag/min efter ca. 6 minutters cykling.
- Den **anden belastning**: din puls skal stabilisere sig i området 150-170 slag/min efter yderligere 4 minutters cykling.

Indtast værdierne i nedenstående beregner:

{% include calculate-topunkttest.html %}

Dt er ikke sikkert, at du kan ramme rigtigt i testen første gang. Testen bliver mest pålidelig, hvis ender med at køre _steady state_ på to pulsværdier, der ikke ligger for tæt på hinanden. Fx er 130 og 160 en fin spredning på pulsværdierne.

## Hvad er baggrunden for beregningerne i topunktstesten?

I beregningerne bagved testen anslåes din [maxpuls]({% link _posts/2020-06-02-max-hr.md %}) udfra følgende formel:

HR<sub>max</sub> = 208 - 0,7 x alder.

Hvis du kender din rigtige maxpuls ud fra en direkte måling, kan du evt. indtaste en alder i beregneren, der giver dig den rigtig målte maxpuls.
{: .notice .notice--info }

Når man laver indirekte, submaksimale tests er skal du fortolke resultatet varsomt. En usikkerhed ved Åstrands topunktstest er bl.a. at maxpulsen bestemmes ud fra en generel formel med din alder som variabel.

## Beregningerne bag Åstrands topunktstest

De målte pulsværdier i topunktstesten plottes ind i et koordinatsystem mod de tilhørende arbejdsbelastninger. Herefter forlænges linjen op til maxpulsen og den anslåede "maksimale aerobe arbejdsbelastning" aflæses.

{% include figure image_path="/assets/images/blog/aastrands-topunktstest.png" caption="Eksempel på fortolkning af Åstrands topunktstest. Hvis du har brug for et regneark til at beregne værdierne i Åstrands topunktstest, så skriv endelig i kommentarerne, så vil jeg gerne lave sådan et." alt="Eksempel på fortolkning af Åstrands topunktstest - konditionstest på cykel" %}

Værdierne i Åstrands topunktstest kan også skrives ind i følgende formel:

{% include math formula="work_{max} = \frac{(work_2 - work_1) * (HR_{max} - HR_2)}{HR_2 - HR_1} + work_2" %}

Baseret på antagelser om nyttevirkningen (23%), iltens energetiske værdi (21,1 kJ pr. liter O<sub>2</sub>) og hvilestofskiftet (0,25 liter O<sub>2</sub> pr. minut), så kan den maksimale arbejdsbelastning (work<sub>max</sub>) omregnes til en estimeret iltoptagelse ved din maksimale ydeevne.

Formlen ser sådan her ud:

{% include math formula="VO_2max = \frac{work_{max}}{0,23} * \frac{60}{21100} + 0,25" %}

Hvis du gerne vil beregne konditallet skal den maksimale iltoptagelse (VO<sub>2</sub>max) omregnes til ml ilt pr. minut (dvs. ganges med 1000) og divideres med kropsvægten i kg.

{% include math formula="kondital = \frac{VO_2max (l/min) * 1000 (ml/l)}{bodyweight (kg)}" %}

Hvis du har brug for et regneark til at beregne værdierne i Åstrands topunktstest, så skriv endelig i kommentarerne, så vil jeg gerne lave sådan et.

## Reference til Åstrands konditionstest

{% include feature_row type="left" %}
