---
# title: Mon titre
description: Lorem ipsum dolor 12
layout: simple_page.liquid
eleventyNavigation:
  key: Test 12
  parent: Test 1
  order: 0
---

### Clic externe

L'attribut `data-dismiss="true"` permet le retour à l’état fermé du canal spéccifié lorsque un clic est effectué en dehors d'un déclencheur ou d'une cible.

[Voir la démo](https://ita-design-system.github.io/c-toggle.js/content/example-5.html)

```html
<button c-toggle="ex1" data-dismiss="true">déclencheur</button>
<p c-toggle-name="ex1"
    class="u-d-none"
    data-opened-state-class="c-skin m-bc-primary-100">
    Je suis la cible cToggle câblée sur le canal "ex1". Avec <br>data-dismiss="true" <br>Je me ferme si un clic est effectué en dehors de cette cible.
</p>
```

### Clic interne

Par défaut, la fermeture d’un "dismiss" n’est pas propagée à l’intérieur d’un toggle. Il est possible de forcer cette fermeture en ajoutant l’attribut `data-onclick-force-dismiss-children-ids="[liste_d_ids]"` sur un `c-toggle` ou un `c-toggle-name`. [Exemple sur la démo](https://ita-design-system.github.io/c-toggle.js/content/example-5.html)

### Mouseenter

L'attribut `data-event="mouseenter"` permet de basculer le canal spécifié vers l’état ouvert lorsque le pointeur passe dans la zone d'un déclencheur.

[Voir la démo](https://ita-design-system.github.io/c-toggle.js/content/example-6.html)

```html
<button c-toggle="ex1" data-event="mouseenter">déclencheur</button>
<p c-toggle-name="ex1"
    class="u-d-none"
    data-opened-state-class=" 
    c-dim m-p-6
    c-skin m-bc-primary-100">
    Je suis la cible cToggle câblée sur le canal "ex1". Avec <br>data-event="mouseenter" <br>Je m'ouvre lorsque le pointeur passe dans la zone d'un déclencheur.<br>
    Pour le fermer il faut invoquer la méthode<br>
    cToggle.close('ex1')<br>
    <button onclick="cToggle.close('ex1')">fermer avec la méthode</button><br>
    ou créer un autre déclencheur c-toggle="ex1" :<br>
    <button c-toggle="ex1">fermer avec un autre c-toggle</button>
</p>
```

### Mouseover

L'attribut `data-event="mouseover"` permet de basculer le canal spécifié vers l’état ouvert lorsque le pointeur entre dans la zone d’un déclencheur et vers l’état fermé quand il en sort.

[Voir la démo](https://ita-design-system.github.io/c-toggle.js/content/example-7.html)

```html
<button c-toggle="ex1" data-event="mouseover">déclencheur</button>
<p c-toggle-name="ex1"
    class="u-d-none"
    data-opened-state-class=" 
    c-dim m-p-6
    c-skin m-bc-primary-100">
    Je suis la cible cToggle câblée sur le canal "ex1". Avec <br>
    data-event="mouseover" <br>
    Je bascule vers l'état ouvert lorsque le pointeur entre dans la zone d'un déclencheur et vers l'état fermé quand il en sort.
</p>
```