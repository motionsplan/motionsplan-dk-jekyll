---
title: "Håndbold-agility-testen: Baneopstilling, Protokol & Agility"
seo_title: "Håndbold Agility Test: Guide til Baneopstilling & Protokol"
excerpt: "Komplet guide til Håndbold-agility-testen. Lær hvordan du opstiller banen, udfører testen korrekt, sikrer høj reproducerbarhed og måler spilspecifik agility."
permalink: /haandbold-agility-test/
language: da
categories:
  - Retningskifttests
tags:
  - test
  - agilitytest
  - retningsskift
  - agility
  - cod
last_modified_at: 2026-08-06T21:30:00Z
# TESTS / PROTOKOLLER
tests:
  - id: "test-haandbold-agility-test"
    title: "Håndbold-agility-test"
    description: "Standardiseret spilspecifik felt-test foran målfeltet (målstolper, 4m målmandskegle og 7m linje) til måling af håndbold-agility, retningsskifthastighed (CODS) og anaerob effekt."
    category: ["Håndbold", "Løb", "Tests"]
    type: ["Protokol", "Agilitetstest"]
    execution: ["Fysisk"]                  # 🤾‍♂️ FYSISK TEST: Kræver eksplosivt løb, forflytninger og stolpeberøringer
    method: "indirekte"                     # 📊 Indirekte måling af håndbold-agility og anaerob effekt via tidtagning
    modality: ["Løb", "Håndbold"]
    measures: ["Håndbold-agility", "Håndbold-agility tid (s)", "Retningsskifthastighed (CODS)", "Anaerob effekt"]  # 🎯 KUN rene præstationsmæssige slutmål
    equipment: ["Håndboldmål", "Markeringskegler", "Stopure (3 stk)", "Målfelt / Håndboldbane"]
    setting: ["Indendørs", "Idrætshal", "Testcenter", "Individuel"]
    target_group: ["Håndboldspillere", "Holdatleter", "Atleter", "Motionister", "Mænd", "Kvinder"]
    related_tools:
      - "tool-haandbold-agility-test-timer"

# INTERAKTIVE SOFTWARE-VÆRKTØJER
tools:
  - id: "tool-haandbold-agility-test-timer"
    title: "Håndbold-agility-test Interaktiv Timer"
    description: "Interaktiv timer og beregningsmodul til registrering og vurdering af Håndbold-agility-testen."
    category: ["Håndbold", "Beregnere", "Tests"]
    type: ["Timer", "Beregner"]
    measures: ["Håndbold-agility tid (s)", "Retningsskifthastighed (CODS)", "Anaerob effekt"]  # 🎯 KUN rene slutmål
    anchor: "#calculator"
    category_schema: "HealthAndFitnessApplication"
---

> **Kort om Håndbold-agility-testen:** Håndbold-agility-testen er en specifik felt-test udviklet til at undersøge en atlets hurtighed, anaerobe effekt samt evne til at koordinere bevægelser og foretage effektive retningsskift i et håndboldspecifikt bevægelsesmønster.

I moderne håndbold stilles der enorme krav til spillernes evne til hurtigt at accelerere, decelerere, flytte sig sidelæns og skifte retning på et lille areal foran målfeltet. Hvor klassiske agility-tests (som fx *Illinois Agility Test*) benytter lange lineære løb med runding af kegler, efterligner **Håndbold-agility-testen** de korte, eksplosive mønstre, som forsvars- og angrebsspillere udfører omkring 6-meter linjen.

---

## Formål og Validitet

Håndbold-agility-testen måler atletens funktionelle agility og anaerobe effekt. Testen evaluerer specifikt:

* **Retningsskiftehurtighed (Change of Direction Speed):** Evnen til hurtigt at stoppe op og skifte bevægelsesretning.
* **Bevægelseskoordination:** Præcis placering af fødder og krop under hurtige forflytninger.
* **Anaerob effekt:** Evnen til at levere maksimal muskelkraft i korte, eksplosive sekvenser.

### Validitet
Testen anses for at være en anerkendt og valid metode til måling af anaerob effekt og agility. Selvom den oprindeligt er udviklet til håndboldspillere med håndboldspecifikke bevægelser, kan testen med stor fordel anvendes på andre målgrupper og idrætsgrene, hvor lignende bevægelser omkring et felt forekommer (fx basketball).

---

## Udstyr og Opstilling

{% include video provider="youtube" id="s__BEjYspK8" %}

Testen kræver et absolut minimum af udstyr og kan hurtigt etableres på enhver standard håndboldbane.

### Nødvendigt udstyr:
* **Håndboldbane og håndboldmål:** Standard banemål.
* **Kegler:** Markeringskegler til start, målmandslinje og mållinje.
* **Stopure:** Tre analoge eller digitale stopure til præcis tidtagning.

### Opstilling af banen:
Opstillingen tager udgangspunkt i målfeltet ved et af håndboldbanens mål:

1. **Startkegle:** Placeres i skæringspunktet, hvor målfeltlinjen (6-meter linjen) krydser baglinjen.
2. **Målmandskegle (Rød kegle):** Placeres på målmandsstraffelinjen (4-meter linjen) midt for målet.
3. **Mållinje:** Markeres med kegler ved 7-meter straffekastlinjen.
4. **Tidstagere:** Placeres ud for 7-meter linjen med frit udsyn til både startkegle og mållinje.

---

## Testprotokol (Skridt for skridt)

For at sikre korrekte og sammenlignelige testresultater skal protokollen følges nøje.

### Forberedelse
* Testpersonen udfører en grundig, standardiseret opvarmning, før testen igangsættes.

### Afvikling af løberækkefølgen
1. **Udgangsstilling:** Testpersonen stiller sig ved startkeglen og placerer den ene hånd på keglen.
2. **Start:** Tiden startes i samme øjeblik, som testpersonens hånd slipper startkeglen.
3. **Trin 1:** Testpersonen løber ind og rører ved den nærmeste målstolpe.
4. **Trin 2:** Løber frem mod banen og rører den røde kegle placeret ved målmandslinjen (4-meter linjen).
5. **Trin 3:** Løber tilbage og rører den samme målstolpe igen.
6. **Trin 4:** Løber tværs over målfeltet og rører den modsatte (anden) målstolpe.
7. **Trin 5:** Løber igen frem mod banen og rører den røde kegle på målmandslinjen.
8. **Trin 6:** Løber tilbage og rører den anden målstolpe endnu en gang.
9. **Målgang:** Testpersonen tager en afsluttende sprint fremad og passerer 7-meter straffelinjen, hvor uret stoppes.

---

### Tidtagning og afvikling

For at opnå maksimal præcision i målingen anvendes en særlig tidtagningsprocedure:

* **Tre tidstagere:** Tre personer tager tid uafhængigt af hinanden med hver sit stopur.
* **Start og stop:** Alle ure startes, når startkeglen slippes, og stoppes, når testpersonens krop passerer 7-meter linjen.
* **Registrering af tid:** Den *midterste tid* af de tre stopure noteres som gældende resultat for forsøget.

### Forsøg og pauser
* Testpersonen har som udgangspunkt **tre forsøg**.
* Der skal være **3–5 minutters pause** mellem hvert forsøg for at sikre fuld anaerob restitution.
* Hvis det 3. forsøg er det bedste, tildeles testpersonen ekstra forsøg, indtil der ikke længere opnås en tidsmæssig forbedring.
* Den hurtigste/bedste tid noteres som det endelige testresultat.

---

## Timer til håndbold agility testen
{: id="calculator" }

{% include components/hb-agility-test.html %}

---

## Reproducerbarhed og fejlkilder

For at testen skal have høj **reproducerbarhed** (test-retest reliabilitet), er det helt afgørende, at testbetingelserne er identiske fra gang til gang:

1. **Standardiseret opvarmning:** Opvarmningen skal være fuldstændig ensartet ved både før- og eftertesting. Det anbefales at udarbejde et fast opvarmningsprogram, der følges hver gang.
2. **Præcis berøring:** Testlederen skal sikre, at atleten reelt rører stolper og kegler på hver sekvens. Manglende berøring bør medføre diskvalifikation af forsøget.
3. **Underlag og fodtøj:** Testen bør altid udføres i samme hal og med samme type indendørssko for at minimere forskelle i friktion mod gulvet.

---

<div class="notice--info" markdown="1">

**Relaterede agility- og hurtighedstests**  

* **[Illinois Agility Test](/illinois-agility-test/):** Klassisk agilitytest med kegleslalom over længere distancer.  
* **[10m & 30m Sprinttest](/tests/sprint/):** Måling af lineær startacceleration og maksimal tophastighed.  
* **[30-15 Intermittent Fitness Test](/30-15-intermittent-fitness-test/):** Intervalløbestest med indbyggede retningsskift til holdidræt.
</div>

---

<details markdown="1" class="references">
  <summary><h2 id="references">Referencer</h2></summary>

- **Gyldendal / Din Idræt C.** *Håndbold-agility-testen (Øvelses- og testkatalog)*, side 23–24. Illustration af Jørgen Strunge.

</div>