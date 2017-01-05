import React, {PropTypes} from 'react'
import {Link} from 'react-router'
import {findPage, map} from '../../utils/navigation'
import {isAbsolute, isHash, resolve, parse} from '../../utils/url'
import {getBlobUrl} from '../../utils/github'

const absUrl = (url, currPageName) => {
  if (isAbsolute(url)) return url
  const currPage = map[currPageName]
  const resolvedUrl = resolve(currPage.path, url)
  const resolvedPath = parse(resolvedUrl).pathname
  return getBlobUrl(currPage.repo, resolvedPath, undefined, currPage.org)
}

const formatProps = (props) => {
  const {page: pageName, children, ...rest} = props
  let {href} = props
  let target
  let to

  if (href && !isHash(href)) {
    href = absUrl(href, pageName)
    const page = findPage(href)
    if (page && !page.external) to = `/${page.name}`
    else target = '_blank'
  }

  return {
    ...rest,
    target,
    href,
    to,
    children
  }
}

export default function A(props) {
  const {to, children, ...rest} = formatProps(props)

  if (to) {
    return <Link {...rest} to={to}>{children}</Link>
  }

  return <a {...rest}>{children}</a>
}

A.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node
}
