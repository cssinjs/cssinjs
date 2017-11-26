import React, {PropTypes} from 'react'
import cn from 'classnames'
import injectSheet from 'common/utils/jss'

const styles = theme => ({
  title: {
    color: theme.textColorLight,
    fontWeight: 'normal',
    fontSize: 32,
    textTransform: 'uppercase',
    letterSpacing: 1,
    margin: [0, 0, 20]
  },
  inverse: {
    isolate: false,
    color: theme.textColorDark
  },
  small: {
    isolate: false,
    fontSize: 24
  },
  centered: {
    isolate: false,
    textAlign: 'center'
  }
})

const Title = ({children, inverse, small, centered, className, classes}) => (
  <h2
    className={cn(
      className,
      classes.title,
      inverse && classes.inverse,
      small && classes.small,
      centered && classes.centered
    )}
  >
    {children}
  </h2>
)

Title.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
  inverse: PropTypes.bool,
  small: PropTypes.bool,
  centered: PropTypes.bool,
  className: PropTypes.string
}

Title.defaultProps = {
  inverse: false,
  small: false,
  centered: false,
  className: null
}

export default injectSheet(styles)(Title)
