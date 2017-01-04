import theme from '../theme'

export default {
  heading: {
    position: 'relative',
    '&:hover $headingAnchor': {
      opacity: 1,
    }
  },
  headingAnchor: {
    transition: theme.transition(),
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 1.5,
    right: '100%',
    marginRight: 0.5,
    opacity: 0,
  }
}
