---
layout: libdoc_page
permalink: front-matter/date-disabled/index.html
eleventyNavigation:
    key: Do not display date
    parent: Front Matter
    order: 50
description: How to remove date string from page header
tags:
    - front-matter
    - navigation
    - minimal
    - date
date: Last Modified
---
A front matter with date disabled:

```yaml
layout: libdoc_page
date: false
```

A page with the above front matter is not linked into the main/primary menu and there is no breadcrumb. To enable link item in the primary navigation, `eleventyNavigation.key` must be set into the [front matter](/content/front-matter/index.md).

[View an example of a page with date disabled](/content/front-matter/date-disabled/)

