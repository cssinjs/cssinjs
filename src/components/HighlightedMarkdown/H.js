import {PropTypes, createElement} from 'react'

const createId = str => str.toLowerCase().replace(/\s/g, '-').replace(/[^-\w]/g, '')

/**
 * Renders `h*` tags and generates a github like id attribute.
 */
export default function H(props) {
  const {children, tag, ...rest} = props
  const id = createId(children[0])
  return createElement(tag, {...rest, id}, children)
}

H.propTypes = {
  tag: PropTypes.string.isRequired
}
