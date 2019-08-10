/* eslint-disable global-require */
const { task, src, dest } = require('gulp')
const postcss = require('gulp-postcss')
const sass = require('gulp-sass')()
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const minifyCSS = require('gulp-csso')()
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/**/*.html',
  ],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
})

const IS_PROD = process.env.NODE_ENV === 'production'
const DIST_DIR = 'dist/'

task('style', () => {
  let thisTask = src('./src/styles/main.scss')
    .pipe(sass)
    .pipe(postcss([
      tailwindcss,
      autoprefixer,
      ...IS_PROD
        ? [purgecss]
        : [],
    ]))

  if (IS_PROD) {
    thisTask = thisTask.pipe(minifyCSS)
  }

  return thisTask.pipe(dest(DIST_DIR))
})

task('static', () => src('./src/index.html').pipe(dest(DIST_DIR)))
