'use strict'

var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CopyFilesPlugin = require('copy-webpack-plugin')
var config = require('./package.json')

module.exports = {
  entry: {
    landing: [path.join(__dirname, 'src', 'landing', 'client.js')],
    docs: [path.join(__dirname, 'src', 'docs', 'client.js')],
    vendor: Object.keys(config.dependencies)
  },
  output: {
    path: path.join(__dirname, 'docs'),
    publicPath: '/docs',
    filename: 'bundle.[name].v' + config.version + '.js',
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, use: 'babel-loader'},
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, use: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, use: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: 'url?limit=10000&mimetype=image/svg+xml' },
      { test: /\.jpg$/, use: 'url-loader?limit=100000' },
      { test: /\.png$/, use: 'url-loader?limit=100000' },
      { test: /\.gif$/, use: 'url-loader?limit=100000' },
      { test: /\.jpg$/, use: 'file-loader' },
      { test: /\.css$/, use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader'
      })}
    ]
  },
  resolve: {
    alias: {
      common: path.resolve(__dirname, 'src/common/'),
      react: 'preact-compat',
      'react-dom': 'preact-compat',
      // See: https://github.com/developit/preact-compat/issues/47
      'create-react-class': 'preact-compat/lib/create-react-class'
    }
  },
  plugins: [
    new ExtractTextPlugin('vendor.styles.v' + config.version + '.css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'bundle.vendor.v' + config.version + '.js'
    }),
    new CopyFilesPlugin([{
      from: './src/common/images',
      to: './images'
    }]),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}
