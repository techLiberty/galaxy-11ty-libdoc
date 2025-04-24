---
layout: libdoc_page.liquid
eleventyNavigation:
    key: Embeds
    parent: Widgets
description: Code integration results of various content providers
permalink: creating-content/widgets/embeds/index.html
---
Here are few examples of how Eleventy LibDoc renders embeds from various sources. On `<iframe>` HTML tags, adding `loading="lazy"` attribute may increase page load performances since it is not supplied most of time.

## Codepen

A [codepen](https://codepen.io) example:

<p class="codepen" data-height="500" data-default-tab="html,result" data-slug-hash="zYXxyEj" data-pen-title="FURIOSA 3D Animated Poster" data-user="olivier3lanc" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/olivier3lanc/pen/zYXxyEj">
  FURIOSA 3D Animated Poster</a> by Olivier 3lanc (<a href="https://codepen.io/olivier3lanc">@olivier3lanc</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>

```html
<p class="codepen" data-height="500" data-default-tab="html,result" data-slug-hash="zYXxyEj" data-pen-title="FURIOSA 3D Animated Poster" data-user="olivier3lanc" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/olivier3lanc/pen/zYXxyEj">
  FURIOSA 3D Animated Poster</a> by Olivier 3lanc (<a href="https://codepen.io/olivier3lanc">@olivier3lanc</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>
```


## Youtube

A [Youtube](https://youtube.com) example:

<iframe src="https://www.youtube-nocookie.com/embed/kzf9A9tkkl4?si=fHC17SGXUi5S3CaZ&amp;controls=0"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
    loading="lazy"
    allowfullscreen></iframe>

```html
<iframe src="https://www.youtube-nocookie.com/embed/kzf9A9tkkl4?si=fHC17SGXUi5S3CaZ&amp;controls=0"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
    loading="lazy"
    allowfullscreen></iframe>
```

## Vimeo

A [Vimeo](https://vimeo.com) example:

<iframe title="vimeo-player"
    src="https://player.vimeo.com/video/218456484?h=3308c418d5"
    loading="lazy"
    allowfullscreen></iframe>

```html
<iframe title="vimeo-player"
    src="https://player.vimeo.com/video/218456484?h=3308c418d5"
    loading="lazy"
    allowfullscreen></iframe>
```

## Sketchfab

<iframe title="Hey Good Lookin' - Vinnie"
    allowfullscreen
    mozallowfullscreen="true"
    webkitallowfullscreen="true"
    allow="autoplay; fullscreen; xr-spatial-tracking"
    loading="lazy"
    xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share
    src="https://sketchfab.com/models/b88c8c45f3ce454f925db4128f339c5e/embed"></iframe>

```html
<iframe title="Hey Good Lookin' - Vinnie"
    allowfullscreen
    mozallowfullscreen="true"
    webkitallowfullscreen="true"
    allow="autoplay; fullscreen; xr-spatial-tracking"
    loading="lazy"
    xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share
    src="https://sketchfab.com/models/b88c8c45f3ce454f925db4128f339c5e/embed"></iframe>
```