import theme from '../theme'

export default {
  githubWidget: {
    opacity: 0,
    color: theme.textColorInverse,
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontWeight: 400,
    transition: theme.transition(),
    '&:hover': {
      opacity: 0.7,
    }
  },
  loaded: {
    opacity: 1
  },
  item: {
    textAlign: 'center',
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // Fix of justify-content for IE10
    MsFlexPack: 'center',
    width: '50%',
    // Fix for IE10
    maxHeight: 5,
  },
  text: {

  },
  icon: {
    margin: {
      top: -0.3,
      right: 0.8
    }
  },
  iconStar: {
    extend: 'icon',
    fill: theme.themeColor,
  },
  iconGithub: {
    extend: 'icon',
    fill: theme.textColorInverse,
  }
}
