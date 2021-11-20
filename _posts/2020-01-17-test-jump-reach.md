---
title: &title "Jump and Reach: Hvor højt springer du?"
permalink: /jump-reach/
language: da
header:
  overlay_image: https://fitforce.typepad.com/.a/6a0128777776d5970c017ee64035b2970d-pi
  teaser: https://fitforce.typepad.com/.a/6a0128777776d5970c017ee64035b2970d-pi
  caption: *title
category:
  - Eksplosivitet
  - Springtræning
tags:
  - test
  - springtest
  - spring
last_modified_at: 2019-11-19T23:14:14Z
toc: true
---

Jump & Reach test er en god springtest, som både måler springhøjde og rækkehøjde. Det er en meget funktionel test, som også fortæller noget om din evne til at koordinere, eksplosivitet og relativ styrke.

Jump & Reach testen er en relativt enkel test at sætte op, men koordinationen med at skulle række op med en arm har naturligvis betydning for resultatet.

Du kan læse meget mere om Jump and Reach-testen hos [Science for Sport](https://www.scienceforsport.com/vertec-jump-test/).

{% include video provider="youtube" id="85EtdsmFCoY" %}

## Sådan udfører du Jump & Reach-testen

Der er forskellige måder at udføre Jump & Reach testen. Du kan bruge den både med tilløb eller fra stående afsæt.

Vi foretrækker følgende fremgangsmåde til at finde springhøjden uanset om du har tilløb eller ej.

1. Mål forsøgspersonens rækkehøjde, hvor man rækker så højt som man overhovedet kan. Rækkehøjden måles stående på hele fodfladen. Rækkehøjden noteres.
2. Lad forsøgspersonen springe så højt som muligt. Denne højde måles.
3. Nu trækkes rækkehøjden fra springhøjden, og derved har vi et mål for vores "Jump and Reach"-højde.

Du kan se instruktioner til Jump & Reach-testen i nedenstående video.

{% include video provider="youtube" id="J8qxpUJdxjk" %}

## Udregn hoppehøjde

{% include calculate-jump-reach.html %}

## Udregn power på baggrund af Jump & Reach

{% include calculate-vertical-jump-power.html %}

## Kan power udregnes?

I tests med vertikale hop, så bliver distancen ofte kun rapporteret. Dette fortæller imidlertid ikke den fulde historie. En tungere person der hopper den samme højde som en lettere person, skal udvikle meget mere kraft for at bevæge den større kropsvægt. Derfor kan det sommetider være interessant at få et mål for _power_ eller arbejde.

Det mekaniske arbejde for at hoppe kan bestemmes med med hoppehøjden.

    Arbejde = Force x Distance

Hvor

    Force = Mass x Acceleration

Power kan imidlertid ikke udregnes:

    Power = Work / time

Vi kender nemlig ikke tiden, hvor kraften reagerede på kropsvægten.

Hvis vi har en kraftplatform, så kan vi måle kraften direkte. Vi har imidlertid ikke altid en kraftplatform til rådighed. Der er i stedet lavet formler til at estimere _force_ fra målinger af vertikale hop. Disse formler er mere eller mindre præcise. Du vil også se, at du får relativt forskellige resultater alt efter, hvilken formel du bruger til at estimere kraften.

## Formler brugt til at udregne power fra hoppehøjde?

Du kan finde formlerne til at udregne power fra hoppehøjder hos [www.topendsports.com](https://www.topendsports.com/testing/vertical-jump-power.htm) og i [Sayers et al (1999)](https://journals.lww.com/acsm-msse/Fulltext/1999/04000/Cross_validation_of_three_jump_power_equations.13.aspx).

Formlerne er så vidt jeg kan se primært skabt på baggrund af hhv. [squat jumps og countermovement jumps]({% link _posts/2020-01-17-test-jump-cmj.md %}), men de bruges også jævnligt i forbindelse med Jump and Reach-testen.

Den mest brugte formel ser ud til at være Harman (1991), men den nyere formel fra [Sayers et al (1999)](https://journals.lww.com/acsm-msse/Fulltext/1999/04000/Cross_validation_of_three_jump_power_equations.13.aspx), hvor de sammenlignede Lewis (1974), Harman (1991) og lavede deres egne formler fandt de, at **[Sayers et al (1999)](https://journals.lww.com/acsm-msse/Fulltext/1999/04000/Cross_validation_of_three_jump_power_equations.13.aspx) egne formler var de mest præcise til at estimere _peak power_**.

## Hvordan kan jeg spring højere med tilløb?

Hvis du sørger for en god teknik, så kan du springe højere med tilløb. Se fx de gode råd i denne Youtube-video.

{% include video provider="youtube" id="51yEI3snWmI" %}

Det er også godt at tænke på, hvilken strategi du bruger i luften for at manipulere dit tyngdepunkt. Hvis du sørger for at have så meget af kroppen nede, så kan du springe højere.

{% include video provider="youtube" id="KNtoP1P2dUA" %}

<details markdown="1">
  <summary>Se Lewis (1974) formler</summary>

{% include math formula="Average power (kg*m*^-1 = \sqrt{4.9} * body mass (kg) * \sqrt{jump-and-reach score (m)}" %}

For at få værdien i watt, så skal Power ganges med 9,81, som er tyngdekraften.

[Sayers et al (1999)](https://journals.lww.com/acsm-msse/Fulltext/1999/04000/Cross_validation_of_three_jump_power_equations.13.aspx) fandet at Peak Power blev underestimeret med 6,7-9,9% alt efter om de brugte data fra et CMJ eller et SJ-jump.
</details>

<details markdown="1">
  <summary>Se Harman (1991) formler</summary>

Peak Power (W) = 61.9 * jump height (cm) + 36 * body mass (kg) - 1822

I den oprindelige reference står der **+ 1822**, men i [Sayers et al (1999)](https://journals.lww.com/acsm-msse/Fulltext/1999/04000/Cross_validation_of_three_jump_power_equations.13.aspx), hvor Harman er co-author, står formlen opgivet til **- 1822**, hvilket får værdierne til at passe meget bedre med de andre formler.

[Sayers et al (1999)](https://journals.lww.com/acsm-msse/Fulltext/1999/04000/Cross_validation_of_three_jump_power_equations.13.aspx) fandet at Peak Power blev underestimeret med 6,7-9,9% alt efter om de brugte data fra et CMJ eller et SJ-jump.
</details>

<details markdown="1">
  <summary>Se Johnson & Bahmamonde formler</summary>

Peak Power = 78.6 * jump_height + 60.3 * body_mass - 15.3 * height - 1308

Johnson og Bahamonde inkluderer deltagernes højde i formularerne.
</details>

<details markdown="1">
  <summary>Se Sayers et al (1999) formler</summary>

[Sayers et al (1999)](https://journals.lww.com/acsm-msse/Fulltext/1999/04000/Cross_validation_of_three_jump_power_equations.13.aspx) gennemgik formlerne fra Lewis (1974) og Harman (1991).

I studiet fandt de ud af, at man med fordel kan bruge to forskellige formler alt efter om man laver et Squat Jump eller et Counter Movement Jump.

Ved brug af data fra SJ.

Peak Power = 60.7 * jump_height + 45.3 * body_mass - 2055;

Ved brug fra CMJ.

Peak Power = 51.9 * jump_height + 48.9 * body_mass - 2007;
</details>

## Hvor bruges Jump & Reach?

Jump & Reach bruges bl.a. i NFL Combine. Denne version foregår uden tilløb, men med fuldt armtræk.

{% include video provider="youtube" id="mKZCqWMQmVI" %}

Topendsports har samlet en række [hoppehøjder for forskellige personer](https://www.topendsports.com/testing/results/vertical-jump.htm), og de foreslår også [normer for hoppehøjden i Jump & Reach uden tilløb](https://www.topendsports.com/testing/norms/vertical-jump.htm).

Zach LaVine springer her 116 cm i en etbenet jump & reach-test med tilløb.

<iframe src="https://vine.co/v/MDmK2MaeV3P/embed/simple" width="600" height="600" frameborder="0"></iframe><script src="https://platform.vine.co/static/scripts/embed.js"></script>

## Hjælp med at forbedre artiklen om Jump & Reach

Hvis du kender noget til Jump & Reach-testen og gerne vil hjælpe med at lave en god indføring i hoppetesten, så kontakt mig endelig.

Artiklen er under opbygning, så lige nu er det mest en inspiration til en masse forskellige begreber, der har betydning for eksplosivitet, spring og at hoppe højere.

Hvis du gerne vil hjælpe med at forbedre artiklen, så skriv endelig til lars@vih.dk.

{% comment %}

Foreløbig kan du læse mere om [spring, at hoppe højere og eksplosivitet her]({% link _posts/2020-01-16-jumping.md %}).

{% endcomment %}

## Referencer

<details markdown="1">
  <summary>Se referencer til Jump and Reach-testen</summary>

- [Vertec Jump Test](https://www.scienceforsport.com/vertec-jump-test/)
- Harman, Everett, Michael Rosenstein, Peter Frykman, Richard Rosenstein, og William Kraemer. 1991. “Estimation of Human Power Output from Vertical Jump”. Journal of Strength and Conditioning Research 5 (3): 116–20.
- Johnson, Doug, og Rafael Bahamonde. 1996. “Power Output Estimate in University Athletes”. Journal of Strength and Conditioning Research 10 (3): 161–66.
- Sayers, S. P., D. V. Harackiewicz, E. A. Harman, P. N. Frykman, og M. T. Rosenstein. 1999. “Cross-Validation of Three Jump Power Equations”. Medicine and Science in Sports and Exercise 31 (4): 572–77. https://doi.org/10.1097/00005768-199904000-00013.
</details>
