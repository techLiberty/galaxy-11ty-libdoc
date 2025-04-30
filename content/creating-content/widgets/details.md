---
layout: libdoc_page.liquid
eleventyNavigation:
    key: Details and accordions
    parent: Widgets
description: Create simple dropdown toggle and accordions
permalink: creating-content/widgets/details-and-accordions/index.html
---
<details>
    <summary>LibDoc description</summary>
    <p>LibDoc is an <a href="https://www.11ty.dev">Eleventy</a> starter project dedicated to documentation.</p>
</details>

```html
<details>
    <summary>LibDoc description</summary>
    <p>LibDoc is an <a href="https://www.11ty.dev">Eleventy</a> starter project dedicated to documentation.</p>
</details>
```
 
[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)

In addition, contiguous details tags with the same name attribute value can create accordions. See example below.

<details name="languages">
    <summary>HTML</summary>
    <p>
        <strong>Semantic Frist!</strong><br>
        Write semantic content with <abbr title="Hyper Text Markup Language">HTML</abbr>.
        Learn more at <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">MDN</a>
    </p>
</details>
<details name="languages">
    <summary>CSS</summary>
    <p>
        <strong>Get Styled!</strong><br>
        Customize and add style to your content with <abbr title="Cascading Style Sheets">CSS</abbr>.
        Learn more at <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">MDN</a>
    </p>
</details>
<details name="languages">
    <summary>Javascript</summary>
    <p>
        <strong>Sprinkle some magic</strong><br>
        Add spicy interactions to your pages with <abbr title="JavaScript">JS</abbr> programing language.
        Learn more at <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">MDN</a>
    </p>
</details>


