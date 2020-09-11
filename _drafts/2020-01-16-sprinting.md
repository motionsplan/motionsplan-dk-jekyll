---
title: &title "Sprint: Hvordan løber du hurtigere?"
permalink: /sprint/
language: da
header:
  overlay_image: https://images.unsplash.com/photo-1532444458054-01a7dd3e9fca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=60
  teaser: https://images.unsplash.com/photo-1532444458054-01a7dd3e9fca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60
  caption: *title
category:
  - Eksplosivitet
tags:
  - sprint
last_modified_at: 2019-11-19T23:14:14Z
toc: true
---

Jeg har samlet en række videoer om sprint, hvor du kan få oplysninger om, hvordan man kan løbe hurtigere.

*[GCT]: Ground Contact Time
*[RE]: Running Economy
*[FTP]: Functional Threshold Power

{% include video provider="youtube" id="u-6YEP9bygg" }

{% include video provider="youtube" id="PPbsJ-JogAg" %}

{% include video provider="youtube" id="y88Mx7NaqwY" %}

{% include video provider="youtube" id="pltmjsOhyus" %}

{% include video provider="youtube" id="njyqrKEhfOs" %}

{% include video provider="youtube" id="ihcmRgYmDLQ" %}

{% include video provider="youtube" id="v2_t7R1KcPM" %}

{% include video provider="youtube" id="MJR7vnwTfJY" %}

{% include video provider="youtube" id="pDzA9xtxW3s" %}

{% include video provider="youtube" id="S113cX7gzGw" %}

***

## Hvordan tester jeg min sprint?

Der er mange måder at teste sin sprint på på. Vi har samlet tests her på siden:

{% assign site_posts = site.posts | where: "tags", "sprinttest" | sort: "date" %}

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single-simple.html %}
  {% endfor %}
{% endif %}

***
