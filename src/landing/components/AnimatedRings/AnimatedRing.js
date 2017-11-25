import React from 'react'
import injectSheet from 'common/utils/jss'
import {multiple, translate, rotateZ} from 'css-functions'

const rotateTransform = deg => multiple(
  translate('-50%', '-50%'),
  rotateZ(deg)
)

const styles = {
  ring: {
    position: 'absolute',
    borderRadius: '50%',
    border: [12, 'solid', '#fff'],
    transformOrigin: '40%',
    transform: translate('-50%', '-50%'),
    width: ({size}) => `${size * 250}vh`,
    height: ({size}) => `${size * 250}vh`,
    left: ({x}) => `${Math.floor(x * 100)}%`,
    top: ({y}) => `${Math.floor(y * 100)}%`,
    animation: {
      name: 'rotate',
      duration: '90s',
      timingFunction: 'linear',
      iterationCount: 'infinite',
    },
    '&:nth-child(even)': {
      animationDirection: 'reverse'
    }
  },

  '@keyframes rotate': {
    from: {transform: rotateTransform(0)},
    to: {transform: rotateTransform(360)},
  }
}

const AnimatedRing = ({classes}) => (
  <div className={classes.ring} />
)

/* eslint-disable */
/* Because default props, that are used only in styles generates eslint error */
AnimatedRing.propTypes = {
  classes: React.PropTypes.objectOf(React.PropTypes.string).isRequired,
  size: React.PropTypes.number,
  x: React.PropTypes.number,
  y: React.PropTypes.number
}

AnimatedRing.defaultProps = {
  size: 1,
  x: 0.5,
  y: 0.5
}
/* eslint-enable */

export default injectSheet(styles)(AnimatedRing)
