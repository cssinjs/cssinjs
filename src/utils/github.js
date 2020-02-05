import {primaryHost, cdnHost, apiHost, org as defaultOrg, token} from '../constants/github'

/**
 * Get a URL to the file on github.
 */
export const getBlobUrl = (repo, path, tag = 'master', org = defaultOrg) =>
  `https://${primaryHost}/${org}/${repo}/blob/${tag}${path}`

const checkResponse = response => {
  if (response.status >= 200 && response.status < 300) {
    return response
  }
  const error = new Error(response.statusText)
  error.response = response
  error.status = response.status
  throw error
}

const getText = response => response.text()

const getJson = response => response.json()

const options = {
  headers: {
    Authorization: `token ${token}`
  }
}

/**
 * Load tags list.
 */
export const loadTags = (repo, org = defaultOrg) =>
  fetch(`https://${apiHost}/repos/${org}/${repo}/tags`, options)
    .then(checkResponse)
    .then(getJson)
    .then(tags => tags.map(tag => tag.name))

/**
 * Load raw file from the CDN.
 */
export const loadRawFile = (repo, path, tag = 'master', org = defaultOrg) =>
  fetch(`https://${cdnHost}/${org}/${repo}/${tag}${path}`)
    .then(checkResponse)
    .then(getText)

/**
 * Load stars counter.
 */
export const loadStars = repo =>
  fetch(`https://${apiHost}/repos/${repo}`, options)
    .then(checkResponse)
    .then(getJson)
    .then(data => data.stargazers_count)

/**
 * Parses a github file path and returns meta data.
 */
export const pathToMeta = path => {
  const parts = path.split('/')

  return {
    org: parts[1],
    repo: parts[2],
    view: parts[3] || '', // blob, edit, tree
    branch: parts[4] || '', // branch, tag, commit
    path: `/${parts.slice(5).join('/')}`
  }
}

/**
 * Returns `true` if github would show a readme page from a given path.
 */
export const isReadme = path => !path || path === '/' || /readme\.md$/i.test(path)
