import React from 'react'
import cn from 'classnames'
import injectSheet from 'common/utils/jss'
import {content} from '../../constants/size'
import {lg as mediaLg} from '../../constants/media'

const styles = theme => ({
  container: {
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
})

const Container = (props) => {
  const {children, className, classes} = props

  return (
    <div className={cn(className, classes.container)}>
      {children}
    </div>
  )
}

Container.propTypes = {
  sheet: React.PropTypes.object.isRequired,
  children: React.PropTypes.node.isRequired,
  className: React.PropTypes.string
}

export default injectSheet(styles)(Container)
