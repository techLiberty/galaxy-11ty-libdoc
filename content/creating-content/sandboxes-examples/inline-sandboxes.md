---
layout: libdoc_page
eleventyNavigation:
    key: Inline sandboxes examples
    parent: Sandboxes
description: Examples of inline sandboxes
permalink: creating-content/sandboxes/inline-examples/index.html
tags:
    - sandbox
---


{% sandbox %}
<style>
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 2em;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: yellowgreen;
        color: white;
        font-weight: 800;
        letter-spacing: -0.05em;
        min-height: 100vh;
        text-align: center;
        font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, Cantarell, Ubuntu, roboto, noto, helvetica, arial, sans-serif;
    }
    h1 {
        margin: 0;
        text-transform: uppercase;
    }
</style>
<h1>I am the simpliest sandbox!</h1>
{% endsandbox %}


