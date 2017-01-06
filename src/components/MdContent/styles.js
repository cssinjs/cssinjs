import theme from '../../theme'

export default {
  mdContent: {},
  content: {
    position: 'relative',
  },
  markdown: {
    display: 'block',
  },
  actions: {
    float: 'right',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    zIndex: 5
  },
  action: {
    display: 'flex',
    height: 30,
    borderRight: [1, 'solid', theme.borderColor],
    paddingRight: 20,
    marginLeft: 20,
    '&:last-child': {
      isolate: false,
      borderRight: 0,
      paddingRight: 0
    }
  },

  // Remove inlining with title
  [theme.media.md]: {
    actions: {
      float: 'none',
      justifyContent: 'flex-end',
      marginBottom: 20,
    }
  },

  // Remove widgets on mobile. Because there is no space for them
  [theme.media.sm]: {
    actions: {
      display: 'none'
    }
  }
}
