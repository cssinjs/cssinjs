import React from 'react'
import Isvg from 'react-inlinesvg'

import jssPreset from '../../helpers/jssPreset'
import styles from './styles'

/**
 * Scroll widget
 * @param {Object} JSS sheet object
 */
const ScrollWidget = ({sheet}) => {
  const {classes} = sheet

  return (
    <div className={classes.container}>
      <Isvg src={'static/images/mouse.svg'} className={classes.icon} />
    </div>
  )
}

ScrollWidget.propTypes = {
  sheet: React.PropTypes.object
}

export default jssPreset(styles)(ScrollWidget)
