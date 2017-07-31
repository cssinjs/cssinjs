import {primaryHost as githubHost, org as defaultOrg} from '../constants/github'
import pages from '../pages'
import {parse as parseUrl} from './url'
import {pathToMeta, isReadme} from './github'

/**
 * Add to the structure:
 *  - name
 *  - org
 */
const addDefaults = (root) => {
  const newRoot = {}

  for (const name in root) {
    newRoot[name] = {...root[name], name}
    if (!newRoot[name].org) newRoot[name].org = defaultOrg
    const {children} = newRoot[name]
    if (children) newRoot[name].children = addDefaults(children)

  }

  return newRoot
}

/**
 * Transformed pages structure.
 */
export const tree = addDefaults(pages)

/**
 * A flat map of pages.
 */
export const map = (function iterate(root, result) {
  for (const name in root) {
    const page = root[name]
    result[name] = page
    result[name].name = name
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
 * Get a page object by URL.
 */
export const findPage = (url) => {
  const {host, pathname} = parseUrl(url)

  for (const name in map) {
    const page = map[name]
    if (page.hidden || page.iframe) continue
    // Its an external page, we can compare by `url`.
    if (page.url && isSameUrl(page.url, url)) return page
    if (host === githubHost) {
      const meta = pathToMeta(pathname)
      if (
          meta.org === page.org &&
          meta.repo === page.repo &&
          (!meta.view || meta.view === 'blob') &&
          (meta.path === page.path || isReadme(meta.path))
      ) {
        return page
      }
    }
  }

  return null
}

/**
 * Get first page, which has `home: true`.
 */
export const home = (() => {
  for (const name in map) {
    const page = map[name]
    if (page.home) return page
  }
  return null
})()

const stripSlashes = str => str.replace(/\//g, '')

const names = Object.keys(map)

/**
 * Returns true if path2 is after path1 in the navigation.
 */
export const isAfter = (path0, path1) => {
  const name0 = stripSlashes(path0)
  const name1 = stripSlashes(path1)
  return names.indexOf(name0) < names.indexOf(name1)
}
