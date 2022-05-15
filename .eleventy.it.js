module.exports = (eleventyConfig) => {
	require('./.eleventy')(eleventyConfig);
	eleventyConfig.addPassthroughCopy({
		'./src/static': './',
		'./src/it/static': './'
	});
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
