import React, {PropTypes} from 'react'
import cn from 'classnames'
import injectSheet from 'common/utils/jss'

const Tabs = ({children: childrenProp, className, classes, active, onChange}) => {
  let index = 0
  const childrens = React.Children.map(childrenProp, child => React.cloneElement(child, {
    active: active === index,
    index: index++,
    onChange,
  }))

  return (
    <div className={cn(className, classes.tabs)}>
      {childrens}
    </div>
  )
}

Tabs.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
  active: PropTypes.number.isRequired,
  className: PropTypes.string,
}

Tabs.defaultProps = {
  className: null,
}

export default injectSheet({
  tabs: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
})(Tabs)
