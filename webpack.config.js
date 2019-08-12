const path = require('path')
const tailwind = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const purgecss = require('@fullhuman/postcss-purgecss')
const WebpackBar = require('webpackbar')

const outputDir = path.resolve(__dirname, 'dist/')
const IS_PROD = process.env.NODE_ENV === 'prod'

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src/scripts/index.js'),
  },
  output: {
    path: outputDir,
    filename: '[name].js',
  },
  mode: IS_PROD ? 'production' : 'development',
  devtool: !IS_PROD && 'inline-source-map',
  devServer: IS_PROD ? {} : {
    contentBase: outputDir,
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: outputDir,
              hmr: !IS_PROD,
            },
          },
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                tailwind,
                autoprefixer,
                ...IS_PROD
                  ? [purgecss({
                    content: ['./src/**/*.html'],
                    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
                  })]
                  : [],
              ],
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.html$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
    new WebpackBar(),
  ],
}
