'use strict'

var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
// var webpackDevMiddleware = require("webpack-dev-middleware");
// var webpackHotMiddleware = require("webpack-hot-middleware");

var express = require('express');

var config = require('../src/config');
var webpackConfig = require('./webpack.config.dev');

// Add dev-server and hot reloading to webpack config
webpackConfig.entry.unshift("webpack-dev-server/client?http://" + config.host + ":" + config.port + "/", "webpack/hot/dev-server");

var env = process.env.NODE_ENV;
var compiler = webpack(webpackConfig);

var serverConfig = {
  publicPath: webpackConfig.output.publicPath,
  // headers: { "X-Custom-Header": "yes" },
  stats: { colors: true },

  // contentBase: 'http://' + config.host + ':' + config.port,

  hot: true,
  // compress: true,

  // proxy: {
  //   '**': 'http://' + config.host + ':' + config.port
  // },

  // historyApiFallback: true, // If you are using a html5 router.

  // Dev middleware options
  noInfo: false,
  quiet: false,
  // lazy: false, // Means no watching, but recompilation on every request
  // serverSideRender: true,
};

var server = new WebpackDevServer(compiler, serverConfig);

server.listen(config.port);

// ------------------------------------------------------------------------------------------------------------------

// var app = new express();

// app.use(webpackDevMiddleware(compiler, serverConfig));
// app.use(webpackHotMiddleware(compiler));

// app.listen(config.port, function(error) {
//   if (error) {
//     console.error(error);
//   } else {
//     console.info('==> Webpack development server listening on port %s', config.port);
//   }
// });

// ------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------

// 'use strict'

// var Express = require('express');
// var webpack = require('webpack');

// var config = require('../src/config');
// var webpackConfig = require('./webpack.config.dev');
// var compiler = webpack(webpackConfig);

// var serverOptions = {
//   contentBase: 'http://' + config.host + ':' + config.port,
//   // contentBase: './src',

//   // quiet: true,
//   // noInfo: true,
//   hot: true,
//   // inline: true,
//   lazy: false,
//   publicPath: webpackConfig.output.publicPath,
//   headers: { 'Access-Control-Allow-Origin': '*' },
//   stats: { colors: true },

//   historyApiFallback: true // Need to run dev server
// };

// var app = new Express();

// app.use(require('webpack-dev-middleware')(compiler, serverOptions));
// app.use(require('webpack-hot-middleware')(compiler));

// app.listen(config.port, function(error) {
//   if (error) {
//     console.error(error);
//   } else {
//     console.info('==> Webpack development server listening on port %s', config.port);
//   }
// });