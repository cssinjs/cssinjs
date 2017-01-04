import React from 'react'
import {renderToString} from 'react-dom/server'
import {match, RouterContext} from 'react-router'
import {stripIndents} from 'common-tags'
import {minify} from 'html-minifier'

import routes from './routes'
import {SheetsRegistryProvider, SheetsRegistry} from './utils/jss'

import config from './config'

const minifyOptions = {
  minifyCSS: true,
  minifyJS: true
}

const renderApp = (renderProps) => {
  const sheets = new SheetsRegistry()

  const app = renderToString(
    <SheetsRegistryProvider registry={sheets}>
      <RouterContext {...renderProps} />
    </SheetsRegistryProvider>
  )

  return {
    app,
    css: sheets.toString()
  }
}

const renderAnalytics = () => {
  if (process.env.NODE_ENV !== 'production') return ''
  return stripIndents`
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-89548578-1', 'auto');
      ga('send', 'pageview');
    </script>
  `
}

const renderDoc = ({app, css, analytics}) => (
  stripIndents`
    <!doctype html>
    <html lang="en">
      <head>
        <title>${config.site.head.title}</title>
        <meta name="description" content=${config.site.head.description} />
        <meta name="keywords" content=${config.site.head.keywords.join(' ')} />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content=${config.site.og.title} />
        <meta property="og:description" content=${config.site.og.description} />
        <meta property="og:type" content=${config.site.og.type} />
        <meta property="og:image" content=${config.site.og.image} />
        <meta property="og:url" content=${config.site.og.url} />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <style id="critical-css" type="text/css">
          ${css}
        </style>
        <link rel="stylesheet" type="text/css" href="/vendor.styles.css" />
      </head>
      <body>
        <div id="cssinjs" style="height: 100%">
          ${app}
        </div>
        <script src="/vendor.bundle.js"></script>
        <script src="/bundle.js"></script>
        ${analytics}
      </body>
    </html>
  `
)

export default (location, callback) => {
  match({routes, location}, (error, redirectLocation, renderProps) => {
    const html = renderDoc({
      ...renderApp(renderProps),
      analytics: renderAnalytics()
    })
    callback(minify(html, minifyOptions))
  })
}
