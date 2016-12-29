import {primaryHost as githubHost, org as defaultOrg} from '../constants/github'
import pages from '../pages'
import {parse as parseUrl} from './url'
import {pathToMeta, isReadme} from './github'

/**
 * Ensure unique page names by prefixing them with the parent name.
 */
const prefixNames = (root, parentName) => {
  const newRoot = {}

  for (const name in root) {
    const page = {...root[name]}
    let newName = name
    if (parentName) newName = `${parentName}-${name}`
    newRoot[newName] = page
    if (page.children) page.children = prefixNames(page.children, name)
  }

  return newRoot
}

/**
 * Get first value from an object.
 */
const getFirstValue = (obj) => {
  if (obj) {
    for (const key in obj) return obj[key]
  }
  return null
}

/**
 * If a page has children, take the first one and merge it with its parent.
 */
const addDefaults = (root) => {
  const newRoot = {}

  for (const name in root) {
    const page = {...root[name], name}
    if (!page.org) page.org = defaultOrg
    const {children} = page
    const firstChild = getFirstValue(children)
    if (firstChild) {
      const newPage = Object.assign({}, firstChild, page, {children: addDefaults(children)})
      Object.assign(page, newPage)
    }
    newRoot[name] = page
  }

  return newRoot
}

/**
 * Transformed pages structure.
 */
export const tree = addDefaults(prefixNames(pages))

/**
 * A flat map of pages.
 */
export const map = (function iterate(root, result) {
  for (const name in root) {
    const page = root[name]
    result[name] = page
    if (page.children) iterate(page.children, result)
  }
  return result
}(tree, {}))

const isSameUrl = (url0, url1) => {
  const {host: host0, pathname: path0} = parseUrl(url0)
  const {host: host1, pathname: path1} = parseUrl(url1)
  // Trim trailing slash.
  const trim = str => str.replace(/\/$/, '')

  return host0 === host1 && trim(path0) === trim(path1)
}

/**
 * Get internal URL if passed URL matches the navigation.
 */
export const findPage = (url) => {
  const {host, pathname} = parseUrl(url)

  for (const name in map) {
    const page = map[name]
    // Its an external page, we can compare by `.url`.
    if (page.url && isSameUrl(page.url, url)) return page
    if (host === githubHost) {
      const meta = pathToMeta(pathname)
      if (meta.org === page.org && meta.repo === page.repo) {
        if (meta.path === page.path || isReadme(meta.path)) {
          return page
        }
      }
    }
  }

  return null
}
