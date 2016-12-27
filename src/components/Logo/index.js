import React from 'react'
import Link from 'react-router/lib/Link'

import jssPreset from '../../helpers/jssPreset'
import styles from './styles'

/**
 * Basic component for displaying site logo
 * @param {string} 'white' or 'black' string
 * @param {Object} JSS sheet object
 */
const Logo = ({type, sheet}) => {
  const {classes} = sheet
  let logoUrl

  if (typeof type === 'string') {
    if (type === 'white') {
      logoUrl = 'logo-light'
    }
    else {
      logoUrl = 'logo-dark'
    }
  }
  logoUrl = `images/${logoUrl}.svg`

  return (
    <Link to="/" className={classes.logo}>
      <img className={classes.image} src={logoUrl} role="presentation" />
    </Link>
  )
}

Logo.propTypes = {
  sheet: React.PropTypes.object,
  type: React.PropTypes.string
}

export default jssPreset(styles)(Logo)
