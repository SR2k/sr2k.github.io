/* eslint-disable global-require */

// TODO: switch to webpack

const {
  task, src, dest, watch, parallel,
} = require('gulp')
const postcss = require('gulp-postcss')
const sass = require('gulp-sass')
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const minifyCSS = require('gulp-csso')
const purgecss = require('@fullhuman/postcss-purgecss')
const { stream, init: initBrowserSync, reload } = require('browser-sync')
const webpack = require('webpack-stream')
const webpackConfig = require('./webpack.config.js')

const IS_PROD = process.env.NODE_ENV === 'prod'
const SOURCE_PATH = './src/'
const DIST_DIR = './dist/'

const GLOBS = {
  static: [`${SOURCE_PATH}index.html`],
  styleEntry: `${SOURCE_PATH}styles/main.scss`,
  styles: `${SOURCE_PATH}styles/**/*.scss`,
  scriptEntry: `${SOURCE_PATH}scripts/index.js`,
  scripts: `${SOURCE_PATH}scripts/**/*.js`,
}

// ---------------------------------------------------------

const styleProd = () => src(GLOBS.styleEntry)
  .pipe(postcss([
    tailwindcss,
    autoprefixer,
    purgecss({
      content: [...GLOBS.static],
      defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    }),
  ]))
  .pipe(sass().on('error', sass.logError))
  .pipe(minifyCSS())
  .pipe(dest(DIST_DIR))

const styleDev = () => src(GLOBS.styleEntry)
  .pipe(postcss([
    tailwindcss,
    autoprefixer,
  ]))
  .pipe(sass().on('error', sass.logError))
  .pipe(dest(DIST_DIR))
  .pipe(stream())

const style = IS_PROD ? styleProd : styleDev

const copy = () => src(GLOBS.static)
  .pipe(dest(DIST_DIR))

const scriptsProd = () => src(GLOBS.scriptEntry)
  .pipe(webpack(webpackConfig))
  .pipe(dest(DIST_DIR))

const scriptsDev = () => {
  const watchConfig = Object.create(webpackConfig)
  watchConfig.watch = true
  return src(GLOBS.scriptEntry)
    .pipe(webpack(watchConfig))
    .pipe(dest(DIST_DIR))
}

const scripts = IS_PROD ? scriptsProd : scriptsDev

const serve = () => {
  initBrowserSync({
    server: {
      baseDir: DIST_DIR,
    },
  })
}

// ---------------------------------------------------------

task('watch', () => {
  watch(GLOBS.static, copy)
    .on('change', reload)
  // FIXME: watch doesn't work
  watch(GLOBS.scripts, scripts)
    .on('change', reload)
  watch(GLOBS.styles, style)
})

task('default', parallel(copy, style, scripts))

task('dev', parallel(serve, 'watch'))
