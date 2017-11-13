import React from 'react'
import injectSheet from 'common/utils/jss'
import AnimatedRing from './AnimatedRing'

const styles = {
  container: {
    height: '100%',
    width: '100%'
  },
  rings: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    zIndex: 1,
    // Needed for SSR. Because there are blinking rings animations
    opacity: 0,
    animation: {
      name: 'appear',
      duration: '500ms',
      delay: '1000ms',
      fillMode: 'both'
    },
  },
  content: {
    position: 'relative',
    zIndex: 2,
    height: '100%'
  },
  '@keyframes appear': {
    from: {opacity: 0},
    to: {opacity: 1},
  }
}

const renderRings = (count, inverse) => {
  const rings = []
  const minSize = 0.6
  const size = Math.random()

  for (let i = 0; i < count; i++) {
    // Fully random, between 0 and 1
    rings.push(
      <AnimatedRing
        size={size > minSize ? size : minSize}
        x={Math.random()}
        y={Math.random()}
        inverse={inverse}
      />
    )
  }
  return rings
}

const AnimatedRings = ({children, classes, count, inverse}) => (
  <div className={classes.container}>
    <div className={classes.rings}>
      {renderRings(count, inverse)}
    </div>
    <div className={classes.content}>
      {children}
    </div>
  </div>
)

AnimatedRings.propTypes = {
  classes: React.PropTypes.object.isRequired,
  children: React.PropTypes.node.isRequired,
  count: React.PropTypes.number,
  inverse: React.PropTypes.bool
}

AnimatedRings.defaultProps = {
  count: 3,
  inverse: false
}

export default injectSheet(styles)(AnimatedRings)
