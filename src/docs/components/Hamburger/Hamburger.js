import React, {PropTypes} from 'react'
import cn from 'classnames'
import {rotateZ, translateX} from 'css-functions'
import injectSheet from 'common/utils/jss'
import {transition} from 'common/utils/styles'

const size = 22
const barWeight = 2

const styles = theme => ({
  hamburger: {
    width: size,
    height: size,
    position: 'relative',
    willChange: 'transform',
    cursor: 'pointer',
    transition: transition(500),
  },
  bar: {
    position: 'absolute',
    height: barWeight,
    width: '100%',
    background: theme.textColorInverse,
    opacity: 1,
    left: 0,
    transition: transition(300),
  },
  barFirst: {
    composes: '$bar',
    top: ({active}) => (active ? '50%' : 0),
    marginTop: ({active}) => (active ? -barWeight / 2 : 0),
    transform: ({active}) => (active ? rotateZ(135) : 'none'),
  },
  barSecond: {
    composes: '$bar',
    top: '50%',
    marginTop: -barWeight / 2,
    transform: ({active}) => (active ? translateX(size * 2) : 'none'),
    opacity: ({active}) => (active ? 0 : 1),
  },
  barThird: {
    composes: '$bar',
    bottom: ({active}) => (active ? '50%' : 0),
    marginBottom: ({active}) => (active ? -barWeight / 2 : 0),
    transform: ({active}) => (active ? rotateZ(-135) : 'none'),
  }
})

const Hamburger = ({active, classes}) => (
  <div className={cn(classes.hamburger, active && classes.active)}>
    <span className={classes.barFirst} />
    <span className={classes.barSecond} />
    <span className={classes.barThird} />
  </div>
)

Hamburger.propTypes = {
  active: PropTypes.bool,
  classes: PropTypes.objectOf(PropTypes.string).isRequired
}

Hamburger.defaultProps = {
  active: false
}

export default injectSheet(styles)(Hamburger)
