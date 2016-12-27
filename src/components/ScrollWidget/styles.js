import color from 'color'
import vars from '../../styles/vars'

export default {
  container: {
    display: 'inline-block',
    cursor: 'pointer',
    width: 8,
    height: 8,
    lineHeight: 8,
    borderRadius: '50%',
    textAlign: 'center',
    background: 'transparent',
    transition: vars.transition(),
    '&:hover': {
      background: color(vars.cardColor).alpha(0.3).string(),
    },
    // SVG dot (can't pass JSS instance inside)
    '& .inner': {
      animation: {
        name: 'mouseMove',
        duration: '2s',
        timingFunction: 'ease',
        iterationCount: 'infinite',
      }
    }
  },
  icon: {
    fill: vars.textColor,
  },

  // Animation for SVG dot
  '@keyframes mouseMove': {
    '0%': {
      transform: 'translateY(0)',
    },
    '50%': {
      transform: 'translateY(3px)',
    },
    '100%': {
      transform: 'translateY(0)',
    },
  }
}
