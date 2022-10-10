---
title: &title "Styrkeløft rekorder: Hvem løfter mest i squat, bænkpres og dødløft?"
seo_title: "Styrkeløft rekorder: Hvem løfter mest i squat, bænkpres og dødløft?"
permalink: /styrkeloeft-rekorder/
description: "Hvor stærk er du i forhold til de bedste? Her kigger vi på, hvilke rekorder der findes der i styrkeløft? Hvem løfter mest i squat, bænkpres og dødløft?"
excerpt: "Hvor stærk er du i forhold til de bedste? Her kigger vi på, hvilke rekorder der findes der i styrkeløft? Hvem løfter mest i squat, bænkpres og dødløft?"
language: da
header:
  teaser: https://images.unsplash.com/photo-1534368270820-9de3d8053204?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&&h=300&w=400&q=10
  caption: *title
  overlay_filter: 0.3
category:
  - Styrketræning
  - Test
tags:
  - styrketræning
  - test
last_modified_at: 2022-10-09T07:14:14Z
toc: true
#faq:
#  - question: Hvordan beregner man sin egen 1 RM?
#    answer: Du kan naturligvis bruge vores RM-beregner til at beregne din egen 1RM, men du kan også selv regne det hele ud med en RM formel. Jeg har samlet de mest populære formler til at udregne 1RM-max nedenunder.
#  - question: Hvad betyder RM, 1RM max og one repetition maximum?
#    answer: "**One Repetition Maximum** kaldes også 1RM er et udtryk for den vægt, man maksimalt kan løfte for en gentagelse i en given øvelse. Det kan være gavnligt at kende sin 1RM, hvis man bruger procentbaserede træningsprogrammer."
---

Hvor stærk er du i forhold til de bedste? Her kigger vi på, hvilke rekorder der findes der i styrkeløft? Hvem løfter mest i squat, bænkpres og dødløft?

I styrkeløft findes en række forskellige vægtklasser, og du kan enten løfte med eller uden udstyr. Der er også mange forskellige forbund.

Jeg har i første omgang valgt at fokusere på rekorder _uden_ udstyr og fra International Powerlifting Federation, hvor dopingtests er en del af det.

Men du skal heller ikke snydes for de vildeste løft med udstyr og folk, der har spist en del vitaminer under forskellige vilkår.

## Hvad er det bedste løft?

Det lyder altid imponerende, når nogen har løftet rigtig tunge vægte. Men du kan ikke sammenligne løfterne uden at tage højde for deres kropsvægt og det tilladte udstyr i løftet.

Men hvad har egentlig betydning?

Først og fremmest så har **teknikken i løftet** naturligvis betydning. Det er mest interessant at sammenligne løft, når rammerne for løftet er de samme. Løftene er således mest interessante, når de følger [standardreglerne for styrkeløft](/powerlifting-rules/).

Selvom styrkeløft-reglerne faktisk ikke er helt så standard, som man skulle tro.

For det andet har **kropsvægten** rigtig stor betydning for, hvor meget muskelmasse du har til at flytte vægtene med.

Derfor er der også lavet forskellige måder, hvor man kan sammenligne på tværs af vægtklasser og køn.

Særligt udbredt er Wilks formel og IPF-point. Jeg har skrevet meget mere om, hvordan du kan [sammenligne styrke](/sammenligning-styrke/) med de formler.

Formlerne kræver at man kender løfterens kropsvægt. Når løftet er registreret i en given vægtklasse, men vi ikke kender den nøjagtige kropsvægt, så er jeg gået ud fra, at de netop klarer vægtkravet for vægtklassen.

## Hvor finder du rekorder for styrkeløft?

Når du leder efter verdensrekorder for styrkeløft, så finder du utrolig mange kilder - og der er utrolig mange imponerende løft på Youtube.

Men hvordan finder du nogle rigtige styrkerekorder?

Jeg har brugt [Open Powerliftings database](https://www.openpowerlifting.org/records/raw/fully-tested). Her kan du søge på vægtklasser, løft og forbund og få udførlige lister med verdensrekorder i de forskellige løft.

Jeg har valgt 'Raw' og 'All Fully tested feds' for oversigtslisterne.

{% include figure image_path="/assets/images/blog/openpowerlifting-records.png" alt="styrkeløft rekorder open powerlifting" %}

## Squat rekorder

Lad os starte med at dykke ned i verdensrekorderne i squat. Der er virkelig nogle imponerende løft.

Squat er en af de løftediscipliner, hvor udstyr kan betyde rigtig meget. Her kigger vi primært på løftere uden udstyr, som er den kategori der også hedder 'Raw'.

Løfterne må bruge et bælte, og de må bruge neopren knæbind, men det er ikke tilladt at bruge understøttende dragt.

Der er specifikke krav til dybden i løftet. Reglerne er at hoftefolden skal under knæets øverste del.

### Squat verdensrekorder for mænd

Det tungeste raw-squat, der nogensinde er lavet til en konkurrence er på 490 kg. Det blev løftet af amerikaneren Ray Williams i 2019.

Du kan i videoen lægge mærke til, at der er 5 spottere, og løftet ser utrolig hurtigt ud. Du bemærker sikkert også, at Ray Williams selv vejer en del.

{% include video provider="youtube" id="YQVciV-hqS4" %}

Måske er 500 kg i squat uden udstyr ikke helt umuligt?

Inden vi kigger på tabellen over verdensrekorderne i squat, så er der lige en anden vi bør nævne.

Polakken, Andrzej Stanaszek, har løftet 290 kg i 2002, da han kun selv vejede omkring 50 kg. Det svarer til at løfte sin egen vægt næsten 6 gange. Løftet herunder er fra et stævne i Vejle i 2003, hvor Stanaszek bruger en understøttende dragt, og der var 300,5 kg på stangen.

{% include video provider="youtube" id="X57aLTTEX_w" %}

Stanaszeks kropbygning ser dog ud til, at han er væksthæmmet, og derfor er hans kropsbygning lidt anderledes end de fleste menneskers.

### Squat raw rekorder for mænd

{% assign records = site.data.powerlifting-records-squat | where: "Gender", "Male" %}
| Kropsvægt | Navn | Vægt | Wilksscore | Ift. kropsvægt |
|-|-|-|-|-|-|-|
{% for row in records offset:2 -%}
| {{ row.Bodyweight }} | {{ row.Name }} | {{ row.Weight }} | {{ row.Wilksscore }} | {{ row.Bwratio }} |
{% endfor %}

### Squat rekorder for kvinder

Tiffany Chapon fra Frankrig løfter 160,5 kg i 2022. Hun løfter i 48 kg klassen, hvilket betyder, at hun løfter 3,4 gange sin egen kropsvægt.

{% include video provider="youtube" id="Hw_IO9XYfkY" %}

I klippet kan du lægge mærke til, at hun kigger relativt meget nedad. Hun har også et punkt i bevægelsen, hvor løftet går lidt langsommere, men arbejder sig overbevisende igennem det.

Det er en skræmmende styrke.

### Squat raw rekorder for kvinder

{% assign records = site.data.powerlifting-records-squat | where: "Gender", "Female" %}
| Kropsvægt | Navn | Vægt | Wilks | Ift. kropsvægt |
|-|-|-|-|-|-|-|
{% for row in records offset:2 -%}
| {{ row.Bodyweight }} | {{ row.Name }} | {{ row.Weight }} | {{ row.Wilksscore }} | {{ row.Bwratio }} |
{% endfor %}

## Bænkpres rekorder

Bænkpres er en af de discipliner, hvor løfterne ofte arbejder meget hårdt på at reducere, hvor langt stangen skal bevæge sig.

Reglerne er for nylig blevet justeret lidt, så løft med meget kort vandring ikke længere er tilladte.

I bænkpres skal stangen være helt i ro, mens den rører brystet indtil dommeren giver et pressignal.

Hvis du vil sammenligne din styrke med disse vanvittige præstationer, så skal du altså være opmærksom på denne standardisering, men også rigtig hårde detalje.

I bænkpres findes der særskilte konkurrencer kun i bænkpres. Her stiller der naturligvis bænkpresspecialister op. Det betyder, at rekorderne er højere i disse konkurrencer.

## Bænkpres verdensrekorder for mænd

Det tungeste løft i bænkpres er lavet af Kirill Sarychev fra Rusland. Han løftede i et officielt stævne i 2015 335 kg RAW. Du kan se løftet i videoen nedenunder.

{% include video provider="youtube" id="BOeRI6MDyns" %}

Kirill Sarychev løftede imidlertid ikke i et af de fuldt testede forbund, men hans teknik og presstyrke er outstanding. Derfor er videoen virkelig værd at se.

I bænkpres kan man ofte se teknikker, hvor _range of motion_ bliver meget kort.

Her er et godt eksempel på det med amerikaneren, Tiny Meeker, der i 2013 med fuldt udstyr presser næsten 500 kg.

{% include video provider="youtube" id="kQWh7A33z8M" %}

Tiny Meeker havede 1100 lbs på stangen, men brød ikke helt 500 kg grænsen, da det kun svarer til 499,86 kg. Løftet er tydeligvis på grænsen af hans formåen. Han er iført bænkprestrøje, mavebælte, håndledsbind og albuerne er også bundet ind.

Det betyder at ROM er meget lille, og det er faktisk vanskeligt at se om, der er lockout i albuerne. For mig bliver det lidt absurd i så meget udstyr.

### Bænkpres raw rekorder for mænd

{% assign records = site.data.powerlifting-records-bench | where: "Gender", "Male" %}
| Kropsvægt | Navn | Vægt | Wilksscore | Ift. kropsvægt |
|-|-|-|-|-|-|-|
{% for row in records offset:2 -%}
| {{ row.Bodyweight }} | {{ row.Name }} | {{ row.Weight }} | {{ row.Wilksscore }} | {{ row.Bwratio }} |
{% endfor %}

### Bænkpres verdensrekorder for kvinder

Souhad Ghazouani har bænkpres-rekorden for kvinder i 67,5 kg klassen, og hun har den også i 75 kg klassen. Her har hun løftet hhv. 147 kg i 2012 og 150 kg i 2013.

De to løft siger også om, at hun sikkert er gået lidt ned i vægtklasse for at kunne løfte i 67,5 kg vægtklassen, når hun allerede året efter er oppe i 75 kg vægtklassen.

At gå lidt op i vægtklasse har imidlertid også givet lidt flere kg på stangen!

Det er særligt imponerende at Ghazouani er paraatlet. Her kan du se hende bænkpresse i 2016 ved OL i Rio.

{% include video provider="youtube" id="Je13bShetwo" %}

### Bænkpres raw rekorder for kvinder

{% assign records = site.data.powerlifting-records-bench | where: "Gender", "Female" %}
| Kropsvægt | Navn | Vægt | Wilksscore | Ift. kropsvægt |
|-|-|-|-|-|-|-|
{% for row in records offset:2 -%}
| {{ row.Bodyweight }} | {{ row.Name }} | {{ row.Weight }} | {{ row.Wilksscore }} | {{ row.Bwratio }} |
{% endfor %}

## Dødløft rekorder

Dødløft er det letteste løft i styrkeløft. I hvert fald at forstå og dømme.

Du skal ganske enkelt rejse dig op med strakte ben og strakt hofte og skuldrene tilbage.

Det er ikke tilladt at bruge straps, men du må gerne have bælte på. I raw kan du heller ikke benytte en understøttende dragt.

Du bestemmer selv om du løfter konventionelt med benene nogenlunde samlet, eller du løfter sumo med en bred stand.

### Dødløft verdensrekorder for mænd

RAW rekorden for det tungeste dødløft nogensinde er 461 kg, sat i 2011 af Benedikt Magnusson fra Island. Han løfter uden straps og uden dødløftdragt, men med bælte.

{% include video provider="youtube" id="5M13EBl_jF0" %}

Et imponerende løft. Magnusson er imidlertid heller ikke med på listen herunder, da han heller ikke løftede i et fuldt testet forbund på det tidspunkt.

Det tungeste løft i et af det fuldt testede forbund er Michail Koklayev, som i 2012 løftede hele 417,5 kg.

Læg mærke til i videoen, at det er i orden at svine lidt med kalken, når man er rigtig stærk. Og at de faktisk havde loadet baren lidt forkert.

{% include video provider="youtube" id="EjjdjFEcYFs" %}

Dødløft er jo også en af de discipliner, som verdens stærkeste mænd også ynder at konkurrere i.

Da de stærke mænd ikke bliver dopingtestet, og de ofte løfter under andre forudsætninger, så tæller de ikke på denne liste.

Eddie Hall løftede i 2016 500 kg med straps i World Deadlift Championships, hvor løfterne konkurrerede under stærkmandsregler. Her er straps tilladte.

{% include video provider="youtube" id="T9Y4o_BqC0A" %}

### Dødløft raw rekorder for mænd

{% assign records = site.data.powerlifting-records-deadlift | where: "Gender", "Male" %}
| Kropsvægt | Navn | Vægt | Wilksscore | Ift. kropsvægt |
|-|-|-|-|-|-|-|
{% for row in records offset:2 -%}
| {{ row.Bodyweight }} | {{ row.Name }} | {{ row.Weight }} | {{ row.Wilksscore }} | {{ row.Bwratio }} |
{% endfor %}

### Dødløft verdensrekord for kvinder

Jeg synes 200 kg er lidt en magisk grænse i dødløft. Den napper kvinderne allerede i 52 kg klassen, hvor Farhanna Farid løfter 200,5 kg i 2022. Det svarer til 4x hendes kropsvægt.

{% include video provider="youtube" id="Dc-1s9r5rQw" %}

### Dødløft raw rekorder for kvinder

{% assign records = site.data.powerlifting-records-deadlift | where: "Gender", "Female" %}
| Kropsvægt | Navn | Vægt | Wilksscore | Ift. kropsvægt |
|-|-|-|-|-|-|-|
{% for row in records offset:2 -%}
| {{ row.Bodyweight }} | {{ row.Name }} | {{ row.Weight }} | {{ row.Wilksscore }} | {{ row.Bwratio }} |
{% endfor %}

## Konklusion

Nu er du forhåbentlig inspireret til at gå ned i træningscenteret og prøve at sætte dine egne rekorder i squat, bænkpres og dødløft.

Husk at standardisere dine løft. Jeg kan godt lide reglerne i styrkeløft, for så har du et godt udgangspunkt for sammenligning. Når du laver testen så følg vores [guide til at lave en maxtest i styrketræning](/rm-maxtest/).

Du kan også bruge lidt submaksimale vægte og [udregne din 1RM i vores beregner](/rm-beregner/).
