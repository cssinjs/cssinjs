import React, {PropTypes} from 'react'
import injectSheet from 'common/utils/jss'
import cn from 'classnames'

const styles = theme => ({
  button: {
    display: 'flex',
    position: 'relative',
    padding: [6, 20],
    font: {
      family: theme.fontFamily,
      size: theme.fontSize,
      lineHeight: theme.lineHeight,
      weight: 'normal'
    },
    letterSpacing: 1,
    cursor: 'pointer',
    userSelect: 'none',
    appearance: 'none',
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'uppercase',
    color: theme.textColorDark,
    background: theme.backgroundDark,
    borderRadius: theme.radius,
    border: 'none',
    outline: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: 'none',
    transition: [{
      property: 'all',
      timingFunction: theme.transitionTimingFunction,
      duration: theme.transitionDuration
    }],
    '&:hover, &:active, &:focus': {
      isolate: false,
      color: theme.textColorDarkDeep,
      background: theme.backgroundDarkDeep
    }
  },
  inverse: {
    isolate: false,
    color: theme.textColorLight,
    background: theme.backgroundLight,
    '&:hover, &:active, &:focus': {
      isolate: false,
      color: theme.textColorLightDeep,
      background: theme.backgroundLightDeep
    }
  },
  big: {
    isolate: false,
    padding: [12, 30]
  }
})

const Button = ({children, classes, href, inverse, big}) => {
  const buttonClasses = cn({
    [classes.button]: true,
    [classes.inverse]: inverse,
    [classes.big]: big
  })

  return (
    <a className={buttonClasses} href={href}>
      {children}
    </a>
  )
}

Button.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  inverse: PropTypes.bool,
  big: PropTypes.bool,
}

Button.defaultProps = {
  inverse: false,
  big: false,
}

export default injectSheet(styles)(Button)
