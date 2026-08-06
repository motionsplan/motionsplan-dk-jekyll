---
title: Beregn din CdA (aerodynamisk modstand) på cyklen
seo_title: CdA-beregner – Beregn din aerodynamiske modstand (CdA) & watt
description: Beregn din CdA (aerodynamiske modstandskoefficient) ud fra fart, watt, vægt og luftdensitet. Se hvor mange watt du sparer ved at optimere din position.
excerpt: Beregn din CdA (aerodynamiske modstandskoefficient) ud fra fart, effekt, vægt og luftmodstand. Lær at udføre aero-tests og spar watt på cyklen.
permalink: /cda-beregner/
language: da
header:
  teaser: /assets/images/unsplash/photo-1728454994678-21be5481e249.jpg
  credit: https://images.unsplash.com/photo-1728454994678-21be5481e249
  caption: Beregn din CdA (aerodynamisk modstand) på cyklen
category:
  - Cykling
tags:
  - beregner
  - træning
  - cykling
  - aerodynamik
meta:
  name: Beregn CdA (aerodynamisk modstand) på cyklen
  measures: CdA (m²)
  type: beregner
  equipment: effektmåler (power meter) anbefales, fartmåler (speedometer eller GPS)
  max: n/a
  direct: n/a
last_modified_at: '2026-08-04T19:20:00Z'
faq:
  - question: Hvad er CdA i cykling?
    answer: CdA er produktet af modstandskoefficienten (Cd) og det frontale areal (A) i kvadratmeter (m²). Tallet beskriver samlet, hvor meget luftmodstand du og din cykel skaber, når I bevæger jer gennem luften.
  - question: Hvad er en god CdA-værdi for en motionist vs. professionel?
    answer: En almindelig motionsrytter på racercykel har typisk en CdA på 0,30–0,35 m². En veltrænet enkeltstartsrytter eller triatlet ligger typisk mellem 0,20–0,24 m², mens professionelle elitecykelryttere kan nå helt ned på 0,18–0,20 m².
  - question: Hvor meget betyder CdA i forhold til vægt (watt/kg)?
    answer: På flad og let kuperet vej (over 30 km/t) udgør luftmodstanden over 80-90 % af den samlede modstand. Her betyder en lav CdA markant mere for din fart end et lavt watt/kg-forhold.
  - question: Hvilken udstyrsændring giver den største CdA-forbedring?
    answer: Rytterens kropsposition udgør ca. 70-80 % af den samlede luftmodstand. Dernæst giver tætsiddende aero-tøj/dragt, en god enkeltstartshjelm og dybe fælge/pladehjul de største besparelser i CdA.
---

Når du cykler på flad vej med mere end 30 km/t, går over **80-90 % af din trådte effekt (watt)** udelukkende til at overvinde luftmodstanden. 

Det er her, begrebet **CdA** (*Drag Area*) bliver den mest afgørende faktor for din fart. En reduktion i din CdA-værdi lader dig køre markant hurtigere med nøjagtig den samme trådte effekt.

Med denne beregner kan du estimere din CdA-værdi ud fra din målte effekt (watt), hastighed, samlede vægt og ydre miljøfaktorer som luftdensitet og rullemodstand.

---

## CdA beregner

{% include calculator/calculate-cda.html %}

---

## Fysikken bag CdA: Sådan beregnes din fart

Den samlede effekt $P_{total}$, du skal levere i pedalerne for at holde en konstant hastighed, er summen af luftmodstand, rullemodstand og fremdriftstab i drivlinjen:

$$P_{total} = P_{drag} + P_{rolling} + P_{drivetrain}$$

Hvor effekten til at overvinde luftmodstanden ($P_{drag}$) er defineret ved:

$$P_{drag} = \frac{1}{2} \cdot \rho \cdot CdA \cdot v^3$$

* **$\rho$ (Luftdensitet):** Lufts densitet i $\text{kg/m}^3$ (typisk ca. $1,225 \text{ kg/m}^3$ ved havoverfladen og 15°C).
* **CdA:** Det samlede aerodynamiske modstandsareal i $\text{m}^2$.
* **$v$:** Din hastighed i forhold til luften i $\text{m/s}$.

Bemærk, at effekten skal stige med **hastigheden i tredje potens ($v^3$)**. Det betyder, at hvis du vil fordoble din fart, skal du yde næsten **8 gange så mange watt** mod luftmodstanden – medmindre du reducerer din CdA!

---

## Hvor mange watt sparer en lavere CdA?

Tabellen herunder viser den krævede effekt (watt) udelukkende til at overvinde luftmodstanden ($P_{drag}$) ved forskellige CdA-værdier og hastigheder (beregnet ved standard luftdensitet $\rho = 1,225 \text{ kg/m}^3$):

| Ryttertype / Position | Typisk CdA (m²) | Watt v. 35 km/t | Watt v. 40 km/t | Watt v. 45 km/t |
|---|:---:|:---:|:---:|:---:|
| **Oprejst bycyklist** | 0,45 m² | 252 W | 376 W | 535 W |
| **Racercykel (Hænder i greb)** | 0,33 m² | 185 W | 276 W | 392 W |
| **Racercykel (Drop-position / Bøjede albuer)** | 0,28 m² | 157 W | 234 W | 333 W |
| **Triatlet / Enkeltstart (Standard aero)** | 0,23 m² | 129 W | 192 W | 273 W |
| **Pro Enkeltstartsspecialist** | 0,19 m² | 106 W | 159 W | 226 W |

> **Konklusion:** Hvis du kan reducere din CdA fra **0,33 til 0,23 m²** (fx ved at montere bøjler eller gå fra oprejst til aggressiv aero-position), sparer du **over 84 watt ved 40 km/t**!

---

## 5-trins protokol: Sådan tester du din CdA på vejen

Du behøver ikke en dyr vindkanal til 5.000 kr. i timen for at optimere din aerodynamik. Har du en wattmåler og en hastighedssensor, kan du lave dine egne A/B-tests på vejen:

1. **Find den rette test-strækning:** Vælg en helt flad, ensartet og vindstille strækning på 2–4 km uden sving, lyskryds eller trafik.
2. **Hold alle variabler konstante:** Kør med samme dæktryk, samme samlede vægt og hold en konstant kadence.
3. **Kør Test A (Baseline):** Kør strækningen i din normale position (fx hænderne i skiftegrebene) med en konstant, kontrolleret effekt (fx 250 W). Notér din præcise gennemsnitshastighed og watt.
4. **Kør Test B (Ny position/udstyr):** Skift kun én variabel (fx sænk styret 2 cm eller skift til aero-hjelm). Kør strækningen med nøjagtig samme effekt.
5. **Sammenlign CdA i beregneren:** Indtast dine måledata i beregneren ovenfor for hhv. Test A og Test B. Den position, der giver den laveste CdA, er den hurtigste.

---

## Ofte stillede spørgsmål om CdA og aerodynamik

{% include motionsplan/faq.html %}

---

<details markdown="1" class="references">
  <summary><h2 id="references">Referencer & Videnskabelige studier</h2></summary>

- Martin, P. E., Milliken, D. L., Cobb, J. E., McFadden, K. L., & Coggan, A. R. (1998). *Validation of a mathematical model of road cycling power*. *Journal of Applied Biomechanics*, 14(3), 276-291.
- Bassett, D. R., Kyle, C. R., Passfield, L., Broker, J. P., & Burke, E. R. (1999). *Comparing cycling world hour records, 1967-1996: modeling with the aerodynamic velocity equation*. *Medicine & Science in Sports & Exercise*, 31(11), 1665-1676.
- Debraux, P., Grappe, F., Manolova, A. V., & Bertucci, W. (2011). *A aerodynamic drag in cycling: methods of assessment and relationship with performance*. *Sports Biomechanics*, 10(3), 197-218.
- Garcia-Lopez, J., Ogueta-Alday, A., Larrazabal, J., & Rodriguez-Marroyo, J. A. (2014). *The influence of helmet type and riding position on aerodynamic drag in cycling*. *International Journal of Sports Physiology and Performance*, 9(5), 826-833.

</details>