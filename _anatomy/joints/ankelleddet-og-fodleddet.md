---
layout: single
title: "Ankelleddet og fodleddet"
permalink: /joints/ankelleddet-og-fodleddet/
excerpt: "Ankelleddet er et hængselled. Skinneben og lægben danner nedadtil en gaffelformet ledskål til et hængselsled. De to knogler er holdt sammen af kraftige ledbånd. I de øvrige fodrodsknogler kan der foregå mindre bevægelser. Dette led kaldes fodleddet."
latin: 
tags:
  - led
movements:
  - title: Strækning (dorsalfleksion - opad)
    muscles: Tibialis Anterior
  - title: Bøjning (plantarfleksion - nedad)
    muscles:
      - Gastrocnemius
      - Soleus
image: https://o.quizlet.com/HY7CmkNNCPOn4PFqIsQReg_b.jpg
header:
  overlay_image: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrqNXjmfE7vW6n-dMuY28ulyi3ZgxTkXAV34bp2t25ynDjPexTeg&s
---

**Ankelleddet** er et hængselled mellem skinnebenet og lægbenet. 

Du kan læse mere om [ankelleddet og fodleddet her](http://web.archive.org/web/20090528100757/http://www.motion-online.dk/styrketraening/anatomiliste/ankelleddet_og_foden/){:rel="nofollow"}.

{% comment %}

Skinneben og lægben danner nedadtil en gaffelformet ledskål. De to knogler er holdt sammen af kraftige ledbånd. 

“Gaflen” går ned over rullebenet, der er kileformet, det vil sige smalt bagtil og bredt fortil.

Når foden bøjes opad vil den brede del af rullebenet kile sig fast i gaflen og derfor gøre leddet mere stabilt. Det er derfor man altid vrikker om på vej nedad bakke og ikke opad.

{% endcomment %}

## Bevægelser i ankelleddet

{% for m in page.movements %}
- **{{ m.title }}**.
  {{ m.muscles | join: ", " }}
{% endfor %}

## Fodleddet

{% comment %}

I de øvrige fodrodsknogler kan der foregå andre bevægelser. Vigtigst er pronations/supinationsbevægelsen. Når man vrikker om i ankelleddet svarer det til, at man har lavet for kraftig supination.

Fodens evne til at være støddæmper skabes bl.a ved den såkaldte fodhvælving. Fodhvælvingen dannes af den tværgående fodbue, den indre fodbue og den ydre fodbue. Disse buer bliver hovedsaligt holdt i spænd af stærke ligamenter, der løber på undersiden af foden (mærk efter!).

Bemærk at anatomisk sprogbrug er anderledes end daglig tale. Det man normalt kalder for en strækning af fodleddet (strækning af vristen) hedder på anatomisprog en bøjning (plantarfleksion).
{: .notice .notice--danger }

{% endcomment %}

{% include figure image_path=page.image caption=page.title alt=page.title %}

## Muskler i ankelleddet og fodleddet

{% include anatomy/table-muscles-ancle.html %}