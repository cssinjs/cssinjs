import React from 'react'
import injectSheet from 'common/utils/jss'

const styles = theme => ({
  home: {
    height: '100%',
    width: '100%'
  },
  rings: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    zIndex: 1
  },
  content: {
    position: 'relative',
    zIndex: 2
  },
  // TODO: Design rings
  ring: {
    color: theme.color
  }
})

const AnimatedRings = ({children, classes}) => (
  <div className={classes.container}>
    <div className={classes.rings}>

      Rings here

    </div>
    <div className={classes.content}>
      {children}
    </div>
  </div>
)

AnimatedRings.propTypes = {
  classes: React.PropTypes.object.isRequired,
  children: React.PropTypes.node.isRequired
}

export default injectSheet(styles)(AnimatedRings)
