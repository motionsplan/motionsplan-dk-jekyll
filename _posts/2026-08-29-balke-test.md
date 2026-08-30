---
title: 'Balke-testen: Løbebåndstest og 15-minutters felt-test'
seo_title: 'Balke-test: Beregn dit kondital (VO2max) og protokol'
description: 'Lær at udføre Balke-testen på løbebånd (gang eller løb) eller som 15-minutters felt-test. Find komplette protokoller, formler og interaktiv timer.'
excerpt: 'Balke-testen er en klassisk gradueret konditionstest udviklet af fysiologen Bruno Balke. Lær hvordan du tester dit kondital på løbebånd eller atletikbane.'
permalink: /balke-test/
language: da
header:
  teaser: https://images.unsplash.com/photo-1729184648149-f907ee5f3d9a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
  caption: 'Gradueret konditionstest med fast hastighed og trinvist stigende hældning'
categories:
  - Konditionstests
  - Løb
tags:
  - balke test
  - kondital
  - vo2max
  - løbebåndstest
  - konditionstest
last_modified_at: '2026-08-29T10:00:00Z'
toc: true
faq:
  - question: "Hvad er forskellen på Balke-testen og Bruce-testen?"
    answer: "Bruce-testen øger både hastighed og hældning samtidigt for hvert 3. minut, hvilket gør testen meget stejl og fysisk rykvis. Balke-testen holder en helt fast hastighed (fx 5,3 km/t eller 8,0 km/t) og øger hældningen roligt med 1% for hvert minut."
  - question: "Hvad er formlen for Balke løbebåndstesten?"
    answer: "Balke-formlen afhænger af testtypen og køn. For gang benyttes Pollock et al. formlerne: VO2max = 14,99 + (1,444 * T) for mænd og VO2max = 5,22 + (1,38 * T) for kvinder. For løb ved 8,0 km/t benyttes ACSM-ligningen: VO2max = 30,17 + (1,20 * T), hvor T er tiden i minutter."
  - question: "Kan man gennemføre Balke-testen ved rent gangtempo?"
    answer: "Ja, den oprindelige Balke-Ware gangtest udføres ved en fast hastighed på 5,3 km/t (3,3 mph), hvilket gør den særdeles velegnet til utrænede, ældre eller i klinisk genoptræning."
---

**Balke-testen** er en af de mest anerkendte og klassiske metoder til at estimere kroppens maksimale iltoptagelse ($\text{VO}_2\max$) og kondital. Testen blev oprindelig udviklet af den tysk-amerikanske idrætsfysiolog dr. Bruno Balke i 1960'erne som et mere kontrolleret og skånsomt alternativ til eksplosive løbetests.

Det unikke ved Balkes fysiologiske tilgang er princippet om **fast hastighed**: I stedet for at øge farten undervejs, holder du et konstant tempo, mens belastningen øges gradvist ved at skrue op for løbebåndets stigning (hældning) med 1% for hvert minut.

[<i class='fas fa-volume-up'></i> Hop til timer & beregner for løbebånd](#timer){: .btn .btn--success .btn--jump }

---

## To måder at udføre Balke-testen på

Balke-testen findes i to primære udgaver, afhængigt af om du tester i et laboratorium/fitnesscenter eller udendørs på en atletikbane:

1. **Balke Løbebåndstest (Klinisk & Gradueret test):** Udføres på et motoriseret løbebånd ved fast hastighed ($5{,}3 \text{ km/t}$ for gang eller $8{,}0 \text{ km/t}$ for løb), hvor stigningen øges trinvist indtil udmattelse.
2. **Balke 15-minutters felt-test (Udendørs løbetest):** En maksimal test på en flad rute eller 400-meter atletikbane, hvor testpersonen tilbagelægger så lang en distance som muligt på nøjagtigt 15 minutter.

---

## 1. Balke Løbebåndstest: Protokol

Løbebåndstesten anvendes hyppigt af fysioterapeuter, idrætsfysiologer og trænere. Da hastigheden er konstant, slipper du for at skulle justere din skridtlængde eller kadence under testen.

### Testens opsætning
* **Indstilling af start:** Sæt løbebåndet til $0\,\%$ hældning.
* **Valg af hastighed:**
  * **Gang (Balke-Ware):** Fast hastighed på **$5{,}3 \text{ km/t}$** ($3{,}3 \text{ mph}$).
  * **Løb:** Fast hastighed på **$8{,}0 \text{ km/t}$** ($5{,}0 \text{ mph}$).
* **Trin-forløb:** Hvert trin varer **1 minut (60 sekunder)**. For hvert minut øges løbebåndets hældning med **1 %** (fx Minut 1 = 0 %, Minut 2 = 1 %, Minut 3 = 2 %).
* **Slutmål:** Testen fortsætter indtil udmattelse ($RPE > 18$), eller til testpersonen ikke længere kan følge med.

---

## Balke test timer og beregner
{: id="timer" }

Brug timeren herunder under din test på løbebåndet. Den holder styr på 1-minuts intervallerne, viser den aktuelle hældning, giver lydadvarsel før trinskift og beregner automatisk dit kondital ved stop.

{% include components/balke-timer.html %}

---

## Formlerne bag Balke-beregningerne

Beregningen af dit kondital ($\text{VO}_2\max$) afhænger af, hvilken Balke-protokol du har gennemført, samt dit køn. Nedenfor gennemgås de matematiske modeller, der benyttes i beregneren.

### 1. Balke Løbebåndstest til Gang ($5{,}3 \text{ km/t}$)
Når testen gennemføres som gangtest ved $5{,}3 \text{ km/t}$ ($3{,}3 \text{ mph}$), anvendes de klassiske validerede formler fra Pollock et al. (1976 / 1982). Ligningerne tager højde for køn, da mænd og kvinder har forskellig bevægelsesøkonomi og kropssammensætning ved gradueret gang.

**Formel for mænd (Pollock et al., 1976):**

$$\text{VO}_2\max = 14{,}99 + (1{,}444 \cdot T)$$

**Formel for kvinder (Pollock et al., 1982):**

$$\text{VO}_2\max = 5{,}22 + (1{,}38 \cdot T)$$

*Hvor $T$ er den samlede gennemførte tid i minutter inklusiv sekunder omregnet til decimaler:*

$$\text{Decimaltid } (T) = \text{Minutter} + \left(\frac{\text{Sekunder}}{60}\right)$$

> **Eksempel (Mand på gangtest):**  
> Hvis en mand gennemfører 14 minutter og 30 sekunder ($T = 14 + \frac{30}{60} = 14{,}5 \text{ min}$):  
> $$\text{VO}_2\max = 14{,}99 + (1{,}444 \cdot 14{,}5) = 14{,}99 + 20{,}94 = 35{,}9 \text{ ml/kg/min}$$

---

### 2. Balke Løbebåndstest til Løb ($8{,}0 \text{ km/t}$)
Ved løb med en fast starthastighed på $8{,}0 \text{ km/t}$ ($5{,}0 \text{ mph}$) skiftes der fysiologisk fra gang- til løbeøkonomi. Her benyttes ACSM's (American College of Sports Medicine) standardiserede running-ligning for gradueret belastning. Denne ligning gælder for både mænd og kvinder, da den fysiologiske iltomkostning ved at fremføre kropsvægten under løb med stigning er ensartet pr. kilo kropsvægt uanset køn.

**Formel for løb (ACSM Running Equation):**

$$\text{VO}_2\max = 30{,}17 + (1{,}20 \cdot T)$$

> **Eksempel (Løbetest):**  
> Hvis testen stoppes efter 12 minutter og 0 sekunder ($T = 12{,}0 \text{ min}$):  
> $$\text{VO}_2\max = 30{,}17 + (1{,}20 \cdot 12{,}0) = 30{,}17 + 14{,}40 = 44{,}6 \text{ ml/kg/min}$$

---

### 3. Modificeret Balke Løbebåndstest (Submaksimal gangtest)

I modsætning til den klassiske Balke-test, som køres til maksimal udmattelse, er den **modificerede Balke-test** en submaksimal gangtest på løbebånd. Målet er ikke at presse testpersonen til grænsen, men derimod at stoppe testen i det øjeblik, vedkommende rammer **85% af sin maksimale hjertefrekvens** (eller en RPE-skala på ca. 15). Den modificerede Balketest minder således om [Borg 15 cykeltesten](/kondital-borg15/).

Testen er fysiologisk ideel til kliniske patienter, ældre, utrænede eller i genoptræningsforløb, hvor en maksimal belastning til udmattelse enten er ubehagelig eller udgør en helbredsrisiko.

#### Fysiologisk princip og beregning
Modellen bygger på den fysiologiske præmis, at der er en lineær sammenhæng mellem arbejdets belastning (tid på løbebåndet) og stigningen i puls. Når testen stoppes ved 85% af makspulsen, udregnes den teoretiske sluttid ($T_{\text{est}}$), hvis personen havde fortsat hele vejen op til sin maksimale ydeevne (100%):

$$T_{\text{est}} = \frac{T_{\text{sub}}}{0{,}85}$$

Den ekstrapolerede tid $T_{\text{est}}$ indsættes derefter i de klassiske Pollock-formler for gang:

$$\text{VO}_2\max = 14{,}99 + (1{,}444 \cdot T_{\text{est}}) \quad \text{(Mænd)}$$

$$\text{VO}_2\max = 5{,}22 + (1{,}38 \cdot T_{\text{est}}) \quad \text{(Kvinder)}$$

> **Eksempel (Mand, 30 år med makspuls på 187 bpm):**  
> * **Målpuls (85 %):** $187 \cdot 0{,}85 = 159 \text{ bpm}$.  
> * **Testforløb:** Testpersonen rammer 159 bpm efter **10 minutter og 12 sekunder** ($T_{\text{sub}} = 10{,}2 \text{ min}$).  
> * **Ekstrapoleret tid:** $T_{\text{est}} = \frac{10{,}2}{0{,}85} = 12{,}0 \text{ min}$.  
> * **Beregnet kondital:** $\text{VO}_2\max = 14{,}99 + (1{,}444 \cdot 12{,}0) = 32{,}3 \text{ ml/kg/min}$.

---

## 2. Balke 15-minutters Felt-test (Løbetest)

Som et alternativ til sin løbebåndstest designede Bruno Balke også en 15-minutters felt-test. Den fungerer på samme måde som den kendte 12-minutters [Cooper-test](/cooper-test/), men den 3 minutter længere varighed dæmper effekten af den anaerobe slutspurt og giver et mere rent aerob iltoptagelsesestimat.

### Protokol for 15-minutters felt-test
1. Start med en grundig 3-faset RAMP-opvarmning.
2. Løb eller gå så langt som overhovedet muligt på **nøjagtigt 15 minutter**.
3. Registrer den samlede tilbagelagte distance i meter ($D$).
4. Indsæt distancen i Horwill-formlen ovenfor for at beregne dit kondital.

---

### Formel for Balke 15-minutters Felt-test
Ved udendørs 15-minutters løbetest beregnes iltoptagelsen ud fra den samlede tilbagelagte distance $D$ i meter. Formlen er udviklet af Frank Horwill (1994) og tager udgangspunkt i løberens gennemsnitshastighed pr. minut.

**Formel for 15-minutters felt-test (Horwill, 1994):**

$$\text{VO}_2\max = \left(\left(\frac{D}{15} - 133\right) \cdot 0{,}172\right) + 33{,}3$$

*Hvor $D$ er distancen i meter.*

> **Eksempel (Felt-test):**  
> Løber du $3.200 \text{ meter}$ på 15 minutter:  
> $$\text{Gennemsnitshastighed} = \frac{3200}{15} = 213{,}33 \text{ m/min}$$  
> $$\text{VO}_2\max = ((213{,}33 - 133) \cdot 0{,}172) + 33{,}3 = (80{,}33 \cdot 0{,}172) + 33{,}3 = 47{,}1 \text{ ml/kg/min}$$

---

## Opvarmning før Balke-testen

For at opnå et pålideligt resultat er det afgørende at tilpasse din opvarmning til testformen:

* **Ved submaksimal løbebåndstest (afbrudt ved 85% HRmax):** Hold opvarmningen minimal. Lav 3–5 minutters let gang ved $3–4 \text{ km/t}$ ved $0\,\%$ hældning. Undgå stigningsløb og pulstoppe, da kardiovaskulært drift vil give en kunstigt høj puls og underestimere dit beregnede kondital.
* **Ved maksimal test til udmattelse / 15-min felt-test:** Følg en [RAMP-opvarmningsprotokol til løb](/opvarmning-loeb/) med 5 minutter let jog, dynamisk mobilitet og 2–3 korte stigningsløb, så iltoptagelsen ($\text{VO}_2$-kinetikken) er aktiveret inden startskuddet.

---

## Normskema: Sammenlign dit resultat

Når du har beregnet dit kondital ($\text{ml O}_2/\text{kg/min}$), kan du placere dit formniveau i normtabellen for mænd og kvinder:

| Kategori | Mænd (20–39 år) | Kvinder (20–39 år) | Mænd (40–59 år) | Kvinder (40–59 år) |
| :--- | :--- | :--- | :--- | :--- |
| **Lav** | $< 35$ | $< 28$ | $< 31$ | $< 24$ |
| **Under middel** | $35 - 43$ | $28 - 34$ | $31 - 38$ | $24 - 30$ |
| **Middel** | $44 - 51$ | $35 - 43$ | $39 - 46$ | $31 - 37$ |
| **Høj** | $52 - 56$ | $44 - 48$ | $47 - 51$ | $38 - 42$ |
| **Meget høj** | $> 56$ | $> 48$ | $> 51$ | $> 42$ |

👉 *Se den fulde fysiologiske aldersopdelte skala i vores [komplette kondital-tabel](/kondital/)*.

---

## Sammenligning: Balke vs. Cooper vs. Bruce

De mest anvendte indirekte konditionstests adskiller sig markant på intensitet og teststruktur:

| Test | Modalitet | Belastningsændring | Typisk varighed | Primære målgruppe |
| :--- | :--- | :--- | :--- | :--- |
| **Balke Løbebånd** | Gang / Løb | Fast fart • +1% hældning/min | 10–20 min | Klinisk, utrænede, motionister |
| **Bruce Protokol** | Løbebånd | Fast trin • +Hældning & +Hastighed/3 min | 6–15 min | Raske voksne & atleter |
| **Cooper Test** | Løb (Felt) | Fri tempodisponering på flad rute | 12 min | Motionister & militær |
| **6-Minutters Gang** | Gang (Felt) | Selvvagt gangtempo | 6 min | KOL, hjertepatienter, ældre |

---

## Ofte stillede spørgsmål om Balke-testen

{% include motionsplan/faq.html %}

<details markdown="1" class="references">
  <summary><h2 id="references">Referencer</h2></summary>

- Balke, B., & Ware, R. W. (1959). An experimental study of physical fitness of Air Force personnel. *US Armed Forces Medical Journal*, 10(6), 675–688.
- Pollock, M. L., et al. (1976). Comparative analysis of physiological responses to three different treadmill exercise protocols in healthy males. *American Heart Journal*, 92(1), 39–46.
- Pollock, M. L., et al. (1982). Comparative analysis of physiological responses to treadmill and bicycle ergometer exercise in women. *Medicine & Science in Sports & Exercise*, 14(1), 52–58.
- Horwill, F. (1994). *Testing Aerobic Fitness: The 15-Minute Run Test*. Athletics Weekly.
- American College of Sports Medicine. (2021). *ACSM's Guidelines for Exercise Testing and Prescription* (11th ed.). Lippincott Williams & Wilkins.
</details>