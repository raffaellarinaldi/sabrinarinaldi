const
glob = require('glob-promise'),
path = require('path')

module.exports = (eleventyConfig) => {
	eleventyConfig.addCollection('slideshow', async collectionApi => {
		let files = await glob('./src/static/assets/img/home/*.jpg')
		.then((files) => {
			let images = files.map((file) => {
				let pathFilename = file.replace('./src/static/', '')
				let description = path.basename(pathFilename)
				.replace(/^\d*-/, '')
				.replace(/.jpg/, '')
				.replace(/-/g, ' ')
				.replace(/(^\w{1})|(\s+\w{1})/g, firstLetter => firstLetter.toUpperCase())
				return { 'pathFilename': pathFilename, 'description': description }
			})
			return images
		})
		return files
	})
}
