import React, {PureComponent, PropTypes, createElement} from 'react'
import {Link} from 'react-scroll'

import {Link as LinkIcon} from '../icons'
import {scrollDuration} from '../../constants/animations'

const createId = (data) => {
  if (Array.isArray(data)) {
    data = data.map((value) => {
      if (typeof value === 'object') return value.attributes.text
      return value
    }).join('')
  }
  return data.toLowerCase().replace(/\s/g, '-').replace(/[^-\w]/g, '')
}

/**
 * Renders `h*` tags and generates a github like id attribute.
 */
export default class H extends PureComponent {
  static propTypes = {
    sheet: PropTypes.object.isRequired,
    tag: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
  }

  componentWillMount() {
    this.id = createId(this.props.children)
  }

  onClick = () => {
    // We need to set the hash manually because <Link/> will not.
    // Also we can't use `onSetActive` callback because it doesn't work if
    // an element is on very bottom so that there is no scroll possible.
    setTimeout(() => {
      location.hash = this.id
    }, scrollDuration)
  }

  render() {
    const {
      children,
      tag,
      sheet: {classes},
      ...rest
    } = this.props

    const content = [
      <Link
        className={classes.headingAnchor}
        to={this.id}
        // Needed for the cursor.
        href={`#${this.id}`}
        smooth
        duration={scrollDuration}
        onClick={this.onClick}
      >
        <LinkIcon />
      </Link>,
      children
    ]

    return createElement(tag, {...rest, id: this.id, className: classes.heading}, content)
  }
}
