import vars from '../../styles/vars'

export default {
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  logo: {
    textAlign: 'center',
    flexShrink: 0,
    padding: [6, 3],
  },
  counter: {
    flexShrink: 0,
    padding: [0, 3, 3],
    lineHeight: 4,
  },
  menu: {
    transition: vars.transition(),
    overflowY: 'auto',
    overflowX: 'hidden',
    borderTop: vars.border(vars.sidebarShadow),
    borderBottom: vars.border(vars.sidebarBorder),
    background: vars.sidebarBg,
  },

  // Active state for menu
  menuActive: {
    composes: '$menu',
  },

  // Toggle widget
  toggle: {
    display: 'none',
  },

  // Decrease spaces for small screens
  '@media (max-height: 800px)': {
    logo: {
      padding: [3, 2],
    },
    counter: {
      padding: [0, 2, 2]
    }
  },

  // For small screens (mobile, portrait mode for iPad) - change completely layout
  '@media (max-width: 768px)': {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      padding: 2,
    },
    logo: {
      padding: 0,
      width: 5,
    },
    menu: {
      position: 'fixed',
      // top: '100%',
      top: 8,
      left: 0,
      right: 0,
      bottom: 0,
      transform: 'translateX(100%)'
    },
    menuActive: {
    //   composes: '$menu',
      transform: 'translateX(0)',
    },
    toggle: {
      display: 'block',
    },
    counter: {
      padding: [0, 2],
      flexGrow: 1,
      lineHeight: 3,
      fontSize: 1.4,
    },
  },
  '@media (max-width: 400px)': {
    logo: {

    }
  }
}
