import React from 'react'
import cn from 'classnames'

import injectSheet from '../../utils/jss'
import styles from './styles'

/**
 * Toggle item for menu
 * @param {boolean} is opened now or not
 * @param {Object} JSS sheet object
 */
const Hamburger = ({active, sheet}) => {
  const {classes} = sheet

  return (
    <div className={cn(classes.hamburger, active && classes.active)}>
      <span className={classes.barFirst} />
      <span className={classes.barSecond} />
      <span className={classes.barThird} />
    </div>
  )
}

Hamburger.propTypes = {
  active: React.PropTypes.bool,
  sheet: React.PropTypes.object
}

export default injectSheet(styles)(Hamburger)
