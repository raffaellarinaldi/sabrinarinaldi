const
eleventySass = require('eleventy-sass'),
ftpConfig = require('./src/common/base/src/config/ftp.js')

module.exports = (eleventyConfig) => {
	require('./.eleventy')(eleventyConfig)
	eleventyConfig.addPlugin(eleventySass, [{
		sass: { style: 'compressed', sourceMap: false },
		rev: true,
		when: [{ ELEVENTY_ENV: 'deployment' }, { ELEVENTY_ENV: false }]
    }])
	eleventyConfig.addPlugin(ftpConfig)
	eleventyConfig.addPassthroughCopy({
		'./src/en/static': './'
	})
	return {
		passthroughFileCopy: true,
		dir: {
			input: 'src/en',
			output: 'dist/en',
			data: '../data',
			includes: '../includes',
			layouts: '../layouts'
		}
	}
}
