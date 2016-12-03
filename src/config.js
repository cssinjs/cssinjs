module.exports = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 8080,
  site: {
    head: {
      title: 'JSS',
      description: 'A lib for generating CSS from JavaScript'
    },
    repo: 'cssinjs/jss'
  },
  isProduction: (process.env.NODE_ENV === 'production')
}
