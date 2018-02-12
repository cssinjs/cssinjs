import theme from '../../theme'

export default {
  editLink: {
    display: 'flex',
    alignItems: 'center',
    background: 'none',
    transition: theme.transition(),
    color: theme.textColor,
    fill: theme.textColor,
    opacity: 0.7,
    textDecoration: 'none',
    font: {
      size: 14,
      weight: 400,
    },
    '&:hover': {
      isolate: false,
      opacity: 1,
      cursor: 'pointer'
    }
  },
  icon: {
    paddingRight: 8,
    marginTop: -1,
    cursor: 'inherit'
  },
  text: {
    lineHeight: 1,
    verticalAlign: 'middle',
    textTransform: 'uppercase',
    cursor: 'inherit'
  }
}
