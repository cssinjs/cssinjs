import React, {PropTypes} from 'react'
import cn from 'classnames'
import {translateZ} from 'css-functions'

import injectSheet from '../../utils/jss'
import theme from '../../theme'

const styles = {
  logo: {
    display: 'inline-block',
    width: '100%',
    height: '100%',
    position: 'relative'
  },
  block: {
    position: 'absolute',
    left: 0,
    top: '10%',
    right: '20%',
    bottom: '10%',
    zIndex: 1,
    borderWidth: 2,
    borderStyle: 'solid'
  },
  text: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 2,
    transform: translateZ(30)
  },
  textUnder: {
    composes: '$text',
    opacity: 0.1,
    transform: translateZ(0)
  }
}

const viewBox = '0 0 120 120'
const d = 'M64.294 86.574c1.903 3.108 4.379 5.392 8.759 5.392 3.679 0 6.029-1.839 6.029-4.379 0-3.044-2.414-4.123-6.464-5.894l-2.219-.952c-6.407-2.729-10.663-6.149-10.663-13.378 0-6.659 5.073-11.728 13.003-11.728 5.645 0 9.704 1.965 12.628 7.109l-6.914 4.439c-1.522-2.73-3.164-3.805-5.714-3.805-2.601 0-4.249 1.65-4.249 3.805 0 2.663 1.65 3.742 5.459 5.392l2.22.951c7.544 3.235 11.803 6.533 11.803 13.948 0 7.993-6.279 12.373-14.713 12.373-8.246 0-13.573-3.929-16.18-9.079 0-.002 7.215-4.194 7.215-4.194zm32.029 0c1.903 3.108 4.379 5.392 8.759 5.392 3.679 0 6.029-1.839 6.029-4.379 0-3.044-2.414-4.123-6.464-5.894l-2.219-.952c-6.407-2.729-10.663-6.149-10.663-13.378 0-6.659 5.073-11.728 13.003-11.728 5.645 0 9.704 1.965 12.628 7.109l-6.914 4.439c-1.522-2.73-3.164-3.805-5.714-3.805-2.601 0-4.249 1.65-4.249 3.805 0 2.663 1.65 3.742 5.459 5.392l2.22.951C115.741 76.76 120 80.058 120 87.473c0 7.993-6.279 12.373-14.713 12.373-8.246 0-13.573-3.929-16.18-9.079l7.216-4.193zm-63.393.77c1.395 2.475 2.664 4.567 5.714 4.567 2.917 0 4.757-1.141 4.757-5.579V56.141h8.878v30.31c0 9.193-5.39 13.378-13.258 13.378-7.109 0-11.226-3.679-13.32-8.11l7.229-4.375c0-.001 0 0 0 0z'

const Logo = ({sheet, className, strokeColor, backgroundColor, textColor}) => {
  const {classes} = sheet

  return (
    <div className={cn(classes.logo, className)}>
      <div
        className={classes.block}
        style={{
          borderColor: strokeColor,
          background: backgroundColor
        }}
      />
      <svg className={classes.textUnder} viewBox={viewBox}>
        <filter id="logoBlur">
          <feGaussianBlur stdDeviation="1" />
        </filter>
        <path filter="url(#logoBlur)" fill={textColor} d={d} />
      </svg>
      <svg className={classes.text} viewBox={viewBox}>
        <path fill={textColor} d={d} />
      </svg>
    </div>
  )
}

Logo.propTypes = {
  sheet: PropTypes.object.isRequired,
  strokeColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  className: PropTypes.string
}

Logo.defaultProps = {
  strokeColor: theme.textColorInverse,
  backgroundColor: 'transparent',
  textColor: theme.textColorInverseActive
}

export default injectSheet(styles)(Logo)
