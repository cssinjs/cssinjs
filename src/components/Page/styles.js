import theme from '../../theme'

export default {
  page: {
    minHeight: '100vh',
    background: theme.pageBackground,
  },
  content: {
    maxWidth: 1000,
    margin: [0, 'auto'],
    padding: 50,
  },
  [theme.media.sm]: {
    content: {
      padding: [30, 20],
    }
  }
}
