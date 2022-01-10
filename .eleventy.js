const pluginNavigation = require("@11ty/eleventy-navigation");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const htmlmin = require("html-minifier");
const slugify = require("slugify");
const pluginTOC = require('eleventy-plugin-toc')
const markdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')

const mdOptions = {
  html: true,
  breaks: true,
  linkify: true,
  typographer: true
}
const mdAnchorOpts = {
  permalink: true,
  permalinkClass: 'anchor-link',
  permalinkSymbol: '#',
  level: [1, 2, 3, 4]
}

// Filters
const dateFilter = require('./src/filters/date-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');

// Footnotes
const footnotes = require('eleventy-plugin-footnotes');

// Embed Media
const embeds = require("eleventy-plugin-embed-everything");

// Create a helpful production flag
const isProduction = process.env.NODE_ENV === 'production';

const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(embeds)
  eleventyConfig.addPlugin(footnotes)
    //html minifier
    eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
      // Eleventy 1.0+: use this.inputPath and this.outputPath instead
      if (outputPath && outputPath.endsWith(".html")) {
        let minified = htmlmin.minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true
        });
        return minified;
      }
  
      return content;
    });
  
    /// Markdown Component from Markdown-it
    let markdownIt = require("markdown-it");
    let markdownItFootnote = require("markdown-it-footnote");
    let markdownItContainer = require("markdown-it-container");
    let options = {
      html: true,
      breaks: true,
      linkify: true,
      typographer: true
    };
    eleventyConfig.setLibrary("md", markdownIt(options)
    .use(markdownItFootnote)
    .use(markdownItAnchor, mdAnchorOpts)
    .use(markdownItContainer, 'callout')
    .use(markdownItContainer, 'callout-events')
    .use(markdownItContainer, 'callout-yellow')
    .use(markdownItContainer, 'callout-blue')
    .use(markdownItContainer, 'callout-pink')
    .use(markdownItContainer, 'callout-purple')
    .use(markdownItContainer, 'callout-green')
    .use(markdownItContainer, 'warning')
    .use(markdownItContainer, 'braille')
  
    );
  eleventyConfig.addPlugin(pluginTOC)
  //data deep merge
  eleventyConfig.setDataDeepMerge(true);

  //syntax highlight
  eleventyConfig.addPlugin(syntaxHighlight);
  // Add filters

  eleventyConfig.addFilter('dateFilter', dateFilter);
  eleventyConfig.addFilter('w3DateFilter', w3DateFilter);

  // Plugins
  eleventyConfig.addPlugin(pluginNavigation);

  // Returns a collection of blog posts
  eleventyConfig.addCollection('blog', collection => {
    return [...collection.getFilteredByGlob('./src/posts/*.md')];
  });

    // Get the first `n` elements of a collection.
    eleventyConfig.addFilter("head", (array, n) => {
      if(!Array.isArray(array) || array.length === 0) {
        return [];
      }
      if( n < 0 ) {
        return array.slice(n);
      }
  
      return array.slice(0, n);
    });
  
    // Return the smallest number argument
    eleventyConfig.addFilter("min", (...numbers) => {
      return Math.min.apply(null, numbers);
    });
  
    function filterTagList(tags) {
      return (tags || []).filter(tag => ["all", "nav", "post", "posts"].indexOf(tag) === -1);
    }

  eleventyConfig.addFilter("filterTagList", filterTagList)
// Tag Cloud
  eleventyConfig.addCollection('tagList', collection => {
    let tagSet = new Set();
    collection.getAll().forEach(item => {
      (item.data.tags || []).forEach(tag => tagSet.add(tag));
    });

    return filterTagList([...tagSet]);
  });

  // Returns grammar list
     eleventyConfig.addCollection('grammar', collection => {
      return collection.getFilteredByGlob('./src/grammar/*.md')
      .sort((a, b) => b.data.order - a.data.order);
     });
  
  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/css");
   eleventyConfig.addPassthroughCopy('src/admin');

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};