
const search = {
    params: new URLSearchParams(location.search),
    decodeHtmlCharCodes: function(str) { 
        // https://stackoverflow.com/a/54346501
        return str.replace(/(&#(\d+);)/g, function(match, capture, charCode) {
            return String.fromCharCode(charCode);
        });
    },
    HTMLEncode: function(str) {
        // https://stackoverflow.com/a/784765
        str = [...str];
        //    ^ es20XX spread to Array: keeps surrogate pairs
        let i = str.length, aRet = [];
      
        while (i--) {
            var iC = str[i].codePointAt(0);
            if (iC < 65 || iC > 127 || (iC>90 && iC<97)) {
                aRet[i] = '&#'+iC+';';
            } else {
                aRet[i] = str[i];
            }
        }
        return aRet.join('');
    },
    searchIndex: function(query) {
        if (typeof search.searchIndexArray == 'object') {
            let markup = '';
            search.searchIndexArray.forEach(function(item) {
                const   content = search.decodeHtmlCharCodes(item.content).toLowerCase(),
                        queryLowered = query.toLowerCase(),
                        queryLoweredEncoded = search.HTMLEncode(queryLowered),
                        occurrenceIndex = content.indexOf(queryLowered),
                        range = 200;
                let lowIndex = occurrenceIndex - range,
                    highIndex = occurrenceIndex + query.length + range;
                if (lowIndex < 0) lowIndex = 0;
                if (highIndex > content.length - 1) highIndex = content.length - 1;
                let summary = content.slice(lowIndex, highIndex);
                summary = search.HTMLEncode(summary);
                summary = summary.replaceAll(queryLoweredEncoded, ` <mark class="fvs-wght-600">${query}</mark> `);
                // console.log(summary);
                if (content.indexOf(queryLowered) > -1) {

                    markup += search.renderSearchResult({url: item.url, title: item.title, summary: summary})
                }
            });
            if (markup == '') {
                searchResults.innerHTML = "<li>Aucun résultat</li>";
            } else {
                searchResults.innerHTML = markup;
            }
            searchInput.value = query;
        }
    },
    renderSearchResult: function({url, title, summary}) {
        return `
            <li class="d-flex fd-column">
                <a  href="${url}"
                    class="fvs-wght-600 fs-4">
                    ${title}
                </a>
                <div>
                    ${summary}
                </div>
            </li>
        `;
    },
    update: function() {
        // console.log(query)
        fetch('/bundles/search_index.json')
            .then(response => response.json())
            .then(searchIndexArray => {
                // console.log(json);
                search.searchIndexArray = searchIndexArray;
                const query = search.params.get('search');
                if (query !== null) {
                    if (query.length > 0) search.searchIndex(query);
                }
            })
            .catch(error => {
                // Handle the error
                console.log(error);
            });
    }
}
document.addEventListener('DOMContentLoaded', search.update);
