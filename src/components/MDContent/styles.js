import vars from '../../styles/vars'

export default {
  container: {

  },
  // Main content
  content: {
    opacity: 0,
    visibility: 'hidden',
    transition: vars.transition('300ms', '300ms'),
  },
  contentLoaded: {
    composes: '$content',
    opacity: 1,
    visibility: 'visible',
  },
  // Loader
  loader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 5,
    transition: vars.transition(),
  },
  loaded: {
    composes: '$loader',
    opacity: 0,
    visibility: 'hidden',
  }
}
