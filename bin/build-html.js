var fs = require('fs')
var path = require('path')

var configPath = path.join(process.cwd(), '.babelrc')
var config = JSON.parse(fs.readFileSync(configPath))
require('babel-register')(config)

var render = require('../src/server').default

var navMap = require('../src/utils/navigation').map
var html = render()

// Generate html files.
const getDir = name => path.join(__dirname, '..', `/docs/${name}`)
Object.keys(navMap).forEach((name) => {
  const dir = getDir(name)
  try {
    fs.mkdirSync(dir)
  } catch(err) {}
  fs.writeFileSync(path.join(dir, 'index.html'), html)
})
fs.writeFileSync(path.join(getDir(''), 'index.html'), html)
