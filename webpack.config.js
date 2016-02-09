var path = require('path')
var webpack = require('webpack')

module.exports = {
  context: __dirname + "/app",
  entry: "./entry",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
    publicPath: '/static/'
  },
  module: {
    loaders: [{
        test: /\.js$/,
        include: __dirname + "/app",
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        loader:'json-loader'
      }
    ],
    noParse: /validate\.js/
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  devServer: {
    contentBase: __dirname + '/dist'
  }
};