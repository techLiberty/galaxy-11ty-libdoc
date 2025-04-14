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

The favicon URL is set into the key `faviconUrl` of the LibDoc configuration JSON file. Favicon URL parameter can be overridden on each page’s front matter with the same key `faviconUrl`.