import {rotateZ, translateX} from 'css-functions'

import theme from '../../theme'

const size = 22
const barWeight = 2

export default {
  hamburger: {
    width: size,
    height: size,
    position: 'relative',
    willChange: 'transform',
    cursor: 'pointer',
    transition: {
      duration: 0.5,
      timingFunction: 'ease-in-out',
    },
  },
  active: {
    '& $barFirst': {
      top: '50%',
      marginTop: -barWeight / 2,
      transform: rotateZ(135),
    },
    '& $barSecond': {
      opacity: 0,
      transform: translateX(size * 2),
    },
    '& $barThird': {
      bottom: '50%',
      marginBottom: -barWeight / 2,
      transform: rotateZ(-135),
    }
  },
  bar: {
    position: 'absolute',
    height: barWeight,
    width: '100%',
    background: theme.textColorInverse, // Need to change
    opacity: 1,
    left: 0,
    transition: {
      duration: 300,
      timingFunction: 'ease-in-out',
    },
  },
  barFirst: {
    composes: '$bar',
    top: 0,
  },
  barSecond: {
    composes: '$bar',
    top: '50%',
    marginTop: -barWeight / 2
  },
  barThird: {
    composes: '$bar',
    bottom: 0,
  }
}
