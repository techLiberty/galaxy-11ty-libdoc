export default function(eleventyConfig) {
    // Shortcodes added in this way are available in:
    // * Markdown
    // * Liquid
    // * Nunjucks
    // * Handlebars (not async)
    // * JavaScript
    // eleventyConfig.addShortcode("user", function(firstName, lastName) { … });
  
    // Async support for `addShortcode` is new in Eleventy v2.0.0
    // eleventyConfig.addPairedShortcode("model_ui", async function(section) {

    //     return section.data
    //  });
    // eleventyConfig.addShortcode("link_it", async function(cms_site, lang, permalink) {

    //     return `${env.url}/${env.baseurl}/${lang}/${permalink}`
    // });
  
    // Universal Shortcodes (Adds to Liquid, Nunjucks, 11ty.js)
    // eleventyConfig.addPairedShortcode("sandbox", function(path) {
    //     return `<iframe src="${path}"></iframe>`;
    // });
    // Universal filters (Adds to Liquid, Nunjucks, 11ty.js)
    // eleventyConfig.addAsyncFilter("sandbox", async function(path) {
    //     const response = await fetch(path);
    //     const code = await response.text();
    //     return `<pre><code>${code}</code></pre><iframe src="${path}"></iframe>`;;
    // });

    // eleventyConfig.addShortcode("fetch", async function(path) {
    //     let resp = await fetch(path);
    //     let data = await resp.text();
    //     return `<pre><code>${data}</code></pre><iframe src="${path}"></iframe>`;;
    // });
    eleventyConfig.addCollection("myTags", function (collectionsApi) {
        const allData = collectionsApi.getAll();
        let finalData = [];
        allData.forEach(function(item) {
            if (typeof item.data.tags == 'object') {
                item.data.tags.forEach(function(tag) {
                    if (!finalData.includes(tag)) finalData.push(tag);
                })
            }
        });
		return finalData;
	});
    eleventyConfig.addPairedShortcode("sandbox", function(content) {
        function HTMLEncode(str) {
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
        }
        const contentNew = HTMLEncode(content);
        return `<pre><code class="language-html">${contentNew}</code></pre><iframe style="width:100%; height:500px" srcdoc="${contentNew}"></iframe>`;
    });

};