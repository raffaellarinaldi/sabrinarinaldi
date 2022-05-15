var environment = process.env.ELEVENTY_ENV || 'production';
if ( environment === 'production' ) {
	var url = 'https://www.sabrinarinaldi.com/';
} else {
	var url = '/';
}

module.exports = () => {
	return {
		'site': {
			'url': url,
			'keywords': 'sabrina, rinaldi, sabrina rinaldi, italian wildlife artist, wildlife artist, wildlife painter, wildlife',
			'lang': 'en',
			'locale': 'en_US'
		}
	}
}
