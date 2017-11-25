import React, {PropTypes} from 'react'
import cn from 'classnames'
import injectSheet from 'common/utils/jss'

const styles = theme => ({
  text: {
    color: theme.textColorLight,
    textAlign: 'center',
    opacity: 0.6,
    margin: [0, 0, 20]
  },
  inverse: {
    color: theme.textColorDark
  }
})

const Text = ({children, inverse, className, classes}) => (
  <div className={cn(className, classes.text, {[classes.inverse]: inverse})}>
    {children}
  </div>
)

Text.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
  inverse: PropTypes.bool,
  className: PropTypes.string
}

Text.defaultProps = {
  inverse: false,
  className: null
}

export default injectSheet(styles)(Text)
