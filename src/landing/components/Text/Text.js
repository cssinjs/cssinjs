import React, {PropTypes} from 'react'
import cn from 'classnames'
import injectSheet from 'common/utils/jss'

const styles = theme => ({
  text: {
    color: theme.textColorLight,
    margin: [0, 0, 20]
  },
  inverse: {
    isolate: false,
    color: theme.textColorDark
  },
  muted: {
    isolate: false,
    opacity: 0.6
  },
  centered: {
    isolate: false,
    textAlign: 'center'
  },
  narrow: {
    isolate: false,
    maxWidth: 750,
    margin: [0, 'auto', 20]
  }
})

const Text = ({children, inverse, narrow, muted, centered, className, classes}) => (
  <div
    className={cn(
      className,
      classes.text,
      inverse && classes.inverse,
      narrow && classes.narrow,
      muted && classes.muted,
      centered && classes.centered
    )}
  >
    {children}
  </div>
)

Text.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
  inverse: PropTypes.bool,
  narrow: PropTypes.bool,
  muted: PropTypes.bool,
  centered: PropTypes.bool,
  className: PropTypes.string
}

Text.defaultProps = {
  inverse: false,
  narrow: false,
  muted: false,
  centered: false,
  className: null
}

export default injectSheet(styles)(Text)
