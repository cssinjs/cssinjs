import React from 'react'
import {renderToString} from 'react-dom/server'

import jss from 'jss'
import {jssSheet} from './helpers/jssPreset'
import jssNormalize from 'jss-normalize'
import baseStyles from './styles/baseStyles'

import config from './config'

export default function render() {
  const baseSheet = jssSheet.createStyleSheet(baseStyles, {named: false})
  const normalize = jssSheet.createStyleSheet(jssNormalize, {named: false})

  return `<!doctype html>\n${renderToString(
    <html lang="en">
      <head>
        <title>{config.site.head.title}</title>
        <meta name="description" content={config.site.head.description} />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="./static/favicon.ico" />
        <style type="text/css" id="normalize-styles">
          {normalize.toString()}
        </style>
        <style type="text/css" id="base-styles">
          {baseSheet.toString()}
        </style>
        <style type="text/css" id="server-side-styles">
          {jss.sheets.toString()}
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
