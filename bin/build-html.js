const fs = require('fs')
const path = require('path')

const configPath = path.join(process.cwd(), '.babelrc')
const config = JSON.parse(fs.readFileSync(configPath))

require('babel-register')(config)
require('ignore-styles')
require('module-alias').addAliases(require('../webpack.config.base').resolve.alias)

const siteConfig = require('../src/common/config');
const renderLanding = require('../src/landing/server').default
const renderDocs = require('../src/docs/server').default
const nav = require('../src/docs/utils/navigation')

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

const dups = findDups(nav.tree)

if (dups.length) {
  console.error('Duplicate paths found:\n', dups)
  process.exit(1)
}

// Generate html files for docs site
const getDir = (slug) => path.join(__dirname, '..', `/docs/docs/${slug}`)

// Create docs
const docsDir = path.join(__dirname, '..', 'docs', 'docs')
if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir)
}

Object.keys(nav.map).forEach((name) => {
  const slug = nav.map[name].home ? '/' : `/${name}`
  const dir = getDir(slug)
  try {
    fs.mkdirSync(dir)
  } catch(err) {}
  renderDocs(slug, (html) => {
    fs.writeFileSync(path.join(dir, 'index.html'), html)
  })
})

// Create landing
renderLanding(html => {
  fs.writeFileSync(
    path.join(__dirname, '..', 'docs', 'index.html'),
    html
  )
})
