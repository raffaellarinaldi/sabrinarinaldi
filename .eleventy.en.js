module.exports = (eleventyConfig) => {
	require('./.eleventy')(eleventyConfig);
	eleventyConfig.addPassthroughCopy({
		'./src/static': './',
		'./src/en/static': './'
	});
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
