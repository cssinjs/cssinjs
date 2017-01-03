import vars from '../../styles/vars'

export default {
  heading: {
    position: 'relative',
    '&:hover $anchor': {
      opacity: 1,
    }
  },
  anchor: {
    transition: vars.transition(),
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: '100%',
    marginRight: 0.5,
    opacity: 0,
  },
  icon: {
    width: vars.fontSize,
    height: 'auto',
  }
}
