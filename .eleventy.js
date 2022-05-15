const
htmlmin = require('html-minifier').minify,
glob = require('glob-promise'),
path = require('path'),
fs = require('fs-extra'),
sass = require('sass');

module.exports = (eleventyConfig) => {
	eleventyConfig.setTemplateFormats('html,liquid');
	eleventyConfig.setQuietMode(true);
	eleventyConfig.addWatchTarget('./src/assets/css/');
	// Compile SASS
	eleventyConfig.on('beforeBuild', () => {
	  const isProd = process.env.ELEVENTY_ENV === 'production';
	  let style = sass.renderSync({
	    file: 'src/assets/css/styles.scss',
	    sourceMap: false,
	    outputStyle: isProd ? 'compressed' : 'expanded'
	  });
	  fs.ensureDirSync('src/static/assets/css/');
	  fs.writeFile('src/static/assets/css/styles.css', style.css, (err) => {
	    if (err) throw err;
	    console.log('CSS generated');
	  });
	});
	// Minify HTML in production
	eleventyConfig.addTransform('minifyHTML', (content, outputPath) => {
		if (outputPath && outputPath.endsWith('.html') && process.env.ELEVENTY_ENV !== 'development') {
			return htmlmin(content, {
				collapseWhitespace: true,
				conservativeCollapse: true,
				removeComments: true,
				useShortDoctype: true
			});
		}
		return content;
	});
	eleventyConfig.addCollection('static_files', async collectionApi => {
		let files = await glob('./src/static/files/images/home/slideshow/*.jpg')
		.then((files) => {
			let images = files.map((file) => {
				let pathFilename = file.replace('./src/static/', '');
				let description = path.basename(pathFilename)
				.replace(/^\d*-/, '')
				.replace(/.jpg/, '')
				.replace(/-/g, ' ')
				.replace(/(^\w{1})|(\s+\w{1})/g, firstLetter => firstLetter.toUpperCase());
				return { 'pathFilename': pathFilename, 'description': description };
			});
			return images;
		});
		return files;
	});
	eleventyConfig.addShortcode('11ty_version', () => require('@11ty/eleventy/package.json').version);
};
