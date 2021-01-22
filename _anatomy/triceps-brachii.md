---
title: Trehovede armstrækker
latin: Triceps Brachii
group:
  - Arme
joint:
  - Albueleddet
tags:
  - imagemap
  - fitnessinstruktør
  - muskel
function:
  - short: Extends the arm at the elbow.
    extended: This means that the triceps brachii muscle straightens the elbow joint
      such that there is an increase in the angle between the forearm and the
      upper arm.
  - short: Stræk i skulderleddet
    extended: Triceps brachii er med til at strække skulderleddet, dvs. føre
      overarmen bagud.
origin:
  da: Bagsiden af skulderbladet og overarmsknoglen
  la: Scapula et humerus
  en: Scapula and humerus
insertion:
  da: Underarmsknoglen
  la: Ulna et radius
  en: Ulna and radius
last_modified_at: 2020-11-15T07:31:16+01:00
image_focus: /assets/images/anatomy/focus-triceps-brachii.jpg
image: /assets/images/anatomy/triceps-brachii.jpg
exercises:
  - Stående calf-raise
coords:
  - 404,127,384,136,378,146,369,164,374,180,386,176,399,156,407,141
  - 510,119,508,137,523,170,533,176,537,162,531,135
---

Triceps brachii er også kendt som triceps. Triceps brachii får navnet fra dens tre muskler. Musklen er placeret bag på overamen og står for hele muskulaturen på bagsiden af overarmen (den posteriore del).

**Det lange hoved** (caput longum) af triceps brachii udspringer fra tuberculum infraglenoidale og løber ned mellem teres minor og major for at slutte sig til de to andre hoveder. 

Det **laterale hoved** (caput laterale) af triceps brachii udspringer fra den proksimale del af humerus under tuberculum majus. 

Det **mediale hoved** (caput mediale) ligger under de to andre hoveder og udspringer under det laterale hoved. 

Triceps senen løber hen over albuen posteriort og tilhæfter sig på olecranon på ulna. Da musklen løber ned over albuen vertikalt, laver den ekstension i albuen. Den har ikke nogen tilhæftning på radius, derfor laver den ikke pronation eller supination.

_{{ page.latin }}_

- **Udspring**: {{ page.origin.da }}
- **Hæfte**: {{ page.insertion.da }}

{% include figure image_path=page.image alt=page.title caption=page.title %}

## Funktion

{% for f in page.function %}
- **{{ f.short }}**.
  {{ f.extended | markdownify }}
{% endfor %}

{% include figure image_path=page.image_focus alt=page.title caption=page.title %}
