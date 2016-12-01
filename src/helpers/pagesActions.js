import pages from '../pages'

/**
 * Flatten pages construction because we need only URL and name. Other info doesn't care
 * @param {Object} Object of pages (by default - provided by pages.json)
 * @returns {Object} Flattened pages object
 */
export const flattenPages = (list = pages) => {
  let result = {}
  const iterate = (list) => {
    for (const entry in list) {
      if (list[entry].link) result[entry] = list[entry].link
      if (list[entry].child) iterate(list[entry].child)
    }
  }
  iterate(list)
  return result
}

/**
 * Get link from page, where 'home' property is set true. Get only first one
 * @param {Object} Object of pages (by default - provided by pages.json)
 * @returns {String} Link to homepage
 */
export const getHomeLink = (list = pages) => {
  let link = ''
  const iterate = (list) => {
    for (const entry in list) {
      if (list[entry].home) link = `/${entry}`
      if (list[entry].child) iterate(list[entry].child)
    }
    return link
  }
  return iterate(list)
}

/**
 * Swap object keys and values
 * @param {Object} original object
 * @returns {Object} Swapped object
 */
export const invert = (obj) => {
  let result = {}
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      result[obj[prop]] = prop
    }
  }
  return result
}

export default {flattenPages, getHomeLink, invert}
