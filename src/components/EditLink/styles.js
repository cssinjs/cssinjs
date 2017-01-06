import theme from '../../theme'

export default {
  editLink: {
    display: 'block',
    background: 'none',
    lineHeight: 1.5,
    transition: theme.transition(),
    color: theme.textColor,
    fill: theme.textColor,
    opacity: 0.7,
    textDecoration: 'none',
    fontWeight: 400,
    '&:hover': {
      isolate: false,
      opacity: 1,
    }
  },
  icon: {
    paddingRight: 8,
    marginTop: -1
  },
  text: {
    verticalAlign: 'middle',
    textTransform: 'uppercase'
  }
}
