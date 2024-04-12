const
baseConfig = require('./src/common/base/src/config/base.js'),
collectionsConfig = require('./src/config/collections.js'),
minifyConfig = require('./src/common/base/src/config/minify.js')

module.exports = (eleventyConfig) => {
	eleventyConfig.addPlugin(baseConfig)
	eleventyConfig.addPlugin(collectionsConfig)
	eleventyConfig.addWatchTarget('./src/assets/')
	eleventyConfig.addPlugin(minifyConfig)
	eleventyConfig.setQuietMode(true)
	eleventyConfig.setTemplateFormats('html,liquid,njk')
}
