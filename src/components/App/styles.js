import theme from '../../theme'

const sidebarWidth = {
  default: 320,
  md: 260
}
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
    width: sidebarWidth.default,
    zIndex: 100
  },
  content: {
    position: 'relative',
    marginLeft: sidebarWidth.default,
    minHeight: '100vh'
  },
  contentInner: {
    '& > div': {
      left: 0,
      right: 0,
      willChange: 'transform'
    },
    '& > div:first-child': {
      position: 'absolute',
      zIndex: 10 // Element, that is going out - must be on top
    },
    '& > div:last-child': {
      position: 'static'
    }
  },
  [theme.media.md]: {
    sidebar: {
      width: sidebarWidth.sm
    },
    content: {
      marginLeft: sidebarWidth.sm
    }
  },
  [theme.media.sm]: {
    sidebar: {
      width: '100%',
      bottom: 'auto',
      height: 70
    },
    content: {
      marginLeft: 0,
      paddingTop: 70
    }
  }
}
