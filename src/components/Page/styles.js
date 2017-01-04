import theme from '../theme'

export default {
  page: {
    height: '100%',
  },
  content: {
    background: theme.pageBackground,
    minHeight: '100%',
  },
  inner: {
    maxWidth: 100,
    margin: [0, 'auto'],
    padding: 5,
  },
  hidden: {
    display: 'none',
  },

  // Change layout and spacings on smaller screens
  '@media (max-width: 620px)': {
    inner: {
      padding: [3, 2],
    }
  }
}
