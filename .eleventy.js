import { EleventyRenderPlugin } from "@11ty/eleventy";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import { InputPathToUrlTransformPlugin } from "@11ty/eleventy";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
// import { escapeAttribute } from "entities";
// import Image from "@11ty/eleventy-img";

export default function(eleventyConfig) {
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
        generateRandomId: function(length) {
            const charactersList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let id = '';
            if (typeof length != 'number') length = 8;
            for (let index = 0; index < length; index++) {
                const randomIndex = Math.floor(Math.random() * charactersList.length);
                id += charactersList[randomIndex];
            }
            return id;
        },
        templates: {
            sandbox: function({iframeAttribute, iframeCommands, title, code}) {
                const   enableSwitchIdCode = libdocUtils.generateRandomId(),
                        enableSwitchIdIframe = libdocUtils.generateRandomId();
                return `
                    <aside class="d-flex | sandbox"
                        fd-column="xs,sm"
                        gap-2="xs,sm"
                        ai-start="xs,sm"
                        o-hidden="md"
                        pl-9="md"
                        pr-9="md"
                        pl-5="xs,sm"
                        pr-5="xs,sm">
                        <div class="d-flex | p-1 | bc-primary-200 brad-2"
                            d-none="md">
                            <button type="button"
                                class="d-flex | pt-2 pb-2 pl-5 pr-5 | fvs-wght-400 fs-2 tt-uppercase | c-primary-900 bc-0 b-0 cur-pointer | sandbox__tab"
                                data-name="code">
                                Code
                            </button>
                            <button type="button"
                                class="d-flex | pt-2 pb-2 pl-5 pr-5 | fvs-wght-400 fs-2 tt-uppercase | c-primary-900 bc-neutral-100 b-0 brad-1 cur-pointer | sandbox__tab"
                                data-name="iframe">
                                Result
                            </button>
                        </div>
                        <div class="d-flex fd-column d-none--xs d-none--sm | o-hidden | bc-neutral-900 c-neutral-200 brad-3 bwidth-1 bstyle-solid bcolor-neutral-900 | sandbox__code_wrapper"
                            w-50="md"
                            w-100="xs,sm"
                            bradtr-0="md"
                            bradbr-0="md">
                            <header class="d-flex jc-space-between | pl-5" style="height: 58px">
                                <p class="d-flex ai-center | m-0 | fvs-wght-400 fs-3 lh-1 | c-neutral-600"
                                    fs-2="xs">
                                    ${title}
                                </p>
                                <button type="button"
                                    class="d-flex ai-center | pl-5 pr-5 | fvs-wght-400 fs-2 tt-uppercase | bc-0 c-neutral-300 b-0 cur-pointer | sandbox__copy_code"
                                    title="Copy HTML">
                                    <span class="o-hidden | to-ellipsis ws-nowrap">Copy</span>
                                </button>
                            </header>
                            <div class="pos-relative"
                                pl-5="md">
                                <pre class="m-0 h-500px o-auto"
                                    bradtl-3="md"
                                    bradbl-3="md">
                                    <code class="language-html fvs-mono-on fvs-wght-300 fs-3 lh-6 | sandbox__code" fs-2="xs">${code}</code>
                                </pre>
                                <div class="d-flex jc-center ai-center | pos-absolute top-0 left-0 | w-100 h-100 | sandbox__enable_wrapper"
                                    style="background-color: rgba(0,0,0,0.5)">
                                    <input type="checkbox"
                                        id="${enableSwitchIdCode}"
                                        value=""
                                        class="pos-absolute | opa-0 | sandbox__enable_switch">
                                    <label for="${enableSwitchIdCode}"
                                        class="d-flex ai-center gap-1 | p-5 | fvs-wght-500 tt-uppercase | bc-neutral-900 brad-2 cur-pointer">
                                        <span class="icon-play"></span> Enable
                                    </label>
                                </div>
                            </div>
                            <div class="d-flex gap-2 | m-0 pt-1 pb-1 pl-0 | fvs-wght-400 fs-2 lh-1 | c-neutral-500 ls-none"
                                pl-2="xs,sm">
                                &nbsp;
                            </div>
                        </div>
                        <button class="pos-relative | p-0 | bc-neutral-800 c-neutral-500 b-0 | sandbox__resizer"
                            title="Click and drag to resize code and result"
                            d-none="xs,sm">
                            <span class="icon-dots-six-vertical fs-5"></span>
                        </button>
                        <div class="d-flex fd-column | pos-relative | o-hidden | bc-neutral-900 c-neutral-200 brad-3 bwidth-1 bstyle-solid bcolor-neutral-900 | sandbox__iframe_wrapper"
                            w-50="md"
                            w-100="xs,sm"
                            bradtl-0="md"
                            bradbl-0="md"
                            style="box-sizing: content-box">${iframeCommands}
                            <div class="d-flex | pos-relative">
                                <iframe ${iframeAttribute} loading="lazy" class="w-100 h-500px | b-0 bc-neutral-100 | sandbox__iframe"></iframe>
                                <div class="d-flex jc-center ai-center | pos-absolute top-0 left-0 | w-100 h-100 | sandbox__enable_wrapper"
                                    style="background-color: rgba(0,0,0,0.5)">
                                    <input type="checkbox"
                                        id="${enableSwitchIdIframe}"
                                        value=""
                                        class="pos-absolute | opa-0 | sandbox__enable_switch">
                                    <label for="${enableSwitchIdIframe}"
                                        class="d-flex ai-center gap-1 | p-5 | fvs-wght-500 tt-uppercase | bc-neutral-900 brad-2 cur-pointer">
                                        <span class="icon-play"></span> Enable
                                    </label>
                                </div>
                            </div>
                            <ul class="d-flex gap-2 | m-0 pt-1 pb-1 pl-2 | fvs-wght-400 fs-2 lh-1 | c-neutral-500 ls-none">
                                <li>Width: <span class="sandbox__monitor__iframe_width">-</span>px</li>
                                <li>Height: <span class="sandbox__monitor__iframe_height">-</span>px</li>
                            </ul>
                        </div>
                    </aside>`;
            }
        }
    }

    eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		// output image formats
		formats: ["svg", "avif", "webp"],
        // useCache: false,

		// output image widths
		widths: [1400],
        svgShortCircuit: true,
        filenameFormat: function (id, src, width, format, options) {
            // Define custom filenames for generated images
            // id: hash of the original image
            // src: original image path
            // width: current width in px
            // format: current file format
            // options: set of options passed to the Image call
            const filename = src.split('/').slice(-1)[0].split('.')[0];

            return `${libdocUtils.slugify(filename)}-${id}-__${width}__.${format}`;
        },

		// optional, attributes assigned on <img> nodes override these values
		htmlOptions: {
			imgAttributes: {
				loading: "lazy",
				decoding: "async",
			},
			pictureAttributes: {
                class: "eleventy-image"
            }
		}
	});

    eleventyConfig.addAsyncFilter("autoids", async function (content) {
        let i = 0;
        const anchorsIds = [];
        content = content.replace(/<([a-zA-Z][a-zA-Z0-9_-]*)\b[^>]*>(.*?)<\/\1>/g, function(m,m1,m2){
            let newM = m;
            if (libdocParams.toc.htmlTags.includes(m1)) {
                // Add id to the specified html tags
                let slugifiedId = libdocUtils.slugify(m2);
                if (anchorsIds.includes(slugifiedId)) {
                    slugifiedId += `-${i}`;
                }
                anchorsIds.push(slugifiedId);
                const markup = `
                    <${m1} id="${slugifiedId}" pl-9="xs,sm">
                        <a  href="#${slugifiedId}"
                            title="${m2}"
                            class="pos-absolute top-50 left-0 t-tY-50 | p-4 ml-1 | td-none | brad-4 bc-neutral-100 bwidth-1 bstyle-dashed bcolor-neutral-500 __hover-1"
                            ml-3="xs,sm">
                            <span class="icon-link-simple | pos-absolute top-50 left-50 t-tY-50 t-tX-50 | fs-4"></span>
                        </a>
                `;
                newM = m.replace(`<${m1}>`, markup);
                i++;
            }
            return newM;
        });
		return content;
	});

    eleventyConfig.addAsyncFilter("cleanup", async function (content) {
        content = content.replaceAll(`<table>`, `<div class="o-auto w-100"><table>`);
        content = content.replaceAll(`</table>`, `</table></div>`);
        content = content.replaceAll(`<p><div`, `<div`);
        content = content.replaceAll(`</div></p>`, `</div>`);
        content = content.replaceAll(`<p><aside`, `<aside`);
        content = content.replaceAll(`</aside></p>`, `</aside>`);
		return content;
	});

    eleventyConfig.addAsyncFilter("dateString", async function (content) {
        const jsDate = new Date();
        let theDay = content.getDate().toString();
        if (theDay.length == 1) theDay = `0${theDay}`;
        let theMonth = (content.getMonth() + 1).toString();
        if (theMonth.length == 1) theMonth = `0${theMonth}`;
        const theYear = content.getFullYear().toString();
        return `${theYear}-${theMonth}-${theDay}`;
        // console.log(`${theYear}-${theMonth}-${theDay}`)
	});

    eleventyConfig.addAsyncFilter("toc", async function (content) {
        const htmlTagsFound = libdocUtils.extractHtmlTagsFromString(content, libdocParams.toc.htmlTags);
        let tocMarkup = '';
        if (htmlTagsFound.length > libdocParams.toc.minTags) {
            tocMarkup = `
                <ol class="cgap-3em | m-0 pl-0 pb-5 o-auto | lh-1 | ls-none bwidth-1 bstyle-dashed bcolor-neutral-500 btwidth-0 brwidth-0"
                    d-flex="xs,sm"
                    fd-column="xs,sm"
                    fw-wrap="xs,sm"
                    columns-3="md"
                    columns-2="sm"
                    maxh-300px="sm"
                    maxh-200px="xs">`;
            // Displaying the results
            const anchorsIds = [];
            htmlTagsFound.forEach(function(htmlTag, tagIndex) {
                let slugifiedId = libdocUtils.slugify(htmlTag.value);
                if (anchorsIds.includes(slugifiedId)) {
                    slugifiedId += `-${tagIndex}`;
                }
                anchorsIds.push(slugifiedId);
                tocMarkup += `
                    <li class="d-flex">
                        <a  href="#${slugifiedId}"
                            class="pl-5 pt-1 pb-1 | fs-3 lh-5 fvs-wght-400 | blwidth-1 blstyle-dashed bcolor-neutral-500">
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


    eleventyConfig.addPairedShortcode("sandbox", async function(content, sandboxTitle) {
        const   code = libdocUtils.HTMLEncode(content.replace(/[\n\r]/, '')),
                title = typeof sandboxTitle == `string` ? sandboxTitle : `Sandbox`,
                iframeAttribute = `srcdoc="${code}"`,
                iframeCommands = `<header class="d-flex jc-space-between | pl-5" style="height: 58px">
                        <div class="d-flex ai-center | fvs-wght-400 fs-3 | c-neutral-500">
                            srcdoc
                        </div>
                    </header>`;
        return libdocUtils.templates.sandbox({iframeAttribute, iframeCommands, title, code});
    });

    eleventyConfig.addPairedShortcode("sandboxFile", async function(content, permalink, sandboxTitle) {
        const   code = libdocUtils.HTMLEncode(content),
                iframeAttribute = `src="${permalink}"`,
                title = typeof sandboxTitle == `string` ? sandboxTitle : `Sandbox`,
                iframeCommands = `<header class="d-flex jc-space-between gap-5 | pl-5 pr-5" style="height: 58px">
                        <a  href="${permalink}"
                            target="_blank"
                            title="Open in a new tab"
                            class="d-flex ai-center gap-1 | p-0 | fvs-wght-400 fs-2 tt-uppercase td-none | sandbox__permalink"
                            fs-2="xs">
                            <span class="fvs-wght-400 | c-neutral-300">Open</span>
                            <span class="icon-arrow-square-out c-neutral-500"></span>
                        </a>
                        <div class="d-flex gap-5">
                            <button type="button"
                                class="d-flex ai-center | p-0 | fvs-wght-400 fs-2 tt-uppercase | bc-0 c-neutral-300 b-0 cur-pointer | sandbox__reload">
                                <span class="o-hidden | to-ellipsis ws-nowrap">Reload</span>
                            </button>
                            <button type="button"
                                class="d-flex ai-center | p-0 | fvs-wght-400 fs-2 tt-uppercase | bc-0 c-neutral-300 b-0 cur-pointer | sandbox__copy_url">
                                <span class="o-hidden | to-ellipsis ws-nowrap">Copy URL</span>
                            </button>
                        </div>
                    </header>`;
        return libdocUtils.templates.sandbox({iframeAttribute, iframeCommands, title, code});
    });

    // eleventyConfig.addShortcode("image", async function (src, alt) {
	// 	if (alt === undefined) {
	// 		// You bet we throw an error on missing alt (alt="" works okay)
	// 		throw new Error(`Missing \`alt\` on: ${src}`);
	// 	}

	// 	let metadata = await Image(src, {
	// 		widths: [1000],
	// 		formats: ["avif"],
    //         useCache: false,
    //         outputDir: "./_site/img/"
	// 	});

	// 	let data = metadata.avif[metadata.avif.length - 1];
    //     console.log(data.url)
	// 	return `<img src="${data.url}"
    //         alt="${escapeAttribute(alt)}"
    //         loading="lazy"
    //         decoding="async">`;
	// });

    // eleventyConfig.addShortcode("image", async function (src, alt) {
	// 	return Image(src, {
	// 		formats: ["avif"],
    //         useCache: false,
    //         widths: [1400],
    //         useCache: false,
    //         svgShortCircuit: true,
    //         filenameFormat: function (id, src, width, format, options) {
    //             const filename = src.split('/').slice(-1)[0].split('.')[0];
    //             return `${libdocUtils.slugify(filename)}-${id}-${width}.${format}`;
    //         },
	// 		returnType: "html",    // new in v6.0
	// 		htmlOptions: {         // new in v6.0
	// 			imgAttributes: {
    //                 class: "foobar",
	// 				alt,               // required, though "" works fine
	// 				loading: "lazy",   // optional
	// 				decoding: "async", // optional
	// 			}
	// 		}
	// 	});
	// });

    // Copy `css/fonts/` to `_site/css/fonts`
	// Keeps the same directory structure.
	eleventyConfig.addPassthroughCopy("sandboxes");
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("favicon.png");

};