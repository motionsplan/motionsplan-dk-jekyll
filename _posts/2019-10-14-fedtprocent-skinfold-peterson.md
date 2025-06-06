---
title: "Peterson 4-punktsmåling af fedtprocent"
permalink: /skinfold-peterson/
excerpt: "Peterson 4-punktsmåling er en nyere hudfoldsmåling til bestemmelse af fedtprocent baseret på 4-komponentmodellen for kropskomposition."
language: da
header:
  teaser: /assets/images/shutterstock/fedtmaaling-hudfoldsmaaling.jpg
category:
  - Tests
  - Fedtprocent
breadcrumbs: true
tags:
  - fedtprocent
  - kropskomposition
  - skinfold
meta:
  name: Peterson 4-punktsmåling
  equipment: hudfoldsmåler
  measures: fedtprocent
last_modified_at: 2019-03-06T23:14:14Z
toc: true
feature_row:
  - image_path: /assets/images/e/accumeasure-fat-caliper.jpg
    alt: "Accu-Measure Fitness 3000 Body Fat Caliper"
    title: "Accu-Measure Fitness 3000 Body Fat Caliper"
    excerpt: "Mål din fedtprocent nemt med Accu-Measure Fitness 3000 Body Fat Caliper. Fedttangen bliver brugt af mange amerikanske personlige trænere på grund af dens præcise målinger. Du kan både bruge den hjemme eller have den med på farten."
    url: "https://www.partner-ads.com/dk/klikbanner.php?partnerid=28187&bannerid=21411&htmlurl=https://www.billig-fitness.dk/products/body-fat-caliper-fedttang-fedtmaaler"
    btn_label: "Tjek prisen"
    btn_class: "btn--success"
    rel: sponsored nofollow noopener
---

Peterson 4-punktsmåling er en nyere formel til hudfoldsmåling til bestemmelse af fedtprocent baseret på 4-komponentmodellen for kropskomposition.

Peterson et al (2003) er bare en af de måder, som man kan vælge til at [lave hudfoldsmålinger med fedttang](/skinfold/). Peterson et al (2003) har baseret deres formel på baggrund af en [4-komponentmodel for kropskomposition](/kropskomposition/).

Bestemmelsen af 4-komponentmodellen er baseret på tre forskellige metoder, som forskerne har knyttet sammen til en formel, de anser for at være præcis til at bestemme den præcise fordeling af vævstyperne.

- **DEXA-scanning**. For at estimere fedtprocenten har de brugt DEXA-scanning til at finde den fedtfrie skeletfrie masse og fedtmassen. DEXA-scanningen blev også brugt til at bestemme knoglemineralindholdet i forhold til den fedtfrie masse.
- **Tungt vand**. Tungt vand kan bruges til at bestemme den totale mængde vand i kroppen.
- **Undervandsvejning**. Forskerne lavede 10 undervandsvejninger for at bestemme densiteten af kroppen.

På baggrund af 4-komponentmodellen fik lavede forskerne regressionsligninger med forskellige parametre, og de fandt frem til en sammenhæng for både kvinder og mænd, hvor man skulle måle fire hudfolde, vægt, højde og alder for at bestemme fedtprocenten.

I [Peterson et al (2003)](https://academic.oup.com/ajcn/article/77/5/1186/4689818) undersøgte de også formlerne fra [Womersley og Durnin]({% link _posts/2019-10-14-fedtprocent-skinfold-durnin-womersley.md %}) og [Jackson og Pollock]({% link _posts/2019-10-14-fedtprocent-skinfold-jackson-pollock.md %}). Peterson et al (2003) fandt, at deres nyudviklede formel havde en bedre korrelation med formlen baseret på 4-komponentmodellen end de ældre formler, som kun var baseret og valideret i forhold til undervandsvejning.

## Beskrivelse af hudfoldsmålinger i Peterson (2003)

For at estimere fedtprocenten så skal der både for mænd og kvinder måles hudfolde på fire steder. Hudfolden skal måles ved triceps, ved skulderbladets nederste spids, lige over hoftekammen og midt på låret.

{% include figure image_path="/assets/images/fedtprocent/peterson.png" caption="Her skal der måles til Peterson-formlen for fedtprocent for voksne." alt="peterson fedtprocent målinger for børn" %}

## Udregn din fedtprocent med Peterson et al.-beregneren

{% include calculator/calculate-fatpercent-skinfold-peterson.html %}

## Usikkerheder i Peterson formlen

Husk at testen udelukkende estimerer din fedtprocent. Testen er ikke et startskud til en [slankekur](/slankekur/), fordi du gerne vil opnå en tilfældig [idealvægt](/idealvaegt/) fra en beregner.
{: .notice .notice--info }

Jeg har skrevet et uddybende indlæg, hvor du kan se flere [formler til at bestemme fedtprocent baseret på måling af skinfolds med fedttang](/skinfold/).

Sammenlign den fedtprocent, du har fundet med [anbefalet fedtprocent for voksne mænd og kvinder](/fedtprocent-normer/).

## Køb en tang til hudfoldsmålinger

{% include feature_row type="left" %}

## Alternativer til Petersons formel

{% assign site_posts = site.posts | where: "tags", "skinfold" | where_exp: "post", "post.url != page.url" | sort: "date" %}

{% assign i = 0 %}

{% if site_posts.size > 0 %}
  {% for post in site_posts %}

{% assign i = i | plus: 1 %}

### [{{ i }}. {{ post.title }}]({{ post.url }})

{{ post.excerpt }}

  {% endfor %}
{% endif %}

<details markdown="1" class="references">
  <summary><h2 id="references">Referencer</h2></summary>

- Peterson, Matthew J., Stefan A. Czerwinski, og Roger M. Siervogel. 2003. “Development and Validation of Skinfold-Thickness Prediction Equations with a 4-Compartment Model”. The American Journal of Clinical Nutrition 77 (5): 1186–91. <https://doi.org/10.1093/ajcn/77.5.1186>.
</details>
