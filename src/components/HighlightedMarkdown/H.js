import React, {PropTypes, createElement} from 'react'

import {Link} from '../icons'

const createId = str => str.toLowerCase().replace(/\s/g, '-').replace(/[^-\w]/g, '')

/**
 * Renders `h*` tags and generates a github like id attribute.
 */
export default function H(props) {
  const {
    children,
    tag,
    sheet: {classes},
    ...rest
  } = props
  const id = createId(children[0])
  // eslint-disable-next-line
  children.unshift(<a className={classes.headingAnchor} href={`#${id}`}><Link /></a>)
  return createElement(tag, {...rest, id, className: classes.heading}, children)
}

H.propTypes = {
  sheet: PropTypes.object.isRequired,
  tag: PropTypes.string.isRequired
}

