module.exports = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 8080,
  head: {
    title: "JSS",
    description: "A lib for generating CSS from JavaScript"
  },
  isProduction: (process.env.NODE_ENV === 'production')
}
