var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname + '/app',
  entry: {
    app: './entry.js',
    vendor: ['jquery', 'toastr', 'magnific-popup'],
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
  ],
  module: {
    loaders: [{
        test: /\.js$/,
        include: __dirname + '/app',
        loader: 'babel-loader',
      },
      {
        test: /\.json$/,
        loader:'json-loader',
      },
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css?modules&camelCase&localIdentName=[name]_[local]',
          'autoprefixer?browsers=last 5 version',

          // 'sass',
        ],
      },
    ],
    noParse: /validate\.js/,
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  devServer: {
    contentBase: __dirname + '/dist',
  },
};
