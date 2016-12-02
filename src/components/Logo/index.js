import React from 'react'

import {Link} from 'react-router'

import jssPreset from '../../helpers/jssPreset'
import styles from './styles'

/**
 * Basic component for displaying site logo
 * Recieves 'type' prop, that modifies final URL of logo
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
  logoUrl = `static/images/${logoUrl}.svg`

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
