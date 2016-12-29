import React, {PropTypes} from 'react'
import {findPage, map} from '../../utils/navigation'
import {isRelative, resolve, parse} from '../../utils/url'
import {getBlobUrl} from '../../utils/github'

const absUrl = (url, currPageName) => {
  if (!isRelative(url)) return url
  const currPage = map[currPageName]
  const resolvedUrl = resolve(currPage.path, url)
  const resolvedPath = parse(resolvedUrl).pathname
  return getBlobUrl(currPage.repo, resolvedPath, undefined, currPage.org)
}

export default function A(props) {
  const {href, page: pageName, children, ...rest} = props
  let newHref = href
  let target

  if (href) {
    const page = findPage(absUrl(href, pageName))
    if (page && !page.external) newHref = `#${page.name}`
    else target = '_blank'
  }

  return <a {...rest} href={newHref} target={target}>{children}</a>
}

A.propTypes = {
  href: PropTypes.string,
  page: PropTypes.string.isRequired,
  target: PropTypes.string,
  children: PropTypes.node
}
