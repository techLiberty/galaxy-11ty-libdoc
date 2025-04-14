---
layout: libdoc_page
permalink: primary-navigation/search-occurrences/index.html
eleventyNavigation:
    key: Search occurrences
    parent: Primary Navigation
    order: 40
# title: LibDoc’s Front Matter 
description: Description of the search occurrences feature
tags:
    - navigation
date: Last Modified
---

When a search result is clicked, an UI element is displayed on the target page to help navigating between occurrences of the text query.

* <span class="icon-caret-left | bc-success-100 c-success-900"></span> scrolls to the previous occurrence. If first occurrence is set, goes to the last.
* `<current index>/<search occurrences count>` displays the current search occurrence index. If clicked, scrolls to the current search occurrence.
* <span class="icon-caret-right | bc-success-100 c-success-900"></span> scrolls to the next occurrence. If last occurrence is set, goes to the first.
* <span class="icon-x | bc-success-100 c-success-900"></span> stops the search occurrences feature.

<div class="pos-relative">
    <nav class="d-flex gap-2 | pos-sticky bottom-0 z-1 | pb-5">
        <button type="button"
            class="pos-relative | h-50px ar-square | fs-5 | brad-4 bc-success-100 c-success-900 bwidth-1 bstyle-dashed bcolor-success-900 cur-pointer __hover-2"
            title="{{ libdocMessages.searchOccurrencesPrevious[libdocConfig.lang] }}">
            <span class="icon-caret-left | pos-absolute top-50 left-50 t-tY-50 t-tX-50 | c-success-900"></span>
        </button>
        <button type="button"
            class="pos-relative | h-50px ar-square | fs-2 | brad-4 bc-success-100 c-success-900 bwidth-1 bstyle-dashed bcolor-success-900 cur-pointer __hover-2"
            title="{{ libdocMessages.searchOccurrencesCurrent[libdocConfig.lang] }}">
            <span class="pos-absolute top-50 left-50 t-tY-50 t-tX-50 | c-success-900">1/22</span>
        </button>
        <button type="button"
            class="pos-relative | h-50px ar-square | fs-5 | brad-4 bc-success-100 c-success-900 bwidth-1 bstyle-dashed bcolor-success-900 cur-pointer __hover-2"
            title="{{ libdocMessages.searchOccurrencesNext[libdocConfig.lang] }}">
            <span class="icon-caret-right | pos-absolute top-50 left-50 t-tY-50 t-tX-50 | c-success-900"></span>
        </button>
        <button type="button"
            class="pos-relative | h-50px ar-square | fs-2 | brad-4 bc-success-100 c-success-900 bwidth-1 bstyle-dashed bcolor-success-900 cur-pointer __hover-2"
            title="{{ libdocMessages.searchOccurrencesStop[libdocConfig.lang] }}">
            <span class="icon-x | pos-absolute top-50 left-50 t-tY-50 t-tX-50 | c-success-900"></span>
        </button>
    </nav>
</div>
