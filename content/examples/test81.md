---
# title: Mon titre
description: Lorem ipsum dolor 81
layout: simple_page.liquid
eleventyNavigation:
  key: Test 81
  parent: Test 8
  order: 30
---
Test 81
## Méthodes

```javascript
// Initialise ou actualise les instances de c-toggle
// A invoquer au chargement de la page ainsi qu'à chaque changement de DOM
cToggle.update();

/**
 * OPEN
 * Méthode qui bascule vers l'état ouvert l'ensemble des déclencheurs et cibles de l'id/canal spécifié
 * @param {String} channel identifiant du canal
 */
cToggle.open(channel)

/**
 * CLOSE
 * Méthode qui bascule vers l'état fermé l'ensemble des déclencheurs et cibles de l'id/canal spécifié
 * @param {String} channel identifiant du canal
 */
cToggle.close(channel)

/**
 * TOGGLE
 * Méthode qui bascule l'ensemble des déclencheurs et cibles de l'id/canal spécifié:
 * vers l'état fermé si leur état est ouvert
 * vers l'état ouvert si leur état est fermé
 * @param {String} channel identifiant du canal
 */
cToggle.toggle(channel)

```

## Événements

À chaque changement d’état d’une instance de cToggle, l’événement personnnalisé `cToggle_event` est propagé sur le document avec en option l’identifiant de l’instance et la méthode utilisée: `open`, `close` ou `toggle`.

Tous les exemples de la documentation sont visibles dans la console du navigateur avec l’écoute suivante:

```javascript
const myHandler = function(evt) {
    console.log(`cToggle "${evt.detail.id}" a été invoqué avec la méthode "${evt.detail.method}"`)
}
document.addEventListener('cToggle_event', myHandler);
```