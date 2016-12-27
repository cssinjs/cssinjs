var fs = require('fs')
var path = require('path')

var configPath = path.join(process.cwd(), '.babelrc')
var config = JSON.parse(fs.readFileSync(configPath))
require('babel-register')(config)

var render = require('../src/server').default
console.log(render())
