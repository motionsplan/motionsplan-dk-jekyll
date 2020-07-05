---
title: "Knæleddet"
excerpt: "Knæleddet er kroppens største og mest komplicerede led. Det danner forbindelse mellem lårbenet (femur),  skinnebenet (tibia) og knæskallen (patella). Knæskallen er  indkapslet i den sene, der går fra lårmusklen ned til skinnebenet."
latin:
tags:
  - led
movements:
  - title: Bøjning
    muscles:
      - Hamstrings
  - title: Strækning
    muscles:
      - Quadriceps
image: https://shop9156.hstatic.dk/upload_dir/pics/Menisk-01.jpg
header:
  teaser: https://www.students4bestevidence.net/app/uploads/2018/01/knee-2253047_1920.jpg
  overlay_image: https://www.students4bestevidence.net/app/uploads/2018/01/knee-2253047_1920.jpg
---

Knæleddet er kroppens største og mest komplicerede led. Dette er ikke mærkeligt når man tænker på de belastninger leddet udsættes for f.eks. under idrætsudfoldelse. Af samme grund opstår der ofte skader i dette led, og det er derfor vigtigt at kende til dets opbygning.

Knæleddet er nærmest et hængselled, men når knæet er flekteret kan der laves drejebevægelser med underbenet. Ledfladerne dannes af lårbenet og skinnebenet. Knæskallen danner også ledforbindelser til disse to knogler. Knæskallen sidder indskudt i senen fra den firhovede knæstrækker, der fæster på forsiden af skinnebenet.

Imellem ledfladerne i knæleddet er der indskudt menisker, der dels udfylder ledhulen og dels medvirker til stødabsorption. Meniskerne er halvmåneformede bruskskiver, der ligger forholdsvis løst i ledhulen. Ved vridning af knæet under stor belastning kan de derfor bliver revet i stykker.

Inde i ledhulen findes også korsbåndene. Disse sørger primært for at underbenet ikke kan glide frem eller tilbage i forhold til lårbenet. Oftest er det det forreste korsbånd der bliver beskadiget/overrevet. Det forreste korsbånd holder normalt underbenet tilbage, man kan derfor delvist erstatte dets funktion ved at optræne hasemusklerne.

Ledkapslen er forstærket af stærke sideledbånd, der imidlertid bliver løsere når knæet bøjes. Kort sagt kan man sige at jo mere knæet er flekteret, jo større belastning udsættes leddet for og jo mere ustabilt bliver det. Man bør derfor undgå langvarige eller store belastninger med en knævinkel der er dybere end 90 grader.

## Bevægelser i knæleddet

{% for m in page.movements %}
- **{{ m.title }}**.
  {{ m.muscles | join: ", " }}
{% endfor %}

{% include figure image_path=page.image caption=page.title alt=page.title %}
