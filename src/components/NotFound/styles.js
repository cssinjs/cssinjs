import theme from '../theme'

export default {
  notFound: {
    width: '100%',
    height: '100%',
    minHeight: 400,
    position: 'relative',
    overflow: 'hidden',
    color: theme.titleColor,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    maxWidth: 1000,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  title: {
    fontSize: 160,
    lineHeight: 'normal',
    position: 'relative',
    zIndex: 5,
  },
  text: {
    fontSize: 36,
    lineHeight: 'normal',
    position: 'relative',
    zIndex: 5,
  },
  '@media (max-width: 1024px)': {
    inner: {
      margin: [0, 20],
      width: 'auto',
      borderLeft: 'none',
      borderRight: 'none',
    }
  },
}
