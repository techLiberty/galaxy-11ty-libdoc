// require('dotenv').config();
import 'dotenv/config';
export default function () {
    return {
        environment: process.env.MY_ENVIRONMENT || "development",
        imgsrv: process.env.IMAGE_SERVER_ENDPOINT,
        buildDate: function() {
            const jsDate = new Date();
            let theDay = jsDate.getDate().toString();
            if (theDay.length == 1) theDay = `0${theDay}`;
            let theMonth = (jsDate.getMonth() + 1).toString();
            if (theMonth.length == 1) theMonth = `0${theMonth}`;
            const theYear = jsDate.getFullYear().toString();
            return `${theYear}-${theMonth}-${theDay}`;
        },
        navigationOptions: {
            listElement: "ol", // Change the top level tag
            listItemElement: "li", // Change the item tag
        
            listClass: "d-flex fd-column | m-0 pl-5 o-hidden | ls-none", // Add a class to the top level
            listItemClass: "d-flex fw-wrap ai-center", // Add a class to every item
            listItemHasChildrenClass: "", // Add a class if the item has children
            activeListItemClass: "", // Add a class to the current page’s item
        
            anchorClass: "d-flex fg-1 | pos-relative | w-100 pt-2 pb-2 pl-3 pr-6 | fs-3 td-none lh-5 tws-balance fvs-wght-500 | c-neutral-900 nav_primary__anchor", // Add a class to the anchor
            activeAnchorClass: "", // Add a class to the current page’s anchor
        
            // If matched, `activeListItemClass` and `activeAnchorClass` will be added
            // activeKey: "",
            // It’s likely you want to pass in `eleventyNavigation.key` here, e.g.:
            // activeKey: eleventyNavigation.key,
        
            // Show excerpts (if they exist in data, read more above)
            showExcerpt: false
        }
    };
};
  