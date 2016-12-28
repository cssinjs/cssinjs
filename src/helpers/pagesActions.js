import pages from '../pages'

/**
 * Flatten pages construction because we need only URL and name. Other info doesn't care
 * @param {Object} Object of pages (by default - provided by pages.json)
 * @returns {Object} Flattened pages object
 */
export const flattenPages = (list = pages) => {
  const result = {}
  const iterate = (listItems) => {
    for (const entry in listItems) {
      result[entry] = {...listItems[entry]}
      const {children} = result[entry]
      if (children) {
        delete result[entry].children
        iterate(children)
      }
    }
  }
  iterate(list)
  return result
}

/**
 * Get link from page, where 'home' property is set true. Get only first one
 * @param {Object} Object of pages (by default - provided by pages.json)
 * @returns {string} Link to homepage
 */
export const getHomeLink = (list = pages) => {
  let link = ''
  const iterate = (listItems) => {
    for (const entry in listItems) {
      if (listItems[entry].home) link = `/${entry}`
      if (listItems[entry].children) iterate(listItems[entry].children)
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
export const getInvertedPages = (obj) => {
  const result = {}
  for (const prop in obj) {
    if ({}.hasOwnProperty.call(obj, prop)) {
      result[obj[prop]] = prop
    }
  }
  return result
}


/**
 * Get list of external pages
 * @param {Object} original object
 * @returns {Object} list of external pages
 */
export const getExternalPages = (list = pages) => {
  const result = {}
  const iterate = (listItems) => {
    for (const entry in listItems) {
      if (listItems[entry].external) result[entry] = true
      if (listItems[entry].children) iterate(listItems[entry].children)
    }
  }
  iterate(list)
  return result
}

export default {flattenPages, getHomeLink, getInvertedPages, getExternalPages}
