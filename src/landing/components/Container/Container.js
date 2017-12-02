import React, {PropTypes} from 'react'
import cn from 'classnames'
import injectSheet from 'common/utils/jss'
import {lg as mediaLg} from 'common/constants/media'
import {content} from 'common/constants/size'

const styles = {
  container: {
    isolate: false,
    maxWidth: content,
    width: '100%',
    margin: [0, 'auto']
  },
  [mediaLg]: {
    container: {
      boxSizing: 'border-box',
      padding: [0, 20],
      width: '100%'
    }
  }
}

const Container = (props) => {
  const {children, className, classes} = props

  return (
    <div className={cn(className, classes.container)}>
      {children}
    </div>
  )
}

Container.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

Container.defaultProps = {
  className: null
}

export default injectSheet(styles)(Container)
