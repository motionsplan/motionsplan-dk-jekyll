---
title: &title "Bruce løbetest: Mål dit kondital på løbebånd (Bruce-protokollen)"
seo_title: "Bruce Test på Løbebånd – Guide, Formler og Beregner"
description: "Den komplette guide til Bruce løbetesten på løbebånd. Se de officielle trinniveauer, formler for mænd og kvinder samt beregn dit kondital (VO2-max)."
permalink: /bruce-test/
excerpt: "Bruce-test på løbebånd er en maksimal belastningstest, der måler dit kondital ud fra tid, hastighed og stigende hældning (op til 22%)."
language: da
header:
  overlay_image: /assets/images/i.ytimg.com/maxresdefault-3704e256.jpg
  credit: https://i.ytimg.com/vi/AQzjKh6E8zU/maxresdefault.jpg
  teaser: /assets/images/i.ytimg.com/maxresdefault-3704e256.jpg
  credit: https://i.ytimg.com/vi/AQzjKh6E8zU/maxresdefault.jpg
  caption: *title
category:
  - Kondition
  - Konditionstests
meta:
  name: Bruce løbetest på løbebånd
  measures: kondital
  type: løbetest
  equipment: løbebånd
  max: maksimal test
  direct: indirekte test
# TESTS / PROTOKOLLER
tests:
  - id: "test-bruce-test"
    title: "Bruce Løbetest (Løbebånd)"
    description: "Maksimal udmattelsestest på løbebånd med gradvist stigende hastighed og hældning (op til 22%) til estimering af VO2max ud fra samlet gennemført tid."
    category: ["Kondition", "Løb"]        # 💡 Søgbar under BÅDE Kondition og Løb i test-databasen
    type: ["Protokol", "Konditionstest"]
    execution: ["Fysisk"]
    method: "indirekte"                  # 🧮 Indirekte test: Måler samlet udholdenhedstid på løbebånd for at beregne VO2max
    modality: ["Løb", "Løbebånd"]
    measures: ["Kondital", "VO2max", "Iltoptagelse"]
    equipment: ["Løbebånd", "Stopur"]
    setting: ["Fitnesscenter", "Laboratorietest", "Individuel"]
    target_group: ["Unge", "Voksne", "Mænd", "Kvinder"]
    related_tools: ["tool-bruce-test-beregner", "tool-bruce-test-timer"]

# INTERAKTIVE SOFTWARE-VÆRKTØJER
tools:
  - id: "tool-bruce-test-beregner"
    title: "Bruce Test Kondital Beregner"
    description: "Beregn dit kondital (VO2max) ud fra din samlede tid i Bruce-protokollen på løbebånd."
    category: ["Kondition"]
    type: ["Beregner"]
    execution: ["Testberegner"]
    anchor: "#calculator"
    category_schema: "HealthAndFitnessApplication"

  - id: "tool-bruce-test-timer"
    title: "Bruce Test Protocol Timer"
    description: "Interaktiv 3-minutters intervaltimer til Bruce-testen med skiftesignaler for hastighed og hældning."
    category: ["Kondition"]
    type: ["Timer"]
    execution: ["Timer"]
    anchor: "#timer"
    category_schema: "HealthAndFitnessApplication"
tags:
  - test
  - konditionstest
  - løbebånd
  - maksimal test
  - indirekte test
  - løbetest
  - testberegner
last_modified_at: 2026-07-28T12:00:00Z
toc: true
faq:
  - question: Hvad er Bruce-testen?
    answer: Bruce-testen (Bruce Protocol) er en indirekte, maksimal konditionstest på løbebånd. Testen øger hastigheden og hældningen hvert 3. minut, indtil udøveren er maksimalt udmattet. Sluttiden bruges til at beregne udøverens kondital (VO2-max).
  - question: Hvor lang tid tager en Bruce løbetest?
    answer: En typisk Bruce-test varer mellem 9 og 15 minutter for trænede personer. Testen stopper automatisk, når du ikke længere kan følge løbebåndets tempo eller hældning.
  - question: Hvad hvis mit løbebånd ikke kan nå 22% i hældning?
    answer: Mange almindelige motionscentre har løbebånd, der kun går op til 15% hældning. Hvis dit løbebånd ikke kan indstilles til de krævede hældninger, bør du i stedet vælge en af vores andre løbetests.
  - question: Kræver Bruce-testen pulsmåler?
    answer: Nej, den klassiske Bruce-test kræver hverken pulsbælte eller iltmaske. Konditallet beregnes udelukkende ud fra den samlede tid, du holder ud på løbebåndet.
feature_row:
  - image_path: https://imgcdn.saxo.com/_9781469825885/0x500
    alt: "ACSM's Guidelines for Exercise Testing and Prescription"
    title: "ACSM's Guidelines for Exercise Testing and Prescription"
    excerpt: "The flagship title of the certification suite from the American College of Sports Medicine, ACSM's Guidelines for Exercise Testing and Prescription is a handbook that delivers scientifically based standards on exercise testing and prescription to the certification candidate, the professional, and the student. The 9th edition focuses on evidence-based recommendations that reflect the latest research and clinical information."
    url: "https://www.partner-ads.com/dk/klikbanner.php?partnerid=28187&bannerid=43264&htmlurl=https://www.saxo.com/dk/acsms-guidelines-for-exercise-testing-and-prescription_american-college-of-sports-medicine_epub_9781469825885?gclid=CjwKCAiA5JnuBRA-EiwA-0ggPdXHFExjFsqJLnGbAfydZFfXbHNc8LCSWFplRzuKmJ9vjX1Z3A8TfRoCzqgQAvD_BwE"
    btn_label: "Tjek prisen"
    btn_class: "btn--success"
    rel: sponsored nofollow noopener
breadcrumbs: true
---

**Bruce-testen** (også kendt som *Bruce Protocol Treadmill Test*) er en af verdens mest velafprøvede og anerkendte felt-test til beregning af dit kondital ($\text{VO}_2\text{max}$) på et løbebånd. 

Testen kræver hverken pulsmåler, iltmaske eller avanceret laboratorieudstyr – udelukkende et stærkt løbebånd, der kan indstilles til hastigheder og stejle stigninger på op til $22\%$, samt din evne til at yde en **maksimal udmattelsesindsats**.

> **Bemærk:** Søger du en samlet oversigt over alle typer af løbetests (som Coopertest, Yo-Yo test eller 1500m test), kan du se vores [store oversigt over løbetests](/tests/loeb/). Denne artikel omhandler specifikt Bruce-protokollen på løbebånd.

 [<i class='fas fa-clock'></i> Beregner](#calculator){: .btn .btn--success .btn--jump } [<i class='fas fa-clock'></i> Timer](#timer){: .btn .btn--success .btn--jump }

---

## Hvordan fungerer Bruce-protokollen?

Bruce-testen blev oprindeligt udviklet i 1963 af kardiologen Robert A. Bruce som en klinisk test til at diagnosticere hjertesygdomme. I dag benyttes den flittigt af både atleter, militær og motionister til at måle maksimal iltoptagelse.

Testen er opbygget af en række **3-minutters intervaller (trin)**. For hvert 3. minut øges både løbebåndets hastighed og dets hældning automatisk.

```
Trin 1 (2,7 km/t - 10%) ──► Trin 2 (4,0 km/t - 12%) ──► Trin 3 (5,5 km/t - 14%) ──► Udmattelse
[3 minutter]                [3 minutter]                [3 minutter]           [Notér sluttid]
```

Testen fortsætter, indtil du er så udmattet, at du ikke længere kan følge med og må stoppe løbebåndet. Den nøjagtige samlede tid (i minutter og sekunder) indtastes derefter i formlen for at beregne dit kondital.

---

## Trin og Belastningsskema

Inden du starter testen, skal du sikre dig, at dit løbebånd kan håndtere de præcise indstillinger. 

| Trin | Tid (min) | Hastighed (km/t) | Hastighed (mph) | Hældning (%) | Intensitet |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Trin 1** | 0:00 – 3:00 | 2,7 km/t | 1,7 mph | 10% | Hurtig gang |
| **Trin 2** | 3:00 – 6:00 | 4,0 km/t | 2,5 mph | 12% | Stejl gang |
| **Trin 3** | 6:00 – 9:00 | 5,5 km/t | 3,4 mph | 14% | Tung gang / Jog |
| **Trin 4** | 9:00 – 12:00 | 6,8 km/t | 4,2 mph | 16% | Løb mod stigning |
| **Trin 5** | 12:00 – 15:00 | 8,0 km/t | 5,0 mph | 18% | Intensivt bakkeløb |
| **Trin 6** | 15:00 – 18:00 | 8,8 km/t | 5,5 mph | 20% | Eksplosivt bakkeløb |
| **Trin 7** | 18:00 – 21:00 | 9,6 km/t | 6,0 mph | 22% | Maksimal stigning |

> **Vigtigt om løbebåndet:** Nogle motionscentre har løbebånd, der maksimalt kan gå op til 15% i hældning. Hvis dit løbebånd ikke kan nå de nødvendige stigninger, anbefaler vi i stedet at vælge en af vores øvrige [konditionstests](/kondition/tests/).

---

## Testprocedure: Step-by-step

Du kan se en visuel gennemgang af Bruce-testen i videoen herunder:

{% include video provider="youtube" id="oryZbKrRGNI" %}

### Sådan afvikler du testen i praksis:
1. **Opvarmning:** Gå 3–5 minutter på løbebåndet ved flad hældning (0%) og lav hastighed (3–4 km/t).
2. **Start uret:** Indstil løbebåndet til **2,7 km/t og 10% hældning** og start tidtagningen samtidig.
3. **Følg protokollen:** Hvert 3. minut justerer du manuelt (eller automatisk) hastigheden og hældningen i henhold til skemaet ovenfor.
4. **Yd dit maksimale:** Hold ud så længe som muligt. Du må gerne holde let i håndtagene i overgangene, men undgå at hænge i grebene under selve testen, da det reducerer det reelle energiforbrug.
5. **Aflæs tiden:** Stop uret nøjagtigt i det øjeblik, du må stoppe testen på grund af udmattelse. Notér tiden i minutter og sekunder (fx 11 minutter og 45 sekunder).

---

## Timer til Bruce-testen
{: id="timer" }

{% include components/bruce-test-timer.html %}

---

## Formler til Beregning af Kondital ($\text{VO}_2\text{max}$)

For at beregne dit kondital ud fra den opnåede tid ($T$ i minutter), benyttes regneformler baseret på udøverens køn og aktivitetsniveau. 

Sekunderne omregnes til decimaler af et minut (fx er 9 minutter og 30 sekunder $= 9{,}50\text{ minutter}$).

### 1. Generel formel (Begge køn)
Denne generelle formel anvendes ofte som standard i testprogrammer:

$$ \text{VO}_2\text{max} = 14{,}8 - (1{,}379 \cdot T) + (0{,}451 \cdot T^2) - (0{,}012 \cdot T^3) $$

### 2. Kønsspecifikke formler (ACSM)
For mere præcise resultater benytter *American College of Sports Medicine (ACSM)* specifikke formler for henholdsvis mænd og kvinder:

* **Trænede Mænd:**
  $$ \text{VO}_2\text{max} = 14{,}8 - (1{,}379 \cdot T) + (0{,}451 \cdot T^2) - (0{,}012 \cdot T^3) $$
* **Trænede Kvinder:**
  $$ \text{VO}_2\text{max} = 4{,}38 \cdot T - 3{,}9 $$
* **Active / Raske Voksne (Generelt):**
  $$ \text{VO}_2\text{max} = 3{,}62 \cdot T + 3{,}91 $$

Når du har beregnet dit kondital, kan du sammenligne dit resultat med de aldersrelaterede [normtal i vores tabel over kondital for mænd og kvinder](/kondital/).

---

## 🧮 Online Bruce Test Beregner
{: id="calculator"}

Tast din samlede tid fra løbebåndet direkte ind i vores beregner herunder og få dit kondital med det samme:

{% include calculator/calculate-bruce.html %}

---

## Fordele og Ulemper ved Bruce-testen

### Fordele:
* **Ingen avanceret udstyr:** Kræver kun et standard løbebånd og et stopur.
* **Uafhængig af løbeteknik i starten:** Da testen starter ved lav hastighed (2,7 km/t), påvirkes de første faser i ringe grad af god eller dårlig løbeøkonomi.
* **Høj videnskabelig reliabilitet:** Meget veldokumenterede formler og normtal.

### Ulemper:
* **Meget stejl hældning:** Hældninger på over 15–18% belaster lægmuskler og baglår ekstremt hårdt, hvilket for nogle deltagere kan sætte en stopper for testen før kredsløbet er maksimalt belastet.
* **Pludselige hop i belastning:** At gå direkte fra 14% til 16% hældning hvert 3. minut kan føles som et voldsomt trin i intensitet.

---

## FAQ - Ofte Stillede Spørgsmål

{% include motionsplan/faq.html %}

<details markdown="1" class="references">
  <summary><h2 id="references">Referencer & Litteratur</h2></summary>

- **Bruce, R. A., Kusumi, F., & Hosmer, D.** (1973). *Maximal oxygen intake and nomographic assessment of functional aerobic impairment in cardiovascular disease.* American Heart Journal, 85(4), 546–562.
- **American College of Sports Medicine (ACSM).** (2018). *ACSM's Guidelines for Exercise Testing and Prescription (10th ed.).* Lippincott Williams & Wilkins.

{% include feature_row type="left" %}
</details>
