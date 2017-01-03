import vars from '../../styles/vars'

export default {
  '@import': 'https://fonts.googleapis.com/css?family=Fira+Sans:400,400i,500,500i',
  '@global': {
    'html, body': {
      fontSize: '62.5%',
      height: '100%',
      // Needed for the transition.
      overflowX: 'hidden',
    }
  },
  app: {
    height: '100%',
    background: vars.pageBackground,
    color: vars.textColor,
    fontFamily: vars.fontFamily,
    fontSize: vars.fontSize,
    fontWeight: 400,
    lineHeight: vars.lineHeight,
    '@global': {
      '*, *::before, *::after': {
        boxSizing: 'border-box',
      },
      svg: {
        display: 'inline-block',
        verticalAlign: 'middle',
      }
    }
  },
  sidebar: {
    background: vars.sidebarBg,
    color: vars.sidebarColor,
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    width: 30,
    zIndex: 100,
  },
  content: {
    height: '100%',
    position: 'relative',
    marginLeft: 30,
  },
  contentInner: {
    height: '100%',
    '& > div': {
      height: '100%',
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

  // Decrease sidebar size on iPads
  '@media (max-width: 1024px)': {
    sidebar: {
      width: 26
    },
    content: {
      marginLeft: 26
    },
  },

  // For small screens (mobile, portrait mode for iPad) - change completely layout
  '@media (max-width: 768px)': {
    sidebar: {
      width: '100%',
      bottom: 'auto',
      height: 7,
    },
    content: {
      marginLeft: 0,
      paddingTop: 7,
    }
  },
}
