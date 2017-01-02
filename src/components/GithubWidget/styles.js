import vars from '../../styles/vars'

export default {
  container: {
    color: vars.textColorInverse,
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontWeight: 400,
    opacity: 1,
    transition: vars.transition(),
    '&:hover': {
      opacity: 0.7,
    }
  },
  containerHidden: {
    extend: 'container',
    opacity: 0,
  },
  item: {
    textAlign: 'center',
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '-ms-flex-pack': 'center', // justify-content fix for IE10
    width: '50%',
    padding: 0.5,
    maxHeight: 5, // Fix for IE10
  },
  text: {

  },
  icon: {
    lineHeight: 'normal',
    marginRight: 0.8,
    marginTop: -0.3, // Fix for wring browser alignment
    width: 1.5,
    '& svg': {
      width: 1.5,
    },
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
