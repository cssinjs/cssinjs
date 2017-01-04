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
      size: 14,
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
    padding: [5, 0],
    fontSize: 16,
    opacity: 1,
  },
  level1: {
    paddingLeft: 15,
  },
  level2: {
    paddingLeft: 30,
  },

  // Inner content
  itemInner: {
    display: 'inline-block',
    verticalAlign: 'middle',
  }
}
