---
layout: single
title: "Om Motionsplan"
seo_title: "Om Motionsplan - Evidensbaseret viden om træning og fysiologi"
permalink: /om/
excerpt: "Motionsplan er et uafhængigt videnscenter for træningsvidenskab, drevet af fageksperter med baggrund i idræt og sundhed."
description: "Lær mere om Motionsplan.dk – et uafhængigt medie ledet af Lars Olesen (Cand.Scient.), der formidler evidensbaseret viden om træning, anatomi og sundhed."
author_profile: true
breadcrumbs: true
toc: true
feature_row_editorial_process:
  - title: 👩‍⚕️
    excerpt: Kvalitetssikret af eksperter med akademisk baggrund
  - title: ✍️
    excerpt: Baseret på peer-reviewed forskning og kildekritik
  - title: 📝
    excerpt: Løbende opdateret i takt med nyeste videnskab
---

Velkommen til Motionsplan.dk – din uafhængige kilde til evidensbaseret viden om træningsfysiologi, anatomi og sundhed.
{: .intro }

Vores mission er at bygge bro mellem videnskabelig forskning og praktisk træning. Vi kvalitetssikrer alt indhold, så du får adgang til nuanceret viden, du kan stole på – fri for fitness-myter og hurtige løsninger.

Vi har en mission — at omsætte kompleks træningsvidenskab til praktiske værktøjer, der hjælper dig med at optimere din træning på et oplyst og sikkert grundlag.
{: .pull-quote }

{% include gallery images=site.data.mentioned class="no-collapse" layout="fifth" headline="Motionsplan er omtalt i" %}

## Eksperterne bag Motionsplan.dk

Motionsplan.dk ejes og drives af **Lars Olesen**, som har det overordnede faglige ansvar for alt indhold på siden.

**Lars Olesen** er cand.scient. i Idræt og Sundhed fra Syddansk Universitet (SDU) og har siden 1999 arbejdet professionelt med formidling af træningsvidenskab. Som mangeårig underviser på **Vejle Idrætshøjskole** og ansvarlig for uddannelse af fitnessinstruktører hos **Bevæg Dig For Livets Foreningsfitness**, kombinerer han den nyeste fysiologiske forskning med praktisk erfaring for at gøre videnskabelig træningsviden tilgængelig og anvendelig for alle – uanset niveau.

{% assign featured_authors = site.data.authors %}
{% for authors in featured_authors %}
  {% assign author=authors[1] %}
  {% if author.name == "Lars Olesen" %}
    {% include motionsplan/author.html author=author %}
  {% endif %}
{% endfor %}

Derudover bidrager et stærkt hold af fagfolk, herunder cand.scient.'er og ph.d.'er, til det redaktionelle indhold for at sikre den højeste faglige standard.

## Vores redaktionelle proces

Hos Motionsplan.dk er gennemsigtighed og faglig integritet kernen i vores arbejde. Vores team består udelukkende af fagfolk med en akademisk eller professionel baggrund inden for idræt og sundhed.

- **Grundig research:** Alle artikler baseres på anerkendte kilder og peer-reviewed studier.
- **Faktatjek:** Indholdet gennemgår en kritisk revision, før det publiceres.
- **Løbende revision:** Vi opdaterer jævnligt vores artikler og værktøjer for at sikre, at de afspejler den nyeste viden på området.

For at sikre fuld redaktionel uafhængighed er vores indhold aldrig påvirket af annoncører eller kommercielle interesser.

<div class="feature__wrapper-emoji">
{% include feature_row id="feature_row_editorial_process" %}
</div>

[Læs mere om vores redaktionelle proces](/om/redaktionelle-proces/){: .btn .btn--info .btn--center }

## Vores principper

- **Kvalitetssikret og evidensbaseret.** Vores artikler hviler på et fundament af videnskab. Vi reviderer indholdet, når ny forskning gør os klogere.
- **Klart og nuanceret sprog.** Vi gør det komplekse forståeligt uden at miste dybden eller forfalde til clickbait.
- **Kildekritik.** Vi deklarerer vores kilder og skelner skarpt mellem videnskabelige fakta og praktiske erfaringer.
- **Uafhængighed.** Vi prioriterer altid læserens behov for korrekt information over kommercielle hensyn.

---

## Et gratis medie finansieret af fællesskabet

Motionsplan.dk er et gratis medie skabt for at gøre kvalificeret viden tilgængelig for alle. For at finansiere driften og de mange timers research bag artiklerne, benytter vi os af reklamer og affiliate-links.

- **Affiliate-links:** Hvis du køber noget via et link markeret som reklame, modtager vi en lille kommission uden ekstra omkostninger for dig.
- **Direkte støtte:** Du kan hjælpe os med at holde sitet kørende og annoncefrit ved at støtte os direkte.

[Få reklamefrit Motionsplan for 5$](https://www.buymeacoffee.com/l/Gi0SBcuPF){: .btn .btn--large .btn--warning rel="nofollow noopener" }

{% include gallery images=site.data.advertisers class="no-collapse" layout="seventh" headline="Samarbejdspartnere (reklamelinks)" %}

{% include motionsplan/buymeacoffee.html %}

## Forfattere - et stærkt fagligt hold

{% assign featured_authors = site.data.authors %}
{% for authors in featured_authors %}
  {% assign author=authors[1] %}
  {% if author.featured == true %}
    {% include motionsplan/author.html author=author %}
  {% endif %}
{% endfor %}

## Motionsplan i tal

- Videnskabelige artikler: {{ site.posts.size }}
- Instruktionsvideoer og øvelser: {{ site.exercises.size }}

## Del din mening

Vi værdsætter feedback fra vores brugere for løbende at forbedre kvaliteten af vores formidling. Efterlad gerne en anmeldelse på [Trustpilot](https://dk.trustpilot.com/review/motionsplan.dk){: rel="nofollow noopener" }.