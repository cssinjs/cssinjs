
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
    const page = {...root[name]}
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

// eslint-disable-next-line import/prefer-default-export
export const process = root => addDefaults(prefixNames(root))
