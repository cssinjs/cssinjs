import React, {PropTypes} from 'react'
import Isvg from 'react-inlinesvg'
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
        <span className={classes.itemInner}>
          {title}
        </span>
        <span className={classes.itemIcon}>
          <Isvg src={'/images/external.svg'} className={classes.icon} />
        </span>
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

export default injectSheet(styles)(MenuItem)
