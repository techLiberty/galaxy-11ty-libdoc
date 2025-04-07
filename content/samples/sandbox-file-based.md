---
title: Sandbox from file
description: Usage example of a file based sandbox
layout: libdoc_page.liquid
eleventyNavigation:
    key: Sandbox from file
    parent: Samples
---
```liquid
{% raw %}{% render 'sandbox', path: '/path/to/file/index.html' %}{% endraw %}
```

{% render 'sandbox', path: '/sandboxes/2/index.html', title: 'Mon titre spécial très très long et beaucoup de texte' %}

# Second title

À chaque changement d’état d’une instance de cToggle, l’événement personnnalisé `cToggle_event` est propagé sur le document avec en option l’identifiant de l’instance et la méthode utilisée: `open`, `close` ou `toggle`.

Tous les exemples de la documentation sont visibles dans la console du navigateur avec l’écoute suivante:

### 1 déclencheur multiples cibles

[Voir la démo](https://ita-design-system.github.io/c-toggle.js/content/example-3.html)

```html
<button c-toggle="ex3">déclencheur</button> 
<p c-toggle-name="ex3"
    class="c-dim m-p-6"
    data-opened-state-class="
    c-skin m-bc-primary-200 m-c-primary-800 
    c-dim m-p-6">
    Je suis la cible 1 du canal "ex3".
</p>
<div c-toggle-name="ex3"
    class="
    c-dim m-p-6 m-mt-6
    c-skin m-bc-primary-100 m-c-primary-300"
    data-opened-state-class="
    c-dim m-p-6 m-mt-6
    c-skin m-bc-primary-800 m-c-primary-100">
    Je suis la cible 2 du canal "ex3".
</div>
<p c-toggle-name="ex3"
    class="u-d-none"
    data-opened-state-class="">
    Je suis la cible 3 du canal "ex3".
</p>
```

{% render 'sandbox', path: '/sandboxes/1/index.html' %}
