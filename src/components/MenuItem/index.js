import React, {PropTypes} from 'react'
import {Link, IndexLink} from 'react-router'
import cn from 'classnames'

import injectSheet from '../../utils/jss'
import styles from './styles'

function MenuItem(props) {
  const {
    external,
    level,
    url,
    home,
    title,
    name,
    sheet: {classes}
  } = props
  const className = cn(classes.menuItem, classes[`level${level}`])

  if (external) {
    return (
      <a
        className={className}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
    )
  }

  // Need to use IndexLink due to situation, when 2 links are active at same time
  if (home) {
    return (
      <IndexLink
        className={className}
        activeClassName={classes.active}
        to="/"
      >
        {title}
      </IndexLink>
    )
  }

  return (
    <Link
      className={className}
      activeClassName={classes.active}
      to={`/${name}`}
    >
      {title}
    </Link>
  )
}

MenuItem.propTypes = {
  sheet: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  home: PropTypes.bool,
  external: PropTypes.bool,
  url: PropTypes.string
}

MenuItem.defaultProps = {
  home: false,
  external: false,
  url: ''
}

export default injectSheet(styles)(MenuItem)
