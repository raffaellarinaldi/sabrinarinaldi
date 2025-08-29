import languages from '../submodules/base/eleventy/config/languages.js'

const loadLangData = async (langCode) =>
  (await import(`${process.cwd()}/src/${langCode}/${langCode}.11tydata.mjs`)).default

const [enData, itData] = await Promise.all([loadLangData('en'), loadLangData('it')])

export default {
  header: {
    navigation: {
      en: {
        lang: enData.lang,
        url: enData.site.url,
        aria: {
          label: languages.en?.aria?.navigation?.label,
          title: languages.en?.aria?.navigation?.title
        },
        items: [
          { title: 'Home', fileSlug: 'index', ref: 'index' },
          { title: 'Gallery', fileSlug: 'gallery', ref: 'gallery' },
          { title: 'About the Artist', fileSlug: 'about', ref: 'about' },
          { title: 'Expo', fileSlug: 'expo', ref: 'expo' },
          { title: 'Critiques', fileSlug: 'critiques', ref: 'critiques' },
          { title: 'Commissions', fileSlug: 'commissions', ref: 'commissions' },
          { title: 'Links', fileSlug: 'links', ref: 'links' },
          { title: 'Contact', ref: 'contact' }
        ]
      },
      it: {
        lang: itData.lang,
        url: itData.site.url,
        aria: {
          label: languages.it?.aria?.navigation?.label,
          title: languages.it?.aria?.navigation?.title
        },
        items: [
          { title: 'Inizio', fileSlug: 'index', ref: 'index' },
          { title: 'Galleria', fileSlug: 'galleria', ref: 'gallery' },
          { title: 'Biografia', fileSlug: 'biografia', ref: 'about' },
          { title: 'Expo', fileSlug: 'expo', ref: 'expo' },
          { title: 'Recensioni', fileSlug: 'recensioni', ref: 'critiques' },
          { title: 'Commissioni', fileSlug: 'commissioni', ref: 'commissions' },
          { title: 'Links', fileSlug: 'links', ref: 'links' },
          { title: 'Contatti', ref: 'contact' }
        ]
      }
    }
  },
  main: {
    updated: {
      en: 'Last updated: 2013',
      it: 'Ultimo aggiornamento: 2013'
    }
  },
  footer: {
    disclaimer: {
      en: 'Unauthorised copy or use of images is strictly forbidden. Any violation hereof shall be prosecuted in terms of the law.',
      it: 'Sono severamente vietati la copia e l’uso non autorizzati delle immagini. Ogni violazione sarà perseguita a norma di legge.'
    },
    credits: {
      en: 'Designed &amp; Developed by <a class="uk-text-uppercase" href="https://raffaellarinaldi.com" target="_blank" rel="nofollow noreferrer noopener">Raffaella Rinaldi</a>',
      it: 'Disegnato &amp; Sviluppato da <a class="uk-text-uppercase" href="https://raffaellarinaldi.com" target="_blank" rel="nofollow noreferrer noopener">Raffaella Rinaldi</a>'
    }
  },
  modals: {
    aria: {
      close: {
        en: languages.en?.aria?.modal?.close,
        it: languages.it?.aria?.modal?.close
      }
    }
  }
}
