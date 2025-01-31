---
title: Accueil
layout: simple_page.liquid
tags:
    - tag1
    - tag2
---
# Accueil

Page d’accueil modifiée

{% for content in collections.allMyContent %}
* {{content.url}}
{% endfor %}

<textarea>
mon premier
mon deuxième
</textarea>