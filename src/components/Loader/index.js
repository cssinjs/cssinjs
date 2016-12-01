import React from 'react'

import jssPreset from '../../helpers/jssPreset'
import styles from './styles'

/**
 * Custom loader
 */

const Loader = ({playing, sheet}) => {
  const {classes} = sheet

  return (
    <div className={playing ? classes.loader : classes.loaderStopped}>
      <div className={classes.inner} />
    </div>
  )
}

Loader.propTypes = {
  sheet: React.PropTypes.object,
  playing: React.PropTypes.bool
}

export default jssPreset(styles)(Loader)
