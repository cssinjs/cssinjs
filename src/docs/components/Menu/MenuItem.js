import React, {PropTypes} from 'react'
import {Link, IndexLink} from 'react-router'
import cn from 'classnames'
import injectSheet from 'common/utils/jss'
import {transition} from 'common/utils/styles'

const styles = theme => ({
  menuItem: {
    color: theme.text.dark,
    display: 'block',
    textDecoration: 'none',
    transition: transition(),
    opacity: 0.8,
    font: {
      weight: 400,
      size: 14,
    },
    '&:hover': {
      isolate: false,
      color: theme.text.darkActive,
      opacity: 1
    }
  },
  // Can't make as function value due to usage in router
  active: {
    opacity: 1,
    color: theme.brand,
    '&:hover': {
      isolate: false,
      color: theme.brand,
    }
  },
  // Nesting levels
  level0: {
    padding: [5, 0],
    fontSize: 16,
    opacity: 1,
  },
  level1: {
    paddingLeft: 15,
  },
  level2: {
    paddingLeft: 30,
  }
})


function MenuItem(props) {
  const {external, level, url, home, title, name, classes} = props
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
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
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
