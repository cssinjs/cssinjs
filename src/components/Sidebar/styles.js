import {translateX} from 'css-functions'

import theme from '../theme'

export default {
  sidebar: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
    overflowX: 'hidden',
  },
  container: {
    textAlign: 'center',
    flexShrink: 0,
    margin: 30,
  },
  logo: {
    height: 140,
    width: 140,
    verticalAlign: 'middle',
  },
  counter: {
    flexShrink: 0,
    lineHeight: '5px',
    padding: [0, 30],
    background: theme.sidebarBgActive,
  },
  menu: {
    transition: theme.transition(),
    background: theme.sidebarBg,
  },

  // Active state for menu
  active: {},

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

  // For small screens (mobile, portrait mode for iPad) - change completely layout
  [theme.media.sm]: {
    sidebar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      padding: [10, 20],
      overflow: 'visible',
    },
    container: {
      margin: 0,
      width: 50,
    },
    logo: {
      height: 'auto',
      width: 'auto',
    },
    menu: {
      borderTop: [1, 'solid', theme.sidebarBgActive],
      position: 'fixed',
      overflowY: 'auto',
      overflowX: 'hidden',
      top: 70,
      left: 0,
      right: 0,
      bottom: 0,
      transform: translateX('100%')
    },
    active: {
      transform: translateX(0),
    },
    toggle: {
      display: 'block',
    },
    counter: {
      padding: [0, 30],
      flexGrow: 1,
      background: 'transparent',
    },
  }
}
