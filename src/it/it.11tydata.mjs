import languages from '../submodules/base/eleventy/config/languages.js'

var
environment = process.env.ELEVENTY_ENV || 'production',
url = environment === 'development' ? '/' : 'https://sabrinarinaldi.it/'

export default {
	lang: 'it',
	site: {
		charset: languages.it?.meta?.charset,
		url: url,
		description: 'Scopri le opere di Sabrina Rinaldi, artista italiana specializzata in fauna selvatica africana, che mostrano il suo stile unico e la sua passione per la natura.',
		keywords: 'sabrina, rinaldi, sabrina rinaldi, pittore animali italiano, pittore wildlife, artista wildlife, wildlife'
	}
}
