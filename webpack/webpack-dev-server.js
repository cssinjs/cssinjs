'use strict'

var WebpackDevServer = require('webpack-dev-server')
var webpack = require('webpack')
var express = require('express')
var config = require('../src/config')
var webpackConfig = require('./webpack.config.dev')

// Add dev-server and hot reloading to webpack config
webpackConfig.entry.app.unshift('webpack-dev-server/client?http://' + config.host + ':' + config.port + '/', 'webpack/hot/dev-server')

var compiler = webpack(webpackConfig)

var serverConfig = {
  publicPath: webpackConfig.output.publicPath,
  stats: { colors: true },
  hot: true,
}

var server = new WebpackDevServer(compiler, serverConfig)

server.listen(config.port)
