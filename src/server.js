import React from 'react'
import {renderToString} from 'react-dom/server'

import jssNormalize from 'jss-normalize'
import {jss} from './utils/jss'
import baseStyles from './styles/baseStyles'

import config from './config'

const analytics = `
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-89548578-1', 'auto');
  ga('send', 'pageview');
`

export default function render() {
  const baseSheet = jss.createStyleSheet(baseStyles)
  const normalize = jss.createStyleSheet(jssNormalize)

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
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <style type="text/css">
          {normalize + baseSheet}
        </style>
        <link rel="stylesheet" type="text/css" href="/vendor.styles.css" />
      </head>
      <body>
        <script src="/vendor.bundle.js" />
        <script src="/bundle.js" />
        {process.env.NODE_ENV === 'production' && <script dangerouslySetInnerHTML={{__html: analytics}} />}
      </body>
    </html>
  )}`
}
