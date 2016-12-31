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
    const page = newRoot[name] = {...root[name], name}
    if (!page.org) page.org = defaultOrg
    const {children} = page
    if (children) page.children = addDefaults(children)
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
    // Its an external page, we can compare by `url`.
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
