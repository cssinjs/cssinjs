const title = 'JSS'
const absoluteUrl = 'http://cssinjs.org/'
const landingDescription = 'An authoring tool for CSS which uses JavaScript as a host language'
const docsDescription = 'A lib for generating CSS from JavaScript'
const keywords = [
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

module.exports = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 8080,

  repo: 'cssinjs/jss',
  gitter: 'cssinjs/Lobby',

  landing: {
    rootDir: '',
    head: {
      title: title,
      description: landingDescription,
      keywords: keywords
    },
    og: {
      title: title,
      description: landingDescription,
      type: 'website',
      image: absoluteUrl + 'images/logo-og.png', // Can't be relative url, and can't be svg
      url: absoluteUrl
    }
  },

  docs: {
    rootDir: 'docs',
    head: {
      title: title,
      description: docsDescription,
      keywords: keywords
    },
    og: {
      title: title,
      description: docsDescription,
      type: 'website',
      image: absoluteUrl + 'images/logo-og.png', // Can't be relative url, and can't be svg
      url: absoluteUrl + 'docs'
    }
  }
}
