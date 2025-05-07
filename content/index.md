---
title: Eleventy LibDoc
description: An Eleventy starter project to craft slick documentation
layout: libdoc_page.liquid
permalink: index.html
---
Eleventy LibDoc is a lightweight and performances focused starter project for [Eleventy][11ty] to craft slick web related code documentation.

* `_data/` <br>⤷  Eleventy [data global](https://www.11ty.dev/docs/data-global/).
    * `libdocConfig.js` <br>⤷ returns default or user defined LibDoc parameters. [Learn more](/content/configuration/index.md).
    * `libdocFunctions.js` <br>⤷ manages filters, shortcodes, collections, [widgets](/content/creating-content/widgets/index.md), etc. 
    * `libdocMessages.json` <br>⤷ contains i18n strings for user interface. [Learn more](/content/configuration/lang.md).
    * `libdocSystem.json` <br>⤷ contains non user related parameters.
    * `libdocUtils.js` <br>⤷ contains helpful and ready to use UI and content functions.
* `_includes/` <br>⤷ Eleventy directory for includes. [Learn more](https://www.11ty.dev/docs/config/#directory-for-includes).
    * `libdoc_before_html.liquid` <br>⤷ prepares variables to display before writing HTML.
    * `libdoc_breadcrumb.liquid` <br>⤷ markup for breadcrumb.
    * `libdoc_page.liquid` <br>⤷ the most important template to [create pages](/content/creating-content/index.md).
    * `sandbox.liquid` <br>⤷ the dedicated template for [sandboxes](/content/creating-content/widgets/sandboxes.md).
* `assets/` <br>⤷ Dedicated user directory for static files like CSS, JS, images etc. Any file into this directory is copied into the build folder.[Learn more](https://www.11ty.dev/docs/copy/).
* `core/` <br>⤷ LibDoc system directory for UI layouts and assets.
    * `assets/` <br>⤷ Directory containing all CSS, JS and font files to make LibDoc user interface working properly.
        * `js/`
        * `fonts/`
        * `css/`
    * `libdoc_blog.liquid` <br>⤷ blog related layout. [Learn more](/content/creating-content/blogging.md).
    * `libdoc_search_index.liquid` <br>⤷ builds search index JSON file.
    * `libdoc_search.html` <br>⤷ layout dedicated to search results.
    * `libdoc_tag.liquid` <br>⤷ layout that displays a list of pages tagged with a specific tag.
    * `libdoc_tags.liquid`<br>layout that displays the list of all tags available into your content.
* `sandboxes/` <br>⤷ Dedicated user directory for [file sandboxes](/content/creating-content/widgets/sandboxes.md#file-sandbox).
* `.eleventy.js` <br>⤷ Eleventy config file. [Learn more](https://www.11ty.dev/docs/config/).
* `.eleventyignore` <br>⤷ File and directories not to process in Eleventy. [Learn more](https://www.11ty.dev/docs/ignores/).
* `.gitignore` <br>⤷ Files and directories to ignore in Git.
* `favicon.png` <br>⤷ Default favicon file. [Learn more](/content/configuration/favicon.md).
* `package-lock.json` <br>⤷ Node package file.
* `package.json` <br>⤷ Node package file.
* `settings.json` <br>⤷ Project settings. [Learn more](/content/configuration/index.md)

[11ty]: https://www.11ty.dev/