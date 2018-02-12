import React from 'react'
import cn from 'classnames'

import injectSheet from 'react-jss'
import styles from './styles'

/**
 * Toggle item for menu
 * @param {boolean} is opened now or not
 * @param {Object} JSS sheet object
 */
const Hamburger = ({active, classes}) => (
  <div className={cn(classes.hamburger, active && classes.active)}>
    <span className={classes.barFirst} />
    <span className={classes.barSecond} />
    <span className={classes.barThird} />
  </div>
)

Hamburger.propTypes = {
  active: React.PropTypes.bool,
  classes: React.PropTypes.object.isRequired
}

Hamburger.defaultProps = {
  active: false
}

export default injectSheet(styles)(Hamburger)
