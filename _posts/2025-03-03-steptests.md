---
title: &title "Step tests – Vurder din kondition med en step test"
seo_title: "Step Tests – Vælg den rigtige test fra vores oversigt"
excerpt: "Få overblik over de mest anvendte step tests til at vurdere din kondition og vælg den rigtige steptest for dig."
permalink: /kondital-fra-steptest/
language: da
header:
  teaser: https://i.ytimg.com/vi/kPbmoq5V6AA/maxresdefault.jpg
  caption: *title
category:
  - Tests
  - Kondition
meta:
  name: Steptests 📝
  measures: kondital
  type: steptest
  equipment: stepbænk
  max: submaksimal test
  direct: indirekte test
tags:
  - konditionstest
  - indirekte test
  - test
  - liste
  - moc
  - featured
last_modified_at: 2025-03-03T23:14:14Z
toc: true
breadcrumbs: true
---

En steptest er en enkel og effektiv metode til at vurdere konditionen ved at måle pulsrespons efter gentagne step-bevægelser.

Steptests er ofte brugt inden for fitness, sundhedsvurdering og forskning.

Her finder du en oversigt over de mest populære step tests.

{% include figure image_path="https://i.ytimg.com/vi/kPbmoq5V6AA/maxresdefault.jpg" caption="Et eksempel på at sætte en steptest op for flere på en gang." %}

## Sådan vælger du den rigtige steptest

Når du skal vælge den rette steptest, afhænger det af flere faktorer, som dit konditionsniveau, dine mål og hvilken type udstyr du har til rådighed.

De forskellige steptests varierer i intensitet, testens varighed og hvordan resultaterne skal tolkes. Her er en guide til at vælge den bedste steptest for dig.

### Sammenligning af steptests

| Testnavn                    | Intensitet        | Varighed       | Udstyr krævet      |  Beskrivelse                                                                                                                                  |
|-----------------------------|-------------------|----------------|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| **[Den Danske Steptest](/den-danske-steptest/)**      | Moderat           | 1-6 min      | Stepbænk     | Estimerer VO₂max uden brug af puls. Passer til folk på alle niveauer, fra begyndere til erfarne.                                      |
| **[YMCA 3-minutters Steptest](/ymca-3-minutters-steptest/)**| Lav til moderat   | 3 min          | Stepbænk, stopur     | Kortere test, god til nybegyndere og dem, der hurtigt vil have et estimat af deres kondition. Fokus på pulsrespons. Let med samme bokshøjde                          |
| **[Modificeret YMCA Steptest](/ymca-modified-steptest/)**| Lav til moderat   | 3 min        | Stepbænk, stopur     | Bokshøjden tilpasset den enkelte, hvilket gør den mere individualiseret end standard YMCA-testen. Ser ud til at være den mest præcise med høj validitet.                |
| **[Queens College Steptest](/queens-college-step-test/)**  | Moderat til høj   | 3 min        | Stepbænk, stopur     | En højere boks end YMCA-testen. Forskel på mænd og kvinder i udførelsen. Let med samme bokshøjde.    |

### Hvad skal du vælge?

- **Hvis du er nybegynder eller har lav kondition:** Den **modificerede YMCA steptest** og **YMCA 3-minutters steptest** får du den laveste boks eller en individualiseret boks. De giver et hurtigt billede af din kondition uden at presse dig for meget.
- **Hvis du har et gennemsnitligt konditionsniveau:** Den **Danske Steptest** er en god mulighed, da den er velegnet til både begyndere og mere erfarne personer. Den bruger en moderat intensitet og er lidt svær at koordinere, fordi hastigheden stiger gennem testen. Den har moderat validitet, og måske ikke den mest præcise. 
- **Hvis du har en høj kondition:** **Queens College Steptest** vil udfordre dig mere og have lidt højere intensitet pga. boksen højde.

Uanset hvilken test du vælger, kan den give dig nyttig information om dit konditionsniveau. Vælg den test, der passer bedst til dit mål og dit fysiske niveau.

## Se alle steptests

{% assign site_posts = site.posts | where: "tags", "steptest" | sort: "date" %}

<div class="feature__wrapper" markdown="1">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

## Konklusion

Steptests er en effektiv og tilgængelig måde at vurdere dit konditionsniveau på. Uanset om du er nybegynder eller en erfaren atlet, findes der en steptest, der passer til dine behov.

Vælg den test, der bedst afspejler dit konditionsniveau og de mål, du har for din træning. Hvis du er i rigtig god form, så skal du nok kigge efter andre tests.

Her kan du finde inspiration i vores [oversigt med tests af konditallet](/kondition/tests/), eller måske vil du sammenligne dit [kondital med en tabel for mænd og kvinder](/kondital/)?

<details markdown="1" class="references">
  <summary><h2 class="references">Referencer</h2></summary>

- Bennett, H., Parfitt, G., Davison, K., & Eston, R. (2016). Validity of Submaximal Step Tests to Estimate Maximal Oxygen Uptake in Healthy Adults. Sports Medicine (Auckland, N.Z.), 46(5), 737–750. <https://doi.org/10.1007/s40279-015-0445-1>
</details>
