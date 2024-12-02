const
ftpConfig = require('./src/common/base/src/config/ftp.js')

module.exports = (eleventyConfig) => {
	require('./.eleventy')(eleventyConfig)
	eleventyConfig.addPlugin(ftpConfig)
	eleventyConfig.addPassthroughCopy({
		'./src/it/static': './'
	})
	return {
		passthroughFileCopy: true,
		dir: {
			input: 'src/it',
			output: 'dist/it',
			data: '../data',
			includes: '../includes',
			layouts: '../layouts'
		}
	}
}
