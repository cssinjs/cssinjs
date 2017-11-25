import React, {PropTypes} from 'react'
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
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  horizontal: PropTypes.bool,
  vertical: PropTypes.bool
}

Center.defaultProps = {
  className: null,
  horizontal: false,
  vertical: false
}

export default injectSheet(styles)(Center)
