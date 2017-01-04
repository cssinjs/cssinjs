var fs = require('fs')
var path = require('path')

var configPath = path.join(process.cwd(), '.babelrc')
var config = JSON.parse(fs.readFileSync(configPath))
require('babel-register')(config)
require('ignore-styles')
var render = require('../src/server').default
var nav = require('../src/utils/navigation')

// Make sure there are no duplicate routes.
function findDups(root, map = {}, dups = []) {
  for (var name in root) {
    const page = root[name]
    if (map[name]) dups.push(name)
    map[name] = true
    if (page.children) findDups(page.children, map, dups)
  }
  return dups
}
var dups = findDups(nav.tree)

if (dups.length) {
  console.error('Duplicate paths found:\n', dups)
  process.exit(1)
}

// Generate html files.
const getDir = slug => path.join(__dirname, '..', `/docs${slug}`)
Object.keys(nav.map).forEach((name) => {
  const slug = nav.map[name].home ? '/' : `/${name}`
  const dir = getDir(slug)
  try {
    fs.mkdirSync(dir)
  } catch(err) {}
  render(slug, (html) => {
    fs.writeFileSync(path.join(dir, 'index.html'), html)
  })
})

