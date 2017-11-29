import React from 'react'
import cn from 'classnames'
import injectSheet from 'common/utils/jss'
import AnimatedRing from './AnimatedRing'

const styles = {
  rings: {
    height: '100%',
    width: '100%'
  },
  container: {
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
      delay: '500ms',
      fillMode: 'both'
    },
  },
  '@keyframes appear': {
    from: {opacity: 0},
    to: {opacity: 1},
  }
}

const renderRings = (count) => {
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
      />
    )
  }
  return rings
}

const AnimatedRings = ({classes, count, className}) => (
  <div className={cn(classes.rings, className)}>
    <div className={classes.container}>
      {renderRings(count)}
    </div>
  </div>
)

AnimatedRings.propTypes = {
  classes: React.PropTypes.objectOf(React.PropTypes.string).isRequired,
  className: React.PropTypes.string,
  count: React.PropTypes.number
}

AnimatedRings.defaultProps = {
  count: 3,
  className: ''
}

export default injectSheet(styles)(AnimatedRings)
