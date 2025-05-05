import userConfig from "../userConfig.json" with { "type": "json" };
export default {
    lang: userConfig.lang || "en",
    siteTitle: userConfig.siteTitle || "11ty LibDoc",
    siteDescription: userConfig.siteDescription || "Just and Eleventy SSG starter project to create documentation website",
    siteLogoUrl: userConfig.siteLogoUrl || "",
    siteLogoMaxHeight: userConfig.siteLogoMaxHeight || 60,
    author: userConfig.author || "Olivier 3lanc",
    faviconUrl: userConfig.faviconUrl || "/favicon.png",
    ogImageUrl: userConfig.ogImageUrl || "",
    customLinks: userConfig.customLinks || [],
    blogTitle: userConfig.blogTitle || "My Posts",
    blogDescription: userConfig.blogDescription || "My own description for my blog",
    blogAuthor: userConfig.blogAuthor || "The Front Club Team",
    blogSlug: userConfig.blogSlug || "posts",
    displayTagsListLink: userConfig.displayTagsListLink || true,
    tocEnabled: userConfig.tocEnabled || true,
    tocHtmlTags: userConfig.tocHtmlTags || ["h1", "h2", "h3", "h4", "h5", "h6"],
    tocMinTags: userConfig.tocMinTags || 1,
    htmlBasePathPrefix: userConfig.htmlBasePathPrefix || "",
    sandboxRunSwitch: userConfig.sandboxRunSwitch || false,
    searchEnabled: userConfig.searchEnabled || true,
    hljsLanguages: userConfig.hljsLanguages || [
        "xml",
        "javascript",
        "json",
        "yaml",
        "liquid",
        "markdown",
        "css"
    ],
    roundedImagesCorners: userConfig.roundedImagesCorners || true
};