---
title: Markdown Samples
description: All available markdown tags into a single page with examples
layout: simple_page.liquid
eleventyNavigation:
    key: Samples
    title: Markdown Samples
    order: 20
---

## Headings

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)

# H1
## H2
### H3
#### H4
##### H5
###### H6

Alternative syntax

Alt-H1
======

Alt-H2
------

```markdown
# H1
## H2
### H3
#### H4
##### H5
###### H6

Alternative syntax

Alt-H1
======

Alt-H2
------
```

## Emphasis


Lightest emphasis is set with single *asterisks* or _underscores_.

Strong emphasis is set with double **asterisks** or __underscores__.

It is possible to combined both emphasis with **asterisks and _underscores_**.

Strikethrough using two tildes. ~~this text is scratched.~~

```markdown
Lightest emphasis is set with single *asterisks* or _underscores_.

Strong emphasis is set with double **asterisks** or __underscores__.

It is possible to combined both emphasis with **asterisks and _underscores_**.

Strikethrough using two tildes. ~~this text is scratched.~~
```

## Lists

1. First ordered list item
2. Another item
    1. Sub First ordered list item
    2. Sub Another item
    3. Sub Unordered sub-list.
        1. Sub Sub First ordered list item
        2. Sub Sub Another item
        3. Sub Sub Unordered sub-list. 
        4. Sub Sub Actual numbers don't matter, just that it's a number sdjkhf qskdjgh dsqlkgjh qsldkggjh qskdjgh qskjldgh qljsgh qlkhsjdg lq
        5. Sub Sub Ordered sub-list
        6. Sub Sub And another item.
    4. Sub Actual numbers don't matter, just that it's a number
    5. Sub Ordered sub-list
    6. Sub And another item.
3. Unordered sub-list. 
4. Actual numbers don't matter, just that it's a number
5. Ordered sub-list
6. And another item.
7. And another item.
8. And another item.
9. And another item.    
10. And another item.

⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅
⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅
⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Unordered list can use asterisks
* Or minuses
    * Sub Unordered list can use asterisks
    * Sub Or minuses
        * Sub sub Unordered list can use asterisks
        * Sub sub Or minuses
        * Sub sub Or pluses Et est est magna voluptua et ut. Eirmod kasd et sit invidunt. Justo et clita magna accusam ea kasd sadipscing et, est et dolor amet lorem no diam et sed diam, diam diam rebum dolor rebum, sea accusam dolores et sed diam sadipscing magna gubergren, rebum diam sit diam lorem.
        * Sub sub And another item.
        * Sub sub And another item.
    * Sub Or pluses
    * Sub And another item.
    * Sub And another item.
* Or pluses
* And another item.
* And another item.

```markdown
1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item.

⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅
⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅
⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Unordered list can use asterisks
- Or minuses
+ Or pluses
```

## Links

There are two ways to create links.

[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links. 
http://www.example.com or <http://www.example.com> and sometimes 
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com

```markdown
There are two ways to create links.

[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links. 
http://www.example.com or <http://www.example.com> and sometimes 
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com
```

## Images

Here's our logo (hover to see the title text):

<img src="./skoda-best-winner-car-2022.jpg" alt="This is my description">

<a href="bricss.md"><img src="./skoda-best-winner-car-2022.jpg" alt="This is my description"></a>

![Oktavia](./oktavia.png)
Lorem ipsum ![mon alt](./skoda-best-winner-car-2022.jpg) 
![suv](https://raw.githubusercontent.com/ita-design-system/ug-releases/refs/heads/main/ui/medias/suv.png) Lorem ipsum ![SVG Alt](https://raw.githubusercontent.com/ita-design-system/ug-releases/main/ui/medias/solutions-cover.svg) and [![SVG Alt link](https://raw.githubusercontent.com/ita-design-system/ug-releases/main/ui/medias/2-people-and-dog.svg)](#svg) and [![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")](#)

<figure>
  <img src="./oktavia.png" alt="best car">
  <figcaption>Best car Skoda mon alt Dolor lorem eirmod stet elitr lorem labore lorem sed rebum, voluptua clita lorem diam lorem, dolor et aliquyam clita consetetur.</figcaption>
</figure>

<figure class="damier">
  <img src="./oktavia.png" alt="best car">
  <figcaption>Image with damier, just add class name <code>damier</code>.</figcaption>
</figure>

<figure class="dark">
  <img src="./oktavia.png" alt="best car">
  <figcaption>Best car Skoda mon alt Dolor lorem eirmod stet elitr lorem labore lorem sed rebum, voluptua clita lorem diam lorem, dolor et aliquyam clita consetetur.</figcaption>
</figure>

<figure class="dark damier">
  <img src="./oktavia.png" alt="best car">
  <figcaption>Best car Skoda mon alt Dolor lorem eirmod stet elitr lorem labore lorem sed rebum, voluptua clita lorem diam lorem, dolor et aliquyam clita consetetur.</figcaption>
</figure>

<figure>
  <img src="./skoda-best-winner-car-2022.jpg" alt="best car">
  <figcaption>Best car Skoda mon alt Dolor lorem eirmod stet elitr lorem labore lorem sed rebum, voluptua clita lorem diam lorem, dolor et aliquyam clita consetetur.</figcaption>
</figure>

<figure class="rounded-corners">
  <img src="./skoda-best-winner-car-2022.jpg" alt="best car">
  <figcaption>Best car Skoda mon alt Dolor lorem eirmod stet elitr lorem labore lorem sed rebum, voluptua clita lorem diam lorem, dolor et aliquyam clita consetetur.</figcaption>
</figure>

<figure class="long-shadow">
  <img src="./skoda-best-winner-car-2022.jpg" alt="best car">
  <figcaption>Best car Skoda mon alt Dolor lorem eirmod stet elitr lorem labore lorem sed rebum, voluptua clita lorem diam lorem, dolor et aliquyam clita consetetur.</figcaption>
</figure>

<figure class="rounded-corners long-shadow">
  <img src="./skoda-best-winner-car-2022.jpg" alt="best car">
  <figcaption>Best car Skoda mon alt Dolor lorem eirmod stet elitr lorem labore lorem sed rebum, voluptua clita lorem diam lorem, dolor et aliquyam clita consetetur.</figcaption>
</figure>

<figure class="rounded-corners damier">
  <figcaption>Best car Skoda mon alt Dolor lorem eirmod stet elitr lorem labore lorem sed rebum, voluptua clita lorem diam lorem, dolor et aliquyam clita consetetur.</figcaption>
  <img src="./oktavia.png" alt="best car">
</figure>

<figure class="rounded-corners damier">
  <img src="./oktavia.png" alt="best car">
  <figcaption>Best car Skoda mon alt Dolor lorem eirmod stet elitr lorem labore lorem sed rebum, voluptua clita lorem diam lorem, dolor et aliquyam clita consetetur.</figcaption>
</figure>

<figure class="rounded-corners damier dark">
  <figcaption>Best car Skoda mon alt Dolor lorem eirmod stet elitr lorem labore lorem sed rebum, voluptua clita lorem diam lorem, dolor et aliquyam clita consetetur.</figcaption>
  <img src="./oktavia.png" alt="best car">
</figure>

<figure class="rounded-corners damier dark">
  <img src="./oktavia.png" alt="best car">
  <figcaption>Best car Skoda mon alt Dolor lorem eirmod stet elitr lorem labore lorem sed rebum, voluptua clita lorem diam lorem, dolor et aliquyam clita consetetur.</figcaption>
</figure>




à partir de là





Inline-style: 
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style: 
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

```markdown
Here's our logo (hover to see the title text):

Inline-style: 
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style: 
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"
```

## Code and Syntax Highlighting

Code blocks are part of the Markdown spec, but syntax highlighting isn't. However, many renderers -- like Github's and Markdown Here -- support syntax highlighting. Which languages are supported and how those language names should be written will vary from renderer to renderer. Markdown Here supports highlighting for dozens of languages (and not-really-languages, like diffs and HTTP headers); to see the complete list, and how to write the language names, [see the highlight.js demo page](https://highlightjs.org/demo).

Inline `code` has `back-ticks around` it.

```markdown
Inline `code` has `back-ticks around` it.
```

Blocks of code are either fenced by lines with three back-ticks ```, or are indented with four spaces. I recommend only using the fenced code blocks -- they're easier and only they support syntax highlighting.

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```
 
```python
s = "Python syntax highlighting"
print s
```
 
```php
$s = "PHP syntax highlighting";
echo $s;
```

```markdown
    ```javascript
    var s = "JavaScript syntax highlighting";
    alert(s);
    ```
    
    ```python
    s = "Python syntax highlighting"
    print s
    ```
    
    ```
    No language indicated, so no syntax highlighting. 
    But let's throw in a <b>tag</b>.
    ```
```

```unknown
Unknown code markup
```

## Footnotes

Footnotes aren't part of the core Markdown spec, but they [supported by GFM](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#footnotes).

Here is a simple footnote[^1].

A footnote can also have multiple lines[^2].  

You can also use words, to fit your writing style more closely[^note].

[^1]: My reference.
[^2]: Every new line should be prefixed with 2 spaces.  
  This allows you to have a footnote with multiple lines.
[^note]:
    Named footnotes will still render with numbers instead of the text but allow easier identification and linking.  
    This footnote also has been made with a different syntax using 4 spaces for new lines.

```markdown
Here is a simple footnote[^1].

A footnote can also have multiple lines[^2].  

You can also use words, to fit your writing style more closely[^note].

[^1]: My reference.
[^2]: Every new line should be prefixed with 2 spaces.  
  This allows you to have a footnote with multiple lines.
[^note]:
    Named footnotes will still render with numbers instead of the text but allow easier identification and linking.  
    This footnote also has been made with a different syntax using 4 spaces for new lines.
```

## Tables

Tables aren't part of the core Markdown spec, but they are part of [GFM](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/) and Markdown Here supports them. They are an easy way of adding tables to your email -- a task that would otherwise require copy-pasting from another application.

Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the 
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3

```markdown
Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the 
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3
```

## Blockquotes

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote. 

```markdown
> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote. 
```

## Inline HTML

You can also use raw HTML in your Markdown, and it'll mostly work pretty well.

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

```html
<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>
```
<p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi lacus, auctor sit amet purus vel, gravida
    luctus lectus. Aenean rhoncus dapibus enim, sit amet faucibus leo ornare vitae. <br>
    <span> span </span>
    <b>Bold word</b>
    <i>italic</i>
    <em>emphasis</em>
    <mark>mark</mark>
    <small> small </small>
    <sub> sub </sub>
    <sup> sup </sup>
    <u> Statements... </u>
    <abbr title="National Aeronautics and Space Administration">NASA</abbr>
    <strike> strikethrough </strike>
    <span><del> deprecated info </del> <ins> new info </ins> </span>
    <s> not relevant </s>
    <a href="#link">link</a>
    <time datetime="2020-08-17 08:00">Monday at 8:00 AM</time>
    <ruby>
        <rb>ruby base</rb><rt>annotation
    </rt></ruby>
    <br>
    <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>CANC</kbd>
</p>

<p>“You're late!”</p>
<del>
  <p>“I apologize for the delay.”</p>
</del>
<ins cite="../howtobeawizard.html" datetime="2018-05">
  <p>“A wizard is never late …”</p>
</ins>

<p> This is a <q>short quote</q> </p>

<details>
    <summary>Summary of content below</summary>
    <p>Content 1</p>
    <p>Content 2</p>
    <p>Content 3</p>
    <p>Content 4</p>
</details>

<p>
    <var> variable </var> = 1000;
    <samp>Traceback (most recent call last):<br>NameError: name 'variabl' is not defined</samp>
</p>

<hr>

## Horizontal rule

Horizontal Rule

Three or more...

---

Hyphens

***

Asterisks

___

Underscores

```markdown
Horizontal Rule

Three or more...

---

Hyphens

***

Asterisks

___

Underscores
```

## Line breaks

Line Breaks

My basic recommendation for learning how line breaks work is to experiment and discover -- hit <Enter> once (i.e., insert one newline), then hit it twice (i.e., insert two newlines), see what happens. You'll soon learn to get what you want. "Markdown Toggle" is your friend.

Here are some things to try out:

```markdown
Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a *separate paragraph*.

This line is also a separate paragraph, but...
This line is only separated by a single newline, so it's a separate line in the *same paragraph*.
```


