---
layout: libdoc_page
permalink: front-matter/add-title/index.html
eleventyNavigation:
    key: Adding a title
    parent: Front Matter
    order: 20
description: How to just add a title to a minimalist page
tags:
    - front-matter
    - navigation
    - minimal
date: Last Modified
---
A front matter with a custom title for a page:

```yaml
layout: libdoc_page
title: Just added title to front matter
```

A page with the above front matter is not linked into the main/primary menu and there is no breadcrumb. To enable link item in the primary navigation, `eleventyNavigation.key` must be set into the [front matter](/content/front-matter/index.md).

[View an example of a page with title](/content/front-matter/title/ "You cannot find this page into main menu")
