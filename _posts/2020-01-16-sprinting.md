---
title: "Sprint - hvordan løber du hurtigere?"
permalink: /sprint/
excerpt: ""
language: da
header:
  overlay_image: https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80
  teaser: https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80
  caption: "Photo by [Fitsum Admasu](https://unsplash.com/@fitmasu?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge) on Unsplash"
category:
  - Eksplosivitet
tags:
  - sprint
last_modified_at: 2019-11-19T23:14:14Z
toc: true
---

*[GCT]: Ground Contact Time
*[RE]: Running Economy
*[FTP]: Functional Threshold Power


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

Der er mange måder at måle sin kondition på. Vi har samlet tests her på siden:

{% assign site_posts = site.posts | where: "tags", "sprinttest" | sort: "date" %}

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single-simple.html %}
  {% endfor %}
{% endif %}

***