import theme from '../theme'

export default {
  menuItem: {
    color: theme.textColorInverse,
    fill: theme.textColorInverse,
    display: 'block',
    textDecoration: 'none',
    transition: theme.transition(),
    opacity: 0.8,
    font: {
      weight: 400,
      size: 1.4,
    },
    '&:hover': {
      color: theme.textColorInverseActive,
      opacity: 1,
    }
  },
  active: {
    opacity: 1,
    color: theme.themeColor,
    '&:hover': {
      color: theme.themeColor,
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

  // Inner content
  itemInner: {
    display: 'inline-block',
    verticalAlign: 'middle',
  }
}
