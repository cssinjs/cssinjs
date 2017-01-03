import theme from '../theme'

export default {
  editLink: {
    display: 'block',
    background: 'none',
    lineHeight: 2,
    transition: theme.transition(),
    color: theme.textColor,
    fill: theme.textColor,
    opacity: 0.7,
    textTransform: 'uppercase',
    textDecoration: 'none',
    fontWeight: 400,
    padding: [1, 0],
    '&:hover': {
      opacity: 1,
    }
  },
  icon: {
    paddingRight: 0.8,
    marginTop: -0.1
  },
  text: {
    verticalAlign: 'middle'
  }
}
