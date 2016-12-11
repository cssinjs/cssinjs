import color from 'color'
import vars from '../../styles/vars'

export default {
  button: {
    textDecoration: 'none',
    padding: [1, 2],
    border: ['2px', 'solid', vars.textColor],
    display: 'block',
    background: 'none',
    lineHeight: 'normal',
    transition: vars.transition(),
    color: vars.textColor,
    fill: vars.textColor,
    '&:hover': {
      background: color(vars.cardColor).hexString()
    }
  },
  icon: {
    paddingRight: 1,
    display: 'inline-block',
    lineHeight: 'normal',
    '& svg': {
      height: 2
    }
  },
  text: {
    verticalAlign: 'middle'
  }
}
