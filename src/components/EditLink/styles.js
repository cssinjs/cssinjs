import vars from '../../styles/vars'

export default {
  button: {
    textDecoration: 'none',
    display: 'block',
    background: 'none',
    lineHeight: 2,
    transition: vars.transition(),
    color: vars.textColor,
    fill: vars.textColor,
    opacity: 0.7,
    textTransform: 'uppercase',
    fontWeight: 400,
    padding: [1, 0],
    '&:hover': {
      opacity: 1,
    }
  },
  icon: {
    paddingRight: 0.8,
    marginTop: -0.1,
    display: 'inline-block',
    lineHeight: 'normal',
  },
  text: {
    verticalAlign: 'middle'
  }
}
