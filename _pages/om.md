---
layout: single
title: "Om Motionsplan"
seo_title: "Om Motionsplan - Din kilde til evidensbaseret træningsviden"
permalink: /om/
excerpt: "Motionsplan er skrevet for at formidle træningsøvelser, træningsprogrammer og viden om træning. Her får du alle detaljerne."
description: "Lær mere om Motionsplan.dk, et gratis medie drevet af eksperter, der tilbyder evidensbaseret viden om træning, sundhed og fitness."
author_profile: true
sitemap: true
breadcrumbs: true
toc: true
feature_row_editorial_process:
  - title: 👩‍⚕️
    excerpt: Skrevet af eksperter og praktikere
  - title: ✍️
    excerpt: Fakta-tjekket kritisk med videnskaben
  - title: 📝
    excerpt: Opdateret jævnligt med ny viden
---

Velkommen til Motionsplan.dk – din kilde til evidensbaseret viden om træning, sundhed og fitness.
{: .intro }

Vores mission er at give dig den bedst mulige viden, så du kan træne effektivt, holde motivationen oppe og få de bedste resultater. Vi kombinerer den nyeste forskning med mange års praktisk erfaring for at give dig indhold, du kan stole på.

Vi har en mission --- at hjælpe dig med at få den bedst mulige viden, så du kan træne effektivt, holde motivationen og få resultater.
{: .pull-quote }

Hvis du – ligesom os – er nysgerrig på, hvordan kroppen reagerer på træning, og hvordan du kan optimere dine resultater, så er du kommet til det rette sted.

{% include gallery images=site.data.mentioned layout="fifth" headline="Motionsplan er omtalt i" %}

## Hvem står bag Motionsplan.dk?

Motionsplan.dk ejes og drives af **Lars Olesen**, cand.scient. i Idræt og Sundhed fra Syddansk Universitet. Lars har undervist siden 1999 i bl.a. test & træning, fitnessinstruktør, løbetræning og idræt på [Vejle Idrætshøjskole](https://www.vih.dk/).

{% assign featured_authors = site.data.authors %}
{% for authors in featured_authors %}
  {% assign author=authors[1] %}
  {% if author.name == "Lars Olesen" %}
    {% include motionsplan/author.html author=author %}
  {% endif %}
{% endfor %}

Derudover bidrager en række dygtige freelance-journalister til det redaktionelle indhold, som du kan læse nærmere om længere nede på denne side.

## Et gratis medie til dig

Motionsplan.dk er et gratis medie skabt for at gøre kvalificeret viden om træning tilgængelig for alle. Der ligger mange timers arbejde bag artiklerne og de værktøjer, vi udvikler – alt sammen for at give dig den bedst mulige vejledning i din træning.

[Få reklamefrit Motionsplan for 5$](https://www.buymeacoffee.com/l/Gi0SBcuPF){: .btn .btn--large .btn--warning rel="nofollow noopener" }

## Vores principper

- **Evidensbaseret indhold.** Vores artikler er baseret på videnskab. Hvis forskningen ændrer sig, eller vi bliver klogere, opdaterer vi vores indhold.
- **Klart og forståeligt sprog.** Vi gør kompleks viden let at forstå – uden at forsimple.
- **Nuanceret formidling.** Vi går i dybden og nuancerer ofte mediernes forsimplede fremstillinger af træning og sundhed.
- **Løbende opdatering.** Artikler og øvelser gennemgås og revideres regelmæssigt for at sikre, at de er baseret på den nyeste viden. Har du input eller konstruktive kommentarer, tager vi dem gerne med i overvejelserne.

Har du spørgsmål? Du er altid velkommen til at kontakte os på {{ site.email }}.

## Vores redaktionelle proces

Hos Motionsplan.dk er vores mission at levere evidensbaseret og letforståelig information om træning og sundhed. Vores team består af fagfolk med baggrund inden for idræt og sundhed, herunder cand.scient.'er og ph.d.'er. De er med til at sikre, at alt indhold er baseret på den nyeste forskning og bedste praksis.

Alle artikler gennemgår grundig research og faktatjek, inden de publiceres. Det indebærer også en løbende opdatering af eksisterende indhold for at tage højde for udviklingen i videnskaben.

Vores mål er at præsentere information på en klar og nuanceret måde, der gør det komplekse forståeligt uden at gå på kompromis med indholdets dybde.

For at sikre gennemsigtighed og opretholde høj kvalitet er vi ikke påvirket af annoncører i vores redaktionelle dækning.

<div class="feature__wrapper-emoji">
{% include feature_row id="feature_row_editorial_process" %}
</div>

[Læs mere om vores redaktionelle process](/om/redaktionelle-proces/){: .btn .btn--info .btn--center }

## Et gratis medie med reklamer

Vi finansierer driften gennem reklamer og affiliate-links, som er tydeligt markeret, og indtægterne bruges til at støtte og videreudvikle hjemmesiden. Vi opfordrer vores læsere til at kontakte os med feedback eller spørgsmål, så vi kontinuerligt kan forbedre og tilpasse vores indhold til jeres behov.

Hvis du køber noget via et link, modtager vi en lille kommission – uden at det koster dig ekstra.

Indtjeningen bruges til at udvikle og forbedre hjemmesiden, opdatere indholdet og lancere nye tiltag. Hvis du vil støtte os direkte, kan du **[aktivere et reklamefrit Motionsplan](https://www.buymeacoffee.com/l/Gi0SBcuPF){: rel="nofollow noopener" }**.

{% include gallery images=site.data.advertisers layout="fifth" headline="Samarbejdspartnere (reklamelinks)" %}

Du kan også støtte os ved at købe os en kop kaffe, hvis du synes, at vi har fortjent det.

{% include motionsplan/buymeacoffee.html %}

## Billeder og ikoner

- Vi bruger billeder fra [Unsplash.com](https://unsplash.com/){: rel="nofollow noopener" } og skriver selv alle artiklerne.
- Ikoner brugt på sitet er lavet af [Dave Gandy](https://www.flaticon.com/authors/dave-gandy){: rel="nofollow noopener" } fra [Flaticon](https://www.flaticon.com/){: rel="nofollow noopener" }.

## Motionsplan i tal

- Artikler: {{ site.posts.size }}
- Øvelser: {{ site.exercises.size }}
{% comment %}
- Træningsprogrammer: {{ site.programs.size }}
{% endcomment%}

## Forfattere - et stærkt hold

{% assign featured_authors = site.data.authors %}
{% for authors in featured_authors %}
  {% assign author=authors[1] %}
  {% if author.featured == true %}
    {% include motionsplan/author.html author=author %}
  {% endif %}
{% endfor %}

## Del din mening på Trustpilot

Vi vil gerne høre, hvad du synes om Motionsplan.dk! Efterlad en anmeldelse på [Trustpilot](https://dk.trustpilot.com/review/motionsplan.dk){: rel="nofollow noopener" }.
