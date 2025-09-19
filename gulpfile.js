const
path = require('path'),
{ series, parallel } = require('gulp'),
{ copyAssets } = require(path.resolve(process.cwd(), 'src/submodules/base/bundler/gulp/assets')),
{ downloadGoogleFonts } = require(path.resolve(process.cwd(), 'src/submodules/base/bundler/gulp/fonts'))

const baseConfig = {
  paths: {
    css: 'assets/css',
    js: 'assets/js',
    fonts: 'assets/fonts',
    vendor: {
      css: './src/assets/css/vendor'
    }
  },
  nodeModules: {
    uikit: {
      scss: './node_modules/uikit/src/scss/**',
      js: [
        './node_modules/uikit/dist/js/uikit.min.js',
        './node_modules/uikit/dist/js/uikit-icons.min.js'
      ]
    }
  },
  cdnResources: {}
}

function createBuildTask(distPath) {
  const locale = path.basename(distPath)
  const config = {
    ...baseConfig,
    cdnResources: baseConfig.cdnResources[locale] || {},
    paths: {
      ...baseConfig.paths,
      dist: distPath
    }
  }

  return function build(cb) {
    copyAssets(config, async err => {
      if (err) return cb(err)
      try {
        await downloadGoogleFonts(config.paths)
        console.log(`✔ Google Fonts downloaded for ${distPath}`)
        cb()
      } catch (fontErr) {
        console.error(`✖ Error downloading Google Fonts for ${distPath}:`, fontErr)
        cb(fontErr)
      }
    })
  }
}

const locales = ['it', 'en']
const tasks = {}

locales.forEach(locale => {
  const task = createBuildTask(`./dist/${locale}`)
  tasks[locale] = series(task)
  exports[locale] = tasks[locale]
})

exports.default = parallel(...Object.values(tasks))
