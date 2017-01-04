import theme from '../theme'

export default {
  versionSelect: {
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    opacity: 0.5,
    paddingRight: 15,
  },
  select: {
    cursor: 'pointer',
    background: 'transparent',
    outline: 'none',
    border: theme.border(theme.borderColor),
    color: theme.textColor,
    padding: [10, 15],
    font: {
      family: 'Arial, serif', // Because Chrome cant align main font correctly :(
      size: 14,
      lineHeight: 'normal',
    }
  }
}
