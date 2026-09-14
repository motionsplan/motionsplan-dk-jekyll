---
title: "1-Minut Ramp Test på Cykel: Test din FTP på 15 minutter"
seo_title: "Ramp Test Cykel: Beregn FTP & VO2max (1-minuts MAP test)"
permalink: /ramptest-cykel/
description: "Tag den populære 1-minuts ramp-test (Zwift/MAP format) på din hometrainer. Interaktiv timer og beregner til præcis estimering af FTP og VO2max."
excerpt: "Ramp-testen med 1-minuts trin er den hurtigste og mest skånsomme måde at finde din FTP på. Testen køres i ERG-mode til udmattelse uden behov for pacing."
language: da
categories:
  - Cykling
  - Cykeltests
tags:
  - test
  - cykeltest
  - ftp
  - ramptest
  - hometrainer
last_modified_at: 2026-09-13T23:00:00Z
toc: true

# TESTS / PROTOKOLLER
tests:
  - id: "test-ramptest-1min-cykeltest"
    title: "1-Minut Ramp Test / MAP Test (Cykel)"
    description: "Moderne 1-minuts ramptest (Zwift/MAP-format) på hometrainer med trinvist stigende belastning (+20 W / 1 min) til hurtig estimering af FTP og VO2max."
    category: ["Tests", "Cykling", "Kondition"]
    type: ["Protokol", "Konditionstest"]
    execution: ["Fysisk"]
    method: "indirekte"
    modality: ["Cykling"]
    measures: ["FTP", "Peak Power Output (PPO)", "VO2max", "Kondital"]
    equipment: ["Hometrainer", "Wattmåler", "Ergometercykel"]
    setting: ["Indendørs", "Hjemmetest", "Individuel"]
    target_group: ["Motionister", "Cykelryttere", "Zwift-ryttere"]
    related_tools: ["tool-ramptest-1min-beregner"]
    icon: "⚡"
    badge: "1-Min Ramp"
    unit: "Watt"
    storage_key: "ramp_1min_bike"
    allow_quick_log: false

# INTERAKTIVE SOFTWARE-VÆRKTOWJER
tools:
  - id: "tool-ramptest-1min-beregner"
    title: "1-Minut Ramp Test Beregner & Live Timer"
    description: "Interaktiv 1-minuts ramptest-timer (+20 W/min) med automatisk PPO-, FTP- (75%) og VO2max-beregning."
    category: ["Cykling", "Kondition"]
    type: ["Beregner", "Timer"]
    execution: ["Testberegner"]
    anchor: "#calculator"
    category_schema: "HealthAndFitnessApplication"
---

**1-minuts ramp-testen** (også kendt som en *Maximal Aerobic Power* eller *MAP-test*) er den mest udbredte testmetode i moderne cykel-apps som Zwift, TrainerRoad og Wahoo SYSTM. 

I modsætning til en traditionel [20-minutters FTP-test](/ftp-test/), hvor du selv skal styre dit tempo, eliminerer ramp-testen al usikkerhed omkring pacing. Belastningen øges automatisk hvert minut, indtil din kadence falder og benene knækker.

[<i class='fas fa-calculator'></i> Hop direkte til Live Timer & Beregner](#calculator){: .btn .btn--success .btn--jump }

---

## Hvad er fysiologien bag 1-minuts ramp-testen?

Når du kører en ramp-test, øges modstanden trinvis med en fast stigningstakt (typisk 20 watt i minuttet). Testen måler din **Peak Power Output (PPO)** – det vil sige den maksimale watt-ydelse, dit iltoptagelsessystem kan understøtte under et trinvist stigende arbejde.

* **75 %-faktoren fra MAP til FTP:** Træningsfysiologiske studier (bl.a. Kuipers et al., 1985; Bentley et al., 2007) viser, at den udholdenhedseffekt, en cykelrytter fysiologisk kan opretholde over en hel time ved mælkesyregrænsen ($FTP$), korrelerer stærkt med **72–77 %** af den opnåede spidseffekt ved en hurtig ramptest.
* **Mindre mental udmattelse:** Hvor en 20-minutters test kræver op mod 15 minutter i det tunge syreområde, tilbringer du ved en ramp-test kun de sidste 2–3 minutter ved din maksimale iltoptagelse ($VO_2\max$).

---

## Sådan udfører du testen trin-for-trin

1. **Brug ERG-mode:** Kobl din wattmåler eller smart hometrainer til vores interaktive timer herunder (eller kør den i din cykel-app).
2. **Startbelastning:** Læg ud ved en beskeden belastning (fx 100 watt for mænd, 75 watt for kvinder) som en glidende overgang fra din opvarmning.
3. **Konstant kadence:** Vælg en behagelig kadence (fx 85–95 RPM) og hold den helt stabil gennem hele testen.
4. **Sid i sadlen til udmattelse:** Når modstanden øges hvert 60. sekund, fortsætter du, indtil du fysisk ikke kan træde trådet rundt mere. 

> 💡 **Tip til et retvisende resultat:** Bliv siddende ned gennem hele testen. Hvis du rejser dig i sadlen på det sidste trin, bruger du overkroppen til at generere kortvarig anaerob effekt, hvilket skævvrider beregningen af din aerobe tærskel.

---

## 1-Minut Ramp Test Live Timer & Beregner
{: id="calculator" }

{% include components/trappetest-cykel-timer.html protocol="zwift" start_watt=100 %}

---

## Fordele og begrænsninger ved 1-minuts testen

Selvom 1-minuts ramp-testen er utroligt populær og nem at udføre, er det vigtigt at kende dens fysiologiske styrker og svagheder:

### Fordele
* **Nul pacing-fejl:** Du skal hverken tænke over om du lægger for hårdt eller for blødt ud.
* **Hurtig restitution:** Da den fysiske udmattelsesfase er meget kort, kan du genoptage normal træning allerede dagen efter.
* **Høj reproducerbarhed:** Testen er ideel at køre hver 4.–6. uge til løbende justering af dine træningszoner.

### Begrænsninger
* **Ryttere med stor anaerob kapacitet:** Ryttere med en meget eksplosiv profil eller høj anaerob arbejds-kapacitet ($W'$) kan "puncher-køre" sig igennem 1–2 ekstra trin på ren viljestyrke, hvilket kan føre til en lille overestimering af FTP.
* **Udholdenhedsryttere ("Dieseltyper"):** Ekstremt seje langdistance-ryttere har nogle gange en relativt lavere peak-power i forhold til deres tærskel, hvorfor testen i sjældne tilfælde kan underestimere deres 1-times power en smule.

## Alternativer til ramp-testen

Der er flere andre måder at teste din FTP på end rampetesten. Tjek vores andre [ftp-tests](/ftp-test/).

---

<details markdown="1" class="references">
  <summary><h2 id="references">Referencer</h2></summary>

- Allen, H., & Coggan, A. R. (2010). *Training and racing with a power meter* (2nd ed.). VeloPress.
- Bentley, D. J., Newell, J., & Cox, G. R. (2007). Incremental Exercise Test Design and Analysis: Physiological and Exercise Performance Implications. *Sports Medicine*, 37(7), 575–586. <https://doi.org/10.2165/00007256-200737070-00002>
- Hawley, J. A., & Noakes, T. D. (1992). Peak power output predicts maximal oxygen uptake and performance time in trained cyclists. *European Journal of Applied Physiology and Occupational Physiology*, 65(1), 79–83. <https://doi.org/10.1007/BF01466278>
- Kuipers, H., Verstappen, F. T., Keizer, H. A., Geurten, P., & van Kranenburg, G. (1985). Variability of aerobic performance in the laboratory and its capacity to predict cycling performance. *International Journal of Sports Medicine*, 6(4), 197–201. <https://doi.org/10.1055/s-2008-1025839>
</details>