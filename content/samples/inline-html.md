---
eleventyNavigation:
    key: Inline HTML
    # title: Markdown Samples
    # order: 20
# title: Markdown Samples
description: Use some raw HTML tags into your pages
layout: libdoc_page.liquid
permalink: inline-html/index.html
# date: false
# author: false
---


In addition of common [markdown](/content/samples/markdown.md), it is possible to use some raw HTML tags.

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
