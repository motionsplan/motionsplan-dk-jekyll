---
title: &title "️Fysiologien bag temperaturregulering af menneskekroppen"
seo_title: "️Fysiologien bag temperaturregulering af menneskekroppen"
permalink: /fysiologi-temperaturregulering/
description: "Temperaturreguleringen hos mennesker er ret unik. Ved at forstå den, så kan du bedre planlægge dine præstationer eller lave varmetræning."
excerpt: "Temperaturreguleringen hos mennesker er ret unik. Ved at forstå den, så kan du bedre planlægge dine præstationer eller lave varmetræning."
language: da
header:
  teaser: https://images.unsplash.com/photo-1489659831163-682b5af42225?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=300&w=400&q=10
  caption: *title
category:
  - Fysiologi
tags:
  - interaktiv artikel
  - fysiologi
  - varmetræning
last_modified_at: 2024-08-12T10:14:14Z
---

Temperaturreguleringen hos mennesker er ret unik. Ved at forstå den, så kan du bedre planlægge dine præstationer eller lave varmetræning.

Mennesket kan regulere kernetemperaturen, så den ligger mellem 36,67°C til 37,78°C, når den omgivende temperatur er mellem 20°C til 54°C (Guyton 1971).

Temperaturreguleringen foregår gennem stråling (radiation), konduktion (overførsel), konvektion og fordampning af sved (evaporation af perspiration).

Her får du et overblik over, hvordan temperaturreguleringen foregår.

## Temperaturregulering i kroppen

Temperaturreguleringen styres i hypothalamus. I hypothalamus er kontrolcenteret, men det er også her de væsentligste temperatursensorer er.

Du begynder at svede ved en hudtemperatur på 37°C, og svedraten stiger hurtigt, hvis hudtemperaturen stiger.

Varmeproduktionen i kroppen er nogenlunde konstant under disse omstændigheder, men temperaturen stiger naturligvis, hvis du begynder at arbejde hårdere.

Kroppen har alle mulige måder at holde temperaturen konstant på.

- Hvor meget blod der sendes ud til huden.
- Svedraten øges eller sænkes.
- Rystelser eller afslapning i musklerne for at sænke eller forøge temperaturproduktionen i musklerne.
- Regulering af efedrin, norefedrin og tyroxin for at regulere varmeproduktionen.

### Lufttemperaturen er lavere end hudtemperaturen

{% include figure image_path="http://hyperphysics.phy-astr.gsu.edu/hbase/thermo/imgheat/bodycool2.png" caption="Kilde: [HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/thermo/coobod.html#c1)" %}

Dette er naturligvis en forsimplet udgave af temperaturreguleringen. Selvom du er inaktiv, så skal du stadig af med en del varme, som hænger sammen med [dit hvilestofskifte](/bmr-beregner-hvilestofskifte-basalstofskifte/).

En voksen mand skal fx af med omkring 90 watt varme bare pga. basalstofskiftet.

Udstråling er i hvile en af de væsentligste mekanismer ved stuetemperatur. Ved stuetemperatur på 23 C, så vil det ikke være rart ikke at have tøj på.

Hudtemperaturen er typisk omkring 34 C i hvile, og din kernetemperatur er omkring 37 C.

## Lufttemperaturen er højere end hudtemperaturen

{% include figure image_path="http://hyperphysics.phy-astr.gsu.edu/hbase/thermo/imgheat/bodycool3.png" caption="Kilde: [HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/thermo/coobod.html#c1)" %}

Når lufttemperaturen er højere end kropstemperaturen, så bliver det lidt vanskeligere at komme af med varmen.

Du skal stadig af med varmen, der er forbundet med dit stofskifte. Men nu tilfører stråling (radiation), konduktion (overførsel) og konvektion varme til kroppen i stedet for at fjerne den.

Nu bliver fordampning af sved (evaporation af perspiration) den eneste kilde til at fjerne varmen.

Mekanismerne bag temperaturreguleringen vil gøre, at hudtemperaturen stiger til 37°C, og så begynder du at svede mere og mere. Svedraten øges indtil kølingseffekten af fordampningen kan holde huden på 37°C.

Så i varme forhold, så modtager du 109 watt fra omgivelserne, hvis du har en overflade på omkring 2 m<sup>2</sup> og en emmisionsevne på 0,97.

Du har også dit basalstofskifte, så selv i hvile skal du altså af med næsten 200W i varme, når lufttemperaturen er højere end din hudtemperatur.

## Radiation

Der forsvinder en del varme fra kroppen gennem _radiation_ eller udstråling fra kroppen.

Du kan udregne din omtrentlige temperaturregulering gennem udstråling i denne beregner.

{% include calculator/calculate-heat-radiation.html %}

Beregneren er baseret på Stefan Boltzmanns formel for, hvor meget varme, der forsvinder ved radiation (se mere på [HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/thermo/bodrad.html)):

{% include motionsplan/math formula="\frac{Q}{t} = e \times \sigma \times A \times (T_{hot}^4 - T_{cold}^4)" %}

A er kroppens areal, og e er _emmisionsevnen_ af kroppen. Hvis kroppen var en perfekt radiator, så ville e være 1. Kroppen er faktisk en ret god radiator, så vi går ud fra at emmisionsevnen er 0,97.

Temperaturerne skal være i Kelvin i formlen, men beregneren antager, at du indtaster det i Celcius. Endelig er der Stefan Boltzmanns konstant σ, som du selv lige må slå op, hvis du vil regne det i hovedet.

## Konduktion

Konduktion er varmeoverførslen mellem to overflader. Et eksempel er når du sætter dig på en stol, så vil stolen være varmere, når du rejser dig igen (se mere på [HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/thermo/bodcon.html#c1)).

Du kan estimere, hvor meget køling der foregår af din krop i nedenstående beregner.

{% include calculator/calculate-heat-conduction.html %}

Beregneren baserer sig på følgende udregninger.

{% include motionsplan/math formula="\frac{Q}{t} = \frac{k \times A \times (T_{hot} - T_{cold})}{d}" %}

Hvor k er 'thermal conductivity' af den luft, der omgiver kroppen, som er en konstant. A er kroppens areal. T er temperaturen. d er tykkelsen på barrieren, som typisk kan sættes til 5 centimeter fra huden til den omgivende luft, inden temperaturen er skiftet. Endelig skal du huske at gange med 4.186 J/cal.

I et eksempel med køling af kroppen, så kan du naturligvis ikke nøjagtigt se, hvor tyk barrieren er. Barrieren skal forstås som den distance der er, indtil temperaturen er faldet til den omgivende lufttemperatur.

Det er et gæt, at barrieren er `d = 5 cm` inden luften er kølet ned til den omgivende temperatur, når du sidder stille. 

{% include figure image_path="http://hyperphysics.phy-astr.gsu.edu/hbase/thermo/imgheat/wall2.png" caption="Kilde: [HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/thermo/bodcon.html#c4)" %}

Hvis du har en blæser til at fjerne den opvarmede luft eller kører udenfor i vinden, så vil konduktionen blive noget højere.

Her kan vi tale om _konvektion_.

## Konvektion

Når man skal estimere effekten af konvektion på kroppen, så hænger det ofte sammen med konduktion.

Samlet set er kølingen fra konduktion og konvektion ikke tilstrækkeligt til at nedkøle kroppen, hvis man sidder stille.

Det gør man imidlertid ikke så ofte i idræt.

Konvektion er en af de basale mekanismer bag varmeoverførsel. Konvektion i temperaturreguleringen af mennesker foregår ved, at luften omkring kroppen bevæger sig.

Ifølge [HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/thermo/bodcon.html#c4) er den bedste måde at udregne varmetabet ved konvektion, at bruge udregningen for konduktion og **justere vægtykkelsen**, fordi luftbevægelsen reducerer det opvarmede lag, der er omkring huden.

[Alan Couzens](https://www.alancouzens.com/blog/heat.html) udregner konvektionen lidt anderledes. Han bruger bevægelseshastigheden. Jeg ved ikke nøjagtigt, hvor han har formlen fra.

Men med bevægelseshastigheden, så ser beregningen sådan her ud.

{% include calculator/calculate-heat-convection.html %}

Hvis du bruger beregneren til konduktion og sammenligner med Alan Couzens tal for konvektion, så kan du se, at hvis du vælger ´d = 0,08 cm´ med tallene fra eksemplet, så ender du på nogenlunde samme nedkøling.

Hvis du kender en måde at beregne den nødvendige d i forhold til hastighed, så man bare kan bruge beregningerne for konduktion, så skriv endelig!
{: .notice--info }

## Fordampning af sved (evaporation af perspiration)

Når den omgivende temperatur er højere end kropstemperaturen, så tilfører både radiation, konvektion og konvektion varme til kroppen.

Du kan selv prøve i beregnerne ovenfor.

Når de andre kølingsmekanismer er sat ud af drift, så er der kun fordampning af sved fra huden og udåndingsluften.

Selvom du ikke synes du går rundt og sveder, så taber du ifølge [HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/thermo/sweat.html#c1) 600 gram gennem fordampning af fugt fra huden.

Kølingseffekten udnytter, at fordampningen af vand kræver op til 580 cal/gram ved normal hudtemperatur.

Huden vil begynde at svede ved en temperatur på 37°C. Guyton (1971) skriver, at svedraten per time er 1,5 L/timen, men ved [varmeakklimatisering](/varmeakklimatisering-traening-i-varmen/) kan du komme helt op på 3,5 liter i timen.

Fordampningen af sved giver altså en usædvanlig god køling.

Så vær du glad for, at du har evnen til at svede.

Det er naturligvis lidt kompliceret at regne nøjagtigt ud, fordi energien krævet til fordampningen er forskellig i forhold til temperaturen og fordampningen afhænger af lufttemperaturen og luftfugtigheden.

[Alan Couzens](https://www.alancouzens.com/blog/heat.html) har inspireret denne beregner, hvor luftfugtigheden er taget med i betragtning.

{% include calculator/calculate-heat-evaporation.html %}

Jeg har ikke kunnet finde nogen referencer på, hvordan man præcist udregner evaporation. [Hyperphysics](http://hyperphysics.phy-astr.gsu.edu/hbase/thermo/sweat.html#c1) griber det lidt anderledes an.

## Konklusion

Når du arbejder, så genererer kroppen en masse varme. Heldigvis er den også dygtig til at temperaturregulere.

Hvis du skal lave længerevarende træning, så kan det være en rigtig god ide at tænke over, hvordan du sørger for nedkøling af kroppen.

Her kan du lade dig inspirere af de forskellige nedkølingsmekanismer.

<details markdown="1" class="references">
  <summary><h2 id="references">Referencer</h2></summary>

- Guyton, Arthur C., Basic Human Physiology: Normal Function and Mechanisms of Disease, W.B. Saunders Co, 1971.
</details>
