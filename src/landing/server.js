import React from 'react'
import {renderToString} from 'react-dom/server'
import {stripIndents} from 'common-tags'
import {minify} from 'html-minifier'

import {JssProvider, SheetsRegistry} from 'common/utils/jss'
import {landing as config} from 'common/config'
import App from './components/App'
import {version} from '../../package.json'

const minifyOptions = {
  minifyCSS: true,
  minifyJS: true
}

const renderApp = () => {
  const sheets = new SheetsRegistry()
  const app = renderToString(
    <JssProvider registry={sheets}>
      <App />
    </JssProvider>
  )

  return {
    app,
    css: sheets.toString()
  }
}

const renderAnalytics = () => (
  // TODO: Add analytics (if needed)
  stripIndents`
    
  `
)

const renderDoc = ({app, css, analytics}) => (
  stripIndents`
    <!doctype html>
    <html lang="en">
      <head>
        <title>${config.head.title}</title>
        <meta name="description" content="${config.head.description}" />
        <meta name="keywords" content="${config.head.keywords.join(' ')}" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="${config.og.title}" />
        <meta property="og:description" content="${config.og.description}" />
        <meta property="og:type" content="${config.og.type}" />
        <meta property="og:image" content="${config.og.image}" />
        <meta property="og:url" content="${config.og.url}" />
        <link rel="shortcut icon" href="./images/favicon.ico" />
        <style id="critical-css" type="text/css">
          ${css}
        </style>
      </head>
      <body>
        ${app}
        <script src="./bundle.vendor.v${version}.js"></script>
        <script src="./bundle.landing.v${version}.js"></script>
        ${analytics}
      </body>
    </html>
  `
)

export default (callback) => {
  callback(minify(renderDoc({
    ...renderApp(),
    analytics: renderAnalytics()
  }), minifyOptions))
}
