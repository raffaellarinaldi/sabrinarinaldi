const
{ series } = require('gulp'),
gulp = require('gulp'),
rename = require('gulp-rename'),
concat = require('gulp-concat'),
pipeline = require('readable-stream').pipeline,
download = require('gulp-download')

function copyAssets(cb) {
    const uikit = [
        gulp.src('./node_modules/uikit/src/scss/**')
        .pipe(gulp.dest('./src/assets/css/vendor/uikit')),

        gulp.src([
            './node_modules/uikit/dist/js/uikit.min.js',
            './node_modules/uikit/dist/js/uikit-icons.min.js',
            './node_modules/uikit/dist/js/uikit-core.min.js'
        ], {
            base: './node_modules'
        })
        .pipe(concat('scripts.min.js'))
        .pipe(gulp.dest('./src/static/assets/js'))
    ]

    Promise.all(uikit.map(task => new Promise((resolve, reject) => {
            task.on('finish', resolve)
            task.on('error', reject)
        })))
        .then(() => {
            console.log('UIKit assets copied successfully.')

            const downloads = [
                download('https://cdn.jsdelivr.net/npm/jquery@latest/dist/jquery.min.js')
                .pipe(gulp.dest('./src/static/assets/js'))
            ]

            return Promise.all(downloads.map(task => new Promise((resolve, reject) => {
                task.on('finish', resolve)
                task.on('error', reject)
            })))
        })
        .then(() => {
            console.log('All external assets downloaded successfully.')
            cb()
        })
        .catch(err => {
            console.error('Error during assets processing:', err)
            cb(err)
        })
}

exports.default = series(copyAssets)
