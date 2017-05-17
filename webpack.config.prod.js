'use strict'

var webpack = require('webpack')
var CompressionPlugin = require('compression-webpack-plugin')
var config = require('./webpack.config.base')

config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),

  // Ignore dev config
  new webpack.IgnorePlugin(/\.\/dev/, /\/config$/),

  // Optimizations
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    compress: {
      warnings: false
    }
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: true
  }),
  new CompressionPlugin({
    asset: "[path].gz[query]",
    algorithm: "gzip",
    test: /\.js$|\.css$|\.html$/,
    threshold: 10240,
    minRatio: 0.8
  })
])

module.exports = config
