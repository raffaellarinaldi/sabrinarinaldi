const
sassConfig = require('./src/common/base/src/config/sass.js'),
minifyConfig = require('./src/common/base/src/config/minify.js'),
ftpConfig = require('./src/common/base/src/config/ftp.js')

const dirs = {
  input: 'src/it',
  output: 'dist/it',
  data: '../data',
  layouts: '../layouts',
  includes: '../includes'
}

module.exports = (eleventyConfig) => {
	require('./.eleventy')(eleventyConfig)
	sassConfig(eleventyConfig, dirs)
	eleventyConfig.addWatchTarget(dirs.input + '/assets/')
	eleventyConfig.addPlugin(minifyConfig, { dirs })
	eleventyConfig.addPlugin(ftpConfig)
	eleventyConfig.addPassthroughCopy({
		'./src/static': './',
		[`${dirs.input}/static`]: './'
	})
	return {
		passthroughFileCopy: true,
		dir: dirs
	}
}
