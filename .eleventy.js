import { EleventyRenderPlugin } from "@11ty/eleventy";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

export default function(eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    
    const libdocParams = {
        toc: {
            htmlTags: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
            minTags: 1
        }
    }
    const libdocUtils = {
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
        slugify: function(str) {
            // https://dev.to/bybydev/how-to-slugify-a-string-in-javascript-4o9n
            str = str.replace(/^\s+|\s+$/g, ''); // trim leading/trailing white space
            str = str.toLowerCase(); // convert string to lowercase
            str = str.replace(/[^a-z0-9 -]/g, '') // remove any non-alphanumeric characters
                     .replace(/\s+/g, '-') // replace spaces with hyphens
                     .replace(/-+/g, '-'); // remove consecutive hyphens
            return str;
        },
        extractHtmlTagsFromString: function(string, htmlTagsListArray) {
            // https://stackoverflow.com/a/65725198
            const htmlTagsFound = [];
            string.replace(/<([a-zA-Z][a-zA-Z0-9_-]*)\b[^>]*>(.*?)<\/\1>/g, function(m,m1,m2) {
                if (htmlTagsListArray.includes(m1)) {
                    // write data to result object
                    htmlTagsFound.push({
                        tagName: m1,
                        value: m2
                    });
                }
            });
            return htmlTagsFound
        }
    }

    eleventyConfig.addAsyncFilter("autoids", async function (content) {
        content = content.replace(/<([a-zA-Z][a-zA-Z0-9_-]*)\b[^>]*>(.*?)<\/\1>/g, function(m,m1,m2){
            let newM = m;
            if (libdocParams.toc.htmlTags.includes(m1)) {
                // Add id to the specified html tags
                const slugifiedId = libdocUtils.slugify(m2);
                newM = m.replace(`<${m1}>`, `<${m1} id="${slugifiedId}">`);
            }
            return newM;
        });
		return content;
	});

    eleventyConfig.addAsyncFilter("toc", async function (content) {
        const htmlTagsFound = libdocUtils.extractHtmlTagsFromString(content, libdocParams.toc.htmlTags);
        let tocMarkup = '';
        if (htmlTagsFound.length > libdocParams.toc.minTags) {
            tocMarkup = '<ol class="d-flex fd-column | m-0 pl-6 | ls-none">';
            // Displaying the results
            htmlTagsFound.forEach(function(htmlTag) {
                tocMarkup += `
                    <li>
                        <a  href="#${libdocUtils.slugify(htmlTag.value)}"
                            class="d-flex | ml-1 pt-1 pb-1 pl-${htmlTag.tagName.replace(`h`, ``)} | fs-2 lh-5 fvs-wght-400 | c-neutral-800">
                            ${htmlTag.value}
                        </a>
                    </li>`;
            });
            tocMarkup += '</ol>';
        }
		return tocMarkup;
	});

    eleventyConfig.addPlugin(EleventyRenderPlugin, {
		tagName: "renderTemplate", // Change the renderTemplate shortcode name
		tagNameFile: "renderFile", // Change the renderFile shortcode name
		filterName: "renderContent", // Change the renderContent filter name

		// Only available in Liquid right now
		accessGlobalData: false,   // Does rendered content has access to the data cascade?
	});

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

    eleventyConfig.addPairedShortcode("sandbox", async function(content, permalink) {
        let markup = '';
        if (typeof permalink == 'string') {
            // Case file iframe src
            const contentNew = libdocUtils.HTMLEncode(content);
            markup = `
                <div class="d-flex | sandbox">
                    <pre class="w-6t m-0 o-auto" style="height:500px">
                        <code class="language-html fvs-mono-on fvs-casual-off fvs-cursive-off fvs-wght-300 fs-3 lh-6">
                            ${contentNew}
                        </code>
                    </pre>
                    <button class="resizer" style="width:20px">|||</button>
                    <iframe src="${permalink}"
                        loading="lazy"
                        class="w-6t b-0"></iframe>
                </div>`;
        } else {
            // Case attribute srcdoc
            const contentNew = libdocUtils.HTMLEncode(content);
            markup = `
                <div class="d-flex | sandbox">
                    <pre class="w-6t m-0 o-auto" style="height:500px">
                        <code class="language-html fvs-mono-on fvs-casual-off fvs-cursive-off fvs-wght-300 fs-3 lh-6">
                            ${contentNew}
                        </code>
                    </pre>
                    <button class="resizer" style="width:20px">|||</button>
                    <iframe srcdoc="${contentNew}"
                        loading="lazy"
                        class="w-6t b-0"></iframe>
                </div>`;
        }
        return markup;
    });

    // Copy `css/fonts/` to `_site/css/fonts`
	// Keeps the same directory structure.
	eleventyConfig.addPassthroughCopy("sandboxes");
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("favicon.png");

};