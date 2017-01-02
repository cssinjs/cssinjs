import vars from '../../styles/vars'

export default {
  item: {
    color: vars.textColorInverse,
    display: 'block',
    textDecoration: 'none',
    transition: vars.transition(),
    opacity: 0.8,
    font: {
      weight: 400,
      size: 1.4,
    },
    '&:hover': {
      color: vars.textColorInverseActive,
      opacity: 1,
    }
  },
  active: {
    opacity: 1,
    color: vars.themeColor,
    '&:hover': {
      color: vars.themeColor,
    }
  },

  // Nesting levels
  level0: {
    padding: [0.5, 0],
    fontSize: 1.6,
    opacity: 1,
  },
  level1: {
    paddingLeft: 1.5,
  },
  level2: {
    paddingLeft: 3,
  },
}
