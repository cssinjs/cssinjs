import React, {PropTypes} from 'react'
import {Link} from 'react-router'
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
  const className = cn(classes.item, classes[`level${level}`])

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

  return (
    <Link
      className={className}
      activeClassName={classes.active}
      to={home ? '/' : `/${name}`}
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

export default injectSheet(styles)(MenuItem)
