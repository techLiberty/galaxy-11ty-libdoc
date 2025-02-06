// require('dotenv').config();
import 'dotenv/config';
export default function () {
    return {
        environment: process.env.MY_ENVIRONMENT || "development",
        imgsrv: process.env.IMAGE_SERVER_ENDPOINT,
        navigationOptions: {
            listElement: "menu",            // Change the top level tag
            listItemElement: "li",        // Change the item tag
        
            listClass: "d-flex fd-column | m-0 p-0 o-hidden | ls-none",                // Add a class to the top level
            listItemClass: "d-flex fw-wrap ai-center",            // Add a class to every item
            listItemHasChildrenClass: "", // Add a class if the item has children
            activeListItemClass: "",      // Add a class to the current page’s item
        
            anchorClass: "d-flex | pos-relative | w-100 pt-3 pb-3 pl-3 pr-6 | fs-3 td-none lh-5 tws-balance fvs-wght-500 | c-neutral-900 __anchor",              // Add a class to the anchor
            activeAnchorClass: "",        // Add a class to the current page’s anchor
        
            // If matched, `activeListItemClass` and `activeAnchorClass` will be added
            // activeKey: "",
            // It’s likely you want to pass in `eleventyNavigation.key` here, e.g.:
            // activeKey: eleventyNavigation.key,
        
            // Show excerpts (if they exist in data, read more above)
            showExcerpt: false
        }
    };
};
  