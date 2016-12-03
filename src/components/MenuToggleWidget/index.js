import React from 'react'

import jssPreset from '../../helpers/jssPreset'
import styles from './styles'

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

export default jssPreset(styles)(MenuToggleWidget)
