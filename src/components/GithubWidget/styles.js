import theme from '../theme'

export default {
  githubWidget: {
    color: theme.textColorInverse,
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontWeight: 400,
    opacity: 1,
    transition: theme.transition(),
    '&:hover': {
      opacity: 0.7,
    }
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
    lineHeight: 'normal',
    marginRight: 0.8,
    // Fix for wrong alignment.
    marginTop: -0.3,
    width: 1.5,
    '& svg': {
      width: 1.5,
    },
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
