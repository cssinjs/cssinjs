import React, {PropTypes, createElement} from 'react'
import Isvg from 'react-inlinesvg'

import injectSheet from '../../utils/jss'
import styles from './styles'

const createId = str => str.toLowerCase().replace(/\s/g, '-').replace(/[^-\w]/g, '')

/**
 * Renders `h*` tags and generates a github like id attribute.
 */
function H(props) {
  const {children, tag, sheet, ...rest} = props
  const {classes} = sheet
  const id = createId(children[0])

  children.unshift(<a className={classes.anchor} href={`#${id}`}><Isvg className={classes.icon} src="/images/link.svg" /></a>)
  return createElement(tag, {...rest, id, className: classes.heading}, children)
}

H.propTypes = {
  sheet: PropTypes.object,
  tag: PropTypes.string.isRequired
}

export default injectSheet(styles)(H)
