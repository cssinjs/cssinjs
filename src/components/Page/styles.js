export default {
  container: {
    height: '100%',
  },
  content: {
    minHeight: '100%',
    maxWidth: 100,
    margin: [0, 'auto'],
    padding: 5,
  },
  hidden: {
    display: 'none',
  },

  // Change layout and spacings on smaller screens
  '@media (max-width: 1320px)': {
    content: {
      border: 'none',
    }
  },
  '@media (max-width: 620px)': {
    content: {
      padding: [3, 2],
    }
  }
}
