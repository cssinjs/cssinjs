import theme from '../theme'

export default {
  sidebar: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
    overflowX: 'hidden',
  },
  logo: {
    textAlign: 'center',
    flexShrink: 0,
    padding: [5, 3],
  },
  counter: {
    flexShrink: 0,
    lineHeight: 5,
    padding: [0, 3],
    background: theme.sidebarBgActive,
  },
  menu: {
    transition: theme.transition(),
    background: theme.sidebarBg,
  },

  // Active state for menu
  menuActive: {
    composes: '$menu',
  },

  // Toggle widget
  toggle: {
    display: 'none',
    // Remove default button styles
    background: 0,
    border: 0,
    padding: 0,
    outline: 0,
    boxShadow: 'none',
  },

  // Decrease spaces for small screens
  '@media (max-height: 800px)': {
    logo: {
      padding: [3, 2],
    },
  },

  // For small screens (mobile, portrait mode for iPad) - change completely layout
  '@media (max-width: 768px)': {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      padding: [1, 2],
      overflow: 'visible',
    },
    logo: {
      padding: 0,
      width: 5,
    },
    menu: {
      borderTop: [1, 'solid', theme.sidebarBgActive],
      position: 'fixed',
      overflowY: 'auto',
      overflowX: 'hidden',
      top: 7,
      left: 0,
      right: 0,
      bottom: 0,
      transform: 'translateX(100%)'
    },
    menuActive: {
      transform: 'translateX(0)',
    },
    toggle: {
      display: 'block',
    },
    counter: {
      padding: [0, 3],
      flexGrow: 1,
      background: 'transparent',
    },
  }
}
