---
layout: libdoc_page
permalink: configuration/author/index.html
eleventyNavigation:
    key: Author configuration
    parent: Configuration
    title: Author
    order: 30
# title: LibDoc’s configuration
description: How Author’s value is propagated on page metadata
tags:
    - configuration
    - SEO
    - author
---

`author` is propagated on the following metadata

```html
<meta name="author" content="">
```

Author is displayed following these ordered priorities:

1. By default author’s value is `libdocConfig.author` if nothing is set into the front matter.
1. If `author` is set into the front matter, page’s author gets this value.
