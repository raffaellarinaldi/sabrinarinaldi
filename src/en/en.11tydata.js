var environment = process.env.ELEVENTY_ENV || 'production'
if ( environment === 'development' ) {
	var url = '/'
} else {
	var url = 'https://www.sabrinarinaldi.com/'
}

module.exports = () => {
	return {
		site: {
			url: url,
			keywords: 'sabrina, rinaldi, sabrina rinaldi, italian wildlife artist, wildlife artist, wildlife painter, wildlife',
			lang: 'en',
			locale: 'en_US'
		}
	}
}
