import color from 'color'
import {translate, translateZ, multiple, rotate, scale} from 'css-functions'

import theme from '../theme'

const backgroundLineColor = color(theme.cardColor).alpha(0.4).string()
const baseColor = theme.themeColor
const textColor = '#000'

export default {
  parallaxScene: {
    width: '100%',
    height: '100%',
    minHeight: 40,
    position: 'relative',
    overflow: 'hidden',
    color: theme.textColorInverse,
    background: theme.themeColor,
    userSelect: 'none',
    zIndex: 10,

    // Center radial gradient
    '&:before': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: translate('-50%', '-50%'),
      width: '70%',
      height: '80%',
      zIndex: 2,
      background: 'radial-gradient(ellipse closest-side, rgba(255,255,255,0.5), rgba(255,255,255,0))',
    },

    // Horizontal line
    '&:after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: 0,
      right: 0,
      height: '1px',
      background: backgroundLineColor,
    },
  },
  inner: {
    height: '100%',
    position: 'relative',
    maxWidth: theme.contentWidth,
    width: '100%',
    margin: [0, 'auto'],
    borderLeft: theme.border(backgroundLineColor),
    borderRight: theme.border(backgroundLineColor),
    // Vertical line
    '&:after': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: '50%',
      width: '1px',
      background: backgroundLineColor,
    },
  },
  target: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: translate('-50%', '-50%'),
    zIndex: 5,
    transformStyle: 'preserve-3d',
    perspective: 1000,
  },
  targetInner: {
    transformStyle: 'preserve-3d',
    transform: translateZ(0),
  },

  // Scroll to widget
  scrollTo: {
    position: 'absolute',
    bottom: 5,
    left: 0,
    right: 0,
    zIndex: 10,
    textAlign: 'center'
  },

  // Background rings
  ring: {
    position: 'absolute',
    opacity: 0.2,
    zIndex: 1,
    borderRadius: '50%',
    transformOrigin: '45%',
    border: {
      width: 1.5,
      style: 'solid',
      color: theme.cardColor
    },
    animation: {
      name: 'parallaxRotate',
      duration: '35s', // Need to wait until https://github.com/cssinjs/jss-default-unit/pull/9 will be merged
      timingFunction: 'linear',
      iterationCount: 'infinite',
    }
  },
  ringFirst: {
    composes: '$ring',
    left: 10,
    top: -17,
    width: 110,
    height: 110,
    transformOrigin: '45%',
    animationDirection: 'alternate',
    animationDuration: '45s',
  },
  ringSecond: {
    composes: '$ring',
    top: -20,
    left: 52,
    width: 165,
    height: 165,
    transformOrigin: '48%',
    animationDirection: 'reverse',
  },
  ringThird: {
    composes: '$ring',
    top: 10,
    left: '100%',
    marginLeft: -18,
    width: 175,
    height: 175,
    animationDuration: '40s',
  },

  // Logo
  logo: {
    position: 'relative',
    cursor: 'default',
  },
  logoBase: {
    position: 'relative',
    overflow: 'hidden',
    width: 45,
    height: 45,
    left: 4, // Need to proper alignment
  },

  // Decrease size of main logo for small screens
  '@media (max-width: 750px)': {
    target: {
      transform: multiple(translate('-50%', '-50%'), scale(0.5)),
    },
    scrollTo: {
      bottom: 2,
    }
  },
  '@media (max-height: 500px)': {
    scrollTo: {
      display: 'none',
    }
  },

  // Keyframes for rotating animation
  '@keyframes parallaxRotate': {
    from: {
      transform: rotate(0),
    },
    to: {
      transform: rotate(360),
    },
  }
}
