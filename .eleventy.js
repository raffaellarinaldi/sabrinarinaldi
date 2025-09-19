const
path = require('path'),
global = require(path.resolve(process.cwd(), 'src/submodules/base/eleventy/config/global')),
shortcodes = require(path.resolve(process.cwd(), 'src/submodules/base/eleventy/config/shortcodes'))

const siteLangs = ['en', 'it'], defaultLang = 'en'

module.exports = async function (eleventyConfig) {
	eleventyConfig.setQuietMode(true)
	eleventyConfig.addGlobalData('siteLangs', siteLangs)
	eleventyConfig.addGlobalData('defaultLang', defaultLang)
	eleventyConfig.addPlugin(global)
	eleventyConfig.addPlugin(shortcodes)
	eleventyConfig.setTemplateFormats('html', 'liquid')
}
