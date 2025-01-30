---
title: Accueil
layout: simple_page.liquid
tags:
    - tag1
    - tag2
---
# Accueil

Page d’accueil.

{% for content in collections.allMyContent %}
* {{content.url}}
{% endfor %}