import languages from '../submodules/base/eleventy/config/languages.js'

var environment = process.env.ELEVENTY_ENV || 'production'

export default {
	lang: 'it',
	site: {
		charset: languages.it?.meta?.charset,
		url: environment === 'development' ? '/' : process.env.SITE_URL_IT,
		productionUrl: process.env.SITE_URL_IT,
		description: 'Scopri le opere di Sabrina Rinaldi, artista italiana specializzata in fauna selvatica africana, che mostrano il suo stile unico e la sua passione per la natura.'
	}
}
