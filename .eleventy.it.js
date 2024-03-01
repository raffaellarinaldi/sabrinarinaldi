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
		'./src/it/static': './'
	})
	return {
		dir: {
			input: 'src/it',
			output: 'dist/it',
			data: '../data',
			includes: '../includes',
			layouts: '../layouts'
		}
	}
}
