import React from 'react'
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
      color: theme.textColorDarkDeep,
      background: theme.backgroundDarkDeep
    }
  },
  inverse: {
    color: theme.textColorLight,
    background: theme.backgroundLight,
    '&:hover, &:active, &:focus': {
      color: theme.textColorLightDeep,
      background: theme.backgroundLightDeep
    }
  }
})

const Button = (props) => {
  const {children, classes, href, inverse} = props
  const buttonClasses = cn({
    [classes.button]: true,
    [classes.inverse]: inverse
  })

  return (
    <a className={buttonClasses} href={href}>
      {children}
    </a>
  )
}

Button.propTypes = {
  classes: React.PropTypes.object.isRequired,
  children: React.PropTypes.node.isRequired,
  href: React.PropTypes.string.isRequired,
  inverse: React.PropTypes.bool
}

Button.defaultProps = {
  inverse: false
}

export default injectSheet(styles)(Button)
