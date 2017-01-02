import vars from '../../styles/vars'

export default {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    opacity: 0.5,
    paddingRight: 1.5,
  },
  selectWrap: {
    // Here custom corner is placed
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 1,
      width: 0,
      height: 0,
      margin: 'auto',
      border: ['4px', 'solid', vars.borderColor],
      borderBottom: 0,
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
    }
  },
  select: {
    cursor: 'pointer',
    position: 'relative',
    zIndex: 2, // Must be on top
    appearance: 'none',
    background: 'transparent',
    outline: 'none',
    border: vars.border(vars.borderColor),
    color: vars.textColor,
    padding: [0.8, 2.5, 0.8, 1.5],
    font: {
      family: vars.fontFamily,
      size: vars.fontSize,
      lineHeight: 'normal',
    },

  }
}