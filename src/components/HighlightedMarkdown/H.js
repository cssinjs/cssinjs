import React, {PropTypes, createElement} from 'react'

import injectSheet from '../../utils/jss'
import {Link} from '../icons'
import styles from './styles'

const createId = str => str.toLowerCase().replace(/\s/g, '-').replace(/[^-\w]/g, '')

/**
 * Renders `h*` tags and generates a github like id attribute.
 */
function H(props) {
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
  sheet: PropTypes.object,
  tag: PropTypes.string.isRequired
}

export default injectSheet(styles)(H)
