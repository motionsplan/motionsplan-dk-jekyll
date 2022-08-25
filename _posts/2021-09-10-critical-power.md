---
title: &title "Critical Power: Alternativ til FTP-træning"
permalink: /critical-power/
excerpt: "Critical Power er et alternativ til at teste din fysiske formåen, når du har adgang til at måle _power_. Det kan bruges som en erstatning for at måle Functional Threshold Power."
language: da
header:
  overlay_image: https://images.unsplash.com/photo-1475666675596-cca2035b3d79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&h=630&w=1200&q=10
  teaser: https://images.unsplash.com/photo-1475666675596-cca2035b3d79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&h=300&w=400&q=10
  caption: *title
category:
  - Træning
  - Kondition
tags:
  - træningszoner
last_modified_at: 2021-08-22T23:14:14Z
toc: true
---

Critical Power er et alternativ til at teste din fysiske formåen, når du har adgang til at måle _power_. Det kan bruges som en erstatning for at måle [Functional Threshold Power (FTP)]({% link _posts/2021-08-29-ftp-power.md %}).

{% include video provider="youtube" id="JLDqPDqH69I" %}

## Hvad er Critical Power?

Test af Critical Power er baseret på det princip, at _power output_ over et bestemt 'critical power' følger en veldefineret hyperbolsk kraft-tid kurve.

{% include figure image_path="https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_1024,h_528/https://cpsinmotion.com/wp-content/uploads/2013/10/Critical_Power-1024x528.png" caption="Kilde: [cpsinmotion.com](https://cpsinmotion.com/critical-power-profiling/)" %}

Kurven er defineret af to variable: Critical Power (CP) og W’ (udtales ‘W prime’).

**CP** er *power output* som du kan kører omkring 30-40 minutter.

**W’** er den mængde arbejde som du kan bruge over CP før du når hen til fuldstændig udmattelse.

## Hvordan måles Critical Power?

Der er forskellige bud på, hvordan du kan teste Critical Power.

Der er forskellige måder at udregne CP og W' på. [highnorth.co.uk](https://www.highnorth.co.uk/articles/critical-power-calculator) har lavet en god forklaring.

[www.bikeradar.com](https://www.bikeradar.com/advice/fitness-and-training/critical-power/) forelår en protokol med **to tests**. Du kan enten lave de to tests på to forskellige dage, eller du kan holde en pause på omkring 30 minutter mellem de to tests.

- 3 minutters all out
- 12 minutters all out

Når du kører testene, så skal du forsøge at holde nogenlunde det samme _power output_ gennem hele testen. Du skal altså _pace_ dig selv fra starten i et tempo, du kan holde hele testen.

Når du har lavet de to tests, så kan du sætte resultaterne ind i disse formler.

{% include math formula="CP={\frac{(12*P_{12})-(3*P_3)}{9}}" %}

{% include math formula="W'={0.24*(P_3-P_{12})}" %}

I formlerne er P<sub>3</sub> og P<sub>12</sub> den gennemsnitlige watt i hhv. 3-minutters og 12-minutters testen.

Vi har lavet denne beregner, så du ikke behøver at finde lommeregneren:

{% include calculate-critical-power.html %}

Du kan også bruge en lidt **mere præcis testprotokol med flere tests**.

> Several studies have proposed that CP and W’ can be determined from just two maximal efforts (Maturana et al., 2018; Simpson & Kordi., 2017). However, in our experience, using just two maximal efforts is highly sensitive to the specific powers and/or test durations used (making repeat tests hard to compare) and can result in fairly inaccurate estimates under certain circumstances. So, we recommend using 3-4 maximal tests to calculate CP and W’ accurately.

--- <cite>[www.highnorth.co.uk](https://www.highnorth.co.uk/articles/critical-power-calculator)</cite>

Du kan finde en rigtig god beskrivelse og et link til et regneark på [www.highnorth.co.uk](https://www.highnorth.co.uk/articles/critical-power-calculator).

Hvis du vil lære lidt mere om, hvordan man udregner critical power, så er den her video virkelig god.

{% include video provider="youtube" id="INDGXBzFZ4k" %}

Du kan også prøve den meget enkle protokol med kun **en treminutters allout**-test. Se hvor grusom den er her:

{% include video provider="youtube" id="rA5uIUTXTc0" %}

Her er en uddybende forklaring af all-out-testen.

{% include video provider="youtube" id="df5mui618rM" %}

Den bedste beskrivelse jeg har hørt af fænomenet critical power er i denne Youtube-video (hvor du også får forklaringen på, hvorfor du bør lave mindst 4, men gerne 5 tests).

{% include video provider="youtube" id="e9FSi5HWTiw" %}

## Hvad man du bruge CP og W' til?

Når du har estimimeret din *critical power* med de ret hårde tests, så kan det også være fedt at vide, hvad det kan bruges til.

Tallet kan bruges til:

- Identificere om din svaghed ligger i den høje eller lave ende af intensitetsskalaen.
- Se din fremgang i træningen hvis du laver flere tests
- Lave træningszoner
- Vide hvor hurtigt du kan køre over CP før du bliver udmattet

## Hvor meget arbejde kan du lave?

Når du skal planlægge dine intervaller eller dine afslutninger i en konkurrence, så kan det være nyttigt at regne ud enten hvor lang tid du kan køre med et bestemt watt-tal eller hvilken power du kan arbejde med fx de sidste 2 minutter af en konkurrence.

Jeg har lavet en beregner her, som kan hjælpe dig med at vide hvor lang tid du kan køre med bestemte watt, når du kender din CP og W'. Formlen ser sådan her ud:

{% include math formula="T={\frac{1000*W'}{P-CP}}" %}

{% include calculate-critical-power-time.html %}

Og her er en anden beregner, der kan estimere hvor mange watt du kan køre med, hvis du har nogle længder på dine intervaller. Sådan her ser formlen ud.

{% include math formula="P={\frac{1000*W'}{T}+CP}" %}

{% include calculate-critical-power-power-time.html %}

P = power in watts, T = time in seconds, CP = critical power in Watts, W’ = ‘W prime’ in kJ.
{: .notice .notice--info }

## Træningszoner baseret på CP

Hvis du vil basere dine [træningszoner]({% link _posts/2021-09-01-traeningszoner.md %}) på *critical power*, så kan du ifølge [www.bikeradar.com](https://www.bikeradar.com/advice/fitness-and-training/critical-power/) bruge FTP-zonerne med et let modificeret Critical Power.

> Critical power is not the same as FTP, but can be used to estimate your training zones. If using the zones above, take 94 per cent of your Critical Power to replace FTP, then apply the percentages to find your values for each zone.

--- <cite>[www.bikeradar.com](https://www.bikeradar.com/advice/fitness-and-training/critical-power/)</cite>

{% include table-ftp-critical-power.html %}

## Stryd og træningszoner

[Stryd](https://buy.stryd.com/store?referrer_id=c444f8a6-8d83-59d2-7060-6e7eddbaf413){: rel="sponsored nofollow noopener" } er en watt-måler, som du kan bruge til løb. Det er en lille *foot pod*, som kan måle hvor mange watt du løber med. Her er *critical power* en helt central måling, som træningszonerne planlægges ud fra.

Zonerne er navngivet på samme måde som [Jack Daniels løbeberegner]({% link _posts/2020-08-01-jack-daniels-loebeberegner.md %}). De udregnes automatisk på i appen, og du kan have Stryd til automatisk at opdatere zonerne ud fra dine aktuelle træninger.

{% include figure image_path="https://support.stryd.com/hc/article_attachments/360055015934/mceclip0.png" caption="Kilde: [stryd.com](https://support.stryd.com/hc/en-us/articles/360039774153-Power-Zones)." %}

## Konklusion

Du kan læse mere om critical power i dette studium af [Poole et al (2016)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5070974/).
