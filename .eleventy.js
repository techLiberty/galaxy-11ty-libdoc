// START 11TY imports
import eleventyNavigationPlugin             from "@11ty/eleventy-navigation";
import { InputPathToUrlTransformPlugin }    from "@11ty/eleventy";
import { eleventyImageTransformPlugin }     from "@11ty/eleventy-img";
import { EleventyHtmlBasePlugin }           from "@11ty/eleventy";
import pluginRss                            from "@11ty/eleventy-plugin-rss";
// END 11TY imports

// START LibDoc imports
import libdocConfig                         from "./_data/libdocConfig.js";
import libdocFunctions                      from "./_data/libdocFunctions.js";
// END LibDoc imports

export default function(eleventyConfig) {
    // START PLUGINS
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
    eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(eleventyImageTransformPlugin, libdocFunctions.pluginsParameters.eleventyImageTransform());
    eleventyConfig.addPlugin(pluginRss);
    // END PLUGINS

    // START FILTERS
    eleventyConfig.addAsyncFilter("autoids", libdocFunctions.filters.autoids);
    eleventyConfig.addAsyncFilter("embed", libdocFunctions.filters.embed);
    eleventyConfig.addAsyncFilter("cleanup", libdocFunctions.filters.cleanup);
    eleventyConfig.addAsyncFilter("dateString", libdocFunctions.filters.dateString);
    eleventyConfig.addAsyncFilter("datePrefixText", libdocFunctions.filters.datePrefixText);
    eleventyConfig.addAsyncFilter("toc", libdocFunctions.filters.toc);
    eleventyConfig.addAsyncFilter("sanitizeJSON", libdocFunctions.filters.sanitizeJson);
    eleventyConfig.addAsyncFilter("gitLastModifiedDate", libdocFunctions.filters.gitLastModifiedDate);
    // Custom filter to limit navigation depth
    eleventyConfig.addFilter("limitNavDepth", function(navTree, maxDepth = 2) {
      // Remove the root node (Sun) and only show its direct children and their children
      function prune(node, depth) {
        if (!node || typeof node !== "object") return node;
        if (depth >= maxDepth) {
          if (Array.isArray(node.children)) {
            node.children = [];
          }
        } else if (Array.isArray(node.children)) {
          node.children = node.children.map(child => prune(child, depth + 1));
        }
        return node;
      }
      // If navTree is an array, find the root node (Sun)
      let nodes = Array.isArray(navTree) ? navTree : [navTree];
      // Find the root node (no parent)
      let root = nodes.find(n => !n.parent);
      if (!root || !Array.isArray(root.children)) return [];
      // Return the pruned children of the root (Sun)
      return root.children.map(child => prune(child, 1));
    });
    // END FILTERS

    // START COLLECTIONS
    eleventyConfig.addCollection("myTags", libdocFunctions.collections.myTags);
    eleventyConfig.addCollection("postsByDateDescending", libdocFunctions.collections.postsByDateDescending);
    eleventyConfig.addCollection("constellations", function (collectionApi) {
      return collectionApi.getFilteredByGlob("constellations/*.md");
    });
    eleventyConfig.addCollection("stars", function (collectionApi) {
      return collectionApi.getFilteredByGlob("stars/**/*.md");
    });
    eleventyConfig.addFilter("filterByConstellation", (stars, slug) => {
      return stars.filter(star => star.data.constellation === slug);
    });
    // END COLLECTIONS

    // START SHORTCODES
    eleventyConfig.addShortcode("alert", libdocFunctions.shortcodes.alert);
    eleventyConfig.addPairedShortcode("alertAlt", libdocFunctions.shortcodes.alert);
    eleventyConfig.addShortcode("embed", libdocFunctions.shortcodes.embed);
    eleventyConfig.addShortcode("icomoon", libdocFunctions.shortcodes.icomoon);
    eleventyConfig.addShortcode("icon", libdocFunctions.shortcodes.icon);
    eleventyConfig.addShortcode("iconCard", libdocFunctions.shortcodes.iconCard);
    eleventyConfig.addPairedShortcode("sandbox", libdocFunctions.shortcodes.sandbox);
    eleventyConfig.addPairedShortcode("sandboxFile", libdocFunctions.shortcodes.sandboxFile);
    // END SHORTCODES

    // START FILE COPY
	  eleventyConfig.addPassthroughCopy("sandboxes");
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("core/assets");
    eleventyConfig.addPassthroughCopy("favicon.png");
    // END FILE COPY
    
    return {
      pathPrefix: libdocConfig.htmlBasePathPrefix
    }
};