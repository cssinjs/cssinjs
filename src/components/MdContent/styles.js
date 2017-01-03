import vars from '../../styles/vars'

export default {
  container: {},
  content: {
    position: 'relative',
  },
  markdown: {
    display: 'block'
  },
  actions: {
    float: 'right',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    zIndex: 5,
  },
  action: {
    borderRight: [1, 'solid', vars.borderColor],
    paddingRight: 2,
    marginLeft: 2,
    '&:last-child': {
      borderRight: 0,
      paddingRight: 0,
    }
  },

  // Remove inlining with title
  '@media (max-width: 1024px)': {
    actions: {
      float: 'none',
      justifyContent: 'flex-end',
      marginBottom: 2,
    }
  },

  // Remove widgets on mobile. Because there is no space for them
  '@media (max-width: 600px)': {
    actions: {
      display: 'none',
    }
  },
}
