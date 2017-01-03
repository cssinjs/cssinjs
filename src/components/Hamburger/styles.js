import theme from '../theme'

const size = 3
const barWeight = 0.2

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
      transform: 'rotate(135deg)',
    },
    '& $barSecond': {
      opacity: 0,
      transform: 'translateX(6rem)',
    },
    '& $barThird': {
      bottom: '50%',
      marginBottom: -barWeight / 2,
      transform: 'rotate(-135deg)',
    }
  },
  bar: {
    display: 'block',
    position: 'absolute',
    height: barWeight,
    width: '100%',
    background: theme.textColorInverse, // Need to change
    opacity: 1,
    left: 0,
    transition: {
      // duration: 0.5,
      duration: '300ms',
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
