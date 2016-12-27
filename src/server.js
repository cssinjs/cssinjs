import React from 'react'
import {renderToString} from 'react-dom/server'

import jss from 'jss'
import jssNormalize from 'jss-normalize'
import {jssSheet} from './helpers/jssPreset'
import baseStyles from './styles/baseStyles'

import config from './config'

export default function render() {
  const baseSheet = jssSheet.createStyleSheet(baseStyles)
  const normalize = jssSheet.createStyleSheet(jssNormalize)

  return `<!doctype html>\n${renderToString(
    <html lang="en">
      <head>
        <title>{config.site.head.title}</title>
        <meta name="description" content={config.site.head.description} />
        <meta name="keywords" content={config.site.head.keywords.join(' ')} />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={config.site.og.title} />
        <meta property="og:description" content={config.site.og.description} />
        <meta property="og:type" content={config.site.og.type} />
        <meta property="og:image" content={config.site.og.image} />
        <meta property="og:url" content={config.site.og.url} />
        <link rel="shortcut icon" href="./images/favicon.ico" />
        <style type="text/css" id="normalize-styles">
          {normalize.toString()}
        </style>
        <style type="text/css" id="base-styles">
          {baseSheet.toString()}
        </style>
        <style type="text/css" id="server-side-styles">
          {jss.sheets ? jss.sheets.toString() : ''}
        </style>
      </head>
      <body>
        <div id="root">
          {
            /**
             * TODO: If someone find any solution how to server-side render
             * react-router without real 'server' - tell me. :)
             * So, for now, there is no JSS server sider rendering. No ssr in few words :(
             */
          }
        </div>
        <script src="vendor.bundle.js" charSet="UTF-8" />
        <script src="bundle.js" charSet="UTF-8" />
        <link rel="stylesheet" type="text/css" href="vendor.styles.css" />
      </body>
    </html>
  )}`
}
