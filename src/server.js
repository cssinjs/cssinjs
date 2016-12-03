import React from 'react'
import {renderToString} from 'react-dom/server'

// import {Router, browserHistory} from 'react-router'
// import {Router} from 'react-router'

import jss from 'jss'

import {jssSheet} from './helpers/jssPreset'
import baseStyles from './styles/baseStyles'

// import routes from './routes'
import config from './config'

export default function render() {
  const baseSheet = jssSheet.createStyleSheet(baseStyles, {named: false})

  return `<!doctype html>\n${renderToString(
    <html lang="en">
      <head>
        <title>{config.site.head.title}</title>
        <meta name="description" content={config.site.head.description} />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <style type="text/css" id="base-styles">
          {baseSheet.toString()}
        </style>
        <style type="text/css" id="server-side-styles">
          {jss.sheets.toString()}
        </style>
      </head>
      <body>
        <div id="root">
          { /* renderToString(<Router history={browserHistory} routes={routes} />) */ }
          { /* <Router history={browserHistory} routes={routes} /> */ }
        </div>
        <script src="vendor.bundle.js" charSet="UTF-8" />
        <script src="bundle.js" charSet="UTF-8" />
      </body>
    </html>
  )}`
}
