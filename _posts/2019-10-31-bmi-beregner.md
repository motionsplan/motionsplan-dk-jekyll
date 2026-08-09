---
title: 'BMI-beregner: Udregn dit BMI (Gratis og lynhurtigt)'
seo_title: 'BMI Beregner: Udregn dit BMI nemt og hurtigt'
description: Prøv vores gratis BMI beregner. Indtast din højde og vægt, og få dit resultat med det samme. Gælder for både voksne kvinder og mænd.
permalink: /bmi-beregner/
excerpt: I denne BMI-beregner kan du nemt og hurtigt udregne dit BMI. Indtast dine tal og få svaret med det samme.
language: da
header:
  teaser: /assets/images/unsplash/photo-1627820751275-e44b937c5d33.jpg
  credit: https://images.unsplash.com/photo-1627820751275-e44b937c5d33
  caption: 'BMI beregner: Udregn dit BMI'
category:
- Kropskomposition
- BMI
tags:
- beregner
- måling
- kropskomposition
- fitnesstest
- antropometri
- featured
popular: 'true'
meta:
  name: "BMI-beregner for voksne"
  measures: "BMI"
  type: "beregner"
  equipment: "vaegt-og-maalebaand"
  target: "voksne"
  intensity: "ingen"
  method: "formel"
# TESTS / PROTOKOLLER
tests:
  - id: "test-bmi-voksne"
    title: "BMI for Voksne (Måling & Vurdering)"
    description: "Vurdering af voksnes Body Mass Index (BMI) sammenholdt med WHO's standardiserede vægtklasser for mænd og kvinder."
    category: ["Kropskomposition", "Antropometri"]
    type: ["Protokol", "Måling", "Vurdering"]
    execution: ["Sofatest"]
    method: "formel"                    # 🧮 Ren matematisk formel (vægt / højde^2)
    modality: ["Antropometri"]
    measures: ["BMI", "Vægtstatus", "Kropskomposition"]
    equipment: ["Vægt", "Målebånd"]
    setting: ["Hjemmetest", "Klinisk"]
    target_group: ["Voksne", "Ældre", "Mænd", "Kvinder"]
    related_tools: ["tool-bmi-voksne-beregner"]

# INTERAKTIVE SOFTWARE-VÆRKTØJER
tools:
  - id: "tool-bmi-voksne-beregner"
    title: "BMI Beregner for Voksne"
    description: "Beregn dit Body Mass Index (BMI) lynhurtigt ud fra din højde og vægt. Gælder for både voksne mænd og kvinder."
    category: ["Kropskomposition"]
    type: ["Beregner"]
    execution: ["Sofatest"]
    anchor: "#calculator"
    category_schema: "HealthAndFitnessApplication"
last_modified_at: '2026-07-25T16:09:22Z'
faq:
- question: Gælder denne BMI beregner for både mænd og kvinder?
  answer: Ja, voksne kvinder og mænds BMI udregnes med den samme formel og vurderes efter de samme tabeller.
- question: Kan børn bruge denne beregner?
  answer: Nej, børn passer ikke ind i de normale BMI-skemaer. Du kan læse mere og finde vores [BMI beregner for børn, unge og teenagere her](/bmi-beregner-boern-unge-teenagere/).
keywords:
- bmi beregner
- bmi udregner
---

Brug vores gratis BMI beregner herunder til lynhurtigt at udregne dit Body Mass Index. Værktøjet gælder for alle voksne (både mænd og kvinder). 

Indtast blot din højde og din vægt, og få svaret med det samme!

{% include calc/bmi.html calc_id="bmi-adult" title="📊 BMI Beregner (Voksne)" %}

*(Er du under 18 år? Så skal du bruge vores [BMI beregner til børn og unge](/bmi-beregner-boern-unge-teenagere/).)*

---

## Hvad betyder dit resultat?

Er du i tvivl om, hvordan du skal tolke dit nye BMI-tal, eller vil du gerne se de detaljerede skemaer for normalvægt og overvægt? 

For at holde denne side lynhurtig og 100% fokuseret på selve *udregningen*, har vi samlet al teorien, tabellerne og videnskaben på en anden side.

👉 **[Gå til vores guide til BMI for mænd og kvinder](/bmi/)**

I den store guide kan du blandt andet læse om:

* Hvorfor de officielle BMI-tabeller måske trænger til en opdatering.
* Hvilke forskelle der reelt er på BMI for mænd og kvinder.
* Hvorfor muskelmasse kan snyde BMI-tallet.
* Den matematiske formel, der ligger bag udregningen.

---

## Sådan beregner du dit BMI selv

Hvis du vil forstå matematikken bag værktøjet, er formlen faktisk ganske simpel. For at finde dit Body Mass Index skal du blot dividere din kropsvægt (i kilo) med din højde (i meter) i anden potens:

$$ \text{BMI} = \frac{\text{Vægt (kg)}}{\text{Højde (m)}^2} $$

**Et hurtigt eksempel:** 
Hvis du vejer 65 kg og er 1,67 meter høj, ser regnestykket således ud:

$$ \text{BMI} = \frac{65}{(1{,}67)^2} = 23{,}3 $$

---

## Ofte stillede spørgsmål om BMI-beregning

{% include motionsplan/faq.html %}