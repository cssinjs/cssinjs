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

  '@media (max-width: 1024px)': {
    actions: {
      float: 'none',
      justifyContent: 'flex-end',
    }
  }
}
