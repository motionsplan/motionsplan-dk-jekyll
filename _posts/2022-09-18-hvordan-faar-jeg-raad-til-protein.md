---
title: &title "Hvordan finder jeg billigt protein?"
seo_title: "Hvordan får jeg råd til protein? Hvor er det billigst?"
description: "Vil du gerne vide, hvordan du får dækket dit proteinbehov billigst? Her kigger vi på de billigste kilder til protein."
permalink: /billig-protein/
language: da
header:
  teaser: https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=300&w=400&q=10
  caption: *title
category:
  - Kost & Ernæring
  - Kosttilskud
tags:
  - kost
  - protein
  - kosttilskud
last_modified_at: 2022-10-06T23:14:14Z
toc: true
---

Vil du gerne vide, hvordan du får dækket dit proteinbehov billigst? Her kigger vi på de billigste kilder til protein.

Atleter har brug for et relativt [højt dagligt indtag af protein](/dagligt-protein-indtagelse/), men når fødevarepriserne stiger, så rammer det hurtigt pengepungen.

Derfor kan der være brug for at kigge sig om efter **billigere proteinkilder**.

DR skriver, hvordan styrkeatleter pludselig er blevet [tilbudsjægere](https://www.dr.dk/nyheder/indland/stigende-priser-rammer-landets-store-overarme-vaegtloefterklub-maa-fylde-skabet-med) og fylder skabene med proteinholdige tilbudsvarer, men også hvordan de har kigget efter nye kilder til protein.

{% include figure image_path="/assets/images/blog/billig-protein-dr.png" caption="Kilde: [DR.dk](https://www.dr.dk/nyheder/indland/stigende-priser-rammer-landets-store-overarme-vaegtloefterklub-maa-fylde-skabet-med)" alt="atleter har brug for billig protein" %}

## Hvad koster protein?

Det er meget forskelligt, hvad madvarer med protein koster. Derfor kan det godt betale sig at kigge lidt på, hvor du får mest protein for pengene.

> Vi snakker meget om, hvad ting koster per gram protein. Når Mathilde Kakaomælk er nede på fem kroner i literen, så er det faktisk billigere protein end proteinpulver.
>
> --- <cite>Simon Darville, vægtløfter til [DR](https://www.dr.dk/nyheder/indland/stigende-priser-rammer-landets-store-overarme-vaegtloefterklub-maa-fylde-skabet-med)</cite>

Lad os kigge på, hvad madvarer koster per gram protein.

{% assign met_values = site.data.protein-prices %}
| Fødevare | Protein pr. 100 g | Pris pr. g protein | Pris 40 g protein |
|-|-|
{% for row in met_values offset:2 -%}
| {{ row.Food }} | {{ row.Protein-per-100g }} | {{ row.Price-g-protein }} | {{ row.Price-40g-protein }} |
{% endfor %}

{% comment %}

## Hvor får du mest protein for pengene?

{% endcomment %}

## Konklusion

Du kan sagtens spare nogle penge og få dækket sit daglige proteinbehov gennem den almindelige kost, hvis du vælger lidt klogt på hylden af proteinkilder.

Du kan tjekke vores [oversigt over proteinholdige fødevarer](/protein-i-madvarer/) for at få endnu mere inspiration. Så kan du selv regne priserne ud per gram og se, hvordan du får dækket dit proteinbehov billigst.

{% comment %}
***

Er du interesseret i, hvor meget protein du skal indtage om dagen for at få de optimale resultater af din træning? Her har du svaret!

Hvor meget protein skal du have for at give dine muskler de bedste betingelser for muskelvækst og restitution?

Og risikerer du at indtage for meget protein på en dag, så du slet ikke kan optage det?

Der er stor interesse for protein nu om dage. Når du søger på Google efter: "Hvor meget protein har jeg behov for om dagen?", så kommer der mange resultater frem.

Videnskab.dk behandler [10 myter](https://videnskab.dk/krop-sundhed/10-myter-om-proteiner-del-i) om protein og Aktiv Træning har lavet en [beregner](https://aktivtraening.dk/sund-livsstil/test-hvor-meget-protein-har-jeg-brug-for) til at estimere, hvor meget protein forskellige træningsformer kræver.

Men der er mange forskellige tal og anbefalinger i de forskellige artikler.

Hvad skal man tro på?

Så lad os dykke ned i, hvor meget protein du skal indtage om dagen?

## Hvor meget protein har du brug for om dagen?

**Du bør indtage 0,75-2,5 gram protein pr. kg kropsvægt pr. dag alt efter, hvor meget du træner og hvilken type træning du laver. Der er flere studier der viser, at man kan udnytte op til 2 gram protein pr. kg kropsvægt pr. dag, men som en helgardering kan folk, der træner rigtig meget indtage lidt mere.**

Det er en bred anbefaling. Du kan regne lidt på dit eget daglige proteinindtag i beregneren nedenunder.

Men du bør bagefter sætte dig ind i optagelseshastigheden for protein.

## Beregn dit daglige proteinbehov

{% include calculator/calculate-protein.html %}

{% comment %}


https://dovefitness.dk/hvor-meget-protein-skal-man-spise/

https://youtu.be/59baGu7E0e8

https://www.bodylab.dk/shop/proteinhierarkiet-det-2751c1.html

{% endcomment %}

## Hvor meget protein kan man optage om dagen?

Nikolaj Bach besvarer spørgsmålet på [bodylab.dk](https://www.bodylab.dk/shop/hvor-mange-gram-protein-kan-man-optage-3185c1.html).

> Denne viste at proteinbehovet for optimale resultater af styrketræning gennemsnitligt var på 1,6 g pr. kg kropsvægt, men at det øvre konfidensinterval for denne værdi var 2,2 g pr. kg (13).
>
> De foreslår derfor at man i praksis fordeler dette indtag ligeligt over mindst 4 måltider. Det vil altså i praksis sige at hvis man spiser 4 måltider, så bør hvert måltid indeholde omtrent 0,55 g protein pr. kg kropsvægt. For en person på 85 kg ville det eksempelvis være (85 * 0,55) 47 g protein pr. måltid.
>
> --- <cite>[Nikolaj Bach](https://www.bodylab.dk/shop/hvor-mange-gram-protein-kan-man-optage-3185c1.html)</cite>


## Hvor hurtigt optager man protein?

## Hvor meget protein kan man optage pr. måltid?

{% endcomment %}
