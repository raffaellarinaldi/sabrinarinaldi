import languages from '../submodules/base/eleventy/config/languages.js'

var environment = process.env.ELEVENTY_ENV || 'production'

export default {
	lang: 'en',
	site: {
		charset: languages.en?.meta?.charset,
		url: environment === 'development' ? '/' : process.env.SITE_URL_EN,
		productionUrl: process.env.SITE_URL_EN,
		description: 'Discover the artwork of Sabrina Rinaldi, an Italian painter specializing in African wildlife, showcasing her unique style and passion for nature.'
	}
}
