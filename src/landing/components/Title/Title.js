import React from 'react'
import cn from 'classnames'
import injectSheet from 'common/utils/jss'

const styles = {
  // TODO: Make colors
  title: {
    textAlign: 'center',
    color: 'green'
  },
  inverse: {
    color: 'blue'
  }
}

const Title = ({children, inverse, className, classes}) => (
  <h2 className={cn(className, classes.title, {[classes.inverse]: inverse})}>
    {children}
  </h2>
)

Title.propTypes = {
  classes: React.PropTypes.object.isRequired,
  children: React.PropTypes.node.isRequired,
  inverse: React.PropTypes.bool,
  className: React.PropTypes.string
}

Title.defaultProps = {
  inverse: false,
  className: null
}

export default injectSheet(styles)(Title)
