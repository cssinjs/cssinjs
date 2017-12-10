import React from 'react'
import {renderToString} from 'react-dom/server'
import {match, RouterContext} from 'react-router'
import {stripIndents} from 'common-tags'
import {minify} from 'html-minifier'

import {JssProvider, ThemeProvider, SheetsRegistry, jss} from 'common/utils/jss'
import theme from 'common/theme'
import config from 'common/config'

import routes from './routes'
import {version} from '../../package.json'

const minifyOptions = {
  minifyCSS: true,
  minifyJS: true
}

const renderApp = (renderProps) => {
  const sheets = new SheetsRegistry()

  const app = renderToString(
    <ThemeProvider theme={theme}>
      <JssProvider registry={sheets} jss={jss}>
        <RouterContext {...renderProps} />
      </JssProvider>
    </ThemeProvider>
  )

  return {
    app,
    css: sheets.toString()
  }
}

const renderAnalytics = () => (
  stripIndents`
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-89548578-1', 'auto');
      ga('send', 'pageview');
    </script>
  `
)

const renderSidecar = () => (
  stripIndents`
    <script>
      ((window.gitter = {}).chat = {}).options = {
        room: '${config.gitter}'
      };
    </script>
    <script src="https://sidecar.gitter.im/dist/sidecar.v1.js" async defer></script>
  `
)

const renderDoc = ({app, css, analytics, sidecar}) => (
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
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <style id="critical-css" type="text/css">
          ${css}
        </style>
        <link rel="stylesheet" type="text/css" href="/vendor.styles.v${version}.css" />
      </head>
      <body>
        ${app}
        <script src="/bundle.vendor.v${version}.js"></script>
        <script src="/bundle.docs.v${version}.js"></script>
        ${analytics}
        ${sidecar}
      </body>
    </html>
  `
)

export default (location, callback) => {
  match({routes, location}, (error, redirectLocation, renderProps) => {
    const html = renderDoc({
      ...renderApp(renderProps),
      analytics: renderAnalytics(),
      sidecar: renderSidecar()
    })
    callback(minify(html, minifyOptions))
  })
}
