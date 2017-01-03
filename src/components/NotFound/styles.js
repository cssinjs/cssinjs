import color from 'color'
import theme from '../theme'

const backgroundLineColor = color(theme.cardColor).alpha(0.4).string()

export default {
  container: {
    width: '100%',
    height: '100%',
    minHeight: 40,
    position: 'relative',
    overflow: 'hidden',
    color: theme.textColor,
    background: theme.themeColor,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    // Center radial gradient
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '70%',
      height: '80%',
      zIndex: 2,
      background: 'radial-gradient(ellipse closest-side, rgba(255,255,255,0.5), rgba(255,255,255,0))',
    },

    // Horizontal line
    '&::after': {
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
    maxWidth: 100,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderLeft: theme.border(backgroundLineColor),
    borderRight: theme.border(backgroundLineColor),

    // Vertical line
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: '50%',
      width: '1px',
      background: backgroundLineColor,
    },
  },
  title: {
    fontSize: 16,
    lineHeight: 'normal',
    position: 'relative',
    zIndex: 5,
  },
  text: {
    fontSize: 3.6,
    lineHeight: 'normal',
    position: 'relative',
    zIndex: 5,
  },
  '@media (max-width: 1024px)': {
    inner: {
      margin: [0, 2],
      width: 'auto',
      borderLeft: 'none',
      borderRight: 'none',
    }
  },
}
