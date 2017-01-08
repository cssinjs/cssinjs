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
    zIndex: 5,
    marginLeft: 20
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
    },
    '&:first-child': {
      marginLeft: 0
    }
  },
  // Removes inlining with title.
  [theme.media.md]: {
    actions: {
      float: 'none',
      justifyContent: 'flex-end',
      marginBottom: 20,
    }
  },
  [theme.media.sm]: {
    actions: {
      justifyContent: 'center'
    }
  }
}
