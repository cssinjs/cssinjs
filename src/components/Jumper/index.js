import React from 'react'
import Isvg from 'react-inlinesvg'

import injectSheet from '../../utils/jss'
import styles from './styles'

/**
 * Scroll widget
 * @param {Object} JSS sheet object
 */
const Jumper = ({sheet}) => {
  const {classes} = sheet

  return (
    <div className={classes.jumper}>
      <Isvg src={'/images/mouse.svg'} className={classes.icon} />
    </div>
  )
}

Jumper.propTypes = {
  sheet: React.PropTypes.object
}

export default injectSheet(styles)(Jumper)
