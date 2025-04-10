---
eleventyNavigation:
    key: Markdown
    # title: Markdown Samples
    # order: 20
# title: Markdown Samples
description: All available markdown tags into a single page with examples
layout: libdoc_page.liquid
permalink: markdown/index.html
date: Last Modified
# author: false
---

This page illustrates renders of all different markdown tags. Learn more about [markdown](https://en.wikipedia.org/wiki/Markdown).

## Paragraph and carriage return

At glance: Double carriage return renders a paragraph, single carriage return renders ... a simple carriage return. Here is an example.

First paragraph: Dolores justo sadipscing gubergren magna elitr consetetur sea tempor, elitr dolore vero stet ea dolores lorem. Voluptua vero consetetur sadipscing.

Second paragraph because of double carriage return. Dolores justo sadipscing gubergren magna elitr consetetur sea tempor, elitr dolore vero stet ea dolores lorem. Voluptua vero consetetur sadipscing.

Paragraph: Dolores justo sadipscing gubergren magna elitr consetetur sea tempor, elitr dolore vero stet ea dolores lorem. Voluptua vero consetetur sadipscing.
Single carriage return done, still the same paragraph: Dolores justo sadipscing gubergren magna elitr consetetur sea tempor, elitr dolore vero stet ea dolores lorem. Voluptua vero consetetur sadipscing.

```markdown
First paragraph: Dolores justo sadipscing gubergren magna elitr consetetur sea tempor, elitr dolore vero stet ea dolores lorem. Voluptua vero consetetur sadipscing.

Second paragraph because of double carriage return. Dolores justo sadipscing gubergren magna elitr consetetur sea tempor, elitr dolore vero stet ea dolores lorem. Voluptua vero consetetur sadipscing.

Paragraph: Dolores justo sadipscing gubergren magna elitr consetetur sea tempor, elitr dolore vero stet ea dolores lorem. Voluptua vero consetetur sadipscing.
Single carriage return done, still the same paragraph: Dolores justo sadipscing gubergren magna elitr consetetur sea tempor, elitr dolore vero stet ea dolores lorem. Voluptua vero consetetur sadipscing.
```

# h1 heading
## h2 heading
### h3 heading
#### h4 heading
##### h5 heading
###### h6 heading

```markdown
# h1 heading
## h2 heading
### h3 heading
#### h4 heading
##### h5 heading
###### h6 heading
```

## Emphasis

Lightest emphasis is set with single *asterisks* or _underscores_.

Strong emphasis is set with double **asterisks** or __underscores__.

Strikethrough using two tildes. ~~this text is scratched.~~

```markdown
Lightest emphasis is set with single *asterisks* or _underscores_.

Strong emphasis is set with double **asterisks** or __underscores__.

Strikethrough using two tildes. ~~this text is scratched.~~
```

## Unordered lists

To create unordered lists, use asterisks `*` or `+` or `-` followed by space. To create unordered lists into unordered list items, indent your text just like the following example.

* I am the first item of the unordered list
* I am the second item and i contain another unordered list
    - Small item
    - Another unordered list into an item
        + Sub sub item
        + Another sub sub item.
        + A sub sub item containing multiple paragraphs. Dolores justo sadipscing gubergren magna elitr consetetur sea tempor, elitr dolore vero stet ea dolores lorem. Voluptua vero consetetur sadipscing.
        + Penultimate item.
        + And this is the latest item.
    - Sub Or pluses
    - Sub And another item.
    - Sub And another item.
* Voluptua vero consetetur sadipscing.
* Dolores justo sadipscing gubergren magna.
* Justo dolore vero stet ea dolores lorem.


```markdown
* I am the first item of the unordered list
* I am the second item and i contain another unordered list
    - Small item
    - Another unordered list into an item
        + Sub sub item
        + Another sub sub item.
        + A sub sub item containing multiple paragraphs. Dolores justo sadipscing gubergren magna elitr consetetur sea tempor, elitr dolore vero stet ea dolores lorem. Voluptua vero consetetur sadipscing.
        + Penultimate item.
        + And this is the latest item.
    - Sub Or pluses
    - Sub And another item.
    - Sub And another item.
* Voluptua vero consetetur sadipscing.
* Dolores justo sadipscing gubergren magna.
* Justo dolore vero stet ea dolores lorem.
```

## Ordered lists

LibDoc supports automatic nestable bullet numbering. Incremental writing is optional. You can set `1.`on every item. Here is an example taken from [Geologic time scale](https://en.wikipedia.org/wiki/Geologic_time_scale).

1. Hadean Eon (4567–4030 Ma)
1. Chaotian Era/Erathem (4567–4404 Ma) – the name alluding both to the mythological Chaos and the chaotic phase of planet formation.
1. Jack Hillsian or Zirconian Era/Erathem (4404–4030 Ma) – both names allude to the Jack Hills Greenstone Belt which provided the oldest mineral grains on Earth, zircons.
1. Archean Eon/Eonothem (4030–2420 Ma)
1. Paleoarchean Era/Erathem (4030–3490 Ma)
1. Acastan Period/System (4030–3810 Ma) – named after the Acasta Gneiss, one of the oldest preserved pieces of continental crust.
1. Isuan Period/System (3810–3490 Ma) – named after the Isua Greenstone Belt.
1. Mesoarchean Era/Erathem (3490–2780 Ma)
1. Vaalbaran Period/System (3490–3020 Ma) – based on the names of the Kaapvaal (Southern Africa) and Pilbara (Western Australia) cratons, to reflect the growth of stable continental nuclei or proto-cratonic kernels.
1. Pongolan Period/System (3020–2780 Ma) – named after the Pongola Supergroup, in reference to the well preserved evidence of terrestrial microbial communities in those rocks.
1. Neoarchean Era/Erathem (2780–2420 Ma)
1. Methanian Period/System (2780–2630 Ma) – named for the inferred predominance of methanotrophic prokaryotes
1. Siderian Period/System (2630–2420 Ma) – named for the voluminous banded iron formations formed within its duration.
1. Proterozoic Eon/Eonothem (2420–538.8 Ma)
1. Paleoproterozoic Era/Erathem (2420–1780 Ma)
1. Oxygenian Period/System (2420–2250 Ma) – named for displaying the first evidence for a global oxidising atmosphere.
1. Jatulian or Eukaryian Period/System (2250–2060 Ma) – names are respectively for the Lomagundi–Jatuli δ13C isotopic excursion event spanning its duration, and for the (proposed) first fossil appearance of eukaryotes.
1. Columbian Period/System (2060–1780 Ma) – named after the supercontinent Columbia.
1. Mesoproterozoic Era/Erathem (1780–850 Ma)
1. Rodinian Period/System (1780–850 Ma) – named after the supercontinent Rodinia, stable environment.

```markdown
1. Hadean Eon (4567–4030 Ma)
1. Chaotian Era/Erathem (4567–4404 Ma) – the name alluding both to the mythological Chaos and the chaotic phase of planet formation.
1. Jack Hillsian or Zirconian Era/Erathem (4404–4030 Ma) – both names allude to the Jack Hills Greenstone Belt which provided the oldest mineral grains on Earth, zircons.
1. Archean Eon/Eonothem (4030–2420 Ma)
1. Paleoarchean Era/Erathem (4030–3490 Ma)
1. Acastan Period/System (4030–3810 Ma) – named after the Acasta Gneiss, one of the oldest preserved pieces of continental crust.
1. Isuan Period/System (3810–3490 Ma) – named after the Isua Greenstone Belt.
1. Mesoarchean Era/Erathem (3490–2780 Ma)
1. Vaalbaran Period/System (3490–3020 Ma) – based on the names of the Kaapvaal (Southern Africa) and Pilbara (Western Australia) cratons, to reflect the growth of stable continental nuclei or proto-cratonic kernels.
1. Pongolan Period/System (3020–2780 Ma) – named after the Pongola Supergroup, in reference to the well preserved evidence of terrestrial microbial communities in those rocks.
1. Neoarchean Era/Erathem (2780–2420 Ma)
1. Methanian Period/System (2780–2630 Ma) – named for the inferred predominance of methanotrophic prokaryotes
1. Siderian Period/System (2630–2420 Ma) – named for the voluminous banded iron formations formed within its duration.
1. Proterozoic Eon/Eonothem (2420–538.8 Ma)
1. Paleoproterozoic Era/Erathem (2420–1780 Ma)
1. Oxygenian Period/System (2420–2250 Ma) – named for displaying the first evidence for a global oxidising atmosphere.
1. Jatulian or Eukaryian Period/System (2250–2060 Ma) – names are respectively for the Lomagundi–Jatuli δ13C isotopic excursion event spanning its duration, and for the (proposed) first fossil appearance of eukaryotes.
1. Columbian Period/System (2060–1780 Ma) – named after the supercontinent Columbia.
1. Mesoproterozoic Era/Erathem (1780–850 Ma)
1. Rodinian Period/System (1780–850 Ma) – named after the supercontinent Rodinia, stable environment.
```

Below is an example mixing other markdown tags

1. **Hadean Eon (4567–4030 Ma)**
    1. *Chaotian Era/Erathem (4567–4404 Ma)* – the name alluding both to the mythological Chaos and the chaotic phase of planet formation.
    1. *Jack Hillsian or Zirconian Era/Erathem (4404–4030 Ma)* – both names allude to the Jack Hills Greenstone Belt which provided the oldest mineral grains on Earth, zircons.
1. **Archean Eon/Eonothem (4030–2420 Ma)**
    1. *Paleoarchean Era/Erathem (4030–3490 Ma)*
        1. *Acastan Period/System (4030–3810 Ma)* – named after the Acasta Gneiss, one of the oldest preserved pieces of continental crust.
        1. *Isuan Period/System (3810–3490 Ma)* – named after the Isua Greenstone Belt.
    1. *Mesoarchean Era/Erathem (3490–2780 Ma)*
        1. *Vaalbaran Period/System (3490–3020 Ma)* – based on the names of the Kaapvaal (Southern Africa) and Pilbara (Western Australia) cratons, to reflect the growth of stable continental nuclei or proto-cratonic kernels.
        1. *Pongolan Period/System (3020–2780 Ma)* – named after the Pongola Supergroup, in reference to the well preserved evidence of terrestrial microbial communities in those rocks.
    1. *Neoarchean Era/Erathem (2780–2420 Ma)*
        1. *Methanian Period/System (2780–2630 Ma)* – named for the inferred predominance of methanotrophic prokaryotes
        1. *Siderian Period/System (2630–2420 Ma)* – named for the voluminous banded iron formations formed within its duration.
1. **Proterozoic Eon/Eonothem (2420–538.8 Ma)**
    1. *Paleoproterozoic Era/Erathem (2420–1780 Ma)*
        1. *Oxygenian Period/System (2420–2250 Ma)* – named for displaying the first evidence for a global oxidising atmosphere.
        1. *Jatulian or Eukaryian Period/System (2250–2060 Ma)* – names are respectively for the Lomagundi–Jatuli δ13C isotopic excursion event spanning its duration, and for the (proposed) first fossil appearance of eukaryotes.
        1. *Columbian Period/System (2060–1780 Ma)* – named after the supercontinent Columbia.
    1. *Mesoproterozoic Era/Erathem (1780–850 Ma)*
        1. *Rodinian Period/System (1780–850 Ma)* – named after the supercontinent Rodinia, stable environment.

```markdown
1. **Hadean Eon (4567–4030 Ma)**
    1. *Chaotian Era/Erathem (4567–4404 Ma)* – the name alluding both to the mythological Chaos and the chaotic phase of planet formation.
    1. *Jack Hillsian or Zirconian Era/Erathem (4404–4030 Ma)* – both names allude to the Jack Hills Greenstone Belt which provided the oldest mineral grains on Earth, zircons.
1. **Archean Eon/Eonothem (4030–2420 Ma)**
    1. *Paleoarchean Era/Erathem (4030–3490 Ma)*
        1. *Acastan Period/System (4030–3810 Ma)* – named after the Acasta Gneiss, one of the oldest preserved pieces of continental crust.
        1. *Isuan Period/System (3810–3490 Ma)* – named after the Isua Greenstone Belt.
    1. *Mesoarchean Era/Erathem (3490–2780 Ma)*
        1. *Vaalbaran Period/System (3490–3020 Ma)* – based on the names of the Kaapvaal (Southern Africa) and Pilbara (Western Australia) cratons, to reflect the growth of stable continental nuclei or proto-cratonic kernels.
        1. *Pongolan Period/System (3020–2780 Ma)* – named after the Pongola Supergroup, in reference to the well preserved evidence of terrestrial microbial communities in those rocks.
    1. *Neoarchean Era/Erathem (2780–2420 Ma)*
        1. *Methanian Period/System (2780–2630 Ma)* – named for the inferred predominance of methanotrophic prokaryotes
        1. *Siderian Period/System (2630–2420 Ma)* – named for the voluminous banded iron formations formed within its duration.
1. **Proterozoic Eon/Eonothem (2420–538.8 Ma)**
    1. *Paleoproterozoic Era/Erathem (2420–1780 Ma)*
        1. *Oxygenian Period/System (2420–2250 Ma)* – named for displaying the first evidence for a global oxidising atmosphere.
        1. *Jatulian or Eukaryian Period/System (2250–2060 Ma)* – names are respectively for the Lomagundi–Jatuli δ13C isotopic excursion event spanning its duration, and for the (proposed) first fossil appearance of eukaryotes.
        1. *Columbian Period/System (2060–1780 Ma)* – named after the supercontinent Columbia.
    1. *Mesoproterozoic Era/Erathem (1780–850 Ma)*
        1. *Rodinian Period/System (1780–850 Ma)* – named after the supercontinent Rodinia, stable environment.
```

## Brackets links

The most simple way to create a link.

<https://github.com/ita-design-system/eleventy-libdoc>

```markup
<https://github.com/ita-design-system/eleventy-libdoc>
```

## Internal links

Easily create links between your project pages. Eleventy allows to create dynamic links, you set the path to the source file and the link URL is automatically rendered.

**`permalink` must be set into the destination page**. If permalink changes on destination page, internal links pointing to this page change accordingly.

[Bring me to the page ./markdown.md](/content/markdown.md)

```markdown
[Bring me to the page ./markdown.md](/content/markdown.md)
```

Links <abbr title="Uniform Resource Locator">URL</abbr> to pages that does not set `permalink` **don’t change automatically** but works fine.

[Bring me to the page ./markdown.md](/markdown/)

```markdown
[Bring me to the page ./markdown.md](/markdown/)
```

## Reference links

Reference links allows to assign text shortcuts to <abbr title="Uniform Resource Locator">URL</abbr> and are useful when this URL is used multiple times. *Reference links are case insensitive*. Example:

I am a paragraph that contains [multiple links][1] with the same [URL][1].
[Permalinks][2] are set at the beginning of every page into the [front matter][2]
The [Geologic Time Scale][Geologic Time Scale] or geological time scale
([GTS][geologic time scale]) is a representation of time based on the rock record of Earth. 

[1]: https://en.wikipedia.org/wiki/URL
[2]: /front-matter/
[geologic time scale]: https://en.wikipedia.org/wiki/Geologic_time_scale

```markdown
I am a paragraph that contains [multiple links][1] with the same [URL][1].
[Permalinks][2] are set at the beginning of every page into the [front matter][2]
The [Geologic Time Scale][Geologic Time Scale] or geological time scale
([GTS][geologic time scale]) is a representation of time based on the rock record of Earth. 

[1]: https://en.wikipedia.org/wiki/URL
[2]: /front-matter/
[geologic time scale]: https://en.wikipedia.org/wiki/Geologic_time_scale
```

Note that dynamic links to file input path don’t work on reference links. 
`[1]: /content/front-matter.md` Does not work.

## Links with title

Optionnaly, you can add a title attribute to your markdown links, adding a space and a text between quotes after link <abbr title="Uniform Resource Locator">URL</abbr>.

[Dynamic link to front matter](/content/front-matter.md "Go to front matter")

```markup
[Dynamic link to front matter](/content/front-matter.md "Go to front matter")
```

## Images

To optimize page performances and bandwidth, raster images like PNG, JPEG, GIF are transcoded into [AVIF][avif wiki] and [WEBP][webp wiki] format through [Eleventy Image Plugin](https://www.11ty.dev/docs/plugins/image/). Vector images are used as is.

### Local images

Here is a simple case with a raster image ![Alt text](/content/medias/pierra-menta.jpg)

```markdown
![Alt text](/content/medias/pierra-menta.jpg) 
```

Here is a simple case with a vector image ![Alt text](/content/medias/grue-royale.svg) 

```markdown
![Alt text](/content/medias/grue-royale.svg) 
```

[avif wiki]: https://en.wikipedia.org/wiki/AVIF
[webp wiki]: https://en.wikipedia.org/wiki/WEBP

Example of an image with a dynamic link.
[![Alt text](/content/medias/pierra-menta.jpg)](/content/samples/markdown.md#images)

Optionally add a title attribute
[![Alt text](/content/medias/pierra-menta.jpg)](/content/samples/markdown.md#images "Go to Markdown page section Images")

```markdown
Example of an image with a dynamic link. 
[![Alt text](/content/medias/pierra-menta.jpg)](/content/samples/markdown.md#images)

Optionally add a title attribute
[![Alt text](/content/medias/pierra-menta.jpg)](/content/samples/markdown.md#images "Go to Markdown page section Images")
```

Here is an example of a markdown link inclufing a raster image with its natural width smaller than main content width

[![alt text](/favicon.png)](/content/samples/markdown.md#images "Go to Markdown page section Images").

*Please note that, awaiting enhancement, raster images smaller than main content width do not render properly on high density displays like Retina.*

Here is an example of a markdown link inclufing a vector image with its natural width smaller than main content width

[![alt text](/content/medias/info.svg)](/content/samples/markdown.md#images "Go to Markdown page section Images").

### Remote images

Remote images are processed just like [local images](#local-images) through Eleventy Image Plugin.

A JPEG remote image
![Young marmots](https://raw.githubusercontent.com/olivier3lanc/photographies/master/animaux/sauvages/img_4417.jpg) 

Small remote SVG logo
![SVG Logo Scroll Btween](https://raw.githubusercontent.com/olivier3lanc/Scroll-Btween/refs/heads/master/img/logo-scroll-btween.svg)

```markdown
A JPEG remote image
![Young marmots](https://raw.githubusercontent.com/olivier3lanc/photographies/master/animaux/sauvages/img_4417.jpg) 

Small remote SVG logo
![SVG Logo Scroll Btween](https://raw.githubusercontent.com/olivier3lanc/Scroll-Btween/refs/heads/master/img/logo-scroll-btween.svg)
```

### Reference images

Just like [reference links](#reference-links), you can assign text shortcuts to absolute or relative image URL. This avoids repeating same URL multiple times. Here is an example below.

![alt text][gypaetus]

[gypaetus]: /content/medias/gypaetus-barbatus-peisey.jpg "Gypaetus Barbatus flying"

```markdown
![alt text][gypaetus]

[gypaetus]: /content/medias/gypaetus-barbatus-peisey.jpg "Gypaetus Barbatus flying"
```

## Inline code

To display very short length of `code`, just `use the **following** # syntax`.

```markup
To display very short length of `code`, just `use the **following** # syntax`.
```

## Syntax highlighting

Eleventy LibDoc uses [highlight.js](https://highlightjs.org/demo) to highlight code.

To create a code block, enter three back-ticks ` ``` ` followed by the language name and end with the same ` ``` ` into a new line. Here are few examples.

Example of syntax highlighting with HTML

```html
<h1>Hello World!</h1>
<p>This is a <a href="/link/">link</a>.</p>
```

Markdown code

```markdown
    ```html
    <h1>Hello World!</h1>
    <p>This is a <a href="/link/">link</a>.</p>
    ```
```

Example of syntax highlighting with Javascript

```javascript
const m = "JavaScript syntax highlighting";
alert(m);
```

Markdown code

```markdown
    ```javascript
    const m = "JavaScript syntax highlighting";
    alert(m);
    ```
```

Example of syntax highlighting with Python

```python
s = "Python syntax highlighting"
print s
```

Markdown code

```markdown
    ```python
    s = "Python syntax highlighting"
    print s
    ```
```


Example of syntax highlighting with PHP

```php
$s = "PHP syntax highlighting";
echo $s;
```

Markdown code

```markdown
    ```php
    $s = "PHP syntax highlighting";
    echo $s;
    ```
```

Example of syntax highlighting with Liquid. Encapsulate code into `raw ... endraw` [raw paired shortcodes](https://liquidjs.com/tags/raw.html).

```liquid
{% raw %}{% assign filePath = "." | append: path %}
{% sandboxFile path, title %}{% renderFile filePath %}{% endsandboxFile %}{% endraw %}
```

Markdown code

```markdown
    ```liquid
    {% raw %}{% assign filePath = "." | append: path %}
    {% sandboxFile path, title %}{% renderFile filePath %}{% endsandboxFile %}{% endraw %}
    ```
```

Example of syntax highlighting with unspecified code

```
No language specified may render unwanted result, please specify.
```

```markdown
    ```
    No language specified may render unwanted result, please specify.
    ```
```

Additional languages may be added into the page, see <https://highlightjs.org/download>

## Tables

Table markdown was made by [Github Flavoured Markdown](https://github.github.com/gfm/#tables-extension-) as an extension of the [Markdown specifications](https://daringfireball.net/projects/markdown/syntax).

Tables are responsive and with horizontal scroll enabled if its content is wider than the max width of the main content wrapper.

| First column    | Second        | Third |
| -------------   |:-------------:| -----:|
| col 3 is        | right-aligned |  1600 |
| col 2 is        | centered      |    12 |
| Alternate lines | are neat      |     1 |

| Year | Film                                          | Director       | Composer          |
|------|-----------------------------------------------|----------------|-------------------|
| 2001 | Harry Potter and the Philosopher's Stone      | Chris Columbus | John Williams     |
| 2002 | Harry Potter and the Chamber of Secrets       | Chris Columbus | John Williams     |
| 2004 | Harry Potter and the Prisoner of Azkaban      | Alfonso Cuarón | John Williams     |
| 2005 | Harry Potter and the Goblet of Fire           | Mike Newell    | Patrick Doyle     |
| 2007 | Harry Potter and the Order of the Phoenix     | David Yates    | Nicholas Hooper   |
| 2009 | Harry Potter and the Half-Blood Prince        | David Yates    | Nicholas Hooper   |
| 2010 | Harry Potter and the Deathly Hallows – Part 1 | David Yates    | Alexandre Desplat |
| 2011 | Harry Potter and the Deathly Hallows – Part 2 | David Yates    | Alexandre Desplat |


**There must be at least 3 dashes separating each header cell.**
The outer pipes (|) are optional, and you don't need to make the 
raw Markdown line up prettily. You can also use inline Markdown inside table cells.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3

```markdown
| First column    | Second        | Third |
| -------------   |:-------------:| -----:|
| col 3 is        | right-aligned |  1600 |
| col 2 is        | centered      |    12 |
| Alternate lines | are neat      |     1 |

| Year | Film                                          | Director       | Composer          |
|------|-----------------------------------------------|----------------|-------------------|
| 2001 | Harry Potter and the Philosopher's Stone      | Chris Columbus | John Williams     |
| 2002 | Harry Potter and the Chamber of Secrets       | Chris Columbus | John Williams     |
| 2004 | Harry Potter and the Prisoner of Azkaban      | Alfonso Cuarón | John Williams     |
| 2005 | Harry Potter and the Goblet of Fire           | Mike Newell    | Patrick Doyle     |
| 2007 | Harry Potter and the Order of the Phoenix     | David Yates    | Nicholas Hooper   |
| 2009 | Harry Potter and the Half-Blood Prince        | David Yates    | Nicholas Hooper   |
| 2010 | Harry Potter and the Deathly Hallows – Part 1 | David Yates    | Alexandre Desplat |
| 2011 | Harry Potter and the Deathly Hallows – Part 2 | David Yates    | Alexandre Desplat |

**There must be at least 3 dashes separating each header cell.**
The outer pipes (|) are optional, and you don't need to make the 
raw Markdown line up prettily. You can also use inline Markdown inside table cells.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3
```

## Blockquotes

Start each line with `> + space`.

> It is our choices, Harry, that show what we truly are, far more than our abilities.
> 
> — **Albus Dumbledore**

> We've all got both light and dark inside us. What matters is the part we choose to act on. That's who we really are.
> 
> — **Sirius Black**


```markdown
> It is our choices, Harry, that show what we truly are, far more than our abilities.
> 
> — **Albus Dumbledore**

> We've all got both light and dark inside us. What matters is the part we choose to act on. That's who we really are.
> 
> — **Sirius Black**
```

## Horizontal rule

To create an horizontal rule, just write at least three hyphens `---`, underscore `___` or asterisks `***`.

Hyphens

---

Asterisks

***

Underscores

___


```markdown
Hyphens

---

Asterisks

***

Underscores

___
```



