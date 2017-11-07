export default theme => ({
  githubWidget: {
    opacity: 0,
    color: 'inherit',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontWeight: 400,
    transition: theme.transition(),
    '&:hover': {
      isoalte: false,
      opacity: 0.7
    }
  },
  loaded: {
    opacity: 1
  },
  item: {
    marginLeft: 20,
    textAlign: 'center',
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // Fix of justify-content for IE10
    MsFlexPack: 'center',
    // Fix for IE10
    maxHeight: 50,
    '&:first-child': {
      marginLeft: 0
    }
  },
  text: {
    lineHeight: 5
  },
  icon: {
    margin: {
      top: -3,
      right: 8
    }
  },
  iconStar: {
    extend: 'icon',
    fill: theme.color,
  },
  iconGithub: {
    extend: 'icon',
   fill: 'currentColor',
  }
})
