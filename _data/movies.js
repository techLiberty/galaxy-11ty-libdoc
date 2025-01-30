import Fetch from "@11ty/eleventy-fetch";

export default async function () {
    let finalData = [];
	// const url = "https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json";
    // // /* This returns a promise */
    // const rawData = await Fetch(url, {
    //     duration: "1d", // save for 1 day
    //     type: "json", // we’ll parse JSON for you
    // });
    // rawData.forEach(function(item, index) {
    //     if (item.title.length < 100
    //         && item.href !== null
    //         && item.href !== undefined
    //         && item.href != ''
    //         && item.year != ''
    //         && item.year !== undefined
    //         && item.year != null
    //         && item.extract !== undefined
    //         && item.thumbnail !== undefined
    //         && item.genres !== undefined) {
    //         finalData.push({
    //             title: item.title.replaceAll('"', ''),
    //             url: `/${item.year}/${item.href}_${index}`,
    //             thumbnail: item.thumbnail,
    //             year: item.year,
    //             genres: item.genres,
    //             extract: JSON.stringify(item.extract)
    //         });
    //     }
    // });
    return finalData;
};