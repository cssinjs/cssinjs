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
    left: '20%',
    bottom: '10%',
    width: '80%',
    zIndex: 2,
    transform: translateZ(30)
  },
  textUnder: {
    composes: '$text',
    opacity: 0.1,
    transform: translateZ(0)
  }
}

const d = 'M3.95507813,11 L3.95507813,8.42919922 L0.139160156,8.42919922 L0.139160156,7.22070312 L4.16015625,0.262695312 L5.0390625,0.262695312 L5.0390625,7.22070312 L6.23291016,7.22070312 L6.23291016,8.42919922 L5.0390625,8.42919922 L5.0390625,11 L3.95507813,11 Z M3.95507812,7.22070312 L3.95507812,2.37939453 L1.20117188,7.22070312 L3.95507812,7.22070312 Z M7.33154297,5.70458984 C7.33154297,3.90282302 7.57446046,2.53809058 8.06030273,1.61035156 C8.54614501,0.682612549 9.26269058,0.21875 10.2099609,0.21875 C11.0498089,0.21875 11.7114234,0.594722803 12.1948242,1.34667969 C12.7807646,2.25488735 13.0737305,3.70750955 13.0737305,5.70458984 C13.0737305,7.49659099 12.8320337,8.85766136 12.3486328,9.7878418 C11.865232,10.7180222 11.1474657,11.1831055 10.1953125,11.1831055 C9.35546455,11.1831055 8.66821556,10.7729533 8.13354492,9.95263672 C7.59887428,9.13232012 7.33154297,7.71631865 7.33154297,5.70458984 L7.33154297,5.70458984 Z M8.4375,5.70458984 C8.4375,7.44776262 8.60473466,8.61596383 8.93920898,9.20922852 C9.27368331,9.8024932 9.70214583,10.0991211 10.2246094,10.0991211 C10.7177759,10.0991211 11.1303694,9.79883113 11.4624023,9.19824219 C11.7944353,8.59765325 11.9604492,7.43311411 11.9604492,5.70458984 C11.9604492,3.95653423 11.7932146,2.78711233 11.4587402,2.19628906 C11.1242659,1.6054658 10.6909206,1.31005859 10.1586914,1.31005859 C9.67040771,1.31005859 9.26147626,1.61034856 8.93188477,2.2109375 C8.60229327,2.81152644 8.4375,3.97606558 8.4375,5.70458984 L8.4375,5.70458984 Z M17.6367188,11 L17.6367188,8.42919922 L13.8208008,8.42919922 L13.8208008,7.22070312 L17.8417969,0.262695312 L18.7207031,0.262695312 L18.7207031,7.22070312 L19.9145508,7.22070312 L19.9145508,8.42919922 L18.7207031,8.42919922 L18.7207031,11 L17.6367188,11 Z M17.6367188,7.22070312 L17.6367188,2.37939453 L14.8828125,7.22070312 L17.6367188,7.22070312 Z'
const viewBox = '0 0 20 12'

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
