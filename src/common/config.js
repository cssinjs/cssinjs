/**
 * Global site config
 * Holds all common data for landing and docs site
 */

const title = 'JSS'
const description = 'An authoring tool for CSS which uses JavaScript as a host language'
const absoluteUrl = 'http://cssinjs.org/'

module.exports = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 8080,

  repo: 'cssinjs/jss',
  gitter: 'cssinjs/Lobby',

  head: {
    title,
    description,
    keywords: [
      'jss',
      'style',
      'sheet',
      'stylesheet',
      'css',
      'cssinjs',
      'css in js',
      'css-in-js',
      'components',
      'composable',
      'react',
    ]
  },
  og: {
    title,
    description,
    type: 'website',
    image: `${absoluteUrl}images/logo-og.png`, // Can't be relative url, and can't be svg
    url: absoluteUrl
  }
}
