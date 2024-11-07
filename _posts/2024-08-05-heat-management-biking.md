---
title: "️Varmehåndtering på cykel"
seo_title: "️Varmehåndtering i cykling"
permalink: /varme-management-cykling/
description: "Når du gerne vil cykle, når det er varmt, så er det det godt at vide, hvordan du skal håndtere varmen under længerevarende arbejde."
excerpt: "Når du gerne vil cykle, når det er varmt, så er det det godt at vide, hvordan du skal håndtere varmen under længerevarende arbejde."
language: da
header:
  teaser: https://images.unsplash.com/photo-1546310603-a12096dc0f79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=300&w=400&q=10
  caption: *title
category:
  - Fysiologi
tags:
  - beregner
  - fysiologi
  - varmetræning
last_modified_at: 2024-08-04T10:14:14Z
---

Hvis du gerne vil cykle, når det er varmt, så er det det godt at vide, hvordan du skal håndtere varmen under længerevarende arbejde.

Her kigger vi på varmehåndtering på cyklen inspireret af [Alan Couzens](https://www.alancouzens.com/blog/heat.html), som gennemgår videnskaben bag varmehåndtering i lange træninger eller løb på cyklen.

Gode præstationer i varmen afhænger af kropsvægten, kroppens overfladeareal og det nødvendige power output for at cykle hurtigt.

Det afhænger naturligvis også af, om du har forberedt dig med [varmetræning](/varmetraening/).

Det kan være lettere at præstere i varmen, hvis du er en lille, let cykelrytter end hvis du er stor og muskuløs, fordi en stor krop genererer mere varme.

Lad os kigge lidt på nogle tal!

## Varmeproduktion på cykel

Når du arbejder, så bliver noget af arbejdet til fremdrift på cyklen, mens hovedparten af dit arbejde bliver til varme, som din krop skal af med.

Dygtige cykelryttere har en effektivitet på omkring ~23% (og de fleste af os andre har en lavere effektivitet).

Det betyder, at af den samlede energi kroppen skaber, så er det kun ~23% der bliver overført til pedalerne og derefter til fremdrift.

Prøv med dine egne tal i denne beregner:

{% include calculator/calculate-heat-production-bike.html %}

Den estimerede varme der genereres med et power output på <span id="heat_bike_power_output">275</span>W og en effektivitet på <span id="heat_bike_efficiency">23</span>% er omkring ~<span id="heat_bike_watt">921</span>W.

Det er altså en betydelig andel varme, som kroppen skal af med.

Du kan prøve at lege lidt med, hvad det betyder, hvis du kan blive mere bevægelsesøkonomisk og hæve din effektivitet på cyklen.

Heldigvis har din krop nogle effektive måder at håndtere varme på.

Lad os kigge på de tre vigtigste.

## 1. Varmetab til konvektion

Når du cykler, så bliver du nedkølet, hvis vinden er koldere end din hudtemperatur.

Det totale varmetab afhænger af lufttemperaturen, hudtemperaturen, kroppens overfladeareal og din hastighed.

Lad os først udregne kroppens overfladeareal:

{% include calculator/calculate-bsa.html %}

Dit estimerede overfladeareal er <span id="heat_management_bsa">1.8336</span> m<sup>2</sup>. Det er en fordel at have et lidt højere areal, når du skal af med varmen.

Hvor meget varme kan du med dit kropsareal forvente at slippe af med gennem konvektion?

{% include calculator/calculate-heat-convection.html %}

<span id="heat_management_convection">308</span>W tabes gennem konvektion, men din krop mangler stadigvæk at slippe af med <span id="heat_management_subtotal_1">613</span>W i varme.

## 2. Varmetab til radiation

Vi taber også noget varme gennem simpel radiation. Det er mindre effektivt end gennem konvektion.

Selvom vi overfører noget af vores varme til omgivelserne, så kan omgivelserne også overføre varme til os. Tænk på en dag, hvor du går på varm asfalt og næsten føler du går på en stegepande.

Men her prøver vi at estimere den potentielle varmeoverførsel til omgivelserne baseret på din kropsoverflade og temperaturforskellen mellem luften og din hud.

{% include calculator/calculate-heat-radiation.html %}

Varmetabet gennem radiation er <span id="heat_management_radiation">57</span>W. Men kroppen skal stadig af med <span id="heat_management_subtotal_2">556</span>W varme.

Jeg tror [Alan Couzens](https://www.alancouzens.com/blog/heat.html)' oprindelige beregner har et forkert udgangspunkt for beregningerne. Den forudsætter en omgivende temperatur på 0°C, hvilket jo kun er tilfældet, hvis man køler sig selv ned med is undervejs.
{: .notice--info }

## 3. Varmetab til evaporation

Kroppen har også potentiale til at slippe af med meget varme gennem evaporation. Med andre ord sved.

Der er tre faktorer, som har betydningen for effektiviteten af evaporation.

1. **Luftfugtigheden**. Hvis luftfugtigheden er høj, så er effektiviteten af fordampningen af sved ikke så effektivt.
2. **Atletens svedrate**. Jo bedre trænet atleten er til at have en høj svedrate.
3. **Atletens væskeoptagelseshastighed**. Atleten skal træne evnen til at optage en høj volumen af væske.

Læs: [Hvor meget væske skal du drikke?](/hvor-meget-vand-skal-man-drikke-om-dagen/)

I varme er det særligt under længere arbejde at have en fornuftig hydreringsstrategi. Det er faktisk vigtigt **ikke at overhydrere**.

Lad os kigge lidt på tallene igen...

Den øvre grænse for væsketransport på tværs af tarmvæggen er 1,5 L/timen. Derfor skal vores svedrate helst ikke være højere end det, da vi så risikerer at opbruge kroppens væskedepoter.

{% include calculator/calculate-heat-evaporation.html %}

Varmetabet via evaporation er <span id="heat_management_evaporation">300</span>W. Det giver en total på <span id="heat_management_subtotal_3">256</span>W af varme tilbage i systemet.

<p id="heat_management_message">Vær opmærksom! Dit varmeregnskab er positivt. Det betyder, at din kernetemperatur over tid formentlig vil stige. Tænk på, hvordan du få mere køling i systemet.</p>

## Hvor meget stiger kernetemperaturen?

Alt dette er naturligvis baseret på modeller og estimater. Men hvis du har overskudsvarme, som du ikke kan komme af med, så vil kroppen blive varmere.

Men hvor varm?

Lad os kigge lidt på tallene:

{% include calculator/calculate-heat-temperature-rise.html %}

Kroppen vil gøre alt, hvad den kan for at fastholde kropstemperaturen i et relativt snævert interval.

<p id="heat_temperature_rise_message"></p>

Hvis kropstemperaturen ikke kan holdes nede på andre måder, så kan kroppen kun sænke intensiteten, så varmeproduktionen bliver mindre.

I cykling får du en relativt høj grad af nedkøling pga. den høje fart. Men på ekstremt varme dage, så skal du altså selv lægge noget i ligningen.

## Konklusion

Varmehåndtering kræver, at du øver dig. Der er meget, du kan gøre for at forberede dig. Hvis du skal træne eller konkurrere i varmen, så er det en god ide at [træne på din varmeakklimatisering](/varmeakklimatisering-traening-i-varmen/) først.

Men du kan også gøre det lettere for dig selv, så du skaber mindre varme at skulle af med.

Du kan forbedre din cykeløkonomi ved at træne teknik.

Du kan sørge for en passende kropsvægt, så du behøver at træde færre watt for at få fremdrift.

Du kan sørge for, at du holder lidt øje med, at du ikke træder for hårdt i pedalerne for tidligt i løbet, så du ikke overopheder. Det er meget svært at køle sig ned igen.

Du kan tænke over aktive nedkølingsstrategier undervejs i løbet, som supplerer den naturlige nedkøling.

Du kan læse mere om [varmehåndtering i løb](/varme-management-loeb/), hvor konvektion hjælper dig noget mindre, da din hastighed er lavere end i cykling.

God fornøjelse i varmen.