---
layout: libdoc_page
permalink: configuration/index.html
eleventyNavigation:
    key: Configuration
    order: 10
title: LibDoc’s configuration
description: List and descriptions of every LibDoc parameter
tags:
    - configuration
---

Here is the current LibDoc’s configuration file available in `_data/libdocConfig.json` displayed as example, this file has to be adjusted to your needs each time you start a new project:

```json
{
    "lang": "en",
    "siteTitle": "Eleventy LibDoc",
    "siteDescription": "Just and Eleventy SSG starter project to create documentation website",
    "author": "Olivier 3lanc",
    "faviconUrl": "/favicon.png",
    "ogImageUrl": "",
    "customLinks": [
        {
            "url": "#",
            "text": "GitHub"
        },
        {
            "url": "#",
            "text": "CodePen"
        },
        {
            "url": "#",
            "text": "LinkedIn"
        }
    ],
    "blogTitle": "My Posts",
    "blogDescription": "My own description for my blog",
    "blogAuthor": "The Front Club Team",
    "blogSlug": "posts",
    "displayTagsListLink": true,
    "tocEnabled": true,
    "tocHtmlTags": ["h1", "h2", "h3", "h4", "h5", "h6"],
    "tocMinTags": 1,
    "htmlBasePathPrefix": "",
    "sandboxRunSwitch": true,
    "searchEnabled": true
}
```

Parameter | Type | Description | Page override
--- |--- |--- |---
`lang`| String | Locale of the project, required for every message of the user interface | yes
`siteTitle` | String | Title of the project | no
`siteDescription` | String | Description of the project | no
`author` | String or Boolean | Default author of pages. Setting to <var>false</var> disables author display | yes
`faviconUrl` | String | URL of the favicon | yes
`ogImageUrl` | String | Metadata URL of the default Open Graph image | yes
`customLinks` | Array | Array of objects defining custom links into the primary navigation | no
`customLinks[i].text` | String | Link text | no
`customLinks[i].url` | String | Link URL | no
`blogTitle` | String | Sets the blog title | no
`blogDescription` | String | Sets the blog description | no
`blogAuthor` | String | Sets the blog author | no
`blogSlug` | String | Sets the slug for the blog | no
`customLinks[i]` | Object | Object defining a custom link | no
`displayTagsListLink` | Boolean | Enable or disable the link that opens tags list page | no
`tocEnabled` | Boolean | Enable or disable Table of Content | yes
`tocHtmlTags` | Array | List of tags to support into the Table of Content | no
`tocMinTags` | Integer | Minimum amount of headings detected to enable Table of Content | no
`htmlBasePathPrefix` | String | Configure your HTML base path prefix | no
`sandboxRunSwitch` | Boolean | Enable disable scroll into sandbox instead of page | no
`searchEnabled` | Boolean | Enable disable search feature | no
