import React from 'react'

import jssPreset from '../../helpers/jssPreset'
import styles from './styles'

/**
 * Custom loader component
 * @param {boolean} is animation playing now or not
 * @param {Object} JSS sheet object
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
  playing: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.string
  ])
}

export default jssPreset(styles)(Loader)
