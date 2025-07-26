import languages from '../submodules/base/eleventy/config/languages.js'

var
environment = process.env.ELEVENTY_ENV || 'production',
url = environment === 'development' ? '/' : 'https://sabrinarinaldi.com/'

export default {
	lang: 'en',
	site: {
		charset: languages.en?.meta?.charset,
		url: url,
		description: 'Discover the artwork of Sabrina Rinaldi, an Italian painter specializing in African wildlife, showcasing her unique style and passion for nature.',
		keywords: 'sabrina, rinaldi, italian wildlife artist, wildlife artist, wildlife painter, wildlife'
	}
}
