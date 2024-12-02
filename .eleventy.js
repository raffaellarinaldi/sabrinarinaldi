const
baseConfig = require('./src/common/base/src/config/base.js'),
collectionsConfig = require('./src/config/collections.js'),
eleventySass = require('eleventy-sass'),
minifyConfig = require('./src/common/base/src/config/minify.js')

module.exports = (eleventyConfig) => {
	eleventyConfig.addPlugin(baseConfig)
	eleventyConfig.addPlugin(collectionsConfig)
	eleventyConfig.addPlugin(eleventySass, [{
		sass: { style: 'compressed', sourceMap: false },
		rev: true,
		when: [{ ELEVENTY_ENV: 'deployment' }, { ELEVENTY_ENV: false }]
    }])
	eleventyConfig.addWatchTarget('./src/assets/')
	eleventyConfig.addPlugin(minifyConfig)
	eleventyConfig.setQuietMode(true)
	eleventyConfig.setTemplateFormats('html,liquid,njk')
}
