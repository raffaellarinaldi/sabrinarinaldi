const
baseConfig = require('./src/common/base/src/config/base.js'),
collectionsConfig = require('./src/config/collections.js')

module.exports = (eleventyConfig) => {
	eleventyConfig.addPlugin(baseConfig)
	eleventyConfig.addPlugin(collectionsConfig)
	eleventyConfig.setQuietMode(true)
	eleventyConfig.setTemplateFormats('html,liquid,njk')
}
