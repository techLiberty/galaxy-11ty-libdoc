---
layout: libdoc_page
permalink: configuration/favicon/index.html
eleventyNavigation:
    key: Favicon configuration
    parent: Configuration
    title: Favicon
    order: 40
title: Favicon URL - Configuration
description: How to manage Favicon URL
tags:
    - configuration
    - favicon
---

Available into `_data/libdocConfig.json`:

```json
{
    "faviconUrl": ""
}
```

Favicon URL is applied following these ordered priorities:

1. By default favicon URL’s value is `libdocConfig.faviconUrl` if nothing is set into the front matter.
1. If `faviconUrl` is set into the front matter, page’s favicon URL gets this value.
