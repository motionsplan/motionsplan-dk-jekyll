---
title: &title "️Varmehåndtering på løb"
seo_title: "️Varmehåndtering i løb [Beregner]"
permalink: /varme-management-loeb/
description: "Når det er varmt, men du stadig gerne vil løbe enten som træning eller konkurrence, så er det godt at vide, hvordan du kan håndtere varmen."
excerpt: "Når det er varmt, men du stadig gerne vil løbe enten som træning eller konkurrence, så er det godt at vide, hvordan du kan håndtere varmen."
language: da
header:
  teaser: https://images.unsplash.com/photo-1466761366829-84fd59a22e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=300&w=400&q=10
  caption: *title
category:
  - Fysiologi
tags:
  - interaktiv artikel
  - fysiologi
  - varmetræning
last_modified_at: 2024-08-04T10:14:14Z
---

Når det er varmt, men du stadig gerne vil løbe enten som træning eller konkurrence, så er det godt at vide, hvordan du kan håndtere varmen.

Jo længere du gerne vil løbe, jo vigtigere bliver det naturligvis.

Varmehåndtering i løb er lidt anderledes end [varmehåndtering i cykling](/varme-management-cykling/).

Her får du et indblik i, hvordan varmehåndtering ser ud for løb, og du får mulighed for selv at lege lidt med tallene.

Lad os dykke ned i beregningerne.

## Varmeproduktion i løb

[Alan Couzens](https://www.alancouzens.com/blog/heat2.html) har lavet logikken bag, hvor meget varme du producerer ved løb.

Rationalet er, at løbepræstationen kan oversættes til _power output_ målt i watt.

Du kan prøve at udfylde formularen med de foreslåede gennemsnitlige værdier, eller du kan prøve med dine egne værdier.

{% include calculator/calculate-heat-production-running.html %}

Den estimerede varme der genereres med den løbeindsats på <span id="heat_management_run_power_output">844</span>W.

Hvis du leger lidt med tallene, så kan du se, at hvis din kropsvægt går op, så producerer du endnu mere varme.

At slippe af med varmen er en af de vigtige begrænsninger for at løbe hurtigt. Så ud over at en lavere kropsvægt giver dig et [højere kondital](/kondital/), så har du altså også ved lavere kropsvægt mindre varme, du skal af med.

[Løbeøkonomien](/lobeokonomi/) har også stor betydning for, hvor meget varme der produceres ved en given hastighed.

Du kan prøve at indtaste en typisk løbeøkonomi for eliteløbere på 190 ml O<sub>2</sub>/kg/km og sammenligne den med en begynderløber på 230 ml O<sub>2</sub>/kg/km.

Der er tydelig forskel på varmeproduktionen alt efter kropsvægt og løbeøkonomi.

Du skal altså af med en del varme, når du løber.

Kroppen er heldigvis god til at [temperaturregulere](/fysiologi-temperaturregulering/). Her kigger vi på de tre vigtigste typer.

## 1. Varmetab til konvektion

Den første måde at få køling af systemet på er ved konvektion. Når vinden passerer huden er det med til at køle dig ned.

Det er rigtig effektivt i cykling, men i løb er din løbehastighed noget lavere.

Derfor er effektiviteten noget lavere.

Dit overfladeareal har stor betydning for, hvor meget konvektionen betyder for din nedkøling. Jo mere overflade, jo højere potentiale for nedkøling.

{% include calculator/calculate-bsa.html body_weight="80" height="180" %}

Dit estimerede overfladeareal er <span id="heat_management_bsa">2,0000</span> m<sup>2</sup>.

Lad os kigge på, hvad du kan tabe af varme gennem konvektion i løb.

Her kan du smide dine egne tal ind med overfladeareal, temperaturer og løbehastighed..

{% include calculator/calculate-heat-convection.html velocity="12" bsa="2,000" %}

<span id="heat_management_convection">182</span>W tabes gennem konvektion, men din krop mangler stadigvæk at slippe af med <span id="heat_management_subtotal_1">662</span>W i varme.

Fordi hastigheden er mindre, så er det meget typisk at du mangler 150-200W i køling i løb i forhold til på cyklen.

Hvis du ikke finder andre måder at kompensere for dette, så bliver du nødt til at sætte intensiteten og derved hastigheden ned.

## 2. Varmetab til radiation

Når du løber, så afgiver du også en del af din varme til omgivelserne.

[Alan Couzens](https://www.alancouzens.com/blog/heat2.html) foreslår, at løbere på særligt varme dage kan sørge for at køle sig ned med is.

Hvis du leger med tallene og sænker lufttemperaturen i nedenstående beregner, så kan du se, hvor stor impact det vil have i forhold til radiation at køle sig ned undervejs.

{% include calculator/calculate-heat-radiation.html bsa="2,0000" %}

Varmetabet gennem radiation er <span id="heat_management_radiation">62</span>W. Men kroppen skal stadig af med <span id="heat_management_subtotal_2">600</span>W varme.

Jeg tror [Alan Couzens](https://www.alancouzens.com/blog/heat.html)' oprindelige beregner har et forkert udgangspunkt for beregningerne. Den forudsætter en omgivende temperatur på 0°C, hvilket jo kun er tilfældet, hvis man køler sig selv ned med is undervejs.
{: .notice--info }

Heldigvis kan vi svede. Lad os kigge på tallene...

## 3. Varmetab til evaporation

Du har en høj evne til at svede, og det er godt, når du gerne vil af med varmen.

Til gengæld er det ikke så let at indtage væske undervejs, når du løber, som det fx er på cyklen.

Du bør træne din evne til at drikke væske undervejs, hvis du skal præstere i længere tid i varmen.

Du kan måske indtage cirka halvdelen af den væske, du kan på cyklen. Det vil betyde, at du stille og roligt dehydrerer lidt, og du vil opleve _cardiac drift_, fordi det bliver hårdere for kroppen at opretholde intensiteten.

Det er således vigtigt at starte på løbeturen i væskebalance.

{% include calculator/calculate-heat-evaporation.html %}

Varmetabet via evaporation er <span id="heat_management_evaporation">300</span>W. Det giver en total på <span id="heat_management_subtotal_3">300</span>W af varme tilbage i systemet.

<p id="heat_management_message">Vær opmærksom! Dit varmeregnskab er positivt. Det betyder, at din kernetemperatur over tid formentlig vil stige. Tænk på, hvordan du få mere køling i systemet.</p>

Det er meget vigtigt at være proaktiv for at kunne fastholde væskebalancen, så du stadig har det redskab i værktøjsbæltet til at komme af med varmen.

## Hvor meget stiger kernetemperaturen?

Alt dette er naturligvis baseret på modeller og estimater. Men hvis du har overskudsvarme, som du ikke kan komme af med, så vil kroppen blive varmere.

Men hvor varm?

Lad os kigge lidt på tallene:

{% include calculator/calculate-heat-temperature-rise.html %}

Kroppen vil gøre alt, hvad den kan for at fastholde kropstemperaturen i et relativt snævert interval.

<p id="heat_temperature_rise_message"></p>

Hvis kropstemperaturen ikke kan holdes nede på andre måder, så kan kroppen kun sænke intensiteten, så varmeproduktionen bliver mindre.

Det er også derfor, at den optimale lufttemperatur for løb er omkring 10 grader. Så bliver kroppen automatisk kølet ned ved konvektion og radiation, og skal bruge færre kræfter på at temperaturregulere.

## Konklusion

Det er noget vanskeligere at holde sig kølet ned under løb i varme omgivelser, end hvis du cykler. På cyklen kan du let medbringe ekstra væske og flasker kun brugt til køling. Samtidig er den højere hastighed en fordel i forhold til konvektion.

Hvis du fx skal lave en triatlon i varmt vejr, så er det utrolig vigtigt, at du er meget opmærksom på, hvordan du håndterer hydreringen og kølingen på cyklingen, så du kommer ind til løbet med de bedste forudsætninger.

God løbetur i varmen.