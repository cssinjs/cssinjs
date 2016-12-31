import React, {PropTypes, createElement} from 'react'
import Isvg from 'react-inlinesvg'

const createId = str => str.toLowerCase().replace(/\s/g, '-').replace(/[^-\w]/g, '')

/**
 * Renders `h*` tags and generates a github like id attribute.
 */
export default function H(props) {
  const {children, tag, ...rest} = props
  const id = createId(children[0])
  children.unshift(<a href={`#${id}`}><Isvg src="/images/link.svg" /></a>)
  return createElement(tag, {...rest, id}, children)
}

H.propTypes = {
  tag: PropTypes.string.isRequired
}
