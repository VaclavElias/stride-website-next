const sass = require("sass");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const path = require("node:path");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItToc = require("markdown-it-table-of-contents");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = function (eleventyConfig) {

    eleventyConfig.addPlugin(syntaxHighlight);

    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("scripts");
    eleventyConfig.addPassthroughCopy("files");
    eleventyConfig.addPassthroughCopy("favicon.ico");
    eleventyConfig.addPassthroughCopy("favicon.png");
    eleventyConfig.addPassthroughCopy("CNAME");
    eleventyConfig.addPassthroughCopy("web.config");
    eleventyConfig.addPassthroughCopy({
        "node_modules/lunr/lunr.min.js": "scripts/lunr.min.js",
        "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js": "scripts/bootstrap.bundle.min.js",
        "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js.map": "scripts/bootstrap.bundle.min.js.map",
        "node_modules/@fortawesome/fontawesome-free/css/all.min.css": "css/all.min.css",
        "node_modules/@fortawesome/fontawesome-free/webfonts": "webfonts/",
    });

    //eleventyConfig.exc

    //eleventyConfig.addCollection("posts", (collection) => {
    //    return collection.getFilteredByTag("blog");
    //});

    //eleventyConfig.addWatchTarget("./assets/css");
    //eleventyConfig.addWatchTarget("./assets/css");

    eleventyConfig.setLiquidOptions({
        dynamicPartials: false,
        strictFilters: false
    });

    eleventyConfig.addTemplateFormats("scss");

    eleventyConfig.addExtension("scss", {
        outputFileExtension: "css",
        compileOptions: {
            cache: false,
        },
        compile: async function (inputContent, inputPath) {
            let parsed = path.parse(inputPath);

            let result = sass.compileString(inputContent, {
                loadPaths: [
                    parsed.dir || ".",
                    this.config.dir.includes
                ], style: "compressed"
            });

            return async (data) => {
                return result.css;
            };
        }
    });

    eleventyConfig.setFrontMatterParsingOptions({
        excerpt: true,
        // Optional, default is "---"
        excerpt_separator: "<!-- excerpt -->"
    });

    eleventyConfig.addCollection('tagList', (collections) => {
        const uniqueTags = collections
            .getFilteredByTag('blog')
            .reduce((tags, item) => tags.concat(item.data.tags), [])
            .filter((tag) => !!tag)
            .filter((tag) => !!tag && !['page', 'blog', 'search'].includes(tag))
            .sort();
        return Array.from(new Set(uniqueTags));
    });

    eleventyConfig.addCollection('yearList', (collections) => {
        const uniqueyears = collections
            .getFilteredByTag('blog')
            .map((post) => post.date.getFullYear())
            .reverse();
        return Array.from(new Set(uniqueyears));
    });

    eleventyConfig.addFilter('jsonify', function (variable) {
        return JSON.stringify(variable);
    });

    eleventyConfig.addFilter('normalize_whitespace', function (text) {

        //Remove tabs
        text = text.replace(/\t/g, '');

        text = text.replace(/\r/g, '');

        //Remove big spaces and punctuation
        text = text.replace(/\n/g, ' ');

        //remove repeated spaces
        text = text.replace(/ +(?= )/g, '');

        return text;
    });

    eleventyConfig.addFilter("md", function (content = "") {
        return markdownIt({ html: true }).render(content);
    });

    eleventyConfig.addShortcode("img", function (title, url) {
        return `<img alt="${title}" src="${url}" class="img-fluid mb-2" loading="lazy" data-src="${url}">`;
    });

    let markdownLibrary = markdownIt({
        html: true,
        breaks: true,
        linkify: true
    }).use(markdownItAnchor, {
        permalink: markdownItAnchor.permalink.linkInsideHeader({
            symbol: "🔗",
            class: "direct-link"
        })
    }).use(markdownItToc);

    eleventyConfig.setLibrary("md", markdownLibrary);

    eleventyConfig.addPlugin(pluginRss);

    eleventyConfig.addAsyncShortcode("remote_include", async function (url) {

        const sample = await EleventyFetch(url, {
            duration: "1d"
        });

        return sample;
    });

    //eleventyConfig.addAsyncShortcode("remote_include2", async function (urlPath) {
    //    const DOMAIN = "https://raw.githubusercontent.com/stride3d/stride/"
    //    if (urlPath.startsWith("/")) {
    //        // Make sure the `urlPath` doesn't start with `/` otherwise it will remove
    //        // the GitHub repo org/name from the path.
    //        urlPath = urlPath.slice(1);
    //    }
    //    const url = new URL(urlPath, DOMAIN).href;
    //    const sample = await EleventyFetch(url, {
    //        duration: "1d",
    //        type: "cs",
    //    });

    //    return sample;
    //});

    return {
        dir: {
            layouts: "_layouts"
        }
    };
};