const
sassConfig = require('./src/common/base/src/config/sass.js'),
ftpConfig = require('./src/common/base/src/config/ftp.js')

module.exports = (eleventyConfig) => {
	require('./.eleventy')(eleventyConfig)
	eleventyConfig.addPlugin(sassConfig, {
		inputPath: './src/assets/css/'
	})
	eleventyConfig.addPlugin(ftpConfig)
	eleventyConfig.addPassthroughCopy({
		'./src/en/static': './'
	})
	return {
		dir: {
			input: 'src/en',
			output: 'dist/en',
			data: '../data',
			includes: '../includes',
			layouts: '../layouts'
		}
	}
}
