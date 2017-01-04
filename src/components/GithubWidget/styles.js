import theme from '../theme'

export default {
  githubWidget: {
    opacity: 0,
    color: theme.textColorInverse,
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
    maxHeight: 50,
  },
  text: {
    lineHeight: 50
  },
  icon: {
    margin: {
      top: -3,
      right: 8
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
