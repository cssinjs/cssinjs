import {primaryDomain, cdnDomain, apiDomain, org, token} from '../constants/github'


/**
 * Get a URL to the file on github.
 */
export const getFileUrl = (repo, tag = 'master', path) => (
  `//${primaryDomain}/${org}/${repo}/${tag}${path}`
)


const checkResponse = (response) => {
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


/**
 * Load tags list.
 */
export const loadTags = repo => (
  fetch(`//${apiDomain}/repos/${org}/${repo}/tags?access_token=${token}`)
    .then(checkResponse)
    .then(getJson)
    .then(tags => tags.map(tag => tag.name))
)

/**
 * Load raw file from the CDN.
 */
export const loadRawFile = (repo, path, tag = 'master') => (
  fetch(`//${cdnDomain}/${org}/${repo}/${tag}${path}`)
    .then(checkResponse)
    .then(getText)
)

/**
 * Load stars counter.
 */
export const loadStars = repo => (
  fetch(`//${apiDomain}/repos/${repo}?access_token=${token}`)
    .then(checkResponse)
    .then(getJson)
    .then(data => data.stargazers_count)
)

