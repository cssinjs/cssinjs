'use strict'

var webpack = require('webpack');
var path = require('path');
var vendor = require('./vendor');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    app: [
      path.join(__dirname, '..', 'src', 'client.js'),
    ],
    vendor: vendor
  },

  output: {
    path: path.join(__dirname, '..'), // Place all results in root folder
    publicPath: '/',
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel']},
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
      { test: /\.jpg$/, loader: "url-loader?limit=100000" },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.gif$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "file-loader" },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')} // When migrate to Webpack 2.0 read this: https://github.com/webpack/extract-text-webpack-plugin/issues/215
    ]
  },

  plugins: [
    new ExtractTextPlugin("vendor.styles.css"),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),

    new webpack.optimize.OccurenceOrderPlugin(), // Webpack 1.0
    // new webpack.optimize.OccurrenceOrderPlugin(), // Webpack 2.0 fixed this mispelling
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};