---
title: "Stofskifteberegner"
permalink: /simpel-stofskifte/
excerpt: ""
language: da
header:
  overlay_image: https://i1.wp.com/www.healthfitnessrevolution.com/wp-content/uploads/2016/10/iStock_69627681_MEDIUM.jpg?fit=1696%2C1131&ssl=1
  teaser: https://i1.wp.com/www.healthfitnessrevolution.com/wp-content/uploads/2016/10/iStock_69627681_MEDIUM.jpg?fit=1696%2C1131&ssl=1
category:
  - Beregnere
tags:
  - stofskifte
last_modified_at: 2019-03-06T23:14:14Z
toc: true
feature_row:
  - image_path: https://cdn6.bogreolen.dk/00039/91685/cover.1571714918.jpg
    alt: "Exercise Physiology - Nutrition, Energy, and Human Performance"
    title: "Exercise Physiology - Nutrition, Energy, and Human Performance"
    excerpt: "Skrevet af BS, William D., PhD McArdle, M.Ed, Frank I. Katch, Victor L. Katch."
    url: "https://www.partner-ads.com/dk/klikbanner.php?partnerid=28187&bannerid=55214&htmlurl=https://bogreolen.dk/exercise-physiology_bs_9781451193831"
    btn_label: "Læs mere"
    btn_class: "btn--success"
---

*[BMR]: Kroppens hvilestofskifte (basic metabolic rate)
*[PAL]: Fysisk aktivitetsniveau (Physical Acitivity Level)
*[TEE]: Total energiomsætning
*[kJ]: KiloJoule

Med denne beregner kan du anslå dit hvilestofskifte og dit samlede daglige energibehov. Beregneren er ret simpel og angiver kun dit aktivitetsniveau udfra nogle overordnede mål.

{% include calculate-metabolic-rate.html %}

Beregningen er behæftet med stor usikkerhed. Værdierne er rettet mod "almindelige" mennesker og ikke meget aktive kredsløbsatleter, fx cykelryttere og triatleter.

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

{% include feature_row type="left" %}

Nordiska næringsrekommendationer 1996. Nordiska ministerrådet. København, 1996.

Waterlow, John C., Nevin S. Scrimshaw, og Beat Schürch. 1996. “Energy and Protein requirements, Proceedings of an IDECG workshop”. Eur J Clin Nutr 50 (februar): 1–197. http://archive.unu.edu/unupress/food2/UID01E/UID01E00.HTM.

World Health Organisation, Fao, and Unu. Energy and protein requirements. Geneva: WHO, Technical Report Series 724, 1985.

Exercise Physiology, McArdle, Katch & Katch, 5th ed

WHO Obesity Guidelines, 2000 - Technical Report Series 894

Schofield, W. N. 1985. “Predicting Basal Metabolic Rate, New Standards and Review of Previous Work”. Human Nutrition. Clinical Nutrition 39 Suppl 1: 5–41.
