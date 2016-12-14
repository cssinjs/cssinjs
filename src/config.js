module.exports = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 8080,
  site: {
    head: {
      title: 'JSS',
      description: 'A lib for generating CSS from JavaScript',
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
      title: 'JSS',
      description: 'A lib for generating CSS from JavaScript',
      type: 'website',
      image: 'http://cssinjs.org/static/images/logo-dark.svg', // Can't be relative url
      url: 'http://cssinjs.org/'
    },
    repo: 'cssinjs/jss'
  },
  isProduction: (process.env.NODE_ENV === 'production')
}
