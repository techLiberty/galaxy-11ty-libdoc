---
title: Sandbox from file
description: Usage example of a file based sandbox
layout: simple_page.liquid
eleventyNavigation:
    key: Sandbox from file
    parent: Samples
tags: first
---
```liquid
{% raw %}{% render 'sandbox', path: '/path/to/file/index.html' %}{% endraw %}
```

{% render 'sandbox', path: '/sandboxes/1/index.html', title: 'Mon titre spécial très très long et beaucoup de texte' %}

{% render 'sandbox', path: '/sandboxes/1/index.html' %}
