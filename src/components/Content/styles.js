export default {
  container: {},

  // Main content
  content: {
    position: 'relative',
  },

  // Inner
  conntentInner: {},
  edit: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 5,
  },

  // Remove edit button for small screens
  '@media (max-width: 620px)': {
    edit: {
      display: 'none'
    }
  }
}
