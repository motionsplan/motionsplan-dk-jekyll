---
# SIDE-METADATA OG BRØDKRUMMER
title: "Øvelsesvejledning: Iltoptagelsestest på løbebånd (Submax & VO2max)"
seo_title: "Iltoptagelsestest på løbebånd (Øvelsesvejledning & protokoller)"
description: "Komplet øvelsesvejledning for iltoptagelsestest på Vejle Idrætshøjskole. Måling af VO2, laktatprofil, submax, rampetest, kombineret test og kondital."
excerpt: "Komplet øvelsesvejledning til iltoptagelsestest på løbebånd. Lær at afvikle og analysere ren submax trappetest, rampetest, kombineret test og trappetest til failure."
permalink: /iltoptagelsestest-loebebaand/
redirect_from:
  - /iltoptagelse-trappetest-maxtest-loeb/
  - /iltoptagelse-submax-trappetest-loeb/
  - /iltoptagelse-submax-trappetest-ramp-maxtest-loeb/
  - /iltoptagelse-max-test-loeb/
  - /iltoptagelse-loeb-ramp-test/
  - /vo2-test-vih/
language: da
author: vih
classes: wide

header:
  teaser: /assets/images/blog/vo2-max-test-running-female.webp
  caption: "Iltoptagelsestest på løbebånd på Vejle Idrætshøjskole 🏃"

categories:
  - Kondition
  - Konditionstests

meta:
  name: "Øvelsesvejledning til VO2-test på VIH"
  measures: "LT1, LT2, VO2max, VO2peak, kondital, maxpuls, løbeøkonomi"
  type: "løbetest"
  equipment: "se testbeskrivelse"
  max: "submaksimal test / maksimal test"
  direct: "direkte test"

# TESTS / PROTOKOLLER (ALLE 4 LØBEPROTOKOLLER REGISTRERET HÉR)
tests:
  - id: "test-submaksimal-iltoptagelsestest-loeb"
    title: "Submaksimal trappetest (LT1, LT2 & løbeøkonomi)"
    description: "Trinvis belastningstest med iltoptagelsesmaske og kapillær blodlaktatmåling over 3-5 minutters trin. Stoppes ved LT2 (~4 mmol/L) for skånsom bestemmelse af fysiologiske tærskler og løbeøkonomi."
    category: ["Tests", "Kondition", "Løb"]
    type: ["Protokol", "Konditionstest"]
    execution: ["Fysisk"]
    method: "direkte"
    modality: ["Løb"]
    measures: ["LT1 (Aerob tærskel)", "LT2 (Anaerob tærskel)", "Løbeøkonomi", "Submaksimal laktat", "Puls"]
    equipment: ["Løbebånd", "Gasanalyseudstyr / Iltoptagelsesmaske", "Laktatmåler (priktest)", "Pulsbælte"]
    setting: ["Laboratorium", "Testcenter", "Undervisning"]
    target_group: ["Løbere", "Atleter", "Studerende", "Mænd", "Kvinder"]
    anchor: "#submax-trappetest"

  - id: "test-maksimal-rampetest-loeb"
    title: "Maksimal rampetest (VO2max)"
    description: "Direkte maksimal iltoptagelsestest på løbebånd ved fast hastighed med gradvist stigende hældning (+1% pr. min) til udmattelse for direkte måling af VO2max, kondital og maxpuls."
    category: ["Tests", "Kondition", "Løb"]
    type: ["Protokol", "Konditionstest"]
    execution: ["Fysisk"]
    method: "direkte"
    modality: ["Løb"]
    measures: ["VO2max", "Kondital", "Maxpuls", "Slutlaktat", "R-værdi (RER)", "Ventilatorisk kvotient (VE/VO2)"]
    equipment: ["Løbebånd", "Gasanalyseudstyr / Iltoptagelsesmaske", "Laktatmåler (priktest)", "Pulsbælte"]
    setting: ["Laboratorium", "Testcenter", "Undervisning"]
    target_group: ["Løbere", "Atleter", "Studerende", "Mænd", "Kvinder"]
    anchor: "#max-rampetest"

  - id: "test-kombineret-submax-ramp-loeb"
    title: "Kombineret test (Submax trappetest + pause + rampetest)"
    description: "Komplet fysiologisk laboratorietest opdelt i to faser: submaksimal 3-minutters trappetest (stoppes ved LT2) efterfulgt af 5–10 minutters hvile og en afsluttende maksimal rampetest."
    category: ["Tests", "Kondition", "Løb"]
    type: ["Protokol", "Konditionstest"]
    execution: ["Fysisk"]
    method: "direkte"
    modality: ["Løb"]
    measures: ["VO2max", "LT1", "LT2", "Løbeøkonomi", "Kondital", "Maxpuls"]
    equipment: ["Løbebånd", "Gasanalyseudstyr / Iltoptagelsesmaske", "Laktatmåler", "Pulsbælte"]
    setting: ["Laboratorium", "Testcenter", "Undervisning"]
    target_group: ["Løbere", "Atleter", "Studerende"]
    anchor: "#vo2-kombineret"

  - id: "test-trappetest-maxtest-loeb"
    title: "Incremental trappetest til failure (3-minutters trin)"
    description: "Ubrudt trappetest på løbebånd med iltoptagelsesmaske og kapillær blodlaktatmåling over 3-minutters trin direkte til udmattelse for måling af LT1, LT2, løbeøkonomi og VO2peak."
    category: ["Tests", "Kondition", "Løb"]
    type: ["Protokol", "Konditionstest"]
    execution: ["Fysisk"]
    method: "direkte"
    modality: ["Løb"]
    measures: ["LT1 (Aerob tærskel)", "LT2 (Anaerob tærskel)", "Løbeøkonomi", "VO2peak", "Laktatkurve", "Maxpuls"]
    equipment: ["Løbebånd", "Gasanalyseudstyr / Iltoptagelsesmaske", "Laktatmåler (priktest)", "Pulsbælte"]
    setting: ["Laboratorium", "Testcenter", "Undervisning"]
    target_group: ["Løbere", "Atleter", "Studerende", "Mænd", "Kvinder"]
    anchor: "#max-trappetest"

# FORMULARER OG SKABELER (GOOGLE SHEETS FREEBIE)
templates:
  - id: "vo2max_submax_testark_sheet"
    title: "Testark til VO2max & submax løbetest"
    description: "Google Sheets-skabelon brugt på Vejle Idrætshøjskole. Indtast data fra din trappetest og rampetest for automatisk at beregne laktattærskler (LT1 & LT2), løbeøkonomi, kondital og maxpuls."
    format: "Google Sheets / Excel"
    type: "sheet"
    btn_text: "📊 Kopier testarket (Gratis)"
    url: "https://docs.google.com/spreadsheets/d/1KV5QVhzzEYsG39Z7nVsepJ8ql7Bh_lvZXPHvaGHY_2s/copy?gid=758480326#gid=758480326"
    image: "/assets/images/blog/vo2max-test-sheet-freebie.jpg"

tags:
  - test
  - konditionstest
  - testcenter
  - iltoptagelsestest
  - vo2max
  - vih

last_modified_at: 2026-08-21T10:00:00Z
toc: true
faq:
  - question: "Hvad er forskellen på en trappetest og en rampetest?"
    answer: "En trappetest øger belastningen i trin på 3–5 minutter for at lade fysiologiske parametre opnå steady state og kortlægge tærskler (LT1/LT2). En rampetest øger belastningen kontinuerligt hvert minut (fx via hældning) for hurtigt at presse iltoptagelsen til VO2max uden lokal bentræthed."

  - question: "Hvad er forskellen på VO2max og VO2peak?"
    answer: "VO2max er din maksimale kardiovaskulære iltoptagelse (bekræftet ved et fysiologisk plateau). VO2peak er den højeste iltoptagelsesværdi opnået i en specifik test (fx trappetest til failure), hvor lokal muskulær bentræthed kan have stoppet løberen før det maksimale kardiovaskulære loft."

  - question: "Hvorfor skal der tages blodlaktatprøver under testen?"
    answer: "Kapillære laktatmålinger (priktests) afslører akkumuleringen af mælkesyre i blodet. Det gør det muligt præcist at bestemme den aerobe tærskel (LT1) og anaerobe tærskel (LT2) til brug for optimering af træningszoner."

  - question: "Kan man lave maxtesten og submaxtesten samme dag?"
    answer: "Ja, i den kombinerede hybridtest gennemføres den submaksimale trappetest først indtil LT2 (~4 mmol laktat). Efter 5–10 minutters aktiv hvile er kroppen klar til at køre en rampetest direkte til udmattelse for at finde VO2max."
---

Denne øvelsesvejledning beskriver **iltoptagelsestest på løbebånd**, som vi tilbyder på Vejle Idrætshøjskole. I løbebåndstesten laver vi en nøjagtig måling af iltoptagelsen for at finde din aerobe kapacitet under både submaksimalt og maksimalt arbejde. Læs om den [fysiologiske teori bag en iltoptagelsestest](/iltoptagelse-laboratorietest/).
{: .intro }

---

## 💡 Valgguide: Hvilken test skal du vælge?

I laboratoriet skelner vi grundlæggende mellem to måder at belaste kroppen på: **trappetest** (hvor hastigheden øges i trin på 3–5 minutter for at opnå *steady state*) og **rampetest** (hvor hældningen øges hvert minut for hurtigt at ramme loftet for det kardiovaskulære system).

| Måler primært | Testprotokol | Hvorfor vælge denne? |
| :--- | :--- | :--- |
| **Træningszoner (LT1/LT2) & løbeøkonomi** | **[Submaksimal trappetest →](#submax-trappetest)** | Afbrydes v. LT2. Perfekt hvis du kun er interesseret i træningszonerne. |
| **Præcis VO2max & kondital** | **[Maksimal rampetest →](#max-rampetest)** | 5–10 min. med øget intensitet til failure for at presse kredsløbet maksimalt. |
| **Både tærskler OG præcis VO2max** | **[Kombineret test (Standard) →](#vo2-kombineret)** | Den komplette løberprofil - Først submax til LT2, 5–10 min. hvile, og afsluttende rampetest for præcis VO2max. |
| **Tærskler & VO2peak samlet** | **[Trappetest til failure →](#max-trappetest)** | Tidsbesparende fra submax til udmattelse (INEOS-protokollen) for at finde zoner omtrentligt kondital. |

---

## 🫁 Hvilke primære målinger laver vi i laboratoriet?

I laboratoriet anvender vi tre primære målesystemer for at registrere din fysiologiske responsprofil:

<details markdown="1" class="concept">
  <summary>🫁 Iltoptagelse - Gasanalyse & spirometri (VO2 & VCO2)</summary>
  
Måles kontinuerligt via iltoptagelsesmasken. Forskellen på ind- og udåndingsluften giver iltoptagelsen ($VO_2$) og udskillelsen af kuldioxid ($VCO_2$). Da vi kender den [respiratoriske udvekslingskvotient (RER)](/respiratoriske-metaboliske-udvekslingskvotient/), får vi direkte indblik i fedt- og kulhydratforbrændingen samt motorens efficiens.
</details>

<details markdown="1" class="concept">
  <summary>🩸 Blodlaktat (mælkesyre) ved priktest</summary>

Priktests i fingeren i de sidste 30 sekunder af hvert belastningstrin afslører mælkesyreophobningen i blodet. Det giver præcis identifikation af den aerobe (LT1) og anaerobe tærskel (LT2).
</details>

<details markdown="1" class="concept">
  <summary>❤️ Puls med pulsmåler</summary>

Vi måler pulsen undervejs via pulsbælte. Pulsen stiger lineært med belastningen og holdes op mod laktatkurven for at fastlægge dine personlige træningszoner og bestemme den reelle maxpuls.
</details>

---

## 🛠️ Nødvendigt udstyr og målesystemer i laboratoriet

For at afvikle testen og registrere din fysiologiske responsprofil benyttes fire primære komponenter:

* **Løbebånd:** Motoriseret løbebånd til præcis styring af hastighed (km/t) og hældning (%).
* **Gasanalyseudstyr & spirometri:** Iltoptagelsesmaske og $O_2$/$CO_2$-sensorer, der kontinuerligt måler iltoptagelse ($VO_2$), udskillelse af kuldioxid ($VCO_2$) og den [respiratoriske udvekslingskvotient (RER)](/respiratoriske-metaboliske-udvekslingskvotient/) for at kortlægge fedt- og kulhydratforbrændingen.
* **Laktatmåler (priktest):** Kapillær blodprøvetager og teststrimler til måling af blodlaktat i de sidste 30 sekunder af hvert belastningstrin til bestemmelse af LT1 og LT2.
* **Pulsmåler:** Pulsbælte til registrering af hjertefrekvensen under stigning i belastning samt bestemmelse af den reelle maxpuls.

> 🩸 **Kombiner din trappetest med blodlaktatmålinger**  
> Tager du laktatmålinger i de sidste 30 sekunder af hvert trin i trappetesten, kan du koble din iltoptagelse og puls direkte til dine fysiologiske tærskler (LT1 og LT2).  
> 👉 **[Se protokollen for laktat-trappetest og beregn din kurve her →](/laktattest/)**
{: .notice--success }

---

## 1️⃣ Submaksimal trappetest (Tærskler & løbeøkonomi)
{: id="submax-trappetest" }

Formålet med den rene submaksimale test er at bestemme din **aerobe tærskel (LT1)**, din **anaerobe tærskel (LT2)** samt din **løbeøkonomi** uden at udsætte kroppen for udmattelse.

**Hvad udleder vi af denne test?**  
{% include concept.html concept="lt1" %}
{% include concept.html concept="lt2" %}
{% include concept.html concept="løbeøkonomi" %}

> 🩸 **Beregning af tærskler:**  
> Indtast dine målinger direkte i vores interaktive **[Laktatberegner til LT1 & LT2 →](/laktattest/#calculator)**.

### 📝 Step-by-step afvikling af submax-testen

{% include figure image_path="/assets/images/motionsplan/incremental-submax.jpg" alt="Diagram over submax trappetest" caption="Protokol for den submaksimale trappetest." %}

1. **Hvilemåling:** Laktatpriktest tages i hvile inden opvarmning.
2. **Montering af udstyr:** Pulsbælte og iltoptagelsesmaske monteres, og forsøgspersonen tilsluttes gasmålingsudstyret.
3. **Opvarmning (~10 min):** Let løb på løbebåndet for tilvænning.
4. **Vælg starthastighed:** Konservativ starthastighed vælges (typisk 4–5 km/t under forventet 5k-tempo).
5. **Trinvis stigning (3–5 min. trin):** Hastigheden øges med 1 km/t pr. trin. Hvert trin varer 3–5 minutter for at sikre fysiologisk *steady state*. For at være på den sikre side i en submax-test, så brug 5 minutter pr. trin.
6. **Målinger i slutsekunder:** I de sidste 30 sekunder af hvert trin registreres $VO_2$, $VCO_2$, RER og puls. Løberen hopper ud til siden på løbebåndet i ~30 sekunder til en kapillær priktest.
7. **Kontrolleret afslutning (LT2):** Testen stoppes af forsøgslederen, når blodlaktaten stiger markant over den anaerobe tærskel (typisk er den anaerobe tærskel bestemt ved baseline (den laveste måling) +1,5-2,0 mmol/L).

<details markdown="1" class="faq">
 <summary>📚 Teoretisk baggrund: Aerob/anaerob energiomsætning & steady state</summary>

Skeletmuskulaturens evne til at danne energi beror på aerobe (med ilt) og anaerobe (uden ilt) processer. Det relative bidrag fra de anaerobe processer stiger i takt med arbejdets intensitet.

På hvert 3–5 minutters trin arbejder kroppen sig ind i et fysiologisk *steady-state*, hvor iltoptagelsen tilpasses det eksakte energikrav. Når belastningen øges, dannes der mere mælkesyre i muskelcellerne, som dissocierer ud i blodet som laktat og brint-ioner ($H^+$). 

Laktattærsklen (LT2) angiver den højeste træningsintensitet, hvor kroppens evne til at fjerne laktat fra blodet matcher muskelcellernes produktion.

{% include figure image_path="/assets/images/static.wixstatic.com/b059e0_c1fed96532df4341b70a4b2c8bb025c6_mv2-c9906655.webp" caption="Udviklingen i laktatkoncentration under stigende intensitet." %}
</details>

<details markdown="1" class="question">
  <summary>💬 Arbejdsspørgsmål til submax-testen</summary>
  <ul>
    <li>Hvorfor skal hvert trin i testen vare 3–5 minutter?</li>
    <li>Hvad vil I forvente af udviklingen i værdierne for $VO_2$, $VCO_2$ og RER undervejs i testen?</li>
    <li>Hvilken indflydelse vil en periode med aerob træning have på forsøgspersonens laktatkurve og fysiologiske parametre ved samme løbehastighed?</li>
  </ul>
</details>

---

## 2️⃣ Maksimal rampetest (Hældning)
{: id="max-rampetest" }

I rampetesten isolerer vi målingen af **den maksimale iltoptagelseshastighed (VO2max)**, **konditallet** og den **reelle maxpuls**. Da testen varer kort tid (5–10 minutter) og øger belastningen via hældning i stedet for højere ben-hastighed, eliminerer vi risikoen for lokal muskulær bentræthed før hjertet når sit iltoptagelsesloft.

**Hvad udleder vi af denne test?**  
{% include concept.html concept="vo2max" %}
{% include concept.html concept="kondital" %}
{% include concept.html concept="maxpuls" %}

### 📝 Step-by-step afvikling af rampetesten

{% include figure image_path="/assets/images/motionsplan/ramp-max-test.jpg" alt="Diagram over rampetest til kondital" caption="Rampetest med gradvist øget hældning til udmattelse." %}

1. **Opvarmning:** Grundig opvarmning (eller udført som del 2 i den kombinerede test).
2. **Fast startfart (Min 0–2):** Testen starter ved en fast hastighed svarende til løberens anaerobe tærskel (eller 1 km/t lavere end 5k-tempo) på fladt bånd (0% hældning).
3. **Første hældningsstigning (Min 2–3):** Hældningen øges med **2%** i 1 minut.
4. **Kontinuerlig rampe (Min 3+):** Hvert minut øges hældningen med **1%**.
5. **Afslutning ved udmattelse (*failure*):** Løberen fortsætter indtil fuldstændig udmattelse.
6. **Slutnotering:** Straks ved stop noteres den maksimale puls, og der tages en afsluttende kapillær laktatprogve.

<details markdown="1" class="concept">
  <summary>✅ Kriterier for godkendt VO2max-test</summary>

For at bekræfte om løberen har opnået sin reelle maksimale ydeevne, vurderes følgende fysiologiske indikatorer ved teststop:
* **Plateau i $VO_2$:** Iltoptagelsen flader ud eller falder svagt trods øget belastning (vigtigste kriterium).
* **$RER \ge 1,10–1,15$:** Høj respiratorisk udvekslingskvotient som tegn på maksimal hyperventilation.
* **Blodlaktat $> 8,0 \text{ mmol/L}$.**
* **Puls:** Tæt på teoretisk maxpuls ($220 - \text{alder} \pm 10$).
* **Ventilatorisk kvotient ($V_E / VO_2$) $> 30–35$.**

**Gå i dybden**: [Se alle 6 kriterier for en godkendt VO2max test →](/kriterier-maksimal-iltoptagelsestest/)
</details>

<details markdown="1" class="question">
  <summary>💬 Arbejdsspørgsmål til rampetesten</summary>
  <ul>
    <li>I hvilke sportsgrene har udøverne et meget højt relativt kondital ($VO_2max$ i ml/kg/min)? Begrund svaret.</li>
    <li>Nævn fordele og ulemper ved direkte laboratorium-måling af $VO_2max$ sammenlignet med en indirekte Cooper-test.</li>
    <li>Hvilken indflydelse har køn og kropsvægt på parametre som absolut $VO_2$ (L/min) og minutventilation ($V_E$)?</li>
  </ul>
</details>

---

## 3️⃣ Kombineret test (Submax trappetest + pause + rampetest)
{: id="vo2-kombineret" }

I laboratoriet på Vejle Idrætshøjskole benytter vi ofte den **kombinerede hybridtest**. Det giver os det komplette fysiologiske profilbillede (både laktatkurve, tærskler, løbeøkonomi OG uforstyrret VO2max) under samme laboratoriebesøg:

{% include figure image_path="/assets/images/motionsplan/incremental-submax-ramp-max.jpg" alt="Diagram over den kombinerede test" caption="Den kombinerede testopsætning: Fase 1 (submax 3-minutters trin) stoppes ved LT2 ➔ 5-10 min aktiv hvile ➔ Fase 2 (rampetest til VO2max)." %}

1. **Del 1 (Submax-fase):** Submaksimal trappetest ([Test 1](#submax-trappetest)) gennemføres med 3-minutters trin. Testen stoppes af forsøgslederen, så snart løberen har passeret den anaerobe tærskel (LT2 / ~4 mmol laktat).
2. **Aktiv hvile (5–10 min):** Løberen tager masken af, puster ud og drikker vand. Løbebåndet sættes ned til roligt gå-tempo (4–5 km/t), så pulsen og blodlaktaten falder til ro.
3. **Del 2 (Rampetest-fase):** Rampetest ([Test 2](#max-rampetest)) gennemføres ved startfart fra sidst gennemførte submax-trin. Hældningen øges (+1% pr. min) direkte til udmattelse.

---

## 4️⃣ Incremental trappetest til failure (3-minutters trin)
{: id="max-trappetest" }

I denne uafbrudte variant startes der med 3-minutters trin ligesom i submax-testen. Men i stedet for at stoppe ved LT2, fortsætter testen med øgede hastighedstrin pr. 3. minut **direkte til udmattelse (*failure*)**.

> 🏃‍♂️ **Fakta: Testprotokollen bag INEOS 1:59 Challenge (Eliud Kipchoge)**  
> Den 3-minutters incremental trappetest til failure var nøjagtig den teststruktur, fysiologerne (bl.a. Prof. Andrew Jones) benyttede til at teste Eliud Kipchoge og verdenseliten forud for sub-2-timers maratonforsøget. Testen giver det præcise indblik i laktatprofilen og den minimale hastighed ved VO2max ($vVO_2max$), der gør det muligt at beregne det optimale maratontempo.
{: .notice--info }

Dette giver både laktatprofilen på de første trin og et mål for **VO2peak**. Vi kalder det *VO2peak* (og ikke nødvendigvis VO2max), da den lange tidsudtrætning over mange 3-minutters trin kan bevirke, at løberen stopper pga. udmattelse før kredsløbet rammer sit absolutte iltoptagelsesloft.

**Hvad udleder vi af denne test?**

{% include concept.html concept="lt1" %}
{% include concept.html concept="lt2" %}
{% include concept.html concept="løbeøkonomi" %}
{% include concept.html concept="vo2peak" %}
{% include concept.html concept="maxpuls" %}

### 📝 Step-by-step afvikling af trappetesten til failure

{% include figure image_path="/assets/images/motionsplan/incremental-max-test.jpg" alt="Diagram over trappetest til failure" caption="Uafbrudt trappetest direkte til udmattelse." %}

1. Følger nøjagtig samme opvarmning, starthastighed og 3-minutters trinstruktur som [Test 1](#submax-trappetest).
2. Efter LT2 er passeret, stoppes testen **IKKE**.
3. Hastigheden øges fortsat med +1 km/t for hvert 3. minut direkte til udmattelse.

> 🏃‍♂️ **Fakta: Testprotokollen bag INEOS 1:59 Challenge (Eliud Kipchoge)**  
> Den 3-minutters incremental trappetest til failure var nøjagtig den teststruktur, fysiologerne (bl.a. Prof. Andrew Jones) benyttede til at teste Eliud Kipchoge og verdenseliten forud for sub-2-timers maratonforsøget. Testen gav forskerne det præcise indblik i Kipchoges laktatprofil og $vVO_2max$, der gjorde det muligt at beregne det optimale sub-2-tempo.
{: .notice--info }

---

### Resultatark fra trappetesten til failure

{% include figure image_path="/assets/images/blog/iltoptagelsestest-loebetest.jpg" caption="På Vejle Idrætshøjskole bruger vi følgende resultatark til at give resultaterne." %}

---

### 🧪 Datakvalitet: Hvornår er testen vellykket?

For at sikre, at testresultaterne kan bruges til præcis planlægning af træningszoner og kondital, vurderes datakvaliteten ud fra to fysiologiske tjekpunkter:

#### 1. Er laktatkurven som forventet?
I den submaksimale trappetest skal laktatværdierne udvise et fysiologisk logisk forløb:
* **Flad baseline:** Laktatkoncentrationen skal ligge stabilt og lavt (typisk 1,0–2,5 mmol/L alt efter laktatmålerens kalibrering) på de første lette belastningstrin.
* **Tydeligt knækpunkt:** Når intensiteten nærmer sig LT1 og LT2, skal laktatakkumuleringen stige jævnt eller eksponentielt – uden pludselige, ukontrollerede hop mellem enkelte trin.

#### 2. Er de fysiologiske kriterier for $VO_2max$ opnået?
For at bekræfte, at forsøgspersonen har presset kredsløbet til sit absolutte loft (og ikke stoppet pga. manglende motivation), skal **mindst 3 ud af 5 kriterier** være opfyldt ved teststop:

| Kriterium | Fysiologisk grænseværdi | Forklaring |
| :--- | :--- | :--- |
| **1. $VO_2$-plateau** | Stigning $< 150 \text{ ml/min}$ | Iltoptagelsen flader ud trods øget belastning. |
| **2. RER-værdi** | $RER \ge 1,10 – 1,15$ | Høj respiratorisk kvotient pga. hyperventilation og CO₂-udskillelse. |
| **3. Slutlaktat** | Blodlaktat $> 8,0 \text{ mmol/L}$ | Bekræfter høj anaerob energiomsætning i slutfasen. |
| **4. Maxpuls** | $\pm 10 \text{ slag}$ fra teoretisk max | Pulsen ligger tæt på aldersestimeret max ($220 - \text{alder}$). |
| **5. Ventilatorisk kvotient** | $V_E / VO_2 > 30 – 35$ | Høj minutventilation i forhold til den optagne iltmængde. |

👉 **[Gå i dybden med alle 6 kriterier for en godkendt VO2max-test →](/kriterier-maksimal-iltoptagelsestest/)**

---

### ⚠️ Metodiske overvejelser for den lange trappetest

Selvom laboratorietesten er guldstandarden, skal testlederen tage højde for to vigtige begrænsninger i testdesignet:

* **Opnås der reel steady state på 3 minutter?**  
  Tre minutter pr. trin er minimumskravet for, at iltoptagelse, laktat og puls stabiliserer sig. Hos utrænede eller stærkt udholdenhedstrænede løbere kan iltoptagelsens kinetik være langsommere, hvilket kan medføre en let underestimering af laktatniveauet på de tidlige trin.
* **$VO_2max$ vs. $VO_2peak$ ved lange trappetests:**  
  Hvis du benytter [Test 4 (Trappetest til failure)](#4-test-4-incremental-trappetest-til-failure-3-minutters-trin), varer testen ofte 18–25 minutter. Den lange tidsudtrætning kan bevirke, at løberen stopper pga. lokal muskulær træthed, før hjertet når sit absolutte iltoptagelsesloft. I så fald registreres et $VO_2peak$ i stedet for et sandt $VO_2max$. Det er årsagen til, at en kort [Rampetest (Test 2)](#2-test-2-maksimal-rampetest-haeldning) er mere præcis til ren VO2max-bestemmelse.

---

## 📈 Meningsfuld forbedring: Forskydning af laktatkurven

Når atleten re-testes efter en træningsperiode, evalueres effekten af træningen ved at sammenligne laktat- og pulskurverne før og efter forløbet:

{% include figure image_path="/assets/images/motionsplan/incremental-max-test-results.jpg" alt="Laktat- og pulskurve før og efter træningsforløb" caption="Testresultat før og efter et træningsforløb. Laktatkurven er skubbet mod højre." %}

**Sådan fortolkes resultatet:**

* **Kurven forskydes mod højre:** Løberen kan holde en højere hastighed ved samme laktatniveau. Både LT1 og LT2 flytter sig til et højere tempo.
* **Lavere puls ved samme hastighed:** Hjertefrekvensen falder på de submaksimale trin som tegn på øget slagvolumen og forbedret løbeøkonomi.

---

## 📊 Sammenligning af de 4 løbebåndsprotokoller

| Testprotokol | Primære målinger | Varighed | Belastningsform | Udbytte vs. Faldgrube |
| :--- | :--- | :--- | :--- | :--- |
| **1. Submaksimal trappetest** | LT1, LT2 & løbeøkonomi | 15–25 min. | 3–5 min. trin (øget fart) | **+** Skånsom for kroppen.<br>**–** Måler ikke VO2max/maxpuls. |
| **2. Maksimal rampetest** | VO2max, kondital & maxpuls | 5–10 min. | 1 min. trin (øget hældning) | **+** Præcis VO2max uden ben-træthed.<br>**–** Giver ingen laktatprofil/tærskler. |
| **3. Kombineret hybridtest** | LT1, LT2, løbeøkonomi & VO2max | 25–35 min. *(inkl. pause)* | Submax-trin ➔ 5 min. hvile ➔ Rampetest | **+** Den komplette løberprofil.<br>**–** Kræver mere tid i laboratoriet. |
| **4. Trappetest til failure** | LT1, LT2, løbeøkonomi & VO2peak | 18–25 min. | 3 min. trin (øget fart til stop) | **+** Alt i én uafbrudt test (INEOS).<br>**–** Risiko for at stoppe pga. bentræthed før VO2max. |

---

## 💬 Arbejdsspørgsmål til undervisningen

<details markdown="1" class="question">
  <summary>I hvilke sportsgrene har udøverne et højt kondital (VO2max i forhold til kropsvægt)? Begrund jeres svar.</summary>
</details>

<details markdown="1" class="question">
  <summary>Nævn sportsgrene hvor musklens anaerobe evne er mere dominerende end den aerobe. Begrund jeres svar.</summary>
</details>

<details markdown="1" class="question">
  <summary>Nævn fordele og ulemper ved direkte måling af iltoptagelse sammenlignet med eksempelvis en Cooper-test.</summary>
</details>

<details markdown="1" class="question">
  <summary>Hvilke formler for estimering af den maksimale hjertefrekvens (puls) kender I? Hvad er fordelen og ulemper ved disse formler?</summary>
</details>

<details markdown="1" class="question">
  <summary>Hvilken indflydelse har køn på parametre som maksimal iltoptagelseshastighed (VO2) og maksimal minutventilation (VE)?</summary>
</details>

---

## 🔗 Relaterede emner og teori

* 🔬 **[Direkte iltoptagelse i laboratorium](/iltoptagelse-laboratorietest/):** Vores overordnede fagside om principperne bag gasanalyse og $VO_2$-måling.
* 🩸 **[Laktattest & blodlaktat guide](/laktattest/):** Dybdegående guide til laktatkurver og blodprøvetagning.
* 📊 **[Kriterier for VO2max test](/kriterier-maksimal-iltoptagelsestest/):** De fysiologiske krav for at godkende en maxtest.
* 🏃‍♂️ **[Indirekte konditionstests](/tests/loeb/):** Se alle alternative løbetests uden krav om laboratorium (fx Cooper-test og Andersen-test).

---

## ❓ Ofte stillede spørgsmål

{% include motionsplan/faq.html %}

---

## 📊 Testark til submax & VO2max løbetest

Til undervisningen og databehandlingen på Vejle Idrætshøjskole benytter vi et samlet Google Sheet til indtastning af fysiologiske data og automatisk grafering:

{% include motionsplan/templates.html id="vo2max_submax_testark_sheet" %}

---

<details markdown="1" class="references">
  <summary><h2 id="references">Kilder og videnskabelig litteratur</h2></summary>

- **Jones, A. M., Kirby, B. S., Clark, I. E., Rice, H. M., Fulkerson, Z., Wylie, L. J., ... & Wilkins, B. W. (2021).** *Physiological demands of running 42.2 km under two hours.* Journal of Applied Physiology, 130(2), 388-397. (Studiet af Eliud Kipchoge og INEOS 1:59 løberne baseret på incremental trappetest).
- **Midgley, A. W., et al. (2007).** *Criteria for Determination of Maximal Oxygen Uptake.* Sports Medicine, 37(12), 1019–1028.
- **Faude, O., et al. (2009).** *Lactate Threshold Concepts: How Valid are They?* Sports Medicine, 39(6), 469–490.
- **Bentley, D. J., et al. (2007).** *Incremental Exercise Test Design and Analysis: Physiological Responses in Trained Athletes.* Sports Medicine, 37(7), 575–586.
</details>