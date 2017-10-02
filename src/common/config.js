module.exports = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 8080,

  landing: {
    rootDir: '',
    head: {
      title: 'JSS',
      description: 'An authoring tool for CSS which uses JavaScript as a host language',
      keywords: [
        // TODO: Add SEO keywords
      ]
    },
    og: {
      title: 'JSS',
      description: 'An authoring tool for CSS which uses JavaScript as a host language',
      type: 'website',
      image: 'http://cssinjs.org/images/logo-og.png', // Can't be relative url, and can't be svg
      url: 'http://cssinjs.org/'
    }
  },

  docs: {
    rootDir: 'docs',
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
      image: 'http://cssinjs.org/images/logo-og.png', // Can't be relative url, and can't be svg
      url: 'http://cssinjs.org/docs'
    },
    repo: 'cssinjs/jss',
    gitter: 'cssinjs/Lobby'
  }
}
