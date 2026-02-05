require('dotenv').config({ path: '.env.it' })
require('dotenv').config({ path: '.env' })

const
path = require('path'),
sass = require(path.resolve(process.cwd(), 'src/submodules/base/eleventy/hooks/sass')),
{ minifyHTML } = require(path.resolve(process.cwd(), 'src/submodules/base/eleventy/hooks/terser')),
ftp = require(path.resolve(process.cwd(), 'src/submodules/base/eleventy/hooks/ftp'))

const dirs = {
  input: 'src/it',
  output: 'dist/it',
  data: '../data',
  layouts: '../layouts',
  includes: '../includes'
}

module.exports = async function (eleventyConfig) {
	require('./.eleventy')(eleventyConfig)
	eleventyConfig.addPassthroughCopy({
		'./src/static': './',
		[`${dirs.input}/static`]: './'
	})
	eleventyConfig.addWatchTarget(dirs.input + '/assets/')
	sass(eleventyConfig, dirs)
	eleventyConfig.addTransform('minifyHTML', minifyHTML)
	eleventyConfig.addPlugin(ftp)
	return {
		passthroughFileCopy: true,
		dir: dirs
	}
}
