import {translateX} from 'css-functions'
import {transition} from 'common/utils/styles'
import {mediaSm} from 'common/constants/media'

export default theme => ({
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
    overflowX: 'hidden',
  },
  logoContainer: {
    textAlign: 'center',
    flexShrink: 0,
    margin: 30,
  },
  logo: {
    height: 100,
    width: 100,
    verticalAlign: 'middle',
  },
  counter: {
    flexShrink: 0,
    padding: [0, 30],
    background: theme.sidebar.backgroundActive,
  },
  menu: {
    transition: transition(),
    background: theme.sidebar.background,
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
    cursor: 'pointer'
  },

  // For small screens (mobile, portrait mode for iPad) - change completely layout
  [mediaSm]: {
    sidebar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      padding: [10, 20],
      overflow: 'visible',
    },
    logoContainer: {
      margin: 0
    },
    logo: {
      width: 50,
      height: 50
    },
    menu: {
      borderTop: [1, 'solid', theme.sidebar.backgroundActive],
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
})
