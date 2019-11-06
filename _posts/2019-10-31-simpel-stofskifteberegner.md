---
title: "Stofskifteberegner"
permalink: /simpel-stofskifte/
excerpt: ""
language: da
header:
  overlay_image: https://i.ytimg.com/vi/zUyuUoU7lAQ/maxresdefault.jpg
  teaser: https://i.ytimg.com/vi/zUyuUoU7lAQ/maxresdefault.jpg
category:
  - Beregnere
tags:
  - stofskifte
last_modified_at: 2019-03-06T23:14:14Z
toc: true
---

*[BMR]: Kroppens hvilestofskifte (basic metabolic rate)
*[PAL]: Fysisk aktivitetsniveau (Physical Acitivity Level)
*[TEE]: Total energiomsætning
*[kJ]: KiloJoule

Med denne beregner kan du anslå dit hvilestofskifte samt dit samlede daglige energibehov. Dette er den klassiske beregner, hvor man kun angiver sit aktivitetsniveau udfra nogle overordnede mål.

{% include calculate-metabolic-rate.html %}

Det skal understreges at beregningen er behæftet med stor usikkerhed. Værdierne er rettet mod "almindelige" mennesker og ikke f.eks. cykelryttere og triatleter.

## Mere avanceret udregning af energiforbrug

Se mere på [Motion-online.dk](https://web.archive.org/web/20160604213227/http://www.motion-online.dk/sundhed_og_vaegt/sundhed_generelt/beregn_dit_energiforbrug/)

### Teoretisk baggrund

Grundprincippet i beregneren er at basalstofskiftet beregnes (ref. 1 og 6) og der dertil lægges den aktivitetsbaserede energiomsætning. Værdierne for energiomsætning ved forskellige aktiviteter er primært taget fra ref. 4, men da disse værdier er bruttoværdier, der inkluderer basalstofskiftet, er de korrigeret ved at fratrække 0,07 kJ/kg/min svarende til 3,5 ml O<sub>2</sub>/kg/min.

### Korrektion af børns energiforbrug

Referenceværdierne for energiomsætning ved forskellige aktiviteter findes i ref. 4 for forskellige kropsvægte, men reelt er disse tabelopslag blot konstrueret ved linær ekstrapolation ud fra de reelt kendte værdier. Dette giver den fejlkilde at små / unge personer får undervurderet deres energiomsætning pr. kg kropsvægt ved en given aktivitet.

For alle personer over 50 kg beregnes Totalomsætning sådan:

Totalomsætning = Basalstofskifte + Aktivitetsomsætning

For alle personer under 50 kg korrigeres formlen som følger:

Totalomsætning = Basalstofskifte + Aktivitetsomsætning * (1 + 0,5 * (50 - Vægt) / 50)

Korrektionen har den effekt, at jo tættere på nul kg man er, desto større er korrektionen. I princippet vil en kropsvægt på 0 kg medføre at den aktivitetsbaserede energiomsætning øges med en faktor 1,5 pr. kg kropsvægt. I praksis er beregneren kun valid for kropsvægte over 15 kg.

### Korrektion for svær overvægt

Svært overvægtige får justeret deres energiomsætning ved aktivitet på en måde, så der ikke kan omsættes mere energi end hvad der ligger inden for en rimelig iltoptagelse. Som udgangspunkt stiger energiforbruget ved aktivitet prportionalt med vægten, men dertil laves en ekstra korrektion for personer med BMI over 30. For de to højeste aktivitetsniveauer er denne korrektionsfaktor = 30/BMI. For det trediehøjeste aktivitetsniveau er korrektionen √30/√BMI.

Vurderingen af fysisk aktivitetsniveau er givet ud fra en vurdering af PAL (Physical Activity Level). Der er anvendt WHO’s guidelines for forebyggelse af fedme (5) 

### Referencer

1. Nordiska næringsrekommendationer 1996. Nordiska ministerrådet. København, 1996.
2. Energy and Protein Requirements, Proceedings of an IDECG workshop, Edited by Nevin S. Scrimshaw, John C. Waterlow and Beat Schürch. 1994.
Eur J Clin Nutr. 1996 Feb;50 Suppl 1:S1-197.
3. World Health Organisation, Fao, and Unu. Energy and protein requirements. Geneva: WHO, Technical Report Series 724, 1985.
4. Exercise Physiology, McArdle, Katch & Katch, 5th ed
5. WHO Obesity Guidelines, 2000 - Technical Report Series 894
6. Schofield, W.N. 1985. Predicting basal metabolic rate, new standards and review of previous work. Hum. Nutr. Clin. Nutr., 39C (suppl. 1): 5-41.
