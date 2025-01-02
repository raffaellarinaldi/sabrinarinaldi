var environment = process.env.ELEVENTY_ENV || 'production'
if ( environment === 'development' ) {
	var url = '/'
} else {
	var url = 'https://www.sabrinarinaldi.it/'
}

module.exports = () => {
	return {
		site: {
			url: url,
			keywords: 'sabrina, rinaldi, sabrina rinaldi, pittore animali italiano, pittore wildlife, artista wildlife, wildlife',
			lang: 'it',
			locale: 'it_IT'
		}
	}
}
