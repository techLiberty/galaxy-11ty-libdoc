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
        },
        templates: {
            sandbox: function({iframeAttribute, iframeCommands, title, code}) {
                return `
                    <aside class="d-flex | sandbox"
                        fd-column="xs,sm"
                        gap-2="xs,sm"
                        ai-start="xs,sm"
                        o-hidden="md">
                        <div class="d-flex | p-1 | bc-neutral-900 c-neutral-200 brad-2"
                            d-none="md">
                            <button type="button"
                                class="d-flex | pt-2 pb-2 pl-5 pr-5 | fvs-wght-400 fs-2 tt-uppercase | c-neutral-300 bc-0 b-0 cur-pointer | sandbox__tab"
                                data-name="code">
                                Code
                            </button>
                            <button type="button"
                                class="d-flex | pt-2 pb-2 pl-5 pr-5 | fvs-wght-400 fs-2 tt-uppercase | c-neutral-900 bc-neutral-100 b-0 brad-1 cur-pointer | sandbox__tab"
                                data-name="iframe">
                                Result
                            </button>
                        </div>
                        <div class="d-flex fd-column d-none--xs d-none--sm | bc-neutral-900 c-neutral-200 brad-3 bwidth-1 bstyle-solid bcolor-neutral-900 | sandbox__code_wrapper"
                            w-50="md"
                            w-100="xs,sm"
                            bradtr-0="md"
                            bradbr-0="md">
                            <div class="d-flex jc-space-between ai-center">
                                <p class="m-0 pl-5 | fvs-wght-400 fs-3 | c-neutral-600">${title}</p>
                                <button type="button"
                                    class="d-flex | p-5 | fvs-wght-400 fs-2 tt-uppercase | c-neutral-300 bc-0 b-0 cur-pointer | sandbox__copy_code">
                                    Copy
                                </button>
                            </div>
                            <div class="pl-5">
                                <pre class="m-0 h-500px o-auto | brad-3">
                                    <code class="language-html fvs-mono-on fvs-wght-300 fs-3 lh-6 | sandbox__code">
                                        ${code}
                                    </code>
                                </pre>
                            </div>
                            <div class="d-flex gap-2 | m-0 pt-1 pb-1 pl-0 | fvs-wght-400 fs-2 lh-1 | c-neutral-500 ls-none"
                                pl-2="xs,sm">
                                &nbsp;
                            </div>
                        </div>
                        <button class="p-0 | bc-neutral-900 c-neutral-300 b-0 | sandbox__resizer"
                            title="Click and drag to resize code and result"
                            d-none="xs,sm">
                            ||
                        </button>
                        <div class="d-flex fd-column | bc-neutral-900 c-neutral-200 brad-3 bwidth-1 bstyle-solid bcolor-neutral-900 | sandbox__iframe_wrapper"
                            w-50="md"
                            w-100="xs,sm"
                            bradtl-0="md"
                            bradbl-0="md"
                            style="box-sizing: content-box">${iframeCommands}
                            <iframe ${iframeAttribute} loading="lazy" class="w-100 h-500px | b-0 bc-neutral-100 | sandbox__iframe"></iframe>
                            <ul class="d-flex gap-2 | m-0 pt-1 pb-1 pl-0 | fvs-wght-400 fs-2 lh-1 | c-neutral-500 ls-none"
                                pl-2="xs,sm">
                                <li>Width: <span class="sandbox__monitor__iframe_width">-</span>px</li>
                                <li>Height: <span class="sandbox__monitor__iframe_height">-</span>px</li>
                            </ul>
                        </div>
                    </aside>`;
            }
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

    eleventyConfig.addAsyncFilter("cleanup", async function (content) {
        content = content.replace(`<p><div`, `<div`);
        content = content.replace(`</div></p>`, `</div>`);
        content = content.replace(`<p><aside`, `<aside`);
        content = content.replace(`</aside></p>`, `</aside>`);
		return content;
	});

    eleventyConfig.addAsyncFilter("toc", async function (content) {
        const htmlTagsFound = libdocUtils.extractHtmlTagsFromString(content, libdocParams.toc.htmlTags);
        let tocMarkup = '';
        if (htmlTagsFound.length > libdocParams.toc.minTags) {
            tocMarkup = '<ol class="d-flex fd-column | m-0 pl-0 | ls-none">';
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


    eleventyConfig.addPairedShortcode("sandbox", async function(content, permalink, sandboxTitle) {
        const   isFile = typeof permalink == `string`,
                code = isFile ? libdocUtils.HTMLEncode(content) : libdocUtils.HTMLEncode(content.replace(/[\n\r]/, '')),
                iframeAttribute = isFile ? `src="${permalink}"` : `srcdoc="${code}"`,
                title = typeof sandboxTitle == `string` ? sandboxTitle : `Sandbox`;
        let     iframeCommands = '';
        if (isFile) {
            iframeCommands = `<div class="d-flex jc-space-between ai-center">
                    <a  href="${permalink}"
                        target="_blank"
                        class="p-5 pr-0 o-hidden | fvs-wght-400 fs-3 to-ellipsis ws-nowrap | c-neutral-500 bc-0 b-0 cur-pointer | sandbox__permalink">
                        ${permalink}
                    </a>
                    <button type="button"
                        class="d-flex | p-5 o-hidden | fvs-wght-400 fs-2 tt-uppercase to-ellipsis ws-nowrap | c-neutral-300 bc-0 b-0 cur-pointer | sandbox__copy_url">
                        Copy URL
                    </button>
                </div>`;
        } else {
            iframeCommands = `<div class="d-flex jc-space-between ai-center gap-5">
                    <div class="d-flex | p-5 pr-0 o-hidden | fvs-wght-400 fs-3 to-ellipsis ws-nowrap | c-neutral-600">
                        srcdoc
                    </div>
                    <button type="button"
                        class="p-5 o-hidden | fvs-wght-400 fs-2 tt-uppercase to-ellipsis ws-nowrap | c-neutral-700 bc-0 b-0 pe-none" disabled>
                        Copy URL
                    </button>
                </div>`;
        }
        return libdocUtils.templates.sandbox({iframeAttribute, iframeCommands, title, code});
    });

    // Copy `css/fonts/` to `_site/css/fonts`
	// Keeps the same directory structure.
	eleventyConfig.addPassthroughCopy("sandboxes");
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("favicon.png");

};