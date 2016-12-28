import {primaryDomain, cdnDomain, org} from '../constants/github'

/**
 * Get a URL to the file on CDN.
 */
export const getCdnFileUrl = (repo, tag = 'master', path) => (
  `//${cdnDomain}/${org}/${repo}/${tag}${path}`
)

/**
 * Get a URL to the file on github.
 */
export const getFileUrl = (repo, tag = 'master', path) => (
  `//${primaryDomain}/${org}/${repo}/${tag}${path}`
)
