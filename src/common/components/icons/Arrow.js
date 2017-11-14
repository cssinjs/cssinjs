import React, {PropTypes} from 'react'
import cn from 'classnames'

import Icon from './Icon'

const Pencil = ({className}) => (
  <Icon>
    {({classes}) => (
      <svg
        className={cn(classes.icon, className)}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 45"
      >
        <path d="M15,35l-6,6V0H7v41l-6-6l-1,2l8,8l0,0l8-8L15,35z" />
      </svg>
    )}
  </Icon>
)

Pencil.propTypes = {
  className: PropTypes.string
}

Pencil.defaultProps = {
  className: ''
}

export default Pencil
