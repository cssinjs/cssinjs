import vars from '../../styles/vars'

export default {
  container: {
    color: vars.textColorInverse,
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    border: vars.border(vars.sidebarBorder),
    textDecoration: 'none',
    transition: vars.transition(),
    '&:hover': {
      backgroundColor: vars.sidebarBgActive,
    }
  },
  containerHidden: {
    extend: 'container',
    opacity: 0,
  },
  item: {
    textAlign: 'center',
    borderLeft: vars.border(vars.sidebarBorder),
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    padding: 0.5,
    '&:first-child': {
      borderLeft: 'none',
    }
  },
  text: {

  },
  icon: {
    lineHeight: 'normal',
    marginRight: 0.8,
    marginTop: -0.5, // Fix for wring browser alignment
    width: 1.5,
    height: 'auto',
  },
  iconStar: {
    extend: 'icon',
    fill: vars.themeColor,
  },
  iconGithub: {
    extend: 'icon',
    fill: vars.textColorInverse,
  }
}
