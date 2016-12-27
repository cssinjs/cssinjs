'use strict'

var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var config = require('./config')

config.plugins = [
  new ExtractTextPlugin('vendor.styles.css'),
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

module.exports = config
