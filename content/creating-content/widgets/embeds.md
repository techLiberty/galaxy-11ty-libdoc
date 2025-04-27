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

<iframe height="300" style="width: 100%;" scrolling="no" title="FURIOSA 3D Animated Poster" src="https://codepen.io/olivier3lanc/embed/zYXxyEj?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/olivier3lanc/pen/zYXxyEj">
  FURIOSA 3D Animated Poster</a> by Olivier 3lanc (<a href="https://codepen.io/olivier3lanc">@olivier3lanc</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

```html
<iframe height="300" style="width: 100%;" scrolling="no" title="FURIOSA 3D Animated Poster" src="https://codepen.io/olivier3lanc/embed/zYXxyEj?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/olivier3lanc/pen/zYXxyEj">
  FURIOSA 3D Animated Poster</a> by Olivier 3lanc (<a href="https://codepen.io/olivier3lanc">@olivier3lanc</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
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