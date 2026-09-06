---
title: "Pulsreserve og Karvonen-formlen: Beregn din træningsintensitet"
seo_title: "Pulsreserve (Karvonen): Beregn intensitet og arbejdspuls"
excerpt: "Pulsreserve (HRR) giver en præcis måling af din træningsintensitet ved at inddrage hvilepulsen. Beregn din relative intensitet og målpuls med Karvonen-formlen."
description: "Lær at bruge pulsreserve og Karvonen-formlen til præcis pulstræning. Brug vores beregnere til at finde din arbejdspuls eller relative arbejdsintensitet."
permalink: /pulsreserve/
language: da
header:
  overlay_image: https://plus.unsplash.com/premium_photo-1713795721832-0f33126b4abd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&h=630&w=1200&q=60
  teaser: https://plus.unsplash.com/premium_photo-1713795721832-0f33126b4abd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&h=300&w=400&q=10
  caption: "Pulsreserve og Karvonen-formlen"
  actions:
    - label: "<i class='fas fa-calculator'></i> Hop til beregnerne →"
      url: "#calculator"
categories:
  - Kondition
  - Pulstræning
tags:
  - beregner
  - kondition
  - træning
  - intensitet
  - puls
  - karvonen
  - guide
meta:
  name: Intensitet og arbejdspuls fra pulsreserven
  measures: intensitet og arbejdspuls
  equipment: ingen
  type: pulstræning

# INTERAKTIVE SOFTWARE-VÆRKTØJER
tools:
  - id: "tool-pulsreserve-intensitet-beregner"
    title: "Træningsintensitet Beregner (Pulsreserve)"
    description: "Beregn din relative arbejdsintensitet (%) ud fra din arbejdspuls, hvilepuls og maxpuls med Karvonen-formlen."
    category: ["Kondition"]
    type: ["Beregner"]
    anchor: "#beregn-din-intensitet-ud-fra-arbejdspuls"
    measures: ["Træningsintensitet", "Arbejdsintensitet"]
    category_schema: "HealthAndFitnessApplication"

  - id: "tool-pulsreserve-arbejdspuls-beregner"
    title: "Arbejdspuls Beregner (Pulsreserve)"
    description: "Beregn hvilken arbejdspuls (bpm) du skal træne med for at ramme en specifik intensitetsprocent."
    category: ["Kondition"]
    type: ["Beregner"]
    measures: ["Arbejdspuls", "Målpuls"]
    anchor: "#beregn-din-arbejdspuls-ud-fra-intensitet"
    category_schema: "HealthAndFitnessApplication"
last_modified_at: 2026-09-06T20:30:00Z
toc: true
breadcrumbs: true
faq:
  - question: "Er pulsreserve og Karvonen-formlen det samme?"
    answer: "Pulsreserven (HRR) er selve det matematiske spænd mellem din maxpuls og din hvilepuls (f.eks. 140 slag). Karvonen-formlen er den metode og ligning, der *bruger* pulsreserven til at udregne din præcise træningsintensitet. I daglig tale bruges begreberne dog ofte om det samme."
  
  - question: "Hvad er en 'god' pulsreserve?"
    answer: "Der findes ikke ét universelt tal for en god pulsreserve, da den falder naturligt med alderen (fordi maxpulsen falder). Generelt gælder det, at jo større din pulsreserve er, desto bredere et arbejdsområde har dit hjerte. En veltrænet person vil ofte have en større pulsreserve, primært fordi konditionstræning sænker hvilepulsen markant."
  
  - question: "Hvorfor er % af pulsreserve mere præcis end % af maxpuls?"
    answer: "Når du kun regner i procent af maxpuls, antager formlen, at din hvilepuls er 0. Det giver skæve og ofte for lave pulsmål ved lav til moderat intensitet. Pulsreserven tager højde for dit aktuelle startpunkt (hvilepulsen) og giver et pulsmål, der langt bedre afspejler kroppens reelle iltoptagelse."
  
  - question: "Hvor tit skal jeg genberegne min pulsreserve?"
    answer: "Du bør genberegne din pulsreserve (og dermed dine pulszoner), hvis din hvilepuls ændrer sig. Når du kommer i bedre form, falder din hvilepuls typisk, hvilket gør din pulsreserve større. Det anbefales at måle hvilepulsen jævnligt (fx en gang om måneden) og justere dine tal derefter."
---

Pulsreserven ($HRR$ – *Heart Rate Reserve*) er forskellen mellem din maksimale puls og din hvilepuls. Metoden kaldes også **Karvonen-formlen** og er den mest fysiologisk præcise måde at beregne relativ træningsintensitet ud fra puls.

[<i class='fas fa-calculator'></i> Hop til beregnerne](#calculator){: .btn .btn--success .btn--jump }

<div class="notice--info" markdown="1">

### 💡 Leder du efter dine 5 personlige pulszoner?
Hvis du vil have opdelt hele din træning i konkrete pulszoner (Zone 1 til 5) baseret på Karvonen-formlen, skal du bruge vores **[Pulszoner Beregner](/pulszoner-beregner/)**. Denne side fokuserer på matematikken bag pulsreserven og beregning af specifikke enkeltværdier.

</div>

---

## Hvad er pulsreserven ($HRR$)?

Pulsreserven udtrykker det rå spænd, som dit hjerte har at arbejde med fra absolut hvile til maksimal ydelse:

$$HRR = HR_{\max} - HR_{\text{hvile}}$$

* **$HR_{\text{hvile}}$ (Hvilepuls):** Repræsenterer dit kredsløb ved 0% eksternt belastningsarbejde.
* **$HR_{\max}$ (Maxpuls):** Repræsenterer dit kredsløbs absolutte kapacitetsloft.

### Hvorfor % HRR er bedre end % $HR_{\max}$

Mange træningsure og standardtabeller beregner blot intensitet som en simpel procent af maxpulsen ($\% HR_{\max}$). Det skaber store regnefejl, fordi metoden antager, at din puls starter ved 0 slag i minuttet.

* **Traditionel metode (% maxpuls):** Antager fejlagtigt, at dit hjerte starter fra nul. Arbejdsområdet beregnes groft fra 0 til fx 200 bpm.
* **Karvonen-metoden (Pulsreserve):** Tager højde for din reelle fysiske form. Arbejdsområdet regnes fra din hvilepuls (fx 60 bpm) til din maxpuls (fx 200 bpm). Du regner altså kun på det *aktuelle* arbejdsspænd, som i dette eksempel er 140 bpm.

Ved at trække hvilepulsen fra korrigeres dine arbejdszoner, så en veltrænet atlet med lav hvilepuls får præcise pulsmål, der matcher kroppens reelle iltoptagelse ($VO_2\text{reserve}$).

---

## Formlerne bag Karvonen-metoden

### 1. Formel til relativ arbejdsintensitet (%)
Hvis du træner med en bestemt arbejdspuls og vil vide, hvor hårdt du belaster kredsløbet i procent:

$$\text{Intensitet (\%)} = \frac{HR_{\text{arbejde}} - HR_{\text{hvile}}}{HR_{\max} - HR_{\text{hvile}}} \times 100$$

### 2. Formel til målpuls ($HR_{\text{mål}}$)
Hvis du kender din ønskede træningsintensitet (fx 75%) og vil finde den tilsvarende arbejdspuls i slag pr. minut (bpm):

$$HR_{\text{mål}} = HR_{\text{hvile}} + \left( (HR_{\max} - HR_{\text{hvile}}) \times \frac{\text{Intensitet \%}}{100} \right)$$

---

## Beregnere
{: #calculator }

Brug beregnerne herunder til enten at finde din relative intensitet ud fra en målt puls eller udregne din præcise målpuls til næste træningspas.

### Beregn din intensitet ud fra arbejdspuls
Indtast din maxpuls, hvilepuls og din nuværende arbejdspuls for at se din reelle belastningsprocent:

{% include calculator/calculate-hr-intensity-pulsreserve.html %}

---

### Beregn din arbejdspuls ud fra intensitet
Indtast den ønskede intensitetsprocent (fx 80% for tærskeltræning) for at få den nøjagtige målpuls i bpm:

{% include calculator/calculate-hr-work-pulsreserve.html %}

---

## Fysiologisk baggrund: Hvorfor bruger forskere pulsreserven?

> "Procent af pulsreserven giver den bedste beskrivelse af intensiteten og er i bedre overensstemmelse med den intensitet, der beregnes, når man laver direkte måling af iltoptagelsen."
>
> — <cite>[Morten Zacho](https://web.archive.org/web/20110606202421/http://www.motion-online.dk/konditionstraening/vaerktoejer/beregn_din_traeningsintensitet/){:rel="nofollow"}</cite>

I idrætsfysiologien er guldstandarden for intensitetsmåling den procentvise udnyttelse af den maksimale iltoptagelse ($\% VO_2\max$). Da iltoptagelsen i hvile ikke er nul (man forbruger ca. $3.5 \text{ ml O}_2/\text{kg/min}$ ved hvile), korrelerer $\% HRR$ næsten $1:1$ med $\% VO_2\text{reserve}$. 

Træner du ved $70\% \text{ } HRR$, arbejder din krop altså meget tæt på $70\% \text{ } VO_2\text{reserve}$.

---

## Næste skridt i din pulstræning

* test din maxpuls præcist med vores **[guide til maxpuls-test](/test-max-puls/)**.
* Lær at måle din hvilepuls korrekt om morgenen i vores **[guide til hvilepuls](/hvilepuls/)**.
* Få hele dit træningsspektrum opdelt i 5 zoner med vores **[Pulszoner Beregner](/pulszoner-beregner/)**.

## Ofte stillede spørgsmål om pulsreserven

{% include motionsplan/faq.html %}

<details markdown="1" class="references">
  <summary><h2 id="references">Referencer</h2></summary>

- Karvonen, M. J., Kentala, E., & Mustala, O. (1957). The effects of training on heart rate; a longitudinal study. *Annales Medicinae Experimentalis et Biologiae Fenniae*, 35(3), 307–315. (Det oprindelige studie, der introducerede Karvonen-formlen).
- Swain, D. P., & Leutholtz, B. C. (1997). Heart rate reserve is equivalent to %VO2 reserve, not to %VO2max. *Medicine and Science in Sports and Exercise*, 29(3), 410–414. <https://doi.org/10.1097/00005768-199703000-00018> (Studiet der beviser, at pulsreserven er 1:1 relateret til kroppens reelle iltoptagelsesreserve).
- Garber, C. E., et al. (2011). Quantity and Quality of Exercise for Developing and Maintaining Cardiorespiratory, Musculoskeletal, and Neuromotor Fitness in Apparently Healthy Adults: Guidance for Prescribing Exercise. *Medicine & Science in Sports & Exercise*, 43(7), 1334-1359. (ACSM's retningslinjer, som officielt anbefaler HRR frem for maxpuls til intensitetsstyring).
- Zacho, M. "Beregn din træningsintensitet". *Motion-online.dk*. Lokaliseret via [Web Archive](https://web.archive.org/web/20110606202421/http://www.motion-online.dk/konditionstraening/vaerktoejer/beregn_din_traeningsintensitet/){:rel="nofollow"}.
</details>