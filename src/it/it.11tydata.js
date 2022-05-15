var environment = process.env.ELEVENTY_ENV || 'production';
if ( environment === 'production' ) {
	var url = 'https://www.sabrinarinaldi.it/';
} else {
	var url = '/';
}

module.exports = () => {
	return {
		'site': {
			'url': url,
			'keywords': 'sabrina, rinaldi, sabrina rinaldi, pittore animali italiano, pittore wildlife, artista wildlife, wildlife',
			'lang': 'it',
			'locale': 'it_IT'
		}
	}
}
