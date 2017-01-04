import theme from '../theme'

export default {
  page: {
    minHeight: '100vh',
    background: theme.pageBackground,
  },
  inner: {
    maxWidth: 1000,
    margin: [0, 'auto'],
    padding: 50,
  },
  hidden: {
    display: 'none',
  },

  // Change layout and spacings on smaller screens
  [theme.media.sm]: {
    inner: {
      padding: [30, 20],
    }
  }
}
