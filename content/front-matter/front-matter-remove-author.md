---
layout: libdoc_page
permalink: front-matter/author-disabled/index.html
eleventyNavigation:
    key: Do not display author
    parent: Front Matter
    order: 50
description: How to remove author from page header
tags:
    - front-matter
    - navigation
    - minimal
    - author
date: Last Modified
---
A front matter with author disabled:

```yaml
layout: libdoc_page
author: false
```

A page with the above front matter is not linked into the main/primary menu and there is no breadcrumb. To enable link item in the primary navigation, `eleventyNavigation.key` must be set into the [front matter](/content/front-matter/index.md).

[View an example of a page with author disabled](/content/front-matter/author-disabled/)

