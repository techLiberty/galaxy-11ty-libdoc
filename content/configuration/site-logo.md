---
layout: libdoc_page
permalink: configuration/site-logo/index.html
eleventyNavigation:
    key: Site Logo
    parent: Configuration
    order: 25
title: Site Logo - Configuration
description: Optionally replace text link by logo image
tags:
    - configuration
    - logo
---
Into `_data/libdocConfig.json`:

* `siteLogoUrl` Empty string by default. If set, must be a source image input path or an absolute URL of the source image. It replaces the text link by an image link. Just like any other image on the project, the image file is processed by [11ty Image Plugin](https://www.11ty.dev/docs/plugins/image/).
* `siteLogoMaxHeight` is an integer that represent an amount of pixels. Applies only if `siteLogoUrl` is set. Allows to quickly adjust logo size. 