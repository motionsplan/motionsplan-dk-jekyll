---
title: 🚴 Beregn bevægelsesøkonomi og bruttoeffektivitet (Cykling)
seo_title: Beregn bevægelsesøkonomi, cykeløkonomi og effektivitet
permalink: /beregn-bevaegelsesokonomi-effektivitet/
redirect_from: 
  - /udregne-energiforbrug-og-effektivitet/
description: Udregn din bevægelsesøkonomi, cykeløkonomi og bruttoeffektivitet ud fra iltoptagelse (VO2) og watt. Lær fysiologien bag energiforbrug i cykling.
excerpt: Udregn din bevægelsesøkonomi, cykeløkonomi og bruttoeffektivitet ud fra iltoptagelse (VO2) og watt. Lær fysiologien bag kroppens energiforbrug under cykling.
language: da
header:
  teaser: /assets/images/unsplash/photo-1452573992436-6d508f200b30.jpg
  credit: https://images.unsplash.com/photo-1452573992436-6d508f200b30
  caption: Udregn bevægelsesøkonomi og effektivitet i cykling
categories:
- Fysiologi
- Cykling
tags:
- bevægelsesøkonomi
- cykeløkonomi
- bruttoeffektivitet
- fysiologi
- cykling
- beregner
meta:
  name: Bevægelsesøkonomi og effektivitet i cykling
  equipment: ingen
  measures: bevægelsesøkonomi og bruttoeffektivitet
  target: voksne
  type: cykling og løb
# INTERAKTIVE SOFTWARE-VÆRKTØJER
tools:
  - id: "tool-bevaegelsesokonomi-beregner"
    title: "Bevægelsesøkonomi & Bruttoeffektivitet Beregner"
    description: "Interaktiv beregner til udregning af energiforbrug (EE), bruttoeffektivitet (GE) og cykeløkonomi baseret på iltoptagelse (VO2), RER/R-værdi og watt-ydelse."
    category: ["Fysiologi", "Cykling", "Beregnere"]
    type: ["Beregner"]
    measures: ["Bevægelsesøkonomi", "Bruttoeffektivitet (GE)", "Energiforbrug (EE)", "Cykeløkonomi"]
    anchor: "#beregn-din-bevaegelsesokonomi"
    category_schema: "HealthAndFitnessApplication"
last_modified_at: '2026-07-25T10:00:00Z'
---

Her dykker vi ned i beregningerne bag energiforbrug, bevægelsesøkonomi og effektivitet i øvelser, fx cykling. 

> **Leder du efter dit daglige energiforbrug?**  
> Denne side handler om kroppens fysiologiske *bevægelsesøkonomi og bruttoeffektivitet* under cykling og arbejde. Hvis du i stedet vil beregne, hvor mange kalorier din krop forbrænder i løbet af et døgn (dagsbehov/ligevægtsindtag), skal du bruge vores [ligevægtsberegner](/ligevaegtsindtag-beregner/).
{: .notice--info }

Jeg har samlet det hele i en ny, samlet beregner herunder, hvor du hurtigt kan udregne din bevægelsesøkonomi, bruttoeffektivitet og dit energiforbrug på én gang. Du kan vælge blot at indtaste dine tal for at få resultatet med det samme – eller du kan scrolle forbi beregneren og dykke ned i den bagvedliggende fysiologi og formlerne bag udregningerne.

Beregningerne kræver, at du har adgang til at måle iltoptagelsen (og gerne også udskillelsen af kuldioxid for at finde din R-værdi). Her dykker vi særligt ned i en metode til at måle cykeløkonomi, som er inspireret af [VO2MASTERs blogindlæg](https://vo2master.com/blog/exercise-efficiency/).

## Beregn din bevægelsesøkonomi

{% include calc/vo2-rer-calculator.html %}

## Hvorfor er bevægelsesøkonomi og effektivitet interessant?

For udholdenhedsatleter er bevægelsesøkonomi og effektivitet ofte dét, der adskiller eliten fra den gode motionist. 

Når du forbedrer din effektivitet, kan du producere den samme mængde arbejde (fx at træde 200 watt i pedalerne) med et lavere ilt- og energiforbrug. Det betyder, at du forbrænder færre kulhydrater og sparer på kroppens depoter, hvilket markant udskyder tidspunktet for, hvornår du bliver udmattet. 

To cykelryttere kan have præcis den samme maksimale iltoptagelse (VO₂-max), men den rytter, der har den bedste bevægelsesøkonomi, vil ofte vinde løbet, fordi en større del af rytterens energi omsættes til direkte fremdrift i stedet for at gå til spilde som varme.

Det er vigtigt at understrege, at der er flere forskellige måder at udregne bevægelsesøkonomi på, men her dykker vi ned i rationalet bag vores beregner.

## Hvad er bevægelsesøkonomi?

Bevægelsesøkonomi beskriver kroppens evne til at oversætte den kemiske energi i kroppen til bevægelse.

Selvom bevægelsesøkonomi og effektivitet ofte bliver brugt synonymt, er der faktisk en defineret forskel.

- **Effektivitet**. Energi (kcal eller Joule) nødvendigt for at fastholde en bestemt hastighed eller power.
- **Økonomi**. Ilt (Liter O₂) nødvendigt for at fastholde en bestemt hastighed eller power.

For at udregne effektiviteten skal vi først udregne energiforbruget ([Jeukendrup 2001](https://pdfs.semanticscholar.org/eed4/f50eee1600210eb325bb71d0e867dd3ab504.pdf)).

---

## Matematikken bag: Trin-for-trin guide

Herunder gennemgår vi de bagvedliggende formler og giver et konkret regneeksempel på, hvordan beregneren øverst på siden når frem til resultaterne.

### 1. Udregn energiforbrug

Når du har kørt steady state med en specifik intensitet i fx 5 minutter, kan du bruge gennemsnitsværdierne fra de sidste par minutter. 

Hvis ikke du kender R-værdien (Respiratory Exchange Ratio), kan du bruge 0,90 som estimat. Der er en lille smule forskel på, hvor mange kcal der bliver brugt pr. liter ilt, alt efter om det primære næringsstof er kulhydrat eller fedt. Ved submaksimalt arbejde vil $R = 0,90$ være et glimrende kompromis.

Iltens energetiske værdi (hvor meget energi der frigives pr. liter optaget ilt) afhænger altså af R-værdien. Generelt kan energiforbruget (Energy Expenditure, $EE$) opstilles således:

$$ EE \text{ (kcal/min)} = \text{VO}_2 \text{ (L/min)} \times \text{Energi-ækvivalent pr. liter O}_2 $$

For at kunne sammenligne energiforbruget med arbejdet på cyklen (som måles i Watt, hvilket svarer til Joule pr. sekund, J/s), omregner vi ofte energiforbruget til J/s:

$$ EE \text{ (J/s)} = \frac{EE \text{ (kcal/min)} \times 4184 \text{ J/kcal}}{60 \text{ sekunder}} $$

**Eksempel:**
Lad os sige, at du cykler med <span id="bike_efficiency_text_workrate">100</span>W. Iltoptagelsen er målt til <span id="bike_efficiency_text_vo2">1,89</span> L O₂/min og R-værdien er på <span id="bike_efficiency_text_r">0,90</span>. Indsat i formlerne for kalorieforbrug resulterer dette i et energiforbrug på:

$$ EE = 650,77 \text{ J/s} $$

*(Bemærk: Den præcise værdi afhænger af, hvilken formel for iltens energetiske ækvivalent der benyttes, men princippet er det samme).*

### 2. Udregn bruttoeffektivitet (gross efficiency)

Når du kender energiforbruget (omregnet til Joule/sekund) og du kender intensiteten i Watt fra cyklen (hvor 1 Watt = 1 J/s), kan du udregne bruttoeffektiviteten. 

Formlen for bruttoeffektivitet ($GE$) er forholdet mellem det mekaniske arbejde og det samlede energiforbrug:

$$ GE \ (\%) = \left( \frac{\text{Mekanisk arbejde (W)}}{\text{Energiforbrug (J/s)}} \right) \times 100 $$

Bruttoeffektiviteten er ikke særlig høj, når du cykler. Den mindste del af din energi bliver overført til pedalerne, mens resten (op mod 80%) udskilles som varme. Typisk er effektiviteten på cykel mellem [7,5-25,4%](https://www.researchgate.net/profile/George_Brooks/publication/22014772_Muscular_efficiency_during_steady-rate_exercise_effects_of_speed_and_work_rate/links/02e7e531d20463170e000000.pdf).

> As power output increases so does gross efficiency up to about 300w (where values range from 18-25%), then due to the recruitment of more type II muscle fibers efficiency begins to drop.
>
> -- <cite>[vo2master.com](https://vo2master.com/blog/exercise-efficiency/)</cite>

**Eksempel:**
Med et energiforbrug på <span id="bike_efficiency_ee_js">650,77</span> J/s og et power output på <span id="bike_efficiency_power_output_watt">100</span>W bliver regnestykket:

$$ GE \ (\%) = \left( \frac{100 \text{ W}}{650,77 \text{ J/s}} \right) \times 100 = 15,37 \% $$

Bruttoeffektiviteten er altså kun <span id="bike_efficiency_ge">15,37</span>%.

Læs: [Varmehåndtering i cykling](/varme-management-cykling/)
{: .notice }

### 3. Udregn cykeløkonomien

Endelig kan vi udregne cykeløkonomien. Her ser vi bort fra det totale energiforbrug i Joule/kcal og fokuserer udelukkende på iltforbruget i relation til arbejdet.

Først omregnes watt (J/s) til arbejde pr. minut (kJ/min):

$$ \text{Arbejde (kJ/min)} = \frac{\text{Power (W)} \times 60 \text{ sek}}{1000} $$

Derefter finder vi økonomien ved at dividere det udførte arbejde med mængden af brugt ilt:

$$ \text{Cykeløkonomi (kJ/L O}_2) = \frac{\text{Arbejde (kJ/min)}}{\text{VO}_2 \text{ (L/min)}} $$

**Eksempel:**
Med et power output på <span id="bike_economy_power_output">100</span>W og et iltforbrug på <span id="bike_economy_vo2">1,89</span> L O₂/min ser mellemregningen således ud:

$$ \text{Arbejde (kJ/min)} = \frac{100 \times 60}{1000} = 6,0 \text{ kJ/min} $$

$$ \text{Cykeløkonomi} = \frac{6,0 \text{ kJ/min}}{1,89 \text{ L/min}} = 3,17 \text{ kJ/L} $$

Cykeløkonomien bliver altså <span id="bike_economy_biking_economy">3,17</span> kJ pr. liter O₂.

## Konklusion

Sådan kan du altså ved hjælp af målinger af iltoptagelsen og R-værdien udregne cykeløkonomi og cykeleffektivitet. Det er en fremragende måde at overvåge, om din krop over tid bliver bedre til at udnytte energien og omsætte den til fart i pedalerne.

Læs: [Beregn din løbeøkonomi](/lobeokonomi/)
{: .notice }
