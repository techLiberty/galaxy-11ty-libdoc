---
layout: libdoc_page
permalink: inline-html/index.html
eleventyNavigation:
    key: Inline HTML
    # title: Markdown Samples
    # order: 20
# title: Markdown Samples
description: Use some raw HTML tags into your pages
# date: false
# author: false
---

In addition of common [markdown](/content/markdown.md), it is possible to use some raw HTML tags.

## Line break

* **I am an item** <br>
    Sometimes it comes we need to break the line inside markdown
* **I am another item** <br>
    Sometimes it comes we need to re-break the line inside markdown
* **I am the ultimate item** <br>
    Sometimes it comes we need to re-re-break the line inside markdown


```markdown
* **I am an item** <br>
    Sometimes it comes we need to break the line
* **I am another item** <br>
    Sometimes it comes we need to re-break the line
* **I am the ultimate item** <br>
    Sometimes it comes we need to re-re-break the line
```

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br)

## Links

Just like [Markdown internal links](/content/markdown.md#internal-links), you can write dynamic HTML links pointing to input path and then easily create links between your project pages. **`permalink` must be set into the destination page**. If permalink changes on destination page, internal links pointing to this page change accordingly. 

Of course, non-dynamic links work too! Here is an example:

Let’s go to <a href="/content/markdown.md">Markdown</a> page (dynamic link) 
or <a href="/content/front-matter/index.md">Front matter</a> page (dynamic link) 
or <a href="/content/front-matter/front-matter-minimal/">minimal</a> page (static link) 

```html
Let’s go to <a href="/content/markdown.md">Markdown</a> page (dynamic link) 
or <a href="/content/front-matter/index.md">Front matter</a> page (dynamic link) 
or <a href="/content/front-matter/front-matter-minimal/">minimal</a> page (static link) 
```

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)

## Definition lists

<dl>
    <dt>Term</dt>
    <dd>This is the text defining the term.</dd>
    <dt>Markdown</dt>
    <dd>Markdown is a lightweight markup language for creating formatted text using a plain-text editor. John Gruber created Markdown in 2004 as an easy-to-read markup language.</dd>
    <dt>HTML<dt>
    <dd>Hypertext Markup Language (HTML) is the standard markup language[a] for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript, a programming language.</dd>
</dl>

```html
<dl>
    <dt>Term</dt>
    <dd>This is the text defining the term.</dd>
    <dt>Markdown</dt>
    <dd>Markdown is a lightweight markup language for creating formatted text using a plain-text editor. John Gruber created Markdown in 2004 as an easy-to-read markup language.</dd>
    <dt>HTML<dt>
    <dd>Hypertext Markup Language (HTML) is the standard markup language[a] for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript, a programming language.</dd>
</dl>
```

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl)

## Details

<details>
    <summary>LibDoc description</summary>
    LibDoc is an <a href="https://www.11ty.dev">Eleventy</a> starter project dedicated to documentation.
</details>

```html
<details>
    <summary>LibDoc description</summary>
    LibDoc is an <a href="https://www.11ty.dev">Eleventy</a> starter project dedicated to documentation.
</details>
```
 
[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)


## Inline quotation

And then Albus says 
<q cite="https://www.harrypotter.com/fr/features/pearls-of-wisdom-from-professor-dumbledore">
    It is our choices, Harry, that show what we truly are, far more than our abilities.
</q> 
to Harry.

```html
And then Albus says 
<q cite="https://www.harrypotter.com/fr/features/pearls-of-wisdom-from-professor-dumbledore">
    It is our choices, Harry, that show what we truly are, far more than our abilities.
</q> 
to Harry.
```
 
[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q)

## Variable

The volume of a box is <var>l</var> × <var>w</var> × <var>h</var>, where
<var>l</var> represents the length, <var>w</var> the width and
<var>h</var> the height of the box.

```html
The volume of a box is <var>l</var> × <var>w</var> × <var>h</var>, where
<var>l</var> represents the length, <var>w</var> the width and
<var>h</var> the height of the box.
```
 
[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/var)

## Superscript

Equation *a*<sup>2</sup> + *b*<sup>2</sup> = *c*<sup>2</sup> usually expresses the *Pythagorean theorem*.

```markdown
Equation *a*<sup>2</sup> + *b*<sup>2</sup> = *c*<sup>2</sup> usually expresses the *Pythagorean theorem*.
```

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup)

## Subscript

Caffeine **C**<sub>8</sub>**H**<sub>10</sub>**N**<sub>4</sub>**O**<sub>2</sub> is known to be the favorite’s developer molecule.

```html
Caffeine **C**<sub>8</sub>**H**<sub>10</sub>**N**<sub>4</sub>**O**<sub>2</sub> is known to be the favorite’s developer molecule.
```

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub)

## Abbr

With <abbr title="Eleventy">11ty</abbr> you can use <abbr title="Cascading Style Sheets">CSS</abbr> to style your
<abbr title="HyperText Markup Language">HTML</abbr>. Title attribute is optional.

```markdown
With <abbr title="Eleventy">11ty</abbr> you can use <abbr title="Cascading Style Sheets">CSS</abbr> to style your
<abbr title="HyperText Markup Language">HTML</abbr>. Title attribute is optional.
```

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr)

## Mark

Here is a paragraph with a mark tag that <mark>highlights text fragment</mark>.

```html
Here is a paragraph with a mark tag that <mark>highlights text fragment</mark>.
```

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark)

## Unarticulated annotation

Here is a paragraph with an <u>unarticulated annotation</u>.

```html
Here is a paragraph with an <u>unarticulated annotation</u>.
```

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/u)

## Side comment

Eleventy LibDoc is a starter project to create documentation website.

<small>Eleventy LibDoc is under MIT License.</small>

```html
<small>Eleventy LibDoc is under MIT License.</small>
```

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small)

## Strikethrough

This tag is useful when you wish <s>to emphasis</s> to display something not relevant anymore.

```html
This tag is useful when you wish <s>to emphasis</s> to display something not relevant anymore.
```
 
[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s)

## Deleted text

When you want to display something that was <del>added</del> deleted.

```html
When you want to display something that was <del>added</del> deleted.
```
 
[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del)

## Inserted text

When you want to display something that was <ins>added</ins>.

```html
When you want to display something that was <ins>added</ins>.
```
 
[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins)

## Time and date

The concert took place on <time datetime="2018-07-07">July 7th, 2018</time> 
and started at <time datetime="PT20H30M">20h 30m</time>.

```html
The concert took place on <time datetime="2018-07-07">July 7th, 2018</time> 
and started at <time datetime="PT20H30M">20h 30m</time>.
```
 
[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time)

## Keyboard input element

You can use <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> to refresh page and empty cache.

```html
You can use <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> to refresh page and empty cache.
```
 
[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd)

## Sample output

Neo wakes up and reads his screen saying, 
<samp>The Matrix has you... Follow the white rabbit... Knock, knock, Neo.</samp>

```html
Neo wakes up and reads his screen saying, 
<samp>The Matrix has you... Follow the white rabbit... Knock, knock, Neo.</samp>
```
 
[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/samp)

## Ruby

Even if not common, ruby tag represents <ruby>small annotations<rt>Ruby</rt></ruby> that are rendered above spec (single work recommended).
<ruby>A text fragment <rt>Description</rt></ruby> can be described.

```html
Even if not common, ruby tag represents <ruby>small annotations<rt>Ruby</rt></ruby> that are rendered above spec (single work recommended).
<ruby>A text fragment <rt>Description</rt></ruby> can be described.
```
 
[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby)