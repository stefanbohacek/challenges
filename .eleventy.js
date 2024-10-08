const util = require('util');
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = (eleventyConfig) => {
	eleventyConfig.addPlugin(eleventyNavigationPlugin);
	eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addPassthroughCopy({
		"./public/": "/",
	});

	eleventyConfig.setChokidarConfig({
		usePolling: true,
		interval: 500,
	});

	eleventyConfig.addFilter('dump', (value) => {
    const str = util.inspect(value);
    return `<div style="white-space: pre-wrap;">${unescape(str)}</div>;`
	});

	return {
		dir: {
			input: "content",          // default: "."
			includes: "../_includes",  // default: "_includes"
			data: "../_data",          // default: "_data"
			output: "_site"
		},
	};

};
