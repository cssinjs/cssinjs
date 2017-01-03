import theme from '../theme'

export default {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    opacity: 0.5,
    paddingRight: 1.5,
  },
  select: {
    cursor: 'pointer',
    background: 'transparent',
    outline: 'none',
    border: theme.border(theme.borderColor),
    color: theme.textColor,
    padding: [1, 1.5],
    font: {
      family: 'Arial, serif', // Because Chrome cant align main font correctly :(
      size: 1.4,
      lineHeight: 'normal',
    }
  }
}
