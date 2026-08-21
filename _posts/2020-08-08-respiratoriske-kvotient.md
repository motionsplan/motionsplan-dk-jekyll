---
title: 'RQ og RER: Hvad er den respiratoriske kvotient?'
seo_title: 'RQ og RER: Hvad er forskellen? (Formel, tabel & beregner)'
description: 'Lær forskellen på RQ (metabolsk kvotient) og RER (respiratorisk kvotient). Se formlen, forbrændingstabellen for fedt vs. kulhydrat, og prøv beregneren.'
permalink: /respiratoriske-metaboliske-udvekslingskvotient/
redirect_from:
  - /rer/
last_modified_at: '2026-08-03T20:30:00Z'
language: da
header:
  teaser: /assets/images/unsplash/photo-1555708982-8645ec9ce3cc.jpg
  credit: https://images.unsplash.com/photo-1555708982-8645ec9ce3cc
  caption: Respiratoriske (RER) og metaboliske udvekslingskvotient (RQ)
categories:
  - Fysiologi
tags:
  - begreb
  - forbrænding
faq:
  - question: Hvad er den respiratoriske kvotient?
    answer: Den respiratoriske kvotient (RER/R) angiver forholdet mellem udskilt kuldioxid (VCO₂) og optaget ilt (VO₂) målt i udåndingsluften.
  - question: Hvad er forskellen på RQ og RER?
    answer: Begge udtrykker forholdet VCO₂ / VO₂. Forskellen er, at RQ (metabolsk kvotient) måles direkte på celleniveau, mens RER (respiratorisk udvekslingskvotient) måles i udåndingsluften ved munden.
# INTERAKTIVE SOFTWARE-VÆRKTØJER
tools:
  - id: "tool-rer-energiforbrug-beregner"
    title: "RER & Energiforbrug Beregner"
    description: "Beregn dit energiforbrug (kcal/min) og fordøjelsesforbrænding af fedt og kulhydrat ud fra VO2 og VCO2 eller RER-værdi."
    category: ["Fysiologi"]
    type: ["Beregner"]
    measures: ["RER", "RQ", "Energiforbrug", "Fedtforbrænding", "Kulhydratforbrænding"]  # 🎯 Output-parametre fra beregneren
    anchor: "#beregn-dit-energiforbrug-beregner"
    category_schema: "HealthAndFitnessApplication"
---

Når du arbejder med fysiologi, idræt eller tests med iltmaske på løbebånd, støder du hurtigt på begreberne **RQ** og **RER**. 

Begge tal fortæller, om kroppen primært forbrænder **fedt** eller **kulhydrat** – men der er én afgørende forskel på, hvor målingen foretages.

<div class="notice--success" markdown="1">

**⏱️ Kort fortalt: Forskellen på RQ og RER**

* **RQ (Metabolsk Udvekslingskvotient):** Måles direkte i **cellerne/vævet**. Angiver det reelle næringsstofforbrug ($RQ = \frac{\text{CO}_2 \text{ dannet i celler}}{\text{O}_2 \text{ forbrugt i celler}}$). Ligger altid mellem **0,70 og 1,00**.
* **RER / R (Respiratorisk Udvekslingskvotient):** Måles i **udåndingsluften ved munden** ($RER = \frac{\text{CO}_2 \text{ udskilt}}{\text{O}_2 \text{ optaget}}$). 
* **Steady-State:** Ved hvile og roligt arbejde er **RER = RQ**. Ved hårdt arbejde og hyperventilation stiger RER over **1,00**, fordi kroppen udskiller ekstra $\text{CO}_2$ fra mælkesyre.

</div>

RER-værdien måles via gasanalyse i en [direkte iltoptagelsestest](/iltoptagelse-laboratorietest/) for at vurdere fordelingen af kulhydrat- og fedtforbrænding.

---

## Hvad er den respiratoriske udvekslingskvotient (RER)?

**Den respiratoriske udvekslingskvotient (RER eller R) er mængden af kuldioxid ($\text{CO}_2$), der udskilles gennem lungerne, divideret med mængden af ilt ($\text{O}_2$), der optages i samme tidsrum.**

{% include video provider="youtube" id="_NevUAOpQAw" %}

RER giver et direkte indblik i kroppens øjeblikkelige energiomsætning. Værdien afhænger af, hvilke næringsstoffer kroppen forbrænder (primært fedt og kulhydrat, men i mindre grad også protein og alkohol).

---

## Hvad er den metaboliske udvekslingskvotient (RQ)?

**Den metaboliske udvekslingskvotient (RQ) er mængden af kuldioxid ($\text{CO}_2$), der produceres i cellerne, divideret med mængden af ilt ($\text{O}_2$), der forbruges i cellernes forbrænding.**

RQ varierer mellem 0,70 og 1,00:
* **RQ = 0,70:** 100% fedtforbrænding.
* **RQ = 1,00:** 100% kulhydratforbrænding.

I *steady state* (roligt arbejde med konstant iltoptagelse) er RER lig med RQ. Men hvis du begynder at hyperventilere eller akkumulere mælkesyre, udskiller lungerne mere $\text{CO}_2$, end cellerne producerer. Derved stiger RER over RQ.

{% include video provider="youtube" id="oQvHwWbvLkY" %}

---

## Sammenhæng mellem RQ/RER og forbrænding af fedt vs. kulhydrat

Når man laver laboratorietests på løbebånd med iltmaske, måler man RER i udåndingsluften for at estimere kroppens næringsstofvalg.

I hvile på en normal kost er RER typisk omkring **0,80 – 0,85**. Det svarer til en blandingsforbrænding med overvægt af fedt. 

{% include figure image_path="/assets/images/blog/rq-og-intensitet.png" caption="RQ i relation til VO₂ i en arbejdsperiode. Frit efter: Schibye (2017)" alt="Metaboliske udvekslingskvotient (RQ)" %}

### Tabel: Betydning af RQ / RER-værdier

| RQ / RER | % Energi fra Fedt | % Energi fra Kulhydrat |
| :---: | :---: | :---: |
| **0,70** | 100 % | 0 % |
| **0,75** | 84 % | 16 % |
| **0,80** | 67 % | 33 % |
| **0,85** | 49 % | 51 % |
| **0,90** | 33 % | 67 % |
| **0,95** | 16 % | 84 % |
| **1,00** | 0 % | 100 % |

Jo højere intensitet du træner med, desto mere overgår forbrændingen til kulhydrat, og RER stiger mod 1,0.

### Hvorfor kan RER overstige 1,0?
Ved meget høj intensitet dannes energi anaerobt, hvilket fører til [ophobning af mælkesyre](/maelkesyre-traening/). For at neutralisere faldet i blodets pH-værdi, omdannes bikarbonat til $\text{CO}_2$, som udluftes via kraftig vejrtrækning (hyperventilation). 

Derved stiger udskillelsen af $\text{CO}_2$ i forhold til $\text{O}_2$, og **RER kan nå værdier på 1,10 – 1,20+**. Dette bruges ofte som et slutpunktskriterium under en maximal iltoptagelsestest ($\text{VO}_2\text{-max}$ test).

---

## Kemisk forklaring på RQ-værdierne

Forklaringen på, hvorfor tallene ligger på 0,70 og 1,00, findes i den stokiometriske kemi:

### Forbrænding af Kulhydrat (Glukose):
$$6\,\text{O}_2 + \text{C}_6\text{H}_{12}\text{O}_6 \rightarrow 6\,\text{CO}_2 + 6\,\text{H}_2\text{O} + 38\,\text{ATP}$$

$$\text{RER} = \frac{\text{VCO}_2}{\text{VO}_2} = \frac{6\,\text{CO}_2}{6\,\text{O}_2} = \mathbf{1{,}0}$$

### Forbrænding af Fedt (Palmitinsyre):
$$23\,\text{O}_2 + \text{C}_{16}\text{H}_{32}\text{O}_2 \rightarrow 16\,\text{CO}_2 + 16\,\text{H}_2\text{O} + 129\,\text{ATP}$$

$$\text{RER} = \frac{\text{VCO}_2}{\text{VO}_2} = \frac{16\,\text{CO}_2}{23\,\text{O}_2} = \mathbf{0{,}70}$$

Da fedtmolekyler indeholder meget lidt ilt i forhold til brint og kulstof, kræver forbrænding af fedt betydeligt mere ilt i forhold til den dannede $\text{CO}_2$.

---

## Formel: Beregn energiforbrug ud fra RER

Når du kender R-værdien og iltoptagelsen ($\text{VO}_2$), kan du beregne det præcise energiforbrug pr. liter optaget ilt:

$$\text{Energiforbrug (kcal/L O}_2) = 1{,}24 \times R + 3{,}81$$

| R-værdi | Kcal / Liter $\text{O}_2$ |
| :---: | :---: |
| 0,71 | 4,69 kcal |
| 0,75 | 4,74 kcal |
| 0,80 | 4,80 kcal |
| 0,85 | 4,86 kcal |
| 0,90 | 4,92 kcal |
| 0,95 | 4,99 kcal |
| 1,00 | 5,05 kcal |

*Eksempel:* Hvis du optager $2{,}0 \text{ L O}_2/\text{min}$ ved en R-værdi på $0{,}85$, forbrænder du $2{,}0 \times 4{,}86 = 9{,}72 \text{ kcal/min}$.

---

## Beregn dit energiforbrug (Beregner)

{% include calc/vo2-rer-calculator.html rer_mode="vco2" title="🔬 Energiforbrug (VCO₂ / VO₂)" %}

---

## Konklusion

RER og RQ er uundværlige redskaber i træningsfysiologien. Så længe du arbejder submaksimalt, giver RER et præcist billede af næringsstofvalget. 

Når du nærmer dig din maksimale ydeevne, reflekterer stigningen i RER over 1,0 kroppens mælkesyre buffering og udluftning af ekstra $\text{CO}_2$.

Læs mere om, hvordan vi anvender dette i [laboratorietest af iltoptagelse](/iltoptagelse-laboratorietest/).

---

## Ofte stillede spørgsmål

{% include motionsplan/faq.html %}

<details markdown="1" class="references">
  <summary><h2 id="references">Referencer</h2></summary>

{% include motionsplan/affiliate-box.html type="product" item=site.data.affiliates.books.menneskets_fysiologi_bente_schibye view="card" %}

</details>