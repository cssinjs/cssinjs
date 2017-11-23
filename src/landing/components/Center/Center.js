import React from 'react'
import cn from 'classnames'
import injectSheet from 'common/utils/jss'

const styles = {
  container: {
    display: 'flex',
    width: '100%',
    height: '100%'
  },
  vertical: {
    alignItems: 'center'
  },
  horizontal: {
    justifyContent: 'center'
  },
  center: {
    composes: ['$vertical', '$horizontal']
  }
}

const Center = ({children, className, classes, horizontal, vertical}) => {
  const resultClasses = cn({
    [className]: true,
    [classes.container]: true,
    [classes.center]: !horizontal && !vertical,
    [classes.vertical]: vertical,
    [classes.horizontal]: horizontal
  })

  return (
    <div className={resultClasses}>
      {children}
    </div>
  )
}

Center.propTypes = {
  classes: React.PropTypes.object.isRequired,
  children: React.PropTypes.node.isRequired,
  className: React.PropTypes.string,
  horizontal: React.PropTypes.bool,
  vertical: React.PropTypes.bool
}

Center.defaultProps = {
  className: null,
  horizontal: false,
  vertical: false
}

export default injectSheet(styles)(Center)
