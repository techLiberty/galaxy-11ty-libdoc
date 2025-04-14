---
layout: libdoc_page
permalink: front-matter/open-graph-image/index.html
eleventyNavigation:
    key: Open Graph Image
    parent: Front Matter
    order: 100
title: Open Graph Image - Front Matter
description: How to override default Open Graph Image on any page
tags:
    - front-matter
    - open-graph-image
date: Last Modified
---
Allows to customize Open Graph metadata on any page. By default, [LibDoc configuration metadata](/content/configuration/open-graph-image.md) is set as Open Graph Image. You can customize it on any page by entering another image URL into the front matter key `ogImageUrl`.

```yaml
layout: libdoc_page
ogImageUrl: /path-to/custom-open-graph-url.jpg
```
