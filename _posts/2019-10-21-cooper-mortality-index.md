---
title: 'Cooper Clinic Mortality Risk Index: Beregn sundhedsrisiko for mænd'
seo_title: 'Cooper Mortality Risk Index: Beregn 15-års risiko (Mænd)'
description: 'Brug Cooper Clinic Mortality Risk Index til at beregne mænds 15-årige risiko for livsstilssygdomme. Lær de 8 vigtigste risikofaktorer og hvordan du sænker din risiko.'
permalink: /cooper-mortality/
redirect_from:
  - /artikel/cooper-mortality-index/
language: da
header:
  overlay_image: /assets/images/unsplash/photo-1551104083-c046edeed47e.jpg
  credit: https://images.unsplash.com/photo-1551104083-c046edeed47e
  teaser: /assets/images/unsplash/photo-1551104083-c046edeed47e.jpg
  caption: Cooper Clinic Mortality Risk Index for Mænd
categories:
  - Sundhed
tags:
  - vurderingsværktøj
  - sundhed
  - mænd
  - fysiologi
page_type: spoke
last_modified_at: '2026-09-06T07:31:00Z'
toc: true
meta:
  name: Cooper Clinic Mortality Risk Index
  equipment: ingen
  measures: risiko for at dø
  type: sundhed
tests:
  - id: "test-cooper-clinic-mortality-risk"
    title: "Cooper Clinic Mortality Risk Index (Mænd)"
    description: "Klinisk scoringssystem der estimerer mænds 15-årige risiko for dødelighed af livsstilssygdomme baseret på 8 kliniske og livsstilsmæssige parametre."
    category: ["Sundhed", "Risikovurdering"]
    type: ["Protokol", "Spørgeskema", "Vurdering"]
    execution: ["Sofatest"]
    method: "indirekte"
    modality: ["Spørgeskema", "Helbredsdata"]
    measures: ["Dødelighedsrisiko", "Sundhedsrisiko"]
    equipment: ["Ingen"]
    setting: ["Individuel", "Klinisk"]
    target_group: ["Voksne", "Mænd"]
    related_tools: ["tool-cooper-mortality-beregner"]
tools:
  - id: "tool-cooper-mortality-beregner"
    title: "Cooper Clinic Mortality Risk Beregner"
    description: "Indtast dine sundhedsdata og beregn din relative og absolutte risiko for at dø inden for de næste 15 år."
    category: ["Sundhed"]
    type: ["Beregner"]
    execution: ["Sofatest"]
    anchor: "#beregn-risikoen-for-at-doe-for-maend"
    category_schema: "HealthAndFitnessApplication"
faq:
  - question: Hvad er Cooper Clinic Mortality Risk Index?
    answer: Cooper Clinic Mortality Risk Index er et klinisk valideret scoringssystem for mænd, der beregner den relative og absolutte risiko for at dø af livsstilssygdomme inden for de næste 15 år baseret på 8 helbredsparametre.
  - question: Hvilke parametre vægter tungest i testen?
    answer: Alder vægter tungest, fulgt af diabetes og rygning (hver 4 point), svær overvægt (3 point), samt lavt kondital, høj hvilepuls, forhøjet blodtryk og tidligere rygning.
  - question: Hvorfor gælder testen udelukkende for mænd?
    answer: Det oprindelige grundlagsstudie af Janssen et al. (2005) fulgte udelukkende en kohorte på 21.766 mænd over en årrække. Algoritmens pointvægte er derfor kun klinisk valideret til mænd.
  - question: Hvad er det mest effektive håndtag til at sænke sin score?
    answer: Udover rygestop viser forskningen fra Cooper Institute, at forbedring af konditallet (fra lav fitness til moderat/høj fitness) giver den største reduktion i den samlede dødelighedsrisiko.
---

Hvor stor er din fysiologiske risiko for at udvikle alvorlige livsstilssygdomme i løbet af de næste 15 år? 

Det berømte amerikanske forskningscenter *The Cooper Institute* har på baggrund af en omfattende undersøgelse af over 21.000 mænd udviklet **Cooper Clinic Mortality Risk Index**. 

Modelberegneren vurderer din helbredsprofil ud fra 8 enkle kliniske og livsstilsmæssige parametre og sammenligner din absolutte og relative risiko for dødelighed med jævnaldrende mænd.

---

## Studiet bag risikoprofilen

Scoringssystemet blev udviklet af forskerne Ian Janssen, Peter T. Katzmarzyk, Timothy S. Church og Steven N. Blair i 2005. Studiet fulgte en kohorte på **21.766 mænd i alderen 20–69 år** over en 15-årig periode.

Ingen af deltagerne havde ved undersøgelsens start en historik med hjertesygdomme, slagtilfælde eller kræft.

Ved at analysere deltagernes fysiologiske data og koble dem med dødelighedsstatistikker efter 15 år, kortlagde forskerne de 8 vigtigste modificerbare og umodificerbare risikofaktorer.

---

## De 8 kliniske risikofaktorer (Pointfordeling)

I Cooper-modellens algoritme tildeles parametrene point alt efter deres fysiologiske tyngde. Målet er at opnå så få point som muligt.

| Risikofaktor | Betingelse / Kriterium | Point |
| :--- | :--- | :--- |
| **Alder** | Højere alder giver flest point (f.eks. 65–69 år) | 0–10 point |
| **Diabetes** | Diagnosticeret type 1 eller type 2 diabetes | 4 point |
| **Aktiv rygning** | Nuværende tobaksryger | 4 point |
| **Svær overvægt** | BMI $\ge 35 \text{ kg/m}^2$ | 3 point |
| **Lavt kondital** | Dårlig aerob fitness (nederste 20% for aldersgruppen) | 2 point |
| **Høj hvilepuls** | Hvilepuls $\ge 80 \text{ slag/min}$ | 2 point |
| **Hypertension** | Forhøjet blodtryk ($\ge 140/90 \text{ mmHg}$ eller medicineret) | 2 point |
| **Tidligere rygning** | Eks-ryger | 1 point |

---

## Beregn din risiko med Cooper-beregneren

Indtast dine sundhedsdata i beregneren nedenfor for at få estimeret din relative og absolutte 15-årige risiko.

{% include calculator/calculate-mortality.html %}

*Bemærk: Beregnerens resultat er vejledende og beregnet til forebyggende livsstilsindsatser. Det kan aldrig erstatte en klinisk helbredsundersøgelse hos din egen læge.*

---

## Fysiologisk analyse: Konditallet som beskyttende faktor

Noget af det mest markante ved forskningen fra *The Cooper Institute* er opdagelsen af **konditallets (cardiorespiratorisk fitness)** enorme betydning for overlevelse.

Mange antager, at BMI og vægt er de vigtigste markører for sundhed, men studierne bag Cooper Index viser, at et lavt kondital udgør en lige så stor uafhængig risikofaktor for tidlig død som rygning og forhøjet blodtryk.

* **"Fat but Fit"-fænomenet:** Mænd med moderat overvægt, der opretholder et godt kondital, har en markant lavere dødelighedsrisiko end slanke mænd i dårlig aerob form.
* **Den største gevinst:** Den største reduktion i relativ risiko opnås ved at flytte sig fra kategorien "Lav fitness" (de nederste 20%) til "Moderat fitness". Du behøver altså ikke træne som en eliteløber for at reducere din risiko drastisk.

---

## Hvilke håndtag kan du selv skrue på?

Du kan ikke ændre din alder, men 7 ud af de 8 parametre i Cooper-indekset er direkte modificerbare gennem livsstilsændringer:

1. **Rygning:** Rygestop fjerner øjeblikkeligt den høje risikovægt på 4 point og reducerer din risiko gradvist over tid.
2. **Kondition:** Regelmæssig kredsløbstræning (f.eks. Zone 2-løb, cykling eller gåture i hurtigt tempo) sænker din hvilepuls og øger dit kondital.
3. **Blodtryk & Blodsukker:** Styrketræning, sund kost og vægttab forbedrer insulinfølsomheden og sænker det systoliske og diastoliske blodtryk.

---

## Sammenfatning

Cooper Clinic Mortality Risk Index er et stærkt pædagogisk og fysiologisk redskab til mænd, der ønsker et datadrevet overblik over deres sundhedstilstand. 

Indexet viser med al tydelighed, at din fremtidige helbredsrisiko i høj grad formes af dine daglige vaner – særligt hvad angår rygning, kondition og blodtryk.

---

## Ofte stillede spørgsmål

{% include motionsplan/faq.html %}

<details markdown="1" class="references">
  <summary><h2 id="references">Referencer</h2></summary>

1. **Janssen, I., Katzmarzyk, P. T., Church, T. S., & Blair, S. N. (2005).** "The Cooper Clinic Mortality Risk Index: Clinical Score Sheet for Men." *American Journal of Preventive Medicine*, 29(3), 194–203. DOI: [10.1016/j.amepre.2005.05.003](https://doi.org/10.1016/j.amepre.2005.05.003).
2. **Blair, S. N., Kohl, H. W., Paffenbarger, R. S., et al. (1989).** "Physical fitness and all-cause mortality: A prospective study of healthy men and women." *JAMA*, 262(17), 2395–2401.
</details>