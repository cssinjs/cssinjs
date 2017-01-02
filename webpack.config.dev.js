'use strict'

var webpack = require('webpack')
var config = require('./webpack.config.base')

config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"development"'
    }
  }),
  new webpack.HotModuleReplacementPlugin()
])

module.exports = config
