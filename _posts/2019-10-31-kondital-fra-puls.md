---
title: Find dit kondital ud fra din puls 💗
seo_title: "Kondital ud fra puls: Beregn VO2max fra hvilepuls og maxpuls"
excerpt: Beregn dit kondital lynhurtigt uden udmattende løbetests. Med Uths formel skal du kun bruge din hvilepuls og maxpuls for at estimere din iltoptagelse.
seo_description: Beregn dit estimerede kondital (VO2max) udelukkende ud fra din hvilepuls og maxpuls. Test Uths anerkendte formel direkte i beregneren her.
permalink: /kondital-fra-puls/
redirect_from:
- /kondition-fra-puls/
language: da
header:
  overlay_image: /assets/images/unsplash/photo-1517867065801-e20f409696b0.jpg
  credit: https://images.unsplash.com/photo-1517867065801-e20f409696b0
  teaser: /assets/images/unsplash/photo-1517867065801-e20f409696b0.jpg
  caption: Find dit kondital ud fra din puls 💗
  actions:
  - label: <i class='fas fa-calculator'></i> Hop til beregneren →
    url: '#calculator'
categories:
- Kondition
- Konditionstests
meta:
  name: "Kondital ud fra puls"
  measures: "kondital"
  type: "beregner"
  equipment: "pulsbaelte"
  intensity: "ingen"
  method: "formel"
# TESTS / PROTOKOLLER
tests:
  - id: "uth-heart-rate-ratio"
    title: "Kondital ud fra Puls (Uth's Formel)"
    description: "Indirekte test til estimering af VO2max og kondital ud fra forholdet mellem maxpuls og hvilepuls (Heart Rate Ratio Method)."
    category: ["Kondition"]
    type: ["Protokol", "Konditionstest"]
    execution: ["Sofatest"]
    method: "formel"                    # 🧮 Ren matematisk formel: (HRmax / HRrest) * 15.3 / 14.5
    modality: ["Puls"]
    measures: ["Kondital", "VO2max", "Iltoptagelse"]
    equipment: ["Pulsmåler", "Pulsbælte"]
    setting: ["Hjemmetest", "Sofatest", "Individuel"]
    target_group: ["Unge", "Voksne", "Mænd", "Kvinder"]
    related_tools: ["tool-uth-puls-beregner"]
    icon: "🫀"
    badge: "Kondition"
    unit: "ml/kg/min"
    storage_key: "vo2max_maxhr_uth"
    allow_quick_log: true

# INTERAKTIVE SOFTWARE-VÆRKTØJER
tools:
  - id: "tool-uth-puls-beregner"
    title: "Kondital Beregner ud fra Puls (Uths Formel)"
    description: "Beregn dit estimerede kondital (VO2max) ud fra forholdet mellem din hvilepuls og din maxpuls baseret på Uth et al. formlen."
    category: ["Kondition"]
    type: ["Beregner"]
    execution: ["Testberegner"]
    anchor: "#calculator"
    category_schema: "HealthAndFitnessApplication"
tags:
- test
- konditionstest
- indirekte test
- tracking
- beregner
last_modified_at: '2026-09-13T14:50:00Z'
toc: 'true'
breadcrumbs: 'true'
---

Du kan estimere dit kondital kun ved hjælp af din puls med denne anerkendte metode fra danske forskere. Det bliver næsten ikke lettere.

Det kan normalt være både hårdt og besværligt at lave en fuld [konditionstest](/konditionstests/), men forskerne [Uth et al. (2004)](https://doi.org/10.1007/s00421-003-0988-y) har udviklet en formel (*The Heart Rate Ratio Method*), hvor du slipper for udmattende løb eller cykling. 

Alt du skal bruge, er to tal: Din **hvilepuls** og din **maxpuls**.

[<i class='fas fa-calculator'></i> Hop direkte til beregneren](#calculator){: .btn .btn--success .btn--jump }

## Baggrund for formlen

Formlens præmis er enkel: Når du kommer i bedre form, falder din hvilepuls, fordi hjertets slagvolumen øges (hjertet pumper mere blod pr. slag og behøver derfor færre slag i hvile). 

Testen bygger derfor på den fysiologiske forudsætning, at **jo større afstand der er mellem din hvilepuls og din maksimale puls, desto større sandsynlighed er der for, at du har en høj maksimal iltoptagelse (VO₂max)**. 

## Det skal du bruge for at beregne konditallet fra pulsen

For at formlen bliver så præcis som mulig, kræver det naturligvis, at du kender dine pulsværdier ret præcist.

### 1. Måling af hvilepulsen
Det bedste tidspunkt at måle hvilepulsen er lige før, du står op om morgenen. Hvis du ikke har mulighed for det, kan du lægge dig ned og hvile fuldstændig afslappet i 5-10 minutter og derefter tage pulsen. Hold et ubesværet åndedræt.

Som tommelfingerregel ser normale hvilepuls-værdier for voksne ca. sådan her ud:

| Niveau | Hvilepuls (slag/min) |
|-------------------|----------:|
| Meget lav (ofte konditionsstærk atlet) | < 50 |
| Lav / God form | 50 - 60 |
| Normal hvilepuls | 60 - 80 |
| Forhøjet hvilepuls | > 80 |

*Læs meget mere i vores dybdegående guide til [hvordan du måler og forstår din hvilepuls](/hvilepuls/).*

### 2. Måling af maxpulsen
For at finde din maksimale puls, skal du presse dit hjerte til det yderste. Det gøres bedst ved at varme grundigt op, løbe i et jævnt og forholdsvis højt tempo i 2 minutter, efterfulgt af 20 sekunders sprint. Herefter lunter du i 30-45 sekunder, og gentager proceduren to gange mere. Efter den sidste hårde sprint vil du kunne aflæse din maxpuls på dit pulsur.
{: .notice .notice--success }

Kender du ikke din maxpuls, kan beregneren herunder automatisk estimere den for dig baseret på din alder (Tanaka-formlen), men vær opmærksom på, at dette gør kondital-estimatet mindre præcist. Du kan læse mere om [hvordan du tester din maxpuls i praksis her](/test-max-puls/).

## Udregn dit kondital på baggrund af hvilepuls og maxpuls
{: id="calculator" }

Indtast dine værdier herunder. Har du ikke testet din maxpuls, kan du trykke på den lille tryllestav (🪄) for at lade beregneren estimere den ud fra din alder.

{% include calc/vo2max-maxpuls-uth.html %}

*(Når du har beregnet dit resultat, kan du læse meget mere om, hvad et godt resultat er, i vores [store artikel om kondital og normer](/kondital/)).*

## Formlen bag beregneren (og forskellen på mænd og kvinder)

Den oprindelige formel fra Uth et al. (2004) blev valideret på en gruppe veltrænede mænd. Året efter opdaterede Niels Uth dog metoden i et nyt studie for også at inkludere en mere præcis faktor for kvinder, da kvinder gennemsnitligt har en lidt lavere kropssammensætning ift. iltoptagelse.

Formlen ser således ud:

**For mænd:**
$$
\text{Kondital} = \frac{\text{maxpuls}}{\text{hvilepuls}} \times 15{,}3
$$

**For kvinder (Uth 2005):**
$$
\text{Kondital} = \frac{\text{maxpuls}}{\text{hvilepuls}} \times 14{,}5
$$

For at finde din absolutte iltoptagelse (VO₂max i Liter/minut) ganges konditallet med din kropsvægt i kilo, hvorefter der divideres med 1000.

$$
\text{VO}_2\text{max (L/min)} = \frac{\text{kondital} \times \text{kropsvægt}}{1000}
$$

## Hvor præcis er formlen? (Validitet)

Uths formel er en elegant og lynhurtig rettesnor, men det er vigtigt at huske, at hjertefrekvens-ratio-metoden (HRRM) giver et *estimat*.

**Fra laboratoriepræcision til den brede befolkning**
I det oprindelige studie fra 2004 fandt Niels Uth et al. en høj korrelation ($r = 0{,}97$) og en relativt lav usikkerhed ($\text{SEE} = 4{,}9\text{ ml/kg/min}$). Testpersonerne i dette studie var dog en meget homogen gruppe af veltrænede mænd i alderen 20–50 år. I 2005 validerede forskergruppen formlen for kvinder.

Nyere valideringsstudier (bl.a. *Voutilainen et al. 2020* samt *Castagna et al. 2022*) har undersøgt formlens præcision i mere diverse befolkningsgrupper, hvilket har givet følgende indsigter:

* **Lavere korrelation i brede grupper:** I den brede befolkning, blandt midaldrende og hos almindelige motionister falder korrelationen typisk til $r = 0{,}40\text{--}0{,}70$, mens usikkerheden (standardfejlen) stiger til omkring $5\text{--}10\text{ ml/kg/min}$.
* **Alder, BMI og livsstil ændrer faktoren:** Proportionalitetsfaktoren (15,3 for mænd / 14,5 for kvinder) antager et fast forhold mellem hvilepuls og maksimal iltoptagelse. *Voutilainen et al. (2020)* viste dog, at faktoren falder med alderen, et højt BMI og rygning. For f.eks. en 60-årig overvægtig ryger kan den mest præcise faktor i virkeligheden være helt nede omkring 10.
* **Systematisk bias i yderpunkterne:** Formlen har en klar tendens til at **overestimere** konditallet hos utrænede eller svært overvægtige, mens den omvendt kan **underestimere** konditallet hos absolutte elite-udholdenhedsatleter med ekstremt stort slagvolumen.
* **Usikkerhed ved estimeret maxpuls:** Hvis du ikke har testet din reelle maxpuls, men lader beregneren estimere den ud fra din alder, tilføjes der et ekstra usikkerhedslag på $\pm 7\text{--}10\text{ slag/min}$.

**Konklusion på præcisionen**
Selvom det absolutte tal kan afvige med $5\text{--}10\%$ fra et laboratorieresultat, er metoden fremragende til **relativ sporing af egen form**. Da din maxpuls er stort set konstant i samme aldersperiode, vil et fald i hvilepuls (som følge af god træning) direkte slå igennem i beregneren og vise din fremgang over tid.

<details markdown="1" class="references">
  <summary><h2 id="references">Referencer</h2></summary>

- Uth, Niels, Henrik Sørensen, Kristian Overgaard, og Preben K. Pedersen. 2004. “Estimation of VO2max from the Ratio between HRmax and HRrest--the Heart Rate Ratio Method”. *European Journal of Applied Physiology* 91 (1): 111–15. <https://doi.org/10.1007/s00421-003-0988-y>.
- Uth, Niels. 2005. “VO2max estimation from the ratio between heart rate at maximal exercise and heart rate at rest”. *International Journal of Sports Medicine*.
- Tanaka, H., K. D. Monahan, og D. R. Seals. 2001. “Age-Predicted Maximal Heart Rate Revisited”. *Journal of the American College of Cardiology* 37 (1): 153–56. <https://doi.org/10.1016/s0735-1097(00)01054-8>.
- Voutilainen, Ari, Mounir Ould Setti, og Tomi-Pekka Tuomainen. 2020. “Estimating Maximal Oxygen Uptake from the Ratio of Heart Rate at Maximal Exercise to Heart Rate at Rest in Middle-Aged Men”. *The World Journal of Men's Health* 38 (4): 666–72. <https://doi.org/10.5534/wjmh.200055>.
</details>