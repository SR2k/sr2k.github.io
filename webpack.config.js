const path = require('path')

const outputDir = path.resolve(__dirname, 'dist/')

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts'),
  output: {
    path: outputDir,
    filename: 'index.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    }],
  },
}
