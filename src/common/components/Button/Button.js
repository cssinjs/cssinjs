import React, {PropTypes} from 'react'
import injectSheet from 'common/utils/jss'
import cn from 'classnames'

const styles = theme => ({
  button: {
    display: 'flex',
    position: 'relative',
    padding: [6, 20],
    font: {
      family: theme.typography.fontFamily,
      size: theme.typography.fontSize,
      lineHeight: theme.typography.lineHeight,
      weight: 'normal'
    },
    letterSpacing: 1,
    cursor: 'pointer',
    userSelect: 'none',
    appearance: 'none',
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'uppercase',
    color: theme.text.dark,
    background: theme.background.dark,
    borderRadius: theme.radius,
    border: 'none',
    outline: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: 'none',
    transition: [{
      property: 'all',
      timingFunction: theme.transition.timingFunction,
      duration: theme.transition.duration
    }],
    '&:hover, &:active, &:focus': {
      isolate: false,
      color: theme.text.darkDeep,
      background: theme.background.darkDeep
    }
  },
  inverse: {
    isolate: false,
    color: theme.text.light,
    background: theme.background.light,
    '&:hover, &:active, &:focus': {
      isolate: false,
      color: theme.text.lightDeep,
      background: theme.background.lightDeep
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
