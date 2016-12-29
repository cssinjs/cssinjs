import React from 'react'

import injectSheet from '../../utils/jss'
import styles from './styles'

/**
 * Toggle item for menu
 * @param {boolean} is opened now or not
 * @param {Object} JSS sheet object
 */
const MenuToggleWidget = ({active, sheet}) => {
  const {classes} = sheet

  return (
    <div className={active ? classes.toggleActive : classes.toggle}>
      <span className={classes.barFirst} />
      <span className={classes.barSecond} />
      <span className={classes.barThird} />
    </div>
  )
}

MenuToggleWidget.propTypes = {
  active: React.PropTypes.bool,
  sheet: React.PropTypes.object
}

export default injectSheet(styles)(MenuToggleWidget)
