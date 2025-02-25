---
title: ️Liftosaur - app til styrketræning
seo_title: ️Liftosaur - app til styrketræning
permalink: /liftosaur/
description: Liftosaur er en genial app til at lave dit styrketræningsprogram. Du kan let skrive dit program, og efterfølgende bruge det til træningslog.
excerpt: Liftosaur er en genial app til at lave dit styrketræningsprogram. Du kan let skrive dit program, og efterfølgende bruge det til træningslog.
language: da
header:
  teaser: https://images.unsplash.com/photo-1656774950529-44a6153521ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=300&w=400&q=10
  caption: ️Liftosaur - app til styrketræning
category:
  - Styrketræning
tags:
  - styrketræning
last_modified_at: 2024-10-12T10:14:14Z
gallery_program:
  - image_path: /assets/images/liftosaur/liftosaur-choose-program.png
  - image_path: /assets/images/liftosaur/liftosaur-choose-program-start.jpg
  - image_path: /assets/images/liftosaur/liftosaur-choose-program-start-1.png
gallery_rm:
  - image_path: /assets/images/liftosaur/liftosaur-edit-1rm.png
  - image_path: /assets/images/liftosaur/liftosaur-edit-1rm-2.png
  - image_path: /assets/images/liftosaur/liftosaur-edit-1rm-3.png
keywords:
  - Liftosaur
---

**Liftosaur** er en genial app til planlægning af din styrketræning. Du kan let skrive dine egne programmer, få andres programmer eller bruge nogle af standardprogrammerne.

Jeg har i mange år brugt et regneark til at dele træningsprogrammer til mine elever, eller jeg har skrevet dem ned på et stykke papir.

Jeg har længe drømt om, at jeg let kunne skrive en workout i tekstformat, og teksten kan læses af en app og få det til at ligne et godt træningsprogram.

Det kan du delvist gøre med [weightxreps.net](https://weightxreps.net/). Her får du en god [træningslog](https://www.motionsplan.dk/rts-app/). Men den er ikke helt perfekt.

For jeg vil gerne have en app, hvor jeg kan lave et træningsprogram på forhånd.

Og det kan [Liftosaur](https://www.liftosaur.com).

## Opret en profil i Liftosaur

Du kan bruge Liftosaur med og uden konto. Der er masser af fordele i at bruge det sammen med en konto, så appen virker på tværs af dine enheder og på din computer.

## Tjek indstillingerne

Du skal lige ind og tjekke indstillingerne. Jeg foretrækker, at de metriske betegnelser `kg` og `cm`.

![](/assets/images/liftosaur/liftosaur-settings.png)

Så er du faktisk klar til at gå i gang.

## Vælg dit program

Når du har oprettet kontoen, så logger du ind, og du er klar til at gå i gang med et program:

{% include gallery id="gallery_program" %}

Efterhånden som du gennemfører de enkelte workouts, så klikker du bare på sættet.

Hvis du har gjort noget andet i sættet, end der stod, så kan du holde fingeren eller musen nede på selve sættet. Så har du mulighed for at ændre værdierne for sættet.

## Lav dit eget træningsprogram

I Liftosaur kan du lave dit eget træningsprogram, hvor du automatisk kan få indbygget progression. Det er supersmart.

Du kan læse meget mere i [dokumentationen for Liftosaur](https://www.liftosaur.com/docs), men her får du lige det grundlæggende.

Programmer kan enten laves i selve programmet med at klikke sig rundt, eller du kan skrive programmerne i tekst.

Jeg synes det er klart lettest at skrive programmerne i tekst.

Du kommer ind for at redigere det i tekst på denne måde:

![](/assets/images/liftosaur/liftosaur-edit-program-markdown.png)

Her har jeg bare gjort det så du kan se, hvordan det ser ud pr. dag.

![](/assets/images/liftosaur/liftosaur-edit-program-markdown-2.png)

Jeg synes det er lettest at overskue på en computer, så du får lige eksemplerne her:

```javascript
// Spænd op. God dybde. Kontrolleret ned. Eksplosivt op.
Squat / 4x4 @7 / progress: lp(2.5kg, 3)
```

Den første linje er en kommentar, du kommer til at se med øvelsen.

Den næste linje betyder følgende adskilt af skråstregen (/).

- Øvelsen er Squat.
- 4 sæt x 4 gentagelser @ RPE 7 (du vil kunne tage 3 gentagelser flere). Du kan også bruge procent (som så beregner fra din 1RM), eller du kan bare skrive din vægt.
- Progressionen er lineær progression, hvor vægten stiger 2,5 kg, hvis det er lykkes at lave gentagelserne 3 på hinanden følgende træninger.

Læs: [Hvad er RPE i styrketræning?](/rpe/)
{: .notice }

Det er smart.

## Hvordan sætter du din startvægt (1RM)?

Når du laver procentbaserede træningsprogrammer eller baseret på RPE, så har du brug for en startvægt, som dit program udregnes ud fra.

I styrketræning bruger man '1 repetition maximum'. Altså den vægt, du netop kan løfte en gang.

Læs: [Alt om 1 RM med beregner](/rm-beregner/)
{: .notice }

Denne vægt skal du sætte for hver øvelse, hvis tallene skal give mening.

Det er heldigvis let at sætte i Liftosaur.

{% include gallery id="gallery_rm" %}

## Progression i programmet

Når du laver et styrketræningsprogram, så er det godt at tænke en form for progression ind i programmet. 

Læs: [Progressionsmodeller til styrketræning](https://www.motionsplan.dk/progressionsmodeller-progressivt-overload/)
{: .notice }

Det er smart, at du kan indikere progression i de enkelte øvelser direkte i programmet.

Der er indbygget følgende progressioner:

- **lineær progression** (lp). Øg eller sænk vægten efter n antal forsøg.
- **double progression** (dp). Øg gentagelserne inden for interval, nulstil antallet af gentagelser og øg vægten.
- **sum progression** (sum). Øg vægten hvis summen af reps på alle sæt er mere end en tærskelværdi.

Det skrives på følgende måde:

```javascript
// Lineær progression
lp(weight increase, increase attempts, current increase attempt, weight decrease, decrease attempts, current decrease attempt)
// Double progression
dp(weight increase, min reps, max reps)
// Sum progression
sum(reps threshold, weights increase)
```

Her er eksemplet med lineær progression igen.

```javascript
// Spænd op. God dybde. Kontrolleret ned. Eksplosivt op.
Squat / 4x4 @7 / progress: lp(2.5kg, 3)
```

Hvis du gerne vil lave din egen type progression, så kan du faktisk selv skrive en funktion, der laver det.

Her har du et par forskellige andre, jeg har skrevet.

### Fremgang baseret på e1RM

<details markdown="1">
  <summary>💻 Se koden for ændre 1RM ved dine løft</summary>

Hvis du gerne vil have fremgang i dit program, når du laver bedre løft undervejs, så kan du gøre følgende:

```javascript
// Improvements based on e1RM
Squat / 3x3 @8+ / progress: custom() {~
  if (completedRPE[1] <= RPE[1]) {
    var.originalE1RM = round(weights[1] / rpeMultiplier(reps[1], RPE[1]))
    var.newE1RM = round(weights[1] / rpeMultiplier(completedReps[1], completedRPE[1]))
    rm1 = var.newE1RM
  }
~}
```
</details>

### Triple progression

<details markdown="1">
  <summary>💻 Se koden til Triple progression</summary>

Hvis du gerne vil lave en triple progression, hvor du først øger antallet af sæt, reps og vægt i den rækkefølge, så kan du gøre følgende.

Her er der to variationer, hvilket du skal skrive ind i variablen `maxVariations`. Og du skriver vægtøgningen ind under `increment`.

```javascript
// Triple progression. +sæt +reps +vægt
Split Squat[1-4] / 3x15-20+ / 4x15-20+ / progress: custom(maxVariations: 2, increment: 1kg) {~
  if (completedReps >= reps) {
      if (setVariationIndex >= state.maxVariations) {
        weights += state.increment
        setVariationIndex = 1
      } else {
        setVariationIndex += 1
      }
  }
~}
```
</details>

### Styrkeprogression

<details markdown="1">
  <summary>💻 Se koden til styrkeprogression</summary>

Hvis du gerne vil lave en styrkeprogression, hvor du over ugerne øger intensiteten, så kan du gøre følgende.

```javascript
  // setVariation progression - Sets+ - Reps-
Bench Press / 3x7 / 4x6 / 5x5 / 6x4 / progress: custom(increase: 5kg) {~
  setVariationIndex += 1
  weights += state.increase
~}
```
</details>

### Emerging Strategies

<details markdown="1">
  <summary>💻 Se koden til Emerging Strategies</summary>

Jeg kan godt lide fremgangsmåden i Reactive Training Systems Emerging Strategies. Her lader du første sæt danne baggrund for backoff sæt, og du lader RPE styre din træning.

Du kan læse mere om den fremgangsmåde under vores [gennemgang af RPE](/rpe/). Det kunne se sådan her ud.

```javascript
Squat / 1x3 @8+, 5x5 75% / update: custom() {~

  // **Emerging Strategies**
  // Based on https://www.instagram.com/reactivetrainingsystems/p/CJb0Kf9ATmp/
  // Backoff sets are always based on the first lift.
  if (setIndex == 1) {
    var.backoff_reps = reps[2]

    // Calculate e1rm based on first set
    var.erm1 = (weights[1] / rpeMultiplier(completedReps[1], completedRPE[1]))

    // If set 2 has RPE specified
    if (RPE[2]) {
      var.backoff_pct = rpeMultiplier(var.backoff_reps, RPE[2])
    // Else use percentage for backoff percent
    } else {
      var.backoff_pct = weights[2] / rm1
    }
    
    // sets(fromIndex, toIndex, minReps, maxReps, isAmrap, weight, timer, rpe, shouldLogRpe)
    sets(2, numberOfSets, var.backoff_reps, var.backoff_reps, 0, var.erm1 * var.backoff_pct, 120, 0, 0)
  }
~} / progress: custom(last_week_rpe: 0) {~
  // Increase weight if you hit the same weight with lower RPE the following week in your top set.
  // Backoff sets will be a percentage of the calculate e1rm from the top set.
  // Next week will have the same top set, which will hopefully have a lower RPE.

  // Increase erm1 if current week RPE for same weight is lower than last week
    if (completedReps[1] > 0 && completedRPE[1] < state.last_week_rpe) {
      rm1 = weights[1] / rpeMultiplier(completedReps[1], completedRPE[1])
      state.last_week_rpe = 0
    } else {
      RPE[1] = completedRPE[1]
      state.last_week_rpe = completedRPE[1]
    }
~}
```
</details>

***

Det kan du se meget mere om i dokumentationen, men du kan også få hjælp på [/r/liftosaur](https://www.reddit.com/r/liftosaur/) på Reddit.

## Tjek hvordan dit program virker.

Der er en 'Playground', hvor du kan klikke dig igennem programmet for at se, hvordan det virker.

Det er meget smart, så du kan se, hvad der sker, hvis du fx bruger en progression eller har lavet din egen progression.

![](/assets/images/liftosaur/liftosaur-playground.png)

Så kommer du ind, hvor du kan klikke dig igennem dit program. Det ser i øvrigt ret fedt ud, synes jeg.

![](/assets/images/liftosaur/liftosaur-playground-1.png)

## Sæt dine egne øvelser ind

Der er en stor øvelsesdatabase på Liftosaur, som du kan se [her](https://www.liftosaur.com/exercises). Men de fleste af os har nok nogle yndlingsøvelser, som ikke lige er i sådan en database.

Heldigvis kan du let tilføje dine egne øvelser.

Hvis du skriver øvelserne ind, og den ikke findes i databasen, så får du mulighed for at lave din egen øvelse.

Når du redigerer dit træningsprogram i tekst og øvelsen ikke findes i databasen, så får du mulighed for at oprette den.

Det ser nogenlunde sådan her ud.

![](/assets/images/liftosaur/liftosaur-new-exercise.png)

Her kan du skrive navnet, vælge muskler og sætte et par billeder ind.

![](/assets/images/liftosaur/liftosaur-new-exercise-2.png)

Når du vil se alle øvelserne, så kan du gå til `Settings->Exercises`. 

Her kan du se oversigten over dine egne øvelser, de øvelser du har brugt og alle de andre øvelser.

![](/assets/images/liftosaur/liftosaur-new-exercise-3.png)

Hvis du gerne vil have lidt professionelle billeder på, så kan du kigge på [Gym Visual](https://gymvisual.com/). Der kan du købe animerede gifs virkelig billigt.

## Konklusion

Liftosaur er stadig under udvikling, så der kommer både forbedringer og ændringer.

Men det er genialt, hvordan du ved en ret enkel måde at skrive dit program ned på kan stå med et program, hvor der er en indbygget.