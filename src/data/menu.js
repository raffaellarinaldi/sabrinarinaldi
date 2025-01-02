const enSite = require('../en/en.11tydata.js'), itSite = require('../it/it.11tydata.js')

module.exports = [
    {
      lang: `${enSite().site.lang}`,
      url: `${enSite().site.url}`,
      items: [
        {
          title: 'Home',
          fileslug: 'index',
          ref: 'index'
        },
        {
          title: 'Gallery',
          fileslug: 'gallery',
          ref: 'gallery'
        },
        {
          title: 'About the Artist',
          fileslug: 'about',
          ref: 'about'
        },
        {
          title: 'Expo',
          fileslug: 'expo',
          ref: 'expo'
        },
        {
          title: 'Critiques',
          fileslug: 'critiques',
          ref: 'critiques'
        },
        {
          title: 'Commissions',
          fileslug: 'commissions',
          ref: 'commissions'
        },
        {
          title: 'Links',
          fileslug: 'links',
          ref: 'links'
        },
        {
          title: 'Contact',
          ref: 'contact'
        }
      ]
    },
    {
      lang: `${itSite().site.lang}`,
      url: `${itSite().site.url}`,
      items: [
        {
          title: 'Home',
          fileslug: 'index',
          ref: 'index'
        },
        {
          title: 'Galleria',
          fileslug: 'galleria',
          ref: 'gallery'
        },
        {
          title: 'Biografia',
          fileslug: 'biografia',
          ref: 'about'
        },
        {
          title: 'Expo',
          fileslug: 'expo',
          ref: 'expo'
        },
        {
          title: 'Recensioni',
          fileslug: 'recensioni',
          ref: 'critiques'
        },
        {
          title: 'Commissioni',
          fileslug: 'commissioni',
          ref: 'commissions'
        },
        {
          title: 'Links',
          fileslug: 'links',
          ref: 'links'
        },
        {
          title: 'Contatti',
          ref: 'contact'
        }
      ]
    }
  ]
