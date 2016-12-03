import vars from '../../styles/vars'

const animationSpeed = '3s'

export default {
  loader: {
    width: 5,
    height: 5,
    border: {
      width: 0.4,
      style: 'solid',
      color: vars.textColor
    },
    animation: {
      name: 'loaderLoop',
      duration: animationSpeed,
      iterationCount: 'infinite',
      timingFunction: 'ease',
    },
  },
  loaderStopped: {
    composes: '$loader',
    animationPlayState: 'paused',
  },
  inner: {
    verticalAlign: 'top',
    display: 'inline-block',
    width: '100%',
    background: vars.textColor,
    animation: {
      name: 'loaderInnerLoop',
      duration: animationSpeed,
      iterationCount: 'infinite',
      timingFunction: 'ease-in',
    },
  },

  // Animation
  '@keyframes loaderLoop': {
    '0%': {transform: 'rotate(0)'},
    '25%': {transform: 'rotate(180deg)'},
    '50%': {transform: 'rotate(180deg)'},
    '75%': {transform: 'rotate(360deg)'},
    '100%': {transform: 'rotate(360deg)'},
  },
  '@keyframes loaderInnerLoop': {
    '0%': {height: '0'},
    '25%': {height: '0'},
    '50%': {height: '100%'},
    '75%': {height: '100%'},
    '100%': {height: '0'},
  },
}
