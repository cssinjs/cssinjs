import color from 'color'
import {translateY} from 'css-functions'

import theme from '../../theme'

export default {
  jumper: {
    display: 'inline-block',
    cursor: 'pointer',
    width: 25,
    height: 40,
    borderRadius: '50%',
    textAlign: 'center',
    background: 'transparent',
    transition: theme.transition(),
    '&:hover': {
      isolate: false,
      background: color(theme.cardColor).alpha(0.3).string()
    }
  },
  icon: {
    fill: theme.textColor,
    height: '100%'
  },
  iconDot: {
    animation: {
      name: 'mouseMove',
      duration: '2s',
      timingFunction: 'ease',
      iterationCount: 'infinite',
    }
  },

  // Animation for SVG dot
  '@keyframes mouseMove': {
    '0%': {
      transform: translateY(0),
    },
    '50%': {
      transform: translateY(3),
    },
    '100%': {
      transform: translateY(0),
    },
  }
}
