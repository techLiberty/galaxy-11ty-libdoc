---
layout: libdoc_page
eleventyNavigation:
    key: Blogging
    parent: Creating content
    order: 40
description: How to use blog feature of Eleventy LibDoc
permalink: creating-content/blogging/index.html
---

A typical blog post front matter:

```yaml
layout: libdoc_page
permalink: "{{ libdocConfig.blogSlug }}/my-first-post/index.html"
tags:
    - post
    - blog
title: My first post
description: This is a blog post test
date: Last Modified
```
