import theme from '../../theme'

export default {
  versionSelect: {
    display: 'flex',
    alignItems: 'center',
  },
  select: {
    cursor: 'pointer',
    background: 'transparent',
    outline: 'none',
    border: theme.border(theme.borderColor),
    color: theme.textColor,
    padding: 6,
    width: 70,
    height: '100%',
    font: {
      family: 'Arial, serif', // Because Chrome cant align main font correctly :(
      size: 14,
      lineHeight: 'normal',
    }
  }
}
