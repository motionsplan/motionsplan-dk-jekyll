---
layout: single
title: &title "Hofteleddet"
seo_title: "Hofteleddet: Hoftens opbygning, anatomi, ledbånd & funktion"
permalink: /joints/hofteleddet/
excerpt: "Hofteleddet (articulatio coxae) er et af kroppens største og mest belastede kugleled. Lær alt om hoftens anatomi, ledbånd, bevægelser, muskler og typiske skader."
latin: "Articulatio coxae"
header:
  teaser: /assets/images/upload.wikimedia.org/Knochenmetastase_Mamma-Ca_Becken_02-ca81ebee.jpg
  credit: https://upload.wikimedia.org/wikipedia/commons/9/9b/Knochenmetastase_Mamma-Ca_Becken_02.jpg
  overlay_image: /assets/images/upload.wikimedia.org/Knochenmetastase_Mamma-Ca_Becken_02-ca81ebee.jpg
  credit: https://upload.wikimedia.org/wikipedia/commons/9/9b/Knochenmetastase_Mamma-Ca_Becken_02.jpg
type: Kugleled
breadcrumbs: true
categories:
  - Anatomi
  - Led
tags:
  - led
movements:
  - title: Bøjning (Fleksion)
    muscles:
      - Iliopsoas (M. Psoas Major & M. Iliacus)
      - Rectus Femoris
      - Tensor Fasciae Latae
      - Sartorius
  - title: Strækning (Ekstension)
    muscles:
      - Gluteus Maximus
      - Hamstrings (Biceps Femoris, Semitendinosus, Semimembranosus)
      - Adductor Magnus (bagerste del)
  - title: Udadføring (Abduktion)
    muscles:
      - Gluteus Medius
      - Gluteus Minimus
      - Tensor Fasciae Latae
      - Piriformis
  - title: Indaddrejning / Indadføring (Adduktion)
    muscles:
      - Adductor Longus
      - Adductor Brevis
      - Adductor Magnus
      - Gracilis
      - Pectineus
  - title: Udadrotation (Ekstern rotation)
    muscles:
      - Gluteus Maximus
      - Piriformis
      - Obturator Internus & Externus
      - Gemellus Superior & Inferior
      - Quadratus Femoris
  - title: Indadrotation (Intern rotation)
    muscles:
      - Gluteus Minimus (forreste del)
      - Gluteus Medius (forreste del)
      - Tensor Fasciae Latae
      - Adductores (assisterende)
image: /assets/images/orthonow.com/Hip-Anatomy-acfeb8f8.jpg
credit: https://www.orthonow.com/3d-images/Hip-Anatomy.jpg
toc: true
sidebar:
  nav: anatomi
last_modified_at: 2026-08-25T19:15:00.000Z
---

**Hofteleddet** (*articulatio coxae*) er et af kroppens største, stærkeste og mest centrale bærende led. Det er opbygget som et klassisk **kugleled** (*articulatio spheroidea*), der forbinder overkroppen og bækkenet (*os coxae*) med underekstremiteten via lårbensknoglen (*femur*). 

Hvor skulderleddet er optimeret til maksimal bevægelighed på bekostning af pasform, er hofteleddet konstrueret til at kombinere stor bevægelsesfrihed med ekstrem mekanisk stabilitet, da det skal bære kropsvægten under gang, løb, hop og tunge løft.

---

## Hvad er hofteleddet? (Opbygning og anatomi)

Hofteleddet dannes af mødet mellem to primære knoglekomponenter:

1. **Acetabulum (Ledskålen):** En dyb, skålformet fordybning på ydersiden af hoftebenet (*os coxae*), som er sammensat af bækkenets tre knogler: tarmbenet (*os ilium*), sædebenet (*os ischii*) og skambenet (*os pubis*).
2. **Caput femoris (Lårbenshovedet):** Et kugleformet ledhoved øverst på lårbensknoglen (*femur*), der passer dybt ind i acetabulum.

For at øge stabiliteten og fordele trykket over en større flade er ledskålen beklædt med en stærk ledbrusk samt en stødabsorberende fiberbruskring langs kanten:

* **Labrum acetabulare (Ledlæben):** En krave af fiberbrusk, der sidder fæstnet på kanten af acetabulum. Labrum uddyber ledskålen markant, virker som en hydraulisk pakning (sugekop-effekt) og fastholder ledvæsken (*synovialvæsken*), hvilket smører leddet og beskytter brusken.

---

## Passiv stabilitet: Ledkapsel og ledbånd

Hofteleddet omgives af en tyk, stærk ledkapsel, som forstærkes af tre ekstremt kraftige ledbånd (ligamenter). Disse ledbånd er snoet skråt omkring leddet, hvilket betyder, at de strammes automatisk, når hoften strækkes (*ekstension*), og slækkes, når hoften bøjes (*fleksion*):

* **Ligamentum iliofemorale (Y-ledbåndet / Bigelows ledbånd):** Sidder på forsiden af hoften og er kroppens stærkeste ledbånd. Det forhindrer, at overkroppen tipper bagover ved stående stilling, og begrænser overstrækning af hoften.
* **Ligamentum pubofemorale:** Placeret på indersiden/forsiden og forhindrer overdreven udadføring (*abduktion*) samt overstrækning.
* **Ligamentum ischiofemorale:** Sidder på bagsiden af leddet og strammes ved indadrotation og ekstension.
* **Ligamentum capitis femoris:** Et internt ledbånd, der går fra bunden af acetabulum direkte ind i centrum af lårbenshovedet (*fovea capitis*). Det indeholder en lille arterie (*arteria capitis femoris*), som bidrager til blodforsyningen af lårbenshovedet.

---

## Bevægelser i hofteleddet

Som et ægte kugleled har hofteleddet 3 frihedsgrader (tre bevægelsesplaner).

### Normale bevægelsesudslag (ROM - Range of Motion)
* **Fleksion (Bøjning):** 120° med bøjet knæ (kun ca. 90° med strakt knæ pga. træk i hasemusklerne).
* **Ekstension (Strækning):** 10° – 20° bagud.
* **Abduktion (Udadføring):** 40° – 45° til siden.
* **Adduktion (Indadføring):** 20° – 30° ind over midterlinjen.
* **Udadrotation (Ekstern rotation):** 45° (med bøjet hofte).
* **Indadrotation (Intern rotation):** 35° – 45° (med bøjet hofte).

### Primære muskler pr. bevægelsesretning

{% for m in page.movements -%}
- **{{ m.title }}:** {{ m.muscles | join: ", " }}.
{% endfor %}

{% include figure image_path=page.image caption=page.title alt=page.title %}

---

## Muskler omkring hofteleddet

Hoftens muskler opdeles typisk i fire funktionelle grupper, der koordinerer bevægelse og stabiliserer bækkenet under vægtbæring:

1. **Hoftebøjerne (Anterior gruppe):** *Iliopsoas* (M. Psoas Major & M. Iliacus) er kroppens stærkeste hoftebøjer. Suppleres af *Rectus Femoris* (en del af forlåret) og *Tensor Fasciae Latae*.
2. **Hoftestrækkerne & Ballemusklerne (Posterior gruppe):** *Gluteus Maximus* er kroppens største muskel og genererer enorm kraft ved hoftestrik (fx ved sprint, trappegang og squat). *Hamstrings* på baglåret assisterer kraftigt ved hoftestrik.
3. **Abduktorerne & Bækkenstabilisatorerne (Lateral gruppe):** *Gluteus Medius* og *Gluteus Minimus* trækker benet ud til siden. Deres vigtigste fysiologiske funktion er dog at holde bækkenet vandret, når du står på ét ben under gang og løb (forhindrer *Trendelenburgs tegn*).
4. **Adduktorerne (Medial gruppe / Inderlår):** *Adductor longus, brevis og magnus* samt *Gracilis* trækker benene sammen og stabiliserer bækkenet i det frontale plan.
5. **De dybe udadrotatorer ("Hoftens rotator cuff"):** Seks små dybe muskler (*Piriformis, Obturator externus/internus, Gemelli superior/inferior, Quadratus femoris*), der finjusterer lårbenshovedets placering i ledskålen.

### Samlet muskeloversigt

{% include anatomy/table-muscles-hip.html %}

Se også [vores samlede oversigt over alle kroppens led og deres opbygning](/led/).

---

## Typiske overbelastninger og skader i hoften

Grundet de store biomekaniske kræfter, der overføres gennem hoften, opstår der ofte både slidrelaterede og sportsspecifikke tilstande:

### 1. Slidgigt i hoften (*Hofteartrose / Coxartrose*)
Gradvis nedslidning af den beskyttende ledbrusk i acetabulum og på lårbenshovedet. Medfører smerter (især i lysken og strålende ned mod knæet), morgenstivhed og indskrænket bevægelighed (især indadrotation og strækning).

### 2. Femoroacetabulært Impingement (FAI / Inklemning i hoften)
En anatomisk tilstand, hvor ekstra knoglevækst på lårbenshalsen (*Cam-deformitet*) eller på skålkanten (*Pincer-deformitet*) klemmer mod ledlæben og brusken ved dybe hoftebøjninger (fx ved dybe squats eller kampsport).

### 3. Labrumlæsion (Rift i ledlæben)
Skade på fiberbruskringen (*labrum acetabulare*). Kan opstå akut ved eksplosive vrid/tacklinger eller gradvist som følge af langvarigt FAI-impingement. Symptomerne er typisk dybe lyskesmerter samt "klik"-fornemmelser i leddet.

### 4. Trochanterbursitis & Gluteal Tendinopati (Yderside-hoftesmerter)
Overbelastning i senerne fra *Gluteus Medius/Minimus* eller betændelse i slimsækken (*bursa trochanterica*) på knoglefremspringet på ydersiden af hoften (*trochanter major*). Opleves hyppigt af løbere samt kvinder i overgangsalderen.

### 5. Piriformissyndrom
Spænding eller hævelse i den dybe udadrotator *M. Piriformis*, som trykker på og irriterer den tykke iskiasnerve (*nervus ischiadicus*), der løber lige under (eller igennem) musklen. Giver udstrålende smerter ned i ballen og bagsiden af låret.

---

<details markdown="1" class="references">
  <summary><h2 id="references">Referencer</h2></summary>

- Bojsen-Møller, F., & Simonsen, E. B. (2014). *Bevægeapparatets anatomi* (13. udg.). Munksgaard.
- Schünke, M., Schulte, E., & Schumacher, U. (2020). *Prometheus - Atlas of Anatomy* (3. udg.). Thieme.
- Netter, F. H. (2022). *Atlas of Human Anatomy* (8. udg.). Elsevier.
- Neumann, D. A. (2016). *Kinesiology of the Musculoskeletal System: Foundations for Rehabilitation* (3. udg.). Mosby/Elsevier.

</details>