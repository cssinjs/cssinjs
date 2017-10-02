import React, {PropTypes} from 'react'
import cn from 'classnames'

import Icon from './Icon'

const Star = ({className}) => (
  <Icon>
    {({sheet: {classes}}) => (
      <svg
        className={cn(classes.icon, className)}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M3.333 20L5 12.308 0 7.692l6.667-1.538L10 0l3.333 6.154L20 7.692l-5 4.615L16.667 20 10 15.385 3.333 20z" />
      </svg>
    )}
  </Icon>
)

Star.propTypes = {
  className: PropTypes.string
}

Star.defaultProps = {
  className: ''
}

export default Star
