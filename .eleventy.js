const { DateTime } = require("luxon"); /*we are loading in luxon 
    whichi is a date formating module ane we will use that to 
    format the date.
    */

module.exports = function (eleventyConfig) {
    // we want eleventy to grab the styles, assets and admin folders as well
    eleventyConfig.addPassthroughCopy("./src/style.css");
    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/admin");

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).
        toLocaleString(DateTime.DATE_MED);
    });
    /** 
        declare where the src files (input) and the public facingfiles (output) will be.     
    **/
    return {
        dir: {
            input: "src", //this tells eleventy where your input folder is
            output: "Public", //this tells eleventy where it should ouput the build files.
        }, //If not declared it will default to _site
    };
};
