import theme from '../../theme'

export default {
  app: {
    background: theme.pageBackground,
    color: theme.textColor,
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSize,
    fontWeight: 400,
    lineHeight: theme.lineHeight,
    overflow: 'hidden'
  },
  sidebar: {
    background: theme.sidebarBg,
    color: theme.sidebarColor,
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    width: 300,
    zIndex: 100,
  },
  content: {
    position: 'relative',
    marginLeft: 300,
  },
  contentInner: {
    '& > div': {
      left: 0,
      right: 0,
      willChange: 'transform',
    },
    '& > div:first-child': {
      position: 'absolute',
      zIndex: 10, // Element, that is going out - must be on top
    },
    '& > div:last-child': {
      position: 'static',
    },
  },
  [theme.media.md]: {
    sidebar: {
      width: 260
    },
    content: {
      marginLeft: 260
    },
  },
  [theme.media.sm]: {
    sidebar: {
      width: '100%',
      bottom: 'auto',
      height: 70,
    },
    content: {
      marginLeft: 0,
      paddingTop: 70,
    }
  },
}
